import Uploader from './uploader'
/**
 *  
 *  vue的图片上传组件
 * 
 */
const isDebug = false

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
      boxWidth: 0,
      uploadFailed: false
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
      if (success){
        self.uploadFailed = false
        self.close()
      } else {
        self.uploadFailed = true
      }
    })
  },
  watch: {
    show(newVal){
      if (newVal){
        this.files = this._uploader.getFiles()
      }
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
    },
    up: function(){
      this._uploader.upload()
    },
    del: function(file){
      this._uploader.removeFile(file)
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
          if (item.returnJson.success){
            files.push(item.returnJson)
          }
        })
      }
      self.$emit('finish', files)
      self.files = []
      self._uploader.clear()
    },
    percentStyle(file){
      return {
        width: file.percent + '%'
      }
    }
  }
}
