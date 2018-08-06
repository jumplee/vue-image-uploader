import Uploader from '../uploader'
import { where, log } from '../func'
import props from '../props'
/**
 *  
 *  vue的图片上传组件
 * 
 */

export default {
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
  },

  watch: {
    show(newVal){
      log('show:' + newVal)
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
      log(newVal)
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
    mask(text){
      this.showPanelMask = true
      if(text){
        this.maskText=text
      }
    },
    del: function(file){
      this._uploader.removeFile(file)
      this.files = this._uploader.getFiles()
    },
    addFile(){
      this.$refs.fileInput.value = null
      this.$refs.fileInput.click()
    },
    closeDialog(){
      this.showPanelMask=false
      this.maskText=''
    },
    close(cancel){
      const me = this
      var files = []
      var isAllFinish=true
      if (!cancel){
        me.files.forEach((item) => {
          if (item.returnJson && item.returnJson.success){
            files.push(item.returnJson)
          }else{
            isAllFinish=false;
            return false
          }
        })
      }
      if(!isAllFinish){
        me.mask('有未上传文件')
        return false
      }

      //不再禁止滚动
      document.body.style.overflow=''
      me.$emit('finish', files)
      me.files = []
      // 上传状态
      me.uploadFinish = true
      me.uploadSuccessNum = 0
      me._uploader.clear()
    },
    percentStyle(file){
      return {
        width: file.percent + '%'
      }
    }
  }
}
