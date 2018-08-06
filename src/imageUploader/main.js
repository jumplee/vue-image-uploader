import Uploader from '../uploader'
import BaseViewCtrl from '../baseViewCtrl'
import props from '../props'
/**
 *  
 *  vue的图片上传组件
 * 
 */

export default Object.assign({},BaseViewCtrl,{
  props: props,

  created(){
    var self = this
    var uploader = new Uploader(Object.assign({}, {
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress,
      thumb: true,
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
  }
})
