import Uploader from '../uploader'
import BaseViewCtrl from '../baseViewCtrl'
import props from '../props'

/**
 *
 *  vue的图片上传组件
 *
 */

export default Object.assign({}, BaseViewCtrl, {
  props: props,

  created(){
    var ctrl = this
    var uploader = new Uploader(Object.assign({}, {
      uploadUrl: ctrl.url,
      accept: ctrl.accept,
      showProgress: ctrl.showProgress,
      thumb: true,
      onAcceptError: function(e){
        alert(e.ext + '类型文件不符合要求')
      }
    }, ctrl.uploadConfig))
    ctrl._uploader = uploader
    uploader.on('finish', function(success){
      ctrl.files = ctrl.files.concat()
      ctrl.uploadFinish = true
    })
    uploader.on('progress', (file) => {
      // let newFile=Object.assign({},file)
      ctrl.files.splice(file.index, 1, file)
    })
    if(ctrl.draggable){
      ctrl.initDragAndResize()
    }
  }

})
