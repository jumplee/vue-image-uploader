import Uploader from './uploader'
/**
 *  
 *  vue的图片上传组件
 * 
 */
const isDebug = true

function log(info){
  if (isDebug){
    console.log(info)
  }
}
export default {
  props: {
    accept: {
      default: 'jpg,png,gif,bmp,jpeg'
    },
    fileAccept: {
      default: 'image/jpg,image/jpeg,image/png,image/gif'
    },
    show: {
      default: false,
      type: Boolean
    },
    url: {
      type: String,
      required: true
    },
    showProgress: {
      default: false,
      type: Boolean
    },
    zIndex: {
      default: 999,
      type: Number
    }
  },
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
    var uploader = new Uploader({
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress
    })
    self._uploader = uploader
    uploader.on('finish', function(success){
      self.files = self.files.concat()
      self.uploadFinish = true
    })
  },

  watch: {
    show(newVal){
      console.log('show:' + newVal)
      // 当重新打开的时候
      if (newVal){
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
      console.log('files update')
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
