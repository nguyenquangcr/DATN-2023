module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/HorizontalWidget/index.jsx":
/*!***********************************************!*\
  !*** ./components/HorizontalWidget/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/ProgressiveMedia */ "./components/ProgressiveMedia/index.jsx");
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/HorizontalWidget/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\meovathay\\application\\components\\HorizontalWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Components

 // Utils

 // Assets



function HorizontalWidget(props) {
  try {
    let posts = props.posts || [];

    if (posts.length) {
      // Validate and format time
      posts = posts.map(post => {
        if (post) {
          if (post.time) {
            // Format time to display
            let time = Object(Libs_utils__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(post.time, 'YYYY-MM-DD HH:mm:ss');

            if (time && time.string) {
              post.recent = time.string;
            }
          } // Images


          post.background = Object(Libs_utils__WEBPACK_IMPORTED_MODULE_4__["getPostImage"])(post, props.background);
          return post;
        }
      });
    }

    return __jsx("ul", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['horizontal-news'], props.isSmallLayout && _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['horizontal-small'], props.className),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, !props.skeletonLoading && posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, posts.map((post, key) => {
      if (key + 1 > props.number) {
        return null;
      }

      return __jsx("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.isRowReverse && _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['row-reverse'], 'clearfix'),
        key: post.pid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 41
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['left']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 45
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/post?slug=' + post.slug + '&pid=' + post.pid,
        as: '/' + post.slug + '-p' + post.pid + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 49
        }
      }, __jsx("a", {
        title: post.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 53
        }
      }, __jsx(Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
        alt: post.title,
        thumb: post.thumb,
        src: post.background,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 57
        }
      })))), __jsx("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['right'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 45
        }
      }, __jsx("h3", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 49
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/post?slug=' + post.slug + '&pid=' + post.pid,
        as: '/' + post.slug + '-p' + post.pid + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 53
        }
      }, __jsx("a", {
        title: post.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 57
        }
      }, post.title))), props.isShowCategory ? __jsx("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['meta'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 57
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/category-by-id?slug=' + post.category.shorten + '&cid=' + post.category.id,
        as: '/' + post.category.shorten + '-c' + post.category.id + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 61
        }
      }, __jsx("a", {
        title: post.title,
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['meta-category'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 65
        }
      }, post.category && post.category.title ? post.category.title : '')), " - ", __jsx("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['meta-time'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 71
        }
      }, post.recent || '3 giờ trước')) : null, props.isShowDescription ? __jsx("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 57
        }
      }, post.description) : null));
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Array(props.skeletonNumber).fill(__jsx("li", {
      key: 1,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-left']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 49
      }
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 49
      }
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['category'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 49
      }
    })))))));
  } catch (error) {// Error
  }
}

const defaultProps = {
  skeletonLoading: false,
  skeletonNumber: 1,
  number: 10,
  className: '',
  isShowCategory: true,
  isShowDescription: true,
  isRowReverse: false,
  isSmallLayout: false,
  background: 'large',
  // large, normal, medium, small
  posts: [{
    pid: 1,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
    thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
    time: '2020-04-04 11:06:15',
    category: {
      'id': 12,
      'title': 'Giải trí',
      'slug': 'giai-tri',
      'href': 'http://localhost:8012/giai-tri.htm'
    }
  }, {
    pid: 2,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
    thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
    time: '2020-04-04 11:06:15',
    category: {
      'id': 12,
      'title': 'Giải trí',
      'slug': 'giai-tri',
      'href': 'http://localhost:8012/giai-tri.htm'
    }
  }, {
    pid: 3,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    slug: 'harper-beckham-nam-tay-bo-o-san-bay-miami',
    thumb: '//image.tuoitreplus.com/upload/2018/03/250x156/adc9rp7f53.jpg',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html',
    time: '2020-04-04 11:06:15',
    category: {
      'id': 12,
      'title': 'Giải trí',
      'slug': 'giai-tri',
      'href': 'http://localhost:8012/giai-tri.htm'
    }
  }]
};
HorizontalWidget.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (HorizontalWidget);

/***/ }),

/***/ "./components/HorizontalWidget/styles.module.scss":
/*!********************************************************!*\
  !*** ./components/HorizontalWidget/styles.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"horizontal-news": "horizontal-news___29JQr",
	"horizontal-small": "horizontal-small___2kjoG",
	"left": "left___40o0z",
	"right": "right___3hkfO",
	"title": "title___1thxL",
	"row-reverse": "row-reverse___3jVeu",
	"meta": "meta___2-L4X",
	"meta-category": "meta-category___1myZ3",
	"meta-time": "meta-time___2U-qI",
	"description": "description___2i3hf",
	"progress-loading": "progress-loading___dBh7p",
	"article": "article___2STKJ",
	"article-left": "article-left___3ncXP",
	"background": "background___Raf-K",
	"article-right": "article-right___1mMjJ",
	"category": "category___33r42",
	"animated-load": "animated-load___SY2im",
	"placeHolderShimmer": "placeHolderShimmer___1dSsl"
};

/***/ }),

/***/ "./components/ListWidget/index.jsx":
/*!*****************************************!*\
  !*** ./components/ListWidget/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/ListWidget/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\meovathay\\application\\components\\ListWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const defaultProps = {
  className: '',
  number: 10,
  posts: []
};

function ListWidget(props) {
  const {
    posts
  } = props;
  return __jsx("div", {
    style: _objectSpread({}, props.style),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['widget'], 'mb-20'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['widget-list'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, posts.map((post, key) => {
    if (key >= props.number) {
      return null;
    }

    return __jsx("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['post'],
      key: 'widget-list-' + post.pid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/post?slug=' + post.slug + '&pid=' + post.pid,
      as: '/' + post.slug + '-p' + post.pid + '.html',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }
    }, __jsx("a", {
      title: post.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 41
      }
    }, post.title))));
  })));
}

ListWidget.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ListWidget);

/***/ }),

/***/ "./components/ListWidget/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/ListWidget/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"widget": "widget___3dvEe",
	"widget-list": "widget-list___1SyOv",
	"post": "post___mrLee"
};

/***/ }),

/***/ "./components/ProgressiveMedia/index.jsx":
/*!***********************************************!*\
  !*** ./components/ProgressiveMedia/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "lazysizes");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "lazysizes/plugins/parent-fit/ls.parent-fit");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/ProgressiveMedia/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Static_images_no_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Static/images/no-image.png */ "./public/images/no-image.png");
/* harmony import */ var Static_images_no_image_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Static_images_no_image_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\meovathay\\application\\components\\ProgressiveMedia\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Assets



const defaultProps = {
  alt: '',
  thumb: Static_images_no_image_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  src: Static_images_no_image_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  scaleOnHover: true
};

class ProgressiveMedia extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.width = props.width || '';
    this.height = props.height || '';
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("figure", {
      ref: this.myRef,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['progressive-figure'],
      style: this.width ? {
        width: this.width
      } : {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['aspect-ratio-placeholder'],
      style: this.height ? {
        height: this.height
      } : {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['aspect-ratio-placeholder-fill'],
      style: {
        paddingBottom: '57.8%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['progressive-media'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['is-image-loaded'], {
        [_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['scale-on-hover']]: this.props.scaleOnHover
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['centered']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, this.props.src ? __jsx("img", {
      alt: this.props.alt,
      loading: "lazy",
      src: this.props.thumb,
      "data-src": this.props.src,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['progressive-media-image'], 'lazyload w-full h-full'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 41
      }
    }) : null, __jsx("noscript", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, __jsx("img", {
      alt: this.props.alt,
      loading: "lazy",
      src: this.props.src,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['progressive-media-image'], 'w-full h-full'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    })))))));
  }

}

ProgressiveMedia.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ProgressiveMedia);

/***/ }),

/***/ "./components/ProgressiveMedia/styles.module.scss":
/*!********************************************************!*\
  !*** ./components/ProgressiveMedia/styles.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"progressive-figure": "progressive-figure___3Ls9B",
	"aspect-ratio-placeholder": "aspect-ratio-placeholder___3itH3",
	"aspect-ratio-placeholder-fill": "aspect-ratio-placeholder-fill___1wttt",
	"progressive-media": "progressive-media___18Q9A",
	"progressive-media-thumb": "progressive-media-thumb___2L5Cg",
	"progressive-media-image": "progressive-media-image___2sPtD",
	"centered": "centered___2rOUX",
	"is-image-loaded": "is-image-loaded___zz1ZW",
	"scale-on-hover": "scale-on-hover___tpOnX"
};

/***/ }),

/***/ "./components/SidebarHighlightWidget/index.jsx":
/*!*****************************************************!*\
  !*** ./components/SidebarHighlightWidget/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/ProgressiveMedia */ "./components/ProgressiveMedia/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SidebarHighlightWidget/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");

var _jsxFileName = "E:\\meovathay\\application\\components\\SidebarHighlightWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







const defaultProps = {
  className: '',
  title: 'Quý cô sành',
  postNumber: 5,
  background: 'large',
  // large, normal, medium, small
  posts: []
};

function SidebarHighlightWidget(props) {
  const {
    title,
    posts
  } = props;
  const featurePost = posts.length ? posts[0] : {};
  const featureBackground = Object(Libs_utils__WEBPACK_IMPORTED_MODULE_6__["getPostImage"])(featurePost, props.background);
  return __jsx("div", {
    style: _objectSpread({}, props.style),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['horizontal-widget-news'], 'mb-20'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['tab-title'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, title))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['featured'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/post?slug=' + featurePost.slug + '&pid=' + featurePost.pid,
    as: '/' + featurePost.slug + '-p' + featurePost.pid + '.html',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("a", {
    title: featurePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, featurePost.title), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['thumb-image'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, featurePost.background && __jsx(Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scaleOnHover: true,
    alt: featurePost.title,
    thumb: featurePost.thumb,
    src: featureBackground,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 59
    }
  }), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['tag'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, title)))), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, featurePost.description)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['post-list'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, posts.map((post, key) => {
    if (key >= 1 && key <= props.postNumber) {
      return __jsx("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['post'],
        key: key,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: '/post?slug=' + post.slug + '&pid=' + post.pid,
        as: '/' + post.slug + '-p' + post.pid + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 41
        }
      }, __jsx("a", {
        title: post.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 45
        }
      }, post.title))));
    }
  })));
}

SidebarHighlightWidget.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (SidebarHighlightWidget);

/***/ }),

/***/ "./components/SidebarHighlightWidget/styles.module.scss":
/*!**************************************************************!*\
  !*** ./components/SidebarHighlightWidget/styles.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"horizontal-widget-news": "horizontal-widget-news___3CGAN",
	"tab-title": "tab-title___20t65",
	"featured": "featured___1jy23",
	"title": "title___2tqy-",
	"thumb-image": "thumb-image___5u145",
	"tag": "tag___gOh5H",
	"description": "description___3qdt1",
	"post-list": "post-list___20NFT",
	"post": "post___1p5NI"
};

/***/ }),

/***/ "./components/VerticalWidget/index.jsx":
/*!*********************************************!*\
  !*** ./components/VerticalWidget/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/ProgressiveMedia */ "./components/ProgressiveMedia/index.jsx");
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/VerticalWidget/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\meovathay\\application\\components\\VerticalWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const defaultProps = {
  className: '',
  title: 'Quý cô sành',
  isShowTag: true,
  isShowDescription: true,
  background: 'large',
  post: {}
};

function VerticalWidget(props) {
  const {
    title,
    post
  } = props;
  const background = Object(Libs_utils__WEBPACK_IMPORTED_MODULE_4__["getPostImage"])(post, props.background);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['featured']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/post?slug=' + post.slug + '&pid=' + post.pid,
    as: '/' + post.slug + '-p' + post.pid + '.html',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("a", {
    title: post.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['thumb-image'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, background && __jsx(Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scaleOnHover: true,
    alt: post.title,
    thumb: post.thumbnail,
    src: background,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 43
    }
  }), props.isShowTag && __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['tag'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 48
    }
  }, title)), __jsx("h3", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, post.title))), props.isShowDescription ? __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, post.description) : null);
}

VerticalWidget.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (VerticalWidget);

/***/ }),

/***/ "./components/VerticalWidget/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/VerticalWidget/styles.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"featured": "featured___2htff",
	"title": "title___2fQU3",
	"thumb-image": "thumb-image___Rjs6u",
	"tag": "tag___eCgBJ",
	"description": "description___3t-ht"
};

/***/ }),

/***/ "./config/app.js":
/*!***********************!*\
  !*** ./config/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const env = "development" || false;
const App = {
  development: {
    SITE_URL: 'http://localhost:3000/',
    MOBILE_SITE_URL: 'http://localhost:8012/',
    API_HOST: 'https://meovathay.vn/v2/api/'
  },
  sandbox: {
    SITE_URL: 'http://sandbox.meovathay.vn/',
    MOBILE_SITE_URL: 'http://sandbox-m.meovathay.vn/',
    API_HOST: 'http://sandbox.meovathay.vn/v2/api/'
  },
  production: {
    SITE_URL: 'https://meovathay.vn/',
    MOBILE_SITE_URL: 'https://m.meovathay/',
    API_HOST: 'https://meovathay.vn/v2/api/'
  }
}[env];
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./config/constant.js":
/*!****************************!*\
  !*** ./config/constant.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./config/app.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const Constant = _objectSpread(_objectSpread({}, _app__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  STATIC_VERSION: 123,
  KEYCODE: {
    ENTER: 13
  },
  SEARCH_TO_QUERY: 1,
  QUERY_TO_SEARCH: 2
});

/* harmony default export */ __webpack_exports__["default"] = (Constant);

/***/ }),

/***/ "./libs/utils.js":
/*!***********************!*\
  !*** ./libs/utils.js ***!
  \***********************/
/*! exports provided: formatTime, quoteDoubleToSingle, handleError, mapSearchAndParam, getObjectPropSafely, getPostImage, gtagInject, gtagTrackingEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteDoubleToSingle", function() { return quoteDoubleToSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSearchAndParam", function() { return mapSearchAndParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectPropSafely", function() { return getObjectPropSafely; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostImage", function() { return getPostImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtagInject", function() { return gtagInject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtagTrackingEvent", function() { return gtagTrackingEvent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const formatTime = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  try {
    // 07/03/2020 21:34:30 => 3 seconds ago
    // 07/03/2020 21:34:30 => 3 minutes, 15 seconds ago
    // 07/03/2020 21:34:30 => 3 hours ago
    // 07/03/2020 10:34:30 => >24h => 07/03/2020 10:34:30
    if (time) {
      let seconds = moment__WEBPACK_IMPORTED_MODULE_1___default()().diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(time, format), 'seconds');

      if (seconds && +seconds > 0) {
        if (seconds < 60) {
          return {
            duration: seconds,
            type: 'second',
            string: '1 phút trước'
          };
        } else {
          let minutes = Math.round(seconds / 60);

          if (minutes > 60) {
            // Hours
            let hours = Math.round(minutes / 60);

            if (hours > 24) {
              return {
                duration: Math.round(hours / 24),
                type: 'day',
                string: moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format('HH:mm | DD/MM')
              };
            } else {
              let string = hours + ' giờ trước';
              return {
                duration: hours,
                type: 'hour',
                string: string
              };
            }
          } else {
            let string = minutes + ' phút trước';
            return {
              duration: minutes,
              type: 'minute',
              string: string
            };
          }
        }
      }
    }
  } catch (error) {// Error
  }
};
const quoteDoubleToSingle = message => {
  return message.replace(/"/g, '\'');
};
function handleError(error, payload) {
  try {
    if (true) {
      console.error('handleError', error);
    } // Send error log

    /*const monitor = require('@antscorp/monitor-javascript');
      monitor.init({
        pid: 1592307059795,
        env: process.env.ENV,
        host: 'http://monitor.tuoitreplus.com/api/monitor/error/'
    });
      monitor.handleError(error, {
        traceId: '',
        ...payload
    });*/

  } catch (e) {// Error
  }
}
function mapSearchAndParam(value, direction = Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].SEARCH_TO_QUERY) {
  if (direction === Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].SEARCH_TO_QUERY) {
    return value.replace(/\s/g, '+');
  } else {
    return value.replace('+', /\s/g);
  }
}
function getObjectPropSafely(fn, defaultValue = '') {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}
const getPostImage = (post, background = 'large') => {
  try {
    if (post && background) {
      if (background === 'large' && post.background) {
        return post.background;
      } else if (post.images && post.images[background]) {
        return post.images[background];
      } else if (post.background) {
        return post.background;
      }
    }
  } catch (error) {// Error
  }
};
const gtagInject = gaId => {
  try {
    if (gaId) {
      const gaScript = document.createElement('script');
      const googleAnalyticsSource = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      const s0 = document.getElementsByTagName('script')[0];
      gaScript.async = true;
      gaScript.setAttribute('src', googleAnalyticsSource);
      s0.parentNode.insertBefore(gaScript, s0);

      if (true) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      gtagTrackingEvent('js', new Date());
      gtagTrackingEvent('config', gaId);
    }
  } catch (error) {// Error
  }
};
const gtagTrackingEvent = (eventCategory, eventAction, args) => {
  try {
    // eslint-disable-next-line no-inner-declarations
    function tracking() {
      try {
        window.dataLayer.push(arguments);
      } catch (error) {// Error
      }
    }

    let params = _objectSpread({}, args);

    if (params && Object.keys(params).length && eventCategory !== 'js') {
      tracking(eventCategory, eventAction, params);
    } else {
      tracking(eventCategory, eventAction);
    }
  } catch (error) {// Error
  }
};

