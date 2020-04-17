import func from './func'

const { log } = func
var throttle = require('lodash.throttle')
export default {

  data(){
    return {
      files: [],
      uploadSuccessNum: 0,
      boxWidth: 0,
      uploadFinish: true,
      showPanelMask: false,
      maskText: '',
      thumb: true,
      imageListStyle: {
        height: '300px' // 当panel进行resize的时候，计算正确的imageList高度
      }
    }
  },
  watch: {
    show(newVal){
      const ctrl = this
      // 当打开的时候
      if (newVal){
        // 禁止body滚动
        document.body.style.overflow = 'hidden'
        ctrl.files = ctrl._uploader.getFiles()

        document.addEventListener('keydown', ctrl.onEsc, false)
      }else{
        // 保证隐藏的时候drag逻辑不执行
        ctrl._DocListeners.onDocumentMouseUp()
        document.removeEventListener('keydown', ctrl.onEsc, false)
      }
      if(newVal){
        const dialog = this.$refs.dialog
        setTimeout(function(){
          dialog.style.width = 600 + 'px'
          dialog.style.height = 500 + 'px'
          ctrl.imageListStyle = {
            height: (dialog.clientHeight - 110) + 'px'
          }
          ctrl.computeDialogStyle(dialog)
        }, 30)
      }
    },
    files(newVal){
      let num = 0
      newVal.forEach((item) => {
        if (item.returnJson && item.returnJson.success){
          num++
        }
      })
      log('files update')
      this.uploadSuccessNum = num
    }
  },
  beforeDestroy(){
    window.removeEventListener('mousemove', this._DocListeners.onDocumentMove)
    window.removeEventListener('mouseup', this._DocListeners.onDocumentMouseUp)
    window.removeEventListener('resize', this._DocListeners.onDocumentResize)
    window.removeEventListener('blur', this._DocListeners.onDocumentResize)
  },
  methods: {
    initDragAndResize(){
      const ctrl = this
      function inSafeArea(x, y){
        return (x >= 0 && x < window.innerWidth && y >= 0 && y < window.innerHeight)
      }

      // 节流提高效率
      const onDocumentMove = throttle(function(e){
        const dialog = ctrl.$refs.dialog
        const pageX = e.pageX
        const pageY = e.pageY
        const delaX = e.pageX - ctrl.beforeX
        const delaY = e.pageY - ctrl.beforeY
        const beforeTop = parseFloat(dialog.style.top)
        const beforeLeft = parseFloat(dialog.style.left)

        ctrl.beforeX = pageX
        ctrl.beforeY = pageY
        if(ctrl.startDrag && inSafeArea(pageX, pageY)){
          dialog.style.top = ctrl.safeTop((beforeTop + delaY), dialog)
          dialog.style.left = ctrl.safeLeft((beforeLeft + delaX), dialog)
        }
        if(ctrl.startResize && inSafeArea(pageX, pageY)){
          const beforeHeight = parseFloat(dialog.offsetHeight)
          const beforeWidth = parseFloat(dialog.offsetWidth)
          let newHeight = beforeHeight
          let newWidth = beforeWidth
          if(ctrl.resizeDirect === 'w'){
            newWidth = (beforeWidth + delaX)
          }else if(ctrl.resizeDirect === 'e'){
            newWidth = (beforeWidth - delaX)
            dialog.style.left = ctrl.safeLeft(beforeLeft + delaX, dialog)
          }else if(ctrl.resizeDirect === 'n'){
            newHeight = (beforeHeight - delaY)
            dialog.style.top = ctrl.safeLeft(beforeTop + delaY, dialog)
          }else if(ctrl.resizeDirect === 's'){
            newHeight = (beforeHeight + delaY)
          }else{
            newHeight = (beforeHeight + delaY)
            newWidth = (beforeWidth + delaX)
          }

          dialog.style.width = newWidth + 'px'
          dialog.style.height = newHeight + 'px'

          ctrl.imageListStyle = {
            height: (newHeight - 110) + 'px'
          }
        }
      }, 16)// 16~20毫秒保证动画流畅
      function onDocumentMouseUp(){
        const dialog = ctrl.$refs.dialog
        ctrl.startDrag = false
        ctrl.startResize = false
        dialog.style.userSelect = 'auto'
      }
      function onDocumentResize(){
        const dialog = ctrl.$refs.dialog

        if(dialog){
          ctrl.computeDialogStyle(dialog)
        }
      }
      addEventListener('mousemove', onDocumentMove)
      addEventListener('mouseup', onDocumentMouseUp)
      addEventListener('resize', onDocumentResize)
      // 右键或者超出视图等情况导致拖拽逻辑异常，增加blur修复bug
      addEventListener('blur', onDocumentMouseUp)
      ctrl._DocListeners = {
        onDocumentMove,
        onDocumentMouseUp,
        onDocumentResize
      }
    },

    onEsc(e){
      if(e.keyCode === 27){
        this.close()
      }
    },
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
      if (this.files.length - this.uploadSuccessNum > 0){
        if (this.uploadFinish){
          this.uploadFinish = false
          this._uploader.upload()
        }
      } else {
        alert('请选择图片')
      }
    },
    mask(text){
      this.showPanelMask = true
      if (text){
        this.maskText = text
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
      this.showPanelMask = false
      this.maskText = ''
    },
    close(cancel){
      const me = this
      var files = []
      var isAllFinish = true
      if (!cancel){
        me.files.forEach((item) => {
          if (item.returnJson && item.returnJson.success){
            files.push(item.returnJson)
          } else {
            isAllFinish = false
            return false
          }
        })
      }
      if (!isAllFinish){
        me.mask('有未上传文件')
        return false
      }

      // 不再禁止滚动
      document.body.style.overflow = ''
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
    },
    safeTop(top, dialog){
      return (Math.min(Math.max(top, 0), window.innerHeight - dialog.clientHeight)) + 'px'
    },

    safeLeft(left, dialog){
      return (Math.min(Math.max(left, 0), window.innerWidth - dialog.clientWidth)) + 'px'
    },
    computeDialogStyle(dialog){
      const left = (window.innerWidth - dialog.clientWidth) / 2
      const top = (window.innerHeight - dialog.clientHeight) / 2
      dialog.style.left = this.safeLeft(left, dialog)
      dialog.style.top = this.safeTop(top, dialog)
    },
    onHeaderMouseDown(e){
      const ctrl = this
      ctrl.beforeX = e.pageX
      ctrl.beforeY = e.pageY
      ctrl.$refs.dialog.style.userSelect = 'none'
      setTimeout(function(){
        ctrl.startDrag = true
      }, 50)
    },
    /**
     * resizeStart
     * @param e
     */
    onResizeHandlerMouseDown(e, direct){
      const ctrl = this
      ctrl.beforeX = e.pageX
      ctrl.beforeY = e.pageY
      ctrl.resizeDirect = direct
      ctrl.$refs.dialog.style.userSelect = 'none'
      setTimeout(function(){
        ctrl.startResize = true
      }, 100)
    }
  }
}
