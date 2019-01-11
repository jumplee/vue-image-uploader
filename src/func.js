// 文件上传状态
const isDebug = false

let counter = 0

module.exports = {
  UPLOAD_STATUS: {
    WAIT: 0,
    UPLOAD_ING: 1,
    SUCESS: 2,
    FAILED: 3
  },
  log(info){
    if (isDebug){
      console.trace(info)
    }
  },
  uuid(){
    var uuid = 'file-' + counter
    counter++
    return uuid
  },
  queryIndex(key, value, list){
    for (var i = 0; i < list.length; i++){
      if (typeof value === 'function'){
        if (value(list[i])){
          return i
        }
      } else {
        if (list[i][key] === value){
          return i
        }
      }
    }
  },
  createObjectURL(){
    return window.URL.createObjectURL.apply(this, arguments)
  },
  where(key, value, list){
    var arr = []
    for (var i = 0; i < list.length; i++){
      if (typeof value === 'function'){
        if (value(list[i])){
          arr.push(list[i])
        }
      } else {
        if (list[i][key] === value){
          arr.push(list[i])
        }
      }
    }
    return arr
  }
}
