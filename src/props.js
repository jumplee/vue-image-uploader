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
  },
  /**
   * 当前功能只适用图片上传
   * 额外参数，会在底部增加 checkbox 选项
   * [
   *     {
   *      label:'原图',
   *      key:'original'
   *     },
   *     {
   *      label:'加水印',
   *      key:'watermark',
   *      checked:true
   *     }
   * ]
   */
  extraParams: {
    default(){
      return []
    },
    type: Array
  },
  /**
   * 转换原始的 extraParams变成后台可以使用的参数
   * 可以自己实现，默认使用 item.key 并传回 1 或 0
   *
   */
  extraParamsConvertFunction: {
    default(extraParams){
      const realParams = {}
      extraParams.forEach(param => {
        realParams[param.key] = param.checked ? 1 : 0
      })
      return realParams
    },
    type: Function
  }
}
