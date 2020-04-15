module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./src/imageUploader/main.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/imageUploader/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploader = __webpack_require__(/*! ../uploader */ "./src/uploader.js");

var _uploader2 = _interopRequireDefault(_uploader);

var _baseViewCtrl = __webpack_require__(/*! ../baseViewCtrl */ "./src/baseViewCtrl.js");

var _baseViewCtrl2 = _interopRequireDefault(_baseViewCtrl);

var _props = __webpack_require__(/*! ../props */ "./src/props.js");

var _props2 = _interopRequireDefault(_props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  
 *  vue的图片上传组件
 * 
 */

exports.default = Object.assign({}, _baseViewCtrl2.default, {
  props: _props2.default,

  created: function created() {
    var self = this;
    var uploader = new _uploader2.default(Object.assign({}, {
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress,
      thumb: true,
      onAcceptError: function onAcceptError(e) {
        alert(e.ext + '类型文件不符合要求');
      }
    }, self.uploadConfig));
    self._uploader = uploader;
    uploader.on('finish', function (success) {
      self.files = self.files.concat();
      self.uploadFinish = true;
    });
    uploader.on('progress', function (file) {
      // let newFile=Object.assign({},file)
      self.files.splice(file.index, 1, file);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/videoUploader/main.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/videoUploader/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploader = __webpack_require__(/*! ../uploader */ "./src/uploader.js");

var _uploader2 = _interopRequireDefault(_uploader);

var _baseViewCtrl = __webpack_require__(/*! ../baseViewCtrl */ "./src/baseViewCtrl.js");

var _baseViewCtrl2 = _interopRequireDefault(_baseViewCtrl);

var _props = __webpack_require__(/*! ../props */ "./src/props.js");

var _props2 = _interopRequireDefault(_props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newProps = Object.assign({}, _props2.default, {
  accept: {
    type: Array,
    default: function _default() {
      return ['flv', 'mkv', 'avi', 'rm', 'rmvb', 'mpeg', 'mpg', 'ogg', 'ogv', 'mov', 'wmv', 'mp4', 'webm', 'mp3', 'wav'];
    }
  },
  fileAccept: {
    default: '*'
  },
  uploadConfig: {
    default: function _default() {
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

exports.default = Object.assign({}, _baseViewCtrl2.default, {
  props: newProps,
  data: function data() {
    return {
      files: [],
      uploadSuccessNum: 0,
      boxWidth: 0,
      uploadFinish: true,
      maskText: '',
      showPanelMask: false
    };
  },
  created: function created() {
    var self = this;
    var uploader = new _uploader2.default(Object.assign({}, {
      uploadUrl: self.url,
      accept: self.accept,
      showProgress: self.showProgress,
      onAcceptError: function onAcceptError(e) {
        alert(e.ext + '类型文件不符合要求');
      }
    }, self.uploadConfig));
    self._uploader = uploader;
    uploader.on('finish', function (success) {
      self.files = self.files.concat();
      self.uploadFinish = true;
    });
    uploader.on('progress', function (file) {
      // let newFile=Object.assign({},file)
      self.files.splice(file.index, 1, file);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05e646cd\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-05e646cd","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-05e646cd] {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block;\n}\n.btn-disable[data-v-05e646cd] {\n  background-color: #eee;\n  border-color: #eee;\n  color: black;\n}\n.mask[data-v-05e646cd] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  overflow: auto;\n}\n.place-holder[data-v-05e646cd] {\n  text-align: center;\n  margin-top: 200px;\n}\n.panel[data-v-05e646cd] {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto;\n  position: relative;\n}\n.panel .close[data-v-05e646cd] {\n    position: absolute;\n    padding: 1px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer;\n}\n.image-list[data-v-05e646cd] {\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n  padding-right: 0;\n}\n.image-list[data-v-05e646cd]:before, .image-list[data-v-05e646cd]:after {\n    content: \" \";\n    display: table;\n}\n.image-list[data-v-05e646cd]:after {\n    clear: both;\n}\n.image-item[data-v-05e646cd] {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 140px;\n  height: 140px;\n  margin: 1px 1px 1px 0;\n  vertical-align: top;\n}\n.image-item .title[data-v-05e646cd] {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none;\n}\n.image-item .cover[data-v-05e646cd] {\n    height: 100%;\n}\n.image-item .loader[data-v-05e646cd] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 44px;\n    margin-top: -24px;\n    margin-left: -22px;\n}\n.percent[data-v-05e646cd] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.percent .percent-inner[data-v-05e646cd] {\n    height: 4px;\n    background: #20a0ff;\n    width: 0;\n}\nh3[data-v-05e646cd] {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  margin: 0;\n  position: relative;\n}\n.bottom[data-v-05e646cd] {\n  position: relative;\n  padding: 10px 15px;\n  border-top: 1px solid #eee;\n}\n.save-btn[data-v-05e646cd] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.panel-mask[data-v-05e646cd] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99;\n}\n.panel-dialog[data-v-05e646cd] {\n  background: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: -150px;\n  margin-left: -120px;\n  width: 240px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3);\n}\n.panel-dialog-text[data-v-05e646cd] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.ok[data-v-05e646cd] {\n  position: absolute;\n  bottom: 3px;\n  right: 5px;\n  width: 32px;\n}\n.btn-ios[data-v-05e646cd] {\n  color: #0087ec;\n  border-width: 0;\n  border-top: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer;\n}\n@media (max-width: 1300px) {\n.panel[data-v-05e646cd] {\n    margin-top: 20px;\n}\n}\n", "", {"version":3,"sources":["/Users/jump/GitHub/vue-image-uploader/src/uploader.scss"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;CAAE;AAE1B;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;CAAE;AAEjB;EACE,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;CAAE;AAEtB;EACE,cAAc;EACd,eAAe;EACf,cAAc;EACd,iBAAiB;CAAE;AACnB;IACE,aAAa;IACb,eAAe;CAAE;AACnB;IACE,YAAY;CAAE;AAElB;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,oBAAoB;CAAE;AACtB;IACE,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;CAAE;AACtB;IACE,aAAa;CAAE;AACjB;IACE,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;CAAE;AAEzB;EACE,YAAY;EACZ,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,UAAU;EACV,QAAQ;CAAE;AACV;IACE,YAAY;IACZ,oBAAoB;IACpB,SAAS;CAAE;AAEf;EACE,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;CAAE;AAE/B;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;CAAE;AAEd;EACE,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,mBAAmB;EACnB,YAAY;CAAE;AAEhB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,4CAA4C;CAAE;AAEhD;EACE,iBAAiB;EACjB,oBAAoB;CAAE;AAExB;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;CAAE;AAEhB;EACE,eAAe;EACf,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,gBAAgB;CAAE;AAEpB;AACE;IACE,iBAAiB;CAAE;CAAE","file":"uploader.scss","sourcesContent":[".btn {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block; }\n\n.btn-disable {\n  background-color: #eee;\n  border-color: #eee;\n  color: black; }\n\n.mask {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  overflow: auto; }\n\n.place-holder {\n  text-align: center;\n  margin-top: 200px; }\n\n.panel {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto;\n  position: relative; }\n  .panel .close {\n    position: absolute;\n    padding: 1px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer; }\n\n.image-list {\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n  padding-right: 0; }\n  .image-list:before, .image-list:after {\n    content: \" \";\n    display: table; }\n  .image-list:after {\n    clear: both; }\n\n.image-item {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 140px;\n  height: 140px;\n  margin: 1px 1px 1px 0;\n  vertical-align: top; }\n  .image-item .title {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none; }\n  .image-item .cover {\n    height: 100%; }\n  .image-item .loader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 44px;\n    margin-top: -24px;\n    margin-left: -22px; }\n\n.percent {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n  .percent .percent-inner {\n    height: 4px;\n    background: #20a0ff;\n    width: 0; }\n\nh3 {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  margin: 0;\n  position: relative; }\n\n.bottom {\n  position: relative;\n  padding: 10px 15px;\n  border-top: 1px solid #eee; }\n\n.save-btn {\n  position: absolute;\n  right: 15px;\n  top: 10px; }\n\n.panel-mask {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99; }\n\n.panel-dialog {\n  background: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: -150px;\n  margin-left: -120px;\n  width: 240px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3); }\n\n.panel-dialog-text {\n  margin-top: 25px;\n  margin-bottom: 25px; }\n\n.ok {\n  position: absolute;\n  bottom: 3px;\n  right: 5px;\n  width: 32px; }\n\n.btn-ios {\n  color: #0087ec;\n  border-width: 0;\n  border-top: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer; }\n\n@media (max-width: 1300px) {\n  .panel {\n    margin-top: 20px; } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5dc37ded\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-5dc37ded","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-5dc37ded] {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block;\n}\n.btn-disable[data-v-5dc37ded] {\n  background-color: #eee;\n  border-color: #eee;\n  color: black;\n}\n.mask[data-v-5dc37ded] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  overflow: auto;\n}\n.place-holder[data-v-5dc37ded] {\n  text-align: center;\n  margin-top: 200px;\n}\n.panel[data-v-5dc37ded] {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto;\n  position: relative;\n}\n.panel .close[data-v-5dc37ded] {\n    position: absolute;\n    padding: 1px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer;\n}\n.image-list[data-v-5dc37ded] {\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n  padding-right: 0;\n}\n.image-list[data-v-5dc37ded]:before, .image-list[data-v-5dc37ded]:after {\n    content: \" \";\n    display: table;\n}\n.image-list[data-v-5dc37ded]:after {\n    clear: both;\n}\n.image-item[data-v-5dc37ded] {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 140px;\n  height: 140px;\n  margin: 1px 1px 1px 0;\n  vertical-align: top;\n}\n.image-item .title[data-v-5dc37ded] {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none;\n}\n.image-item .cover[data-v-5dc37ded] {\n    height: 100%;\n}\n.image-item .loader[data-v-5dc37ded] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 44px;\n    margin-top: -24px;\n    margin-left: -22px;\n}\n.percent[data-v-5dc37ded] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.percent .percent-inner[data-v-5dc37ded] {\n    height: 4px;\n    background: #20a0ff;\n    width: 0;\n}\nh3[data-v-5dc37ded] {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  margin: 0;\n  position: relative;\n}\n.bottom[data-v-5dc37ded] {\n  position: relative;\n  padding: 10px 15px;\n  border-top: 1px solid #eee;\n}\n.save-btn[data-v-5dc37ded] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.panel-mask[data-v-5dc37ded] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99;\n}\n.panel-dialog[data-v-5dc37ded] {\n  background: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: -150px;\n  margin-left: -120px;\n  width: 240px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3);\n}\n.panel-dialog-text[data-v-5dc37ded] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.ok[data-v-5dc37ded] {\n  position: absolute;\n  bottom: 3px;\n  right: 5px;\n  width: 32px;\n}\n.btn-ios[data-v-5dc37ded] {\n  color: #0087ec;\n  border-width: 0;\n  border-top: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer;\n}\n@media (max-width: 1300px) {\n.panel[data-v-5dc37ded] {\n    margin-top: 20px;\n}\n}\n", "", {"version":3,"sources":["/Users/jump/GitHub/vue-image-uploader/src/uploader.scss"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;CAAE;AAE1B;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;CAAE;AAEjB;EACE,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;CAAE;AAEtB;EACE,cAAc;EACd,eAAe;EACf,cAAc;EACd,iBAAiB;CAAE;AACnB;IACE,aAAa;IACb,eAAe;CAAE;AACnB;IACE,YAAY;CAAE;AAElB;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,oBAAoB;CAAE;AACtB;IACE,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;CAAE;AACtB;IACE,aAAa;CAAE;AACjB;IACE,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;CAAE;AAEzB;EACE,YAAY;EACZ,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,UAAU;EACV,QAAQ;CAAE;AACV;IACE,YAAY;IACZ,oBAAoB;IACpB,SAAS;CAAE;AAEf;EACE,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;CAAE;AAE/B;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;CAAE;AAEd;EACE,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,mBAAmB;EACnB,YAAY;CAAE;AAEhB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,4CAA4C;CAAE;AAEhD;EACE,iBAAiB;EACjB,oBAAoB;CAAE;AAExB;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;CAAE;AAEhB;EACE,eAAe;EACf,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,gBAAgB;CAAE;AAEpB;AACE;IACE,iBAAiB;CAAE;CAAE","file":"uploader.scss","sourcesContent":[".btn {\n  color: #fff;\n  background-color: #20a0ff;\n  border-color: #20a0ff;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block; }\n\n.btn-disable {\n  background-color: #eee;\n  border-color: #eee;\n  color: black; }\n\n.mask {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  overflow: auto; }\n\n.place-holder {\n  text-align: center;\n  margin-top: 200px; }\n\n.panel {\n  width: 750px;\n  background: white;\n  color: #333;\n  margin: 100px auto 0 auto;\n  position: relative; }\n  .panel .close {\n    position: absolute;\n    padding: 1px 15px;\n    right: 0;\n    top: 0;\n    font-size: 28px;\n    color: gray;\n    cursor: pointer; }\n\n.image-list {\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n  padding-right: 0; }\n  .image-list:before, .image-list:after {\n    content: \" \";\n    display: table; }\n  .image-list:after {\n    clear: both; }\n\n.image-item {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  width: 140px;\n  height: 140px;\n  margin: 1px 1px 1px 0;\n  vertical-align: top; }\n  .image-item .title {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    font-size: 14px;\n    padding: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none; }\n  .image-item .cover {\n    height: 100%; }\n  .image-item .loader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 44px;\n    margin-top: -24px;\n    margin-left: -22px; }\n\n.percent {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n  .percent .percent-inner {\n    height: 4px;\n    background: #20a0ff;\n    width: 0; }\n\nh3 {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  margin: 0;\n  position: relative; }\n\n.bottom {\n  position: relative;\n  padding: 10px 15px;\n  border-top: 1px solid #eee; }\n\n.save-btn {\n  position: absolute;\n  right: 15px;\n  top: 10px; }\n\n.panel-mask {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99; }\n\n.panel-dialog {\n  background: white;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: -150px;\n  margin-left: -120px;\n  width: 240px;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3); }\n\n.panel-dialog-text {\n  margin-top: 25px;\n  margin-bottom: 25px; }\n\n.ok {\n  position: absolute;\n  bottom: 3px;\n  right: 5px;\n  width: 32px; }\n\n.btn-ios {\n  color: #0087ec;\n  border-width: 0;\n  border-top: 1px solid #eee;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer; }\n\n@media (max-width: 1300px) {\n  .panel {\n    margin-top: 20px; } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05e646cd\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./src/videoUploader/index.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-05e646cd","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./src/videoUploader/index.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "mask",
        style: { zIndex: _vm.zIndex }
      },
      [
        _c("div", { staticClass: "panel" }, [
          _vm.showPanelMask
            ? _c("div", { staticClass: "panel-mask" }, [
                _vm.maskText
                  ? _c("div", { staticClass: "panel-dialog" }, [
                      _c("div", { staticClass: "panel-dialog-text" }, [
                        _vm._v(_vm._s(_vm.maskText))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-ios",
                          on: { click: _vm.closeDialog }
                        },
                        [_vm._v("确 定")]
                      )
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("h3", [
            _vm._v("选择视频\n                "),
            _c(
              "span",
              {
                staticClass: "close",
                on: {
                  click: function($event) {
                    return _vm.close(true)
                  }
                }
              },
              [_vm._v("×")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { ref: "frame", staticClass: "image-list" },
            [
              _vm.files.length === 0
                ? [
                    _c("div", { staticClass: "place-holder" }, [
                      _c("img", {
                        attrs: { src: __webpack_require__(/*! ../images/add.png */ "./src/images/add.png"), alt: "" },
                        on: { click: _vm.addFile }
                      }),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "btn", on: { click: _vm.addFile } },
                          [_vm._v("请添加视频")]
                        )
                      ])
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.files, function(file) {
                return _c(
                  "div",
                  { staticClass: "image-item" },
                  [
                    _c(
                      "div",
                      { staticClass: "title" },
                      [
                        file.status === 2
                          ? [_c("span", [_vm._v("上传成功")])]
                          : _vm._e(),
                        _vm._v(" "),
                        file.status === 3
                          ? [_c("span", [_vm._v("上传失败")])]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: { float: "right" },
                            on: {
                              click: function($event) {
                                return _vm.del(file)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    file.status === 1
                      ? [
                          _c("img", {
                            staticClass: "loader",
                            attrs: {
                              src: __webpack_require__(/*! ../images/loader.svg */ "./src/images/loader.svg"),
                              alt: ""
                            }
                          })
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "cover",
                      staticStyle: { height: "64px", "margin-top": "36px" },
                      attrs: { src: __webpack_require__(/*! ../images/video.png */ "./src/images/video.png"), alt: "" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "name" }, [
                      _vm._v(_vm._s(file.name))
                    ]),
                    _vm._v(" "),
                    file.percent && _vm.showProgress
                      ? _c("div", { staticClass: "percent" }, [
                          _c("div", {
                            staticClass: "percent-inner",
                            style: _vm.percentStyle(file)
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    file.status === 2
                      ? _c("img", {
                          staticClass: "ok",
                          attrs: { src: __webpack_require__(/*! ../images/ok.png */ "./src/images/ok.png"), alt: "" }
                        })
                      : _vm._e()
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _vm.files.length > 0
                ? _c(
                    "div",
                    { staticClass: "image-item", on: { click: _vm.addFile } },
                    [
                      _c("img", {
                        staticStyle: { "margin-top": "25px" },
                        attrs: {
                          src: __webpack_require__(/*! ../images/add.png */ "./src/images/add.png"),
                          alt: "添加视频"
                        }
                      })
                    ]
                  )
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "bottom" },
            [
              _vm._v(
                "\n                选择" +
                  _vm._s(_vm.files.length) +
                  "个视频，需要上传 " +
                  _vm._s(_vm.files.length - _vm.uploadSuccessNum) +
                  "个\n                "
              ),
              _vm.uploadFinish
                ? [
                    _c(
                      "span",
                      {
                        staticClass: "btn",
                        staticStyle: { "margin-left": "15px" },
                        on: {
                          click: function($event) {
                            return _vm.up()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        上传\n                    "
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              !_vm.uploadFinish
                ? [
                    _c(
                      "span",
                      {
                        staticClass: "btn btn-disable",
                        staticStyle: { "margin-left": "15px" },
                        on: {
                          click: function($event) {
                            return _vm.up()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        上传中...\n                    "
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "btn save-btn",
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v("确 定")]
              ),
              _vm._v(" "),
              _c("input", {
                ref: "fileInput",
                staticStyle: { display: "none" },
                attrs: { type: "file", multiple: "" },
                on: { change: _vm.selectFile }
              })
            ],
            2
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dc37ded\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./src/imageUploader/index.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5dc37ded","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./src/imageUploader/index.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "mask",
        style: { zIndex: _vm.zIndex }
      },
      [
        _c("div", { staticClass: "panel" }, [
          _vm.showPanelMask
            ? _c("div", { staticClass: "panel-mask" }, [
                _vm.maskText
                  ? _c("div", { staticClass: "panel-dialog" }, [
                      _c("div", { staticClass: "panel-dialog-text" }, [
                        _vm._v(_vm._s(_vm.maskText))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-ios",
                          on: { click: _vm.closeDialog }
                        },
                        [_vm._v("确 定")]
                      )
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("h3", [
            _vm._v("选择图片\n                "),
            _c(
              "span",
              {
                staticClass: "close",
                on: {
                  click: function($event) {
                    return _vm.close(true)
                  }
                }
              },
              [_vm._v("×")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { ref: "frame", staticClass: "image-list" },
            [
              _vm.files.length === 0
                ? [
                    _c("div", { staticClass: "place-holder" }, [
                      _c("img", {
                        attrs: { src: __webpack_require__(/*! ../images/add.png */ "./src/images/add.png"), alt: "" },
                        on: { click: _vm.addFile }
                      }),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "btn", on: { click: _vm.addFile } },
                          [_vm._v("请添加图片")]
                        )
                      ])
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.files, function(file) {
                return _c(
                  "div",
                  { staticClass: "image-item" },
                  [
                    _c(
                      "div",
                      { staticClass: "title" },
                      [
                        file.status === 2
                          ? [_c("span", [_vm._v("上传成功")])]
                          : _vm._e(),
                        _vm._v(" "),
                        file.status === 3
                          ? [_c("span", [_vm._v("上传失败")])]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: { float: "right" },
                            on: {
                              click: function($event) {
                                return _vm.del(file)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    file.status === 1
                      ? [
                          _c("img", {
                            staticClass: "loader",
                            attrs: {
                              src: __webpack_require__(/*! ../images/loader.svg */ "./src/images/loader.svg"),
                              alt: ""
                            }
                          })
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "cover",
                      attrs: { src: file.thumb, alt: "" }
                    }),
                    _vm._v(" "),
                    file.percent && _vm.showProgress
                      ? _c("div", { staticClass: "percent" }, [
                          _c("div", {
                            staticClass: "percent-inner",
                            style: _vm.percentStyle(file)
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    file.status === 2
                      ? _c("img", {
                          staticClass: "ok",
                          attrs: { src: __webpack_require__(/*! ../images/ok.png */ "./src/images/ok.png"), alt: "" }
                        })
                      : _vm._e()
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _vm.files.length > 0
                ? _c(
                    "div",
                    { staticClass: "image-item", on: { click: _vm.addFile } },
                    [
                      _c("img", {
                        staticStyle: { "margin-top": "25px" },
                        attrs: {
                          src: __webpack_require__(/*! ../images/add.png */ "./src/images/add.png"),
                          alt: "添加视频"
                        }
                      })
                    ]
                  )
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "bottom" },
            [
              _vm._v(
                "\n                选择" +
                  _vm._s(_vm.files.length) +
                  "个图片，需要上传 " +
                  _vm._s(_vm.files.length - _vm.uploadSuccessNum) +
                  "个\n                "
              ),
              _vm.uploadFinish
                ? [
                    _c(
                      "span",
                      {
                        staticClass: "btn",
                        staticStyle: { "margin-left": "15px" },
                        on: {
                          click: function($event) {
                            return _vm.up()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        上传\n                    "
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              !_vm.uploadFinish
                ? [
                    _c(
                      "span",
                      {
                        staticClass: "btn btn-disable",
                        staticStyle: { "margin-left": "15px" },
                        on: {
                          click: function($event) {
                            return _vm.up()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        上传中...\n                    "
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "btn save-btn",
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v("确 定")]
              ),
              _vm._v(" "),
              _c("input", {
                ref: "fileInput",
                staticStyle: { display: "none" },
                attrs: { accept: _vm.fileAccept, type: "file", multiple: "" },
                on: { change: _vm.selectFile }
              })
            ],
            2
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05e646cd\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-05e646cd","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-05e646cd","scoped":true,"sourceMap":true}!../node_modules/sass-loader/lib/loader.js!./uploader.scss */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05e646cd\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("24efd7d8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5dc37ded\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-5dc37ded","scoped":true,"sourceMap":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-5dc37ded","scoped":true,"sourceMap":true}!../node_modules/sass-loader/lib/loader.js!./uploader.scss */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5dc37ded\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3deb3d6a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
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
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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


/***/ }),

/***/ "./src/baseViewCtrl.js":
/*!*****************************!*\
  !*** ./src/baseViewCtrl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _func = __webpack_require__(/*! ./func */ "./src/func.js");

exports.default = {
    data: function data() {
        return {
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
        show: function show(newVal) {

            // 当打开的时候
            if (newVal) {
                //禁止body滚动
                document.body.style.overflow = 'hidden';
                this.files = this._uploader.getFiles();

                document.addEventListener('keydown', this.onEsc, false);
            } else {
                document.removeEventListener('keydown', this.onEsc, false);
            }
        },
        files: function files(newVal) {
            var num = 0;
            newVal.forEach(function (item) {
                if (item.returnJson && item.returnJson.success) {
                    num++;
                }
            });
            (0, _func.log)('files update');
            this.uploadSuccessNum = num;
        }
    },

    methods: {
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
            }
            // 避免vue不更新
            self.files = self._uploader.getFiles();
        },
        up: function up() {
            // 没有需要选择的图片
            if (this.files.length - this.uploadSuccessNum > 0) {
                if (this.uploadFinish) {
                    this.uploadFinish = false;
                    this._uploader.upload();
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
            }

            //不再禁止滚动
            document.body.style.overflow = '';
            me.$emit('finish', files);
            me.files = [];
            // 上传状态
            me.uploadFinish = true;
            me.uploadSuccessNum = 0;
            me._uploader.clear();
        },
        percentStyle: function percentStyle(file) {
            return {
                width: file.percent + '%'
            };
        }
    }
};

/***/ }),

/***/ "./src/ctrl.js":
/*!*********************!*\
  !*** ./src/ctrl.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jeromeetienne/microevent.js
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

/***/ "./src/func.js":
/*!*********************!*\
  !*** ./src/func.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 文件上传状态
var isDebug = false;

var counter = 0;

module.exports = {
  UPLOAD_STATUS: {
    WAIT: 0,
    UPLOAD_ING: 1,
    SUCESS: 2,
    FAILED: 3
  },
  log: function log(info) {
    if (isDebug) {
      console.trace(info);
    }
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

/***/ }),

/***/ "./src/imageUploader/uploader.vue":
/*!****************************************!*\
  !*** ./src/imageUploader/uploader.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!./main.js */ "./node_modules/babel-loader/lib/index.js!./src/imageUploader/main.js");
/* harmony import */ var _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dc37ded_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-5dc37ded","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./index.html */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dc37ded\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./src/imageUploader/index.html");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-5dc37ded","scoped":true,"sourceMap":true}!sass-loader!../uploader.scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5dc37ded\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss")
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dc37ded"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0___default.a,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dc37ded_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dc37ded_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/imageUploader/uploader.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/images/add.png":
/*!****************************!*\
  !*** ./src/images/add.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABLCAIAAAB7tddWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Q0VBNzA0MjEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Q0VBNzA0MzEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzNDA2MkY1MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzNDA2MkY2MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K6izdgAAAvpJREFUeNrsnFmPqkAQhWmX667gEp9c/v+/MkSDG+4LrvdcSYgRbw/0ALZQ9WBUJOn+uqvqHGCG3e93hUJRUoSAQBAIAkEgCASBIBAE4neRicEcII51Xb/dbnjPGOt0OqlUKok7ApN3jIKwY6DUIBAEgkAQCALho/X47TeXy8U0TcuyrtdrZKPs9/v2m8FgINYgf9QX/gTV+Xw2DCNKBJKmxmKxsAVc0kEcDgfyGq8CNp/Pa5qWy+WiHG6v13v7/XPt6Ha7Al5D3HQ1Go1sNkvtU8lkMsmtESSoCASBSFqEW/DQ0tbr9W63O51OKK6FQkFV1XQ6nSwQ0OOTyQSvjknZbDaA0mq1QCQafSFFasxmM4eCE1Do0+lUQrcSFggsPhzq20NgsVqtkpIax+MxMs+C/aXruvMxaonND75J9W5hUWWxuYAVdRfTg8EplUphGJywQPAFuBd5Dlhw/aDwwgVtCDgCdzph1QisG+dosVjkn44WYxjGC4XnvBuNRtvt9gtA2Hv47SGsZKVS4ef8eDzG4vMVCrpSgEU3xPbZbDar1erLl1AQ7XabU8xAAXvB3XffBnIHwkR2QcUYq9fr5XIZOxkTg6BEkeNLKdQF7AWPFBy1AoUmu8RG/HmE91nxM+J/ORIr07VcLvf7feCt+stAQGIBRNJtOJolDAhdj/hXGj5+u+TzIKAF+MbkK00XFta2BhDRUE0/9gv8Elogbu4TBW8+nyPhHSeuaVqtVuNQC6TzyQUCXsg0TbfyAxfIKogr9ynP1GJyYQZ57qbg7AuIRfclKZwSlDqWBQSmxM9zFALYh+fFBwJJSkNgqeFxSrAPw+EQ9QJew7Is2Sj8FgSW2nu1gylYPkKRMsRTA+4IcjA2fxsnDkLOq/IfACFP54uP1yAQBIJAEIh4gWCPkHk+GJ7AjU/fICJ+qlIghEfoDwQMtRjvyLYDRih4rsDT+bBM9tP5kuhrzN++e6SqqvCdYUb/SIO6BoEgEASCQBAIAkEgCEQg8VeAAQAB1bbO2qoeewAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/loader.svg":
/*!*******************************!*\
  !*** ./src/images/loader.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDJweCcgaGVpZ2h0PSc0MnB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzBzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMTY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzMnIHJ5PSczJyBmaWxsPScjN2Q3ZDdkJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjc1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMzAwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC44MzMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSczJyByeT0nMycgZmlsbD0nIzdkN2Q3ZCcgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC45MTY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PC9zdmc+"

/***/ }),

/***/ "./src/images/ok.png":
/*!***************************!*\
  !*** ./src/images/ok.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAACIUlEQVRYR+2X8VXbMBDGv5ugMEHFBMAETTdgA6wJCBOQTkA6gegG3QCYALqBugGd4PrOuRDjSJbsCGzes/9MzrqfvtN9JxM+yUOfhBMzaOlKzYrOipZW4ND1jOMjEG7A+OstrSd5Ro3jCoRbAEdgXE8S1Di+A+HytSKM797Sw6QU3YMU2qmBBiGnBhqF3IBab+lu9NJr47ioSzB+eEurUUGN4zMQ7uvujj1jg6pPCuRZp+cyfnpLy9EUNY7XIFwlBwPj0VtajAJqHC+05ElOMH55S9VYoM8gnCZK/g9A5S39lrjioKKWTJIYhHG8qmd418N4BHDhLb1sw4qBageLzRgwTppJtsmMYwPCU6LL61K391EE1Dheqkobm1FLaSczjh9A+NZhRbW5h/4/CFQVEhUXrcVffEXHzd+SDaQTKLaJwaB7KrYztBIbx/EGSkAOaiY1alHxIuEt3ld0IjGdYzIDchCoJjYApHt398YQtUIYxx6Er3shOnXSZnqgPdVnFJCLbqxBvNx+guauRp4DOVjRQDcvVeEvgcTihW8vHYw/3lL3jG8tNLiZArCSWOwnBLsLZ8jEMSGf7VK3GKie3TSsflrklrz4ZGpMnzhsZBDkQBdVtAErn7tvb+0DzmVzA+8CGvROxrm39JyjXvERmkqq0+s2NvtT73+Ioo1jsBbr6tvl7U28W+n7qJUTO4PmqNQnZla0j1o5sbOiOSr1ifkPfFnUK5jHM9IAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/video.png":
/*!******************************!*\
  !*** ./src/images/video.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIoElEQVR4Xu2df4wcZRnHv8/sHucVr7ez4Bl+RSo32xIjYjQhSOIPDP4AxAQS0aghBE293ZNAE0XxBy2okRKttrdzd0ATkhYplGKCRg3/SPyD+mfREO3MXdso/kg0u9egaWtv5zHbE2Og3sy7+7x789489++8z/d9nu/zuXlnZ9+dIehfoR2gQlevxUMBKDgECoACUHAHCl6+ngEUgII7UPDy9QygAAzGgWozvpsJ7wf4CgJdOphZ3ZqFwS8C9FLC+PHxRvD0ILK3fgbwwyNXEC/tA9Hlgyho7czBB7hUuqO9+bLjNmuyCoC/a+Ht5HUOguhcm0WsVW0G/6Y9MnQVbt9w0laNVgGoNqPfgWiTreQLocv0QKsx8U1btVoDYGw2uq6U0HO2Ei+KLjMW243At1WvNQD8ZryLCFO2Ei+SbkL4wOJk8LyNmq0BUA2jpwG6xUbSxdOkza36xMM26rYGgN+MnyXCx2wkXTRNBr7WrgffsVG3AmDDVWFNBUDYUNfkFADXOiacrwIgbKhrcgqAax0TztdNAML42wCuEfaimHKMR9qN4HEbxVv7FGAjWdWUd0ABkPfUKUUFwKl2ySerAMh76pSiAuBUu+STVQDkPXVKsWcA1s0du2C4k0wwdUpOVbzGkvU6ONWisd+iMf6PXkozAuCNM/Pj5yTJgwy6gQhv6mVCjbHjADMfZaLHFuvB/SYzZAagOhN/mJl/RKCqyQQ6drAOMPMhgndTqzHxxywzZwJg/XR0VdmjX2cR1DGr7wAz5tsYe2eWZSETAH4YHSLQO1a/NM0gswOEra3JYFva+FQAqtPx1fDwQpqQHs+bA/yXVr12YVpWqQD4YfxVAqxsR0pLTo/358DpUvnyVzZv+P1KKhkAiLYT6Ev9paLRq+EAg65v1yd+3hcA1TDeAeCu1ShA5+zTgQS3tqaCpxSAPn10NlwBcLZ1MokrADI+OquiADjbOpnEFQAZH51VUQCcbZ1M4gqAjI/OqigAzrZOJnEFQMZHZ1UUAGdbJ5O4AiDjo7MqCoCzrZNJXAGQ8dFZFQXA2dbJJC4BQCWMv+cBW2QyGqwKg2bB/DMCHWq9YWlx7FS55iG5jUBfHGwmqzbbJ1r1YP9Ks6duCHESAMZfwbi5NRUcPFvxo+GRjUPc2QvCu1etNYOZuH8AXNsQwuC/nyS+8sTkxj+t6PFWLvvj89vA+AoRvMH0Y8CzSCwBzgFA9Kn25MS+rFYvb3rl/QBdlDXGmXESALi0BDD4WLte22DaIH9uYQydziyBPmkam/PxAktAM/4+CHfnvNAz6TF4V7teu7PXXCsz8Wc95iZAo71q5CpO4gzg0hKQAPeZ/jbutQ1bt+sPFw6XTu0n4D25amYvyUgA4NgS8OV2vfZQL169NsYP43sJ6D7oyuU/gSXAoW3hzHxPu1HbLtWxSjO6kggHCPRWKc2B6kicAVxaAqQBONOsuT+v85f++QMifH6gzZOYTAGQcHFZw5+JbkRCe4hQkVO1rKQAyBp87iNH3jz8r6XHQfRBWWVLagqAHWMrYXwXMb5LhGE7MwipKgBCRp5FZnTu6KahpdPP5Pp1eAqAPQDOKD/10jnVvw1vZ+I7CUj9Ys1yNq+XVwAGY/nYzPy1JeYnAIwPZsaMs0gAUNQbQRkt/u+w0bnD5w91vF8AeJdprMXxAjeCXPouQPhGkGljqjvj9VzmX+XmeUp6BjBtYf/j188uBOUkifpXElEQOAMU+FZwry3IzSvzJM4AVV0CjDnww+gLBJoxDpQOEAFAzwDGbak25z8C4hUfzmQs2kuABAD6KcDc+UoYv88DrLzr1zCb/q8BFABDywFUwvnbPPBj5pHiEf0DUPivg3voiR/Gewj4TA+hsiESS4BeBJr1pLLjaIWGl44RMGYWaWG0BAC6BJg1xg+jnxDoRrMoa6N1CbBm7VmE/Wa8lwifHuScK84lcQbQa4D0di6/SYX3gPCh9NEDHKEA2Dd7bDa6zkvQfZPK+fZnM5xBATA0zGT4zni4WqIHc7sXoFuLAmDS0exjR6cXamVKniHC27JHrcJIBUDedL8ZbSbQDhBG5NWFFRUAOUOXP9+f3kugG+RULSspADIG+zPz1xAn3Z+QXyCjOCAVBaBPo5cfInE/GPc4+RAJBaB3ACrTR97ieZ0DOdvjZ1aQBAAu3QpOwN9YrNe+ZebS60dXwuh2D/jhGnhOQP+3gl0CgBlhuxE0egVgeVMnHibg1l41chbXPwAu3QoG+HCrXtvUSxO6r8ctedhHoEt7ic9ljMQS4BYAQMJ07WJj4peZG7KVvcp4fC8x7iOicuY4FwZKAODSEtDtCYNfbJ8cuRpbLjmR1qNqc/4SRrKXiN6bNtbR4/0vAa4BsAwBnm3Xg4+v1LRKc+FmQrLbqd/7m1NYTAD+A8ELCWPb8Ubw3P/6Vt0ZX8xlfmgNPhLubHgUF4BX3WBggRjPJ4TjBK7laLeO+f+zeUT/ALh2EWju0RqOkLgIVAAcBkQBcLh5EqkrABIuOqyhADjcPInUFQAJFx3WUAAcbp5E6gqAhIsOaygADjdPInUFQMJFhzUUAIebJ5G6AiDhosMaCoDDzZNIXQGQcNFhDQXA4eZJpK4ASLjosIYMANEDAH3dYRuKmzrTR1uNie4DrP/vX+oz7qvN+A4QHi2ui+5WfjrxNr4yddmKzy1OBWBk5vBFI+y97K4NBc2cEbUawca06lMB6Ar4YfREQTZRpvnlznHG51qNYHdawpkAGJ1++bwhOnEIhIvTBPX46jvA4J+2J4ObQMRp2WQCoCuyvJ0aT66Jd+qmueLyccaOViPYkrWEzAC8KnjmohB8PROdl3USHWfdASbGAhi7W1PBQZPZjAEwEdex+XdAAch/j6xmqABYtTf/4gpA/ntkNUMFwKq9+RdXAPLfI6sZKgBW7c2/uAKQ/x5ZzVABsGpv/sX/DbvSIr1E/hAuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploader = __webpack_require__(/*! ./imageUploader/uploader.vue */ "./src/imageUploader/uploader.vue");

var _uploader2 = _interopRequireDefault(_uploader);

var _uploader3 = __webpack_require__(/*! ./videoUploader/uploader.vue */ "./src/videoUploader/uploader.vue");

var _uploader4 = _interopRequireDefault(_uploader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  VueImageUploader: _uploader2.default, VueVideoUploader: _uploader4.default
};

/***/ }),

/***/ "./src/props.js":
/*!**********************!*\
  !*** ./src/props.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  accept: {
    type: Array,
    default: function _default() {
      return ['jpg', 'png', 'gif', 'bmp', 'jpeg'];
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
    default: function _default() {
      return {
        timeout: 120
      };
    },
    type: Object
  }
};

/***/ }),

/***/ "./src/uploader.js":
/*!*************************!*\
  !*** ./src/uploader.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ctrl = __webpack_require__(/*! ./ctrl */ "./src/ctrl.js");

var _ctrl2 = _interopRequireDefault(_ctrl);

var _func = __webpack_require__(/*! ./func */ "./src/func.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @version 0.1.1 上传组件
 */
var Uploader = function (_Ctrl) {
  _inherits(Uploader, _Ctrl);

  function Uploader(options) {
    _classCallCheck(this, Uploader);

    var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this));

    var self = _this;
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
    }
    // 浅拷贝，对象属性会覆盖而不是合并
    self.options = Object.assign({}, defaultOptions, options);
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

      if (self.haveUploading()) {
        (0, _func.log)('正在上传，请等待');
        return false;
      }
      var files = self._files;
      var queue = [];
      // 上传的时候将上传失败的文件设置为等待
      files.forEach(function (item) {
        if (item.status === _func.UPLOAD_STATUS.FAILED) {
          item.status = _func.UPLOAD_STATUS.WAIT;
        }
      });

      for (var _i = 0; _i < files.length; _i++) {
        var file = files[_i];
        if (file.status === _func.UPLOAD_STATUS.WAIT) {
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
    key: '_upload',
    value: function _upload() {
      var self = this;
      var file = self._queue[self.queueIndex];
      self.queueIndex++;
      if (typeof file === 'undefined') {
        (0, _func.log)('已经上传到最后');
        return false;
      }
      var options = self.options;
      var xhr = new XMLHttpRequest();
      // 超时
      console.log(options.timeout);
      xhr.timeout = options.timeout * 1000;
      var formData = new FormData();
      formData.append(options.fileParamName, file.source);
      for (var key in options.param) {
        formData.append(key, options.param[key]);
      }

      file.status = _func.UPLOAD_STATUS.UPLOAD_ING;
      xhr.onload = function () {

        if (xhr.status < 200 || xhr.status >= 300) {
          (0, _func.log)(xhr.status);
          self.onFail(file);
          if (options.onError) {
            return option.onError(xhr);
          } else {
            return false;
          }
        }

        var json = {};
        // 不要将onSuccess或者onError包括道try中
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
      xhr.onabort = onNetError;
      // 无网络等原因导致错误
      xhr.onerror = onNetError;
      // 请求超时
      xhr.ontimeout = onNetError;
      function updateProgress(event) {
        console.log(event.loaded);
        var complete = event.loaded / event.total * 100 | 0;
        file.percent = complete;
        self.trigger('progress', file);
      }
      if (options.showProgress) {
        xhr.upload.onprogress = updateProgress;
      }
      // progress事件需要注册在open之前，否则无响应
      xhr.open('post', options.uploadUrl);
      xhr.send(formData);
    }
    // 是否正在上传

  }, {
    key: 'haveUploading',
    value: function haveUploading() {
      var self = this;
      var haveUploading = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = self._files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.status === _func.UPLOAD_STATUS.UPLOAD_ING) {
            haveUploading = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return haveUploading;
    }
  }, {
    key: 'onEnd',
    value: function onEnd(file) {
      var self = this;
      self._upload();
      // 所有的文件都执行完毕，未必都成功
      if (!self.haveUploading()) {
        var _flag = true;
        self.queueIndex = 0;
        self._files.forEach(function (item) {
          if (item.status === _func.UPLOAD_STATUS.FAILED) {
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
      file.status = _func.UPLOAD_STATUS.SUCESS;
      file.returnJson = json;
      self.trigger('uploadSuccess', file);
      self.onEnd(file);
    }
  }, {
    key: 'onFail',
    value: function onFail(file) {
      var self = this;
      file.status = _func.UPLOAD_STATUS.FAILED;
      self.trigger('uploadFail', file);
      self.onEnd(file);
    }
  }, {
    key: 'addFile',
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
        id: (0, _func.uuid)(),
        status: _func.UPLOAD_STATUS.WAIT,
        thumb: '',
        name: sourceFile.name,
        size: sourceFile.size
      };

      self._files.push(file);
      if (options.thumb) {
        if (options.compress) {
          self._makeThumb(file);
        } else {
          file.thumb = (0, _func.createObjectURL)(sourceFile);
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
      this.makeThumb(file.source, function (thumbUrl) {
        file.thumb = thumbUrl;
      });
    }
  }, {
    key: 'makeThumb',
    value: function makeThumb(sourceFile, callback) {
      var thumbOptions = this.options.thumb;
      var blob_url = (0, _func.createObjectURL)(sourceFile);
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
        callback(blob_image_url);
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
    }
  }, {
    key: 'stop',
    value: function stop() {}
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this._files;
    }
    /**
     * 将上传队列清空
     */

  }, {
    key: 'clear',
    value: function clear() {
      //
      this._files = [];
    }
  }]);

  return Uploader;
}(_ctrl2.default);

module.exports = Uploader;

/***/ }),

/***/ "./src/videoUploader/uploader.vue":
/*!****************************************!*\
  !*** ./src/videoUploader/uploader.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!./main.js */ "./node_modules/babel-loader/lib/index.js!./src/videoUploader/main.js");
/* harmony import */ var _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e646cd_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-05e646cd","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./index.html */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05e646cd\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./src/videoUploader/index.html");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-05e646cd","scoped":true,"sourceMap":true}!sass-loader!../uploader.scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05e646cd\",\"scoped\":true,\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js!./src/uploader.scss")
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05e646cd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_main_js__WEBPACK_IMPORTED_MODULE_0___default.a,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e646cd_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e646cd_hasScoped_true_optionsId_0_buble_transforms_index_html__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/videoUploader/uploader.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

/******/ });
//# sourceMappingURL=vueUploader.js.map