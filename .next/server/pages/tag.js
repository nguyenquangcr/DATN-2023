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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tag.jsx");
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

/***/ "./components/PageNotFound/index.jsx":
/*!*******************************************!*\
  !*** ./components/PageNotFound/index.jsx ***!
  \*******************************************/
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
/* harmony import */ var Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Static/images/error-404.jpg */ "./public/images/error-404.jpg");
/* harmony import */ var Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/PageNotFound/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\meovathay\\application\\components\\PageNotFound\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Assets




function PageNotFound(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['post-not-found'], props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: "Page not found",
    src: Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Xin l\u1ED7i b\u1EA1n, ch\xFAng t\xF4i kh\xF4ng t\xECm th\u1EA5y b\xE0i vi\u1EBFt n\xE0y."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "M\u1EDDi b\u1EA1n quay v\u1EC1 trang ch\u1EE7 \u0111\u1EC3 xem nh\u1EEFng tin t\u1EE9c m\u1EDBi nh\u1EA5t."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['go-back-to-home']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Tr\u1EDF v\u1EC1 trang ch\u1EE7")));
}

const defaultProps = {
  className: ''
};
PageNotFound.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./components/PageNotFound/styles.module.scss":
/*!****************************************************!*\
  !*** ./components/PageNotFound/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"post-not-found": "post-not-found___3Wa5q",
	"go-back-to-home": "go-back-to-home___2g9C3"
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

/***/ "./components/SidebarNewsWidget/index.jsx":
/*!************************************************!*\
  !*** ./components/SidebarNewsWidget/index.jsx ***!
  \************************************************/
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
/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar.module.scss */ "./components/SidebarNewsWidget/sidebar.module.scss");
/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");

var _jsxFileName = "E:\\meovathay\\application\\components\\SidebarNewsWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // Components

 // Assets




function SidebarNewsWidget(props) {
  let posts = props.posts || [];

  if (posts.length) {
    posts = posts.map(post => {
      // Images
      post.background = Object(Libs_utils__WEBPACK_IMPORTED_MODULE_6__["getPostImage"])(post, props.background);
      return post;
    });
  }

  return __jsx("div", {
    style: _objectSpread({}, props.style),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar-widget-news'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar'], 'mb-20', props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar-header'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("span", {
    title: props.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, props.title))), __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['sidebar-contain'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, !props.skeletonLoading && posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Array.isArray(posts) && posts.map(post => __jsx("li", {
    key: post.pid,
    className: 'clearfix',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['content'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/post?slug=' + post.slug + '&pid=' + post.pid,
    as: '/' + post.slug + '-p' + post.pid + '.html',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 49
    }
  }, __jsx("a", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['thumb'],
    title: post.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 53
    }
  }, __jsx(Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    alt: post.title,
    thumb: post.thumb,
    src: post.background,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 57
    }
  }))), __jsx("h3", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 49
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/post?slug=' + post.slug + '&pid=' + post.pid,
    as: '/' + post.slug + '-p' + post.pid + '.html',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 53
    }
  }, __jsx("a", {
    title: post.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 57
    }
  }, post.title))))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 45
    }
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  })))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['progress-loading'], 'clearfix'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['background'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['article-right']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['title'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['description'], _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['animated-load']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }))))))));
}

const defaultProps = {
  skeletonLoading: false,
  className: '',
  title: 'TIN MỚI NHẤT',
  background: 'large',
  // large, normal, medium, small
  style: {
    position: 'relative',
    top: 0
  },
  posts: [{
    pid: 1,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
  }, {
    pid: 2,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
  }, {
    pid: 3,
    title: 'Có 1 mỹ nhân Thái selfie với cả quân đoàn sao thế giới, ai dè "chặt chém" từ hội Kendall đến dàn nữ thần Hoa, Hàn, Việt',
    description: 'Rau củ quả là những thành phần không thể thiếu trong thực đơn giảm cân, nhưng nếu không biết làm món salad tốt cho sức khỏe thì bạn sẽ rất nhanh chán đấy.',
    background: 'https://kenh14cdn.com/zoom/340_213/2020/photo1585573711344-1585573711762-crop-1585573855759808615562.jpg',
    href: 'http://sandbox.tuoitreplus.com/nhung-thuong-vu-ca-lon-nuot-ca-be-de-mo-rong-thi-phan-p256.html'
  }]
};
SidebarNewsWidget.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (SidebarNewsWidget);

/***/ }),

/***/ "./components/SidebarNewsWidget/sidebar.module.scss":
/*!**********************************************************!*\
  !*** ./components/SidebarNewsWidget/sidebar.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sidebar-widget-news": "sidebar-widget-news___1ICm0",
	"sidebar-header": "sidebar-header___1Ct7k",
	"sidebar-contain": "sidebar-contain___YHIur",
	"content": "content___3JLDm",
	"thumb": "thumb___NfIRb",
	"progress-loading": "progress-loading___3f9uk",
	"article": "article___1jneq",
	"background": "background___11Fw8",
	"article-right": "article-right___69Ac9",
	"title": "title___CiEZb",
	"description": "description___203iU",
	"animated-load": "animated-load___hRmnv",
	"placeHolderShimmer": "placeHolderShimmer___14Kwg"
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

/***/ "./modules/Pages/Tag/styles.module.scss":
/*!**********************************************!*\
  !*** ./modules/Pages/Tag/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___2sGkE",
	"sub-navbar": "sub-navbar___1nrKc",
	"sub-navbar-keywords": "sub-navbar-keywords___2_RS4",
	"container-body": "container-body___OzSKk",
	"container-left": "container-left___14rcW",
	"post-title": "post-title___29KG8"
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

/***/ "./pages/tag.jsx":
/*!***********************!*\
  !*** ./pages/tag.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/HorizontalWidget */ "./components/HorizontalWidget/index.jsx");
/* harmony import */ var Components_SidebarNewsWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/SidebarNewsWidget */ "./components/SidebarNewsWidget/index.jsx");
/* harmony import */ var Components_PageNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/PageNotFound */ "./components/PageNotFound/index.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var Services_Post_Tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Services/Post/Tags */ "./services/Post/Tags.js");
/* harmony import */ var Services_Post_Category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Services/Post/Category */ "./services/Post/Category.js");
/* harmony import */ var Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Modules/Pages/Tag/styles.module.scss */ "./modules/Pages/Tag/styles.module.scss");
/* harmony import */ var Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");


var _jsxFileName = "E:\\meovathay\\application\\pages\\tag.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // Components



 // Actions

 // Services


 // Assets

 // Utils



const PATH = 'application/pages/tag.jsx';
const POST_PER_PAGE = 20;