/***/ }),

/***/ "./modules/Pages/Home/styles.module.scss":
/*!***********************************************!*\
  !*** ./modules/Pages/Home/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___gzB72",
	"sidebar-category": "sidebar-category___3frJ-",
	"heading": "heading___2SGry",
	"content": "content___3XRbp",
	"left": "left___cjJj-",
	"right": "right___3v73D"
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  change(method, url, as, options, forcedScroll) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var _options$scroll;

      if (!isLocalURL(url)) {
        window.location.href = url;
        return false;
      }

      const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
      // marking the router ready until after the query is updated

      if (options._h) {
        _this.isReady = true;
      } // Default to scroll reset behavior unless explicitly specified to be
      // `false`! This makes the behavior between using `Router#push` and a
      // `<Link />` consistent.


      options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
      let localeChange = options.locale !== _this.locale;

      if (false) { var _this$locales; }

      if (!options._h) {
        _this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      }

      const {
        shallow = false
      } = options;
      const routeProps = {
        shallow
      };

      if (_this._inFlightRoute) {
        _this.abortComponentLoad(_this._inFlightRoute, routeProps);
      }

      as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, _this.defaultLocale));
      const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, _this.locale);
      _this._inFlightRoute = as; // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && _this.onlyAHashChange(cleanedAs)) {
        _this.asPath = cleanedAs;
        Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

        _this.changeState(method, url, as, options);

        _this.scrollToHash(cleanedAs);

        _this.notify(_this.components[_this.route], null);

        Router.events.emit('hashChangeComplete', as, routeProps);
        return true;
      }

      let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
      let {
        pathname,
        query
      } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
      // get their query parameters to allow ensuring they can be parsed properly
      // when rewritten to

      let pages, rewrites;

      try {
        pages = yield _this.pageLoader.getPageList();
        ({
          __rewrites: rewrites
        } = yield (0, _routeLoader.getClientBuildManifest)());
      } catch (err) {
        // If we fail to resolve the page list or client-build manifest, we must
        // do a server-side transition:
        window.location.href = as;
        return false;
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!_this.urlIsNew(cleanedAs) && !localeChange) {
        method = 'replaceState';
      } // we need to resolve the as value using rewrites for dynamic SSG
      // pages to allow building the data URL correctly


      let resolvedAs = as; // url and as should always be prefixed with basePath by this
      // point by either next/link or router.push/replace so strip the
      // basePath from the pathname to match the pages dir 1-to-1

      pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

      if (shouldResolveHref && pathname !== '/_error') {
        if (false) {} else {
          parsed.pathname = resolveDynamicRoute(pathname, pages);

          if (parsed.pathname !== pathname) {
            pathname = parsed.pathname;
            url = (0, _utils.formatWithValidation)(parsed);
          }
        }
      }

      const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

      if (!isLocalURL(as)) {
        if (true) {
          throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
        }

        window.location.href = as;
        return false;
      }

      resolvedAs = delLocale(delBasePath(resolvedAs), _this.locale);

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
        const asPathname = parsedAs.pathname;
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
        const shouldInterpolate = route === asPathname;
        const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

        if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
          }
        } else if (shouldInterpolate) {
          as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
            pathname: interpolatedAs.result,
            query: omitParmsFromQuery(query, interpolatedAs.params)
          }));
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as, routeProps);

      try {
        var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

        let routeInfo = yield _this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
        let {
          error,
          props,
          __N_SSG,
          __N_SSP
        } = routeInfo; // handle redirect on client-transition

        if ((__N_SSG || __N_SSP) && props) {
          if (props.pageProps && props.pageProps.__N_REDIRECT) {
            const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
            // client-navigation if it is falling back to hard navigation if
            // it's not

            if (destination.startsWith('/')) {
              const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
              parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

              if (pages.includes(parsedHref.pathname)) {
                const {
                  url: newUrl,
                  as: newAs
                } = prepareUrlAs(_this, destination, destination);
                return _this.change(method, newUrl, newAs, options);
              }
            }

            window.location.href = destination;
            return new Promise(() => {});
          }

          _this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

          if (props.notFound === SSG_DATA_NOT_FOUND) {
            let notFoundRoute;

            try {
              yield _this.fetchComponent('/404');
              notFoundRoute = '/404';
            } catch (_) {
              notFoundRoute = '/_error';
            }

            routeInfo = yield _this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
              shallow: false
            });
          }
        }

        Router.events.emit('beforeHistoryChange', as, routeProps);

        _this.changeState(method, url, as, options);

        if (true) {
          const appComp = _this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // shallow routing is only allowed for same page URL changes.


        const isValidShallowRoute = options.shallow && _this.route === route;

        if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
          // ensure statusCode is still correct for static 500 page
          // when updating query information
          props.pageProps.statusCode = 500;
        }

        yield _this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
          x: 0,
          y: 0
        })).catch(e => {
          if (e.cancelled) error = error || e;else throw e;
        });

        if (error) {
          Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
          throw error;
        }

        if (false) {}

        Router.events.emit('routeChangeComplete', as, routeProps);
        return true;
      } catch (err) {
        if (err.cancelled) {
          return false;
        }

        throw err;
      }
    })();
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (err.cancelled) {
        // bubble up cancellation errors
        throw err;
      }

      if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
        Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
        //  1. Page doesn't exists
        //  2. Page does exist in a different zone
        //  3. Internal error while loading the page
        // So, doing a hard reload is the proper way to deal with this.

        window.location.href = as; // Changing the URL doesn't block executing the current code path.
        // So let's throw a cancellation error stop the routing logic.

        throw buildCancellationError();
      }

      try {
        let Component;
        let styleSheets;
        let props;

        if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
          ;
          ({
            page: Component,
            styleSheets
          } = yield _this2.fetchComponent('/_error'));
        }

        const routeInfo = {
          props,
          Component,
          styleSheets,
          err,
          error: err
        };

        if (!routeInfo.props) {
          try {
            routeInfo.props = yield _this2.getInitialProps(Component, {
              err,
              pathname,
              query
            });
          } catch (gipErr) {
            console.error('Error in error page `getInitialProps`: ', gipErr);
            routeInfo.props = {};
          }
        }

        return routeInfo;
      } catch (routeInfoErr) {
        return _this2.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
      }
    })();
  }

  getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        const existingRouteInfo = _this3.components[route];

        if (routeProps.shallow && existingRouteInfo && _this3.route === route) {
          return existingRouteInfo;
        }

        const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
        const routeInfo = cachedRouteInfo ? cachedRouteInfo : yield _this3.fetchComponent(route).then(res => ({
          Component: res.page,
          styleSheets: res.styleSheets,
          __N_SSG: res.mod.__N_SSG,
          __N_SSP: res.mod.__N_SSP
        }));
        const {
          Component,
          __N_SSG,
          __N_SSP
        } = routeInfo;

        if (true) {
          const {
            isValidElementType
          } = __webpack_require__(/*! react-is */ "react-is");

          if (!isValidElementType(Component)) {
            throw new Error(`The default export is not a React Component in page: "${pathname}"`);
          }
        }

        let dataHref;

        if (__N_SSG || __N_SSP) {
          dataHref = _this3.pageLoader.getDataHref((0, _utils.formatWithValidation)({
            pathname,
            query
          }), resolvedAs, __N_SSG, _this3.locale);
        }

        const props = yield _this3._getData(() => __N_SSG ? _this3._getStaticData(dataHref) : __N_SSP ? _this3._getServerData(dataHref) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
        {
          pathname,
          query,
          asPath: as,
          locale: _this3.locale,
          locales: _this3.locales,
          defaultLocale: _this3.defaultLocale
        }));
        routeInfo.props = props;
        _this3.components[route] = routeInfo;
        return routeInfo;
      } catch (err) {
        return _this3.handleRouteInfoError(err, pathname, query, as, routeProps);
      }
    })();
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
      let {
        pathname
      } = parsed;

      if (false) {}

      const pages = yield _this4.pageLoader.getPageList();
      let resolvedAs = asPath;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }

      const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        return;
      }

      yield Promise.all([_this4.pageLoader._isSsg(route).then(isSsg => {
        return isSsg ? _this4._getStaticData(_this4.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this4.locale)) : false;
      }), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
    })();
  }

  fetchComponent(route) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      let cancelled = false;

      const cancel = _this5.clc = () => {
        cancelled = true;
      };

      const componentResult = yield _this5.pageLoader.loadPage(route);

      if (cancelled) {
        const error = new Error(`Abort fetching component for route: "${route}"`);
        error.cancelled = true;
        throw error;
      }

      if (cancel === _this5.clc) {
        _this5.clc = null;
      }

      return componentResult;
    })();
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator(function* (App, ctx) {
    if (true) {
      var _App$prototype;

      if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
        const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
        throw new Error(message);
      }
    } // when called from _app `ctx` is nested in `ctx`


    const res = ctx.res || ctx.ctx && ctx.ctx.res;

    if (!App.getInitialProps) {
      if (ctx.ctx && ctx.Component) {
        // @ts-ignore pageProps default
        return {
          pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
        };
      }

      return {};
    }

    const props = yield App.getInitialProps(ctx);

    if (res && isResSent(res)) {
      return props;
    }

    if (!props) {
      const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
      throw new Error(message);
    }

    if (true) {
      if (Object.keys(props).length === 0 && !ctx.ctx) {
        console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
      }
    }

    return props;
  });
  return _loadGetInitialProps.apply(this, arguments);
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/HorizontalWidget */ "./components/HorizontalWidget/index.jsx");
/* harmony import */ var Components_SidebarHighlightWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/SidebarHighlightWidget */ "./components/SidebarHighlightWidget/index.jsx");
/* harmony import */ var Components_ListWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/ListWidget */ "./components/ListWidget/index.jsx");
/* harmony import */ var Components_VerticalWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/VerticalWidget */ "./components/VerticalWidget/index.jsx");
/* harmony import */ var Services_Post_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Services/Post/Home */ "./services/Post/Home.js");
/* harmony import */ var Services_Post_Category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Services/Post/Category */ "./services/Post/Category.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");
/* harmony import */ var Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Modules/Pages/Home/styles.module.scss */ "./modules/Pages/Home/styles.module.scss");
/* harmony import */ var Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "E:\\meovathay\\application\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // Components




 // Services


 // Actions

 // Utils


 // Assets


const PATH = 'application/pages/index.jsx';
const BOX_VERTICAL_NEWS_STYLE = 1;
const BOX_VERTICAL_AND_LIST_NEWS_STYLE = 2;
const BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE = 3;

