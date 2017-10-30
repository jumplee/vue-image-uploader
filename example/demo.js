var app = new Vue({
  el: '#app',
  data: {
    showUploader: false,
    showVideo: false,
    files: [],
    videos: []
  },
  components: {
    'image-uploader': VueUploader.default.VueImageUploader,
    'video-uploader': VueUploader.default.VueVideoUploader
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