class Tags extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static getInitialProps({
    reduxStore,
    req,
    query
  }) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function* () {
      try {
        let states = reduxStore.getState();
        let slug = '';
        let tag = {};
        let similarTags = [];
        let posts = [];
        let latestPosts = [];

        if (query && query.slug) {
          slug = query.slug;
          let postService = Services_Post_Tags__WEBPACK_IMPORTED_MODULE_9__["getList"]({
            slug: query.slug,
            limit: POST_PER_PAGE,
            page: 1
          });

          if (postService) {
            yield postService.then(response => {
              if (response && response.data && response.data.data && response.data.data.posts) {
                if (response.data.data.tags && response.data.data.tags.length) {
                  tag = response.data.data.tags[0];
                  posts = response.data.data.posts;
                  let title = tag.name + ' - ' + states.document.defaultTitle;
                  let images = [];

                  if (posts.length) {
                    let arrTagsSlug = [];
                    posts.map(post => {
                      if (post.background) {
                        images.push(post.background);
                      } else if (post.images && post.images.normal) {
                        images.push(post.images.normal);
                      } // similarTags


                      if (post.tags && post.tags.length) {
                        post.tags.map(tagItem => {
                          if (tagItem.slug && arrTagsSlug.indexOf(tagItem.slug) < 0) {
                            arrTagsSlug.push(tagItem.slug);
                            similarTags.push(_objectSpread({}, tagItem));
                          }
                        });
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
                  }

                  if (tag.name) {
                    const url = Config_constant__WEBPACK_IMPORTED_MODULE_12__["default"].SITE_URL + slug + '.html';
                    const mobileUrl = Config_constant__WEBPACK_IMPORTED_MODULE_12__["default"].MOBILE_SITE_URL + slug + '.html';
                    let og = {
                      description: title,
                      images: images,
                      url: url
                    }; // Update document metadata

                    reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["updateDocument"])({
                      canonical: url,
                      alternate: mobileUrl,
                      title: tag.name + ' - ' + states.document.defaultTitle,
                      og: _objectSpread(_objectSpread({}, og), {}, {
                        title: title
                      })
                    })); // Update Breadcrumb structured data

                    const breadcrumbItems = [{
                      '@type': 'ListItem',
                      'position': 1,
                      'item': {
                        '@id': Config_constant__WEBPACK_IMPORTED_MODULE_12__["default"].SITE_URL,
                        'name': 'Tin tức'
                      }
                    }, {
                      '@type': 'ListItem',
                      'position': 2,
                      'item': {
                        '@id': Config_constant__WEBPACK_IMPORTED_MODULE_12__["default"].SITE_URL + slug + '.html',
                        'name': tag.name
                      }
                    }];
                    reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["updateBreadcrumbStructure"])({
                      itemListElement: breadcrumbItems
                    }));
                  }
                }
              }
            });
          } // latest posts


          let getLatestPosts = Services_Post_Category__WEBPACK_IMPORTED_MODULE_10__["getList"]({
            type: 'latest',
            page: 1
          });

          if (getLatestPosts) {
            yield getLatestPosts.then(response => {
              if (response && response.data && response.data.data && response.data.data.posts) {
                latestPosts = response.data.data.posts;
              }
            });
          }
        }

        return {
          slug,
          tag,
          similarTags,
          posts,
          latestPosts
        };
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error, {
          actionName: 'getInitialProps',
          path: PATH,
          args: {}
        });
      }
    })();
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  render() {
    const tagName = this.props.tag && this.props.tag.name ? this.props.tag.name : '';

    try {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }
      }, __jsx("div", {
        ref: this.myRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container', Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['container']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['sub-navbar']),
        style: {
          height: 50
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('clearfix w1040', Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['w1040']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 29
        }
      }, this.props.similarTags.length ? __jsx("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['sub-navbar-keywords']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 41
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 45
        }
      }, __jsx("i", {
        className: "icon icon-arrow-graph-up-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 49
        }
      })), this.props.similarTags.map((tag, key) => {
        if (key < 5 && tag.slug && tag.name) {
          return __jsx("li", {
            key: tag.id,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 61
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/tag?slug=' + tag.slug,
            as: '/' + tag.slug + '.html',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 65
            }
          }, __jsx("a", {
            title: 'Từ khóa: ' + tag.name,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 69
            }
          }, tag.name)));
        }
      })) : null)), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-body clearfix w1040', Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['container-body']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('clearfix w1040'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-left fl w720', Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['container-left']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 33
        }
      }, tagName ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
        className: "clearfix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 49
        }
      }, __jsx("h2", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mt-20', Modules_Pages_Tag_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a['post-title']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 53
        }
      }, tagName || 'Từ khóa không tồn tại')), __jsx("div", {
        className: "top-news",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 49
        }
      }, __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        skeletonLoading: !this.props.posts.length,
        number: 100,
        isShowCategory: true,
        background: 'normal',
        posts: this.props.posts,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 53
        }
      }))) : __jsx(Components_PageNotFound__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 45
        }
      })), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container-right col-sticky fr mt-20 w300'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }, __jsx(Components_SidebarNewsWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-sticky",
        skeletonLoading: !this.props.latestPosts.length,
        title: "Tin t\u1EE9c m\u1EDBi nh\u1EA5t",
        background: 'medium',
        posts: this.props.latestPosts,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 37
        }
      }))))));
    } catch (error) {
      Object(Libs_utils__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error, {
        actionName: 'render',
        path: PATH,
        args: {}
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./public/images/error-404.jpg":
/*!*************************************!*\
  !*** ./public/images/error-404.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/error-404-27633ca9d1959ec46f12601196dd27d4.jpg";

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

/***/ "./services/Post/Tags.js":
/*!*******************************!*\
  !*** ./services/Post/Tags.js ***!
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
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/tags'
  }));
}
function getList(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].getList(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/tags'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvcml6b250YWxXaWRnZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFdpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyTmV3c1dpZGdldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyTmV3c1dpZGdldC9zaWRlYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbmZpZy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL2xpYnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9QYWdlcy9UYWcvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGFnLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2Vycm9yLTQwNC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9uby1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUG9zdC9DYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9Qb3N0L1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGF6eXNpemVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGF6eXNpemVzL3BsdWdpbnMvcGFyZW50LWZpdC9scy5wYXJlbnQtZml0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFdpZGdldCIsInByb3BzIiwicG9zdHMiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwidGltZSIsImZvcm1hdFRpbWUiLCJzdHJpbmciLCJyZWNlbnQiLCJiYWNrZ3JvdW5kIiwiZ2V0UG9zdEltYWdlIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImlzU21hbGxMYXlvdXQiLCJjbGFzc05hbWUiLCJza2VsZXRvbkxvYWRpbmciLCJrZXkiLCJudW1iZXIiLCJpc1Jvd1JldmVyc2UiLCJwaWQiLCJzbHVnIiwidGl0bGUiLCJ0aHVtYiIsImlzU2hvd0NhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzaG9ydGVuIiwiaWQiLCJpc1Nob3dEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiQXJyYXkiLCJza2VsZXRvbk51bWJlciIsImZpbGwiLCJlcnJvciIsImRlZmF1bHRQcm9wcyIsImhyZWYiLCJQYWdlTm90Rm91bmQiLCJFcnJvckltZyIsImFsdCIsIk5vSW1hZ2UiLCJzcmMiLCJzY2FsZU9uSG92ZXIiLCJQcm9ncmVzc2l2ZU1lZGlhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm15UmVmIiwiY3JlYXRlUmVmIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXIiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NuYW1lcyIsIlNpZGViYXJOZXdzV2lkZ2V0Iiwic3R5bGUiLCJpc0FycmF5IiwicG9zaXRpb24iLCJ0b3AiLCJlbnYiLCJwcm9jZXNzIiwiQXBwIiwiZGV2ZWxvcG1lbnQiLCJTSVRFX1VSTCIsIk1PQklMRV9TSVRFX1VSTCIsIkFQSV9IT1NUIiwic2FuZGJveCIsInByb2R1Y3Rpb24iLCJDb25zdGFudCIsIlNUQVRJQ19WRVJTSU9OIiwiS0VZQ09ERSIsIkVOVEVSIiwiU0VBUkNIX1RPX1FVRVJZIiwiUVVFUllfVE9fU0VBUkNIIiwiZm9ybWF0Iiwic2Vjb25kcyIsIm1vbWVudCIsImRpZmYiLCJkdXJhdGlvbiIsInR5cGUiLCJtaW51dGVzIiwiTWF0aCIsInJvdW5kIiwiaG91cnMiLCJxdW90ZURvdWJsZVRvU2luZ2xlIiwibWVzc2FnZSIsInJlcGxhY2UiLCJoYW5kbGVFcnJvciIsInBheWxvYWQiLCJjb25zb2xlIiwiZSIsIm1hcFNlYXJjaEFuZFBhcmFtIiwidmFsdWUiLCJkaXJlY3Rpb24iLCJjb25zdGFudCIsImdldE9iamVjdFByb3BTYWZlbHkiLCJmbiIsImRlZmF1bHRWYWx1ZSIsImltYWdlcyIsImd0YWdJbmplY3QiLCJnYUlkIiwiZ2FTY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnb29nbGVBbmFseXRpY3NTb3VyY2UiLCJzMCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXN5bmMiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwid2luZG93IiwiZGF0YUxheWVyIiwiZ3RhZ1RyYWNraW5nRXZlbnQiLCJEYXRlIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiYXJncyIsInRyYWNraW5nIiwicHVzaCIsImFyZ3VtZW50cyIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQQVRIIiwiUE9TVF9QRVJfUEFHRSIsIlRhZ3MiLCJyZWR1eFN0b3JlIiwicmVxIiwic3RhdGVzIiwiZ2V0U3RhdGUiLCJ0YWciLCJzaW1pbGFyVGFncyIsImxhdGVzdFBvc3RzIiwicG9zdFNlcnZpY2UiLCJQb3N0VGFnU2VydmljZSIsImxpbWl0IiwidGhlbiIsInJlc3BvbnNlIiwidGFncyIsImRlZmF1bHRUaXRsZSIsImFyclRhZ3NTbHVnIiwibm9ybWFsIiwidGFnSXRlbSIsImluZGV4T2YiLCJpbWFnZSIsIm1vYmlsZVVybCIsIm9nIiwiZGlzcGF0Y2giLCJ1cGRhdGVEb2N1bWVudCIsImNhbm9uaWNhbCIsImFsdGVybmF0ZSIsImJyZWFkY3J1bWJJdGVtcyIsInVwZGF0ZUJyZWFkY3J1bWJTdHJ1Y3R1cmUiLCJpdGVtTGlzdEVsZW1lbnQiLCJnZXRMYXRlc3RQb3N0cyIsIlBvc3RDYXRlZ29yeVNlcnZpY2UiLCJhY3Rpb25OYW1lIiwidGFnTmFtZSIsImNsYXNzbmFtZSIsInNlcnZpY2VzIiwiZ2V0TGlzdCIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImNyZWF0ZSIsInVwZGF0ZSIsInB1dCIsImRlbCIsImRlbGV0ZSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwicHJvZmlsZVVzZXIiLCJoZWFkZXJNZW51IiwiZGVmYXVsdERlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJhcnRpY2xlU3RydWN0dXJlIiwiYnJlYWRjcnVtYlN0cnVjdHVyZSIsImFjdGlvblR5cGVzIiwiU0VUX0hFQURFUl9NRU5VIiwiVVBEQVRFX0RPQ1VNRU5UIiwiVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFIiwiVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFIiwiU0VUX1RPS0VOIiwiU0VUX1BST0ZJTEVfVVNFUiIsInNldFRva2VuIiwic2V0UHJvZmlsZVVzZXIiLCJzZXRIZWFkZXJNZW51IiwidXBkYXRlQXJ0aWNsZVN0cnVjdHVyZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJhc3NpZ24iLCJpbml0aWFsaXplU3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVB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QUFDSixTQUFLOEssV0FBVyxDQUFDRyx3QkFBakI7QUFDSSxVQUFJUyxNQUFNLENBQUMvYixPQUFYLEVBQW9CO0FBQ2hCLGVBQU9rQyxNQUFNLENBQUM4WixNQUFQLENBQWMsRUFBZCxFQUFrQjNMLEtBQWxCLEVBQXlCO0FBQzVCNEssMEJBQWdCLGtDQUNUNUssS0FBSyxDQUFDNEssZ0JBREcsR0FFVGMsTUFBTSxDQUFDL2IsT0FGRTtBQURZLFNBQXpCLENBQVA7QUFNSDs7QUFDRCxhQUFPcVEsS0FBUDs7QUFDSixTQUFLOEssV0FBVyxDQUFDSSwyQkFBakI7QUFDSSxVQUFJUSxNQUFNLENBQUMvYixPQUFQLElBQWtCK2IsTUFBTSxDQUFDL2IsT0FBUCxDQUFleVosZUFBckMsRUFBc0Q7QUFDbEQsZUFBT3ZYLE1BQU0sQ0FBQzhaLE1BQVAsQ0FBYyxFQUFkLEVBQWtCM0wsS0FBbEIsRUFBeUI7QUFDNUI2Syw2QkFBbUIsa0NBQ1o3SyxLQUFLLENBQUM2SyxtQkFETTtBQUVmekIsMkJBQWUsRUFBRSxDQUNiLEdBQUdzQyxNQUFNLENBQUMvYixPQUFQLENBQWV5WixlQURMO0FBRkY7QUFEUyxTQUF6QixDQUFQO0FBUUg7O0FBQ0QsYUFBT3BKLEtBQVA7O0FBQ0o7QUFDSSxhQUFPQSxLQUFQO0FBdkRSO0FBeURILENBMURNO0FBNERBLFNBQVM0TCxlQUFULENBQTBCdEIsWUFBMUIsRUFBd0M7QUFDM0MsU0FBT3VCLHlEQUFXLENBQ2RKLE9BRGMsRUFFZG5CLFlBRmMsRUFHZHdCLDZEQUFlLEVBSEQsQ0FBbEI7QUFLSCxDOzs7Ozs7Ozs7OztBQ2pNRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy90YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3RhZy5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBQcm9ncmVzc2l2ZU1lZGlhIGZyb20gJ0NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYSc7XHJcblxyXG4vLyBVdGlsc1xyXG5pbXBvcnQge2Zvcm1hdFRpbWUsIGdldFBvc3RJbWFnZX0gZnJvbSAnTGlicy91dGlscyc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBIb3Jpem9udGFsV2lkZ2V0KHByb3BzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBwb3N0cyA9IHByb3BzLnBvc3RzIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAocG9zdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGFuZCBmb3JtYXQgdGltZVxyXG4gICAgICAgICAgICBwb3N0cyA9IHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zdC50aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0aW1lIHRvIGRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBmb3JtYXRUaW1lKHBvc3QudGltZSwgJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lICYmIHRpbWUuc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnJlY2VudCA9IHRpbWUuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICBwb3N0LmJhY2tncm91bmQgPSBnZXRQb3N0SW1hZ2UocG9zdCwgcHJvcHMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydob3Jpem9udGFsLW5ld3MnXSwgcHJvcHMuaXNTbWFsbExheW91dCAmJiBzdHlsZXNbJ2hvcml6b250YWwtc21hbGwnXSwgcHJvcHMuY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb3BzLnNrZWxldG9uTG9hZGluZyAmJiBwb3N0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSArIDEgPiBwcm9wcy5udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhwcm9wcy5pc1Jvd1JldmVyc2UgJiYgc3R5bGVzWydyb3ctcmV2ZXJzZSddLCAnY2xlYXJmaXgnKX0ga2V5PXtwb3N0LnBpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydsZWZ0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc2l2ZU1lZGlhIGFsdD17cG9zdC50aXRsZX0gdGh1bWI9e3Bvc3QudGh1bWJ9IHNyYz17cG9zdC5iYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncmlnaHQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1sndGl0bGUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Bvc3Q/c2x1Zz0nICsgcG9zdC5zbHVnICsgJyZwaWQ9JyArIHBvc3QucGlkfSBhcz17Jy8nICsgcG9zdC5zbHVnICsgJy1wJyArIHBvc3QucGlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QudGl0bGV9Pntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXNTaG93Q2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbWV0YSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jYXRlZ29yeS1ieS1pZD9zbHVnPScgKyBwb3N0LmNhdGVnb3J5LnNob3J0ZW4gKyAnJmNpZD0nICsgcG9zdC5jYXRlZ29yeS5pZH0gYXM9eycvJyArIHBvc3QuY2F0ZWdvcnkuc2hvcnRlbiArICctYycgKyBwb3N0LmNhdGVnb3J5LmlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17cG9zdC50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXNbJ21ldGEtY2F0ZWdvcnknXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnkgJiYgcG9zdC5jYXRlZ29yeS50aXRsZSA/IHBvc3QuY2F0ZWdvcnkudGl0bGUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAtIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydtZXRhLXRpbWUnXX0+e3Bvc3QucmVjZW50IHx8ICczIGdp4budIHRyxrDhu5tjJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmlzU2hvd0Rlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5KHByb3BzLnNrZWxldG9uTnVtYmVyKS5maWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsxfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydwcm9ncmVzcy1sb2FkaW5nJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlLWxlZnQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2JhY2tncm91bmQnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1yaWdodCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sndGl0bGUnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2Rlc2NyaXB0aW9uJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydjYXRlZ29yeSddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBza2VsZXRvbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2tlbGV0b25OdW1iZXI6IDEsXHJcbiAgICBudW1iZXI6IDEwLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIGlzU2hvd0NhdGVnb3J5OiB0cnVlLFxyXG4gICAgaXNTaG93RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICBpc1Jvd1JldmVyc2U6IGZhbHNlLFxyXG4gICAgaXNTbWFsbExheW91dDogZmFsc2UsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbGFyZ2UnLCAvLyBsYXJnZSwgbm9ybWFsLCBtZWRpdW0sIHNtYWxsXHJcbiAgICBwb3N0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0PDsyAxIG3hu7kgbmjDom4gVGjDoWkgc2VsZmllIHbhu5tpIGPhuqMgcXXDom4gxJFvw6BuIHNhbyB0aOG6vyBnaeG7m2ksIGFpIGTDqCBcImNo4bq3dCBjaMOpbVwiIHThu6sgaOG7mWkgS2VuZGFsbCDEkeG6v24gZMOgbiBu4buvIHRo4bqnbiBIb2EsIEjDoG4sIFZp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmF1IGPhu6cgcXXhuqMgbMOgIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBraMO0bmcgdGjhu4MgdGhp4bq/dSB0cm9uZyB0aOG7sWMgxJHGoW4gZ2nhuqNtIGPDom4sIG5oxrBuZyBu4bq/dSBraMO0bmcgYmnhur90IGzDoG0gbcOzbiBzYWxhZCB04buRdCBjaG8gc+G7qWMga2jhu49lIHRow6wgYuG6oW4gc+G6vSBy4bqldCBuaGFuaCBjaMOhbiDEkeG6pXkuJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2hhcnBlci1iZWNraGFtLW5hbS10YXktYm8tby1zYW4tYmF5LW1pYW1pJyxcclxuICAgICAgICAgICAgdGh1bWI6ICcvL2ltYWdlLnR1b2l0cmVwbHVzLmNvbS91cGxvYWQvMjAxOC8wMy8yNTB4MTU2L2FkYzlycDdmNTMuanBnJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8va2VuaDE0Y2RuLmNvbS96b29tLzM0MF8yMTMvMjAyMC9waG90bzE1ODU1NzM3MTEzNDQtMTU4NTU3MzcxMTc2Mi1jcm9wLTE1ODU1NzM4NTU3NTk4MDg2MTU1NjIuanBnJyxcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9zYW5kYm94LnR1b2l0cmVwbHVzLmNvbS9uaHVuZy10aHVvbmctdnUtY2EtbG9uLW51b3QtY2EtYmUtZGUtbW8tcm9uZy10aGktcGhhbi1wMjU2Lmh0bWwnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjAyMC0wNC0wNCAxMTowNjoxNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAxMixcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHaeG6o2kgdHLDrScsXHJcbiAgICAgICAgICAgICAgICAnc2x1Zyc6ICdnaWFpLXRyaScsXHJcbiAgICAgICAgICAgICAgICAnaHJlZic6ICdodHRwOi8vbG9jYWxob3N0OjgwMTIvZ2lhaS10cmkuaHRtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6ICdDw7MgMSBt4bu5IG5ow6JuIFRow6FpIHNlbGZpZSB24bubaSBj4bqjIHF1w6JuIMSRb8OgbiBzYW8gdGjhur8gZ2nhu5tpLCBhaSBkw6ggXCJjaOG6t3QgY2jDqW1cIiB04burIGjhu5lpIEtlbmRhbGwgxJHhur9uIGTDoG4gbuG7ryB0aOG6p24gSG9hLCBIw6BuLCBWaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JhdSBj4bunIHF14bqjIGzDoCBuaOG7r25nIHRow6BuaCBwaOG6p24ga2jDtG5nIHRo4buDIHRoaeG6v3UgdHJvbmcgdGjhu7FjIMSRxqFuIGdp4bqjbSBjw6JuLCBuaMawbmcgbuG6v3Uga2jDtG5nIGJp4bq/dCBsw6BtIG3Ds24gc2FsYWQgdOG7kXQgY2hvIHPhu6ljIGto4buPZSB0aMOsIGLhuqFuIHPhur0gcuG6pXQgbmhhbmggY2jDoW4gxJHhuqV5LicsXHJcbiAgICAgICAgICAgIHNsdWc6ICdoYXJwZXItYmVja2hhbS1uYW0tdGF5LWJvLW8tc2FuLWJheS1taWFtaScsXHJcbiAgICAgICAgICAgIHRodW1iOiAnLy9pbWFnZS50dW9pdHJlcGx1cy5jb20vdXBsb2FkLzIwMTgvMDMvMjUweDE1Ni9hZGM5cnA3ZjUzLmpwZycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2tlbmgxNGNkbi5jb20vem9vbS8zNDBfMjEzLzIwMjAvcGhvdG8xNTg1NTczNzExMzQ0LTE1ODU1NzM3MTE3NjItY3JvcC0xNTg1NTczODU1NzU5ODA4NjE1NTYyLmpwZycsXHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vc2FuZGJveC50dW9pdHJlcGx1cy5jb20vbmh1bmctdGh1b25nLXZ1LWNhLWxvbi1udW90LWNhLWJlLWRlLW1vLXJvbmctdGhpLXBoYW4tcDI1Ni5odG1sJyxcclxuICAgICAgICAgICAgdGltZTogJzIwMjAtMDQtMDQgMTE6MDY6MTUnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMTIsXHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnR2nhuqNpIHRyw60nLFxyXG4gICAgICAgICAgICAgICAgJ3NsdWcnOiAnZ2lhaS10cmknLFxyXG4gICAgICAgICAgICAgICAgJ2hyZWYnOiAnaHR0cDovL2xvY2FsaG9zdDo4MDEyL2dpYWktdHJpLmh0bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaWQ6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5Ib3Jpem9udGFsV2lkZ2V0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxXaWRnZXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvcml6b250YWwtbmV3c1wiOiBcImhvcml6b250YWwtbmV3c19fXzI5SlFyXCIsXG5cdFwiaG9yaXpvbnRhbC1zbWFsbFwiOiBcImhvcml6b250YWwtc21hbGxfX18ya2pvR1wiLFxuXHRcImxlZnRcIjogXCJsZWZ0X19fNDBvMHpcIixcblx0XCJyaWdodFwiOiBcInJpZ2h0X19fM2hrZk9cIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX19fMXRoeExcIixcblx0XCJyb3ctcmV2ZXJzZVwiOiBcInJvdy1yZXZlcnNlX19fM2pWZXVcIixcblx0XCJtZXRhXCI6IFwibWV0YV9fXzItTDRYXCIsXG5cdFwibWV0YS1jYXRlZ29yeVwiOiBcIm1ldGEtY2F0ZWdvcnlfX18xbXlaM1wiLFxuXHRcIm1ldGEtdGltZVwiOiBcIm1ldGEtdGltZV9fXzJVLXFJXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9fXzJpM2hmXCIsXG5cdFwicHJvZ3Jlc3MtbG9hZGluZ1wiOiBcInByb2dyZXNzLWxvYWRpbmdfX19kQmg3cFwiLFxuXHRcImFydGljbGVcIjogXCJhcnRpY2xlX19fMlNUS0pcIixcblx0XCJhcnRpY2xlLWxlZnRcIjogXCJhcnRpY2xlLWxlZnRfX18zbmNYUFwiLFxuXHRcImJhY2tncm91bmRcIjogXCJiYWNrZ3JvdW5kX19fUmFmLUtcIixcblx0XCJhcnRpY2xlLXJpZ2h0XCI6IFwiYXJ0aWNsZS1yaWdodF9fXzFtTWpKXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJjYXRlZ29yeV9fXzMzcjQyXCIsXG5cdFwiYW5pbWF0ZWQtbG9hZFwiOiBcImFuaW1hdGVkLWxvYWRfX19TWTJpbVwiLFxuXHRcInBsYWNlSG9sZGVyU2hpbW1lclwiOiBcInBsYWNlSG9sZGVyU2hpbW1lcl9fXzFkU3NsXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IEVycm9ySW1nIGZyb20gJ1N0YXRpYy9pbWFnZXMvZXJyb3ItNDA0LmpwZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gUGFnZU5vdEZvdW5kKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncG9zdC1ub3QtZm91bmQnXSwgcHJvcHMuY2xhc3NOYW1lKX0gPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlBhZ2Ugbm90IGZvdW5kXCIgc3JjPXtFcnJvckltZ30gLz5cclxuICAgICAgICAgICAgPHA+WGluIGzhu5dpIGLhuqFuLCBjaMO6bmcgdMO0aSBraMO0bmcgdMOsbSB0aOG6pXkgYsOgaSB2aeG6v3QgbsOgeS48L3A+XHJcbiAgICAgICAgICAgIDxwPk3hu51pIGLhuqFuIHF1YXkgduG7gSB0cmFuZyBjaOG7pyDEkeG7gyB4ZW0gbmjhu69uZyB0aW4gdOG7qWMgbeG7m2kgbmjhuqV0LjwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiVHLhu58gduG7gSB0cmFuZyBjaOG7p1wiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2dvLWJhY2stdG8taG9tZSddKX0+VHLhu58gduG7gSB0cmFuZyBjaOG7pzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJ1xyXG59O1xyXG5cclxuUGFnZU5vdEZvdW5kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9zdC1ub3QtZm91bmRcIjogXCJwb3N0LW5vdC1mb3VuZF9fXzNXYTVxXCIsXG5cdFwiZ28tYmFjay10by1ob21lXCI6IFwiZ28tYmFjay10by1ob21lX19fMmc5QzNcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICdsYXp5c2l6ZXMnO1xyXG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL3BhcmVudC1maXQvbHMucGFyZW50LWZpdCc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBOb0ltYWdlIGZyb20gJ1N0YXRpYy9pbWFnZXMvbm8taW1hZ2UucG5nJztcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGFsdDogJycsXHJcbiAgICB0aHVtYjogTm9JbWFnZSxcclxuICAgIHNyYzogTm9JbWFnZSxcclxuICAgIHNjYWxlT25Ib3ZlcjogdHJ1ZVxyXG59O1xyXG5cclxuY2xhc3MgUHJvZ3Jlc3NpdmVNZWRpYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwcm9wcy53aWR0aCB8fCAnJztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3BzLmhlaWdodCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSByZWY9e3RoaXMubXlSZWZ9IGNsYXNzTmFtZT17c3R5bGVzWydwcm9ncmVzc2l2ZS1maWd1cmUnXX0gc3R5bGU9e3RoaXMud2lkdGggPyB7d2lkdGg6IHRoaXMud2lkdGh9IDoge319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FzcGVjdC1yYXRpby1wbGFjZWhvbGRlciddfSBzdHlsZT17dGhpcy5oZWlnaHQgPyB7aGVpZ2h0OiB0aGlzLmhlaWdodH0gOiB7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FzcGVjdC1yYXRpby1wbGFjZWhvbGRlci1maWxsJ119IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzU3LjglJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1sncHJvZ3Jlc3NpdmUtbWVkaWEnXSwgc3R5bGVzWydpcy1pbWFnZS1sb2FkZWQnXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlc1snc2NhbGUtb24taG92ZXInXV06IHRoaXMucHJvcHMuc2NhbGVPbkhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1snY2VudGVyZWQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zcmMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17dGhpcy5wcm9wcy5hbHR9IGxvYWRpbmc9XCJsYXp5XCIgc3JjPXt0aGlzLnByb3BzLnRodW1ifSBkYXRhLXNyYz17dGhpcy5wcm9wcy5zcmN9IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbJ3Byb2dyZXNzaXZlLW1lZGlhLWltYWdlJ10sICdsYXp5bG9hZCB3LWZ1bGwgaC1mdWxsJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e3RoaXMucHJvcHMuYWx0fSBsb2FkaW5nPVwibGF6eVwiIHNyYz17dGhpcy5wcm9wcy5zcmN9IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbJ3Byb2dyZXNzaXZlLW1lZGlhLWltYWdlJ10sICd3LWZ1bGwgaC1mdWxsJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblByb2dyZXNzaXZlTWVkaWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NpdmVNZWRpYTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZ3Jlc3NpdmUtZmlndXJlXCI6IFwicHJvZ3Jlc3NpdmUtZmlndXJlX19fM0xzOUJcIixcblx0XCJhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXJcIjogXCJhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXJfX18zaXRIM1wiLFxuXHRcImFzcGVjdC1yYXRpby1wbGFjZWhvbGRlci1maWxsXCI6IFwiYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyLWZpbGxfX18xd3R0dFwiLFxuXHRcInByb2dyZXNzaXZlLW1lZGlhXCI6IFwicHJvZ3Jlc3NpdmUtbWVkaWFfX18xOFE5QVwiLFxuXHRcInByb2dyZXNzaXZlLW1lZGlhLXRodW1iXCI6IFwicHJvZ3Jlc3NpdmUtbWVkaWEtdGh1bWJfX18yTDVDZ1wiLFxuXHRcInByb2dyZXNzaXZlLW1lZGlhLWltYWdlXCI6IFwicHJvZ3Jlc3NpdmUtbWVkaWEtaW1hZ2VfX18yc1B0RFwiLFxuXHRcImNlbnRlcmVkXCI6IFwiY2VudGVyZWRfX18yck9VWFwiLFxuXHRcImlzLWltYWdlLWxvYWRlZFwiOiBcImlzLWltYWdlLWxvYWRlZF9fX3p6MVpXXCIsXG5cdFwic2NhbGUtb24taG92ZXJcIjogXCJzY2FsZS1vbi1ob3Zlcl9fX3RwT25YXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBQcm9ncmVzc2l2ZU1lZGlhIGZyb20gJ0NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYSc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZGViYXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge2dldFBvc3RJbWFnZX0gZnJvbSAnTGlicy91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyTmV3c1dpZGdldChwcm9wcykge1xyXG4gICAgbGV0IHBvc3RzID0gcHJvcHMucG9zdHMgfHwgW107XHJcblxyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgIHBvc3RzID0gcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEltYWdlc1xyXG4gICAgICAgICAgICBwb3N0LmJhY2tncm91bmQgPSBnZXRQb3N0SW1hZ2UocG9zdCwgcHJvcHMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3suLi5wcm9wcy5zdHlsZX19IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3NpZGViYXItd2lkZ2V0LW5ld3MnXSwgc3R5bGVzWydzaWRlYmFyJ10sICdtYi0yMCcsIHByb3BzLmNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3NpZGViYXItaGVhZGVyJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgIDxoMj48c3BhbiB0aXRsZT17cHJvcHMudGl0bGV9Pntwcm9wcy50aXRsZX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3NpZGViYXItY29udGFpbiddfT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5za2VsZXRvbkxvYWRpbmcgJiYgcG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocG9zdHMpICYmIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5waWR9IGNsYXNzTmFtZT17J2NsZWFyZml4J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY29udGVudCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNbJ3RodW1iJ119IHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NpdmVNZWRpYSBhbHQ9e3Bvc3QudGl0bGV9IHRodW1iPXtwb3N0LnRodW1ifSBzcmM9e3Bvc3QuYmFja2dyb3VuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2JhY2tncm91bmQnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlLXJpZ2h0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2Rlc2NyaXB0aW9uJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydwcm9ncmVzcy1sb2FkaW5nJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYmFja2dyb3VuZCddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sndGl0bGUnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snZGVzY3JpcHRpb24nXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3Byb2dyZXNzLWxvYWRpbmcnXSwgJ2NsZWFyZml4Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1yaWdodCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWyd0aXRsZSddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2JhY2tncm91bmQnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlLXJpZ2h0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2Rlc2NyaXB0aW9uJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydwcm9ncmVzcy1sb2FkaW5nJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYmFja2dyb3VuZCddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sndGl0bGUnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snZGVzY3JpcHRpb24nXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3Byb2dyZXNzLWxvYWRpbmcnXSwgJ2NsZWFyZml4Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1yaWdodCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWyd0aXRsZSddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBza2VsZXRvbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRpdGxlOiAnVElOIE3hu5pJIE5I4bqkVCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbGFyZ2UnLCAvLyBsYXJnZSwgbm9ybWFsLCBtZWRpdW0sIHNtYWxsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHRvcDogMFxyXG4gICAgfSxcclxuICAgIHBvc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaWQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0PDsyAxIG3hu7kgbmjDom4gVGjDoWkgc2VsZmllIHbhu5tpIGPhuqMgcXXDom4gxJFvw6BuIHNhbyB0aOG6vyBnaeG7m2ksIGFpIGTDqCBcImNo4bq3dCBjaMOpbVwiIHThu6sgaOG7mWkgS2VuZGFsbCDEkeG6v24gZMOgbiBu4buvIHRo4bqnbiBIb2EsIEjDoG4sIFZp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmF1IGPhu6cgcXXhuqMgbMOgIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBraMO0bmcgdGjhu4MgdGhp4bq/dSB0cm9uZyB0aOG7sWMgxJHGoW4gZ2nhuqNtIGPDom4sIG5oxrBuZyBu4bq/dSBraMO0bmcgYmnhur90IGzDoG0gbcOzbiBzYWxhZCB04buRdCBjaG8gc+G7qWMga2jhu49lIHRow6wgYuG6oW4gc+G6vSBy4bqldCBuaGFuaCBjaMOhbiDEkeG6pXkuJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8va2VuaDE0Y2RuLmNvbS96b29tLzM0MF8yMTMvMjAyMC9waG90bzE1ODU1NzM3MTEzNDQtMTU4NTU3MzcxMTc2Mi1jcm9wLTE1ODU1NzM4NTU3NTk4MDg2MTU1NjIuanBnJyxcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9zYW5kYm94LnR1b2l0cmVwbHVzLmNvbS9uaHVuZy10aHVvbmctdnUtY2EtbG9uLW51b3QtY2EtYmUtZGUtbW8tcm9uZy10aGktcGhhbi1wMjU2Lmh0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBpZDogMyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDw7MgMSBt4bu5IG5ow6JuIFRow6FpIHNlbGZpZSB24bubaSBj4bqjIHF1w6JuIMSRb8OgbiBzYW8gdGjhur8gZ2nhu5tpLCBhaSBkw6ggXCJjaOG6t3QgY2jDqW1cIiB04burIGjhu5lpIEtlbmRhbGwgxJHhur9uIGTDoG4gbuG7ryB0aOG6p24gSG9hLCBIw6BuLCBWaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JhdSBj4bunIHF14bqjIGzDoCBuaOG7r25nIHRow6BuaCBwaOG6p24ga2jDtG5nIHRo4buDIHRoaeG6v3UgdHJvbmcgdGjhu7FjIMSRxqFuIGdp4bqjbSBjw6JuLCBuaMawbmcgbuG6v3Uga2jDtG5nIGJp4bq/dCBsw6BtIG3Ds24gc2FsYWQgdOG7kXQgY2hvIHPhu6ljIGto4buPZSB0aMOsIGLhuqFuIHPhur0gcuG6pXQgbmhhbmggY2jDoW4gxJHhuqV5LicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2tlbmgxNGNkbi5jb20vem9vbS8zNDBfMjEzLzIwMjAvcGhvdG8xNTg1NTczNzExMzQ0LTE1ODU1NzM3MTE3NjItY3JvcC0xNTg1NTczODU1NzU5ODA4NjE1NTYyLmpwZycsXHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vc2FuZGJveC50dW9pdHJlcGx1cy5jb20vbmh1bmctdGh1b25nLXZ1LWNhLWxvbi1udW90LWNhLWJlLWRlLW1vLXJvbmctdGhpLXBoYW4tcDI1Ni5odG1sJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcblNpZGViYXJOZXdzV2lkZ2V0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJOZXdzV2lkZ2V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWRlYmFyLXdpZGdldC1uZXdzXCI6IFwic2lkZWJhci13aWRnZXQtbmV3c19fXzFJQ20wXCIsXG5cdFwic2lkZWJhci1oZWFkZXJcIjogXCJzaWRlYmFyLWhlYWRlcl9fXzFDdDdrXCIsXG5cdFwic2lkZWJhci1jb250YWluXCI6IFwic2lkZWJhci1jb250YWluX19fWUhJdXJcIixcblx0XCJjb250ZW50XCI6IFwiY29udGVudF9fXzNKTERtXCIsXG5cdFwidGh1bWJcIjogXCJ0aHVtYl9fX05mSVJiXCIsXG5cdFwicHJvZ3Jlc3MtbG9hZGluZ1wiOiBcInByb2dyZXNzLWxvYWRpbmdfX18zZjl1a1wiLFxuXHRcImFydGljbGVcIjogXCJhcnRpY2xlX19fMWpuZXFcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiYmFja2dyb3VuZF9fXzExRnc4XCIsXG5cdFwiYXJ0aWNsZS1yaWdodFwiOiBcImFydGljbGUtcmlnaHRfX182OUFjOVwiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVfX19DaUVaYlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fX18yMDNpVVwiLFxuXHRcImFuaW1hdGVkLWxvYWRcIjogXCJhbmltYXRlZC1sb2FkX19faFJtbnZcIixcblx0XCJwbGFjZUhvbGRlclNoaW1tZXJcIjogXCJwbGFjZUhvbGRlclNoaW1tZXJfX18xNEt3Z1wiXG59OyIsImNvbnN0IGVudiA9IHByb2Nlc3MuZW52LkVOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5cclxuY29uc3QgQXBwID0ge1xyXG4gICAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgICAgICBTSVRFX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgIE1PQklMRV9TSVRFX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi8nLFxyXG4gICAgICAgIEFQSV9IT1NUOiAnaHR0cHM6Ly9tZW92YXRoYXkudm4vdjIvYXBpLydcclxuICAgIH0sXHJcbiAgICBzYW5kYm94OiB7XHJcbiAgICAgICAgU0lURV9VUkw6ICdodHRwOi8vc2FuZGJveC5tZW92YXRoYXkudm4vJyxcclxuICAgICAgICBNT0JJTEVfU0lURV9VUkw6ICdodHRwOi8vc2FuZGJveC1tLm1lb3ZhdGhheS52bi8nLFxyXG4gICAgICAgIEFQSV9IT1NUOiAnaHR0cDovL3NhbmRib3gubWVvdmF0aGF5LnZuL3YyL2FwaS8nXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGlvbjoge1xyXG4gICAgICAgIFNJVEVfVVJMOiAnaHR0cHM6Ly9tZW92YXRoYXkudm4vJyxcclxuICAgICAgICBNT0JJTEVfU0lURV9VUkw6ICdodHRwczovL20ubWVvdmF0aGF5LycsXHJcbiAgICAgICAgQVBJX0hPU1Q6ICdodHRwczovL21lb3ZhdGhheS52bi92Mi9hcGkvJ1xyXG4gICAgfVxyXG59W2Vudl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgQ29uc3RhbnQgPSB7XHJcbiAgICAuLi5BcHAsXHJcbiAgICBTVEFUSUNfVkVSU0lPTjogMTIzLFxyXG4gICAgS0VZQ09ERToge1xyXG4gICAgICAgIEVOVEVSOiAxM1xyXG4gICAgfSxcclxuICAgIFNFQVJDSF9UT19RVUVSWTogMSxcclxuICAgIFFVRVJZX1RPX1NFQVJDSDogMlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnQ7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGNvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lLCBmb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbTpzcycpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIHNlY29uZHMgYWdvXHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIG1pbnV0ZXMsIDE1IHNlY29uZHMgYWdvXHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIGhvdXJzIGFnb1xyXG4gICAgICAgIC8vIDA3LzAzLzIwMjAgMTA6MzQ6MzAgPT4gPjI0aCA9PiAwNy8wMy8yMDIwIDEwOjM0OjMwXHJcblxyXG4gICAgICAgIGlmICh0aW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzID0gbW9tZW50KCkuZGlmZihtb21lbnQodGltZSwgZm9ybWF0KSwgJ3NlY29uZHMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWNvbmRzICYmICtzZWNvbmRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZHMgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiAnMSBwaMO6dCB0csaw4bubYydcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWludXRlcyA9IE1hdGgucm91bmQoc2Vjb25kcyAvIDYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPiA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG91cnMgPiAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5yb3VuZChob3VycyAvIDI0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IG1vbWVudCh0aW1lKS5mb3JtYXQoJ0hIOm1tIHwgREQvTU0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSBob3VycyArICcgZ2nhu50gdHLGsOG7m2MnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGhvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdob3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSBtaW51dGVzICsgJyBwaMO6dCB0csaw4bubYyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG1pbnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZzogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1b3RlRG91YmxlVG9TaW5nbGUgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvXCIvZywgJ1xcJycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBwYXlsb2FkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaGFuZGxlRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZW5kIGVycm9yIGxvZ1xyXG4gICAgICAgIC8qY29uc3QgbW9uaXRvciA9IHJlcXVpcmUoJ0BhbnRzY29ycC9tb25pdG9yLWphdmFzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgbW9uaXRvci5pbml0KHtcclxuICAgICAgICAgICAgcGlkOiAxNTkyMzA3MDU5Nzk1LFxyXG4gICAgICAgICAgICBlbnY6IHByb2Nlc3MuZW52LkVOVixcclxuICAgICAgICAgICAgaG9zdDogJ2h0dHA6Ly9tb25pdG9yLnR1b2l0cmVwbHVzLmNvbS9hcGkvbW9uaXRvci9lcnJvci8nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vbml0b3IuaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgdHJhY2VJZDogJycsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWRcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU2VhcmNoQW5kUGFyYW0odmFsdWUsIGRpcmVjdGlvbiA9IGNvbnN0YW50LlNFQVJDSF9UT19RVUVSWSkge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gY29uc3RhbnQuU0VBUkNIX1RPX1FVRVJZKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnKycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnKycsIC9cXHMvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RQcm9wU2FmZWx5KGZuLCBkZWZhdWx0VmFsdWUgPSAnJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEltYWdlID0gKHBvc3QsIGJhY2tncm91bmQgPSAnbGFyZ2UnKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChwb3N0ICYmIGJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmQgPT09ICdsYXJnZScgJiYgcG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3QuaW1hZ2VzICYmIHBvc3QuaW1hZ2VzW2JhY2tncm91bmRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5pbWFnZXNbYmFja2dyb3VuZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGd0YWdJbmplY3QgPSAoZ2FJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoZ2FJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBnYVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZ29vZ2xlQW5hbHl0aWNzU291cmNlID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtnYUlkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHMwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5cclxuICAgICAgICAgICAgZ2FTY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICBnYVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdvb2dsZUFuYWx5dGljc1NvdXJjZSk7XHJcbiAgICAgICAgICAgIHMwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhU2NyaXB0LCBzMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgIGd0YWdUcmFja2luZ0V2ZW50KCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBndGFnVHJhY2tpbmdFdmVudCgnY29uZmlnJywgZ2FJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBndGFnVHJhY2tpbmdFdmVudCA9IChldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgYXJncykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhY2tpbmcoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIC4uLmFyZ3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zICYmIE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICYmIGV2ZW50Q2F0ZWdvcnkgIT09ICdqcycpIHtcclxuICAgICAgICAgICAgdHJhY2tpbmcoZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24sIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhY2tpbmcoZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyX19fMnNHa0VcIixcblx0XCJzdWItbmF2YmFyXCI6IFwic3ViLW5hdmJhcl9fXzFucktjXCIsXG5cdFwic3ViLW5hdmJhci1rZXl3b3Jkc1wiOiBcInN1Yi1uYXZiYXIta2V5d29yZHNfX18yX1JTNFwiLFxuXHRcImNvbnRhaW5lci1ib2R5XCI6IFwiY29udGFpbmVyLWJvZHlfX19PelNLa1wiLFxuXHRcImNvbnRhaW5lci1sZWZ0XCI6IFwiY29udGFpbmVyLWxlZnRfX18xNHJjV1wiLFxuXHRcInBvc3QtdGl0bGVcIjogXCJwb3N0LXRpdGxlX19fMjlLRzhcIlxufTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3IsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZSBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEhvcml6b250YWxXaWRnZXQgZnJvbSAnQ29tcG9uZW50cy9Ib3Jpem9udGFsV2lkZ2V0JztcclxuaW1wb3J0IFNpZGViYXJOZXdzV2lkZ2V0IGZyb20gJ0NvbXBvbmVudHMvU2lkZWJhck5ld3NXaWRnZXQnO1xyXG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJ0NvbXBvbmVudHMvUGFnZU5vdEZvdW5kJztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHt1cGRhdGVCcmVhZGNydW1iU3RydWN0dXJlLCB1cGRhdGVEb2N1bWVudH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0ICogYXMgUG9zdFRhZ1NlcnZpY2UgZnJvbSAnU2VydmljZXMvUG9zdC9UYWdzJztcclxuaW1wb3J0ICogYXMgUG9zdENhdGVnb3J5U2VydmljZSBmcm9tICdTZXJ2aWNlcy9Qb3N0L0NhdGVnb3J5JztcclxuXHJcbi8vIEFzc2V0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ01vZHVsZXMvUGFnZXMvVGFnL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vLyBVdGlsc1xyXG5pbXBvcnQgQ29uc3RhbnQgZnJvbSAnQ29uZmlnL2NvbnN0YW50JztcclxuaW1wb3J0IHtoYW5kbGVFcnJvcn0gZnJvbSAnTGlicy91dGlscyc7XHJcblxyXG5jb25zdCBQQVRIID0gJ2FwcGxpY2F0aW9uL3BhZ2VzL3RhZy5qc3gnO1xyXG5jb25zdCBQT1NUX1BFUl9QQUdFID0gMjA7XHJcblxyXG5jbGFzcyBUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlZHV4U3RvcmUsIHJlcSwgcXVlcnl9KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlcyA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHNsdWcgPSAnJztcclxuICAgICAgICAgICAgbGV0IHRhZyA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgc2ltaWxhclRhZ3MgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHBvc3RzID0gW107XHJcbiAgICAgICAgICAgIGxldCBsYXRlc3RQb3N0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnNsdWcpIHtcclxuICAgICAgICAgICAgICAgIHNsdWcgPSBxdWVyeS5zbHVnO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc3RTZXJ2aWNlID0gUG9zdFRhZ1NlcnZpY2UuZ2V0TGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2x1ZzogcXVlcnkuc2x1ZyxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogUE9TVF9QRVJfUEFHRSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocG9zdFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwb3N0U2VydmljZS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhLnBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLnRhZ3MgJiYgcmVzcG9uc2UuZGF0YS5kYXRhLnRhZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRhZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMgPSByZXNwb25zZS5kYXRhLmRhdGEucG9zdHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IHRhZy5uYW1lICsgJyAtICcgKyBzdGF0ZXMuZG9jdW1lbnQuZGVmYXVsdFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyVGFnc1NsdWcgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QuYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcy5wdXNoKHBvc3QuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3QuaW1hZ2VzICYmIHBvc3QuaW1hZ2VzLm5vcm1hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcy5wdXNoKHBvc3QuaW1hZ2VzLm5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2ltaWxhclRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0LnRhZ3MgJiYgcG9zdC50YWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudGFncy5tYXAoKHRhZ0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ0l0ZW0uc2x1ZyAmJiBhcnJUYWdzU2x1Zy5pbmRleE9mKHRhZ0l0ZW0uc2x1ZykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUYWdzU2x1Zy5wdXNoKHRhZ0l0ZW0uc2x1Zyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltaWxhclRhZ3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGFnSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlICYmIGltYWdlLmluZGV4T2YoJ2h0dHBzOicpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHBzOicgKyBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gQ29uc3RhbnQuU0lURV9VUkwgKyBzbHVnICsgJy5odG1sJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9iaWxlVXJsID0gQ29uc3RhbnQuTU9CSUxFX1NJVEVfVVJMICsgc2x1ZyArICcuaHRtbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkb2N1bWVudCBtZXRhZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1eFN0b3JlLmRpc3BhdGNoKHVwZGF0ZURvY3VtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlOiBtb2JpbGVVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGFnLm5hbWUgKyAnIC0gJyArIHN0YXRlcy5kb2N1bWVudC5kZWZhdWx0VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQnJlYWRjcnVtYiBzdHJ1Y3R1cmVkIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJlYWRjcnVtYkl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IENvbnN0YW50LlNJVEVfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdUaW4gdOG7qWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAaWQnOiBDb25zdGFudC5TSVRFX1VSTCArIHNsdWcgKyAnLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHRhZy5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdXhTdG9yZS5kaXNwYXRjaCh1cGRhdGVCcmVhZGNydW1iU3RydWN0dXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MaXN0RWxlbWVudDogYnJlYWRjcnVtYkl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsYXRlc3QgcG9zdHNcclxuICAgICAgICAgICAgICAgIGxldCBnZXRMYXRlc3RQb3N0cyA9IFBvc3RDYXRlZ29yeVNlcnZpY2UuZ2V0TGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xhdGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdldExhdGVzdFBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZ2V0TGF0ZXN0UG9zdHMudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5wb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UG9zdHMgPSByZXNwb25zZS5kYXRhLmRhdGEucG9zdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7c2x1ZywgdGFnLCBzaW1pbGFyVGFncywgcG9zdHMsIGxhdGVzdFBvc3RzfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2dldEluaXRpYWxQcm9wcycsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnByb3BzLnRhZyAmJiB0aGlzLnByb3BzLnRhZy5uYW1lID8gdGhpcy5wcm9wcy50YWcubmFtZSA6ICcnO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLm15UmVmfSBjbGFzc05hbWU9e2NsYXNzbmFtZSgnY29udGFpbmVyJywgc3R5bGVzWydjb250YWluZXInXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1snc3ViLW5hdmJhciddKX0gc3R5bGU9e3toZWlnaHQ6IDUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdjbGVhcmZpeCB3MTA0MCcsIHN0eWxlc1sndzEwNDAnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaW1pbGFyVGFncy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydzdWItbmF2YmFyLWtleXdvcmRzJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFycm93LWdyYXBoLXVwLXJpZ2h0XCIgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaW1pbGFyVGFncy5tYXAoKHRhZywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IDwgNSAmJiB0YWcuc2x1ZyAmJiB0YWcubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RhZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3RhZz9zbHVnPScgKyB0YWcuc2x1Z30gYXM9eycvJyArIHRhZy5zbHVnICsgJy5odG1sJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXsnVOG7qyBraMOzYTogJyArIHRhZy5uYW1lfT57dGFnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoJ2NvbnRhaW5lci1ib2R5IGNsZWFyZml4IHcxMDQwJywgc3R5bGVzWydjb250YWluZXItYm9keSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdjbGVhcmZpeCB3MTA0MCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdjb250YWluZXItbGVmdCBmbCB3NzIwJywgc3R5bGVzWydjb250YWluZXItbGVmdCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdtdC0yMCcsIHN0eWxlc1sncG9zdC10aXRsZSddKX0+e3RhZ05hbWUgfHwgJ1Thu6sga2jDs2Ega2jDtG5nIHThu5NuIHThuqFpJ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmV3c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9eyF0aGlzLnByb3BzLnBvc3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dDYXRlZ29yeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbm9ybWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cz17dGhpcy5wcm9wcy5wb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxQYWdlTm90Rm91bmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoJ2NvbnRhaW5lci1yaWdodCBjb2wtc3RpY2t5IGZyIG10LTIwIHczMDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTmV3c1dpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXN0aWNreVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9eyF0aGlzLnByb3BzLmxhdGVzdFBvc3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGluIHThu6ljIG3hu5tpIG5o4bqldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbWVkaXVtJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzPXt0aGlzLnByb3BzLmxhdGVzdFBvc3RzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ3JlbmRlcicsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZXJyb3ItNDA0LTI3NjMzY2E5ZDE5NTllYzQ2ZjEyNjAxMTk2ZGQyN2Q0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQXBRQUFBRnpDQUlBQUFBUEJBN01BQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlScFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9UV0ZqYVc1MGIzTm9LU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBHTURJNFJqWTNPVUU1UWpJeE1VVTVRVEkwTUVZeVJrRTJSVGRFTkVNM015SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEdNREk0UmpZM1FVRTVRakl4TVVVNVFUSTBNRVl5UmtFMlJUZEVORU0zTXlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rWXdNamhHTmpjM1FUbENNakV4UlRsQk1qUXdSakpHUVRaRk4wUTBRemN6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tZd01qaEdOamM0UVRsQ01qRXhSVGxCTWpRd1JqSkdRVFpGTjBRMFF6Y3pJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrNGJrK2NRQUFGTmhKUkVGVWVOcnMzUWxUVTJjYmdHRVNRQVJFUVVwWkhHMTFuRmJIc1oxcHAvLy9GM1NtdUkvVHo2VlYyVGNGV1VPK3A3dzJqU3dCa3B5RUE5YzFVNGF3eFI1Qzdqd243emtwTEMwdGRYUjBsTXZsUXFHUTNuWnc5c1N2eGtZQUlDbUlOM2lNQldjdVRtSjB3bmkzWUh1MTdLN05ieDJBOHh6dnhjVkZ0UU1BOFFZQU1vdDMybTBPQUlnM0FDRGVBSUI0QTRCNGt3a0hFT2ZtTDhyYVQwQzhFVy94QmhCdjhVYThBZkZHdkJGdlFMd1JiL0VHRUcveFJyd0I4VWE4RVc5QXZCRnY4UVlRYi9GR3ZJSHpwbWdUNUNVSnFRcVZ0OVVYcXo5KzdHZHJYSFFWRFY2RmNnT3QwWFdTbVMvdWt0TGI2b3VHRXJDREJESWRXdExmMUtFTk9waWt5c2VQL1d5TmkzbTVDcE0zQUdjdTJ6WkNiZUlOQURuVFZkKzNlVmdFQURtTHQrZThBYUJkN0RZSEFQRUdBTVFiQUtpd1lBMEFMa2E4TFZnRGdIYXgyeHdBTHNia2JZWUdnSnpGMjI1ekFHZ1h1ODBCUUx3QkFQRUdBQnFOZDNyMnV2cHQ5Y1Y5bjkzM1pYQmUxZjEzY2ZEUHBMNkxyc0pWbkkrcnFPTmFXdkRYZDZhdW9pdUwrNmthSHdjQTJqTjVBd0RpRFFDSU53Q0lOd0FnM2dDQWVBT0FlQU1BNGcwQWlEY0FpRGNBSU40QWdIZ0RnSGdEQU9JTkFJZzNBSWczQUNEZUFJQjRBNEI0MndRQUlONEFnSGdEQU9JTkFPSU5BSWczQUNEZUFDRGVBSUI0QXdEaURRRGlEUUNJTndBZzNnQWczZ0NBZUFNQTRnMEE1MWhoYVduSlZnQUE4UVlBeEp1T2puSzVYQ2dVMHR2cWkvLzhJdi85K0xHZnJYSFJWVFRsS29CR3k3VDNaNFY0QTRCNEF3RGlEUUNJTndDSU53QWczZ0NBZUFPQWVBTUE0ZzBBaURjQWlEY0FJTjRBZ0hnRGdIZ0RBT0lOQUlnM0FJZzNBQ0RlQUlCNEE0QjRpemNBaURjQUlONEFnSGdEZ0hnREFPSU5BSWczQUlnM0FDRGVISzVjTGhjS2hmUzIrdUkvdjhoL1AzN3NaMnRjZEJWTnVRcWcwVEx0L1ZraDNnQWczZ0NBZUFNQTRnMEE0ZzBBaURjQUlONEFJTjRBZ0hnREFPSU5BT0lOQUlnM0FDRGVBQ0RlQUlCNEF3RGlEUURpRFFDSU53QWczZ0FnM3VJTkFPSU5BSWczQUNEZUFDRGVBSUI0QXdEaURRRGlEUUNJTjV3VjVYSzV1T2ZMSDB5aFlKdGt1clhqN2U0ZVd4dkVHK3I2OHlnVU9qczdJeVNmOTJ4c2JLU29rTkhXN3VucDZlM3Q3ZS92NytycXFpUWNFRzg0cWNoMkRJSnpjM1B2Mzc5ZldWblozTnlNaTJiQlRNZnUyTHpkM2QxWHJsd1pHeHU3Y2VORy9BcEtwWkl0QStJTkp4S1RYNHphTDE2OG1KbVppYWhFUlNwN3pzbFVHcmhqbXc4T0R2NzQ0NC9EdzhQUjc3UTdIUkJ2cURWeng2ajk5T25UNWVYbEdBUk4yMjJ4czdNVEcvLysvZnNURXhNcDU3WUppRGNjTGlic1Q1OCtUVTVPcnEydHhmeHRnN1IzQ285Zng0TUhEOGJHeGp6L0RWL2RVOWtFVUYzdXpjM05GeTllS1BjWitYV1VTcVdYTDErdXJLeDBkbmJhSUNEZWNJaENvZkQrL2Z2RnhVWGxQaU9pMmV2cjY2OWV2Ykp5RGNRYkRwL3pvaE1mUG56d0pQZFo2L2ZDd2tJOG9qSjhRNFh4QXY2TGQwU2l4ZzV6Ung1bnZmMFBYZElmajZXMnQ3ZG5abVpHUmtac0pSRHYvRWtId2xhT05xNWNUSGR3Si94c2pZc1grU3BTbTVlWGw0L2ErS1ZTcWJ1NysrclZxK2J5ak1URHB2WDE5VVBINjlqbUh6OSszTnJhU2lkdnNhM09QWDlsNG4wT2I5Q1ZtM1hUTDE3d3E0Z3FySzZ1SG5xdkVlVytjdVhLZ3djUEl0Nk9XY3JvdHAyV0NzN096aDdzZDFwSUdDNWR1bVQ3d3oveHJuSFNxQnAvSkI0V21ielAzK1FkWXJZN2FzdmZ2SG56bTIrK2lYNGMrKytrdnR0MmYzLy9uVHQzRmhZV0R0NHB4Y1dkUGJYdmx6QjVtN3poSXZhanhsMUp6SHpwVkY4cDB1bUxLOSt5N3lKMWlNMGJHem5HN3UzdDdVUHZ1MjFlcUxEYUhNd0JPWGo4QklnM0FPU1kzZWI1bS84c1dNdmlLazQ3Z3RlK2FyTDdFN0NGUWJ4enhvSzFyQmVzbmZCWGNOUlZkTmp4bS8yZmdDMThjUVlWeEJ2YVB5OVc3by9LLzdKbEFQR0dNOWZzenM3T2VGc3FsU3BIT3NYRnJxNnU5RXFqdTd1N1R0a05pRGVjbFd4SG9TUE1pNHVMQ3dzTEh6OSszTmpZU0VlYUZZdkZLSGRmWDkvZzRPRHc4SEIvZjM5OFVNSUI4WVoyU2lmb25wNmUvdXV2djVhV2xsS1k0NFBWVDRySHg2ZW1wbnA2ZWtaSFIyL2R1aFVKVDJtMzlRRHhobGJyN096YzJ0cjY4ODgvMzc5L0h6Mk9pekZuSC9wbEhYc25kSHZ6NXMzczdPemR1M2NuSmlaMmQzZjFHeEJ2YUozb2JsZFgxK3JxNnBNblQyS3dUazlzSHp1amg0Mk5qZmlXdGJXMU8zZnV4RVV2dkFFY3kwbGFvR2t6ZHdUNDBhTkh5OHZMYVQzYXliOHhtdjM2OWV2Ly9lOS9IUTZTQWNRYldqTnpSMzEzZG5hZVAzLys4ZVBIbzE0T3ZJWUlkdnlFdDIvZnZudjNydkxzT0lCNFExYlNNZHlSM3ZuNStUcktYZmtoOGZiVnExZVJmL0VHeEJzeUg3dFhWMWZUME56UVgyT3h1TDYrL3ZmZmYzZlllUTZJTjJRNmRzZmJtWm1aalkyTkJ1UGRzZmY4OTl6Y1hEd1VhUHhIQWVJTkhHbDdlM3QrZnI0cHMzSTBlMnRyYTJGaHdWWUZ4QnN5K3hNcUZ0ZlcxdGJYMTVzNEt5OHRMZTN1N3JaM3ozbGFBKy8zQytJTjUxQWs5dlBuenpGOE42dTE4WFBpMFVBYmovWk9wMlNQNlg5MWRiWHU5WGVBZU1QWkxYZTVYTjdhMm1ydW1kRktwVklUSHczVVVlNzUrZm5KeWNsbno1N0Y0NUowTWpoQXZPRmNhZnFVbkY2cXBQWHhUcStuTWpNejgrVEprNTJkbmVYbDVVZVBIcTJ2cjV1L1FiemhITTdmR2MzMExmNGZpU0U3eXYzMDZkT3RyYTE0UDVvZC9VNm5idFZ2RUc4NEo2S3ZhVnJOWWdKdThmOUxkM2YzM054Y3BIcDdlN3V5cXp6K0dZdUxpL0hCalkwTi9RYnhodk9qcDZlbldDdzJhMUNPbnhNL01Fclpzc2s3SGl0RXVXZG5aL2VWdTlMdnBhVWwrODlCdk9IODJOM2Q3ZXZyaTl3Mk1kNVhyMTV0NVdGYWFZVmFsRHZ0TFQvNEJkSHNoWVdGeDQ4Zm03OUJ2T0U4aU5iMjl2WU9EQXcwSmQ3cFpLdERRME90ZWM0N3pkeFI3aGlzanlwM0VsOFcvWjZjbk5SdkVHODRENko1bzZPalRjbHR6UEh4T0NEaTNacHlSNGJUODl5MXkxM3A5K0xpWXRwLzd2Z3hFRy9JOStRZGhvZUhCd2NIR3p4bUxBVjdZbUxpOHVYTFdaK2tKWlY3ZG5iMjhlUEhtNXViSjR4eHBkL21ieEJ2eUxHb1lJUzJwNmZuOXUzYmtjQlNxVlQzajRydmpRY0I0K1BqV1kvZDZVd3MwOVBUSjV5NXE2WDFhNU9UazQ0ZkEvR0dmSXZ1am95TTNMbHpKdzNpOWYyRTN0N2VIMzc0SWFiYlRNZnV5c3hkT1o3N3REOGhIZjhkM3g3OXR2OGN4QnZ5T255bmM2TEY4QjM5M3Q3ZVBtMTlJNkxSN0ljUEgxNjdkcTJSMmYyRTVVN25VRHQ0Vk5pcCtyMjR1R2o5T1lnMzVGdWF1V04wdm5mdlhsemMyZGs1NFhkRnVhOWV2ZnJycjc4T0R3OUhVRFA5UjFabTdrYktYVDEvUjc4ZC93M2lEVG1ldjJQZ2pybjU3dDI3di96eVM4elEwZSs0ZU9oZTlQaGdmSEY4UWJ4ejY5YXQzMzc3YlhCd01PdHlwM09vUlc3cjIxdCsxUHlkMXEvWmZ3NnQ1UEV5TkhuK2pnYVBqSXhFaktlbXBxYW5wejk5K3BRaVhhbDRZYy9seTVlSGhvWnUzTGh4L2ZyMTlGMnRLWGZqTS9mQmZrOU9Udjc4ODgveGYzVEMvUTJBZU1OWjdIZXhXTHg1OCtiNCtQamEydHJxNnVyNitucDY1ZEFJWjA5UFQxOWYzOERBUU5RdUtuN1VkTjdFWFFKeHBjMmR1ZmM5TEVqejk4T0hEK1AvS05QbjdBSHhoZ3p0N29sd1h0MVQvY3BqNmVWTTBwN3oxaHpQWGYxYVlSbU45YW5mUC8zMFUyOXZyL2tic3VZNWI4aDJDaS90U2M5L1Y5UjRPcnpwTS9mMDlIU201ZjR5Qi96NytpV3JxNnZXcjRGNHcva0plZDFIZ2RjOWN6ZHlQSGQ5L1g3eTVNbm56NS8xRzhRYnFDZWw2UnhxelYyaGR1eVZycXlzeFB5dDN5RGV3T2xtN3ZUNjNFMDVudnUwNHVvYy93M2lEWng2L00zaXFMQlQvUU1jL3czaURSZGxZbTc4aDJSMFBIY2QvNHgwL0xmenA0SjR3N25OZHJGWWJIQXRXOXBiSHVXT2tiYzFLOVJPMG0rdkh3cmlEZWV6M0NFS2w5NnArNGVrNDduYlBuUHY2L2ZTMHRJZmYveGgvUnFJTjV5cmNxZW5xSC8vL2ZkSWIzM1JiZVh4M0tlVmpoK0xoeFJlUHhURUc4NVB1ZFBwejFaWFYxKzhlQkVCam8rY2F2NXV6VG5VR3ArL3JUOEg4WVp6VXU2b2RkclJIWVhiMmRtSkFNZEhJc0FuN0hlYXVhZW1wdHB5Vk5pcDV1OTAvSGZNMy9vTjRnMzVucm1qM05Ic0ZOMWlzUmp2UDN2MkxENSt3dms3dmVKSWZFdmxoNXhaNmZqdmRQNjErRDkxR3dEeGhweEo1WTZTbFVxbDZ1akcrekZBeDhkUDB1OTBKcFkwdU9jaWgvRi90TEN3OFBMbHkvVFNMRzRHSU42UXM1bjdxQjNkOFpFWW95UEo2Zm52R3VXT21idkZaejl0eXZ3ZC8rQ1duZUFkeEJ0b1RyMk9mYkdReXZ3ZFh4bVIzamVrVmgvUG5hOXlmN25Uc2M4Y3hCdnlOWE9uY205dWJ0YU9ibnhsbXIrbnBxYXE5NStmemVPNWdSYXo3Qk5hVis3S0FWMG5XWEdkNXUvbno1L0grMk5qWTZWU3FUSzQ1MjV2T1NEZWtNTy90SDlYcUowcXVxbmYwZnR5dVR3K1BsNHNGajk4K1BEczJUUGxCdkVHTXArNTAwdHIxM0ZBVndRN1p1Nll2OVA1ejVVYkVHOW9VYmtmUDM2ODc2aXdVL1U3SGY4ZDc1Lzk0N2tCOFliY2x6czl6MTEzdWF2bjd3NUx0UUh4aGt6TFhUa3FyQ2s3dXAzVkJCQnZhRkc1eithTGhRQzVaaGNjWkZqdVk0L25CaEJ2YUgrNXE4L0U0aFcwZ0N5NFo0SG1TQysya2RhV3ArZTVsUnNRYjhqQnpGMzM4ZHdBNGcydG5ybTd1N3MvZlBodzhGVStBWnJPYzk3UWhISlg5cFlyTnlEZWNOYWxzNWFtODViYld3NklOK1RoVDZoWVhGaFlpSmxidVFIeGh0eE0zc3ZMeTV1Ym0wNWNDb2czNUtQYzZUbHY1eTRGeEJ2eTFHOGJBUkJ2QUVDOElUUGxjdGxHQU1RYjhzUnVjMEM4QVFEeEJnRHhCZ0RFR3dBUWJ3QVFiK0FnaDRvQnJlZjF2S0VoaFVLaFZDcHRiMi92N3U3YUdzZUtiYld6czJNN2dIaERPMFd6cjEyNzl2MzMzM3Roa2hOdXJvR0JBZHNCeEJ2YXByeG5aR1JrZkh6YzFqaDV2MlA0OW5RRGlEZTBUWHBoc2EydHJmU09EUUswZ0IxOUFDRGVBSUI0QXdEaURadzVYcUlOeEJ1YUpoM0RMUzFacytJUFRzaHFjL2h2N0t0eHJQYlMwdExFeEVSM2QzY2xNMmw1ZVNwNjVhTE5XTGZPenM3bDVlWHQ3ZTJERDVKaXc4Wm5IVWtQNGczNzh4RE42TzN0WFYxZFBiUXI3OTY5aXk4WUhSM2RWK3RLczhXN3dVZE9LeXNycjErLzdqaGlEMGYzSGxzWXhCdStFb1Bkd01EQTdPenNvV21KYkx4NTgrYnQyN2MyVkhhUG40cDdEbjVxZDNmMzhoN25vQVh4aHEvS0VXK3ZYNzhlZWE3c0ROL1g3NjZ1THBOZnBzTjNqYzhPRHc5M2RuWTZMenFJTjN5bFZDb05EZzRPRFEzTno4OUhwK3NJREZtSWFidTN0M2QwZE5UWURSVVdnTUIvdzNjMCs3dnZ2ak5objZsZlNwaVltT2p2N3hkdkVHODRmUGdlSGg2T2ZrY245UHNzMk5uWkdSa1p1WFhybGw4SGlEY2NPZWZGMjl1M2I5KzRjU05DTGhodEwvZlEwTkM5ZS9jdVhicGs3SVpxbnZPRy94UUtoWWhFc1ZpTVlIUjFkYjE1OCthZlA1SXVmeWF0VnRvek5qWjIvLzc5eTVjdngvdTJDWHgxWjdXNHVIalVHcHdhWTRkbE81enYrVHNkc3pRek0vUHExYXVWbFpYMEVUZjdGbXo1ZVBDVURyai83cnZ2YnQ2OEdaczl5bTNMZzNqbis2N3RxTE42Vlo4d3BQWm5hMXgwRmZzK0d6UDM5dmIyd3NMQzNOemMydHJhNXVhbW5iZVo3dmJvN3U3dTYrdTdmdjM2dDk5K0cvMk9iTnZnRi9iR1lDUFVabjhnSFBsUUtjb2RrOS9vNk9qWTJGaTg3eURqck1YV2puNm5hVHMydUEwQzRnMzFQUHpmM1pOT2UzN3AwaVVEUWFiUzF2WU1ONGczTkNIaDZXamoxUEpqOTh3RFpNMmhZZ0FnM2dDQWVBTUE0ZzBBNGcwQWlEY0FJTjRBSU40QWdIZ0RBT0lOQU9JTkFJZzNBQ0RlQUNEZUFJQjRBd0RpRFFEaURRQ0lOd0FnM2dBZzNnQ0FlQU1BNGcwQTRnMEFpRGNBSU40QUlONEFnSGdEQU9JTkFPSU5BSWczQUNEZUFJQjRBNEI0QXdEaURRQ0lOd0NJTndBZzNnQ0FlQVBBZWRFVi81WEw1VUtoY1BCemgzNndvdkpkNloxNG03N2xxSXUxZnhvQTdPc0xSeWtzTGk0ZTIrbER0Mnc5VithWDBjQk4yVVlBTGtxWnhDS2plSnU4Mi9obzlOZ3RmNnJmUy9WRlY5SGdWYmlKQWkySzk5TFNVaDMzT3ladmt6ZUE0YnRkaXFxUWw5dHh1aWxYM2xaZnJQNzRzWit0Y2RGVk5PVXFBREtQZ3QzbUptOEFrM2ZPdG8vZDV1SU5vTno1VW13a3c2ZmE2K2lYMGVCTjJUNXRWK0VxWE1WRnVJcTBzNWJhN0RZM2VRTVl2dk0yZWRlM2dWSkxVdityMDFMam92eVl2QzFZQTJoT0ZFemVKbThBay9lRmlMY0ZhK0lOb054dDIwVDFyVFkzZWJjcjRVNS81Z3hyQUhhYm03d0JETjg1VStkTGdscXcxdnJic2RWa0Zxd0JOQlJ2eDNrRFFOc21PbWRZeXdYN0xZQUxWQ2F4T0hieWx1RzgzSlR0MDNZVnJzSlZPTU1henJCbThnWXdmT2R6KzlodEx0NEE0cDB2WHBna043ZGpPOWFzTmdmNGNuZmtER3NtYndCamQ4NDJVU05uV1BQN2FIM0NuZjdNR2RZQUxGZ3plUU1Zdmk5R3ZPMDJGMjhBOFRaNWM5SnRicCsyM2ViQVJZKzNROFZNM2dERzdnczBlZnQ5bUx4ZGhja2J5Rm04N1RZM2VRTVl2dHV3ZmV3MkYyOEE1VFo1bTd3elRMaDkybmFiQXpoVXpPUU5ZUExPMnlaeWhqV1R0OG5iNUExY2lNbTd3MjV6a3plQTRUdGY4YmJiWEx3QmxOdmt6VW0zdVgzYWRwc0Q0aTNlSm04QXczZWVGQnRwU1hsUGRWcHFYSlNmQm0vSDZhWmNlVnQ5c2ZyangzNjJ4a1ZYMFpTckFEQjVZL0lHVE41OHZYMmNZVTI4QVpUYjVHM3l6akRoVnBOWnNBWWczaVp2QU1OM3poVHIyMEFXckxYK2RtdzFtUVZyQUNadmt6ZUF5ZnNpeGR1Q05mRUdVTzYyYmFKR1hwakU1TjM2aEZ0TlpzRWFnTjNtSm04QXczZk9PTU5hYm03SFZwTlpzQWJRVUx6cnVPOXoxd1lBelpub25HRXRGK3kzQUM1UW1jVGkyRTNVeUhQZWZoK3RUN2pWWkJhc0FWaXdadklHTUh6bmJmdlliUzdlQU9LZEw4VkdNbXpCV2l0dng1YUNXMjBPOE9YdXlCbldUTjRBeHU2Y2JhSkd6ckRtOTlINmhGdE5ac0VhZ0FWckptOEF3L2ZGaUxmZDV1SU5vTndtYjA2NnplM1R0dHNjdU9qeGRxaVl5UnZBOEowdlJWWEl5KzNZY1Z3T0ZRUDRjbmRrdDduSkc4RGtuYlB0WTdlNWVBTW90OG5iNUoxaHdxMG1zMkFOd0tGaUptOEF3M2ZPRkcyZ3ZOeU9yU2F6WUEyZ29jbTd3MjV6a3plQXlUdGY4YmJiWEx3QmxOdmt6VW0zdWRWa0Zxd0I0aTNlSm04QXczZWVGQnRwU1hsUGRWcHFYSlNmQm0vSFZwTlpzQVpnOGpaNUE1aTg4N2w5bkdGTnZBR1UyK1J0OHM0dzRWYVRXYkFHSU40bWJ3RERkODdVZVlZMUM5WmFmenUybXN5Q05ZQXY4VzdrMmV0VDNmZTVhOFBlRVlEbVRIVE9zQ1lNQUdlclRHSng3Q2FxYjdWNWgrZTgyNVJ3cThrc1dBT3dZTTNrRFdENHZoanh0dHRjdkFIRXUxMktqV3hXQzlaYWVUdTJGTnhxYzRBdmQwZk9zR2J5QmpCMjUyd1ROZktjdDk5SDZ4TnVOWmtGYXdBV3JKbThBUXpmZWRzK2RwdUxONEJ5NTRzenJPWG1wbXcxbVFWcllGemh5OTJSUThYY2xBRk0zam1idk92YlJyYXN5ZHRWdUFwWDRTcXl1SXEwVElyYS9pL0FBTzdjK1Q4eXVZdk5BQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQge3NlcnZpY2VzfSBmcm9tICdTZXJ2aWNlcy9zZXJ2aWNlcyc7XHJcbmltcG9ydCBDb25zdGFudCBmcm9tICdDb25maWcvY29uc3RhbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChwYXJhbXMpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlcy5nZXQoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBBUElfSE9TVDogQ29uc3RhbnQuQVBJX0hPU1QgKyAncG9zdC9jYXRlZ29yeSd9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3QocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gc2VydmljZXMuZ2V0TGlzdCh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIEFQSV9IT1NUOiBDb25zdGFudC5BUElfSE9TVCArICdwb3N0L2NhdGVnb3J5J30pO1xyXG59IiwiaW1wb3J0IHtzZXJ2aWNlc30gZnJvbSAnU2VydmljZXMvc2VydmljZXMnO1xyXG5pbXBvcnQgQ29uc3RhbnQgZnJvbSAnQ29uZmlnL2NvbnN0YW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gc2VydmljZXMuZ2V0KHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgQVBJX0hPU1Q6IENvbnN0YW50LkFQSV9IT1NUICsgJ3Bvc3QvdGFncyd9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3QocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gc2VydmljZXMuZ2V0TGlzdCh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIEFQSV9IT1NUOiBDb25zdGFudC5BUElfSE9TVCArICdwb3N0L3RhZ3MnfSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ2NvbmZpZycsIGNvbmZpZylcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuICAgIGdldDogZnVuY3Rpb24gZ2V0KHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyYW1zLmlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9IT1NUICsgJy8nICsgcGFyYW1zLmlkLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldExpc3Q6IGZ1bmN0aW9uIGdldExpc3QocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuQVBJX0hPU1QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFQSV9IT1NUID0gcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX0hPU1QsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5BUElfSE9TVCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgQVBJX0hPU1QgPSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX0hPU1QsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5BUElfSE9TVCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmFtcy5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgQVBJX0hPU1QgPSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dChBUElfSE9TVCArICcvJyArIHBhcmFtcy5pZCwgcGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbDogZnVuY3Rpb24gZGVsKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyYW1zLmlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKEFQSV9IT1NUICsgJy8nICsgcGFyYW1zLmlkLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IENvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5jb25zdCB0aXRsZSA9ICdN4bq5byBW4bq3dCBIYXkgLSBDw6FjIG3hurlvIHbhurd0IGhheSB0cm9uZyBjdeG7mWMgc+G7kW5nIC0gbWVvdmF0aGF5LnZuJztcclxuY29uc3QgZGVzY3JpcHRpb24gPSAnTeG6uW8gduG6t3QsIMSR4buNYyBiw6FvLCBjaGlhIHPhursgbeG6uW8gduG6t3QgaGF5LiBN4bq5byB24bq3dCBjdeG7mWMgc+G7kW5nLCBt4bq5byB24bq3dCBsw6BtIMSR4bq5cCwgbeG6uW8gduG6t3QgaMOgbmcgbmfDoHksIHZpZGVvIG3hurlvIHbhurd0Lic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHByb2ZpbGVVc2VyOiBudWxsLFxyXG4gICAgaGVhZGVyTWVudTogW10sXHJcbiAgICBkb2N1bWVudDoge1xyXG4gICAgICAgIGRlZmF1bHRUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVmYXVsdERlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgb2c6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl3b3JkczogW11cclxuICAgIH0sXHJcbiAgICBhcnRpY2xlU3RydWN0dXJlOiB7XHJcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcclxuICAgICAgICAnQHR5cGUnOiAnTmV3c0FydGljbGUnLFxyXG4gICAgICAgICdtYWluRW50aXR5T2ZQYWdlJzoge1xyXG4gICAgICAgICAgICAnQHR5cGUnOiAnV2ViUGFnZScsXHJcbiAgICAgICAgICAgICdAaWQnOiAnaHR0cHM6Ly92bmV4cHJlc3MubmV0L3RydW1wLWR1LWtpZW4tcm9pLXdhc2hpbmd0b24tdHJ1b2Mta2hpLWJpZGVuLW5oYW0tY2h1Yy00MjIxODY2Lmh0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaGVhZGxpbmUnOiAnJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnJyxcclxuICAgICAgICAnaW1hZ2UnOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdJbWFnZU9iamVjdCcsXHJcbiAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly92Y2RuMS12bmV4cHJlc3Mudm5lY2RuLm5ldC8yMDIxLzAxLzE2Lzg2MDI2LTEtMTYxMDc1Njg5NS0xNjEwNzU2OTE2LTcyNjktMTYxMDc1NzE1OS5qcGc/dz05MDAmaD01NDAmcT0xMDAmZHByPTEmZml0PWNyb3Amcz1KeEVoV0pkQnBiU2Q1X0xKWXRoMzB3JyxcclxuICAgICAgICAgICAgJ3dpZHRoJzogNTAwLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGF0ZVB1Ymxpc2hlZCc6ICcyMDIxLTAxLTE2VDA3OjMzOjEwKzA3OjAwJyxcclxuICAgICAgICAnZGF0ZU1vZGlmaWVkJzogJzIwMjEtMDEtMTZUMDc6MzQ6MTErMDc6MDAnLFxyXG4gICAgICAgICdhdXRob3InOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxyXG4gICAgICAgICAgICAnbmFtZSc6ICdWbkV4cHJlc3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncHVibGlzaGVyJzoge1xyXG4gICAgICAgICAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcclxuICAgICAgICAgICAgJ25hbWUnOiAnVm5FeHByZXNzJyxcclxuICAgICAgICAgICAgJ2xvZ28nOiB7XHJcbiAgICAgICAgICAgICAgICAnQHR5cGUnOiAnSW1hZ2VPYmplY3QnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL3MxY2RuLnZuZWNkbi5uZXQvdm5leHByZXNzL3Jlc3RydWN0L2kvdjM3MS9sb2dvcy92bmV4cHJlc3NfNTAweDExMC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNTAwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IDExMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYWJvdXQnOiBbXHJcbiAgICAgICAgICAgICdC4bqndSBj4butIFThu5VuZyB0aOG7kW5nIE3hu7knLFxyXG4gICAgICAgICAgICAnRG9uYWxkIFRydW1wJyxcclxuICAgICAgICAgICAgJ0Lhuqd1IGPhu60gVOG7lW5nIHRo4buRbmcgTeG7uScsXHJcbiAgICAgICAgICAgICdUaW4nLFxyXG4gICAgICAgICAgICAnVGluIG7Ds25nJ1xyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBicmVhZGNydW1iU3RydWN0dXJlOiB7XHJcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcclxuICAgICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxyXG4gICAgICAgICdpdGVtTGlzdEVsZW1lbnQnOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAxLFxyXG4gICAgICAgICAgICAgICAgJ2l0ZW0nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IENvbnN0YW50LlNJVEVfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1RpbiB04bupYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEFjdGlvbiB0eXBlXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIFNFVF9IRUFERVJfTUVOVTogJ1NFVF9IRUFERVJfTUVOVScsXHJcbiAgICBVUERBVEVfRE9DVU1FTlQ6ICdVUERBVEVfRE9DVU1FTlQnLFxyXG4gICAgVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFOiAnVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFJyxcclxuICAgIFVQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRTogJ1VQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRScsXHJcbiAgICBTRVRfVE9LRU46ICdTRVRfVE9LRU4nLFxyXG4gICAgU0VUX1BST0ZJTEVfVVNFUjogJ1NFVF9QUk9GSUxFX1VTRVInXHJcbn07XHJcblxyXG4vLyBBY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9UT0tFTixcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFByb2ZpbGVVc2VyID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1BST0ZJTEVfVVNFUixcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEhlYWRlck1lbnUgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfSEVBREVSX01FTlUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVEb2N1bWVudCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9ET0NVTUVOVCxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFydGljbGVTdHJ1Y3R1cmUgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQVJUSUNMRV9TVFJVQ1RVUkUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVCcmVhZGNydW1iU3RydWN0dXJlID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVE9LRU46XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfUFJPRklMRV9VU0VSOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VyOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0hFQURFUl9NRU5VOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1lbnU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfRE9DVU1FTlQ6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYXJ0aWNsZVN0cnVjdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQlJFQURDUlVNQl9TVFJVQ1RVUkU6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5pdGVtTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYnJlYWRjcnVtYlN0cnVjdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3RFbGVtZW50OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5pdGVtTGlzdEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlIChpbml0aWFsU3RhdGUpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoKVxyXG4gICAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxhenlzaXplc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=