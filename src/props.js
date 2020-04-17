export default{
  accept: {
    type: Array,
    default: function(){
      return ['jpg', 'png', 'gif', 'bmp', 'jpeg']
    }
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
  },
  uploadConfig: {
    default: function(){
      return {
        timeout: 120
      }
    },
    type: Object
  },
  /**
   * 是否可拖拽
   */
  draggable: {
    default: true,
    type: Boolean
  }
}
