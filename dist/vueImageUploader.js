(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueImageUploader"] = factory();
	else
		root["VueImageUploader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uploader__);

/**
 *  
 *  vue的图片上传组件
 * 
 */
const isDebug = false;

function log(info) {
  if (isDebug) {
    console.log(info);
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    accept: {
      default: 'jpg,png,gif,bmp,jpeg'
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
    }
  },
  data() {
    return {
      files: [],
      boxWidth: 0,
      uploadFailed: false
    };
  },
  created() {
    var self = this;
    var uploader = new __WEBPACK_IMPORTED_MODULE_0__uploader___default.a({
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress
    });
    self._uploader = uploader;

    uploader.on('finish', function (success) {
      if (success) {
        self.uploadFailed = false;
        self.close();
      } else {
        self.uploadFailed = true;
      }
    });
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.files = this._uploader.getFiles();
      }
    }
  },
  methods: {
    selectFile: function (e) {
      var files = e.target.files;
      var self = this;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        self._uploader.addFile(file);
      }
    },
    up: function () {
      this._uploader.upload();
    },
    del: function (file) {
      this._uploader.removeFile(file);
    },
    addFile() {
      this.$refs.fileInput.value = null;
      this.$refs.fileInput.click();
    },
    close(cancel) {
      const self = this;
      var files = [];
      if (!cancel) {
        self.files.forEach(item => {
          if (item.returnJson.success) {
            files.push(item.returnJson);
          }
        });
      }
      self.$emit('finish', files);
      self.files = [];
      self._uploader.clear();
    },
    percentStyle(file) {
      return {
        width: file.percent + '%'
      };
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context = context || (this.$vnode && this.$vnode.ssrContext)
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    // inject component registration as beforeCreate hook
    var existing = options.beforeCreate
    options.beforeCreate = existing
      ? [].concat(existing, hook)
      : [hook]
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "mask",
    style: ({
      zIndex: _vm.zIndex
    })
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('h2', [_vm._v("选择图片\n                "), _c('span', {
    staticClass: "close",
    on: {
      "click": function($event) {
        _vm.close(true)
      }
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('div', {
    ref: "frame",
    staticClass: "image-list"
  }, [(_vm.files.length === 0) ? [_c('div', {
    staticClass: "place-holder"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(8),
      "alt": ""
    },
    on: {
      "click": _vm.addFile
    }
  }), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn",
    on: {
      "click": _vm.addFile
    }
  }, [_vm._v("请添加图片")])])])] : _vm._e(), _vm._v(" "), _vm._l((_vm.files), function(file) {
    return _c('div', {
      staticClass: "image-item"
    }, [_c('div', {
      staticClass: "title"
    }, [(file.status === 2) ? [_c('span', [_vm._v("上传成功")])] : _vm._e(), _vm._v(" "), (file.status === 3) ? [_c('span', [_vm._v("上传失败")])] : _vm._e(), _vm._v(" "), _c('span', {
      staticStyle: {
        "float": "right"
      },
      on: {
        "click": function($event) {
          _vm.del(file)
        }
      }
    }, [_vm._v("删除")])], 2), _vm._v(" "), (file.status === 1) ? [_c('img', {
      staticClass: "loader",
      attrs: {
        "src": __webpack_require__(9),
        "alt": ""
      }
    })] : _vm._e(), _vm._v(" "), _c('img', {
      staticClass: "cover",
      attrs: {
        "src": file.thumb,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "percent"
    }, [_c('div', {
      staticClass: "percent-inner",
      style: (_vm.percentStyle(file))
    })])], 2)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "btn",
    staticStyle: {
      "margin-right": "15px"
    },
    on: {
      "click": function($event) {
        _vm.addFile()
      }
    }
  }, [_vm._v("添 加")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        _vm.up()
      }
    }
  }, [(_vm.uploadFailed) ? [_vm._v("\n                        继续上传\n                    ")] : _vm._e(), _vm._v(" "), (!_vm.uploadFailed) ? [_vm._v("\n                        上 传\n                    ")] : _vm._e()], 2), _vm._v(" "), _c('input', {
    ref: "fileInput",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "accept": _vm.fileAccept,
      "type": "file",
      "multiple": ""
    },
    on: {
      "change": _vm.selectFile
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7facc3e3", module.exports)
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("ee28b5a6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7facc3e3\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!./uploader.scss", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7facc3e3\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!./uploader.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//https://github.com/jeromeetienne/microevent.js
var Ctrl = function () {
    function Ctrl() {
        _classCallCheck(this, Ctrl);

        this.counter = 0;
    }

    _createClass(Ctrl, [{
        key: "on",
        value: function on(event, fct) {
            this._events = this._events || {};
            this._events[event] = this._events[event] || [];
            this._events[event].push(fct);
        }
    }, {
        key: "off",
        value: function off(event, fct) {
            this._events = this._events || {};
            if (event in this._events === false) return;
            this._events[event].splice(this._events[event].indexOf(fct), 1);
        }
    }, {
        key: "trigger",
        value: function trigger(event /* , args... */) {
            this._events = this._events || {};
            if (event in this._events === false) return;
            for (var i = 0; i < this._events[event].length; i++) {
                this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    }]);

    return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ctrl = __webpack_require__(4);

var _ctrl2 = _interopRequireDefault(_ctrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @version 0.1.1 上传组件
 */
var isDebug = false;

// 文件上传状态
var UPLOAD_STATUS = {
  WAIT: 0,
  UPLOAD_ING: 1,
  SUCESS: 2,
  FAILED: 3
};

function log(info) {
  if (isDebug) {
    console.log(info);
  }
}

function query(key, value, list) {
  for (var i = 0; i < list.length; i++) {
    if (typeof value === 'function') {
      if (value(list[i])) {
        return list[i];
      }
    } else {
      if (list[i][key] === value) {
        return list[i];
      }
    }
  }
}

function where(key, value, list) {
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    if (typeof value === 'function') {
      if (value(list[i])) {
        arr.push(list[i]);
      }
    } else {
      if (list[i][key] === value) {
        arr.push(list[i]);
      }
    }
  }
  return arr;
}

function createObjectURL() {
  return window.URL.createObjectURL.apply(this, arguments);
}

var Uploader = function (_Ctrl) {
  _inherits(Uploader, _Ctrl);

  function Uploader(options) {
    _classCallCheck(this, Uploader);

    var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this));

    var self = _this;
    self.xhr = new XMLHttpRequest();
    self.counter = 0;
    self.uploadingCounter = 0;
    self._beforeLen = 0;
    self._files = [];
    self._queue = [];
    var defaultOptions = {
      uploadUrl: '',
      uuidPrefix: 'file-',
      // 最多选择数量，默认为0不限制
      maxSize: 0,
      // 同时上传的最多数量
      uploadFileMax: 5,
      // 向后台传递的参数
      param: {},
      fileParamName: 'file',
      // 只接受类型或者正则
      /**
             * @example
             * accept:'jpg,png,bmp,gif,jpeg'
             * accept:'xls,doc,docx,ppt,pptx'
             */
      accept: '',
      thumb: {
        defaultUrl: 'defaultThumb.jpg'
      }
    };
    if (!options.uploadUrl) {
      throw Error('上传地址不能为空');
    }
    // 浅拷贝，对象属性会覆盖而不是合并
    self.options = Object.assign({}, defaultOptions, options);
    if (typeof self.options.accept === 'string') {
      var typeStr = self.options.accept.split(',').join('|');
      // 黑人❓ 的全局模式g lastIndex会记录上次执行的位置，下次执行的时候从lastIndex开始查询
      // self.options.acceptReg=new RegExp(`.*\\.(${typeStr})$`,'ig')
      self.options.acceptReg = new RegExp('.*\\.(' + typeStr + ')$', 'i');
    } else if (_typeof(self.options.accept) === 'object') {
      self.options.acceptReg = self.options.accept;
    }
    return _this;
  }

  /**
     * 上传
     */


  _createClass(Uploader, [{
    key: 'upload',
    value: function upload() {
      var self = this;
      var options = self.options;
      if (self._uploading) {
        log('上传中...');
        return false;
      }
      self._uploading = true;
      self._files.forEach(function (item) {
        if (item.status === UPLOAD_STATUS.UPLOAD_ING || item.status === UPLOAD_STATUS.FAILED) {
          item.status = UPLOAD_STATUS.WAIT;
        }
      });
      self._queue = where('status', function (file) {
        return file.status === UPLOAD_STATUS.WAIT;
      }, self._files);
      self._timer = setInterval(function () {
        var queue = self._queue;
        var len = Math.min(self.uploadingCounter + options.uploadFileMax, queue.length);
        for (var i = self._beforeLen; i < len; i++) {
          self._upload(queue[i]);
        }
        self._beforeLen = len;
        if (self.uploadingCounter + options.uploadFileMax > queue.length) {
          clearInterval(self._timer);
        }
        log(new Date());
      }, 300);
    }
  }, {
    key: '_upload',
    value: function _upload(file) {
      var self = this;
      var options = self.options;
      // 不是等待状态的就不上传
      if (file.status !== UPLOAD_STATUS.WAIT) {
        self.uploadingCounter++;
        return false;
      }
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append(options.fileParamName, file.source);
      for (var key in options.param) {
        formData.append(key, options.param[key]);
      }

      file.status = UPLOAD_STATUS.UPLOAD_ING;
      xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) {
          log(xhr.status);
          self.onFail(file);
          // return option.onError(getError(action, option, xhr), getBody(xhr));
        }

        var json = {};
        // 不要将onSuccess或者onError包括道try中
        // 避免回调函数中报错触发catch
        try {
          json = JSON.parse(xhr.responseText);
        } catch (e) {
          self.onFail(file);
          json.success = false;
        }
        if (json.success) {
          self.onSuccess(file, json);
        } else {
          self.onFail(file);
        }
      };
      function updateProgress(event) {
        var complete = event.loaded / event.total * 100 | 0;
        console.log(complete);
        file.percent = complete;
      }
      if (options.showProgress) {
        xhr.upload.onprogress = updateProgress;
      }
      // progress事件需要注册在open之前，否则无响应
      xhr.open('post', options.uploadUrl);
      xhr.send(formData);
    }
  }, {
    key: 'onEnd',
    value: function onEnd(file) {
      var self = this;

      self.uploadingCounter++;
      // 所有的文件都执行完毕，未必都成功
      if (self.uploadingCounter === self._queue.length) {
        self._uploading = false;
        self.uploadingCounter = 0;
        self._beforeLen = 0;
        var _flag = true;
        self._files.forEach(function (item) {
          if (item.status === UPLOAD_STATUS.FAILED) {
            _flag = false;
            return false;
          }
        });
        self.trigger('finish', _flag);
      }
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(file, json) {
      var self = this;
      file.status = UPLOAD_STATUS.SUCESS;
      file.returnJson = json;
      self.trigger('uploadSuccess', file);
      self.onEnd(file);
    }
  }, {
    key: 'onFail',
    value: function onFail(file) {
      var self = this;
      file.status = UPLOAD_STATUS.FAILED;
      self.trigger('uploadFail', file);
      self.onEnd(file);
    }
  }, {
    key: 'addFile',
    value: function addFile(sourceFile) {
      var self = this;
      var options = self.options;

      if (options.acceptReg && !options.acceptReg.test(sourceFile.name)) {
        log(sourceFile.name + '不在accept设置范围内');
        return false;
      }
      var file = {
        source: sourceFile,
        id: self.uuid(),
        status: UPLOAD_STATUS.WAIT,
        thumb: options.thumb.defaultUrl
      };

      self._files.push(file);
      if (options.thumb) {
        if (options.compress) {
          self._makeThumb(file);
        } else {
          file.thumb = createObjectURL(sourceFile);
        }
      }
    }
  }, {
    key: 'removeFile',
    value: function removeFile(file) {
      var targetIndex = -1;
      this._files.forEach(function (item, index) {
        if (item.id === file.id) {
          targetIndex = index;
        }
      });
      this._files.splice(targetIndex, 1);
    }
  }, {
    key: '_makeThumb',
    value: function _makeThumb(file) {
      this.makeThumb(file.source).then(function (thumbUrl) {
        file.thumb = thumbUrl;
      });
    }
  }, {
    key: 'makeThumb',
    value: function makeThumb(sourceFile) {
      return new Promise(function (resolve, reject) {
        var thumbOptions = this.options.thumb;
        var blob_url = createObjectURL(sourceFile);
        var temp_image = new Image();
        var canvas = document.createElement('canvas');
        var preview_width = thumbOptions.width;
        var preview_height = thumbOptions.height;
        temp_image.src = blob_url;
        canvas.width = preview_width;
        canvas.height = preview_height;
        var ctx = canvas.getContext('2d');
        temp_image.onload = function () {
          ctx.drawImage(temp_image, 0, 0, preview_width, preview_height);
          // 清空原来的BLOB对象，释放内存。
          window.URL.revokeObjectURL(this.src);
          // 耗时操作
          var blob_image_url = canvas.toDataURL('image/jpeg');
          resolve(blob_image_url);
          // 切除引用关系
          // delete temp_image;
          // delete canvas;
          // delete ctx;
          this.src = null;
          canvas = null;
          ctx = null;
          temp_image.onload = null;
          temp_image = null;
        };
      });
    }
  }, {
    key: 'stop',
    value: function stop() {}
  }, {
    key: 'uuid',
    value: function uuid() {
      var uuid = this.options.uuidPrefix + this.counter;
      this.counter++;
      return uuid;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this._files;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._files = [];
    }
  }]);

  return Uploader;
}(_ctrl2.default);

module.exports = Uploader;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-7facc3e3] {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.mask[data-v-7facc3e3] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 999;\n}\n.place-holder[data-v-7facc3e3] {\n  text-align: center;\n  margin-top: 200px;\n}\n.panel[data-v-7facc3e3] {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto;\n}\n.panel h2[data-v-7facc3e3] {\n    margin: 0;\n    position: relative;\n}\n.panel .bottom[data-v-7facc3e3] {\n    padding: 15px;\n    border-top: 1px solid #eee;\n}\n.panel .close[data-v-7facc3e3] {\n    position: absolute;\n    padding: 6px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer;\n}\n.image-list[data-v-7facc3e3] {\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n}\n.image-item[data-v-7facc3e3] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  background: white;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 175px;\n  height: 175px;\n  margin: 0px 2px;\n}\n.image-item:hover .title[data-v-7facc3e3] {\n    display: block;\n}\n.image-item .title[data-v-7facc3e3] {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n}\n.image-item .cover[data-v-7facc3e3] {\n    height: 100%;\n}\n.image-item .loader[data-v-7facc3e3] {\n    position: absolute;\n    top: 50%;\n    margin-top: -15px;\n    width: 30px;\n    display: block;\n    left: 50%;\n    margin-left: -15px;\n}\n.percent[data-v-7facc3e3] {\n  width: 90%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 8px;\n  left: 5%;\n}\n.percent .percent-inner[data-v-7facc3e3] {\n    height: 4px;\n    background: #5a5a5a;\n    width: 0;\n}\nh2[data-v-7facc3e3] {\n  padding: 15px;\n  border-bottom: 1px solid #eee;\n}\n", "", {"version":3,"sources":["/Users/jump/GitHub/vue-image-uploader/src/uploader.scss"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;CAAE;AAEpB;EACE,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,gBAAgB;EAChB,aAAa;CAAE;AAEjB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;CAAE;AAC5B;IACE,UAAU;IACV,mBAAmB;CAAE;AACvB;IACE,cAAc;IACd,2BAA2B;CAAE;AAC/B;IACE,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;CAAE;AAEtB;EACE,cAAc;EACd,eAAe;EACf,cAAc;CAAE;AAElB;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,gBAAgB;CAAE;AAClB;IACE,eAAe;CAAE;AACnB;IACE,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;CAAE;AACpB;IACE,aAAa;CAAE;AACjB;IACE,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,mBAAmB;CAAE;AAEzB;EACE,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;EACZ,SAAS;CAAE;AACX;IACE,YAAY;IACZ,oBAAoB;IACpB,SAAS;CAAE;AAEf;EACE,cAAc;EACd,8BAA8B;CAAE","file":"uploader.scss","sourcesContent":[".btn {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer; }\n\n.mask {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 999; }\n\n.place-holder {\n  text-align: center;\n  margin-top: 200px; }\n\n.panel {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto; }\n  .panel h2 {\n    margin: 0;\n    position: relative; }\n  .panel .bottom {\n    padding: 15px;\n    border-top: 1px solid #eee; }\n  .panel .close {\n    position: absolute;\n    padding: 6px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer; }\n\n.image-list {\n  height: 500px;\n  overflow: auto;\n  padding: 15px; }\n\n.image-item {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  background: white;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 175px;\n  height: 175px;\n  margin: 0px 2px; }\n  .image-item:hover .title {\n    display: block; }\n  .image-item .title {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer; }\n  .image-item .cover {\n    height: 100%; }\n  .image-item .loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -15px;\n    width: 30px;\n    display: block;\n    left: 50%;\n    margin-left: -15px; }\n\n.percent {\n  width: 90%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 8px;\n  left: 5%; }\n  .percent .percent-inner {\n    height: 4px;\n    background: #5a5a5a;\n    width: 0; }\n\nh2 {\n  padding: 15px;\n  border-bottom: 1px solid #eee; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABLCAIAAAB7tddWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Q0VBNzA0MjEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Q0VBNzA0MzEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzNDA2MkY1MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzNDA2MkY2MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K6izdgAAAvpJREFUeNrsnFmPqkAQhWmX667gEp9c/v+/MkSDG+4LrvdcSYgRbw/0ALZQ9WBUJOn+uqvqHGCG3e93hUJRUoSAQBAIAkEgCASBIBAE4neRicEcII51Xb/dbnjPGOt0OqlUKok7ApN3jIKwY6DUIBAEgkAQCALho/X47TeXy8U0TcuyrtdrZKPs9/v2m8FgINYgf9QX/gTV+Xw2DCNKBJKmxmKxsAVc0kEcDgfyGq8CNp/Pa5qWy+WiHG6v13v7/XPt6Ha7Al5D3HQ1Go1sNkvtU8lkMsmtESSoCASBSFqEW/DQ0tbr9W63O51OKK6FQkFV1XQ6nSwQ0OOTyQSvjknZbDaA0mq1QCQafSFFasxmM4eCE1Do0+lUQrcSFggsPhzq20NgsVqtkpIax+MxMs+C/aXruvMxaonND75J9W5hUWWxuYAVdRfTg8EplUphGJywQPAFuBd5Dlhw/aDwwgVtCDgCdzph1QisG+dosVjkn44WYxjGC4XnvBuNRtvt9gtA2Hv47SGsZKVS4ef8eDzG4vMVCrpSgEU3xPbZbDar1erLl1AQ7XabU8xAAXvB3XffBnIHwkR2QcUYq9fr5XIZOxkTg6BEkeNLKdQF7AWPFBy1AoUmu8RG/HmE91nxM+J/ORIr07VcLvf7feCt+stAQGIBRNJtOJolDAhdj/hXGj5+u+TzIKAF+MbkK00XFta2BhDRUE0/9gv8Elogbu4TBW8+nyPhHSeuaVqtVuNQC6TzyQUCXsg0TbfyAxfIKogr9ynP1GJyYQZ57qbg7AuIRfclKZwSlDqWBQSmxM9zFALYh+fFBwJJSkNgqeFxSrAPw+EQ9QJew7Is2Sj8FgSW2nu1gylYPkKRMsRTA+4IcjA2fxsnDkLOq/IfACFP54uP1yAQBIJAEIh4gWCPkHk+GJ7AjU/fICJ+qlIghEfoDwQMtRjvyLYDRih4rsDT+bBM9tP5kuhrzN++e6SqqvCdYUb/SIO6BoEgEASCQBAIAkEgCEQg8VeAAQAB1bbO2qoeewAAAABJRU5ErkJggg=="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDJweCcgaGVpZ2h0PSc0MnB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzBzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMTY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjc1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMzAwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC44MzMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC45MTY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PC9zdmc+"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(0),
  /* template */
  __webpack_require__(2),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7facc3e3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jump/GitHub/vue-image-uploader/src/uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7facc3e3", Component.options)
  } else {
    hotAPI.reload("data-v-7facc3e3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=vueImageUploader.js.map