import {log} from './func'
export default {

    data() {
        return {
            files: [],
            uploadSuccessNum: 0,
            boxWidth: 0,
            uploadFinish: true,
            showPanelMask: false,
            maskText: '',
            thumb: true
        }
    },
    watch: {
        show(newVal) {
           
            // 当打开的时候
            if (newVal) {
                //禁止body滚动
                document.body.style.overflow = 'hidden'
                this.files = this._uploader.getFiles()

                document.addEventListener('keydown',this.onEsc,false)
            }else{
                document.removeEventListener('keydown',this.onEsc,false)
            }
        },
        files(newVal) {
            let num = 0
            newVal.forEach((item) => {
                if (item.returnJson && item.returnJson.success) {
                    num++
                }
            })
            log('files update')
            this.uploadSuccessNum = num
        }
    },

    methods: {
        onEsc(e){
            if(e.keyCode === 27){
                this.close()
            }
        },
        selectFile: function (e) {
            var files = e.target.files
            var self = this
            for (var i = 0; i < files.length; i++) {
                var file = files[i]
                self._uploader.addFile(file)
            }
            // 避免vue不更新
            self.files = self._uploader.getFiles()
        },
        up: function () {
            // 没有需要选择的图片
            if (this.files.length - this.uploadSuccessNum > 0) {
                if (this.uploadFinish) {
                    this.uploadFinish = false
                    this._uploader.upload()
                }
            } else {
                alert('请选择图片')
            }
        },
        mask(text) {
            this.showPanelMask = true
            if (text) {
                this.maskText = text
            }
        },
        del: function (file) {
            this._uploader.removeFile(file)
            this.files = this._uploader.getFiles()
        },
        addFile() {
            this.$refs.fileInput.value = null
            this.$refs.fileInput.click()
        },
        closeDialog() {
            this.showPanelMask = false
            this.maskText = ''
        },
        close(cancel) {
            const me = this
            var files = []
            var isAllFinish = true
            if (!cancel) {
                me.files.forEach((item) => {
                    if (item.returnJson && item.returnJson.success) {
                        files.push(item.returnJson)
                    } else {
                        isAllFinish = false;
                        return false
                    }
                })
            }
            if (!isAllFinish) {
                me.mask('有未上传文件')
                return false
            }

            //不再禁止滚动
            document.body.style.overflow = ''
            me.$emit('finish', files)
            me.files = []
            // 上传状态
            me.uploadFinish = true
            me.uploadSuccessNum = 0
            me._uploader.clear()
        },
        percentStyle(file) {
            return {
                width: file.percent + '%'
            }
        }
    }
}