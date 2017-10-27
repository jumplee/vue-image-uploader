var app = new Vue({
  el: '#app',
  data: {
    showUploader: false,
    files: []
  },
  components: {
    'image-uploader': VueImageUploader
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
    }
  }
})