class Home extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static getInitialProps({
    reduxStore,
    req
  }) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
      try {
        const states = reduxStore.getState();
        const url = Config_constant__WEBPACK_IMPORTED_MODULE_13__["default"].SITE_URL;
        const mobileUrl = Config_constant__WEBPACK_IMPORTED_MODULE_13__["default"].MOBILE_SITE_URL; // Set document title default in home page

        if (states && states.document && states.document.defaultTitle) {
          reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["updateDocument"])({
            title: states.document.defaultTitle,
            canonical: url,
            alternate: mobileUrl
          }));
        } // Update Breadcrumb structured data


        reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["updateBreadcrumbStructure"])({
          itemListElement: []
        })); // Change Menu active when redirect to home page

        if (states && states.headerMenu) {
          let headerMenu = states.headerMenu.map(menu => {
            if (menu.active) {
              menu.active = false;
            }

            if (menu.child) {
              menu.child = menu.child.map(childMenu => {
                if (childMenu.active) {
                  childMenu.active = false;
                }

                return childMenu;
              });
            }

            return menu;
          });
          reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["setHeaderMenu"])(headerMenu));
        } // API get posts for Home page


        const getHomePosts = Services_Post_Home__WEBPACK_IMPORTED_MODULE_9__["getList"]();
        let latest = [];
        let top = [];
        let category = [];
        let featureNews = [];
        let featureNewsRight = [];
        let arrTopPid = [];
        let horizontalNews = [];

        if (getHomePosts) {
          yield getHomePosts.then(response => {
            if (response && response.data && response.data.data) {
              latest = response.data.data.latest || [];
              top = response.data.data.top || [];
              category = response.data.data.category || [];

              if (top.length) {
                let images = [];
                top.map((post, key) => {
                  if (post.pid) {
                    arrTopPid.push(post.pid);
                  }

                  if (post.background) {
                    images = [post.background];
                  } else if (post.images && post.images.normal) {
                    images = [post.images.normal];
                  } // Top 3 posts to featured post and then horizontal news


                  if (key < 3) {
                    featureNews.push(post);
                  } else {
                    featureNewsRight.push(post);
                  }
                }); // Validate images

                if (images.length) {
                  images = images.map(image => {
                    if (image && image.indexOf('https:') < 0) {
                      return 'https:' + image;
                    }

                    return image;
                  });
                }

                reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["updateDocument"])({
                  og: {
                    title: states.document.defaultTitle,
                    description: states.document.defaultDescription,
                    images: images,
                    url: Config_constant__WEBPACK_IMPORTED_MODULE_13__["default"].SITE_URL
                  }
                }));
              }
            }
          });
        }

        const getHorizontalNews = Services_Post_Category__WEBPACK_IMPORTED_MODULE_10__["getList"]({
          type: 'weekly',
          limit: 30,
          page: 1
        });

        if (getHorizontalNews) {
          yield getHorizontalNews.then(response => {
            if (response && response.data && response.data.data) {
              horizontalNews = response.data.data.posts || [];

              if (horizontalNews && horizontalNews.length) {
                horizontalNews = horizontalNews.filter(post => {
                  if (arrTopPid.indexOf(post.pid) < 0) {
                    return true;
                  }
                });
              }
            }
          });
        }

        return {
          latest,
          top,
          category,
          featureNews,
          featureNewsRight,
          horizontalNews
        };
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, {
          actionName: 'getInitialProps',
          path: PATH,
          args: {
            req
          }
        });
      }
    })();
  }

  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCategoryBoxStyle", slug => {
      if (['doi-song', 'suc-khoe'].indexOf(slug) >= 0) {
        return BOX_VERTICAL_NEWS_STYLE;
      } else if (['thoi-trang'].indexOf(slug) >= 0) {
        return BOX_VERTICAL_AND_LIST_NEWS_STYLE;
      } else {
        return BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "renderCategoryBox", (category, boxStyle = BOX_VERTICAL_NEWS_STYLE) => {
      try {
        if (category && category.name && category.slug && category.posts && boxStyle) {
          boxStyle = this.getCategoryBoxStyle(category.slug);

          switch (boxStyle) {
            case BOX_VERTICAL_NEWS_STYLE:
              return __jsx("div", {
                key: category.id,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['sidebar-category']),
                style: {
                  background: '#fafafa'
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 29
                }
              }, __jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['heading']),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 33
                }
              }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: '/category-by-id?slug=' + category.slug + '&cid=' + category.id,
                as: '/' + category.slug + '-c' + category.id + '.html',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 37
                }
              }, __jsx("a", {
                title: category.name,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 41
                }
              }, category.name))), __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
                skeletonLoading: false,
                number: 2,
                isShowCategory: false,
                isRowReverse: true,
                background: 'normal',
                posts: category.posts,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 33
                }
              }));

            case BOX_VERTICAL_AND_LIST_NEWS_STYLE:
              return __jsx("div", {
                key: category.id,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['sidebar-category']),
                style: {
                  background: '#fafafa'
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 29
                }
              }, __jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['heading']),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 33
                }
              }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: '/category-by-id?slug=' + category.slug + '&cid=' + category.id,
                as: '/' + category.slug + '-c' + category.id + '.html',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 37
                }
              }, __jsx("a", {
                title: category.name,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 41
                }
              }, category.name))), __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
                skeletonLoading: false,
                isShowCategory: false,
                isRowReverse: true,
                background: 'normal',
                number: 1,
                posts: category.posts,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 33
                }
              }), __jsx(Components_ListWidget__WEBPACK_IMPORTED_MODULE_7__["default"], {
                number: 4,
                posts: category.posts.filter((post, key) => key > 0),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 33
                }
              }));

            case BOX_HORIZONTAL_AND_THUMB_NEWS_STYLE:
              return __jsx("div", {
                key: category.id,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['sidebar-category']),
                style: {
                  background: '#fafafa'
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 29
                }
              }, __jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['heading']),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 33
                }
              }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: '/category-by-id?slug=' + category.slug + '&cid=' + category.id,
                as: '/' + category.slug + '-c' + category.id + '.html',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 37
                }
              }, __jsx("a", {
                title: category.name,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 41
                }
              }, category.name))), __jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['content'], 'clearfix'),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 33
                }
              }, __jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['left'], 'fl'),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 37
                }
              }, __jsx(Components_VerticalWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
                isShowTag: false,
                background: 'normal',
                post: category.posts[0],
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 41
                }
              })), __jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['right'], 'fr'),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 37
                }
              }, __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
                skeletonLoading: false,
                isShowCategory: false,
                isRowReverse: true,
                isShowDescription: false,
                isSmallLayout: true,
                background: 'medium',
                number: 3,
                posts: category.posts.filter((post, key) => key > 0),
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 41
                }
              }))));
          }
        }
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, {
          actionName: 'renderCategoryBox',
          path: PATH,
          args: {
            category,
            boxStyle
          }
        });
      }
    });

    this.state = {};
  }

  render() {
    try {
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Home_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a['container'], 'container'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-body clearfix w1160 pb-20'),
        style: {
          borderBottom: '1px solid #eee'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('w540 fl pt-20'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 25
        }
      }, this.props.featureNews && this.props.featureNews.length ? __jsx(Components_VerticalWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isShowTag: false,
        isShowDescription: false,
        background: 'large',
        post: this.props.featureNews[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 37
        }
      }) : null, __jsx("ul", {
        className: "pt-20",
        style: {
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 29
        }
      }, this.props.featureNews && this.props.featureNews.length ? this.props.featureNews.map((post, key) => {
        if (key > 0 && key < 3) {
          return __jsx("li", {
            key: key.toString(),
            style: {
              width: 260
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 49
            }
          }, __jsx(Components_VerticalWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
            isShowTag: false,
            isShowDescription: false,
            background: 'normal',
            post: post,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 53
            }
          }));
        }
      }) : null)), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('w590 fr pt-20'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('fl'),
        style: {
          width: 265
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 29
        }
      }, this.props.featureNewsRight && this.props.featureNewsRight.length ? __jsx(Components_VerticalWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isShowTag: false,
        isShowDescription: false,
        background: 'normal',
        post: this.props.featureNewsRight[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 41
        }
      }) : null, this.props.featureNewsRight && this.props.featureNewsRight.length ? __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        skeletonLoading: false,
        number: 4,
        isSmallLayout: true,
        isShowCategory: false,
        isShowDescription: false,
        background: 'medium',
        posts: this.props.featureNewsRight.filter((post, key) => key > 0),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 41
        }
      }) : null), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('fl pl-20'),
        style: {
          width: 325
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 29
        }
      }, __jsx(Components_SidebarHighlightWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "M\u1EDBi nh\u1EA5t",
        style: {
          width: '100%'
        },
        background: 'normal',
        posts: this.props.latest,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-body clearfix w1160 pt-20'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "fl w540",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 25
        }
      }, this.props.horizontalNews && this.props.horizontalNews.length ? __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        skeletonLoading: false,
        number: 16,
        background: 'medium',
        posts: this.props.horizontalNews,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 97
        }
      }) : null), __jsx("div", {
        className: "fr w590",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 25
        }
      }, this.props.category && this.props.category.length ? this.props.category.map(category => {
        return this.renderCategoryBox(category, BOX_VERTICAL_NEWS_STYLE);
      }) : null)));
    } catch (error) {
      Object(Libs_utils__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, {
        actionName: 'render',
        path: PATH,
        args: {}
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/images/no-image.png":
/*!************************************!*\
  !*** ./public/images/no-image.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAFzCAIAAAAPBA7MAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDI4RjY3OUE5QjIxMUU5QTI0MEYyRkE2RTdENEM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMDI4RjY3QUE5QjIxMUU5QTI0MEYyRkE2RTdENEM3MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwMjhGNjc3QTlCMjExRTlBMjQwRjJGQTZFN0Q0QzczIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwMjhGNjc4QTlCMjExRTlBMjQwRjJGQTZFN0Q0QzczIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4bk+cQAAFNhJREFUeNrs3QlT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"

/***/ }),

/***/ "./services/Post/Category.js":
/*!***********************************!*\
  !*** ./services/Post/Category.js ***!
  \***********************************/
/*! exports provided: get, getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Services/services */ "./services/services.js");
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function get(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].get(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/category'
  }));
}
function getList(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].getList(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/category'
  }));
}

/***/ }),

/***/ "./services/Post/Home.js":
/*!*******************************!*\
  !*** ./services/Post/Home.js ***!
  \*******************************/
/*! exports provided: get, getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Services/services */ "./services/services.js");
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function get(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].get(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/home'
  }));
}
function getList(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].getList(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/home'
  }));
}

/***/ }),

/***/ "./services/services.js":
/*!******************************!*\
  !*** ./services/services.js ***!
  \******************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {
  //console.log('config', config)
  return config;
});
const services = {
  get: function get(params) {
    if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
      const API_HOST = params.API_HOST;
      delete params.API_HOST;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_HOST + '/' + params.id, {
        params: params
      });
    } else {
      return false;
    }
  },
  getList: function getList(params) {
    if (typeof params.API_HOST !== 'undefined') {
      const API_HOST = params.API_HOST;
      delete params.API_HOST;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_HOST, {
        params: params
      });
    } else {
      return false;
    }
  },
  create: function create(params) {
    if (params.API_HOST !== 'undefined') {
      const API_HOST = params.API_HOST;
      delete params.API_HOST;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_HOST, params);
    } else {
      return false;
    }
  },
  update: function update(params) {
    if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
      const API_HOST = params.API_HOST;
      delete params.API_HOST;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(API_HOST + '/' + params.id, params);
    } else {
      return false;
    }
  },
  del: function del(params) {
    if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
      const API_HOST = params.API_HOST;
      delete params.API_HOST;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(API_HOST + '/' + params.id, {
        params: params
      });
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, setToken, setProfileUser, setHeaderMenu, updateDocument, updateArticleStructure, updateBreadcrumbStructure, reducer, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfileUser", function() { return setProfileUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderMenu", function() { return setHeaderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDocument", function() { return updateDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticleStructure", function() { return updateArticleStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBreadcrumbStructure", function() { return updateBreadcrumbStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const title = 'Mẹo Vặt Hay - Các mẹo vặt hay trong cuộc sống - meovathay.vn';
const description = 'Mẹo vặt, đọc báo, chia sẻ mẹo vặt hay. Mẹo vặt cuộc sống, mẹo vặt làm đẹp, mẹo vặt hàng ngày, video mẹo vặt.';
const initialState = {
  token: null,
  profileUser: null,
  headerMenu: [],
  document: {
    defaultTitle: title,
    defaultDescription: description,
    title: title,
    og: {
      title: title
    },
    keywords: []
  },
  articleStructure: {
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://vnexpress.net/trump-du-kien-roi-washington-truoc-khi-biden-nham-chuc-4221866.html'
    },
    'headline': '',
    'description': '',
    'image': {
      '@type': 'ImageObject',
      'url': 'https://vcdn1-vnexpress.vnecdn.net/2021/01/16/86026-1-1610756895-1610756916-7269-1610757159.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=JxEhWJdBpbSd5_LJYth30w',
      'width': 500,
      'height': 500
    },
    'datePublished': '2021-01-16T07:33:10+07:00',
    'dateModified': '2021-01-16T07:34:11+07:00',
    'author': {
      '@type': 'Organization',
      'name': 'VnExpress'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'VnExpress',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://s1cdn.vnecdn.net/vnexpress/restruct/i/v371/logos/vnexpress_500x110.png',
        'width': 500,
        'height': 112
      }
    },
    'about': ['Bầu cử Tổng thống Mỹ', 'Donald Trump', 'Bầu cử Tổng thống Mỹ', 'Tin', 'Tin nóng']
  },
  breadcrumbStructure: {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [{
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@id': Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].SITE_URL,
        'name': 'Tin tức'
      }
    }]
  }
}; // Action type

const actionTypes = {
  SET_HEADER_MENU: 'SET_HEADER_MENU',
  UPDATE_DOCUMENT: 'UPDATE_DOCUMENT',
  UPDATE_ARTICLE_STRUCTURE: 'UPDATE_ARTICLE_STRUCTURE',
  UPDATE_BREADCRUMB_STRUCTURE: 'UPDATE_BREADCRUMB_STRUCTURE',
  SET_TOKEN: 'SET_TOKEN',
  SET_PROFILE_USER: 'SET_PROFILE_USER'
}; // Actions

const setToken = payload => {
  return {
    type: actionTypes.SET_TOKEN,
    payload
  };
};
const setProfileUser = payload => {
  return {
    type: actionTypes.SET_PROFILE_USER,
    payload
  };
};
const setHeaderMenu = payload => {
  return {
    type: actionTypes.SET_HEADER_MENU,
    payload
  };
};
const updateDocument = payload => {
  return {
    type: actionTypes.UPDATE_DOCUMENT,
    payload
  };
};
const updateArticleStructure = payload => {
  return {
    type: actionTypes.UPDATE_ARTICLE_STRUCTURE,
    payload
  };
};
const updateBreadcrumbStructure = payload => {
  return {
    type: actionTypes.UPDATE_BREADCRUMB_STRUCTURE,
    payload
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      if (action.payload) {
        return Object.assign({}, state, {
          token: action.payload
        });
      }

      return state;

    case actionTypes.SET_PROFILE_USER:
      if (action.payload) {
        return Object.assign({}, state, {
          profileUser: action.payload
        });
      }

      return state;

    case actionTypes.SET_HEADER_MENU:
      if (action.payload) {
        return Object.assign({}, state, {
          headerMenu: action.payload
        });
      }

      return state;

    case actionTypes.UPDATE_DOCUMENT:
      if (action.payload) {
        return Object.assign({}, state, {
          document: _objectSpread(_objectSpread({}, state.document), action.payload)
        });
      }

      return state;

    case actionTypes.UPDATE_ARTICLE_STRUCTURE:
      if (action.payload) {
        return Object.assign({}, state, {
          articleStructure: _objectSpread(_objectSpread({}, state.articleStructure), action.payload)
        });
      }

      return state;

    case actionTypes.UPDATE_BREADCRUMB_STRUCTURE:
      if (action.payload && action.payload.itemListElement) {
        return Object.assign({}, state, {
          breadcrumbStructure: _objectSpread(_objectSpread({}, state.breadcrumbStructure), {}, {
            itemListElement: [...action.payload.itemListElement]
          })
        });
      }

      return state;

    default:
      return state;
  }
};
function initializeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])());
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "lazysizes":
/*!****************************!*\
  !*** external "lazysizes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lazysizes");

/***/ }),

