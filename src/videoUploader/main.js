import Uploader from '../uploader'
import BaseViewCtrl from '../baseViewCtrl'
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
 *  视频上传组件
 * 
 */

export default Object.assign({},BaseViewCtrl,{
  props: newProps,
  data(){
    return {
      files: [],
      uploadSuccessNum: 0,
      boxWidth: 0,
      uploadFinish: true,
      maskText:'',
      showPanelMask: false
    }
  },
  created(){
    var self = this
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
  }
})

