import Uploader from '../uploader'
import props from '../props'
import baseView from '../baseView'
import template from './index.html'
import styles from '../uploader.scss'
import addPic from '../images/add.png'
import okPic from '../images/ok.png'
import loaderSvg from '../images/loader.svg'
import videoPic from '../images/video.png'

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
 *  视频上传组件
 *
 */

export default {
  name: 'videoUploader',
  template: template,
  props: newProps,
  mixins: [baseView],
  data(){
    return {
      showDialog: false,
      pic: {
        addPic,
        okPic,
        videoPic,
        loaderSvg
      },
      styles: styles,
      files: [],
      uploadSuccessNum: 0,
      boxWidth: 0,
      uploadFinish: true,
      maskText: '',
      showPanelMask: false
    }
  },
  created(){
    var ctrl = this
    ctrl.$style = this.styles
    var uploader = new Uploader(Object.assign({}, {
      uploadUrl: ctrl.url,
      accept: ctrl.accept,
      showProgress: ctrl.showProgress,
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

