/* global Vue  VueUploader */
Vue.config.devtools = true
var app = new Vue({
  el: '#app',
  data: {
    showUploader: false,
    showVideo: false,
    files: [],
    videos: [],
    uploadConfig: {
      timeout: 0
    },
    extraParams: [
      {
        label: '原图',
        key: 'original_flag',
        checked: false
      },
      {
        label: '水印',
        key: 'water_mark_flag',
        checked: true
      }
    ]
  },
  components: {
    'image-uploader': VueUploader.VueImageUploader,
    'video-uploader': VueUploader.VueVideoUploader
  },
  created: function(){

  },
  methods: {
    addPicture(){
      this.showUploader = true
    },
    onFinish(files){
      this.files = files
      this.showUploader = false
    },
    addVideo(){
      this.showVideo = true
    },
    onFinish2(files){
      this.videos = files
      this.showVideo = false
    }
  }
})
