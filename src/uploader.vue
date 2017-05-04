<template>
    <div>
        <div class="mask" v-show="show">
            <div class="panel">
                <h2>选择图片
<span class="close" @click="close(true)">×</span>

                </h2>
                <div ref="frame" class="image-list">
                    <template v-if="files.length===0">
                        <div class="place-holder">
                            <img @click="addFile" src="./images/add.png" alt="">
                            <div>
                                <button @click="addFile" class="btn">请添加图片</button>
                            </div>
                        </div>
                        
                    </template>
                    <div class="image-item" :style="{height:boxWidth+'px'}" v-for="file in files">
                        <div class="title">
                            <template v-if="file.status===2">
                                <span>上传成功</span>
                            </template>
                            <template v-if="file.status===3">
                                <span>上传失败</span>
                            </template>
                           
                            <span style="float:right" @click="del(file)">删除</span>
                        </div>
                        <template v-if="file.status===1">
                                <img class="loader" src="./images/loader.svg" alt="">
                        </template>
                        <img :src="file.thumb" alt="" class="cover">
                    </div>
                </div>
                <div class="bottom">
                    <button class="btn" style="margin-right:15px;" @click="addFile()">添 加</button>
                    <button class="btn" @click="up()">确 定</button>
                    <input ref="fileInput" id="" style="display:none" type="file" @change="selectFile" multiple>
                </div>
    
            </div>
        </div>
    </div>
</template>
<script>
import Uploader from 'jump-uploader'
function log(info) {
    console.log(info)
}
export default {
    props: {
        accept: {
            default: 'jpg,png,gif,bmp,jpeg'
        },
        show: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            files: [],
            boxWidth: 0,
            uploadFailed:false
        }
    },
    created() {
        var self = this
        var uploader = new Uploader({
            uploadUrl: '/file/uploading',
            accept: self.accept
        })
        self._uploader = uploader
        // self.files = uploader.getFiles()
        uploader.on('finish',function(success){
            if(success){
                self.uploadFailed=false
                self.close()
            }else{
                self.uploadFailed=true
            }
            
        })
    },
    mounted() {
        this.boxWidth = Math.floor(document.body.clientWidth / 5)
    },
    watch: {
        show(newVal) {
            if(newVal){
                this.files=this._uploader.getFiles()
            }
        }
    },
    methods: {
        selectFile: function (e) {
            var files = e.target.files;
            var self = this
            for (var i = 0; i < files.length; i++) {
                var file = files[i]
                self._uploader.addFile(file)
            }
        },
        up: function () {
            this._uploader.upload()
        },
        del: function (file) {
            this._uploader.removeFile(file)
        },
        addFile() {
            this.$refs.fileInput.value = null;
            this.$refs.fileInput.click()
        },
        close(cancel){

            let self=this
            var files=[]
            if(!cancel){
self.files.forEach((item)=>{
                if(item.remoteUrl){
                files.push({
                                    url:item.remoteUrl
                                })
                }
               
            })
            }
            
            self.$emit('finish',files)
            self.files=[]
            self._uploader.clear()
        }
    }
}
</script>
<style lang="scss" scoped src="./uploader.scss"></style>
