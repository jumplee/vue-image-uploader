var express = require('express')
var multiparty = require('multiparty')
var util = require('util')
var fs = require('fs')
const path = require('path')
var app = express()
app.use(express.static('.'))
app.use(express.static('dist'))
app.use(express.static('server'))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res){
  res.send('<a href="example">例子</a>')
})

/* 上传*/
app.post('/file/uploading', function(req, res, next){
  // 生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({ uploadDir: path.resolve('./server/temp') })
  // 上传完成后处理
  form.parse(req, function(err, fields, files){
    var filesTmp = JSON.stringify(files, null, 2)

    if(err){
      console.log('parse error: ' + err)
    } else {
      console.log('parse files: ' + filesTmp)
      var inputFile = files.file[0]
      var uploadedPath = inputFile.path
      var dstPath = '/files/' + inputFile.originalFilename
      // 重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err){
        if(err){
          console.log('rename error: ' + err)
        } else {
          console.log('rename ok')
        }
      })
    }

    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' })
    // 随机生成一个延迟
    var timeout = Math.ceil(Math.random() * 5) + 2
    // 增加数字就降低失败率
    if(timeout > 6){
      res.end('{"success":false}')
    }else{
      setTimeout(function(){
        res.end('{"success":true,"fileUrl":"' + dstPath.replace('./server', '.') + '"}')
      }, timeout * 1000)
    }
  })
})

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
// module.exports = app;
