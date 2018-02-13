import Uploader from '../uploader'
import { where, log } from '../func'
import props from '../props'
const newProps = Object.assign({}, props, {
  accept: {
    type: Array,
    default: function(){
      return ['flv', 'mkv', 'avi', 'rm', 'rmvb', 'mpeg', 'mpg',
        'ogg', 'ogv', 'mov', 'wmv', 'mp4', 'webm', 'mp3', 'wav']
    }
  },
  fileAccept: {
    default: '*'
  },
  uploadConfig: {
    default: function(){
      return{
        // 三十分钟等待
        timeout: 30 * 60
      }
    },
    type: Object
  }
})
/**
 *  
 *  vue的视频上传组件
 * 
 */

export default {
  props: newProps,
  data(){
    return {
      files: [],
      uploadSuccessNum: 0,
      boxWidth: 0,
      uploadFinish: true,
      showPanelMask: false
    }
  },
  created(){
    var self = this
    log(self.uploadConfig)
    var uploader = new Uploader(Object.assign({}, {
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress,
      onAcceptError: function(e){
        alert(e.ext + '类型文件不符合要求')
      }
    }, self.uploadConfig))
    self._uploader = uploader
    uploader.on('finish', function(success){
      self.files = self.files.concat()
      self.uploadFinish = true
    })
    uploader.on('progress', (file) => {
      // let newFile=Object.assign({},file)
      self.files.splice(file.index, 1, file)
    })
  },

  watch: {
    show(newVal){
      // 当打开的时候
      if (newVal){
        //禁止body滚动
        document.body.style.overflow='hidden'
        this.files = this._uploader.getFiles()
      }
    },
    files(newVal){
      let num = 0
      newVal.forEach((item) => {
        if(item.returnJson && item.returnJson.success){
          num++
        }
      })
      log('files update')
      this.uploadSuccessNum = num
    }
  },

  methods: {
    selectFile: function(e){
      var files = e.target.files
      var self = this
      for (var i = 0; i < files.length; i++){
        var file = files[i]
        self._uploader.addFile(file)
      }
      // 避免vue不更新
      self.files = self._uploader.getFiles()
    },
    up: function(){
      // 没有需要选择的图片
      if(this.files.length - this.uploadSuccessNum > 0){
        if(this.uploadFinish){
          this.uploadFinish = false
          this._uploader.upload()
        }
      }else{
        alert('请选择图片')
      }
    },
    mask(){
      // this.showPanelMask = true
    },
    del: function(file){
      this._uploader.removeFile(file)
      this.files = this._uploader.getFiles()
    },
    addFile(){
      this.$refs.fileInput.value = null
      this.$refs.fileInput.click()
    },
    close(cancel){
      const self = this
      var files = []
      //不再禁止滚动
      document.body.style.overflow=''
      if (!cancel){
        self.files.forEach((item) => {
          if (item.returnJson && item.returnJson.success){
            files.push(item.returnJson)
          }
        })
      }
      self.$emit('finish', files)
      self.files = []
      // 上传状态
      self.uploadFinish = true
      self.uploadSuccessNum = 0
      self._uploader.clear()
    },
    percentStyle(file){
      return {
        width: file.percent + '%'
      }
    }
  }
}
