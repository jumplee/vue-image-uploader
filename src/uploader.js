import Ctrl from './ctrl'
import { where, uuid, UPLOAD_STATUS, log, createObjectURL } from './func'

/**
 * @version 0.1.1 上传组件
 */
class Uploader extends Ctrl{
  constructor(options){
    super()
    var self = this
    self._files = []
    self._queue = []
    self.queueIndex = 0
    var defaultOptions = {
      uploadUrl: '',
      // 最多选择数量，默认为0不限制
      maxSize: 0,
      // 同时上传的最多数量
      uploadFileMax: 5,
      // 向后台传递的参数
      param: {},
      fileParamName: 'file',
      timeout: 60 * 5,
      // 只接受类型或者正则
      /**
       * @example
       * accept:['jpg','png','bmp','gif','jpeg']
       */
      accept: [],
      // 是否有预览图
      thumb: false,
      // 默认不压缩
      compress: false
    }
    if (!options.uploadUrl){
      throw Error('上传地址不能为空')
    }
    // 浅拷贝，对象属性会覆盖而不是合并
    self.options = Object.assign({}, defaultOptions, options)
  }

  /**
     * 上传
     */
  upload(){
    var self = this
    var options = self.options

    if(self.haveUploading()){
      log('正在上传，请等待')
      return false
    }
    const files = self._files
    const queue = []
    // 上传的时候将上传失败的文件设置为等待
    files.forEach((item) => {
      if (item.status === UPLOAD_STATUS.FAILED){
        item.status = UPLOAD_STATUS.WAIT
      }
    })

    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(file.status === UPLOAD_STATUS.WAIT){
        file.index = i
        queue.push(file)
      }
    }
    self._queue = queue
    var len = Math.min(options.uploadFileMax, queue.length)
    for (var i = 0; i < len; i++){
      self._upload()
    }
  }
  _upload(){
    var self = this
    const file = self._queue[self.queueIndex]
    self.queueIndex++
    if(typeof file === 'undefined'){
      log('已经上传到最后')
      return false
    }
    var options = self.options
    const xhr = new XMLHttpRequest()
    // 超时
    console.log(options.timeout)
    xhr.timeout = options.timeout * 1000
    const formData = new FormData()
    formData.append(options.fileParamName, file.source)
    for (var key in options.param){
      formData.append(key, options.param[key])
    }

    file.status = UPLOAD_STATUS.UPLOAD_ING
    xhr.onload = function(){
      if (xhr.status < 200 || xhr.status >= 300){
        log(xhr.status)
        self.onFail(file)
        // return option.onError(getError(action, option, xhr), getBody(xhr));
      }

      let json = {}
      // 不要将onSuccess或者onError包括道try中
      // 避免回调函数中报错触发catch
      try {
        json = JSON.parse(xhr.responseText)
        if (json.success){
          self.onSuccess(file, json)
        } else {
          self.onFail(file)
        }
      } catch (e){
        // 返回的不是json格式
        self.onFail(file)
      }
    }
    function onNetError(){
      self.onFail(file)
    }
    // 无网络等原因导致错误
    xhr.onerror = onNetError
    // 请求超时
    xhr.ontimeout = onNetError
    function updateProgress(event){
      var complete = (event.loaded / event.total * 100 | 0)
      file.percent = complete
      self.trigger('progress', file)
    }
    if(options.showProgress){
      xhr.upload.onprogress = updateProgress
    }
    // progress事件需要注册在open之前，否则无响应
    xhr.open('post', options.uploadUrl)
    xhr.send(formData)
  }
  // 是否正在上传
  haveUploading(){
    var self = this
    let haveUploading = false
    for(const item of self._files){
      if(item.status === UPLOAD_STATUS.UPLOAD_ING){
        haveUploading = true
        break
      }
    }
    return haveUploading
  }
  onEnd(file){
    var self = this
    self._upload()
    // 所有的文件都执行完毕，未必都成功
    if (!self.haveUploading()){
      let _flag = true
      self.queueIndex = 0
      self._files.forEach((item) => {
        if (item.status === UPLOAD_STATUS.FAILED){
          _flag = false
          return false
        }
      })
      self.trigger('finish', _flag)
    }
  }
  onSuccess(file, json){
    var self = this
    file.status = UPLOAD_STATUS.SUCESS
    file.returnJson = json
    self.trigger('uploadSuccess', file)
    self.onEnd(file)
  }
  onFail(file){
    var self = this
    file.status = UPLOAD_STATUS.FAILED
    self.trigger('uploadFail', file)
    self.onEnd(file)
  }
  addFile(sourceFile){
    var self = this
    var options = self.options
    var ext = sourceFile.name.split('.').pop().toLowerCase()
    if (options.accept.indexOf(ext) < 0){
      options.onAcceptError({
        name: sourceFile.name,
        ext: ext
      })
      return false
    }
    var file = {
      source: sourceFile,
      id: uuid(),
      status: UPLOAD_STATUS.WAIT,
      thumb: '',
      name: sourceFile.name,
      size: sourceFile.size
    }

    self._files.push(file)
    if (options.thumb){
      if (options.compress){
        self._makeThumb(file)
      } else {
        file.thumb = createObjectURL(sourceFile)
      }
    }
  }
  removeFile(file){
    var targetIndex = -1
    this._files.forEach((item, index) => {
      if (item.id === file.id){
        targetIndex = index
      }
    })
    this._files.splice(targetIndex, 1)
  }
  _makeThumb(file){
    this.makeThumb(file.source, (thumbUrl) => {
      file.thumb = thumbUrl
    })
  }
  makeThumb(sourceFile, callback){
    var thumbOptions = this.options.thumb
    var blob_url = createObjectURL(sourceFile)
    var temp_image = new Image()
    var canvas = document.createElement('canvas')
    var preview_width = thumbOptions.width
    var preview_height = thumbOptions.height
    temp_image.src = blob_url
    canvas.width = preview_width
    canvas.height = preview_height
    var ctx = canvas.getContext('2d')
    temp_image.onload = function(){
      ctx.drawImage(temp_image, 0, 0, preview_width, preview_height)
      // 清空原来的BLOB对象，释放内存。
      window.URL.revokeObjectURL(this.src)
      // 耗时操作
      var blob_image_url = canvas.toDataURL('image/jpeg')
      callback(blob_image_url)
      // 切除引用关系
      // delete temp_image;
      // delete canvas;
      // delete ctx;
      this.src = null
      canvas = null
      ctx = null
      temp_image.onload = null
      temp_image = null
    }
  }
  stop(){

  }

  getFiles(){
    return this._files
  }
  /**
   * 将上传队列清空
   */
  clear(){
    //
    this._files = []
  }
}
module.exports = Uploader
