var app = new Vue({
  el: '#app',
  data: {
    showUploader: false,
    showVideo: false,
    files: [],
    videos: [],
    uploadConfig: {
      timeout: 0
    }
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