/***/ "lazysizes/plugins/parent-fit/ls.parent-fit":
/*!*************************************************************!*\
  !*** external "lazysizes/plugins/parent-fit/ls.parent-fit" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lazysizes/plugins/parent-fit/ls.parent-fit");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvcml6b250YWxXaWRnZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFdpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0V2lkZ2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RXaWRnZXQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU1lZGlhL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJIaWdobGlnaHRXaWRnZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhckhpZ2hsaWdodFdpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WZXJ0aWNhbFdpZGdldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WZXJ0aWNhbFdpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL1BhZ2VzL0hvbWUvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvbm8taW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1Bvc3QvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUG9zdC9Ib21lLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxhenlzaXplc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxhenlzaXplcy9wbHVnaW5zL3BhcmVudC1maXQvbHMucGFyZW50LWZpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIkhvcml6b250YWxXaWRnZXQiLCJwcm9wcyIsInBvc3RzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsInRpbWUiLCJmb3JtYXRUaW1lIiwic3RyaW5nIiwicmVjZW50IiwiYmFja2dyb3VuZCIsImdldFBvc3RJbWFnZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJpc1NtYWxsTGF5b3V0IiwiY2xhc3NOYW1lIiwic2tlbGV0b25Mb2FkaW5nIiwia2V5IiwibnVtYmVyIiwiaXNSb3dSZXZlcnNlIiwicGlkIiwic2x1ZyIsInRpdGxlIiwidGh1bWIiLCJpc1Nob3dDYXRlZ29yeSIsImNhdGVnb3J5Iiwic2hvcnRlbiIsImlkIiwiaXNTaG93RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIkFycmF5Iiwic2tlbGV0b25OdW1iZXIiLCJmaWxsIiwiZXJyb3IiLCJkZWZhdWx0UHJvcHMiLCJocmVmIiwiTGlzdFdpZGdldCIsInN0eWxlIiwiY2xhc3NuYW1lcyIsImFsdCIsIk5vSW1hZ2UiLCJzcmMiLCJzY2FsZU9uSG92ZXIiLCJQcm9ncmVzc2l2ZU1lZGlhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm15UmVmIiwiY3JlYXRlUmVmIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXIiLCJwYWRkaW5nQm90dG9tIiwicG9zdE51bWJlciIsIlNpZGViYXJIaWdobGlnaHRXaWRnZXQiLCJmZWF0dXJlUG9zdCIsImZlYXR1cmVCYWNrZ3JvdW5kIiwiaXNTaG93VGFnIiwiVmVydGljYWxXaWRnZXQiLCJ0aHVtYm5haWwiLCJlbnYiLCJwcm9jZXNzIiwiQXBwIiwiZGV2ZWxvcG1lbnQiLCJTSVRFX1VSTCIsIk1PQklMRV9TSVRFX1VSTCIsIkFQSV9IT1NUIiwic2FuZGJveCIsInByb2R1Y3Rpb24iLCJDb25zdGFudCIsIlNUQVRJQ19WRVJTSU9OIiwiS0VZQ09ERSIsIkVOVEVSIiwiU0VBUkNIX1RPX1FVRVJZIiwiUVVFUllfVE9fU0VBUkNIIiwiZm9ybWF0Iiwic2Vjb25kcyIsIm1vbWVudCIsImRpZmYiLCJkdXJhdGlvbiIsInR5cGUiLCJtaW51dGVzIiwiTWF0aCIsInJvdW5kIiwiaG91cnMiLCJxdW90ZURvdWJsZVRvU2luZ2xlIiwibWVzc2FnZSIsInJlcGxhY2UiLCJoYW5kbGVFcnJvciIsInBheWxvYWQiLCJjb25zb2xlIiwiZSIsIm1hcFNlYXJjaEFuZFBhcmFtIiwidmFsdWUiLCJkaXJlY3Rpb24iLCJjb25zdGFudCIsImdldE9iamVjdFByb3BTYWZlbHkiLCJmbiIsImRlZmF1bHRWYWx1ZSIsImltYWdlcyIsImd0YWdJbmplY3QiLCJnYUlkIiwiZ2FTY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnb29nbGVBbmFseXRpY3NTb3VyY2UiLCJzMCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXN5bmMiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwid2luZG93IiwiZGF0YUxheWVyIiwiZ3RhZ1RyYWNraW5nRXZlbnQiLCJEYXRlIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiYXJncyIsInRyYWNraW5nIiwicHVzaCIsImFyZ3VtZW50cyIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQQVRIIiwiQk9YX1ZFUlRJQ0FMX05FV1NfU1RZTEUiLCJCT1hfVkVSVElDQUxfQU5EX0xJU1RfTkVXU19TVFlMRSIsIkJPWF9IT1JJWk9OVEFMX0FORF9USFVNQl9ORVdTX1NUWUxFIiwiSG9tZSIsInJlZHV4U3RvcmUiLCJyZXEiLCJzdGF0ZXMiLCJnZXRTdGF0ZSIsIm1vYmlsZVVybCIsImRlZmF1bHRUaXRsZSIsImRpc3BhdGNoIiwidXBkYXRlRG9jdW1lbnQiLCJjYW5vbmljYWwiLCJhbHRlcm5hdGUiLCJ1cGRhdGVCcmVhZGNydW1iU3RydWN0dXJlIiwiaXRlbUxpc3RFbGVtZW50IiwiaGVhZGVyTWVudSIsIm1lbnUiLCJhY3RpdmUiLCJjaGlsZE1lbnUiLCJzZXRIZWFkZXJNZW51IiwiZ2V0SG9tZVBvc3RzIiwiUG9zdEhvbWVTZXJ2aWNlIiwibGF0ZXN0IiwidG9wIiwiZmVhdHVyZU5ld3MiLCJmZWF0dXJlTmV3c1JpZ2h0IiwiYXJyVG9wUGlkIiwiaG9yaXpvbnRhbE5ld3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJub3JtYWwiLCJpbWFnZSIsImluZGV4T2YiLCJvZyIsImRlZmF1bHREZXNjcmlwdGlvbiIsImdldEhvcml6b250YWxOZXdzIiwiUG9zdENhdGVnb3J5U2VydmljZSIsImxpbWl0IiwiZmlsdGVyIiwiYWN0aW9uTmFtZSIsImJveFN0eWxlIiwiZ2V0Q2F0ZWdvcnlCb3hTdHlsZSIsImNsYXNzbmFtZSIsImJvcmRlckJvdHRvbSIsImxpc3RTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRvU3RyaW5nIiwicmVuZGVyQ2F0ZWdvcnlCb3giLCJzZXJ2aWNlcyIsImdldExpc3QiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJjcmVhdGUiLCJ1cGRhdGUiLCJwdXQiLCJkZWwiLCJkZWxldGUiLCJpbml0aWFsU3RhdGUiLCJ0b2tlbiIsInByb2ZpbGVVc2VyIiwia2V5d29yZHMiLCJhcnRpY2xlU3RydWN0dXJlIiwiYnJlYWRjcnVtYlN0cnVjdHVyZSIsImFjdGlvblR5cGVzIiwiU0VUX0hFQURFUl9NRU5VIiwiVVBEQVRFX0RPQ1VNRU5UIiwiVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFIiwiVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFIiwiU0VUX1RPS0VOIiwiU0VUX1BST0ZJTEVfVVNFUiIsInNldFRva2VuIiwic2V0UHJvZmlsZVVzZXIiLCJ1cGRhdGVBcnRpY2xlU3RydWN0dXJlIiwicmVkdWNlciIsImFjdGlvbiIsImFzc2lnbiIsImluaXRpYWxpemVTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7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TUFBTSxDQUFDM2MsT0FBUCxDQUFlMlksZUFBckMsRUFBc0Q7QUFDbEQsZUFBT3pXLE1BQU0sQ0FBQzBhLE1BQVAsQ0FBYyxFQUFkLEVBQWtCdk0sS0FBbEIsRUFBeUI7QUFDNUIwTCw2QkFBbUIsa0NBQ1oxTCxLQUFLLENBQUMwTCxtQkFETTtBQUVmcEQsMkJBQWUsRUFBRSxDQUNiLEdBQUdnRSxNQUFNLENBQUMzYyxPQUFQLENBQWUyWSxlQURMO0FBRkY7QUFEUyxTQUF6QixDQUFQO0FBUUg7O0FBQ0QsYUFBT3RJLEtBQVA7O0FBQ0o7QUFDSSxhQUFPQSxLQUFQO0FBdkRSO0FBeURILENBMURNO0FBNERBLFNBQVN3TSxlQUFULENBQTBCbkIsWUFBMUIsRUFBd0M7QUFDM0MsU0FBT29CLHlEQUFXLENBQ2RKLE9BRGMsRUFFZGhCLFlBRmMsRUFHZHFCLDZEQUFlLEVBSEQsQ0FBbEI7QUFLSCxDOzs7Ozs7Ozs7OztBQ2pNRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVNZWRpYSBmcm9tICdDb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEnO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IHtmb3JtYXRUaW1lLCBnZXRQb3N0SW1hZ2V9IGZyb20gJ0xpYnMvdXRpbHMnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gSG9yaXpvbnRhbFdpZGdldChwcm9wcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcG9zdHMgPSBwcm9wcy5wb3N0cyB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZm9ybWF0IHRpbWVcclxuICAgICAgICAgICAgcG9zdHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QudGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXQgdGltZSB0byBkaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gZm9ybWF0VGltZShwb3N0LnRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSAmJiB0aW1lLnN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5yZWNlbnQgPSB0aW1lLnN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5iYWNrZ3JvdW5kID0gZ2V0UG9zdEltYWdlKHBvc3QsIHByb3BzLmJhY2tncm91bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snaG9yaXpvbnRhbC1uZXdzJ10sIHByb3BzLmlzU21hbGxMYXlvdXQgJiYgc3R5bGVzWydob3Jpem9udGFsLXNtYWxsJ10sIHByb3BzLmNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9wcy5za2VsZXRvbkxvYWRpbmcgJiYgcG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgKyAxID4gcHJvcHMubnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMocHJvcHMuaXNSb3dSZXZlcnNlICYmIHN0eWxlc1sncm93LXJldmVyc2UnXSwgJ2NsZWFyZml4Jyl9IGtleT17cG9zdC5waWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snbGVmdCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NpdmVNZWRpYSBhbHQ9e3Bvc3QudGl0bGV9IHRodW1iPXtwb3N0LnRodW1ifSBzcmM9e3Bvc3QuYmFja2dyb3VuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3JpZ2h0J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmlzU2hvd0NhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21ldGEnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2F0ZWdvcnktYnktaWQ/c2x1Zz0nICsgcG9zdC5jYXRlZ29yeS5zaG9ydGVuICsgJyZjaWQ9JyArIHBvc3QuY2F0ZWdvcnkuaWR9IGFzPXsnLycgKyBwb3N0LmNhdGVnb3J5LnNob3J0ZW4gKyAnLWMnICsgcG9zdC5jYXRlZ29yeS5pZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzWydtZXRhLWNhdGVnb3J5J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5ICYmIHBvc3QuY2F0ZWdvcnkudGl0bGUgPyBwb3N0LmNhdGVnb3J5LnRpdGxlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gLSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snbWV0YS10aW1lJ119Pntwb3N0LnJlY2VudCB8fCAnMyBnaeG7nSB0csaw4bubYyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pc1Nob3dEZXNjcmlwdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheShwcm9wcy5za2VsZXRvbk51bWJlcikuZmlsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1sZWZ0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snY2F0ZWdvcnknXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2tlbGV0b25Mb2FkaW5nOiBmYWxzZSxcclxuICAgIHNrZWxldG9uTnVtYmVyOiAxLFxyXG4gICAgbnVtYmVyOiAxMCxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBpc1Nob3dDYXRlZ29yeTogdHJ1ZSxcclxuICAgIGlzU2hvd0Rlc2NyaXB0aW9uOiB0cnVlLFxyXG4gICAgaXNSb3dSZXZlcnNlOiBmYWxzZSxcclxuICAgIGlzU21hbGxMYXlvdXQ6IGZhbHNlLFxyXG4gICAgYmFja2dyb3VuZDogJ2xhcmdlJywgLy8gbGFyZ2UsIG5vcm1hbCwgbWVkaXVtLCBzbWFsbFxyXG4gICAgcG9zdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICdDw7MgMSBt4bu5IG5ow6JuIFRow6FpIHNlbGZpZSB24bubaSBj4bqjIHF1w6JuIMSRb8OgbiBzYW8gdGjhur8gZ2nhu5tpLCBhaSBkw6ggXCJjaOG6t3QgY2jDqW1cIiB04burIGjhu5lpIEtlbmRhbGwgxJHhur9uIGTDoG4gbuG7ryB0aOG6p24gSG9hLCBIw6BuLCBWaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JhdSBj4bunIHF14bqjIGzDoCBuaOG7r25nIHRow6BuaCBwaOG6p24ga2jDtG5nIHRo4buDIHRoaeG6v3UgdHJvbmcgdGjhu7FjIMSRxqFuIGdp4bqjbSBjw6JuLCBuaMawbmcgbuG6v3Uga2jDtG5nIGJp4bq/dCBsw6BtIG3Ds24gc2FsYWQgdOG7kXQgY2hvIHPhu6ljIGto4buPZSB0aMOsIGLhuqFuIHPhur0gcuG6pXQgbmhhbmggY2jDoW4gxJHhuqV5LicsXHJcbiAgICAgICAgICAgIHNsdWc6ICdoYXJwZXItYmVja2hhbS1uYW0tdGF5LWJvLW8tc2FuLWJheS1taWFtaScsXHJcbiAgICAgICAgICAgIHRodW1iOiAnLy9pbWFnZS50dW9pdHJlcGx1cy5jb20vdXBsb2FkLzIwMTgvMDMvMjUweDE1Ni9hZGM5cnA3ZjUzLmpwZycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2tlbmgxNGNkbi5jb20vem9vbS8zNDBfMjEzLzIwMjAvcGhvdG8xNTg1NTczNzExMzQ0LTE1ODU1NzM3MTE3NjItY3JvcC0xNTg1NTczODU1NzU5ODA4NjE1NTYyLmpwZycsXHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vc2FuZGJveC50dW9pdHJlcGx1cy5jb20vbmh1bmctdGh1b25nLXZ1LWNhLWxvbi1udW90LWNhLWJlLWRlLW1vLXJvbmctdGhpLXBoYW4tcDI1Ni5odG1sJyxcclxuICAgICAgICAgICAgdGltZTogJzIwMjAtMDQtMDQgMTE6MDY6MTUnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMTIsXHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnR2nhuqNpIHRyw60nLFxyXG4gICAgICAgICAgICAgICAgJ3NsdWcnOiAnZ2lhaS10cmknLFxyXG4gICAgICAgICAgICAgICAgJ2hyZWYnOiAnaHR0cDovL2xvY2FsaG9zdDo4MDEyL2dpYWktdHJpLmh0bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0PDsyAxIG3hu7kgbmjDom4gVGjDoWkgc2VsZmllIHbhu5tpIGPhuqMgcXXDom4gxJFvw6BuIHNhbyB0aOG6vyBnaeG7m2ksIGFpIGTDqCBcImNo4bq3dCBjaMOpbVwiIHThu6sgaOG7mWkgS2VuZGFsbCDEkeG6v24gZMOgbiBu4buvIHRo4bqnbiBIb2EsIEjDoG4sIFZp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmF1IGPhu6cgcXXhuqMgbMOgIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBraMO0bmcgdGjhu4MgdGhp4bq/dSB0cm9uZyB0aOG7sWMgxJHGoW4gZ2nhuqNtIGPDom4sIG5oxrBuZyBu4bq/dSBraMO0bmcgYmnhur90IGzDoG0gbcOzbiBzYWxhZCB04buRdCBjaG8gc+G7qWMga2jhu49lIHRow6wgYuG6oW4gc+G6vSBy4bqldCBuaGFuaCBjaMOhbiDEkeG6pXkuJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2hhcnBlci1iZWNraGFtLW5hbS10YXktYm8tby1zYW4tYmF5LW1pYW1pJyxcclxuICAgICAgICAgICAgdGh1bWI6ICcvL2ltYWdlLnR1b2l0cmVwbHVzLmNvbS91cGxvYWQvMjAxOC8wMy8yNTB4MTU2L2FkYzlycDdmNTMuanBnJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8va2VuaDE0Y2RuLmNvbS96b29tLzM0MF8yMTMvMjAyMC9waG90bzE1ODU1NzM3MTEzNDQtMTU4NTU3MzcxMTc2Mi1jcm9wLTE1ODU1NzM4NTU3NTk4MDg2MTU1NjIuanBnJyxcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9zYW5kYm94LnR1b2l0cmVwbHVzLmNvbS9uaHVuZy10aHVvbmctdnUtY2EtbG9uLW51b3QtY2EtYmUtZGUtbW8tcm9uZy10aGktcGhhbi1wMjU2Lmh0bWwnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjAyMC0wNC0wNCAxMTowNjoxNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAxMixcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHaeG6o2kgdHLDrScsXHJcbiAgICAgICAgICAgICAgICAnc2x1Zyc6ICdnaWFpLXRyaScsXHJcbiAgICAgICAgICAgICAgICAnaHJlZic6ICdodHRwOi8vbG9jYWxob3N0OjgwMTIvZ2lhaS10cmkuaHRtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuSG9yaXpvbnRhbFdpZGdldC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsV2lkZ2V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob3Jpem9udGFsLW5ld3NcIjogXCJob3Jpem9udGFsLW5ld3NfX18yOUpRclwiLFxuXHRcImhvcml6b250YWwtc21hbGxcIjogXCJob3Jpem9udGFsLXNtYWxsX19fMmtqb0dcIixcblx0XCJsZWZ0XCI6IFwibGVmdF9fXzQwbzB6XCIsXG5cdFwicmlnaHRcIjogXCJyaWdodF9fXzNoa2ZPXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzF0aHhMXCIsXG5cdFwicm93LXJldmVyc2VcIjogXCJyb3ctcmV2ZXJzZV9fXzNqVmV1XCIsXG5cdFwibWV0YVwiOiBcIm1ldGFfX18yLUw0WFwiLFxuXHRcIm1ldGEtY2F0ZWdvcnlcIjogXCJtZXRhLWNhdGVnb3J5X19fMW15WjNcIixcblx0XCJtZXRhLXRpbWVcIjogXCJtZXRhLXRpbWVfX18yVS1xSVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fX18yaTNoZlwiLFxuXHRcInByb2dyZXNzLWxvYWRpbmdcIjogXCJwcm9ncmVzcy1sb2FkaW5nX19fZEJoN3BcIixcblx0XCJhcnRpY2xlXCI6IFwiYXJ0aWNsZV9fXzJTVEtKXCIsXG5cdFwiYXJ0aWNsZS1sZWZ0XCI6IFwiYXJ0aWNsZS1sZWZ0X19fM25jWFBcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiYmFja2dyb3VuZF9fX1JhZi1LXCIsXG5cdFwiYXJ0aWNsZS1yaWdodFwiOiBcImFydGljbGUtcmlnaHRfX18xbU1qSlwiLFxuXHRcImNhdGVnb3J5XCI6IFwiY2F0ZWdvcnlfX18zM3I0MlwiLFxuXHRcImFuaW1hdGVkLWxvYWRcIjogXCJhbmltYXRlZC1sb2FkX19fU1kyaW1cIixcblx0XCJwbGFjZUhvbGRlclNoaW1tZXJcIjogXCJwbGFjZUhvbGRlclNoaW1tZXJfX18xZFNzbFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgbnVtYmVyOiAxMCxcclxuICAgIHBvc3RzOiBbXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gTGlzdFdpZGdldChwcm9wcykge1xyXG4gICAgY29uc3Qge3Bvc3RzfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17ey4uLnByb3BzLnN0eWxlfX0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1snd2lkZ2V0J10sICdtYi0yMCcpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snd2lkZ2V0LWxpc3QnXX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA+PSBwcm9wcy5udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncG9zdCddfSBrZXk9eyd3aWRnZXQtbGlzdC0nICsgcG9zdC5waWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QudGl0bGV9Pntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbkxpc3RXaWRnZXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFdpZGdldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid2lkZ2V0XCI6IFwid2lkZ2V0X19fM2R2RWVcIixcblx0XCJ3aWRnZXQtbGlzdFwiOiBcIndpZGdldC1saXN0X19fMVN5T3ZcIixcblx0XCJwb3N0XCI6IFwicG9zdF9fX21yTGVlXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAnbGF6eXNpemVzJztcclxuaW1wb3J0ICdsYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXQnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTm9JbWFnZSBmcm9tICdTdGF0aWMvaW1hZ2VzL25vLWltYWdlLnBuZyc7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhbHQ6ICcnLFxyXG4gICAgdGh1bWI6IE5vSW1hZ2UsXHJcbiAgICBzcmM6IE5vSW1hZ2UsXHJcbiAgICBzY2FsZU9uSG92ZXI6IHRydWVcclxufTtcclxuXHJcbmNsYXNzIFByb2dyZXNzaXZlTWVkaWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGggfHwgJyc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wcy5oZWlnaHQgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgcmVmPXt0aGlzLm15UmVmfSBjbGFzc05hbWU9e3N0eWxlc1sncHJvZ3Jlc3NpdmUtZmlndXJlJ119IHN0eWxlPXt0aGlzLndpZHRoID8ge3dpZHRoOiB0aGlzLndpZHRofSA6IHt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXInXX0gc3R5bGU9e3RoaXMuaGVpZ2h0ID8ge2hlaWdodDogdGhpcy5oZWlnaHR9IDoge319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXItZmlsbCddfSBzdHlsZT17e3BhZGRpbmdCb3R0b206ICc1Ny44JSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbJ3Byb2dyZXNzaXZlLW1lZGlhJ10sIHN0eWxlc1snaXMtaW1hZ2UtbG9hZGVkJ10sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZXNbJ3NjYWxlLW9uLWhvdmVyJ11dOiB0aGlzLnByb3BzLnNjYWxlT25Ib3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbJ2NlbnRlcmVkJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3JjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e3RoaXMucHJvcHMuYWx0fSBsb2FkaW5nPVwibGF6eVwiIHNyYz17dGhpcy5wcm9wcy50aHVtYn0gZGF0YS1zcmM9e3RoaXMucHJvcHMuc3JjfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzWydwcm9ncmVzc2l2ZS1tZWRpYS1pbWFnZSddLCAnbGF6eWxvYWQgdy1mdWxsIGgtZnVsbCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXt0aGlzLnByb3BzLmFsdH0gbG9hZGluZz1cImxhenlcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzWydwcm9ncmVzc2l2ZS1tZWRpYS1pbWFnZSddLCAndy1mdWxsIGgtZnVsbCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbm9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Qcm9ncmVzc2l2ZU1lZGlhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzaXZlTWVkaWE7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2dyZXNzaXZlLWZpZ3VyZVwiOiBcInByb2dyZXNzaXZlLWZpZ3VyZV9fXzNMczlCXCIsXG5cdFwiYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyXCI6IFwiYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyX19fM2l0SDNcIixcblx0XCJhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXItZmlsbFwiOiBcImFzcGVjdC1yYXRpby1wbGFjZWhvbGRlci1maWxsX19fMXd0dHRcIixcblx0XCJwcm9ncmVzc2l2ZS1tZWRpYVwiOiBcInByb2dyZXNzaXZlLW1lZGlhX19fMThROUFcIixcblx0XCJwcm9ncmVzc2l2ZS1tZWRpYS10aHVtYlwiOiBcInByb2dyZXNzaXZlLW1lZGlhLXRodW1iX19fMkw1Q2dcIixcblx0XCJwcm9ncmVzc2l2ZS1tZWRpYS1pbWFnZVwiOiBcInByb2dyZXNzaXZlLW1lZGlhLWltYWdlX19fMnNQdERcIixcblx0XCJjZW50ZXJlZFwiOiBcImNlbnRlcmVkX19fMnJPVVhcIixcblx0XCJpcy1pbWFnZS1sb2FkZWRcIjogXCJpcy1pbWFnZS1sb2FkZWRfX196ejFaV1wiLFxuXHRcInNjYWxlLW9uLWhvdmVyXCI6IFwic2NhbGUtb24taG92ZXJfX190cE9uWFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFByb2dyZXNzaXZlTWVkaWEgZnJvbSAnQ29tcG9uZW50cy9Qcm9ncmVzc2l2ZU1lZGlhJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge2dldFBvc3RJbWFnZX0gZnJvbSAnTGlicy91dGlscyc7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGl0bGU6ICdRdcO9IGPDtCBzw6BuaCcsXHJcbiAgICBwb3N0TnVtYmVyOiA1LFxyXG4gICAgYmFja2dyb3VuZDogJ2xhcmdlJywgLy8gbGFyZ2UsIG5vcm1hbCwgbWVkaXVtLCBzbWFsbFxyXG4gICAgcG9zdHM6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFySGlnaGxpZ2h0V2lkZ2V0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7dGl0bGUsIHBvc3RzfSA9IHByb3BzO1xyXG4gICAgY29uc3QgZmVhdHVyZVBvc3QgPSBwb3N0cy5sZW5ndGggPyBwb3N0c1swXSA6IHt9O1xyXG4gICAgY29uc3QgZmVhdHVyZUJhY2tncm91bmQgPSBnZXRQb3N0SW1hZ2UoZmVhdHVyZVBvc3QsIHByb3BzLmJhY2tncm91bmQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17ey4uLnByb3BzLnN0eWxlfX0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1snaG9yaXpvbnRhbC13aWRnZXQtbmV3cyddLCAnbWItMjAnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RhYi10aXRsZSddfT5cclxuICAgICAgICAgICAgICAgIDxoMj48c3Bhbj57dGl0bGV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydmZWF0dXJlZCddfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBmZWF0dXJlUG9zdC5zbHVnICsgJyZwaWQ9JyArIGZlYXR1cmVQb3N0LnBpZH0gYXM9eycvJyArIGZlYXR1cmVQb3N0LnNsdWcgKyAnLXAnICsgZmVhdHVyZVBvc3QucGlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e2ZlYXR1cmVQb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzWyd0aXRsZSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGh1bWItaW1hZ2UnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVBvc3QuYmFja2dyb3VuZCAmJiA8UHJvZ3Jlc3NpdmVNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtmZWF0dXJlUG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI9e2ZlYXR1cmVQb3N0LnRodW1ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZlYXR1cmVCYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0YWcnXX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVQb3N0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncG9zdC1saXN0J119PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPj0gMSAmJiBrZXkgPD0gcHJvcHMucG9zdE51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwb3N0J119IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5TaWRlYmFySGlnaGxpZ2h0V2lkZ2V0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJIaWdobGlnaHRXaWRnZXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvcml6b250YWwtd2lkZ2V0LW5ld3NcIjogXCJob3Jpem9udGFsLXdpZGdldC1uZXdzX19fM0NHQU5cIixcblx0XCJ0YWItdGl0bGVcIjogXCJ0YWItdGl0bGVfX18yMHQ2NVwiLFxuXHRcImZlYXR1cmVkXCI6IFwiZmVhdHVyZWRfX18xankyM1wiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVfX18ydHF5LVwiLFxuXHRcInRodW1iLWltYWdlXCI6IFwidGh1bWItaW1hZ2VfX181dTE0NVwiLFxuXHRcInRhZ1wiOiBcInRhZ19fX2dPaDVIXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9fXzNxZHQxXCIsXG5cdFwicG9zdC1saXN0XCI6IFwicG9zdC1saXN0X19fMjBORlRcIixcblx0XCJwb3N0XCI6IFwicG9zdF9fXzFwNU5JXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVNZWRpYSBmcm9tICdDb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEnO1xyXG5pbXBvcnQge2dldFBvc3RJbWFnZX0gZnJvbSAnTGlicy91dGlscyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRpdGxlOiAnUXXDvSBjw7Qgc8OgbmgnLFxyXG4gICAgaXNTaG93VGFnOiB0cnVlLFxyXG4gICAgaXNTaG93RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbGFyZ2UnLFxyXG4gICAgcG9zdDoge31cclxufTtcclxuXHJcbmZ1bmN0aW9uIFZlcnRpY2FsV2lkZ2V0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7dGl0bGUsIHBvc3R9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZ2V0UG9zdEltYWdlKHBvc3QsIHByb3BzLmJhY2tncm91bmQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzWydmZWF0dXJlZCddKX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0aHVtYi1pbWFnZSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAmJiA8UHJvZ3Jlc3NpdmVNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlT25Ib3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYj17cG9zdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtiYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pc1Nob3dUYWcgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGFnJ119Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1sndGl0bGUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuaXNTaG93RGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5WZXJ0aWNhbFdpZGdldC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbFdpZGdldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmVhdHVyZWRcIjogXCJmZWF0dXJlZF9fXzJodGZmXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzJmUVUzXCIsXG5cdFwidGh1bWItaW1hZ2VcIjogXCJ0aHVtYi1pbWFnZV9fX1JqczZ1XCIsXG5cdFwidGFnXCI6IFwidGFnX19fZUNnQkpcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2NyaXB0aW9uX19fM3QtaHRcIlxufTsiLCJjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuXHJcbmNvbnN0IEFwcCA9IHtcclxuICAgIGRldmVsb3BtZW50OiB7XHJcbiAgICAgICAgU0lURV9VUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICBNT0JJTEVfU0lURV9VUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwMTIvJyxcclxuICAgICAgICBBUElfSE9TVDogJ2h0dHBzOi8vbWVvdmF0aGF5LnZuL3YyL2FwaS8nXHJcbiAgICB9LFxyXG4gICAgc2FuZGJveDoge1xyXG4gICAgICAgIFNJVEVfVVJMOiAnaHR0cDovL3NhbmRib3gubWVvdmF0aGF5LnZuLycsXHJcbiAgICAgICAgTU9CSUxFX1NJVEVfVVJMOiAnaHR0cDovL3NhbmRib3gtbS5tZW92YXRoYXkudm4vJyxcclxuICAgICAgICBBUElfSE9TVDogJ2h0dHA6Ly9zYW5kYm94Lm1lb3ZhdGhheS52bi92Mi9hcGkvJ1xyXG4gICAgfSxcclxuICAgIHByb2R1Y3Rpb246IHtcclxuICAgICAgICBTSVRFX1VSTDogJ2h0dHBzOi8vbWVvdmF0aGF5LnZuLycsXHJcbiAgICAgICAgTU9CSUxFX1NJVEVfVVJMOiAnaHR0cHM6Ly9tLm1lb3ZhdGhheS8nLFxyXG4gICAgICAgIEFQSV9IT1NUOiAnaHR0cHM6Ly9tZW92YXRoYXkudm4vdjIvYXBpLydcclxuICAgIH1cclxufVtlbnZdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IENvbnN0YW50ID0ge1xyXG4gICAgLi4uQXBwLFxyXG4gICAgU1RBVElDX1ZFUlNJT046IDEyMyxcclxuICAgIEtFWUNPREU6IHtcclxuICAgICAgICBFTlRFUjogMTNcclxuICAgIH0sXHJcbiAgICBTRUFSQ0hfVE9fUVVFUlk6IDEsXHJcbiAgICBRVUVSWV9UT19TRUFSQ0g6IDJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBjb25zdGFudCBmcm9tICdDb25maWcvY29uc3RhbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSwgZm9ybWF0ID0gJ1lZWVktTU0tREQgSEg6bW06c3MnKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIDA3LzAzLzIwMjAgMjE6MzQ6MzAgPT4gMyBzZWNvbmRzIGFnb1xyXG4gICAgICAgIC8vIDA3LzAzLzIwMjAgMjE6MzQ6MzAgPT4gMyBtaW51dGVzLCAxNSBzZWNvbmRzIGFnb1xyXG4gICAgICAgIC8vIDA3LzAzLzIwMjAgMjE6MzQ6MzAgPT4gMyBob3VycyBhZ29cclxuICAgICAgICAvLyAwNy8wMy8yMDIwIDEwOjM0OjMwID0+ID4yNGggPT4gMDcvMDMvMjAyMCAxMDozNDozMFxyXG5cclxuICAgICAgICBpZiAodGltZSkge1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kcyA9IG1vbWVudCgpLmRpZmYobW9tZW50KHRpbWUsIGZvcm1hdCksICdzZWNvbmRzJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyAmJiArc2Vjb25kcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogc2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlY29uZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZzogJzEgcGjDunQgdHLGsOG7m2MnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlY29uZHMgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW51dGVzID4gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSG91cnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXJzID4gMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IE1hdGgucm91bmQoaG91cnMgLyAyNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBtb21lbnQodGltZSkuZm9ybWF0KCdISDptbSB8IEREL01NJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyaW5nID0gaG91cnMgKyAnIGdp4budIHRyxrDhu5tjJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBob3VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaG91cicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyaW5nID0gbWludXRlcyArICcgcGjDunQgdHLGsOG7m2MnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBtaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21pbnV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdW90ZURvdWJsZVRvU2luZ2xlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgcGF5bG9hZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2hhbmRsZUVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2VuZCBlcnJvciBsb2dcclxuICAgICAgICAvKmNvbnN0IG1vbml0b3IgPSByZXF1aXJlKCdAYW50c2NvcnAvbW9uaXRvci1qYXZhc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIG1vbml0b3IuaW5pdCh7XHJcbiAgICAgICAgICAgIHBpZDogMTU5MjMwNzA1OTc5NSxcclxuICAgICAgICAgICAgZW52OiBwcm9jZXNzLmVudi5FTlYsXHJcbiAgICAgICAgICAgIGhvc3Q6ICdodHRwOi8vbW9uaXRvci50dW9pdHJlcGx1cy5jb20vYXBpL21vbml0b3IvZXJyb3IvJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtb25pdG9yLmhhbmRsZUVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgICAgIHRyYWNlSWQ6ICcnLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkXHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFNlYXJjaEFuZFBhcmFtKHZhbHVlLCBkaXJlY3Rpb24gPSBjb25zdGFudC5TRUFSQ0hfVE9fUVVFUlkpIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IGNvbnN0YW50LlNFQVJDSF9UT19RVUVSWSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJysnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoJysnLCAvXFxzL2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0UHJvcFNhZmVseShmbiwgZGVmYXVsdFZhbHVlID0gJycpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RJbWFnZSA9IChwb3N0LCBiYWNrZ3JvdW5kID0gJ2xhcmdlJykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocG9zdCAmJiBiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kID09PSAnbGFyZ2UnICYmIHBvc3QuYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3QuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3N0LmltYWdlcyAmJiBwb3N0LmltYWdlc1tiYWNrZ3JvdW5kXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3QuaW1hZ2VzW2JhY2tncm91bmRdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3QuYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3QuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBndGFnSW5qZWN0ID0gKGdhSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGdhSWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2FTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2dsZUFuYWx5dGljc1NvdXJjZSA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z2FJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBzMCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuXHJcbiAgICAgICAgICAgIGdhU2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBnb29nbGVBbmFseXRpY3NTb3VyY2UpO1xyXG4gICAgICAgICAgICBzMC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnYVNjcmlwdCwgczApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBndGFnVHJhY2tpbmdFdmVudCgnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgZ3RhZ1RyYWNraW5nRXZlbnQoJ2NvbmZpZycsIGdhSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEVycm9yXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ3RhZ1RyYWNraW5nRXZlbnQgPSAoZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24sIGFyZ3MpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xyXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNraW5nKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAuLi5hcmdzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCAmJiBldmVudENhdGVnb3J5ICE9PSAnanMnKSB7XHJcbiAgICAgICAgICAgIHRyYWNraW5nKGV2ZW50Q2F0ZWdvcnksIGV2ZW50QWN0aW9uLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYWNraW5nKGV2ZW50Q2F0ZWdvcnksIGV2ZW50QWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEVycm9yXHJcbiAgICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl9fX2d6QjcyXCIsXG5cdFwic2lkZWJhci1jYXRlZ29yeVwiOiBcInNpZGViYXItY2F0ZWdvcnlfX18zZnJKLVwiLFxuXHRcImhlYWRpbmdcIjogXCJoZWFkaW5nX19fMlNHcnlcIixcblx0XCJjb250ZW50XCI6IFwiY29udGVudF9fXzNYUmJwXCIsXG5cdFwibGVmdFwiOiBcImxlZnRfX19jakpqLVwiLFxuXHRcInJpZ2h0XCI6IFwicmlnaHRfX18zdjczRFwiXG59OyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSG9yaXpvbnRhbFdpZGdldCBmcm9tICdDb21wb25lbnRzL0hvcml6b250YWxXaWRnZXQnO1xyXG5pbXBvcnQgU2lkZWJhckhpZ2hsaWdodFdpZGdldCBmcm9tICdDb21wb25lbnRzL1NpZGViYXJIaWdobGlnaHRXaWRnZXQnO1xyXG5pbXBvcnQgTGlzdFdpZGdldCBmcm9tICdDb21wb25lbnRzL0xpc3RXaWRnZXQnO1xyXG5pbXBvcnQgVmVydGljYWxXaWRnZXQgZnJvbSAnQ29tcG9uZW50cy9WZXJ0aWNhbFdpZGdldCc7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgKiBhcyBQb3N0SG9tZVNlcnZpY2UgZnJvbSAnU2VydmljZXMvUG9zdC9Ib21lJztcclxuaW1wb3J0ICogYXMgUG9zdENhdGVnb3J5U2VydmljZSBmcm9tICdTZXJ2aWNlcy9Qb3N0L0NhdGVnb3J5JztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHt1cGRhdGVEb2N1bWVudCwgdXBkYXRlQnJlYWRjcnVtYlN0cnVjdHVyZSwgc2V0SGVhZGVyTWVudX0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IHtoYW5kbGVFcnJvcn0gZnJvbSAnTGlicy91dGlscyc7XHJcbmltcG9ydCBDb25zdGFudCBmcm9tICdDb25maWcvY29uc3RhbnQnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnTW9kdWxlcy9QYWdlcy9Ib21lL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBQQVRIID0gJ2FwcGxpY2F0aW9uL3BhZ2VzL2luZGV4LmpzeCc7XHJcbmNvbnN0IEJPWF9WRVJUSUNBTF9ORVdTX1NUWUxFID0gMTtcclxuY29uc3QgQk9YX1ZFUlRJQ0FMX0FORF9MSVNUX05FV1NfU1RZTEUgPSAyO1xyXG5jb25zdCBCT1hfSE9SSVpPTlRBTF9BTkRfVEhVTUJfTkVXU19TVFlMRSA9IDM7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlZHV4U3RvcmUsIHJlcX0pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZXMgPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IENvbnN0YW50LlNJVEVfVVJMO1xyXG4gICAgICAgICAgICBjb25zdCBtb2JpbGVVcmwgPSBDb25zdGFudC5NT0JJTEVfU0lURV9VUkw7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgZG9jdW1lbnQgdGl0bGUgZGVmYXVsdCBpbiBob21lIHBhZ2VcclxuICAgICAgICAgICAgaWYgKHN0YXRlcyAmJiBzdGF0ZXMuZG9jdW1lbnQgJiYgc3RhdGVzLmRvY3VtZW50LmRlZmF1bHRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmVkdXhTdG9yZS5kaXNwYXRjaCh1cGRhdGVEb2N1bWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0YXRlcy5kb2N1bWVudC5kZWZhdWx0VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlOiBtb2JpbGVVcmxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIEJyZWFkY3J1bWIgc3RydWN0dXJlZCBkYXRhXHJcbiAgICAgICAgICAgIHJlZHV4U3RvcmUuZGlzcGF0Y2godXBkYXRlQnJlYWRjcnVtYlN0cnVjdHVyZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtTGlzdEVsZW1lbnQ6IFtdXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZSBNZW51IGFjdGl2ZSB3aGVuIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICBpZiAoc3RhdGVzICYmIHN0YXRlcy5oZWFkZXJNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyTWVudSA9IHN0YXRlcy5oZWFkZXJNZW51Lm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW51LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnUuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZCA9IG1lbnUuY2hpbGQubWFwKChjaGlsZE1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE1lbnUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZWR1eFN0b3JlLmRpc3BhdGNoKHNldEhlYWRlck1lbnUoaGVhZGVyTWVudSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBUEkgZ2V0IHBvc3RzIGZvciBIb21lIHBhZ2VcclxuICAgICAgICAgICAgY29uc3QgZ2V0SG9tZVBvc3RzID0gUG9zdEhvbWVTZXJ2aWNlLmdldExpc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYXRlc3QgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHRvcCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGZlYXR1cmVOZXdzID0gW107XHJcbiAgICAgICAgICAgIGxldCBmZWF0dXJlTmV3c1JpZ2h0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBhcnJUb3BQaWQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxOZXdzID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2V0SG9tZVBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBnZXRIb21lUG9zdHMudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0ID0gcmVzcG9uc2UuZGF0YS5kYXRhLmxhdGVzdCB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRvcCB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSByZXNwb25zZS5kYXRhLmRhdGEuY2F0ZWdvcnkgfHwgW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9wLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcC5tYXAoKHBvc3QsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0LnBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb3BQaWQucHVzaChwb3N0LnBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IFtwb3N0LmJhY2tncm91bmRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zdC5pbWFnZXMgJiYgcG9zdC5pbWFnZXMubm9ybWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IFtwb3N0LmltYWdlcy5ub3JtYWxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9wIDMgcG9zdHMgdG8gZmVhdHVyZWQgcG9zdCBhbmQgdGhlbiBob3Jpem9udGFsIG5ld3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTmV3cy5wdXNoKHBvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOZXdzUmlnaHQucHVzaChwb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlICYmIGltYWdlLmluZGV4T2YoJ2h0dHBzOicpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdodHRwczonICsgaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1eFN0b3JlLmRpc3BhdGNoKHVwZGF0ZURvY3VtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3RhdGVzLmRvY3VtZW50LmRlZmF1bHRUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0YXRlcy5kb2N1bWVudC5kZWZhdWx0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IENvbnN0YW50LlNJVEVfVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdldEhvcml6b250YWxOZXdzID0gUG9zdENhdGVnb3J5U2VydmljZS5nZXRMaXN0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3ZWVrbHknLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IDMwLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnZXRIb3Jpem9udGFsTmV3cykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZ2V0SG9yaXpvbnRhbE5ld3MudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbE5ld3MgPSByZXNwb25zZS5kYXRhLmRhdGEucG9zdHMgfHwgW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbE5ld3MgJiYgaG9yaXpvbnRhbE5ld3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsTmV3cyA9IGhvcml6b250YWxOZXdzLmZpbHRlcigocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJUb3BQaWQuaW5kZXhPZihwb3N0LnBpZCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge2xhdGVzdCwgdG9wLCBjYXRlZ29yeSwgZmVhdHVyZU5ld3MsIGZlYXR1cmVOZXdzUmlnaHQsIGhvcml6b250YWxOZXdzfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2dldEluaXRpYWxQcm9wcycsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2F0ZWdvcnlCb3hTdHlsZSA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgaWYgKFsnZG9pLXNvbmcnLCAnc3VjLWtob2UnXS5pbmRleE9mKHNsdWcpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJPWF9WRVJUSUNBTF9ORVdTX1NUWUxFO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoWyd0aG9pLXRyYW5nJ10uaW5kZXhPZihzbHVnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCT1hfVkVSVElDQUxfQU5EX0xJU1RfTkVXU19TVFlMRTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQk9YX0hPUklaT05UQUxfQU5EX1RIVU1CX05FV1NfU1RZTEU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhdGVnb3J5Qm94ID0gKGNhdGVnb3J5LCBib3hTdHlsZSA9IEJPWF9WRVJUSUNBTF9ORVdTX1NUWUxFKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5ICYmIGNhdGVnb3J5Lm5hbWUgJiYgY2F0ZWdvcnkuc2x1ZyAmJiBjYXRlZ29yeS5wb3N0cyAmJiBib3hTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgYm94U3R5bGUgPSB0aGlzLmdldENhdGVnb3J5Qm94U3R5bGUoY2F0ZWdvcnkuc2x1Zyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChib3hTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQk9YX1ZFUlRJQ0FMX05FV1NfU1RZTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnkuaWR9IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1snc2lkZWJhci1jYXRlZ29yeSddKX0gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI2ZhZmFmYSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydoZWFkaW5nJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jYXRlZ29yeS1ieS1pZD9zbHVnPScgKyBjYXRlZ29yeS5zbHVnICsgJyZjaWQ9JyArIGNhdGVnb3J5LmlkfSBhcz17Jy8nICsgY2F0ZWdvcnkuc2x1ZyArICctYycgKyBjYXRlZ29yeS5pZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e2NhdGVnb3J5Lm5hbWV9PntjYXRlZ29yeS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25Mb2FkaW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dDYXRlZ29yeT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUm93UmV2ZXJzZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J25vcm1hbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzPXtjYXRlZ29yeS5wb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBCT1hfVkVSVElDQUxfQU5EX0xJU1RfTkVXU19TVFlMRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydzaWRlYmFyLWNhdGVnb3J5J10pfSBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmFmYWZhJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ2hlYWRpbmcnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NhdGVnb3J5LWJ5LWlkP3NsdWc9JyArIGNhdGVnb3J5LnNsdWcgKyAnJmNpZD0nICsgY2F0ZWdvcnkuaWR9IGFzPXsnLycgKyBjYXRlZ29yeS5zbHVnICsgJy1jJyArIGNhdGVnb3J5LmlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17Y2F0ZWdvcnkubmFtZX0+e2NhdGVnb3J5Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFdpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dDYXRlZ29yeT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUm93UmV2ZXJzZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J25vcm1hbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e2NhdGVnb3J5LnBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cz17Y2F0ZWdvcnkucG9zdHMuZmlsdGVyKChwb3N0LCBrZXkpID0+IGtleSA+IDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEJPWF9IT1JJWk9OVEFMX0FORF9USFVNQl9ORVdTX1NUWUxFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3NpZGViYXItY2F0ZWdvcnknXSl9IHN0eWxlPXt7YmFja2dyb3VuZDogJyNmYWZhZmEnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1snaGVhZGluZyddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2F0ZWdvcnktYnktaWQ/c2x1Zz0nICsgY2F0ZWdvcnkuc2x1ZyArICcmY2lkPScgKyBjYXRlZ29yeS5pZH0gYXM9eycvJyArIGNhdGVnb3J5LnNsdWcgKyAnLWMnICsgY2F0ZWdvcnkuaWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtjYXRlZ29yeS5uYW1lfT57Y2F0ZWdvcnkubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydjb250ZW50J10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ2xlZnQnXSwgJ2ZsJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnRpY2FsV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93VGFnPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbm9ybWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtjYXRlZ29yeS5wb3N0c1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1sncmlnaHQnXSwgJ2ZyJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvd0NhdGVnb3J5PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Jvd1JldmVyc2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93RGVzY3JpcHRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU21hbGxMYXlvdXQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J21lZGl1bSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzPXtjYXRlZ29yeS5wb3N0cy5maWx0ZXIoKHBvc3QsIGtleSkgPT4ga2V5ID4gMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gRXJyb3JcclxuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdyZW5kZXJDYXRlZ29yeUJveCcsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFN0eWxlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1snY29udGFpbmVyJ10sICdjb250YWluZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgnY29udGFpbmVyLWJvZHkgY2xlYXJmaXggdzExNjAgcGItMjAnKX0gc3R5bGU9e3tib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgndzU0MCBmbCBwdC0yMCcpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlTmV3cyAmJiB0aGlzLnByb3BzLmZlYXR1cmVOZXdzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnRpY2FsV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dUYWc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93RGVzY3JpcHRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3RoaXMucHJvcHMuZmVhdHVyZU5ld3NbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHQtMjBcIiBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmVhdHVyZU5ld3MgJiYgdGhpcy5wcm9wcy5mZWF0dXJlTmV3cy5sZW5ndGggPyB0aGlzLnByb3BzLmZlYXR1cmVOZXdzLm1hcCgocG9zdCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID4gMCAmJiBrZXkgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5LnRvU3RyaW5nKCl9IHN0eWxlPXt7d2lkdGg6IDI2MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnRpY2FsV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93VGFnPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dEZXNjcmlwdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J25vcm1hbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoJ3c1OTAgZnIgcHQtMjAnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgnZmwnKX0gc3R5bGU9e3t3aWR0aDogMjY1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZlYXR1cmVOZXdzUmlnaHQgJiYgdGhpcy5wcm9wcy5mZWF0dXJlTmV3c1JpZ2h0Lmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFdpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvd1RhZz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93RGVzY3JpcHRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9eydub3JtYWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3RoaXMucHJvcHMuZmVhdHVyZU5ld3NSaWdodFswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmVhdHVyZU5ld3NSaWdodCAmJiB0aGlzLnByb3BzLmZlYXR1cmVOZXdzUmlnaHQubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NtYWxsTGF5b3V0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvd0NhdGVnb3J5PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dEZXNjcmlwdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J21lZGl1bSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3RoaXMucHJvcHMuZmVhdHVyZU5ld3NSaWdodC5maWx0ZXIoKHBvc3QsIGtleSkgPT4ga2V5ID4gMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgnZmwgcGwtMjAnKX0gc3R5bGU9e3t3aWR0aDogMzI1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJIaWdobGlnaHRXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJN4bubaSBuaOG6pXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbm9ybWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3RoaXMucHJvcHMubGF0ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgnY29udGFpbmVyLWJvZHkgY2xlYXJmaXggdzExNjAgcHQtMjAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmwgdzU0MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9yaXpvbnRhbE5ld3MgJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsTmV3cy5sZW5ndGggPyA8SG9yaXpvbnRhbFdpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9ezE2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbWVkaXVtJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3RoaXMucHJvcHMuaG9yaXpvbnRhbE5ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyIHc1OTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNhdGVnb3J5ICYmIHRoaXMucHJvcHMuY2F0ZWdvcnkubGVuZ3RoID8gdGhpcy5wcm9wcy5jYXRlZ29yeS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNhdGVnb3J5Qm94KGNhdGVnb3J5LCBCT1hfVkVSVElDQUxfTkVXU19TVFlMRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdyZW5kZXInLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogUEFUSCxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBcFFBQUFGekNBSUFBQUFQQkE3TUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVJwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNeTFqTURFeElEWTJMakUwTlRZMk1Td2dNakF4TWk4d01pOHdOaTB4TkRvMU5qb3lOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1RXRmphVzUwYjNOb0tTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEdNREk0UmpZM09VRTVRakl4TVVVNVFUSTBNRVl5UmtFMlJUZEVORU0zTXlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwR01ESTRSalkzUVVFNVFqSXhNVVU1UVRJME1FWXlSa0UyUlRkRU5FTTNNeUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tZd01qaEdOamMzUVRsQ01qRXhSVGxCTWpRd1JqSkdRVFpGTjBRMFF6Y3pJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1l3TWpoR05qYzRRVGxDTWpFeFJUbEJNalF3UmpKR1FUWkZOMFEwUXpjeklpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCs0YmsrY1FBQUZOaEpSRUZVZU5yczNRbFRVMmNiZ0dFU1FBUkVRVXBaSEcxMW5GYkhzWjFwcC8vL0YzU211SS9UejZWVjJUY0ZXVU8rcDd3MmpTd0JrcHlFQTljMVU0YXd4UjVDN2p3bjd6a3BMQzB0ZFhSMGxNdmxRcUdRM25adzlzU3Z4a1lBSUNtSU4zaU1CV2N1VG1KMHduaTNZSHUxN0s3TmJ4MkE4eHp2eGNWRnRRTUE4UVlBTW90MzJtME9BSWczQUNEZUFJQjRBNEI0a3drSEVPZm1MOHJhVDBDOEVXL3hCaEJ2OFVhOEFmRkd2QkZ2UUx3UmIvRUdFRy94UnJ3QjhVYThFVzlBdkJGdjhRWVFiL0ZHdklIenBtZ1Q1Q1VKcVFxVnQ5VVhxejkrN0dkclhIUVZEVjZGY2dPdDBYV1NtUy91a3RMYjZvdUdFckNEQkRJZFd0TGYxS0VOT3Bpa3lzZVAvV3lOaTNtNUNwTTNBR2N1MnpaQ2JlSU5BRG5UVmQrM2VWZ0VBRG1MdCtlOEFhQmQ3RFlIQVBFR0FNUWJBS2l3WUEwQUxrYThMVmdEZ0hheDJ4d0FMc2JrYllZR2dKekYyMjV6QUdnWHU4MEJRTHdCQVBFR0FCcU5kM3IydXZwdDljVjluOTMzWlhCZTFmMTNjZkRQcEw2THJzSlZuSStycU9OYVd2RFhkNmF1b2l1TCs2a2FId2NBMmpONUF3RGlEUUNJTndDSU53QWczZ0NBZUFPQWVBTUE0ZzBBaURjQWlEY0FJTjRBZ0hnRGdIZ0RBT0lOQUlnM0FJZzNBQ0RlQUlCNEE0QjQyd1FBSU40QWdIZ0RBT0lOQU9JTkFJZzNBQ0RlQUNEZUFJQjRBd0RpRFFEaURRQ0lOd0FnM2dBZzNnQ0FlQU1BNGcwQTUxaGhhV25KVmdBQThRWUF4SnVPam5LNVhDZ1UwdHZxaS8vOEl2LzkrTEdmclhIUlZUVGxLb0JHeTdUM1o0VjRBNEI0QXdEaURRQ0lOd0NJTndBZzNnQ0FlQU9BZUFNQTRnMEFpRGNBaURjQUlONEFnSGdEZ0hnREFPSU5BSWczQUlnM0FDRGVBSUI0QTRCNGl6Y0FpRGNBSU40QWdIZ0RnSGdEQU9JTkFJZzNBSWczQUNEZUhLNWNMaGNLaGZTMit1SS92OGgvUDM3c1oydGNkQlZOdVFxZzBUTHQvVmtoM2dBZzNnQ0FlQU1BNGcwQTRnMEFpRGNBSU40QUlONEFnSGdEQU9JTkFPSU5BSWczQUNEZUFDRGVBSUI0QXdEaURRRGlEUUNJTndBZzNnQWczdUlOQU9JTkFJZzNBQ0RlQUNEZUFJQjRBd0RpRFFEaURRQ0lONXdWNVhLNXVPZkxIMHloWUp0a3VyWGo3ZTRlV3h2RUcrcjY4eWdVT2pzN0l5U2Y5MnhzYktTb2tOSFc3dW5wNmUzdDdlL3Y3K3JxcWlRY0VHODRxY2gyRElKemMzUHYzNzlmV1ZuWjNOeU1pMmJCVE1mdTJMemQzZDFYcmx3Wkd4dTdjZU5HL0FwS3BaSXRBK0lOSnhLVFg0emFMMTY4bUptWmlhaEVSU3A3enNsVUdyaGptdzhPRHY3NDQ0L0R3OFBSNzdRN0hSQnZxRFZ6eDZqOTlPblQ1ZVhsR0FSTjIyMnhzN01URy8vKy9mc1RFeE1wNTdZSmlEY2NMaWJzVDU4K1RVNU9ycTJ0eGZ4dGc3UjNDbzlmeDRNSEQ4Ykd4anovRFYvZFU5a0VVRjN1emMzTkZ5OWVLUGNaK1hXVVNxV1hMMSt1ckt4MGRuYmFJQ0RlY0loQ29mRCsvZnZGeFVYbFBpT2kyZXZyNjY5ZXZiSnlEY1FiRHAvem9oTWZQbnp3SlBkWjYvZkN3a0k4b2pKOFE0WHhBdjZMZDBTaXhnNXpSeDVudmYwUFhkSWZqNlcydDdkblptWkdSa1pzSlJEdi9Fa0h3bGFPTnE1Y1RIZHdKL3hzallzWCtTcFNtNWVYbDQvYStLVlNxYnU3KytyVnErYnlqTVREcHZYMTlVUEg2OWptSHo5KzNOcmFTaWR2c2EzT1BYOWw0bjBPYjlDVm0zWFRMMTd3cTRncXJLNnVIbnF2RWVXK2N1WEtnd2NQSXQ2T1djcm90cDJXQ3M3T3poN3NkMXBJR0M1ZHVtVDd3ei94cm5IU3FCcC9KQjRXbWJ6UDMrUWRZclk3YXN2ZnZIbnptMisraVg0YysrK2t2dHQyZjMvL25UdDNGaFlXRHQ0cHhjV2RQYlh2bHpCNW03emhJdmFqeGwxSnpIenBWRjhwMHVtTEs5K3k3eUoxaU0wYkd6bkc3dTN0N1VQdnUyMWVxTERhSE13Qk9YajhCSWczQU9TWTNlYjVtLzhzV012aUtrNDdndGUrYXJMN0U3Q0ZRYnh6eG9LMXJCZXNuZkJYY05SVmROanhtLzJmZ0MxOGNRWVZ4QnZhUHk5VzdvL0svN0psQVBHR005ZnN6czdPZUZzcWxTcEhPc1hGcnE2dTlFcWp1N3U3VHRrTmlEZWNsV3hIb1NQTWk0dUxDd3NMSHo5KzNOallTRWVhRll2RktIZGZYOS9nNE9EdzhIQi9mMzk4VU1JQjhZWjJTaWZvbnA2ZS91dXZ2NWFXbGxLWTQ0UFZUNHJIeDZlbXBucDZla1pIUjIvZHVoVUpUMm0zOVFEeGhsYnI3T3pjMnRyNjg4OC8zNzkvSHoyT2l6Rm5IL3BsSFhzbmRIdno1czNzN096ZHUzY25KaVoyZDNmMUd4QnZhSjNvYmxkWDErcnE2cE1uVDJLd1RrOXNIenVqaDQyTmpmaVd0YlcxTzNmdXhFVXZ2QUVjeTBsYW9Ha3pkd1Q0MGFOSHk4dkxhVDNheWI4eG12MzY5ZXYvL2U5L0hRNlNBY1FiV2pOelIzMTNkbmFlUDMvKzhlUEhvMTRPdklZSWR2eUV0Mi9mdm52M3J2THNPSUI0UTFiU01keVIzdm41K1RyS1hma2g4ZmJWcTFlUmYvRUd4QnN5SDd0WFYxZlQwTnpRWDJPeHVMNisvdmZmZjNmWWVRNklOMlE2ZHNmYm1abVpqWTJOQnVQZHNmZjg5OXpjWER3VWFQeEhBZUlOSEdsN2UzdCtmcjRwczNJMGUydHJhMkZod1ZZRnhCc3kreE1xRnRmVzF0YlgxNXM0S3k4dExlM3U3clozejNsYUErLzNDK0lONTFBazl2UG56ekY4TjZ1MThYUGkwVUFiai9aT3AyU1A2WDkxZGJYdTlYZUFlTVBaTFhlNVhON2EybXJ1bWRGS3BWSVRIdzNVVWU3NStmbkp5Y2xuejU3RjQ1SjBNamhBdk9GY2FmcVVuRjZxcFBYeFRxK25Nak16OCtUSms1MmRuZVhsNVVlUEhxMnZyNXUvUWJ6aEhNN2ZHYzMwTGY0ZmlTRTd5djMwNmRPdHJhMTRQNW9kL1U2bmJ0VnZFRzg0SjZLdmFWck5ZZ0p1OGY5TGQzZjMzTnhjcEhwN2U3dXlxenorR1l1TGkvSEJqWTBOL1FieGh2T2pwNmVuV0N3MmExQ09ueE0vTUVyWnNzazdIaXRFdVdkblovZVZ1OUx2cGFVbCs4OUJ2T0g4Mk4zZDdldnJpOXcyTWQ1WHIxNXQ1V0ZhYVlWYWxEdnRMVC80QmRIc2hZV0Z4NDhmbTc5QnZPRThpTmIyOXZZT0RBdzBKZDdwWkt0RFEwT3RlYzQ3emR4UjdoaXNqeXAzRWw4Vy9aNmNuTlJ2RUc4NEQ2SjVvNk9qVGNsdHpQSHhPQ0RpM1pweVI0YlQ4OXkxeTEzcDkrTGlZdHAvN3ZneEVHL0k5K1FkaG9lSEJ3Y0hHenhtTEFWN1ltTGk4dVhMV1ora0paVjdkbmIyOGVQSG01dWJKNHh4cGQvbWJ4QnZ5TEdvWUlTMnA2Zm45dTNia2NCU3FWVDNqNHJ2alFjQjQrUGpXWS9kNlV3czA5UFRKNXk1cTZYMWE1T1RrNDRmQS9HR2ZJdnVqb3lNM0xsekp3M2k5ZjJFM3Q3ZUgzNzRJYWJiVE1mdXlzeGRPWjc3dEQ4aEhmOGQzeDc5dHY4Y3hCdnlPbnluYzZMRjhCMzkzdDdlUG0xOUk2TFI3SWNQSDE2N2RxMlIyZjJFNVU3blVEdDRWTmlwK3IyNHVHajlPWWczNUZ1YXVXTjB2bmZ2WGx6YzJkazU0WGRGdWE5ZXZmcnJyNzhPRHc5SFVEUDlSMVptN2tiS1hUMS9SNzhkL3czaURUbWV2MlBnanJuNTd0Mjd2L3p5Uzh6UTBlKzRlT2hlOVBoZ2ZIRjhRYnh6NjlhdDMzNzdiWEJ3TU90eXAzT29SVzdyMjF0KzFQeWQxcS9aZnc2dDVQRXlOSG4ramdhUGpJeEVqS2VtcHFhbnB6OTkrcFFpWGFsNFljL2x5NWVIaG9adTNMaHgvZnIxOUYydEtYZmpNL2ZCZms5T1R2Nzg4OC94ZjNUQy9RMkFlTU5aN0hleFdMeDU4K2I0K1BqYTJ0cnE2dXI2K25wNjVkQUlaMDlQVDE5ZjM4REFRTlF1S243VWRON0VYUUp4cGMyZHVmYzlMRWp6OThPSEQrUC9LTlBuN0FIeGhnenQ3b2x3WHQxVC9jcGo2ZVZNMHA3ejFoelBYZjFhWVJtTjlhbmZQLzMwVTI5dnIva2JzdVk1YjhoMkNpL3RTYzkvVjlSNE9yenBNL2YwOUhTbTVmNHlCL3o3K2lXcnE2dldyNEY0dy9rSmVkMUhnZGM5Y3pkeVBIZDkvWDd5NU1ubno1LzFHOFFicUNlbDZSeHF6VjJoZHV5VnJxeXN4UHl0M3lEZXdPbG03dlQ2M0UwNW52dTA0dW9jL3czaURaeDYvTTNpcUxCVC9RTWMvdzNpRFJkbFltNzhoMlIwUEhjZC80eDAvTGZ6cDRKNHc3bk5kckZZYkhBdFc5cGJIdVdPa2JjMUs5Uk8wbSt2SHdyaURlZXozQ0VLbDk2cCs0ZWs0N25iUG5QdjYvZlMwdElmZi94aC9ScUlONXlyY3FlbnFILy8vZmRJYjMzUmJlWHgzS2VWamgrTGh4UmVQeFRFRzg1UHVkUHB6MVpYVjErOGVCRUJqbytjYXY1dXpUblVHcCsvclQ4SDhZWnpVdTZvZGRyUkhZWGIyZG1KQU1kSElzQW43SGVhdWFlbXB0cHlWTmlwNXU5MC9IZk0zL29ONGczNW5ybWozTkhzRk4xaXNSanZQM3YyTEQ1K3d2azd2ZUpJZkV2bGg1eFo2Zmp2ZFA2MStEOTFHd0R4aHB4SjVZNlNsVXFsNnVqRyt6RkF4OGRQMHU5MEpwWTB1T2NpaC9GL3RMQ3c4UExseS9UU0xHNEdJTjZRczVuN3FCM2Q4WkVZb3lQSjZmbnZHdVdPbWJ2Rlp6OXR5dndkLytDV25lQWR4QnRvVHIyT2ZiR1F5dndkWHhtUjNqZWtWaC9QbmE5eWY3blRzYzhjeEJ2eU5YT25jbTl1YnRhT2JueGxtcitucHFhcTk1K2Z6ZU81Z1JhejdCTmFWKzdLQVYwbldYR2Q1dS9uejUvSCsyTmpZNlZTcVRLNDUyNXZPU0Rla01PL3RIOVhxSjBxdXFuZjBmdHl1VHcrUGw0c0ZqOTgrUERzMlRQbEJ2RUdNcCs1MDB0cjEzRkFWd1E3WnU2WXY5UDV6NVViRUc5b1Via2ZQMzY4NzZpd1UvVTdIZjhkNzUvOTQ3a0I4WWJjbHpzOXoxMTN1YXZuN3c1THRRSHhoa3pMWFRrcXJDazd1cDNWQkJCdmFGRzV6K2FMaFFDNVpoY2NaRmp1WTQvbkJoQnZhSCs1cTgvRTRoVzBnQ3k0WjRIbVNDKzJrZGFXcCtlNWxSc1FiOGpCekYzMzhkd0E0ZzJ0bnJtN3U3cy9mUGh3OEZVK0Fack9jOTdRaEhKWDlwWXJOeURlY05hbHM1YW04NWJiV3c2SU4rVGhUNmhZWEZoWWlKbGJ1UUh4aHR4TTNzdkx5NXVibTA1Y0NvZzM1S1BjNlRsdjV5NEZ4QnZ5MUc4YkFSQnZBRUM4SVRQbGN0bEdBTVFiOHNSdWMwQzhBUUR4QmdEeEJnREVHd0FRYndBUWIrQWdoNG9CcmVmMXZLRWhoVUtoVkNwdGIyL3Y3dTdhR3NlS2JiV3pzMk03Z0hoRE8wV3pyMTI3OXYzMzMzdGhraE51cm9HQkFkc0J4QnZhcHJ4blpHUmtmSHpjMWpoNXYyUDQ5blFEaURlMFRYcGhzYTJ0cmZTT0RRSzBnQjE5QUNEZUFJQjRBd0RpRFp3NVhxSU54QnVhSmgzRExTMVpzK0lQVHNocWMvaHY3S3R4clBiUzB0TEV4RVIzZDNjbE0ybDVlU3A2NWFMTldMZk96czdsNWVYdDdlMkRENUppdzhabkhVa1A0ZzM3OHhETjZPM3RYVjFkUGJRcjc5NjlpeThZSFIzZFYrdEtzOFc3d1VkT0t5c3JyMSsvN2poaUQwZjNIbHNZeEJ1K0VvUGR3TURBN096c29XbUpiTHg1OCtidDI3YzJWSGFQbjRwN0RuNXFkM2YzOGg3bm9BWHhocS9LRVcrdlg3OGVlYTdzRE4vWDc2NnVMcE5mcHNOM2pjOE9EdzkzZG5ZNkx6cUlOM3lsVkNvTkRnNE9EUTNOejg5SHArc0lERm1JYWJ1M3QzZDBkTlRZRFJVV2dNQi93M2MwKzd2dnZqTmhuNmxmU3BpWW1PanY3eGR2RUc4NGZQZ2VIaDZPZmtjbjlQc3MyTm5aR1JrWnVYWHJsbDhIaURjY09lZkYyOXUzYjkrNGNTTkNMaGh0TC9mUTBOQzllL2N1WGJwazdJWnFudk9HL3hRS2hZaEVzVmlNWUhSMWRiMTU4K2FmUDVJdWZ5YXRWdG96TmpaMi8vNzl5NWN2eC91MkNYeDFaN1c0dUhqVUdwd2FZNGRsTzV6ditUc2RzelF6TS9QcTFhdVZsWlgwRVRmN0ZtejVlUENVRHJqLzdydnZidDY4R1pzOXltM0xnM2puKzY3dHFMTjZWWjh3cFBabmExeDBGZnMrR3pQMzl2YjJ3c0xDM056YzJ0cmE1dWFtbmJlWjd2Ym83dTd1Nit1N2Z2MzZ0OTkrRy8yT2JOdmdGL2JHWUNQVVpuOGdIUGxRS2NvZGs5L282T2pZMkZpODd5RGpyTVhXam42bmFUczJ1QTBDNGczMVBQemYzWk5PZTM3cDBpVURRYWJTMXZZTU40ZzNOQ0hoNldqajFQSmo5OHdEWk0yaFlnQWczZ0NBZUFNQTRnMEE0ZzBBaURjQUlONEFJTjRBZ0hnREFPSU5BT0lOQUlnM0FDRGVBQ0RlQUlCNEF3RGlEUURpRFFDSU53QWczZ0FnM2dDQWVBTUE0ZzBBNGcwQWlEY0FJTjRBSU40QWdIZ0RBT0lOQU9JTkFJZzNBQ0RlQUlCNEE0QjRBd0RpRFFDSU53Q0lOd0FnM2dDQWVBUEFlZEVWLzVYTDVVS2hjUEJ6aDM2d292SmQ2WjE0bTc3bHFJdTFmeG9BN09zTFJ5a3NMaTRlMitsRHQydzlWK2FYMGNCTjJVWUFMa3FaeENLamVKdTgyL2hvOU5ndGY2cmZTL1ZGVjlIZ1ZiaUpBaTJLOTlMU1VoMzNPeVp2a3plQTRidGRpcXFRbDl0eHVpbFgzbFpmclA3NHNaK3RjZEZWTk9VcUFES1BndDNtSm04QWszZk90by9kNXVJTm9OejVVbXdrdzZmYTYraVgwZUJOMlQ1dFYrRXFYTVZGdUlxMHM1YmE3RFkzZVFNWXZ2TTJlZGUzZ1ZKTFV2K3IwMUxqb3Z5WXZDMVlBMmhPRkV6ZUptOEFrL2VGaUxjRmErSU5vTnh0MjBUMXJUWTNlYmNyNFU1LzVneHJBSGFibTd3QkROODVVK2RMZ2xxdzF2cmJzZFZrRnF3Qk5CUnZ4M2tEUU5zbU9tZFl5d1g3TFlBTFZDYXhPSGJ5bHVHODNKVHQwM1lWcnNKVk9NTWF6ckJtOGdZd2ZPZHorOWh0THQ0QTRwMHZYcGdrTjdkak85YXNOZ2Y0Y25ma0RHc21id0JqZDg0MlVTTm5XUFA3YUgzQ25mN01HZFlBTEZnemVRTVl2aTlHdk8wMkYyOEE4VFo1YzlKdGJwKzIzZWJBUlkrM1E4Vk0zZ0RHN2dzMGVmdDltTHhkaGNrYnlGbTg3VFkzZVFNWXZ0dXdmZXcyRjI4QTVUWjVtN3d6VExoOTJuYWJBemhVek9RTllQTE8yeVp5aGpXVHQ4bmI1QTFjaU1tN3cyNXpremVBNFR0ZjhiYmJYTHdCbE52a3pVbTN1WDNhZHBzRDRpM2VKbThBdzNlZUZCdHBTWGxQZFZwcVhKU2ZCbS9INmFaY2VWdDlzZnJqeDM2MnhrVlgwWlNyQURCNVkvSUdUTjU4dlgyY1lVMjhBWlRiNUczeXpqRGhWcE5ac0FZZzNpWnZBTU4zemhUcjIwQVdyTFgrZG13MW1RVnJBQ1p2a3plQXlmc2l4ZHVDTmZFR1VPNjJiYUpHWHBqRTVOMzZoRnROWnNFYWdOM21KbThBdzNmT09NTmFibTdIVnBOWnNBYlFVTHpydU85ejF3WUF6Wm5vbkdFdEYreTNBQzVRbWNUaTJFM1V5SFBlZmgrdFQ3alZaQmFzQVZpd1p2SUdNSHpuYmZ2WWJTN2VBT0tkTDhWR01tekJXaXR2eDVhQ1cyME84T1h1eUJuV1RONEF4dTZjYmFKR3pyRG05OUg2aEZ0TlpzRWFnQVZySm04QXcvZkZpTGZkNXVJTm9Od21iMDY2emUzVHR0c2N1T2p4ZHFpWXlSdkE4SjB2UlZYSXkrM1ljVndPRlFQNGNuZGt0N25KRzhEa25iUHRZN2U1ZUFNb3Q4bmI1SjFod3EwbXMyQU53S0ZpSm04QXczZk9GRzJndk55T3JTYXpZQTJnb2NtN3cyNXpremVBeVR0ZjhiYmJYTHdCbE52a3pVbTN1ZFZrRnF3QjRpM2VKbThBdzNlZUZCdHBTWGxQZFZwcVhKU2ZCbS9IVnBOWnNBWmc4alo1QTVpODg3bDluR0ZOdkFHVTIrUnQ4czR3NFZhVFdiQUdJTjRtYndERGQ4N1VlWVkxQzlaYWZ6dTJtc3lDTllBdjhXN2syZXRUM2ZlNWE4UGVFWURtVEhUT3NDWU1BR2VyVEdKeDdDYXFiN1Y1aCtlODI1UndxOGtzV0FPd1lNM2tEV0Q0dmhqeHR0dGN2QUhFdTEyS2pXeFdDOVphZVR1MkZOeHFjNEF2ZDBmT3NHYnlCakIyNTJ3VE5mS2N0OTlINnhOdU5aa0Zhd0FXckptOEFRemZlZHMrZHB1TE40Qnk1NHN6ck9YbXBtdzFtUVZyWUZ6aHk5MlJROFhjbEFGTTNqbWJ2T3ZiUnJhc3lkdFZ1QXBYNFNxeXVJcTBUSXJhL2kvQUFPN2MrVDh5dVl2TkFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7c2VydmljZXN9IGZyb20gJ1NlcnZpY2VzL3NlcnZpY2VzJztcclxuaW1wb3J0IENvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHNlcnZpY2VzLmdldCh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIEFQSV9IT1NUOiBDb25zdGFudC5BUElfSE9TVCArICdwb3N0L2NhdGVnb3J5J30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdChwYXJhbXMpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlcy5nZXRMaXN0KHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgQVBJX0hPU1Q6IENvbnN0YW50LkFQSV9IT1NUICsgJ3Bvc3QvY2F0ZWdvcnknfSk7XHJcbn0iLCJpbXBvcnQge3NlcnZpY2VzfSBmcm9tICdTZXJ2aWNlcy9zZXJ2aWNlcyc7XHJcbmltcG9ydCBDb25zdGFudCBmcm9tICdDb25maWcvY29uc3RhbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChwYXJhbXMpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlcy5nZXQoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBBUElfSE9TVDogQ29uc3RhbnQuQVBJX0hPU1QgKyAncG9zdC9ob21lJ30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdChwYXJhbXMpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlcy5nZXRMaXN0KHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgQVBJX0hPU1Q6IENvbnN0YW50LkFQSV9IT1NUICsgJ3Bvc3QvaG9tZSd9KTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgLy9jb25zb2xlLmxvZygnY29uZmlnJywgY29uZmlnKVxyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0ge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuQVBJX0hPU1QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJhbXMuaWQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFQSV9IT1NUID0gcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX0hPU1QgKyAnLycgKyBwYXJhbXMuaWQsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0TGlzdDogZnVuY3Rpb24gZ2V0TGlzdChwYXJhbXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5BUElfSE9TVCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgQVBJX0hPU1QgPSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfSE9TVCwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdChBUElfSE9TVCwgcGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyYW1zLmlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KEFQSV9IT1NUICsgJy8nICsgcGFyYW1zLmlkLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVsOiBmdW5jdGlvbiBkZWwocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuQVBJX0hPU1QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJhbXMuaWQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFQSV9IT1NUID0gcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5kZWxldGUoQVBJX0hPU1QgKyAnLycgKyBwYXJhbXMuaWQsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgQ29uc3RhbnQgZnJvbSAnQ29uZmlnL2NvbnN0YW50JztcclxuXHJcbmNvbnN0IHRpdGxlID0gJ03hurlvIFbhurd0IEhheSAtIEPDoWMgbeG6uW8gduG6t3QgaGF5IHRyb25nIGN14buZYyBz4buRbmcgLSBtZW92YXRoYXkudm4nO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9ICdN4bq5byB24bq3dCwgxJHhu41jIGLDoW8sIGNoaWEgc+G6uyBt4bq5byB24bq3dCBoYXkuIE3hurlvIHbhurd0IGN14buZYyBz4buRbmcsIG3hurlvIHbhurd0IGzDoG0gxJHhurlwLCBt4bq5byB24bq3dCBow6BuZyBuZ8OgeSwgdmlkZW8gbeG6uW8gduG6t3QuJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgcHJvZmlsZVVzZXI6IG51bGwsXHJcbiAgICBoZWFkZXJNZW51OiBbXSxcclxuICAgIGRvY3VtZW50OiB7XHJcbiAgICAgICAgZGVmYXVsdFRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZWZhdWx0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBvZzoge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXdvcmRzOiBbXVxyXG4gICAgfSxcclxuICAgIGFydGljbGVTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL3NjaGVtYS5vcmcnLFxyXG4gICAgICAgICdAdHlwZSc6ICdOZXdzQXJ0aWNsZScsXHJcbiAgICAgICAgJ21haW5FbnRpdHlPZlBhZ2UnOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdXZWJQYWdlJyxcclxuICAgICAgICAgICAgJ0BpZCc6ICdodHRwczovL3ZuZXhwcmVzcy5uZXQvdHJ1bXAtZHUta2llbi1yb2ktd2FzaGluZ3Rvbi10cnVvYy1raGktYmlkZW4tbmhhbS1jaHVjLTQyMjE4NjYuaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgICdoZWFkbGluZSc6ICcnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcnLFxyXG4gICAgICAgICdpbWFnZSc6IHtcclxuICAgICAgICAgICAgJ0B0eXBlJzogJ0ltYWdlT2JqZWN0JyxcclxuICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL3ZjZG4xLXZuZXhwcmVzcy52bmVjZG4ubmV0LzIwMjEvMDEvMTYvODYwMjYtMS0xNjEwNzU2ODk1LTE2MTA3NTY5MTYtNzI2OS0xNjEwNzU3MTU5LmpwZz93PTkwMCZoPTU0MCZxPTEwMCZkcHI9MSZmaXQ9Y3JvcCZzPUp4RWhXSmRCcGJTZDVfTEpZdGgzMHcnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiA1MDAsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgICdkYXRlUHVibGlzaGVkJzogJzIwMjEtMDEtMTZUMDc6MzM6MTArMDc6MDAnLFxyXG4gICAgICAgICdkYXRlTW9kaWZpZWQnOiAnMjAyMS0wMS0xNlQwNzozNDoxMSswNzowMCcsXHJcbiAgICAgICAgJ2F1dGhvcic6IHtcclxuICAgICAgICAgICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXHJcbiAgICAgICAgICAgICduYW1lJzogJ1ZuRXhwcmVzcydcclxuICAgICAgICB9LFxyXG4gICAgICAgICdwdWJsaXNoZXInOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxyXG4gICAgICAgICAgICAnbmFtZSc6ICdWbkV4cHJlc3MnLFxyXG4gICAgICAgICAgICAnbG9nbyc6IHtcclxuICAgICAgICAgICAgICAgICdAdHlwZSc6ICdJbWFnZU9iamVjdCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vczFjZG4udm5lY2RuLm5ldC92bmV4cHJlc3MvcmVzdHJ1Y3QvaS92MzcxL2xvZ29zL3ZuZXhwcmVzc181MDB4MTEwLnBuZycsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogMTEyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdhYm91dCc6IFtcclxuICAgICAgICAgICAgJ0Lhuqd1IGPhu60gVOG7lW5nIHRo4buRbmcgTeG7uScsXHJcbiAgICAgICAgICAgICdEb25hbGQgVHJ1bXAnLFxyXG4gICAgICAgICAgICAnQuG6p3UgY+G7rSBU4buVbmcgdGjhu5FuZyBN4bu5JyxcclxuICAgICAgICAgICAgJ1RpbicsXHJcbiAgICAgICAgICAgICdUaW4gbsOzbmcnXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIGJyZWFkY3J1bWJTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL3NjaGVtYS5vcmcnLFxyXG4gICAgICAgICdAdHlwZSc6ICdCcmVhZGNydW1iTGlzdCcsXHJcbiAgICAgICAgJ2l0ZW1MaXN0RWxlbWVudCc6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IDEsXHJcbiAgICAgICAgICAgICAgICAnaXRlbSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQGlkJzogQ29uc3RhbnQuU0lURV9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnVGluIHThu6ljJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gQWN0aW9uIHR5cGVcclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgU0VUX0hFQURFUl9NRU5VOiAnU0VUX0hFQURFUl9NRU5VJyxcclxuICAgIFVQREFURV9ET0NVTUVOVDogJ1VQREFURV9ET0NVTUVOVCcsXHJcbiAgICBVUERBVEVfQVJUSUNMRV9TVFJVQ1RVUkU6ICdVUERBVEVfQVJUSUNMRV9TVFJVQ1RVUkUnLFxyXG4gICAgVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFOiAnVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFJyxcclxuICAgIFNFVF9UT0tFTjogJ1NFVF9UT0tFTicsXHJcbiAgICBTRVRfUFJPRklMRV9VU0VSOiAnU0VUX1BST0ZJTEVfVVNFUidcclxufTtcclxuXHJcbi8vIEFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1RPS0VOLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvZmlsZVVzZXIgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfUFJPRklMRV9VU0VSLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SGVhZGVyTWVudSA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9IRUFERVJfTUVOVSxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0RPQ1VNRU5ULFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQXJ0aWNsZVN0cnVjdHVyZSA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9BUlRJQ0xFX1NUUlVDVFVSRSxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJyZWFkY3J1bWJTdHJ1Y3R1cmUgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQlJFQURDUlVNQl9TVFJVQ1RVUkUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9UT0tFTjpcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9QUk9GSUxFX1VTRVI6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfSEVBREVSX01FTlU6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWVudTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9ET0NVTUVOVDpcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQVJUSUNMRV9TVFJVQ1RVUkU6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZVN0cnVjdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlU3RydWN0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRTpcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLml0ZW1MaXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYlN0cnVjdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5icmVhZGNydW1iU3RydWN0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdEVsZW1lbnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLml0ZW1MaXN0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmUgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSgpXHJcbiAgICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGF6eXNpemVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxhenlzaXplcy9wbHVnaW5zL3BhcmVudC1maXQvbHMucGFyZW50LWZpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==