var VueUploader = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // https://github.com/jeromeetienne/microevent.js
  var Ctrl = /*#__PURE__*/function () {
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
      value: function trigger(event
      /* , args... */
      ) {
        this._events = this._events || {};
        if (event in this._events === false) return;

        for (var i = 0; i < this._events[event].length; i++) {
          this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
    }]);

    return Ctrl;
  }();

  // 文件上传状态
  var counter = 0;
  var func = {
    UPLOAD_STATUS: {
      WAIT: 0,
      UPLOAD_ING: 1,
      SUCESS: 2,
      FAILED: 3
    },
    log: function log(info) {
    },
    uuid: function uuid() {
      var uuid = 'file-' + counter;
      counter++;
      return uuid;
    },
    queryIndex: function queryIndex(key, value, list) {
      for (var i = 0; i < list.length; i++) {
        if (typeof value === 'function') {
          if (value(list[i])) {
            return i;
          }
        } else {
          if (list[i][key] === value) {
            return i;
          }
        }
      }
    },
    createObjectURL: function createObjectURL() {
      return window.URL.createObjectURL.apply(this, arguments);
    },
    where: function where(key, value, list) {
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
  };

  var uuid = func.uuid,
      UPLOAD_STATUS = func.UPLOAD_STATUS,
      createObjectURL = func.createObjectURL;
  /**
   * @version 0.1.1 上传组件
   */

  var Uploader = /*#__PURE__*/function (_Ctrl) {
    _inherits(Uploader, _Ctrl);

    var _super = _createSuper(Uploader);

    function Uploader(options) {
      var _this;

      _classCallCheck(this, Uploader);

      _this = _super.call(this);

      var self = _assertThisInitialized(_this);

      self._files = [];
      self._queue = [];
      self.queueIndex = 0;
      var defaultOptions = {
        uploadUrl: '',
        // 最多选择数量，默认为0不限制
        maxSize: 0,
        // 同时上传的最多数量
        uploadFileMax: 5,
        // 向后台传递的参数
        param: {},
        fileParamName: 'file',
        timeout: 60 * 5,
        // 只接受类型或者正则

        /**
         * @example
         * accept:['jpg','png','bmp','gif','jpeg']
         */
        accept: [],
        // 是否有预览图
        thumb: false,
        // 默认不压缩
        compress: false
      };

      if (!options.uploadUrl) {
        throw Error('上传地址不能为空');
      } // 浅拷贝，对象属性会覆盖而不是合并


      self.options = Object.assign({}, defaultOptions, options);
      return _this;
    }
    /**
       * 上传
       */


    _createClass(Uploader, [{
      key: "upload",
      value: function upload() {
        var self = this;
        var options = self.options;

        if (self.haveUploading()) {
          return false;
        }

        var files = self._files;
        var queue = []; // 上传的时候将上传失败的文件设置为等待

        files.forEach(function (item) {
          if (item.status === UPLOAD_STATUS.FAILED) {
            item.status = UPLOAD_STATUS.WAIT;
          }
        });

        for (var _i = 0; _i < files.length; _i++) {
          var file = files[_i];

          if (file.status === UPLOAD_STATUS.WAIT) {
            file.index = _i;
            queue.push(file);
          }
        }

        self._queue = queue;
        var len = Math.min(options.uploadFileMax, queue.length);

        for (var i = 0; i < len; i++) {
          self._upload();
        }
      }
    }, {
      key: "_upload",
      value: function _upload() {
        var self = this;
        var file = self._queue[self.queueIndex];
        self.queueIndex++;

        if (typeof file === 'undefined') {
          return false;
        }

        var options = self.options;
        var xhr = new XMLHttpRequest(); // 超时

        console.log(options.timeout);
        xhr.timeout = options.timeout * 1000;
        var formData = new FormData();
        formData.append(options.fileParamName, file.source);

        for (var key in options.param) {
          formData.append(key, options.param[key]);
        }

        file.status = UPLOAD_STATUS.UPLOAD_ING;

        xhr.onload = function () {
          if (xhr.status < 200 || xhr.status >= 300) {
            self.onFail(file);

            if (options.onError) {
              return options.onError(xhr);
            } else {
              return false;
            }
          }

          var json = {}; // 不要将onSuccess或者onError包括道try中
          // 避免回调函数中报错触发catch

          try {
            json = JSON.parse(xhr.responseText);

            if (json.success) {
              self.onSuccess(file, json);
            } else {
              self.onFail(file);
            }
          } catch (e) {
            // 返回的不是json格式
            self.onFail(file);
          }
        };

        function onNetError() {
          self.onFail(file);
        }

        xhr.onabort = onNetError; // 无网络等原因导致错误

        xhr.onerror = onNetError; // 请求超时

        xhr.ontimeout = onNetError;

        function updateProgress(event) {
          console.log(event.loaded);
          var complete = event.loaded / event.total * 100 | 0;
          file.percent = complete;
          self.trigger('progress', file);
        }

        if (options.showProgress) {
          xhr.upload.onprogress = updateProgress;
        } // progress事件需要注册在open之前，否则无响应


        xhr.open('post', options.uploadUrl);
        xhr.send(formData);
      } // 是否正在上传

    }, {
      key: "haveUploading",
      value: function haveUploading() {
        var self = this;
        var haveUploading = false;

        var _iterator = _createForOfIteratorHelper(self._files),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.status === UPLOAD_STATUS.UPLOAD_ING) {
              haveUploading = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return haveUploading;
      }
    }, {
      key: "onEnd",
      value: function onEnd(file) {
        var self = this;

        self._upload(); // 所有的文件都执行完毕，未必都成功


        if (!self.haveUploading()) {
          var _flag = true;
          self.queueIndex = 0;

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
      key: "onSuccess",
      value: function onSuccess(file, json) {
        var self = this;
        file.status = UPLOAD_STATUS.SUCESS;
        file.returnJson = json;
        self.trigger('uploadSuccess', file);
        self.onEnd(file);
      }
    }, {
      key: "onFail",
      value: function onFail(file) {
        var self = this;
        file.status = UPLOAD_STATUS.FAILED;
        self.trigger('uploadFail', file);
        self.onEnd(file);
      }
    }, {
      key: "addFile",
      value: function addFile(sourceFile) {
        var self = this;
        var options = self.options;
        var ext = sourceFile.name.split('.').pop().toLowerCase();

        if (options.accept.indexOf(ext) < 0) {
          options.onAcceptError({
            name: sourceFile.name,
            ext: ext
          });
          return false;
        }

        var file = {
          source: sourceFile,
          id: uuid(),
          status: UPLOAD_STATUS.WAIT,
          thumb: '',
          name: sourceFile.name,
          size: sourceFile.size
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
      key: "removeFile",
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
      key: "_makeThumb",
      value: function _makeThumb(file) {
        this.makeThumb(file.source, function (thumbUrl) {
          file.thumb = thumbUrl;
        });
      }
    }, {
      key: "makeThumb",
      value: function makeThumb(sourceFile, callback) {
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
          ctx.drawImage(temp_image, 0, 0, preview_width, preview_height); // 清空原来的BLOB对象，释放内存。

          window.URL.revokeObjectURL(this.src); // 耗时操作

          var blob_image_url = canvas.toDataURL('image/jpeg');
          callback(blob_image_url); // 切除引用关系
          // delete temp_image;
          // delete canvas;
          // delete ctx;

          this.src = null;
          canvas = null;
          ctx = null;
          temp_image.onload = null;
          temp_image = null;
        };
      }
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "getFiles",
      value: function getFiles() {
        return this._files;
      }
      /**
       * 将上传队列清空
       */

    }, {
      key: "clear",
      value: function clear() {
        //
        this._files = [];
      }
    }]);

    return Uploader;
  }(Ctrl);

  var props = {
    accept: {
      type: Array,
      "default": function _default() {
        return ['jpg', 'png', 'gif', 'bmp', 'jpeg'];
      }
    },
    fileAccept: {
      "default": 'image/jpg,image/jpeg,image/png,image/gif'
    },
    show: {
      "default": false,
      type: Boolean
    },
    url: {
      type: String,
      required: true
    },
    showProgress: {
      "default": false,
      type: Boolean
    },
    zIndex: {
      "default": 999,
      type: Number
    },
    uploadConfig: {
      "default": function _default() {
        return {
          timeout: 120
        };
      },
      type: Object
    },

    /**
     * 是否可拖拽
     */
    draggable: {
      "default": true,
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
      "default": function _default() {
        return [];
      },
      type: Array
    },

    /**
     * 转换原始的 extraParams变成后台可以使用的参数
     * 可以自己实现，默认使用 item.key 并传回 1 或 0
     *
     */
    extraParamsConvertFunction: {
      "default": function _default(extraParams) {
        var realParams = {};
        extraParams.forEach(function (param) {
          realParams[param.key] = param.checked ? 1 : 0;
        });
        return realParams;
      },
      type: Function
    }
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".uploader_btn__ekL7u {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 6px 12px;\n  font-size: 14px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block; }\n\n.uploader_btn-disable__rCRvT {\n  background-color: #eee;\n  border-color: #eee;\n  color: black; }\n\n.uploader_mask__2TgN_ {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  overflow: auto;\n  transition: opacity 3s ease-in;\n  opacity: 0; }\n\n.uploader_place-holder__2Qold {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n\n.uploader_panel__PZ8g5 {\n  background: white;\n  color: #333;\n  position: fixed;\n  min-width: 450px;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column; }\n  .uploader_panel__PZ8g5 .uploader_close__1AhSL {\n    position: absolute;\n    padding: 1px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer; }\n\n.uploader_image-list__1fs8I {\n  padding: 10px;\n  padding-right: 0;\n  box-sizing: border-box;\n  overflow: auto;\n  flex: 1; }\n  .uploader_image-list__1fs8I:before, .uploader_image-list__1fs8I:after {\n    content: \" \";\n    display: table; }\n  .uploader_image-list__1fs8I:after {\n    clear: both; }\n\n.uploader_image-item__2okwT {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 140px;\n  height: 140px;\n  margin: 1px 1px 1px 0;\n  vertical-align: top; }\n\n.uploader_image-item__img__2xxW8 {\n  max-width: 100%;\n  display: block;\n  margin: 0 auto; }\n\n.uploader_image-item__title__3NCr9 {\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  font-size: 14px;\n  padding: 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n  user-select: none; }\n\n.uploader_image-item__cover__2pwfG {\n  height: 100%; }\n\n.uploader_image-item__loader__2tVjS {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 44px;\n  margin-top: -24px;\n  margin-left: -22px; }\n\n.uploader_percent__112UR {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n  .uploader_percent__112UR .uploader_percent-inner__2oAvz {\n    height: 4px;\n    background: #20a0ff;\n    width: 0; }\n\n.uploader_title__2qrsW {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  margin: 0;\n  position: relative;\n  cursor: move; }\n\n.uploader_bottom__1JQuL {\n  padding: 10px 15px;\n  border-top: 1px solid #eee;\n  box-sizing: border-box;\n  position: relative; }\n\n.uploader_save-btn__KsThQ {\n  position: absolute;\n  right: 15px;\n  top: 10px; }\n\n.uploader_panel-mask__3FMM7 {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99; }\n\n.uploader_panel-dialog__NPw6z {\n  background: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: -150px;\n  margin-left: -120px;\n  width: 240px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3); }\n\n.uploader_panel-dialog-text__3b07S {\n  margin-top: 25px;\n  margin-bottom: 25px; }\n\n.uploader_ok__1dlwu {\n  position: absolute;\n  bottom: 3px;\n  right: 5px;\n  width: 32px; }\n\n.uploader_btn-ios__2BkeN {\n  color: #0087ec;\n  border-width: 0;\n  border-top: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer; }\n\n.uploader_x-dialog-show__2lAKD {\n  position: absolute;\n  top: 0;\n  display: block; }\n  .uploader_x-dialog-show__2lAKD .uploader_mask__2TgN_ {\n    opacity: 1; }\n\n.uploader_x-dialog-hide__130fh {\n  position: absolute;\n  top: 0;\n  display: none; }\n\n.uploader_resizeHandler__WiL2Y {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n  cursor: nwse-resize; }\n\n.uploader_resizeHandler_e__2JMQw, .uploader_resizeHandler_w__2Dc-a {\n  width: 10px;\n  height: 90%;\n  position: absolute;\n  cursor: ew-resize; }\n\n.uploader_resizeHandler_w__2Dc-a {\n  right: -5px;\n  top: 5%; }\n\n.uploader_resizeHandler_e__2JMQw {\n  left: -5px;\n  top: 5%; }\n\n.uploader_resizeHandler_n__2nJvU, .uploader_resizeHandler_s__2AuHO {\n  height: 10px;\n  width: 90%;\n  position: absolute;\n  cursor: ns-resize; }\n\n.uploader_resizeHandler_n__2nJvU {\n  left: 5%;\n  top: -5px; }\n\n.uploader_resizeHandler_s__2AuHO {\n  left: 5%;\n  bottom: -5px; }\n\n.uploader_param__list__POD1a:before, .uploader_param__list__POD1a:after {\n  content: \" \";\n  display: table; }\n\n.uploader_param__list__POD1a:after {\n  clear: both; }\n\n.uploader_param__item__mBrIu {\n  color: #555;\n  vertical-align: top;\n  padding: 10px;\n  cursor: pointer;\n  float: left; }\n\n.uploader_param__checkbox__3jiMM {\n  display: inline-block;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  box-sizing: border-box;\n  padding: 0 2px;\n  vertical-align: top;\n  /* margin-right: 5px; */\n  margin-left: 5px;\n  position: relative;\n  top: 3px; }\n  .uploader_param__checkbox__3jiMM img {\n    width: 100%;\n    vertical-align: top;\n    margin-top: 3px; }\n";
  var styles = {"btn":"uploader_btn__ekL7u","btn-disable":"uploader_btn-disable__rCRvT","mask":"uploader_mask__2TgN_","place-holder":"uploader_place-holder__2Qold","panel":"uploader_panel__PZ8g5","close":"uploader_close__1AhSL","image-list":"uploader_image-list__1fs8I","image-item":"uploader_image-item__2okwT","image-item__img":"uploader_image-item__img__2xxW8","image-item__title":"uploader_image-item__title__3NCr9","image-item__cover":"uploader_image-item__cover__2pwfG","image-item__loader":"uploader_image-item__loader__2tVjS","percent":"uploader_percent__112UR","percent-inner":"uploader_percent-inner__2oAvz","title":"uploader_title__2qrsW","bottom":"uploader_bottom__1JQuL","save-btn":"uploader_save-btn__KsThQ","panel-mask":"uploader_panel-mask__3FMM7","panel-dialog":"uploader_panel-dialog__NPw6z","panel-dialog-text":"uploader_panel-dialog-text__3b07S","ok":"uploader_ok__1dlwu","btn-ios":"uploader_btn-ios__2BkeN","x-dialog-show":"uploader_x-dialog-show__2lAKD","x-dialog-hide":"uploader_x-dialog-hide__130fh","resizeHandler":"uploader_resizeHandler__WiL2Y","resizeHandler_e":"uploader_resizeHandler_e__2JMQw","resizeHandler_w":"uploader_resizeHandler_w__2Dc-a","resizeHandler_n":"uploader_resizeHandler_n__2nJvU","resizeHandler_s":"uploader_resizeHandler_s__2AuHO","param__list":"uploader_param__list__POD1a","param__item":"uploader_param__item__mBrIu","param__checkbox":"uploader_param__checkbox__3jiMM"};
  styleInject(css_248z);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var _lodash_throttle_4_1_1_lodash_throttle = throttle;

  var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABLCAIAAAB7tddWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Q0VBNzA0MjEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Q0VBNzA0MzEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzNDA2MkY1MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzNDA2MkY2MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K6izdgAAAvpJREFUeNrsnFmPqkAQhWmX667gEp9c/v+/MkSDG+4LrvdcSYgRbw/0ALZQ9WBUJOn+uqvqHGCG3e93hUJRUoSAQBAIAkEgCASBIBAE4neRicEcII51Xb/dbnjPGOt0OqlUKok7ApN3jIKwY6DUIBAEgkAQCALho/X47TeXy8U0TcuyrtdrZKPs9/v2m8FgINYgf9QX/gTV+Xw2DCNKBJKmxmKxsAVc0kEcDgfyGq8CNp/Pa5qWy+WiHG6v13v7/XPt6Ha7Al5D3HQ1Go1sNkvtU8lkMsmtESSoCASBSFqEW/DQ0tbr9W63O51OKK6FQkFV1XQ6nSwQ0OOTyQSvjknZbDaA0mq1QCQafSFFasxmM4eCE1Do0+lUQrcSFggsPhzq20NgsVqtkpIax+MxMs+C/aXruvMxaonND75J9W5hUWWxuYAVdRfTg8EplUphGJywQPAFuBd5Dlhw/aDwwgVtCDgCdzph1QisG+dosVjkn44WYxjGC4XnvBuNRtvt9gtA2Hv47SGsZKVS4ef8eDzG4vMVCrpSgEU3xPbZbDar1erLl1AQ7XabU8xAAXvB3XffBnIHwkR2QcUYq9fr5XIZOxkTg6BEkeNLKdQF7AWPFBy1AoUmu8RG/HmE91nxM+J/ORIr07VcLvf7feCt+stAQGIBRNJtOJolDAhdj/hXGj5+u+TzIKAF+MbkK00XFta2BhDRUE0/9gv8Elogbu4TBW8+nyPhHSeuaVqtVuNQC6TzyQUCXsg0TbfyAxfIKogr9ynP1GJyYQZ57qbg7AuIRfclKZwSlDqWBQSmxM9zFALYh+fFBwJJSkNgqeFxSrAPw+EQ9QJew7Is2Sj8FgSW2nu1gylYPkKRMsRTA+4IcjA2fxsnDkLOq/IfACFP54uP1yAQBIJAEIh4gWCPkHk+GJ7AjU/fICJ+qlIghEfoDwQMtRjvyLYDRih4rsDT+bBM9tP5kuhrzN++e6SqqvCdYUb/SIO6BoEgEASCQBAIAkEgCEQg8VeAAQAB1bbO2qoeewAAAABJRU5ErkJggg==";

  var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAABjklEQVRIx+WW0XWDMAxFGaEjELBNPzNCRugIjJAR2KBsYG/QEcoGZYN0A7qB8kTt1qGmKQG7H/E5+gHjK8nSQ1l2LyvX9CAMPQtNx6TgUlNdGhoAp6TwnSZTMhQmYY+aDsnBSeGlBSeHz4FHw/3HLi5yJj1TbJqaWO2056r2o3bQqHDbx29z6VbOCU1tjHS3PnQOXmnqNgVDOA4hsJjcuS04szW8n6Za/IR+IDtPi6O68r4RV6LGno5r4s9QeLrnAoINcx/iec7v5QxY3JLmAuJf2kPlL+2BgzvpgQLgekm75IC+BlplmO5lmfTvdC34uAOkCPSpChyGbPQqUM2LwHyfuaEXGAFORUAax/40dPLSXStfOG6N2KUbZnILL7zI1Tf862AIxXsIvkq92An8gzs/cnXpwInvurLOVDHEY6x2iIIIOAAbHNjT635T1Rr7HA7IgD77xnsWCchaB+SlesWbTJwDU80WMQeD6XQivP4vPyPus1TLjUeuFXlqSTr8cxdYcJP9xwK4jVLdd7POILTdaydHp4QAAAAASUVORK5CYII=";

  var img$1 = "data:image/svg+xml,%3csvg width='42px' height='42px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-default'%3e%3crect x='0' y='0' width='100' height='100' fill='none' class='bk'%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(0 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(30 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(60 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(90 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(120 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(150 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(180 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(210 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(240 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(270 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(300 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite'/%3e%3c/rect%3e%3crect x='47' y='40' width='6' height='20' rx='3' ry='3' fill='%237d7d7d' transform='rotate(330 50 50) translate(0 -30)'%3e %3canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite'/%3e%3c/rect%3e%3c/svg%3e";

  var baseView = {
    data: function data() {
      return {
        showDialog: false,
        styles: styles,
        pic: {
          addPic: img$3,
          okPic: img$2,
          loaderSvg: img$1
        },
        files: [],
        uploadSuccessNum: 0,
        boxWidth: 0,
        uploadFinish: true,
        showPanelMask: false,
        maskText: '',
        thumb: true
      };
    },
    watch: {
      show: 'onShowChange',
      files: function files(newVal) {
        var num = 0;
        newVal.forEach(function (item) {
          if (item.returnJson && item.returnJson.success) {
            num++;
          }
        });
        this.uploadSuccessNum = num;
      }
    },
    beforeDestroy: function beforeDestroy() {
      var $el = this.$el;
      $el.removeEventListener('mousemove', this._DocListeners.onDocumentMove);
      $el.removeEventListener('mouseup', this._DocListeners.onDocumentMouseUp);
      window.removeEventListener('resize', this._DocListeners.onDocumentResize);
      $el.removeEventListener('blur', this._DocListeners.onDocumentResize);
    },
    mounted: function mounted() {
      var ctrl = this;

      if (ctrl.draggable) {
        ctrl.initDragAndResize();
      } // 初始化show，如果show默认是true，需要执行一遍


      ctrl.onShowChange(ctrl.show);
    },
    methods: {
      initDragAndResize: function initDragAndResize() {
        var ctrl = this;
        var $el = ctrl.$el;

        function inSafeArea(x, y) {
          return x >= 0 && x < window.innerWidth && y >= 0 && y < window.innerHeight;
        } // 节流提高效率


        var onDocumentMove = _lodash_throttle_4_1_1_lodash_throttle(function (e) {
          var dialog = ctrl.$refs.dialog;
          var pageX = e.pageX;
          var pageY = e.pageY;
          var delaX = e.pageX - ctrl.beforeX;
          var delaY = e.pageY - ctrl.beforeY;
          var beforeTop = parseFloat(dialog.style.top);
          var beforeLeft = parseFloat(dialog.style.left);

          if (ctrl.startDrag && inSafeArea(pageX, pageY)) {
            dialog.style.top = ctrl.safeTop(beforeTop + delaY, dialog);
            dialog.style.left = ctrl.safeLeft(beforeLeft + delaX, dialog);
          }

          if (ctrl.startResize && inSafeArea(pageX, pageY)) {
            // if(Math.abs(delaY) < 5 || Math.abs(delaX) < 5){
            //   return
            // }
            var beforeHeight = parseFloat(dialog.offsetHeight);
            var beforeWidth = parseFloat(dialog.offsetWidth);
            var newHeight = beforeHeight;
            var newWidth = beforeWidth;

            if (ctrl.resizeDirect === 'w') {
              newWidth = beforeWidth + delaX;
            } else if (ctrl.resizeDirect === 'e') {
              newWidth = beforeWidth - delaX;
              dialog.style.left = ctrl.safeLeft(beforeLeft + delaX, dialog);
            } else if (ctrl.resizeDirect === 'n') {
              newHeight = beforeHeight - delaY;
              dialog.style.top = ctrl.safeLeft(beforeTop + delaY, dialog);
            } else if (ctrl.resizeDirect === 's') {
              newHeight = beforeHeight + delaY;
            } else {
              newHeight = beforeHeight + delaY;
              newWidth = beforeWidth + delaX;
            }

            dialog.style.width = newWidth + 'px';
            dialog.style.height = newHeight + 'px';
          }

          ctrl.beforeX = pageX;
          ctrl.beforeY = pageY;
        }, 16); // 16~20毫秒保证动画流畅

        function onDocumentMouseUp() {
          var dialog = ctrl.$refs.dialog;
          ctrl.startDrag = false;
          ctrl.startResize = false;
          dialog.style.userSelect = 'auto';
        }

        function onDocumentResize() {
          var dialog = ctrl.$refs.dialog;

          if (dialog) {
            ctrl.computeDialogStyle(dialog);
          }
        }

        $el.addEventListener('mousemove', onDocumentMove);
        $el.addEventListener('mouseup', onDocumentMouseUp);
        window.addEventListener('resize', onDocumentResize); // 右键或者超出视图等情况导致拖拽逻辑异常，增加blur修复bug

        $el.addEventListener('blur', onDocumentMouseUp);
        ctrl._DocListeners = {
          onDocumentMove: onDocumentMove,
          onDocumentMouseUp: onDocumentMouseUp,
          onDocumentResize: onDocumentResize
        };
      },
      onShowChange: function onShowChange(newVal) {
        var ctrl = this; // 当打开的时候

        if (newVal) {
          // 禁止body滚动
          document.body.style.overflow = 'hidden';
          ctrl.files = ctrl._uploader.getFiles();
          document.addEventListener('keydown', ctrl.onEsc, false);
        } else {
          // 保证隐藏的时候drag逻辑不执行
          ctrl._DocListeners.onDocumentMouseUp();

          document.removeEventListener('keydown', ctrl.onEsc, false);
        }

        if (newVal) {
          var dialog = this.$refs.dialog;
          dialog.style.width = 600 + 'px';
          dialog.style.height = 500 + 'px';
          ctrl.computeDialogStyle(dialog, 600, 500);
          ctrl.showDialog = true;
        } else {
          ctrl.showDialog = false;
        }
      },
      getDragDirection: function getDragDirection(pageX, pageY, dialog) {
        var top = parseFloat(dialog.style.top);
        var left = parseFloat(dialog.style.left);
        var bottom = top - dialog.clientHeight;
        var right = left + dialog.clinetWidth;

        if (pageX < bottom + 5 && pageX > bottom - 5) {
          if (pageY < right + 5 && pageY > right - 5) {
            return 2;
          }
        }
      },
      onEsc: function onEsc(e) {
        if (e.keyCode === 27) {
          this.close();
        }
      },
      selectFile: function selectFile(e) {
        var files = e.target.files;
        var self = this;

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          self._uploader.addFile(file);
        } // 避免vue不更新


        self.files = self._uploader.getFiles();
      },

      /**
       * 上传页面
       */
      up: function up() {
        var ctrl = this; // 没有需要选择的图片

        if (this.files.length - this.uploadSuccessNum > 0) {
          if (this.uploadFinish) {
            ctrl.uploadFinish = false;
            ctrl._uploader.options.param = ctrl.extraParamsConvertFunction(ctrl.extraParams);

            ctrl._uploader.upload();
          }
        } else {
          alert('请选择图片');
        }
      },
      mask: function mask(text) {
        this.showPanelMask = true;

        if (text) {
          this.maskText = text;
        }
      },
      del: function del(file) {
        this._uploader.removeFile(file);

        this.files = this._uploader.getFiles();
      },
      addFile: function addFile() {
        this.$refs.fileInput.value = null;
        this.$refs.fileInput.click();
      },
      closeDialog: function closeDialog() {
        this.showPanelMask = false;
        this.maskText = '';
      },
      close: function close(cancel) {
        var me = this;
        var files = [];
        var isAllFinish = true;

        if (!cancel) {
          me.files.forEach(function (item) {
            if (item.returnJson && item.returnJson.success) {
              files.push(item.returnJson);
            } else {
              isAllFinish = false;
              return false;
            }
          });
        }

        if (!isAllFinish) {
          me.mask('有未上传文件');
          return false;
        } // 不再禁止滚动


        document.body.style.overflow = '';
        me.$emit('finish', files);
        me.files = []; // 上传状态

        me.uploadFinish = true;
        me.uploadSuccessNum = 0;

        me._uploader.clear();
      },
      percentStyle: function percentStyle(file) {
        return {
          width: file.percent + '%'
        };
      },
      safeTop: function safeTop(top, dialog) {
        return Math.min(Math.max(top, 0), window.innerHeight - dialog.clientHeight) + 'px';
      },
      safeLeft: function safeLeft(left, dialog) {
        return Math.min(Math.max(left, 0), window.innerWidth - dialog.clientWidth) + 'px';
      },
      computeDialogStyle: function computeDialogStyle(dialog, width, height) {
        width = width || dialog.clientWidth;
        height = height || dialog.clientHeight;
        var left = (window.innerWidth - width) / 2;
        var top = (window.innerHeight - height) / 2;
        dialog.style.left = this.safeLeft(left, dialog);
        dialog.style.top = this.safeTop(top, dialog);
      },
      onHeaderMouseUp: function onHeaderMouseUp(e) {},
      onHeaderMouseDown: function onHeaderMouseDown(e) {
        var ctrl = this;
        ctrl.beforeX = e.pageX;
        ctrl.beforeY = e.pageY;
        ctrl.$refs.dialog.style.userSelect = 'none';
        setTimeout(function () {
          ctrl.startDrag = true;
        }, 50);
      },

      /**
       * resizeStart
       * @param e
       */
      onResizeHandlerMouseDown: function onResizeHandlerMouseDown(e, direct) {
        var ctrl = this;
        ctrl.beforeX = e.pageX;
        ctrl.beforeY = e.pageY;
        ctrl.resizeDirect = direct;
        ctrl.$refs.dialog.style.userSelect = 'none';
        setTimeout(function () {
          ctrl.startResize = true;
        }, 100);
      },

      /**
       * 当单击额外参数的时候
       * @param param
       * @param index
       */
      onParamClick: function onParamClick(param, index) {
        param.checked = !param.checked;
        this.$set(this.extraParams, index, param);
      }
    }
  };

  var template$1 = "<div :class=\"showDialog?$style['x-dialog-show']:$style['x-dialog-hide']\">\n    <div :class=\"$style.mask\" :style=\"{zIndex:zIndex}\">\n\n    </div>\n    <div :class=\"$style.panel\" :style=\"{zIndex:zIndex+1}\" ref=\"dialog\">\n        <div :class=\"$style['panel-mask']\" v-if=\"showPanelMask\">\n            <div v-if=\"maskText\" :class=\"$style['panel-dialog']\">\n                <div :class=\"$style['panel-dialog-text']\">{{maskText}}</div>\n                <div :class=\"$style['btn-ios']\" @click=\"closeDialog\">确 定</div>\n            </div>\n\n        </div>\n        <h3 :class=\"$style.title\" @mousedown=\"onHeaderMouseDown\" @mousemove=\"onHeaderMouseUp\">选择图片\n            <span :class=\"$style.close\" @click=\"close(true)\">×</span>\n        </h3>\n        <div :class=\"$style['image-list']\">\n            <template v-if=\"files.length===0\">\n                <div :class=\"$style['place-holder']\">\n                    <img @click=\"addFile\" :src=\"pic.addPic\" alt=\"\">\n                    <div>\n                        <span @click=\"addFile\" :class=\"$style.btn\">请添加图片</span>\n                    </div>\n                </div>\n            </template>\n            <div :class=\"$style['image-item']\" v-for=\"file in files\">\n                <div :class=\"$style['image-item__title']\">\n                    <template v-if=\"file.status===2\">\n                        <span>上传成功</span>\n                    </template>\n                    <template v-if=\"file.status===3\">\n                        <span>上传失败</span>\n                    </template>\n                    <span style=\"float:right\" @click=\"del(file)\">删除</span>\n                </div>\n                <template v-if=\"file.status===1\">\n                    <img :class=\"$style['image-item__loader']\" :src=\"pic.loaderSvg\" alt=\"\">\n                </template>\n                <img :class=\"$style['image-item__img']\" :src=\"file.thumb\" alt=\"\">\n\n                <div :class=\"$style.percent\" v-if=\"file.percent && showProgress\">\n                    <div :class=\"$style['percent-inner']\" :style=\"percentStyle(file)\"></div>\n                </div>\n                <img :src=\"pic.okPic\" v-if=\"file.status===2\" alt=\"\" :class=\"$style.ok\">\n            </div>\n            <div :class=\"$style['image-item']\" @click=\"addFile\" v-if=\"files.length>0\">\n                <img style=\"margin-top: 25px;\" :src=\"pic.addPic\" alt=\"添加视频\">\n            </div>\n        </div>\n        <div v-if=\"extraParams.length\" :class=\"$style.param__list\">\n            <div @click=\"onParamClick(param,index)\" :class=\"$style.param__item\" v-for=\"(param,index) in extraParams\">\n                <span :class=\"$style.param__checkbox\">\n                    <img v-show=\"param.checked\" :src=\"pic.okPic\" alt=\"checkbox\">\n                </span>\n                {{param.label}}\n            </div>\n        </div>\n        <div :class=\"$style.bottom\">\n            选择{{files.length}}个图片，需要上传 {{files.length-uploadSuccessNum}}个\n            <template v-if=\"uploadFinish\">\n                    <span :class=\"$style.btn\" style=\"margin-left:15px\" @click=\"up()\">\n                        上传\n                    </span>\n            </template>\n            <template v-if=\"!uploadFinish\">\n                    <span :class=\"[$style.btn,$style['btn-disable']]\" style=\"margin-left:15px\" @click=\"up()\">\n                        上传中...\n                    </span>\n            </template>\n            <span :class=\"[$style.btn,$style['save-btn']]\" @click=\"close()\">确 定</span>\n            <input ref=\"fileInput\" :accept=\"fileAccept\" style=\"display:none\" type=\"file\" @change=\"selectFile\" multiple=\"multiple\">\n        </div>\n        <div :class=\"$style.resizeHandler_n\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'n')}\"></div>\n        <div :class=\"$style.resizeHandler_s\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'s')}\"></div>\n        <div :class=\"$style.resizeHandler_e\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'e')}\"></div>\n        <div :class=\"$style.resizeHandler_w\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'w')}\"></div>\n        <div :class=\"$style.resizeHandler\" @mousedown=\"function(e){onResizeHandlerMouseDown(e)}\"></div>\n    </div>\n</div>\n";

  /**
   *
   *  vue的图片上传组件
   *
   */

  var main$1 = {
    name: 'imageUploader',
    template: template$1,
    mixins: [baseView],
    props: props,
    created: function created() {
      var ctrl = this;
      ctrl.$style = this.styles;
      var uploader = new Uploader(Object.assign({}, {
        uploadUrl: ctrl.url,
        accept: ctrl.accept,
        showProgress: ctrl.showProgress,
        thumb: true,
        onAcceptError: function onAcceptError(e) {
          alert(e.ext + '类型文件不符合要求');
        }
      }, ctrl.uploadConfig));
      ctrl._uploader = uploader;
      uploader.on('finish', function (success) {
        ctrl.files = ctrl.files.concat();
        ctrl.uploadFinish = true;
      });
      uploader.on('progress', function (file) {
        // let newFile=Object.assign({},file)
        ctrl.files.splice(file.index, 1, file);
      });
    }
  };

  var template = "<div :class=\"showDialog?$style['x-dialog-show']:$style['x-dialog-hide']\">\n    <div :class=\"$style.mask\" :style=\"{zIndex:zIndex}\">\n    </div>\n    <div :class=\"$style.panel\" :style=\"{zIndex:zIndex+1}\" ref=\"dialog\">\n        <div :class=\"$style['panel-mask']\" v-if=\"showPanelMask\">\n            <div v-if=\"maskText\" :class=\"$style['panel-dialog']\">\n                <div :class=\"$style['panel-dialog-text']\">{{maskText}}</div>\n                <div :class=\"$style['btn-ios']\" @click=\"closeDialog\">确 定</div>\n            </div>\n\n        </div>\n        <h3 :class=\"$style.title\" @mousedown=\"onHeaderMouseDown\" @mousemove=\"onHeaderMouseUp\">选择视频\n            <span :class=\"$style.close\" @click=\"close(true)\">×</span>\n        </h3>\n        <div :class=\"$style['image-list']\">\n            <template v-if=\"files.length===0\">\n                <div :class=\"$style['place-holder']\">\n                    <img @click=\"addFile\" :src=\"pic.addPic\" alt=\"\">\n                    <div>\n                        <span @click=\"addFile\" :class=\"$style.btn\">请添加视频</span>\n                    </div>\n                </div>\n            </template>\n            <div :class=\"$style['image-item']\" v-for=\"file in files\">\n                <div :class=\"$style['image-item__title']\">\n                    <template v-if=\"file.status===2\">\n                        <span>上传成功</span>\n                    </template>\n                    <template v-if=\"file.status===3\">\n                        <span>上传失败</span>\n                    </template>\n                    <span style=\"float:right\" @click=\"del(file)\">删除</span>\n                </div>\n                <template v-if=\"file.status===1\">\n                    <img :class=\"$style['image-item__loader']\" :src=\"pic.loaderSvg\" alt=\"\">\n                </template>\n                <img style=\"height: 64px;\n                    margin-top: 36px;\" :src=\"pic.videoPic\" alt=\"\" :class=\"$style.cover\">\n                <div :class=\"$style.name\">{{file.name}}</div>\n                <div :class=\"$style.percent\" v-if=\"file.percent && showProgress\">\n                    <div :class=\"$style['percent-inner']\" :style=\"percentStyle(file)\"></div>\n                </div>\n                <img :src=\"pic.okPic\" v-if=\"file.status===2\" alt=\"\" :class=\"$style.ok\">\n            </div>\n            <div :class=\"$style['image-item']\" @click=\"addFile\" v-if=\"files.length>0\">\n                <img style=\"margin-top: 25px;\" :src=\"pic.addPic\" alt=\"添加视频\">\n            </div>\n        </div>\n        <div :class=\"$style.bottom\">\n            选择{{files.length}}个视频，需要上传 {{files.length-uploadSuccessNum}}个\n            <template v-if=\"uploadFinish\">\n                    <span :class=\"$style.btn\" style=\"margin-left:15px\" @click=\"up()\">\n                        上传\n                    </span>\n            </template>\n            <template v-if=\"!uploadFinish\">\n                    <span :class=\"[$style.btn,$style['btn-disable']]\" style=\"margin-left:15px\" @click=\"up()\">\n                        上传中...\n                    </span>\n            </template>\n            <span :class=\"[$style.btn,$style['save-btn']]\" @click=\"close()\">确 定</span>\n            <input ref=\"fileInput\" :accept=\"fileAccept\" style=\"display:none\" type=\"file\" @change=\"selectFile\" multiple=\"multiple\">\n        </div>\n        <div :class=\"$style.resizeHandler_n\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'n')}\"></div>\n        <div :class=\"$style.resizeHandler_s\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'s')}\"></div>\n        <div :class=\"$style.resizeHandler_e\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'e')}\"></div>\n        <div :class=\"$style.resizeHandler_w\" @mousedown=\"function(e){onResizeHandlerMouseDown(e,'w')}\"></div>\n        <div :class=\"$style.resizeHandler\" @mousedown=\"function(e){onResizeHandlerMouseDown(e)}\"></div>\n    </div>\n</div>\n";

  var img = "data:image/png;base64,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";

  var newProps = Object.assign({}, props, {
    accept: {
      type: Array,
      "default": function _default() {
        return ['flv', 'mkv', 'avi', 'rm', 'rmvb', 'mpeg', 'mpg', 'ogg', 'ogv', 'mov', 'wmv', 'mp4', 'webm', 'mp3', 'wav'];
      }
    },
    fileAccept: {
      "default": '*'
    },
    uploadConfig: {
      "default": function _default() {
        return {
          // 三十分钟等待
          timeout: 30 * 60
        };
      },
      type: Object
    }
  });
  /**
   *
   *  视频上传组件
   *
   */

  var main = {
    name: 'videoUploader',
    template: template,
    props: newProps,
    mixins: [baseView],
    data: function data() {
      return {
        showDialog: false,
        pic: {
          addPic: img$3,
          okPic: img$2,
          videoPic: img,
          loaderSvg: img$1
        },
        styles: styles,
        files: [],
        uploadSuccessNum: 0,
        boxWidth: 0,
        uploadFinish: true,
        maskText: '',
        showPanelMask: false
      };
    },
    created: function created() {
      var ctrl = this;
      ctrl.$style = this.styles;
      var uploader = new Uploader(Object.assign({}, {
        uploadUrl: ctrl.url,
        accept: ctrl.accept,
        showProgress: ctrl.showProgress,
        onAcceptError: function onAcceptError(e) {
          alert(e.ext + '类型文件不符合要求');
        }
      }, ctrl.uploadConfig));
      ctrl._uploader = uploader;
      uploader.on('finish', function (success) {
        ctrl.files = ctrl.files.concat();
        ctrl.uploadFinish = true;
      });
      uploader.on('progress', function (file) {
        // let newFile=Object.assign({},file)
        ctrl.files.splice(file.index, 1, file);
      });
    }
  };

  exports.VueImageUploader = main$1;
  exports.VueVideoUploader = main;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=vueUploader.js.map
