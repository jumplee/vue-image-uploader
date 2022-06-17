import Uploader from '../uploader'
import props from '../props'
import baseView from '../baseView'
import template from './index.html'

/**
 *
 *  vue的图片上传组件
 *
 */

export default {
  name: 'imageUploader',
  template: template,
  mixins: [baseView],
  props: props,
  created(){
    var ctrl = this
    ctrl.$style = this.styles
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
  }
}
