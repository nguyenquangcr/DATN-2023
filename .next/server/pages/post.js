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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post.jsx");
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

/***/ "./components/SimilarNewsWidget/index.jsx":
/*!************************************************!*\
  !*** ./components/SimilarNewsWidget/index.jsx ***!
  \************************************************/
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SimilarNewsWidget/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\meovathay\\application\\components\\SimilarNewsWidget\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Assets



function SimilarCategoryNews(props) {
  let posts = props.posts || [];

  if (posts.length) {
    posts = posts.map(post => {
      if (post.pid) {
        if (post.images && post.images.medium) {
          post.background = post.images.medium;
        }
      }

      return post;
    });
  }

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['similar-news']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, props.title), __jsx("ul", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['posts'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['rows'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['space-between']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, Array.isArray(posts) && posts.map((post, key) => {
    if (key < props.number) {
      return __jsx("li", {
        key: key,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['post'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['card']),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 33
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/post?slug=' + post.slug + '&pid=' + post.pid,
        as: '/' + post.slug + '-p' + post.pid + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 37
        }
      }, __jsx("a", {
        title: post.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 41
        }
      }, __jsx(Components_ProgressiveMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
        thumb: post.thumb,
        src: post.background,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 45
        }
      }))), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['post-header'], 'pt-10'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/post?slug=' + post.slug + '&pid=' + post.pid,
        as: '/' + post.slug + '-p' + post.pid + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['title'],
        title: post.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 45
        }
      }, post.title))));
    }
  }))));
}

const defaultProps = {
  className: '',
  title: 'BÀI VIẾT LIÊN QUAN',
  number: 3,
  posts: [{
    pid: 123,
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
    pid: 123,
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
    pid: 123,
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
SimilarCategoryNews.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (SimilarCategoryNews);

/***/ }),

/***/ "./components/SimilarNewsWidget/styles.module.scss":
/*!*********************************************************!*\
  !*** ./components/SimilarNewsWidget/styles.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"similar-news": "similar-news___lxgP2",
	"rows": "rows___2MpWy",
	"space-between": "space-between___1P9HG",
	"card": "card___1knMX",
	"card-description": "card-description___jj4Zt",
	"header": "header___3jC9-",
	"posts": "posts___fbIwO",
	"post": "post___10Ntu",
	"post-header": "post-header___2eIDh",
	"title": "title___1JI8d"
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

/***/ "./modules/Pages/Post/styles.module.scss":
/*!***********************************************!*\
  !*** ./modules/Pages/Post/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___h-BZo",
	"container-body": "container-body___2GENI",
	"post-wrapper": "post-wrapper___2DFkn",
	"post-title": "post-title___3RG2C",
	"meta-source": "meta-source___1L3AS",
	"source": "source___1h8ie",
	"time": "time___2YGne",
	"socials": "socials___1Me1u",
	"post-content": "post-content___2gQ8f",
	"post-menu-navbar": "post-menu-navbar___njKK_",
	"go-to-comments": "go-to-comments___29lX0",
	"go-to-home": "go-to-home___1C_8M",
	"share-facebook": "share-facebook___a1WTM",
	"go-back": "go-back___1iASf",
	"post-description": "post-description___88m7f",
	"post-background": "post-background___2GaZh",
	"post-container": "post-container___2i8gz",
	"attachment-center": "attachment-center___1JJFC",
	"attachment-image": "attachment-image___34PyP",
	"post-source": "post-source___3wa4P",
	"post-share": "post-share___3ne54",
	"post-similar": "post-similar___2s6-j",
	"post-tags": "post-tags___3SDlw",
	"post-comments": "post-comments___3GNAB",
	"title": "title___2hMET",
	"content": "content___1hn7y",
	"post-related": "post-related___13J-H",
	"post-related-title": "post-related-title___2nGmS",
	"post-not-found": "post-not-found___1H1k2",
	"go-back-to-home": "go-back-to-home___Vrg3E"
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

/***/ "./pages/post.jsx":
/*!************************!*\
  !*** ./pages/post.jsx ***!
  \************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-images */ "react-images");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/HorizontalWidget */ "./components/HorizontalWidget/index.jsx");
/* harmony import */ var Components_SidebarNewsWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/SidebarNewsWidget */ "./components/SidebarNewsWidget/index.jsx");
/* harmony import */ var Components_SimilarNewsWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/SimilarNewsWidget */ "./components/SimilarNewsWidget/index.jsx");
/* harmony import */ var Components_SidebarHighlightWidget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Components/SidebarHighlightWidget */ "./components/SidebarHighlightWidget/index.jsx");
/* harmony import */ var Services_Post_Info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Services/Post/Info */ "./services/Post/Info.js");
/* harmony import */ var Services_Post_Category__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Services/Post/Category */ "./services/Post/Category.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Static/images/error-404.jpg */ "./public/images/error-404.jpg");
/* harmony import */ var Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Modules/Pages/Post/styles.module.scss */ "./modules/Pages/Post/styles.module.scss");
/* harmony import */ var Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");
/* harmony import */ var Libs_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Libs/utils */ "./libs/utils.js");


var _jsxFileName = "E:\\meovathay\\application\\pages\\post.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // Components




 // Services


 // Actions

 // Assets


 // Utils



const PATH = 'application/pages/post.jsx';

class Post extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static getInitialProps({
    reduxStore,
    query,
    req
  }) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
      try {
        let states = reduxStore.getState();
        let pid = '';
        let slug = '';
        let menus = [];
        let post = {};
        let arrPostTagId = [];
        let similarPosts = []; // Check post detail

        if (query && query.slug && query.pid) {
          pid = query.pid;
          slug = query.slug;
          let postService = Services_Post_Info__WEBPACK_IMPORTED_MODULE_11__["get"]({
            id: query.pid,
            slug: query.slug
          });

          if (postService) {
            yield postService.then(response => {
              if (response && response.data && response.data.data && response.data.data.post) {
                post = response.data.data.post; // Set document title

                if (post.title) {
                  let description = post.description ? Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["quoteDoubleToSingle"])(post.description).trim() : '';
                  let images = []; // Find tags of post

                  if (post.tags && post.tags.length) {
                    post.tags.map(tag => {
                      if (tag.id) {
                        arrPostTagId.push(tag.id);
                      }
                    });
                  }

                  if (post.background) {
                    images = [post.background];
                  } else if (post.images && post.images.normal) {
                    images = [post.images.normal];
                  } // Validate images


                  if (images.length) {
                    images = images.map(image => {
                      if (image && image.indexOf('https:') < 0) {
                        return 'https:' + image;
                      }

                      return image;
                    });
                  }

                  let updatedTime = post.time && moment__WEBPACK_IMPORTED_MODULE_5___default()(post.time, 'YYYY-MM-DD HH:mm:ss').format(); // Update document metadata

                  reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["updateDocument"])({
                    canonical: post.href,
                    alternate: post.href ? post.href.replace('meovathay.vn', 'm.meovathay.vn') : '',
                    title: post.title,
                    og: {
                      title: post.title,
                      description: description,
                      images: images,
                      updatedTime: updatedTime,
                      url: post.href,
                      tags: post.tags || []
                    }
                  })); // Update Breadcrumb structured data

                  if (Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["getObjectPropSafely"])(() => post.category.name) && Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["getObjectPropSafely"])(() => post.category.shorten)) {
                    const {
                      name,
                      shorten = '',
                      id: cid
                    } = post.category;
                    const breadcrumbItem = {
                      '@type': 'ListItem',
                      'position': 1,
                      'item': {
                        '@id': Config_constant__WEBPACK_IMPORTED_MODULE_16__["default"].SITE_URL + shorten + '-c' + cid + '.html',
                        'name': name
                      }
                    };
                    reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["updateBreadcrumbStructure"])({
                      itemListElement: [breadcrumbItem]
                    }));
                  }
                } // Menus


                if (states && states.headerMenu) {
                  const headerMenu = states.headerMenu;
                  const {
                    id: cid
                  } = post.category;
                  headerMenu.map(menu => {
                    // Update header menu active
                    menu.active = menu.id === +cid;

                    if (menu.id === +cid) {
                      // Set menus info
                      menus = _objectSpread(_objectSpread({}, menu), {}, {
                        active: true
                      });
                    } else if (menu.child) {
                      menu.child.map(childMenu => {
                        const active = childMenu.id === +cid;
                        childMenu.active = active;

                        if (active) {
                          // Set menus info
                          menus = _objectSpread({}, menu);
                        }
                      });
                    }
                  });
                  reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["setHeaderMenu"])(headerMenu));
                }
              }
            });
          } // similar posts


          let filters = [{
            'pid': {
              'does_not_matches_any': pid
            },
            'tags.id': {
              'matches_any': arrPostTagId.join(',')
            }
          }];
          let getSimilarPosts = Services_Post_Category__WEBPACK_IMPORTED_MODULE_12__["getList"]({
            filters: JSON.stringify(filters),
            type: 'latest',
            limit: 15,
            page: 1
          });

          if (getSimilarPosts) {
            yield getSimilarPosts.then(response => {
              if (response && response.data && response.data.data && response.data.data.posts) {
                similarPosts = response.data.data.posts;
              }
            });
          }
        }

        return {
          menus,
          pid,
          slug,
          post,
          similarPosts
        };
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleImages", () => {
      try {
        if (this.myRef && this.myRef.current) {
          let images = []; // Attachment images

          let attachmentFigure = this.myRef.current.getElementsByTagName('figure');

          if (attachmentFigure && attachmentFigure.length) {
            for (let i = 0; i < attachmentFigure.length; i++) {
              if (attachmentFigure[i].classList.contains('attachment-image') || attachmentFigure[i].classList.contains('attachment-album-item')) {
                let image = attachmentFigure[i].getElementsByTagName('img');

                if (image && image.length) {
                  let src = image[0].getAttribute('data-src');

                  if (!src) {
                    src = image[0].getAttribute('src');
                  }

                  let alt = image[0].getAttribute('alt');
                  image[0].addEventListener('click', () => {
                    this.setState({
                      lightbox: _objectSpread(_objectSpread({}, this.state.lightbox), {}, {
                        isOpen: true,
                        photoIndex: i
                      })
                    });
                  });

                  if (src) {
                    images.push({
                      src: src,
                      title: alt
                    });
                  }
                }
              }
            }
          }

          if (images.length) {
            this.setState({
              lightbox: _objectSpread(_objectSpread({}, this.state.lightbox), {}, {
                photos: images
              })
            });
          } // Attachment album


          let attachmentAlbums = this.myRef.current.getElementsByClassName('attachment-album');

          if (attachmentAlbums && attachmentAlbums.length) {
            for (let i = 0; i < attachmentAlbums.length; i++) {
              let attachmentAlbumRow = attachmentAlbums[i].getElementsByClassName('attachment-album-row');

              if (attachmentAlbumRow.length) {
                for (let j = 0; j < attachmentAlbumRow.length; j++) {
                  this.handleAlbumDimensions(attachmentAlbumRow);
                }
              }
            }
          }
        }
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'handleImages',
          path: PATH,
          args: {}
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleAlbumDimensions", albumRow => {
      try {
        if (albumRow && albumRow.length) {
          for (let i = 0; i < albumRow.length; i++) {
            let albumHeight = albumRow[i].getAttribute('height');
            let images = albumRow[i].getElementsByTagName('img');
            let intervalTime = [];
            let intervalCount = 0;

            if (!albumHeight && images.length) {
              intervalTime[i] = setInterval(() => {
                intervalCount++;
                let minHeight = 0; // Clear interval

                if (intervalCount > 10) {
                  clearInterval(intervalTime[i]);
                }

                for (let j = 0; j < images.length; j++) {
                  if (images[j].complete) {
                    clearInterval(intervalTime[i]);

                    if (minHeight <= 0 || minHeight > images[j].height) {
                      minHeight = +images[j].height;
                    }
                  }
                }

                if (minHeight > 0) {
                  albumRow[i].setAttribute('height', minHeight + 'px');
                  albumRow[i].style.height = minHeight + 'px';
                }
              }, 500);
            }
          }
        }
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'handleAlbumDimensions',
          path: PATH,
          args: {}
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getLatestPosts", () => {
      try {
        const {
          category
        } = this.props.post;
        const {
          shorten
        } = category;

        if (shorten) {
          let filters = [{
            'pid': {
              'does_not_matches_any': this.props.pid
            }
          }];
          let getPosts = Services_Post_Category__WEBPACK_IMPORTED_MODULE_12__["getList"]({
            filters: JSON.stringify(filters),
            type: 'latest',
            page: 1
          });

          if (getPosts) {
            getPosts.then(response => {
              if (response && response.data && response.data.data && response.data.data.posts) {
                let posts = response.data.data.posts;
                this.setState({
                  latestPosts: posts
                });
              }
            });
          }
        }
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'getLatestPosts',
          path: PATH,
          args: {}
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCategorySimilarPosts", () => {
      try {
        const {
          category
        } = this.props.post;
        const {
          shorten
        } = category;

        if (shorten) {
          let filters = [{
            'pid': {
              'does_not_matches_any': this.props.pid
            }
          }];
          let getPosts = Services_Post_Category__WEBPACK_IMPORTED_MODULE_12__["getList"]({
            filters: JSON.stringify(filters),
            slug: shorten,
            type: 'latest',
            page: 1
          });

          if (getPosts) {
            getPosts.then(response => {
              if (response && response.data && response.data.data && response.data.data.posts) {
                let posts = response.data.data.posts;
                this.setState({
                  categorySimilarPosts: posts
                });
              }
            });
          }
        }
      } catch (error) {
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'getCategorySimilarPosts',
          path: PATH,
          args: {}
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onCloseLightbox", () => {
      try {
        this.setState({
          lightbox: _objectSpread(_objectSpread({}, this.state.lightbox), {}, {
            isOpen: false
          })
        });
      } catch (error) {
        // Error
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'onCloseLightbox',
          path: PATH,
          args: {}
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "renderSubMenu", () => {
      try {
        const {
          menus = {},
          post
        } = this.props;
        let arrMenus = [{
          id: menus.id,
          name: menus.name,
          slug: menus.slug,
          active: post.category && post.category.id && menus.id === post.category.id
        }];

        if (menus.child && menus.child.length) {
          arrMenus = arrMenus.concat(menus.child);
        }

        if (arrMenus && arrMenus.length) {
          return __jsx("ul", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 21
            }
          }, arrMenus.map(menu => {
            return __jsx("li", {
              key: menu.id,
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                'active': menu.active
              }),
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 522,
                columnNumber: 37
              }
            }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: '/category-by-id?slug=' + menu.slug + '&cid=' + menu.id,
              as: '/' + menu.slug + '-c' + menu.id + '.html',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 523,
                columnNumber: 41
              }
            }, __jsx("a", {
              title: menu.name,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 524,
                columnNumber: 45
              }
            }, menu.name)));
          }));
        }

        return null;
      } catch (error) {
        Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
          actionName: 'renderSubMenu',
          path: PATH,
          args: {}
        });
      }
    });

    this.state = {
      pid: props.pid,
      slug: props.slug,
      isShowBackground: false,
      // Show background when post content not exist image element
      latestPosts: [],
      categorySimilarPosts: [],
      lightbox: {
        isOpen: false,
        photoIndex: 0
      }
    };
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  componentDidMount() {
    try {
      this.handleImages(); // Latest posts

      this.getLatestPosts(); // Latest category similar posts

      this.getCategorySimilarPosts();
    } catch (error) {
      // Error
      Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
        actionName: 'componentDidMount',
        path: PATH,
        args: {}
      });
    }
  }

  componentDidUpdate() {
    try {
      if (this.props.pid !== this.state.pid && this.props.slug !== this.state.slug) {
        this.setState({
          pid: this.props.pid,
          slug: this.props.slug
        }, () => {
          this.handleImages(); // Latest posts

          this.getLatestPosts(); // Latest category similar posts

          this.getCategorySimilarPosts();
        });
      }
    } catch (error) {
      Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
        actionName: 'componentDidUpdate',
        path: PATH,
        args: {}
      });
    }
  }

  componentDidCatch(error, errorInfo) {
    // Error
    Object(Libs_utils__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, {
      actionName: 'componentDidCatch',
      path: PATH,
      args: {
        errorInfo
      }
    });
  }

  render() {
    const {
      similarPosts,
      post = {}
    } = this.props;
    let {
      isOpen,
      photoIndex,
      photos
    } = this.state.lightbox;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 13
      }
    }, __jsx("div", {
      ref: this.myRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('container', Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['container']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 17
      }
    }, post && post.title ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "sub-navbar",
      style: {
        background: '#fff'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('clearfix w1040'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 37
      }
    }, this.renderSubMenu())), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['container-body'], 'container-body clearfix w1040'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('clearfix w1040'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-wrapper'], 'container-left fl w720'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 41
      }
    }, __jsx("h1", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-title']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 45
      }
    }, post.title), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['meta-source']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 45
      }
    }, __jsx("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['source']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 49
      }
    }, "THEO ", post.sourceName ? post.sourceName : 'VNEXPRESS'), __jsx("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['time']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 49
      }
    }, __jsx("i", {
      className: "fa fa-clock-o",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 93
      }
    }), " ", post.time ? moment__WEBPACK_IMPORTED_MODULE_5___default()(post.time, 'YYYY-MM-DD HH:mm:ss').format('DD-MM-YYYY HH:mm:ss') : '21-09-2019 12:27:40')), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['socials']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 45
      }
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-content'], 'post-content'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-menu-navbar']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['go-to-home']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 53
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 57
      }
    }, __jsx("a", {
      title: "Trang ch\u1EE7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 61
      }
    }, __jsx("span", {
      className: "icon-home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 65
      }
    })))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['share-facebook']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 53
      }
    }, __jsx("a", {
      ref: 'nofollow',
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Chia s\u1EBB b\xE0i vi\u1EBFt l\xEAn Facebook",
      href: 'https://www.facebook.com/sharer/sharer.php?u=' + post.href,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 57
      }
    }, __jsx("span", {
      className: "icon-facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 61
      }
    }))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['go-back']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 53
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/category-by-id?slug=' + post.category.shorten + '&cid=' + post.category.id,
      as: '/' + post.category.shorten + '-c' + post.category.id + '.html',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 57
      }
    }, __jsx("a", {
      title: post.category ? 'Trở về ' + post.category.name : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 61
      }
    }, __jsx("span", {
      className: "icon-undo2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 65
      }
    }))))), __jsx("h2", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-description']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 49
      }
    }, post.description), this.state.isShowBackground && post.background ? __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-background']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 57
      }
    }, __jsx("img", {
      alt: post.title,
      src: post.background,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 61
      }
    })) : null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-container']),
      dangerouslySetInnerHTML: {
        __html: post.content
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 49
      }
    }), __jsx("div", {
      className: "clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-source']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 53
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 57
      }
    }, "Theo ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 67
      }
    }, post.sourceName ? post.sourceName : 'VNEXPRESS'))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-share']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 53
      }
    }))), post.tags && post.tags.length ? __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-tags'], 'clearfix'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 53
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 57
      }
    }, post.tags.map((tag, index) => {
      return __jsx("li", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 73
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: '/tag?slug=' + tag.slug,
        as: '/' + tag.slug + '.html',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 77
        }
      }, __jsx("a", {
        title: tag.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 81
        }
      }, "#", tag.name)));
    }))) : null), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('container-right col-sticky fr mt-20 w300'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 41
      }
    }, similarPosts && similarPosts.length ? __jsx(Components_SidebarHighlightWidget__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: this.props.post.pid,
      className: "col-sticky",
      title: "B\xE0i vi\u1EBFt li\xEAn quan",
      background: 'normal',
      posts: similarPosts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 53
      }
    }) : null)), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('clearfix w1040'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-wrapper'], 'container-left fl w720'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-related']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 45
      }
    }, similarPosts.length >= 4 ? __jsx(Components_SimilarNewsWidget__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: this.props.post.pid,
      title: "B\xE0i vi\u1EBFt li\xEAn quan",
      background: 'normal',
      posts: similarPosts.filter((post, key) => key > 0),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 57
      }
    }) : null, this.state.categorySimilarPosts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-related-title']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 61
      }
    }, "Tin m\u1EDBi c\xF9ng chuy\xEAn m\u1EE5c"), __jsx(Components_HorizontalWidget__WEBPACK_IMPORTED_MODULE_7__["default"], {
      skeletonLoading: !this.state.categorySimilarPosts.length,
      background: 'normal',
      posts: this.state.categorySimilarPosts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 61
      }
    })) : null)), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('container-right col-sticky fr mt-20 w300'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 41
      }
    }, __jsx(Components_SidebarNewsWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
      skeletonLoading: !this.state.latestPosts.length,
      title: "B\xE0i vi\u1EBFt m\u1EDBi nh\u1EA5t",
      background: 'medium',
      posts: this.state.latestPosts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 45
      }
    })))), __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["ModalGateway"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 33
      }
    }, isOpen ? __jsx(react_images__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
      onClose: this.onCloseLightbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 45
      }
    }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_6___default.a, {
      currentIndex: photoIndex,
      views: photos.map(x => _objectSpread(_objectSpread({}, x), {}, {
        srcset: x.srcSet,
        caption: x.title
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 49
      }
    })) : null)) : __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['post-not-found'], 'w1040'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 29
      }
    }, __jsx("img", {
      alt: "Page not found",
      src: Static_images_error_404_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 33
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 33
      }
    }, "Xin l\u1ED7i b\u1EA1n, ch\xFAng t\xF4i kh\xF4ng t\xECm th\u1EA5y b\xE0i vi\u1EBFt n\xE0y. ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 88
      }
    }), " M\u1EDDi b\u1EA1n quay v\u1EC1 trang ch\u1EE7 \u0111\u1EC3 xem nh\u1EEFng tin t\u1EE9c m\u1EDBi nh\u1EA5t."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 33
      }
    }, __jsx("a", {
      title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Modules_Pages_Post_styles_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a['go-back-to-home']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 37
      }
    }, "Tr\u1EDF v\u1EC1 trang ch\u1EE7")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Post);

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

/***/ "./services/Post/Info.js":
/*!*******************************!*\
  !*** ./services/Post/Info.js ***!
  \*******************************/
/*! exports provided: get, getList, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Services/services */ "./services/services.js");
/* harmony import */ var Config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Config/constant */ "./config/constant.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function get(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].get(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/info'
  }));
}
function getList(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].getList(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/info'
  }));
}
function create(params) {
  return Services_services__WEBPACK_IMPORTED_MODULE_1__["services"].create(_objectSpread(_objectSpread({}, params), {}, {
    API_HOST: Config_constant__WEBPACK_IMPORTED_MODULE_2__["default"].API_HOST + 'post/info'
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

/***/ "react-images":
/*!*******************************!*\
  !*** external "react-images" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-images");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvcml6b250YWxXaWRnZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFdpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU1lZGlhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhckhpZ2hsaWdodFdpZGdldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFySGlnaGxpZ2h0V2lkZ2V0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJOZXdzV2lkZ2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJOZXdzV2lkZ2V0L3NpZGViYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW1pbGFyTmV3c1dpZGdldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW1pbGFyTmV3c1dpZGdldC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL1BhZ2VzL1Bvc3Qvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9lcnJvci00MDQuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvbm8taW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1Bvc3QvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUG9zdC9JbmZvLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxhenlzaXplc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxhenlzaXplcy9wbHVnaW5zL3BhcmVudC1maXQvbHMucGFyZW50LWZpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIkhvcml6b250YWxXaWRnZXQiLCJwcm9wcyIsInBvc3RzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsInRpbWUiLCJmb3JtYXRUaW1lIiwic3RyaW5nIiwicmVjZW50IiwiYmFja2dyb3VuZCIsImdldFBvc3RJbWFnZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJpc1NtYWxsTGF5b3V0IiwiY2xhc3NOYW1lIiwic2tlbGV0b25Mb2FkaW5nIiwia2V5IiwibnVtYmVyIiwiaXNSb3dSZXZlcnNlIiwicGlkIiwic2x1ZyIsInRpdGxlIiwidGh1bWIiLCJpc1Nob3dDYXRlZ29yeSIsImNhdGVnb3J5Iiwic2hvcnRlbiIsImlkIiwiaXNTaG93RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIkFycmF5Iiwic2tlbGV0b25OdW1iZXIiLCJmaWxsIiwiZXJyb3IiLCJkZWZhdWx0UHJvcHMiLCJocmVmIiwiYWx0IiwiTm9JbWFnZSIsInNyYyIsInNjYWxlT25Ib3ZlciIsIlByb2dyZXNzaXZlTWVkaWEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwibXlSZWYiLCJjcmVhdGVSZWYiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsInBhZGRpbmdCb3R0b20iLCJjbGFzc25hbWVzIiwicG9zdE51bWJlciIsIlNpZGViYXJIaWdobGlnaHRXaWRnZXQiLCJmZWF0dXJlUG9zdCIsImZlYXR1cmVCYWNrZ3JvdW5kIiwic3R5bGUiLCJTaWRlYmFyTmV3c1dpZGdldCIsImlzQXJyYXkiLCJwb3NpdGlvbiIsInRvcCIsIlNpbWlsYXJDYXRlZ29yeU5ld3MiLCJpbWFnZXMiLCJtZWRpdW0iLCJlbnYiLCJwcm9jZXNzIiwiQXBwIiwiZGV2ZWxvcG1lbnQiLCJTSVRFX1VSTCIsIk1PQklMRV9TSVRFX1VSTCIsIkFQSV9IT1NUIiwic2FuZGJveCIsInByb2R1Y3Rpb24iLCJDb25zdGFudCIsIlNUQVRJQ19WRVJTSU9OIiwiS0VZQ09ERSIsIkVOVEVSIiwiU0VBUkNIX1RPX1FVRVJZIiwiUVVFUllfVE9fU0VBUkNIIiwiZm9ybWF0Iiwic2Vjb25kcyIsIm1vbWVudCIsImRpZmYiLCJkdXJhdGlvbiIsInR5cGUiLCJtaW51dGVzIiwiTWF0aCIsInJvdW5kIiwiaG91cnMiLCJxdW90ZURvdWJsZVRvU2luZ2xlIiwibWVzc2FnZSIsInJlcGxhY2UiLCJoYW5kbGVFcnJvciIsInBheWxvYWQiLCJjb25zb2xlIiwiZSIsIm1hcFNlYXJjaEFuZFBhcmFtIiwidmFsdWUiLCJkaXJlY3Rpb24iLCJjb25zdGFudCIsImdldE9iamVjdFByb3BTYWZlbHkiLCJmbiIsImRlZmF1bHRWYWx1ZSIsImd0YWdJbmplY3QiLCJnYUlkIiwiZ2FTY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnb29nbGVBbmFseXRpY3NTb3VyY2UiLCJzMCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXN5bmMiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwid2luZG93IiwiZGF0YUxheWVyIiwiZ3RhZ1RyYWNraW5nRXZlbnQiLCJEYXRlIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiYXJncyIsInRyYWNraW5nIiwicHVzaCIsImFyZ3VtZW50cyIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQQVRIIiwiUG9zdCIsInJlZHV4U3RvcmUiLCJyZXEiLCJzdGF0ZXMiLCJnZXRTdGF0ZSIsIm1lbnVzIiwiYXJyUG9zdFRhZ0lkIiwic2ltaWxhclBvc3RzIiwicG9zdFNlcnZpY2UiLCJQb3N0U2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsInRyaW0iLCJ0YWdzIiwidGFnIiwibm9ybWFsIiwiaW1hZ2UiLCJpbmRleE9mIiwidXBkYXRlZFRpbWUiLCJkaXNwYXRjaCIsInVwZGF0ZURvY3VtZW50IiwiY2Fub25pY2FsIiwiYWx0ZXJuYXRlIiwib2ciLCJjaWQiLCJicmVhZGNydW1iSXRlbSIsInVwZGF0ZUJyZWFkY3J1bWJTdHJ1Y3R1cmUiLCJpdGVtTGlzdEVsZW1lbnQiLCJoZWFkZXJNZW51IiwibWVudSIsImFjdGl2ZSIsImNoaWxkTWVudSIsInNldEhlYWRlck1lbnUiLCJmaWx0ZXJzIiwiam9pbiIsImdldFNpbWlsYXJQb3N0cyIsIlBvc3RDYXRlZ29yeVNlcnZpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwibGltaXQiLCJhY3Rpb25OYW1lIiwiY3VycmVudCIsImF0dGFjaG1lbnRGaWd1cmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsImxpZ2h0Ym94IiwiaXNPcGVuIiwicGhvdG9JbmRleCIsInBob3RvcyIsImF0dGFjaG1lbnRBbGJ1bXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXR0YWNobWVudEFsYnVtUm93IiwiaiIsImhhbmRsZUFsYnVtRGltZW5zaW9ucyIsImFsYnVtUm93IiwiYWxidW1IZWlnaHQiLCJpbnRlcnZhbFRpbWUiLCJpbnRlcnZhbENvdW50Iiwic2V0SW50ZXJ2YWwiLCJtaW5IZWlnaHQiLCJjbGVhckludGVydmFsIiwiY29tcGxldGUiLCJnZXRQb3N0cyIsImxhdGVzdFBvc3RzIiwiY2F0ZWdvcnlTaW1pbGFyUG9zdHMiLCJhcnJNZW51cyIsImNvbmNhdCIsImNsYXNzbmFtZSIsImlzU2hvd0JhY2tncm91bmQiLCJjb21wb25lbnREaWRNb3VudCIsImhhbmRsZUltYWdlcyIsImdldExhdGVzdFBvc3RzIiwiZ2V0Q2F0ZWdvcnlTaW1pbGFyUG9zdHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsInJlbmRlclN1Yk1lbnUiLCJzb3VyY2VOYW1lIiwiX19odG1sIiwiaW5kZXgiLCJmaWx0ZXIiLCJvbkNsb3NlTGlnaHRib3giLCJzcmNzZXQiLCJzcmNTZXQiLCJjYXB0aW9uIiwiUGFnZU5vdEZvdW5kIiwic2VydmljZXMiLCJnZXRMaXN0IiwiY3JlYXRlIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidXBkYXRlIiwicHV0IiwiZGVsIiwiZGVsZXRlIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJwcm9maWxlVXNlciIsImRlZmF1bHRUaXRsZSIsImRlZmF1bHREZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiYXJ0aWNsZVN0cnVjdHVyZSIsImJyZWFkY3J1bWJTdHJ1Y3R1cmUiLCJhY3Rpb25UeXBlcyIsIlNFVF9IRUFERVJfTUVOVSIsIlVQREFURV9ET0NVTUVOVCIsIlVQREFURV9BUlRJQ0xFX1NUUlVDVFVSRSIsIlVQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRSIsIlNFVF9UT0tFTiIsIlNFVF9QUk9GSUxFX1VTRVIiLCJzZXRUb2tlbiIsInNldFByb2ZpbGVVc2VyIiwidXBkYXRlQXJ0aWNsZVN0cnVjdHVyZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJhc3NpZ24iLCJpbml0aWFsaXplU3Rv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QUFqQjtBQUNJLFVBQUlRLE1BQU0sQ0FBQ25mLE9BQVgsRUFBb0I7QUFDaEIsZUFBT2lDLE1BQU0sQ0FBQ21kLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaFAsS0FBbEIsRUFBeUI7QUFDNUJrTywwQkFBZ0Isa0NBQ1RsTyxLQUFLLENBQUNrTyxnQkFERyxHQUVUYSxNQUFNLENBQUNuZixPQUZFO0FBRFksU0FBekIsQ0FBUDtBQU1IOztBQUNELGFBQU9vUSxLQUFQOztBQUNKLFNBQUtvTyxXQUFXLENBQUNJLDJCQUFqQjtBQUNJLFVBQUlPLE1BQU0sQ0FBQ25mLE9BQVAsSUFBa0JtZixNQUFNLENBQUNuZixPQUFQLENBQWVzWixlQUFyQyxFQUFzRDtBQUNsRCxlQUFPclgsTUFBTSxDQUFDbWQsTUFBUCxDQUFjLEVBQWQsRUFBa0JoUCxLQUFsQixFQUF5QjtBQUM1Qm1PLDZCQUFtQixrQ0FDWm5PLEtBQUssQ0FBQ21PLG1CQURNO0FBRWZqRiwyQkFBZSxFQUFFLENBQ2IsR0FBRzZGLE1BQU0sQ0FBQ25mLE9BQVAsQ0FBZXNaLGVBREw7QUFGRjtBQURTLFNBQXpCLENBQVA7QUFRSDs7QUFDRCxhQUFPbEosS0FBUDs7QUFDSjtBQUNJLGFBQU9BLEtBQVA7QUF2RFI7QUF5REgsQ0ExRE07QUE0REEsU0FBU2lQLGVBQVQsQ0FBMEJyQixZQUExQixFQUF3QztBQUMzQyxTQUFPc0IseURBQVcsQ0FDZEosT0FEYyxFQUVkbEIsWUFGYyxFQUdkdUIsNkRBQWUsRUFIRCxDQUFsQjtBQUtILEM7Ozs7Ozs7Ozs7O0FDak1ELGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3QuanN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVNZWRpYSBmcm9tICdDb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEnO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IHtmb3JtYXRUaW1lLCBnZXRQb3N0SW1hZ2V9IGZyb20gJ0xpYnMvdXRpbHMnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gSG9yaXpvbnRhbFdpZGdldChwcm9wcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcG9zdHMgPSBwcm9wcy5wb3N0cyB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZm9ybWF0IHRpbWVcclxuICAgICAgICAgICAgcG9zdHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QudGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXQgdGltZSB0byBkaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gZm9ybWF0VGltZShwb3N0LnRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSAmJiB0aW1lLnN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5yZWNlbnQgPSB0aW1lLnN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5iYWNrZ3JvdW5kID0gZ2V0UG9zdEltYWdlKHBvc3QsIHByb3BzLmJhY2tncm91bmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snaG9yaXpvbnRhbC1uZXdzJ10sIHByb3BzLmlzU21hbGxMYXlvdXQgJiYgc3R5bGVzWydob3Jpem9udGFsLXNtYWxsJ10sIHByb3BzLmNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9wcy5za2VsZXRvbkxvYWRpbmcgJiYgcG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgKyAxID4gcHJvcHMubnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMocHJvcHMuaXNSb3dSZXZlcnNlICYmIHN0eWxlc1sncm93LXJldmVyc2UnXSwgJ2NsZWFyZml4Jyl9IGtleT17cG9zdC5waWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snbGVmdCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NpdmVNZWRpYSBhbHQ9e3Bvc3QudGl0bGV9IHRodW1iPXtwb3N0LnRodW1ifSBzcmM9e3Bvc3QuYmFja2dyb3VuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3JpZ2h0J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtwb3N0LnRpdGxlfT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmlzU2hvd0NhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21ldGEnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2F0ZWdvcnktYnktaWQ/c2x1Zz0nICsgcG9zdC5jYXRlZ29yeS5zaG9ydGVuICsgJyZjaWQ9JyArIHBvc3QuY2F0ZWdvcnkuaWR9IGFzPXsnLycgKyBwb3N0LmNhdGVnb3J5LnNob3J0ZW4gKyAnLWMnICsgcG9zdC5jYXRlZ29yeS5pZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzWydtZXRhLWNhdGVnb3J5J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5ICYmIHBvc3QuY2F0ZWdvcnkudGl0bGUgPyBwb3N0LmNhdGVnb3J5LnRpdGxlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gLSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snbWV0YS10aW1lJ119Pntwb3N0LnJlY2VudCB8fCAnMyBnaeG7nSB0csaw4bubYyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pc1Nob3dEZXNjcmlwdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheShwcm9wcy5za2VsZXRvbk51bWJlcikuZmlsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1sZWZ0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snY2F0ZWdvcnknXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2tlbGV0b25Mb2FkaW5nOiBmYWxzZSxcclxuICAgIHNrZWxldG9uTnVtYmVyOiAxLFxyXG4gICAgbnVtYmVyOiAxMCxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBpc1Nob3dDYXRlZ29yeTogdHJ1ZSxcclxuICAgIGlzU2hvd0Rlc2NyaXB0aW9uOiB0cnVlLFxyXG4gICAgaXNSb3dSZXZlcnNlOiBmYWxzZSxcclxuICAgIGlzU21hbGxMYXlvdXQ6IGZhbHNlLFxyXG4gICAgYmFja2dyb3VuZDogJ2xhcmdlJywgLy8gbGFyZ2UsIG5vcm1hbCwgbWVkaXVtLCBzbWFsbFxyXG4gICAgcG9zdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICdDw7MgMSBt4bu5IG5ow6JuIFRow6FpIHNlbGZpZSB24bubaSBj4bqjIHF1w6JuIMSRb8OgbiBzYW8gdGjhur8gZ2nhu5tpLCBhaSBkw6ggXCJjaOG6t3QgY2jDqW1cIiB04burIGjhu5lpIEtlbmRhbGwgxJHhur9uIGTDoG4gbuG7ryB0aOG6p24gSG9hLCBIw6BuLCBWaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JhdSBj4bunIHF14bqjIGzDoCBuaOG7r25nIHRow6BuaCBwaOG6p24ga2jDtG5nIHRo4buDIHRoaeG6v3UgdHJvbmcgdGjhu7FjIMSRxqFuIGdp4bqjbSBjw6JuLCBuaMawbmcgbuG6v3Uga2jDtG5nIGJp4bq/dCBsw6BtIG3Ds24gc2FsYWQgdOG7kXQgY2hvIHPhu6ljIGto4buPZSB0aMOsIGLhuqFuIHPhur0gcuG6pXQgbmhhbmggY2jDoW4gxJHhuqV5LicsXHJcbiAgICAgICAgICAgIHNsdWc6ICdoYXJwZXItYmVja2hhbS1uYW0tdGF5LWJvLW8tc2FuLWJheS1taWFtaScsXHJcbiAgICAgICAgICAgIHRodW1iOiAnLy9pbWFnZS50dW9pdHJlcGx1cy5jb20vdXBsb2FkLzIwMTgvMDMvMjUweDE1Ni9hZGM5cnA3ZjUzLmpwZycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2tlbmgxNGNkbi5jb20vem9vbS8zNDBfMjEzLzIwMjAvcGhvdG8xNTg1NTczNzExMzQ0LTE1ODU1NzM3MTE3NjItY3JvcC0xNTg1NTczODU1NzU5ODA4NjE1NTYyLmpwZycsXHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vc2FuZGJveC50dW9pdHJlcGx1cy5jb20vbmh1bmctdGh1b25nLXZ1LWNhLWxvbi1udW90LWNhLWJlLWRlLW1vLXJvbmctdGhpLXBoYW4tcDI1Ni5odG1sJyxcclxuICAgICAgICAgICAgdGltZTogJzIwMjAtMDQtMDQgMTE6MDY6MTUnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMTIsXHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnR2nhuqNpIHRyw60nLFxyXG4gICAgICAgICAgICAgICAgJ3NsdWcnOiAnZ2lhaS10cmknLFxyXG4gICAgICAgICAgICAgICAgJ2hyZWYnOiAnaHR0cDovL2xvY2FsaG9zdDo4MDEyL2dpYWktdHJpLmh0bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0PDsyAxIG3hu7kgbmjDom4gVGjDoWkgc2VsZmllIHbhu5tpIGPhuqMgcXXDom4gxJFvw6BuIHNhbyB0aOG6vyBnaeG7m2ksIGFpIGTDqCBcImNo4bq3dCBjaMOpbVwiIHThu6sgaOG7mWkgS2VuZGFsbCDEkeG6v24gZMOgbiBu4buvIHRo4bqnbiBIb2EsIEjDoG4sIFZp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmF1IGPhu6cgcXXhuqMgbMOgIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBraMO0bmcgdGjhu4MgdGhp4bq/dSB0cm9uZyB0aOG7sWMgxJHGoW4gZ2nhuqNtIGPDom4sIG5oxrBuZyBu4bq/dSBraMO0bmcgYmnhur90IGzDoG0gbcOzbiBzYWxhZCB04buRdCBjaG8gc+G7qWMga2jhu49lIHRow6wgYuG6oW4gc+G6vSBy4bqldCBuaGFuaCBjaMOhbiDEkeG6pXkuJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2hhcnBlci1iZWNraGFtLW5hbS10YXktYm8tby1zYW4tYmF5LW1pYW1pJyxcclxuICAgICAgICAgICAgdGh1bWI6ICcvL2ltYWdlLnR1b2l0cmVwbHVzLmNvbS91cGxvYWQvMjAxOC8wMy8yNTB4MTU2L2FkYzlycDdmNTMuanBnJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8va2VuaDE0Y2RuLmNvbS96b29tLzM0MF8yMTMvMjAyMC9waG90bzE1ODU1NzM3MTEzNDQtMTU4NTU3MzcxMTc2Mi1jcm9wLTE1ODU1NzM4NTU3NTk4MDg2MTU1NjIuanBnJyxcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9zYW5kYm94LnR1b2l0cmVwbHVzLmNvbS9uaHVuZy10aHVvbmctdnUtY2EtbG9uLW51b3QtY2EtYmUtZGUtbW8tcm9uZy10aGktcGhhbi1wMjU2Lmh0bWwnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMjAyMC0wNC0wNCAxMTowNjoxNScsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAxMixcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHaeG6o2kgdHLDrScsXHJcbiAgICAgICAgICAgICAgICAnc2x1Zyc6ICdnaWFpLXRyaScsXHJcbiAgICAgICAgICAgICAgICAnaHJlZic6ICdodHRwOi8vbG9jYWxob3N0OjgwMTIvZ2lhaS10cmkuaHRtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuSG9yaXpvbnRhbFdpZGdldC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsV2lkZ2V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob3Jpem9udGFsLW5ld3NcIjogXCJob3Jpem9udGFsLW5ld3NfX18yOUpRclwiLFxuXHRcImhvcml6b250YWwtc21hbGxcIjogXCJob3Jpem9udGFsLXNtYWxsX19fMmtqb0dcIixcblx0XCJsZWZ0XCI6IFwibGVmdF9fXzQwbzB6XCIsXG5cdFwicmlnaHRcIjogXCJyaWdodF9fXzNoa2ZPXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzF0aHhMXCIsXG5cdFwicm93LXJldmVyc2VcIjogXCJyb3ctcmV2ZXJzZV9fXzNqVmV1XCIsXG5cdFwibWV0YVwiOiBcIm1ldGFfX18yLUw0WFwiLFxuXHRcIm1ldGEtY2F0ZWdvcnlcIjogXCJtZXRhLWNhdGVnb3J5X19fMW15WjNcIixcblx0XCJtZXRhLXRpbWVcIjogXCJtZXRhLXRpbWVfX18yVS1xSVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fX18yaTNoZlwiLFxuXHRcInByb2dyZXNzLWxvYWRpbmdcIjogXCJwcm9ncmVzcy1sb2FkaW5nX19fZEJoN3BcIixcblx0XCJhcnRpY2xlXCI6IFwiYXJ0aWNsZV9fXzJTVEtKXCIsXG5cdFwiYXJ0aWNsZS1sZWZ0XCI6IFwiYXJ0aWNsZS1sZWZ0X19fM25jWFBcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiYmFja2dyb3VuZF9fX1JhZi1LXCIsXG5cdFwiYXJ0aWNsZS1yaWdodFwiOiBcImFydGljbGUtcmlnaHRfX18xbU1qSlwiLFxuXHRcImNhdGVnb3J5XCI6IFwiY2F0ZWdvcnlfX18zM3I0MlwiLFxuXHRcImFuaW1hdGVkLWxvYWRcIjogXCJhbmltYXRlZC1sb2FkX19fU1kyaW1cIixcblx0XCJwbGFjZUhvbGRlclNoaW1tZXJcIjogXCJwbGFjZUhvbGRlclNoaW1tZXJfX18xZFNzbFwiXG59OyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgJ2xhenlzaXplcyc7XHJcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvcGFyZW50LWZpdC9scy5wYXJlbnQtZml0JztcclxuXHJcbi8vIEFzc2V0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE5vSW1hZ2UgZnJvbSAnU3RhdGljL2ltYWdlcy9uby1pbWFnZS5wbmcnO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYWx0OiAnJyxcclxuICAgIHRodW1iOiBOb0ltYWdlLFxyXG4gICAgc3JjOiBOb0ltYWdlLFxyXG4gICAgc2NhbGVPbkhvdmVyOiB0cnVlXHJcbn07XHJcblxyXG5jbGFzcyBQcm9ncmVzc2l2ZU1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3BzLndpZHRoIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIHJlZj17dGhpcy5teVJlZn0gY2xhc3NOYW1lPXtzdHlsZXNbJ3Byb2dyZXNzaXZlLWZpZ3VyZSddfSBzdHlsZT17dGhpcy53aWR0aCA/IHt3aWR0aDogdGhpcy53aWR0aH0gOiB7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyJ119IHN0eWxlPXt0aGlzLmhlaWdodCA/IHtoZWlnaHQ6IHRoaXMuaGVpZ2h0fSA6IHt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyLWZpbGwnXX0gc3R5bGU9e3twYWRkaW5nQm90dG9tOiAnNTcuOCUnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzWydwcm9ncmVzc2l2ZS1tZWRpYSddLCBzdHlsZXNbJ2lzLWltYWdlLWxvYWRlZCddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzWydzY2FsZS1vbi1ob3ZlciddXTogdGhpcy5wcm9wcy5zY2FsZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzWydjZW50ZXJlZCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNyYyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXt0aGlzLnByb3BzLmFsdH0gbG9hZGluZz1cImxhenlcIiBzcmM9e3RoaXMucHJvcHMudGh1bWJ9IGRhdGEtc3JjPXt0aGlzLnByb3BzLnNyY30gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1sncHJvZ3Jlc3NpdmUtbWVkaWEtaW1hZ2UnXSwgJ2xhenlsb2FkIHctZnVsbCBoLWZ1bGwnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17dGhpcy5wcm9wcy5hbHR9IGxvYWRpbmc9XCJsYXp5XCIgc3JjPXt0aGlzLnByb3BzLnNyY30gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlc1sncHJvZ3Jlc3NpdmUtbWVkaWEtaW1hZ2UnXSwgJ3ctZnVsbCBoLWZ1bGwnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25vc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUHJvZ3Jlc3NpdmVNZWRpYS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc2l2ZU1lZGlhO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9ncmVzc2l2ZS1maWd1cmVcIjogXCJwcm9ncmVzc2l2ZS1maWd1cmVfX18zTHM5QlwiLFxuXHRcImFzcGVjdC1yYXRpby1wbGFjZWhvbGRlclwiOiBcImFzcGVjdC1yYXRpby1wbGFjZWhvbGRlcl9fXzNpdEgzXCIsXG5cdFwiYXNwZWN0LXJhdGlvLXBsYWNlaG9sZGVyLWZpbGxcIjogXCJhc3BlY3QtcmF0aW8tcGxhY2Vob2xkZXItZmlsbF9fXzF3dHR0XCIsXG5cdFwicHJvZ3Jlc3NpdmUtbWVkaWFcIjogXCJwcm9ncmVzc2l2ZS1tZWRpYV9fXzE4UTlBXCIsXG5cdFwicHJvZ3Jlc3NpdmUtbWVkaWEtdGh1bWJcIjogXCJwcm9ncmVzc2l2ZS1tZWRpYS10aHVtYl9fXzJMNUNnXCIsXG5cdFwicHJvZ3Jlc3NpdmUtbWVkaWEtaW1hZ2VcIjogXCJwcm9ncmVzc2l2ZS1tZWRpYS1pbWFnZV9fXzJzUHREXCIsXG5cdFwiY2VudGVyZWRcIjogXCJjZW50ZXJlZF9fXzJyT1VYXCIsXG5cdFwiaXMtaW1hZ2UtbG9hZGVkXCI6IFwiaXMtaW1hZ2UtbG9hZGVkX19fenoxWldcIixcblx0XCJzY2FsZS1vbi1ob3ZlclwiOiBcInNjYWxlLW9uLWhvdmVyX19fdHBPblhcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQcm9ncmVzc2l2ZU1lZGlhIGZyb20gJ0NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtnZXRQb3N0SW1hZ2V9IGZyb20gJ0xpYnMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRpdGxlOiAnUXXDvSBjw7Qgc8OgbmgnLFxyXG4gICAgcG9zdE51bWJlcjogNSxcclxuICAgIGJhY2tncm91bmQ6ICdsYXJnZScsIC8vIGxhcmdlLCBub3JtYWwsIG1lZGl1bSwgc21hbGxcclxuICAgIHBvc3RzOiBbXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhckhpZ2hsaWdodFdpZGdldChwcm9wcykge1xyXG4gICAgY29uc3Qge3RpdGxlLCBwb3N0c30gPSBwcm9wcztcclxuICAgIGNvbnN0IGZlYXR1cmVQb3N0ID0gcG9zdHMubGVuZ3RoID8gcG9zdHNbMF0gOiB7fTtcclxuICAgIGNvbnN0IGZlYXR1cmVCYWNrZ3JvdW5kID0gZ2V0UG9zdEltYWdlKGZlYXR1cmVQb3N0LCBwcm9wcy5iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3suLi5wcm9wcy5zdHlsZX19IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXNbJ2hvcml6b250YWwtd2lkZ2V0LW5ld3MnXSwgJ21iLTIwJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0YWItdGl0bGUnXX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4+e3RpdGxlfTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZmVhdHVyZWQnXX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Bvc3Q/c2x1Zz0nICsgZmVhdHVyZVBvc3Quc2x1ZyArICcmcGlkPScgKyBmZWF0dXJlUG9zdC5waWR9IGFzPXsnLycgKyBmZWF0dXJlUG9zdC5zbHVnICsgJy1wJyArIGZlYXR1cmVQb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtmZWF0dXJlUG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1sndGl0bGUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZVBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RodW1iLWltYWdlJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQb3N0LmJhY2tncm91bmQgJiYgPFByb2dyZXNzaXZlTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVPbkhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZmVhdHVyZVBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iPXtmZWF0dXJlUG9zdC50aHVtYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlQmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGFnJ119Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlUG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bvc3QtbGlzdCddfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID49IDEgJiYga2V5IDw9IHByb3BzLnBvc3ROdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncG9zdCddfSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17cG9zdC50aXRsZX0+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuU2lkZWJhckhpZ2hsaWdodFdpZGdldC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFySGlnaGxpZ2h0V2lkZ2V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob3Jpem9udGFsLXdpZGdldC1uZXdzXCI6IFwiaG9yaXpvbnRhbC13aWRnZXQtbmV3c19fXzNDR0FOXCIsXG5cdFwidGFiLXRpdGxlXCI6IFwidGFiLXRpdGxlX19fMjB0NjVcIixcblx0XCJmZWF0dXJlZFwiOiBcImZlYXR1cmVkX19fMWp5MjNcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX19fMnRxeS1cIixcblx0XCJ0aHVtYi1pbWFnZVwiOiBcInRodW1iLWltYWdlX19fNXUxNDVcIixcblx0XCJ0YWdcIjogXCJ0YWdfX19nT2g1SFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fX18zcWR0MVwiLFxuXHRcInBvc3QtbGlzdFwiOiBcInBvc3QtbGlzdF9fXzIwTkZUXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfX18xcDVOSVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVNZWRpYSBmcm9tICdDb21wb25lbnRzL1Byb2dyZXNzaXZlTWVkaWEnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWRlYmFyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtnZXRQb3N0SW1hZ2V9IGZyb20gJ0xpYnMvdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhck5ld3NXaWRnZXQocHJvcHMpIHtcclxuICAgIGxldCBwb3N0cyA9IHByb3BzLnBvc3RzIHx8IFtdO1xyXG5cclxuICAgIGlmIChwb3N0cy5sZW5ndGgpIHtcclxuICAgICAgICBwb3N0cyA9IHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBJbWFnZXNcclxuICAgICAgICAgICAgcG9zdC5iYWNrZ3JvdW5kID0gZ2V0UG9zdEltYWdlKHBvc3QsIHByb3BzLmJhY2tncm91bmQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBvc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Li4ucHJvcHMuc3R5bGV9fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydzaWRlYmFyLXdpZGdldC1uZXdzJ10sIHN0eWxlc1snc2lkZWJhciddLCAnbWItMjAnLCBwcm9wcy5jbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydzaWRlYmFyLWhlYWRlciddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4gdGl0bGU9e3Byb3BzLnRpdGxlfT57cHJvcHMudGl0bGV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzaWRlYmFyLWNvbnRhaW4nXX0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuc2tlbGV0b25Mb2FkaW5nICYmIHBvc3RzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHBvc3RzKSAmJiBwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QucGlkfSBjbGFzc05hbWU9eydjbGVhcmZpeCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzWyd0aHVtYiddfSB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzaXZlTWVkaWEgYWx0PXtwb3N0LnRpdGxlfSB0aHVtYj17cG9zdC50aHVtYn0gc3JjPXtwb3N0LmJhY2tncm91bmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzWyd0aXRsZSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcG9zdD9zbHVnPScgKyBwb3N0LnNsdWcgKyAnJnBpZD0nICsgcG9zdC5waWR9IGFzPXsnLycgKyBwb3N0LnNsdWcgKyAnLXAnICsgcG9zdC5waWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17cG9zdC50aXRsZX0+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3Byb2dyZXNzLWxvYWRpbmcnXSwgJ2NsZWFyZml4Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1yaWdodCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWyd0aXRsZSddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2JhY2tncm91bmQnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlLXJpZ2h0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2Rlc2NyaXB0aW9uJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydwcm9ncmVzcy1sb2FkaW5nJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYmFja2dyb3VuZCddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sndGl0bGUnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snZGVzY3JpcHRpb24nXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3Byb2dyZXNzLWxvYWRpbmcnXSwgJ2NsZWFyZml4Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydiYWNrZ3JvdW5kJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZS1yaWdodCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWyd0aXRsZSddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydkZXNjcmlwdGlvbiddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncHJvZ3Jlc3MtbG9hZGluZyddLCAnY2xlYXJmaXgnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYXJ0aWNsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2JhY2tncm91bmQnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlLXJpZ2h0J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ3RpdGxlJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2Rlc2NyaXB0aW9uJ10sIHN0eWxlc1snYW5pbWF0ZWQtbG9hZCddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydwcm9ncmVzcy1sb2FkaW5nJ10sICdjbGVhcmZpeCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzWydhcnRpY2xlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snYmFja2dyb3VuZCddLCBzdHlsZXNbJ2FuaW1hdGVkLWxvYWQnXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbJ2FydGljbGUtcmlnaHQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sndGl0bGUnXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snZGVzY3JpcHRpb24nXSwgc3R5bGVzWydhbmltYXRlZC1sb2FkJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2tlbGV0b25Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICB0aXRsZTogJ1RJTiBN4buaSSBOSOG6pFQnLFxyXG4gICAgYmFja2dyb3VuZDogJ2xhcmdlJywgLy8gbGFyZ2UsIG5vcm1hbCwgbWVkaXVtLCBzbWFsbFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB0b3A6IDBcclxuICAgIH0sXHJcbiAgICBwb3N0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0PDsyAxIG3hu7kgbmjDom4gVGjDoWkgc2VsZmllIHbhu5tpIGPhuqMgcXXDom4gxJFvw6BuIHNhbyB0aOG6vyBnaeG7m2ksIGFpIGTDqCBcImNo4bq3dCBjaMOpbVwiIHThu6sgaOG7mWkgS2VuZGFsbCDEkeG6v24gZMOgbiBu4buvIHRo4bqnbiBIb2EsIEjDoG4sIFZp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmF1IGPhu6cgcXXhuqMgbMOgIG5o4buvbmcgdGjDoG5oIHBo4bqnbiBraMO0bmcgdGjhu4MgdGhp4bq/dSB0cm9uZyB0aOG7sWMgxJHGoW4gZ2nhuqNtIGPDom4sIG5oxrBuZyBu4bq/dSBraMO0bmcgYmnhur90IGzDoG0gbcOzbiBzYWxhZCB04buRdCBjaG8gc+G7qWMga2jhu49lIHRow6wgYuG6oW4gc+G6vSBy4bqldCBuaGFuaCBjaMOhbiDEkeG6pXkuJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8va2VuaDE0Y2RuLmNvbS96b29tLzM0MF8yMTMvMjAyMC9waG90bzE1ODU1NzM3MTEzNDQtMTU4NTU3MzcxMTc2Mi1jcm9wLTE1ODU1NzM4NTU3NTk4MDg2MTU1NjIuanBnJyxcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHA6Ly9zYW5kYm94LnR1b2l0cmVwbHVzLmNvbS9uaHVuZy10aHVvbmctdnUtY2EtbG9uLW51b3QtY2EtYmUtZGUtbW8tcm9uZy10aGktcGhhbi1wMjU2Lmh0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6ICdDw7MgMSBt4bu5IG5ow6JuIFRow6FpIHNlbGZpZSB24bubaSBj4bqjIHF1w6JuIMSRb8OgbiBzYW8gdGjhur8gZ2nhu5tpLCBhaSBkw6ggXCJjaOG6t3QgY2jDqW1cIiB04burIGjhu5lpIEtlbmRhbGwgxJHhur9uIGTDoG4gbuG7ryB0aOG6p24gSG9hLCBIw6BuLCBWaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JhdSBj4bunIHF14bqjIGzDoCBuaOG7r25nIHRow6BuaCBwaOG6p24ga2jDtG5nIHRo4buDIHRoaeG6v3UgdHJvbmcgdGjhu7FjIMSRxqFuIGdp4bqjbSBjw6JuLCBuaMawbmcgbuG6v3Uga2jDtG5nIGJp4bq/dCBsw6BtIG3Ds24gc2FsYWQgdOG7kXQgY2hvIHPhu6ljIGto4buPZSB0aMOsIGLhuqFuIHPhur0gcuG6pXQgbmhhbmggY2jDoW4gxJHhuqV5LicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2tlbmgxNGNkbi5jb20vem9vbS8zNDBfMjEzLzIwMjAvcGhvdG8xNTg1NTczNzExMzQ0LTE1ODU1NzM3MTE3NjItY3JvcC0xNTg1NTczODU1NzU5ODA4NjE1NTYyLmpwZycsXHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vc2FuZGJveC50dW9pdHJlcGx1cy5jb20vbmh1bmctdGh1b25nLXZ1LWNhLWxvbi1udW90LWNhLWJlLWRlLW1vLXJvbmctdGhpLXBoYW4tcDI1Ni5odG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaWQ6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCdcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5TaWRlYmFyTmV3c1dpZGdldC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyTmV3c1dpZGdldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhci13aWRnZXQtbmV3c1wiOiBcInNpZGViYXItd2lkZ2V0LW5ld3NfX18xSUNtMFwiLFxuXHRcInNpZGViYXItaGVhZGVyXCI6IFwic2lkZWJhci1oZWFkZXJfX18xQ3Q3a1wiLFxuXHRcInNpZGViYXItY29udGFpblwiOiBcInNpZGViYXItY29udGFpbl9fX1lISXVyXCIsXG5cdFwiY29udGVudFwiOiBcImNvbnRlbnRfX18zSkxEbVwiLFxuXHRcInRodW1iXCI6IFwidGh1bWJfX19OZklSYlwiLFxuXHRcInByb2dyZXNzLWxvYWRpbmdcIjogXCJwcm9ncmVzcy1sb2FkaW5nX19fM2Y5dWtcIixcblx0XCJhcnRpY2xlXCI6IFwiYXJ0aWNsZV9fXzFqbmVxXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcImJhY2tncm91bmRfX18xMUZ3OFwiLFxuXHRcImFydGljbGUtcmlnaHRcIjogXCJhcnRpY2xlLXJpZ2h0X19fNjlBYzlcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX19fQ2lFWmJcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2NyaXB0aW9uX19fMjAzaVVcIixcblx0XCJhbmltYXRlZC1sb2FkXCI6IFwiYW5pbWF0ZWQtbG9hZF9fX2hSbW52XCIsXG5cdFwicGxhY2VIb2xkZXJTaGltbWVyXCI6IFwicGxhY2VIb2xkZXJTaGltbWVyX19fMTRLd2dcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQcm9ncmVzc2l2ZU1lZGlhIGZyb20gJ0NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVNZWRpYSc7XHJcblxyXG4vLyBBc3NldHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBTaW1pbGFyQ2F0ZWdvcnlOZXdzKHByb3BzKSB7XHJcbiAgICBsZXQgcG9zdHMgPSBwcm9wcy5wb3N0cyB8fCBbXTtcclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcG9zdHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBvc3QucGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zdC5pbWFnZXMgJiYgcG9zdC5pbWFnZXMubWVkaXVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5iYWNrZ3JvdW5kID0gcG9zdC5pbWFnZXMubWVkaXVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1snc2ltaWxhci1uZXdzJ10pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaGVhZGVyJ119Pntwcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzWydwb3N0cyddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncm93cyddLCBzdHlsZXNbJ3NwYWNlLWJldHdlZW4nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHBvc3RzKSAmJiBwb3N0cy5tYXAoKHBvc3QsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IDwgcHJvcHMubnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncG9zdCddLCBzdHlsZXNbJ2NhcmQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Bvc3Q/c2x1Zz0nICsgcG9zdC5zbHVnICsgJyZwaWQ9JyArIHBvc3QucGlkfSBhcz17Jy8nICsgcG9zdC5zbHVnICsgJy1wJyArIHBvc3QucGlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzaXZlTWVkaWEgdGh1bWI9e3Bvc3QudGh1bWJ9IHNyYz17cG9zdC5iYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1sncG9zdC1oZWFkZXInXSwgJ3B0LTEwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wb3N0P3NsdWc9JyArIHBvc3Quc2x1ZyArICcmcGlkPScgKyBwb3N0LnBpZH0gYXM9eycvJyArIHBvc3Quc2x1ZyArICctcCcgKyBwb3N0LnBpZCArICcuaHRtbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzWyd0aXRsZSddfSB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRpdGxlOiAnQsOASSBWSeG6vlQgTEnDik4gUVVBTicsXHJcbiAgICBudW1iZXI6IDMsXHJcbiAgICBwb3N0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAxMjMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAxMjMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGlkOiAxMjMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ8OzIDEgbeG7uSBuaMOibiBUaMOhaSBzZWxmaWUgduG7m2kgY+G6oyBxdcOibiDEkW/DoG4gc2FvIHRo4bq/IGdp4bubaSwgYWkgZMOoIFwiY2jhurd0IGNow6ltXCIgdOG7qyBo4buZaSBLZW5kYWxsIMSR4bq/biBkw6BuIG7hu68gdGjhuqduIEhvYSwgSMOgbiwgVmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSYXUgY+G7pyBxdeG6oyBsw6Agbmjhu69uZyB0aMOgbmggcGjhuqduIGtow7RuZyB0aOG7gyB0aGnhur91IHRyb25nIHRo4buxYyDEkcahbiBnaeG6o20gY8OibiwgbmjGsG5nIG7hur91IGtow7RuZyBiaeG6v3QgbMOgbSBtw7NuIHNhbGFkIHThu5F0IGNobyBz4bupYyBraOG7j2UgdGjDrCBi4bqhbiBz4bq9IHLhuqV0IG5oYW5oIGNow6FuIMSR4bqleS4nLFxyXG4gICAgICAgICAgICBzbHVnOiAnaGFycGVyLWJlY2toYW0tbmFtLXRheS1iby1vLXNhbi1iYXktbWlhbWknLFxyXG4gICAgICAgICAgICB0aHVtYjogJy8vaW1hZ2UudHVvaXRyZXBsdXMuY29tL3VwbG9hZC8yMDE4LzAzLzI1MHgxNTYvYWRjOXJwN2Y1My5qcGcnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9rZW5oMTRjZG4uY29tL3pvb20vMzQwXzIxMy8yMDIwL3Bob3RvMTU4NTU3MzcxMTM0NC0xNTg1NTczNzExNzYyLWNyb3AtMTU4NTU3Mzg1NTc1OTgwODYxNTU2Mi5qcGcnLFxyXG4gICAgICAgICAgICBocmVmOiAnaHR0cDovL3NhbmRib3gudHVvaXRyZXBsdXMuY29tL25odW5nLXRodW9uZy12dS1jYS1sb24tbnVvdC1jYS1iZS1kZS1tby1yb25nLXRoaS1waGFuLXAyNTYuaHRtbCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyMDIwLTA0LTA0IDExOjA2OjE1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDEyLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0dp4bqjaSB0csOtJyxcclxuICAgICAgICAgICAgICAgICdzbHVnJzogJ2dpYWktdHJpJyxcclxuICAgICAgICAgICAgICAgICdocmVmJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi9naWFpLXRyaS5odG0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5TaW1pbGFyQ2F0ZWdvcnlOZXdzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbWlsYXJDYXRlZ29yeU5ld3M7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpbWlsYXItbmV3c1wiOiBcInNpbWlsYXItbmV3c19fX2x4Z1AyXCIsXG5cdFwicm93c1wiOiBcInJvd3NfX18yTXBXeVwiLFxuXHRcInNwYWNlLWJldHdlZW5cIjogXCJzcGFjZS1iZXR3ZWVuX19fMVA5SEdcIixcblx0XCJjYXJkXCI6IFwiY2FyZF9fXzFrbk1YXCIsXG5cdFwiY2FyZC1kZXNjcmlwdGlvblwiOiBcImNhcmQtZGVzY3JpcHRpb25fX19qajRadFwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl9fXzNqQzktXCIsXG5cdFwicG9zdHNcIjogXCJwb3N0c19fX2ZiSXdPXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfX18xME50dVwiLFxuXHRcInBvc3QtaGVhZGVyXCI6IFwicG9zdC1oZWFkZXJfX18yZUlEaFwiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVfX18xSkk4ZFwiXG59OyIsImNvbnN0IGVudiA9IHByb2Nlc3MuZW52LkVOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5cclxuY29uc3QgQXBwID0ge1xyXG4gICAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgICAgICBTSVRFX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgIE1PQklMRV9TSVRFX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMi8nLFxyXG4gICAgICAgIEFQSV9IT1NUOiAnaHR0cHM6Ly9tZW92YXRoYXkudm4vdjIvYXBpLydcclxuICAgIH0sXHJcbiAgICBzYW5kYm94OiB7XHJcbiAgICAgICAgU0lURV9VUkw6ICdodHRwOi8vc2FuZGJveC5tZW92YXRoYXkudm4vJyxcclxuICAgICAgICBNT0JJTEVfU0lURV9VUkw6ICdodHRwOi8vc2FuZGJveC1tLm1lb3ZhdGhheS52bi8nLFxyXG4gICAgICAgIEFQSV9IT1NUOiAnaHR0cDovL3NhbmRib3gubWVvdmF0aGF5LnZuL3YyL2FwaS8nXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGlvbjoge1xyXG4gICAgICAgIFNJVEVfVVJMOiAnaHR0cHM6Ly9tZW92YXRoYXkudm4vJyxcclxuICAgICAgICBNT0JJTEVfU0lURV9VUkw6ICdodHRwczovL20ubWVvdmF0aGF5LycsXHJcbiAgICAgICAgQVBJX0hPU1Q6ICdodHRwczovL21lb3ZhdGhheS52bi92Mi9hcGkvJ1xyXG4gICAgfVxyXG59W2Vudl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgQ29uc3RhbnQgPSB7XHJcbiAgICAuLi5BcHAsXHJcbiAgICBTVEFUSUNfVkVSU0lPTjogMTIzLFxyXG4gICAgS0VZQ09ERToge1xyXG4gICAgICAgIEVOVEVSOiAxM1xyXG4gICAgfSxcclxuICAgIFNFQVJDSF9UT19RVUVSWTogMSxcclxuICAgIFFVRVJZX1RPX1NFQVJDSDogMlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnQ7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGNvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lLCBmb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbTpzcycpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIHNlY29uZHMgYWdvXHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIG1pbnV0ZXMsIDE1IHNlY29uZHMgYWdvXHJcbiAgICAgICAgLy8gMDcvMDMvMjAyMCAyMTozNDozMCA9PiAzIGhvdXJzIGFnb1xyXG4gICAgICAgIC8vIDA3LzAzLzIwMjAgMTA6MzQ6MzAgPT4gPjI0aCA9PiAwNy8wMy8yMDIwIDEwOjM0OjMwXHJcblxyXG4gICAgICAgIGlmICh0aW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzID0gbW9tZW50KCkuZGlmZihtb21lbnQodGltZSwgZm9ybWF0KSwgJ3NlY29uZHMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWNvbmRzICYmICtzZWNvbmRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZHMgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiAnMSBwaMO6dCB0csaw4bubYydcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWludXRlcyA9IE1hdGgucm91bmQoc2Vjb25kcyAvIDYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPiA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG91cnMgPiAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5yb3VuZChob3VycyAvIDI0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IG1vbWVudCh0aW1lKS5mb3JtYXQoJ0hIOm1tIHwgREQvTU0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSBob3VycyArICcgZ2nhu50gdHLGsOG7m2MnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGhvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdob3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSBtaW51dGVzICsgJyBwaMO6dCB0csaw4bubYyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG1pbnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZzogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1b3RlRG91YmxlVG9TaW5nbGUgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvXCIvZywgJ1xcJycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBwYXlsb2FkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaGFuZGxlRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZW5kIGVycm9yIGxvZ1xyXG4gICAgICAgIC8qY29uc3QgbW9uaXRvciA9IHJlcXVpcmUoJ0BhbnRzY29ycC9tb25pdG9yLWphdmFzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgbW9uaXRvci5pbml0KHtcclxuICAgICAgICAgICAgcGlkOiAxNTkyMzA3MDU5Nzk1LFxyXG4gICAgICAgICAgICBlbnY6IHByb2Nlc3MuZW52LkVOVixcclxuICAgICAgICAgICAgaG9zdDogJ2h0dHA6Ly9tb25pdG9yLnR1b2l0cmVwbHVzLmNvbS9hcGkvbW9uaXRvci9lcnJvci8nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vbml0b3IuaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgdHJhY2VJZDogJycsXHJcbiAgICAgICAgICAgIC4uLnBheWxvYWRcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU2VhcmNoQW5kUGFyYW0odmFsdWUsIGRpcmVjdGlvbiA9IGNvbnN0YW50LlNFQVJDSF9UT19RVUVSWSkge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gY29uc3RhbnQuU0VBUkNIX1RPX1FVRVJZKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnKycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnKycsIC9cXHMvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RQcm9wU2FmZWx5KGZuLCBkZWZhdWx0VmFsdWUgPSAnJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEltYWdlID0gKHBvc3QsIGJhY2tncm91bmQgPSAnbGFyZ2UnKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChwb3N0ICYmIGJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmQgPT09ICdsYXJnZScgJiYgcG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3QuaW1hZ2VzICYmIHBvc3QuaW1hZ2VzW2JhY2tncm91bmRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5pbWFnZXNbYmFja2dyb3VuZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGd0YWdJbmplY3QgPSAoZ2FJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoZ2FJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBnYVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZ29vZ2xlQW5hbHl0aWNzU291cmNlID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtnYUlkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHMwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5cclxuICAgICAgICAgICAgZ2FTY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICBnYVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdvb2dsZUFuYWx5dGljc1NvdXJjZSk7XHJcbiAgICAgICAgICAgIHMwLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhU2NyaXB0LCBzMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgIGd0YWdUcmFja2luZ0V2ZW50KCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBndGFnVHJhY2tpbmdFdmVudCgnY29uZmlnJywgZ2FJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBndGFnVHJhY2tpbmdFdmVudCA9IChldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgYXJncykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhY2tpbmcoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIC4uLmFyZ3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zICYmIE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICYmIGV2ZW50Q2F0ZWdvcnkgIT09ICdqcycpIHtcclxuICAgICAgICAgICAgdHJhY2tpbmcoZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24sIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhY2tpbmcoZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gRXJyb3JcclxuICAgIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyX19faC1CWm9cIixcblx0XCJjb250YWluZXItYm9keVwiOiBcImNvbnRhaW5lci1ib2R5X19fMkdFTklcIixcblx0XCJwb3N0LXdyYXBwZXJcIjogXCJwb3N0LXdyYXBwZXJfX18yREZrblwiLFxuXHRcInBvc3QtdGl0bGVcIjogXCJwb3N0LXRpdGxlX19fM1JHMkNcIixcblx0XCJtZXRhLXNvdXJjZVwiOiBcIm1ldGEtc291cmNlX19fMUwzQVNcIixcblx0XCJzb3VyY2VcIjogXCJzb3VyY2VfX18xaDhpZVwiLFxuXHRcInRpbWVcIjogXCJ0aW1lX19fMllHbmVcIixcblx0XCJzb2NpYWxzXCI6IFwic29jaWFsc19fXzFNZTF1XCIsXG5cdFwicG9zdC1jb250ZW50XCI6IFwicG9zdC1jb250ZW50X19fMmdROGZcIixcblx0XCJwb3N0LW1lbnUtbmF2YmFyXCI6IFwicG9zdC1tZW51LW5hdmJhcl9fX25qS0tfXCIsXG5cdFwiZ28tdG8tY29tbWVudHNcIjogXCJnby10by1jb21tZW50c19fXzI5bFgwXCIsXG5cdFwiZ28tdG8taG9tZVwiOiBcImdvLXRvLWhvbWVfX18xQ184TVwiLFxuXHRcInNoYXJlLWZhY2Vib29rXCI6IFwic2hhcmUtZmFjZWJvb2tfX19hMVdUTVwiLFxuXHRcImdvLWJhY2tcIjogXCJnby1iYWNrX19fMWlBU2ZcIixcblx0XCJwb3N0LWRlc2NyaXB0aW9uXCI6IFwicG9zdC1kZXNjcmlwdGlvbl9fXzg4bTdmXCIsXG5cdFwicG9zdC1iYWNrZ3JvdW5kXCI6IFwicG9zdC1iYWNrZ3JvdW5kX19fMkdhWmhcIixcblx0XCJwb3N0LWNvbnRhaW5lclwiOiBcInBvc3QtY29udGFpbmVyX19fMmk4Z3pcIixcblx0XCJhdHRhY2htZW50LWNlbnRlclwiOiBcImF0dGFjaG1lbnQtY2VudGVyX19fMUpKRkNcIixcblx0XCJhdHRhY2htZW50LWltYWdlXCI6IFwiYXR0YWNobWVudC1pbWFnZV9fXzM0UHlQXCIsXG5cdFwicG9zdC1zb3VyY2VcIjogXCJwb3N0LXNvdXJjZV9fXzN3YTRQXCIsXG5cdFwicG9zdC1zaGFyZVwiOiBcInBvc3Qtc2hhcmVfX18zbmU1NFwiLFxuXHRcInBvc3Qtc2ltaWxhclwiOiBcInBvc3Qtc2ltaWxhcl9fXzJzNi1qXCIsXG5cdFwicG9zdC10YWdzXCI6IFwicG9zdC10YWdzX19fM1NEbHdcIixcblx0XCJwb3N0LWNvbW1lbnRzXCI6IFwicG9zdC1jb21tZW50c19fXzNHTkFCXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzJoTUVUXCIsXG5cdFwiY29udGVudFwiOiBcImNvbnRlbnRfX18xaG43eVwiLFxuXHRcInBvc3QtcmVsYXRlZFwiOiBcInBvc3QtcmVsYXRlZF9fXzEzSi1IXCIsXG5cdFwicG9zdC1yZWxhdGVkLXRpdGxlXCI6IFwicG9zdC1yZWxhdGVkLXRpdGxlX19fMm5HbVNcIixcblx0XCJwb3N0LW5vdC1mb3VuZFwiOiBcInBvc3Qtbm90LWZvdW5kX19fMUgxazJcIixcblx0XCJnby1iYWNrLXRvLWhvbWVcIjogXCJnby1iYWNrLXRvLWhvbWVfX19WcmczRVwiXG59OyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NuYW1lIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBDYXJvdXNlbCwge01vZGFsLCBNb2RhbEdhdGV3YXl9IGZyb20gJ3JlYWN0LWltYWdlcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBIb3Jpem9udGFsV2lkZ2V0IGZyb20gJ0NvbXBvbmVudHMvSG9yaXpvbnRhbFdpZGdldCc7XHJcbmltcG9ydCBTaWRlYmFyTmV3c1dpZGdldCBmcm9tICdDb21wb25lbnRzL1NpZGViYXJOZXdzV2lkZ2V0JztcclxuaW1wb3J0IFNpbWlsYXJOZXdzV2lkZ2V0IGZyb20gJ0NvbXBvbmVudHMvU2ltaWxhck5ld3NXaWRnZXQnO1xyXG5pbXBvcnQgU2lkZWJhckhpZ2hsaWdodFdpZGdldCBmcm9tICdDb21wb25lbnRzL1NpZGViYXJIaWdobGlnaHRXaWRnZXQnO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0ICogYXMgUG9zdFNlcnZpY2UgZnJvbSAnU2VydmljZXMvUG9zdC9JbmZvJztcclxuaW1wb3J0ICogYXMgUG9zdENhdGVnb3J5U2VydmljZSBmcm9tICdTZXJ2aWNlcy9Qb3N0L0NhdGVnb3J5JztcclxuXHJcbi8vIEFjdGlvbnNcclxuaW1wb3J0IHt1cGRhdGVEb2N1bWVudCwgdXBkYXRlQnJlYWRjcnVtYlN0cnVjdHVyZSwgc2V0SGVhZGVyTWVudX0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuLy8gQXNzZXRzXHJcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnU3RhdGljL2ltYWdlcy9lcnJvci00MDQuanBnJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdNb2R1bGVzL1BhZ2VzL1Bvc3Qvc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbi8vIFV0aWxzXHJcbmltcG9ydCBDb25zdGFudCBmcm9tICdDb25maWcvY29uc3RhbnQnO1xyXG5pbXBvcnQge2hhbmRsZUVycm9yLCBnZXRPYmplY3RQcm9wU2FmZWx5LCBxdW90ZURvdWJsZVRvU2luZ2xlfSBmcm9tICdMaWJzL3V0aWxzJztcclxuXHJcbmNvbnN0IFBBVEggPSAnYXBwbGljYXRpb24vcGFnZXMvcG9zdC5qc3gnO1xyXG5cclxuY2xhc3MgUG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZWR1eFN0b3JlLCBxdWVyeSwgcmVxfSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZXMgPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBwaWQgPSAnJztcclxuICAgICAgICAgICAgbGV0IHNsdWcgPSAnJztcclxuICAgICAgICAgICAgbGV0IG1lbnVzID0gW107XHJcbiAgICAgICAgICAgIGxldCBwb3N0ID0ge307XHJcbiAgICAgICAgICAgIGxldCBhcnJQb3N0VGFnSWQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNpbWlsYXJQb3N0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgcG9zdCBkZXRhaWxcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnNsdWcgJiYgcXVlcnkucGlkKSB7XHJcbiAgICAgICAgICAgICAgICBwaWQgPSBxdWVyeS5waWQ7XHJcbiAgICAgICAgICAgICAgICBzbHVnID0gcXVlcnkuc2x1ZztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdFNlcnZpY2UgPSBQb3N0U2VydmljZS5nZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBxdWVyeS5waWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1ZzogcXVlcnkuc2x1Z1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3RTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcG9zdFNlcnZpY2UudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhLnBvc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGRvY3VtZW50IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHBvc3QuZGVzY3JpcHRpb24gPyBxdW90ZURvdWJsZVRvU2luZ2xlKHBvc3QuZGVzY3JpcHRpb24pLnRyaW0oKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0YWdzIG9mIHBvc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdC50YWdzICYmIHBvc3QudGFncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC50YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUG9zdFRhZ0lkLnB1c2godGFnLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdC5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IFtwb3N0LmJhY2tncm91bmRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zdC5pbWFnZXMgJiYgcG9zdC5pbWFnZXMubm9ybWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IFtwb3N0LmltYWdlcy5ub3JtYWxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZSAmJiBpbWFnZS5pbmRleE9mKCdodHRwczonKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHBzOicgKyBpbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZWRUaW1lID0gcG9zdC50aW1lICYmIG1vbWVudChwb3N0LnRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJykuZm9ybWF0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkb2N1bWVudCBtZXRhZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHV4U3RvcmUuZGlzcGF0Y2godXBkYXRlRG9jdW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWw6IHBvc3QuaHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlOiBwb3N0LmhyZWYgPyBwb3N0LmhyZWYucmVwbGFjZSgnbWVvdmF0aGF5LnZuJywgJ20ubWVvdmF0aGF5LnZuJykgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFRpbWU6IHVwZGF0ZWRUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwb3N0LmhyZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBwb3N0LnRhZ3MgfHwgW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIEJyZWFkY3J1bWIgc3RydWN0dXJlZCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9iamVjdFByb3BTYWZlbHkoKCkgPT4gcG9zdC5jYXRlZ29yeS5uYW1lKSAmJiBnZXRPYmplY3RQcm9wU2FmZWx5KCgpID0+IHBvc3QuY2F0ZWdvcnkuc2hvcnRlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge25hbWUsIHNob3J0ZW4gPSAnJywgaWQ6IGNpZH0gPSBwb3N0LmNhdGVnb3J5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJlYWRjcnVtYkl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAaWQnOiBDb25zdGFudC5TSVRFX1VSTCArIHNob3J0ZW4gKyAnLWMnICArIGNpZCArICcuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWR1eFN0b3JlLmRpc3BhdGNoKHVwZGF0ZUJyZWFkY3J1bWJTdHJ1Y3R1cmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3RFbGVtZW50OiBbYnJlYWRjcnVtYkl0ZW1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWVudXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMgJiYgc3RhdGVzLmhlYWRlck1lbnUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJNZW51ID0gc3RhdGVzLmhlYWRlck1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkOiBjaWR9ID0gcG9zdC5jYXRlZ29yeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWVudS5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGhlYWRlciBtZW51IGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51LmFjdGl2ZSA9IG1lbnUuaWQgPT09ICtjaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVudS5pZCA9PT0gK2NpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IG1lbnVzIGluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1lbnUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lbnUuY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUuY2hpbGQubWFwKChjaGlsZE1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjaGlsZE1lbnUuaWQgPT09ICtjaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTWVudS5hY3RpdmUgPSBhY3RpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IG1lbnVzIGluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdXhTdG9yZS5kaXNwYXRjaChzZXRIZWFkZXJNZW51KGhlYWRlck1lbnUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNpbWlsYXIgcG9zdHNcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BpZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaGVzX2FueSc6IHBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFncy5pZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXRjaGVzX2FueSc6IGFyclBvc3RUYWdJZC5qb2luKCcsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGdldFNpbWlsYXJQb3N0cyA9IFBvc3RDYXRlZ29yeVNlcnZpY2UuZ2V0TGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogSlNPTi5zdHJpbmdpZnkoZmlsdGVycyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xhdGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnZXRTaW1pbGFyUG9zdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBnZXRTaW1pbGFyUG9zdHMudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5wb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltaWxhclBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnBvc3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7bWVudXMsIHBpZCwgc2x1ZywgcG9zdCwgc2ltaWxhclBvc3RzfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2dldEluaXRpYWxQcm9wcycsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGlkOiBwcm9wcy5waWQsXHJcbiAgICAgICAgICAgIHNsdWc6IHByb3BzLnNsdWcsXHJcbiAgICAgICAgICAgIGlzU2hvd0JhY2tncm91bmQ6IGZhbHNlLCAvLyBTaG93IGJhY2tncm91bmQgd2hlbiBwb3N0IGNvbnRlbnQgbm90IGV4aXN0IGltYWdlIGVsZW1lbnRcclxuICAgICAgICAgICAgbGF0ZXN0UG9zdHM6IFtdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeVNpbWlsYXJQb3N0czogW10sXHJcbiAgICAgICAgICAgIGxpZ2h0Ym94OiB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9JbmRleDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW1hZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMYXRlc3QgcG9zdHNcclxuICAgICAgICAgICAgdGhpcy5nZXRMYXRlc3RQb3N0cygpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGF0ZXN0IGNhdGVnb3J5IHNpbWlsYXIgcG9zdHNcclxuICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVNpbWlsYXJQb3N0cygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnY29tcG9uZW50RGlkTW91bnQnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogUEFUSCxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGlkICE9PSB0aGlzLnN0YXRlLnBpZCAmJiB0aGlzLnByb3BzLnNsdWcgIT09IHRoaXMuc3RhdGUuc2x1Zykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlkOiB0aGlzLnByb3BzLnBpZCxcclxuICAgICAgICAgICAgICAgICAgICBzbHVnOiB0aGlzLnByb3BzLnNsdWdcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXRlc3QgcG9zdHNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldExhdGVzdFBvc3RzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExhdGVzdCBjYXRlZ29yeSBzaW1pbGFyIHBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVNpbWlsYXJQb3N0cygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdjb21wb25lbnREaWRDYXRjaCcsXHJcbiAgICAgICAgICAgIHBhdGg6IFBBVEgsXHJcbiAgICAgICAgICAgIGFyZ3M6IHtcclxuICAgICAgICAgICAgICAgIGVycm9ySW5mb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW1hZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm15UmVmICYmIHRoaXMubXlSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaG1lbnQgaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNobWVudEZpZ3VyZSA9IHRoaXMubXlSZWYuY3VycmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlndXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRGaWd1cmUgJiYgYXR0YWNobWVudEZpZ3VyZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFjaG1lbnRGaWd1cmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRGaWd1cmVbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhdHRhY2htZW50LWltYWdlJykgfHwgYXR0YWNobWVudEZpZ3VyZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2F0dGFjaG1lbnQtYWxidW0taXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSBhdHRhY2htZW50RmlndXJlW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UgJiYgaW1hZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNyYyA9IGltYWdlWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gaW1hZ2VbMF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbHQgPSBpbWFnZVswXS5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodGJveDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGlnaHRib3gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvSW5kZXg6IGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodGJveDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5saWdodGJveCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvczogaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBdHRhY2htZW50IGFsYnVtXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNobWVudEFsYnVtcyA9IHRoaXMubXlSZWYuY3VycmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdHRhY2htZW50LWFsYnVtJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRBbGJ1bXMgJiYgYXR0YWNobWVudEFsYnVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFjaG1lbnRBbGJ1bXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnRBbGJ1bVJvdyA9IGF0dGFjaG1lbnRBbGJ1bXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXR0YWNobWVudC1hbGJ1bS1yb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2htZW50QWxidW1Sb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGF0dGFjaG1lbnRBbGJ1bVJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxidW1EaW1lbnNpb25zKGF0dGFjaG1lbnRBbGJ1bVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2hhbmRsZUltYWdlcycsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFsYnVtRGltZW5zaW9ucyA9IChhbGJ1bVJvdykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChhbGJ1bVJvdyAmJiBhbGJ1bVJvdy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxidW1Sb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxidW1IZWlnaHQgPSBhbGJ1bVJvd1tpXS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSBhbGJ1bVJvd1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsVGltZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGJ1bUhlaWdodCAmJiBpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsVGltZVtpXSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5IZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIGludGVydmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJ2YWxDb3VudCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFRpbWVbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2VzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlc1tqXS5jb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsVGltZVtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluSGVpZ2h0IDw9IDAgfHwgKG1pbkhlaWdodCA+IGltYWdlc1tqXS5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQgPSAraW1hZ2VzW2pdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluSGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsYnVtUm93W2ldLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgbWluSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxidW1Sb3dbaV0uc3R5bGUuaGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvclxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2hhbmRsZUFsYnVtRGltZW5zaW9ucycsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBQQVRILFxyXG4gICAgICAgICAgICAgICAgYXJnczoge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExhdGVzdFBvc3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXRlZ29yeX0gPSB0aGlzLnByb3BzLnBvc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHtzaG9ydGVufSA9IGNhdGVnb3J5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3J0ZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BpZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaGVzX2FueSc6IHRoaXMucHJvcHMucGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBnZXRQb3N0cyA9IFBvc3RDYXRlZ29yeVNlcnZpY2UuZ2V0TGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogSlNPTi5zdHJpbmdpZnkoZmlsdGVycyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xhdGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdldFBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9zdHMudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5wb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnBvc3RzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFBvc3RzOiBwb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEVycm9yXHJcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnZ2V0TGF0ZXN0UG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogUEFUSCxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXRlZ29yeVNpbWlsYXJQb3N0cyA9ICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7Y2F0ZWdvcnl9ID0gdGhpcy5wcm9wcy5wb3N0O1xyXG4gICAgICAgICAgICBjb25zdCB7c2hvcnRlbn0gPSBjYXRlZ29yeTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG9ydGVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVycyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwaWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZG9lc19ub3RfbWF0Y2hlc19hbnknOiB0aGlzLnByb3BzLnBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2V0UG9zdHMgPSBQb3N0Q2F0ZWdvcnlTZXJ2aWNlLmdldExpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IHNob3J0ZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xhdGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdldFBvc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9zdHMudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5wb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhLnBvc3RzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2ltaWxhclBvc3RzOiBwb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnZ2V0Q2F0ZWdvcnlTaW1pbGFyUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogUEFUSCxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsaWdodGJveDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGlnaHRib3gsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gRXJyb3JcclxuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdvbkNsb3NlTGlnaHRib3gnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogUEFUSCxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdWJNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHttZW51cyA9IHt9LCBwb3N0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGxldCBhcnJNZW51cyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbWVudXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVudXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBtZW51cy5zbHVnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcG9zdC5jYXRlZ29yeSAmJiBwb3N0LmNhdGVnb3J5LmlkICYmIG1lbnVzLmlkID09PSBwb3N0LmNhdGVnb3J5LmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZiAobWVudXMuY2hpbGQgJiYgbWVudXMuY2hpbGQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJNZW51cyA9IGFyck1lbnVzLmNvbmNhdChtZW51cy5jaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcnJNZW51cyAmJiBhcnJNZW51cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJNZW51cy5tYXAoKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW51LmlkfSBjbGFzc05hbWU9e2NsYXNzbmFtZSh7J2FjdGl2ZSc6IG1lbnUuYWN0aXZlfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jYXRlZ29yeS1ieS1pZD9zbHVnPScgKyBtZW51LnNsdWcgKyAnJmNpZD0nICsgbWVudS5pZH0gYXM9eycvJyArIG1lbnUuc2x1ZyArICctYycgKyBtZW51LmlkICsgJy5odG1sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e21lbnUubmFtZX0+e21lbnUubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdyZW5kZXJTdWJNZW51JyxcclxuICAgICAgICAgICAgICAgIHBhdGg6IFBBVEgsXHJcbiAgICAgICAgICAgICAgICBhcmdzOiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaW1pbGFyUG9zdHMsIHBvc3QgPSB7fX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7aXNPcGVuLCBwaG90b0luZGV4LCBwaG90b3N9ID0gdGhpcy5zdGF0ZS5saWdodGJveDtcclxuXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLm15UmVmfSBjbGFzc05hbWU9e2NsYXNzbmFtZSgnY29udGFpbmVyJywgc3R5bGVzWydjb250YWluZXInXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdCAmJiBwb3N0LnRpdGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1uYXZiYXJcIiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdjbGVhcmZpeCB3MTA0MCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1Yk1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ2NvbnRhaW5lci1ib2R5J10sICdjb250YWluZXItYm9keSBjbGVhcmZpeCB3MTA0MCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZSgnY2xlYXJmaXggdzEwNDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1sncG9zdC13cmFwcGVyJ10sICdjb250YWluZXItbGVmdCBmbCB3NzIwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3Bvc3QtdGl0bGUnXSl9Pntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ21ldGEtc291cmNlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydzb3VyY2UnXSl9PlRIRU8ge3Bvc3Quc291cmNlTmFtZSA/IHBvc3Quc291cmNlTmFtZSA6ICdWTkVYUFJFU1MnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWyd0aW1lJ10pfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4ge3Bvc3QudGltZSA/IG1vbWVudChwb3N0LnRpbWUsICdZWVlZLU1NLUREIEhIOm1tOnNzJykuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tOnNzJykgOiAnMjEtMDktMjAxOSAxMjoyNzo0MCd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydzb2NpYWxzJ10pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydwb3N0LWNvbnRlbnQnXSwgJ3Bvc3QtY29udGVudCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3Bvc3QtbWVudS1uYXZiYXInXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ2dvLXRvLWhvbWUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiVHJhbmcgY2jhu6dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24taG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydzaGFyZS1mYWNlYm9vayddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsnbm9mb2xsb3cnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDaGlhIHPhursgYsOgaSB2aeG6v3QgbMOqbiBGYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nICsgcG9zdC5ocmVmfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ2dvLWJhY2snXSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NhdGVnb3J5LWJ5LWlkP3NsdWc9JyArIHBvc3QuY2F0ZWdvcnkuc2hvcnRlbiArICcmY2lkPScgKyBwb3N0LmNhdGVnb3J5LmlkfSBhcz17Jy8nICsgcG9zdC5jYXRlZ29yeS5zaG9ydGVuICsgJy1jJyArIHBvc3QuY2F0ZWdvcnkuaWQgKyAnLmh0bWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3Bvc3QuY2F0ZWdvcnkgPyAnVHLhu58gduG7gSAnICsgcG9zdC5jYXRlZ29yeS5uYW1lIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi11bmRvMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3Bvc3QtZGVzY3JpcHRpb24nXSl9Pntwb3N0LmRlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNTaG93QmFja2dyb3VuZCAmJiBwb3N0LmJhY2tncm91bmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3Bvc3QtYmFja2dyb3VuZCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtwb3N0LnRpdGxlfSBzcmM9e3Bvc3QuYmFja2dyb3VuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydwb3N0LWNvbnRhaW5lciddKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudH19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1sncG9zdC1zb3VyY2UnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhlbyA8c3Bhbj57cG9zdC5zb3VyY2VOYW1lID8gcG9zdC5zb3VyY2VOYW1lIDogJ1ZORVhQUkVTUyd9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1sncG9zdC1zaGFyZSddKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnRhZ3MgJiYgcG9zdC50YWdzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydwb3N0LXRhZ3MnXSwgJ2NsZWFyZml4Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvdGFnP3NsdWc9JyArIHRhZy5zbHVnfSBhcz17Jy8nICsgdGFnLnNsdWcgKyAnLmh0bWwnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9e3RhZy5uYW1lfT4je3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoJ2NvbnRhaW5lci1yaWdodCBjb2wtc3RpY2t5IGZyIG10LTIwIHczMDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1pbGFyUG9zdHMgJiYgc2ltaWxhclBvc3RzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFySGlnaGxpZ2h0V2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLnBvc3QucGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zdGlja3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQsOgaSB2aeG6v3QgbGnDqm4gcXVhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17J25vcm1hbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3NpbWlsYXJQb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKCdjbGVhcmZpeCB3MTA0MCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydwb3N0LXdyYXBwZXInXSwgJ2NvbnRhaW5lci1sZWZ0IGZsIHc3MjAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZShzdHlsZXNbJ3Bvc3QtcmVsYXRlZCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbWlsYXJQb3N0cy5sZW5ndGggPj0gNCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2ltaWxhck5ld3NXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLnBvc3QucGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkLDoGkgdmnhur90IGxpw6puIHF1YW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnbm9ybWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3NpbWlsYXJQb3N0cy5maWx0ZXIoKHBvc3QsIGtleSkgPT4ga2V5ID4gMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcnlTaW1pbGFyUG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoc3R5bGVzWydwb3N0LXJlbGF0ZWQtdGl0bGUnXSl9PlRpbiBt4bubaSBjw7luZyBjaHV5w6puIG3hu6VjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbkxvYWRpbmc9eyF0aGlzLnN0YXRlLmNhdGVnb3J5U2ltaWxhclBvc3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9eydub3JtYWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM9e3RoaXMuc3RhdGUuY2F0ZWdvcnlTaW1pbGFyUG9zdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWUoJ2NvbnRhaW5lci1yaWdodCBjb2wtc3RpY2t5IGZyIG10LTIwIHczMDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJOZXdzV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9uTG9hZGluZz17IXRoaXMuc3RhdGUubGF0ZXN0UG9zdHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkLDoGkgdmnhur90IG3hu5tpIG5o4bqldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9eydtZWRpdW0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cz17dGhpcy5zdGF0ZS5sYXRlc3RQb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxHYXRld2F5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e3RoaXMub25DbG9zZUxpZ2h0Ym94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg9e3Bob3RvSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3cz17cGhvdG9zLm1hcCh4ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHguc3JjU2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb246IHgudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWxHYXRld2F5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1sncG9zdC1ub3QtZm91bmQnXSwgJ3cxMDQwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiUGFnZSBub3QgZm91bmRcIiBzcmM9e1BhZ2VOb3RGb3VuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5YaW4gbOG7l2kgYuG6oW4sIGNow7puZyB0w7RpIGtow7RuZyB0w6xtIHRo4bqleSBiw6BpIHZp4bq/dCBuw6B5LiA8YnIgLz4gTeG7nWkgYuG6oW4gcXVheSB24buBIHRyYW5nIGNo4bunIMSR4buDIHhlbSBuaOG7r25nIHRpbiB04bupYyBt4bubaSBuaOG6pXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiVHLhu58gduG7gSB0cmFuZyBjaOG7p1wiIGNsYXNzTmFtZT17Y2xhc3NuYW1lKHN0eWxlc1snZ28tYmFjay10by1ob21lJ10pfT5UcuG7nyB24buBIHRyYW5nIGNo4bunPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Vycm9yLTQwNC0yNzYzM2NhOWQxOTU5ZWM0NmYxMjYwMTE5NmRkMjdkNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFwUUFBQUZ6Q0FJQUFBQVBCQTdNQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5UnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU15MWpNREV4SURZMkxqRTBOVFkyTVN3Z01qQXhNaTh3TWk4d05pMHhORG8xTmpveU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVFdGamFXNTBiM05vS1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR01ESTRSalkzT1VFNVFqSXhNVVU1UVRJME1FWXlSa0UyUlRkRU5FTTNNeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHTURJNFJqWTNRVUU1UWpJeE1VVTVRVEkwTUVZeVJrRTJSVGRFTkVNM015SStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1l3TWpoR05qYzNRVGxDTWpFeFJUbEJNalF3UmpKR1FUWkZOMFEwUXpjeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rWXdNamhHTmpjNFFUbENNakV4UlRsQk1qUXdSakpHUVRaRk4wUTBRemN6SWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzRiaytjUUFBRk5oSlJFRlVlTnJzM1FsVFUyY2JnR0VTUUFSRVFVcFpIRzExbkZiSHNaMXBwLy8vRjNTbXVJL1R6NlZWMlRjRldVTytwN3cyalN3QmtweUVBOWMxVTRhd3hSNUM3anduN3prcExDMHRkWFIwbE12bFFxR1Ezblp3OXNTdnhrWUFJQ21JTjNpTUJXY3VUbUowd25pM1lIdTE3SzdOYngyQTh4enZ4Y1ZGdFFNQThRWUFNb3QzMm0wT0FJZzNBQ0RlQUlCNEE0QjRrd2tIRU9mbUw4cmFUMEM4RVcveEJoQnY4VWE4QWZGR3ZCRnZRTHdSYi9FR0VHL3hScndCOFVhOEVXOUF2QkZ2OFFZUWIvRkd2SUh6cG1nVDVDVUpxUXFWdDlVWHF6OSs3R2RyWEhRVkRWNkZjZ090MFhXU21TL3VrdExiNm91R0VyQ0RCRElkV3RMZjFLRU5PcGlreXNlUC9XeU5pM201Q3BNM0FHY3UyelpDYmVJTkFEblRWZCszZVZnRUFEbUx0K2U4QWFCZDdEWUhBUEVHQU1RYkFLaXdZQTBBTGthOExWZ0RnSGF4Mnh3QUxzYmtiWVlHZ0p6RjIyNXpBR2dYdTgwQlFMd0JBUEVHQUJxTmQzcjJ1dnB0OWNWOW45MzNaWEJlMWYxM2NmRFBwTDZMcnNKVm5JK3JxT05hV3ZEWGQ2YXVvaXVMKzZrYUh3Y0Eyak41QXdEaURRQ0lOd0NJTndBZzNnQ0FlQU9BZUFNQTRnMEFpRGNBaURjQUlONEFnSGdEZ0hnREFPSU5BSWczQUlnM0FDRGVBSUI0QTRCNDJ3UUFJTjRBZ0hnREFPSU5BT0lOQUlnM0FDRGVBQ0RlQUlCNEF3RGlEUURpRFFDSU53QWczZ0FnM2dDQWVBTUE0ZzBBNTFoaGFXbkpWZ0FBOFFZQXhKdU9qbks1WENnVTB0dnFpLy84SXYvOStMR2ZyWEhSVlRUbEtvQkd5N1QzWjRWNEE0QjRBd0RpRFFDSU53Q0lOd0FnM2dDQWVBT0FlQU1BNGcwQWlEY0FpRGNBSU40QWdIZ0RnSGdEQU9JTkFJZzNBSWczQUNEZUFJQjRBNEI0aXpjQWlEY0FJTjRBZ0hnRGdIZ0RBT0lOQUlnM0FJZzNBQ0RlSEs1Y0xoY0toZlMyK3VJL3Y4aC9QMzdzWjJ0Y2RCVk51UXFnMFRMdC9Wa2gzZ0FnM2dDQWVBTUE0ZzBBNGcwQWlEY0FJTjRBSU40QWdIZ0RBT0lOQU9JTkFJZzNBQ0RlQUNEZUFJQjRBd0RpRFFEaURRQ0lOd0FnM2dBZzN1SU5BT0lOQUlnM0FDRGVBQ0RlQUlCNEF3RGlEUURpRFFDSU41d1Y1WEs1dU9mTEgweWhZSnRrdXJYajdlNGVXeHZFRytyNjh5Z1VPanM3SXlTZjkyeHNiS1Nva05IVzd1bnA2ZTN0N2UvdjcrcnFxaVFjRUc4NHFjaDJESUp6YzNQdjM3OWZXVm5aM055TWkyYkJUTWZ1Mkx6ZDNkMVhybHdaR3h1N2NlTkcvQXBLcFpJdEErSU5KeEtUWDR6YUwxNjhtSm1aaWFoRVJTcDd6c2xVR3Joam13OE9Edjc0NDQvRHc4UFI3N1E3SFJCdnFEVnp4Nmo5OU9uVDVlWGxHQVJOMjIyeHM3TVRHLy8rL2ZzVEV4TXA1N1lKaURjY0xpYnNUNTgrVFU1T3JxMnR4Znh0ZzdSM0NvOWZ4NE1IRDhiR3hqei9EVi9kVTlrRVVGM3V6YzNORnk5ZUtQY1orWFdVU3FXWEwxK3VyS3gwZG5iYUlDRGVjSWhDb2ZEKy9mdkZ4VVhsUGlPaTJldnI2NjlldmJKeURjUWJEcC96b2hNZlBuendKUGRaNi9mQ3drSThvako4UTRYeEF2NkxkMFNpeGc1elJ4NW52ZjBQWGRJZmo2VzJ0N2RuWm1aR1JrWnNKUkR2L0VrSHdsYU9OcTVjVEhkd0oveHNqWXNYK1NwU201ZVhsNC9hK0tWU3FidTcrK3JWcStieWpNVERwdlgxOVVQSDY5am1IejkrM05yYVNpZHZzYTNPUFg5bDRuME9iOUNWbTNYVEwxN3dxNGdxcks2dUhucXZFZVcrY3VYS2d3Y1BJdDZPV2Nyb3RwMldDczdPemg3c2QxcElHQzVkdW1UN3d6L3hybkhTcUJwL0pCNFdtYnpQMytRZFlyWTdhc3Zmdkhuem0yKytpWDRjKysra3Z0dDJmMy8vblR0M0ZoWVdEdDRweGNXZFBiWHZsekI1bTd6aEl2YWp4bDFKekh6cFZGOHAwdW1MSzkreTd5SjFpTTBiR3puRzd1M3Q3VVB2dTIxZXFMRGFITXdCT1hqOEJJZzNBT1NZM2ViNW0vOHNXTXZpS2s0N2d0ZSthckw3RTdDRlFieHp4b0sxckJlc25mQlhjTlJWZE5qeG0vMmZnQzE4Y1FZVnhCdmFQeTlXN28vSy83SmxBUEdHTTlmc3pzN09lRnNxbFNwSE9zWEZycTZ1OUVxanU3dTdUdGtOaURlY2xXeEhvU1BNaTR1TEN3c0xIejkrM05qWVNFZWFGWXZGS0hkZlg5L2c0T0R3OEhCL2YzOThVTUlCOFlaMlNpZm9ucDZlL3V1dnY1YVdsbEtZNDRQVlQ0ckh4NmVtcG5wNmVrWkhSMi9kdWhVSlQybTM5UUR4aGxicjdPemMydHI2ODg4LzM3OS9IejJPaXpGbkgvcGxIWHNuZEh2ejVzM3M3T3pkdTNjbkppWjJkM2YxR3hCdmFKM29ibGRYMStycTZwTW5UMkt3VGs5c0h6dWpoNDJOamZpV3RiVzFPM2Z1eEVVdnZBRWN5MGxhb0dremR3VDQwYU5IeTh2TGFUM2F5Yjh4bXYzNjlldi8vZTkvSFE2U0FjUWJXak56UjMxM2RuYWVQMy8rOGVQSG8xNE92SVlJZHZ5RXQyL2Z2bnYzcnZMc09JQjRRMWJTTWR5UjN2bjUrVHJLWGZraDhmYlZxMWVSZi9FR3hCc3lIN3RYVjFmVDBOelFYMk94dUw2Ky92ZmZmM2ZZZVE2SU4yUTZkc2ZibVptWmpZMk5CdVBkc2ZmODk5emNYRHdVYVB4SEFlSU5IR2w3ZTN0K2ZyNHBzM0kwZTJ0cmEyRmh3VllGeEJzeSt4TXFGdGZXMXRiWDE1czRLeTh0TGUzdTdyWjN6M2xhQSsvM0MrSU41MUFrOXZQbnp6RjhONnUxOFhQaTBVQWJqL1pPcDJTUDZYOTFkYlh1OVhlQWVNUFpMWGU1WE43YTJtcnVtZEZLcFZJVEh3M1VVZTc1K2ZuSnljbG56NTdGNDVKME1qaEF2T0ZjYWZxVW5GNnFwUFh4VHErbk1qTXo4K1RKazUyZG5lWGw1VWVQSHEydnI1dS9RYnpoSE03ZkdjMzBMZjRmaVNFN3l2MzA2ZE90cmExNFA1b2QvVTZuYnRWdkVHODRKNkt2YVZyTllnSnU4ZjlMZDNmMzNOeGNwSHA3ZTd1eXF6eitHWXVMaS9IQmpZME4vUWJ4aHZPanA2ZW5XQ3cyYTFDT254TS9NRXJac3NrN0hpdEV1V2RuWi9lVnU5THZwYVVsKzg5QnZPSDgyTjNkN2V2cmk5dzJNZDVYcjE1dDVXRmFhWVZhbER2dExULzRCZEhzaFlXRng0OGZtNzlCdk9FOGlOYjI5dllPREF3MEpkN3BaS3REUTBPdGVjNDd6ZHhSN2hpc2p5cDNFbDhXL1o2Y25OUnZFRzg0RDZKNW82T2pUY2x0elBIeE9DRGkzWnB5UjRiVDg5eTF5MTNwOStMaVl0cC83dmd4RUcvSTkrUWRob2VIQndjSEd6eG1MQVY3WW1MaTh1WExXWitrSlpWN2RuYjI4ZVBIbTV1Yko0eHhwZC9tYnhCdnlMR29ZSVMycDZmbjl1M2JrY0JTcVZUM2o0cnZqUWNCNCtQaldZL2Q2VXdzMDlQVEo1eTVxNlgxYTVPVGs0NGZBL0dHZkl2dWpveU0zTGx6SnczaTlmMkUzdDdlSDM3NElhYmJUTWZ1eXN4ZE9aNzd0RDhoSGY4ZDN4Nzl0djhjeEJ2eU9ueW5jNkxGOEIzOTN0N2VQbTE5STZMUjdJY1BIMTY3ZHEyUjJmMkU1VTduVUR0NFZOaXArcjI0dUdqOU9ZZzM1RnVhdVdOMHZuZnZYbHpjMmRrNTRYZEZ1YTlldmZycnI3OE9EdzlIVURQOVIxWm03a2JLWFQxL1I3OGQvdzNpRFRtZXYyUGdqcm41N3QyN3YvenlTOHpRMGUrNGVPaGU5UGhnZkhGOFFieHo2OWF0MzM3N2JYQndNT3R5cDNPb1JXN3IyMXQrMVB5ZDFxL1pmdzZ0NVBFeU5IbitqZ2FQakl4RWpLZW1wcWFucHo5OStwUWlYYWw0WWMvbHk1ZUhob1p1M0xoeC9mcjE5RjJ0S1hmak0vZkJmazlPVHY3ODg4L3hmM1RDL1EyQWVNTlo3SGV4V0x4NTgrYjQrUGphMnRycTZ1cjYrbnA2NWRBSVowOVBUMTlmMzhEQVFOUXVLbjdVZE43RVhRSnhwYzJkdWZjOUxFano5OE9IRCtQL0tOUG43QUh4aGd6dDdvbHdYdDFUL2NwajZlVk0wcDd6MWh6UFhmMWFZUm1OOWFuZlAvMzBVMjl2ci9rYnN1WTViOGgyQ2kvdFNjOS9WOVI0T3J6cE0vZjA5SFNtNWY0eUIvejcraVdycTZ2V3I0RjR3L2tKZWQxSGdkYzljemR5UEhkOS9YN3k1TW5uejUvMUc4UWJxQ2VsNlJ4cXpWMmhkdXlWcnF5c3hQeXQzeURld09sbTd2VDYzRTA1bnZ1MDR1b2MvdzNpRFp4Ni9NM2lxTEJUL1FNYy93M2lEUmRsWW03OGgyUjBQSGNkLzR4MC9MZnpwNEo0dzduTmRyRlliSEF0VzlwYkh1V09rYmMxSzlSTzBtK3ZId3JpRGVlejNDRUtsOTZwKzRlazQ3bmJQblB2Ni9mUzB0SWZmL3hoL1JxSU41eXJjcWVucUgvLy9mZEliMzNSYmVYeDNLZVZqaCtMaHhSZVB4VEVHODVQdWRQcHoxWlhWMSs4ZUJFQmpvK2NhdjV1elRuVUdwKy9yVDhIOFlaelV1Nm9kZHJSSFlYYjJkbUpBTWRISXNBbjdIZWF1YWVtcHRweVZOaXA1dTkwL0hmTTMvb040ZzM1bnJtajNOSHNGTjFpc1JqdlAzdjJMRDUrd3ZrN3ZlSklmRXZsaDV4WjZmanZkUDYxK0Q5MUd3RHhocHhKNVk2U2xVcWw2dWpHK3pGQXg4ZFAwdTkwSnBZMHVPY2loL0YvdExDdzhQTGx5L1RTTEc0R0lONlFzNW43cUIzZDhaRVlveVBKNmZudkd1V09tYnZGWno5dHl2d2QvK0NXbmVBZHhCdG9UcjJPZmJHUXl2d2RYeG1SM2pla1ZoL1BuYTl5ZjduVHNjOGN4QnZ5TlhPbmNtOXVidGFPYm54bG1yK25wcWFxOTUrZnplTzVnUmF6N0JOYVYrN0tBVjBuV1hHZDV1L256NS9IKzJOalk2VlNxVEs0NTI1dk9TRGVrTU8vdEg5WHFKMHF1cW5mMGZ0eXVUdytQbDRzRmo5OCtQRHMyVFBsQnZFR01wKzUwMHRyMTNGQVZ3UTdadTZZdjlQNXo1VWJFRzlvVWJrZlAzNjg3Nml3VS9VN0hmOGQ3NS85NDdrQjhZYmNsenM5ejExM3Vhdm43dzVMdFFIeGhrekxYVGtxckNrN3VwM1ZCQkJ2YUZHNXorYUxoUUM1WmhjY1pGanVZNC9uQmhCdmFIKzVxOC9FNGhXMGdDeTRaNEhtU0MrMmtkYVdwK2U1bFJzUWI4akJ6RjMzOGR3QTRnMnRucm03dTdzL2ZQaHc4RlUrQVpyT2M5N1FoSEpYOXBZck55RGVjTmFsczVhbTg1YmJXdzZJTitUaFQ2aFlYRmhZaUpsYnVRSHhodHhNM3N2THk1dWJtMDVjQ29nMzVLUGM2VGx2NXk0RnhCdnkxRzhiQVJCdkFFQzhJVFBsY3RsR0FNUWI4c1J1YzBDOEFRRHhCZ0R4QmdERUd3QVFid0FRYitBZ2g0b0JyZWYxdktFaGhVS2hWQ3B0YjIvdjd1N2FHc2VLYmJXenMyTTdnSGhETzBXenIxMjc5djMzMzN0aGtoTnVyb0dCQWRzQnhCdmFwcnhuWkdSa2ZIemMxamg1djJQNDluUURpRGUwVFhwaHNhMnRyZlNPRFFLMGdCMTlBQ0RlQUlCNEF3RGlEWnc1WHFJTnhCdWFKaDNETFMxWnMrSVBUc2hxYy9odjdLdHhyUGJTMHRMRXhFUjNkM2NsTTJsNWVTcDY1YUxOV0xmT3pzN2w1ZVh0N2UyREQ1Sml3OFpuSFVrUDRnMzc4eERONk8zdFhWMWRQYlFyNzk2OWl5OFlIUjNkVit0S3M4Vzd3VWRPS3lzcnIxKy83amhpRDBmM0hsc1l4QnUrRW9QZHdNREE3T3pzb1dtSmJMeDU4K2J0MjdjMlZIYVBuNHA3RG41cWQzZjM4aDdub0FYeGhxL0tFVyt2WDc4ZWVhN3NETi9YNzY2dUxwTmZwc04zamM4T0R3OTNkblk2THpxSU4zeWxWQ29ORGc0T0RRM056ODlIcCtzSURGbUlhYnUzdDNkMGROVFlEUlVXZ01CL3czYzArN3Z2dmpOaG42bGZTcGlZbU9qdjd4ZHZFRzg0ZlBnZUhoNk9ma2NuOVBzczJOblpHUmtadVhYcmxsOEhpRGNjT2VmRjI5dTNiOSs0Y1NOQ0xoaHRML2ZRME5DOWUvY3VYYnBrN0lacW52T0cveFFLaFloRXNWaU1ZSFIxZGIxNTgrYWZQNUl1ZnlhdFZ0b3pOaloyLy83OXk1Y3Z4L3UyQ1h4MVo3VzR1SGpVR3B3YVk0ZGxPNXp2K1RzZHN6UXpNL1BxMWF1VmxaWDBFVGY3Rm16NWVQQ1VEcmovN3J2dmJ0NjhHWnM5eW0zTGczam4rNjd0cUxONlZaOHdwUFpuYTF4MEZmcytHelAzOXZiMndzTEMzTnpjMnRyYTV1YW1uYmVaN3Zibzd1N3U2K3U3ZnYzNnQ5OStHLzJPYk52Z0YvYkdZQ1BVWm44Z0hQbFFLY29kazkvbzZPalkyRmk4N3lEanJNWFdqbjZuYVRzMnVBMEM0ZzMxUFB6ZjNaTk9lMzdwMGlVRFFhYlMxdllNTjRnM05DSGg2V2pqMVBKajk4d0RaTTJoWWdBZzNnQ0FlQU1BNGcwQTRnMEFpRGNBSU40QUlONEFnSGdEQU9JTkFPSU5BSWczQUNEZUFDRGVBSUI0QXdEaURRRGlEUUNJTndBZzNnQWczZ0NBZUFNQTRnMEE0ZzBBaURjQUlONEFJTjRBZ0hnREFPSU5BT0lOQUlnM0FDRGVBSUI0QTRCNEF3RGlEUUNJTndDSU53QWczZ0NBZUFQQWVkRVYvNVhMNVVLaGNQQnpoMzZ3b3ZKZDZaMTRtNzdscUl1MWZ4b0E3T3NMUnlrc0xpNGUyK2xEdDJ3OVYrYVgwY0JOMlVZQUxrcVp4Q0tqZUp1ODIvaG85Tmd0ZjZyZlMvVkZWOUhnVmJpSkFpMks5OUxTVWgzM095WnZremVBNGJ0ZGlxcVFsOXR4dWlsWDNsWmZyUDc0c1ordGNkRlZOT1VxQURLUGd0M21KbThBazNmT3RvL2Q1dUlOb056NVVtd2t3NmZhNitpWDBlQk4yVDV0VitFcVhNVkZ1SXEwczViYTdEWTNlUU1ZdnZNMmVkZTNnVkpMVXYrcjAxTGpvdnlZdkMxWUEyaE9GRXplSm04QWsvZUZpTGNGYStJTm9OeHQyMFQxclRZM2ViY3I0VTUvNWd4ckFIYWJtN3dCRE44NVUrZExnbHF3MXZyYnNkVmtGcXdCTkJSdngza0RRTnNtT21kWXl3WDdMWUFMVkNheE9IYnlsdUc4M0pUdDAzWVZyc0pWT01NYXpyQm04Z1l3Zk9keis5aHRMdDRBNHAwdlhwZ2tON2RqTzlhc05nZjRjbmZrREdzbWJ3QmpkODQyVVNObldQUDdhSDNDbmY3TUdkWUFMRmd6ZVFNWXZpOUd2TzAyRjI4QThUWjVjOUp0YnArMjNlYkFSWSszUThWTTNnREc3Z3MwZWZ0OW1MeGRoY2tieUZtODdUWTNlUU1ZdnR1d2ZldzJGMjhBNVRaNW03d3pUTGg5Mm5hYkF6aFV6T1FOWVBMTzJ5WnloaldUdDhuYjVBMWNpTW03dzI1emt6ZUE0VHRmOGJiYlhMd0JsTnZrelVtM3VYM2FkcHNENGkzZUptOEF3M2VlRkJ0cFNYbFBkVnBxWEpTZkJtL0g2YVpjZVZ0OXNmcmp4MzYyeGtWWDBaU3JBREI1WS9JR1RONTh2WDJjWVUyOEFaVGI1RzN5empEaFZwTlpzQVlnM2ladkFNTjN6aFRyMjBBV3JMWCtkbXcxbVFWckFDWnZremVBeWZzaXhkdUNOZkVHVU82MmJhSkdYcGpFNU4zNmhGdE5ac0VhZ04zbUptOEF3M2ZPT01OYWJtN0hWcE5ac0FiUVVMenJ1Tzl6MXdZQXpabm9uR0V0Rit5M0FDNVFtY1RpMkUzVXlIUGVmaCt0VDdqVlpCYXNBVml3WnZJR01Iem5iZnZZYlM3ZUFPS2RMOFZHTW16QldpdHZ4NWFDVzIwTzhPWHV5Qm5XVE40QXh1NmNiYUpHenJEbTk5SDZoRnROWnNFYWdBVnJKbThBdy9mRmlMZmQ1dUlOb053bWIwNjZ6ZTNUdHRzY3VPanhkcWlZeVJ2QThKMHZSVlhJeSszWWNWd09GUVA0Y25ka3Q3bkpHOERrbmJQdFk3ZTVlQU1vdDhuYjVKMWh3cTBtczJBTndLRmlKbThBdzNmT0ZHMmd2TnlPclNhellBMmdvY203dzI1emt6ZUF5VHRmOGJiYlhMd0JsTnZrelVtM3VkVmtGcXdCNGkzZUptOEF3M2VlRkJ0cFNYbFBkVnBxWEpTZkJtL0hWcE5ac0FaZzhqWjVBNWk4ODdsOW5HRk52QUdVMitSdDhzNHc0VmFUV2JBR0lONG1id0REZDg3VWVZWTFDOVphZnp1Mm1zeUNOWUF2OFc3azJldFQzZmU1YThQZUVZRG1USFRPc0NZTUFHZXJUR0p4N0NhcWI3VjVoK2U4MjVSd3E4a3NXQU93WU0za0RXRDR2aGp4dHR0Y3ZBSEV1MTJLald4V0M5WmFlVHUyRk54cWM0QXZkMGZPc0dieUJqQjI1MndUTmZLY3Q5OUg2eE51TlprRmF3QVdySm04QVF6ZmVkcytkcHVMTjRCeTU0c3pyT1htcG13MW1RVnJZRnpoeTkyUlE4WGNsQUZNM2ptYnZPdmJScmFzeWR0VnVBcFg0U3F5dUlxMFRJcmEvaS9BQU83YytUOHl1WXZOQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHtzZXJ2aWNlc30gZnJvbSAnU2VydmljZXMvc2VydmljZXMnO1xyXG5pbXBvcnQgQ29uc3RhbnQgZnJvbSAnQ29uZmlnL2NvbnN0YW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gc2VydmljZXMuZ2V0KHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgQVBJX0hPU1Q6IENvbnN0YW50LkFQSV9IT1NUICsgJ3Bvc3QvY2F0ZWdvcnknfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0KHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHNlcnZpY2VzLmdldExpc3Qoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBBUElfSE9TVDogQ29uc3RhbnQuQVBJX0hPU1QgKyAncG9zdC9jYXRlZ29yeSd9KTtcclxufSIsImltcG9ydCB7c2VydmljZXN9IGZyb20gJ1NlcnZpY2VzL3NlcnZpY2VzJztcclxuaW1wb3J0IENvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHNlcnZpY2VzLmdldCh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIEFQSV9IT1NUOiBDb25zdGFudC5BUElfSE9TVCArICdwb3N0L2luZm8nfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0KHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHNlcnZpY2VzLmdldExpc3Qoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBBUElfSE9TVDogQ29uc3RhbnQuQVBJX0hPU1QgKyAncG9zdC9pbmZvJ30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHNlcnZpY2VzLmNyZWF0ZSh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIEFQSV9IT1NUOiBDb25zdGFudC5BUElfSE9TVCArICdwb3N0L2luZm8nfSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ2NvbmZpZycsIGNvbmZpZylcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuICAgIGdldDogZnVuY3Rpb24gZ2V0KHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyYW1zLmlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9IT1NUICsgJy8nICsgcGFyYW1zLmlkLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldExpc3Q6IGZ1bmN0aW9uIGdldExpc3QocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuQVBJX0hPU1QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFQSV9IT1NUID0gcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX0hPU1QsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5BUElfSE9TVCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgQVBJX0hPU1QgPSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX0hPU1QsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5BUElfSE9TVCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmFtcy5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgQVBJX0hPU1QgPSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLkFQSV9IT1NUO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dChBUElfSE9TVCArICcvJyArIHBhcmFtcy5pZCwgcGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbDogZnVuY3Rpb24gZGVsKHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLkFQSV9IT1NUICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyYW1zLmlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBBUElfSE9TVCA9IHBhcmFtcy5BUElfSE9TVDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuQVBJX0hPU1Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKEFQSV9IT1NUICsgJy8nICsgcGFyYW1zLmlkLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IENvbnN0YW50IGZyb20gJ0NvbmZpZy9jb25zdGFudCc7XHJcblxyXG5jb25zdCB0aXRsZSA9ICdN4bq5byBW4bq3dCBIYXkgLSBDw6FjIG3hurlvIHbhurd0IGhheSB0cm9uZyBjdeG7mWMgc+G7kW5nIC0gbWVvdmF0aGF5LnZuJztcclxuY29uc3QgZGVzY3JpcHRpb24gPSAnTeG6uW8gduG6t3QsIMSR4buNYyBiw6FvLCBjaGlhIHPhursgbeG6uW8gduG6t3QgaGF5LiBN4bq5byB24bq3dCBjdeG7mWMgc+G7kW5nLCBt4bq5byB24bq3dCBsw6BtIMSR4bq5cCwgbeG6uW8gduG6t3QgaMOgbmcgbmfDoHksIHZpZGVvIG3hurlvIHbhurd0Lic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHByb2ZpbGVVc2VyOiBudWxsLFxyXG4gICAgaGVhZGVyTWVudTogW10sXHJcbiAgICBkb2N1bWVudDoge1xyXG4gICAgICAgIGRlZmF1bHRUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVmYXVsdERlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgb2c6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl3b3JkczogW11cclxuICAgIH0sXHJcbiAgICBhcnRpY2xlU3RydWN0dXJlOiB7XHJcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcclxuICAgICAgICAnQHR5cGUnOiAnTmV3c0FydGljbGUnLFxyXG4gICAgICAgICdtYWluRW50aXR5T2ZQYWdlJzoge1xyXG4gICAgICAgICAgICAnQHR5cGUnOiAnV2ViUGFnZScsXHJcbiAgICAgICAgICAgICdAaWQnOiAnaHR0cHM6Ly92bmV4cHJlc3MubmV0L3RydW1wLWR1LWtpZW4tcm9pLXdhc2hpbmd0b24tdHJ1b2Mta2hpLWJpZGVuLW5oYW0tY2h1Yy00MjIxODY2Lmh0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaGVhZGxpbmUnOiAnJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnJyxcclxuICAgICAgICAnaW1hZ2UnOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdJbWFnZU9iamVjdCcsXHJcbiAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly92Y2RuMS12bmV4cHJlc3Mudm5lY2RuLm5ldC8yMDIxLzAxLzE2Lzg2MDI2LTEtMTYxMDc1Njg5NS0xNjEwNzU2OTE2LTcyNjktMTYxMDc1NzE1OS5qcGc/dz05MDAmaD01NDAmcT0xMDAmZHByPTEmZml0PWNyb3Amcz1KeEVoV0pkQnBiU2Q1X0xKWXRoMzB3JyxcclxuICAgICAgICAgICAgJ3dpZHRoJzogNTAwLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogNTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGF0ZVB1Ymxpc2hlZCc6ICcyMDIxLTAxLTE2VDA3OjMzOjEwKzA3OjAwJyxcclxuICAgICAgICAnZGF0ZU1vZGlmaWVkJzogJzIwMjEtMDEtMTZUMDc6MzQ6MTErMDc6MDAnLFxyXG4gICAgICAgICdhdXRob3InOiB7XHJcbiAgICAgICAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxyXG4gICAgICAgICAgICAnbmFtZSc6ICdWbkV4cHJlc3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncHVibGlzaGVyJzoge1xyXG4gICAgICAgICAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcclxuICAgICAgICAgICAgJ25hbWUnOiAnVm5FeHByZXNzJyxcclxuICAgICAgICAgICAgJ2xvZ28nOiB7XHJcbiAgICAgICAgICAgICAgICAnQHR5cGUnOiAnSW1hZ2VPYmplY3QnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL3MxY2RuLnZuZWNkbi5uZXQvdm5leHByZXNzL3Jlc3RydWN0L2kvdjM3MS9sb2dvcy92bmV4cHJlc3NfNTAweDExMC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogNTAwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IDExMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYWJvdXQnOiBbXHJcbiAgICAgICAgICAgICdC4bqndSBj4butIFThu5VuZyB0aOG7kW5nIE3hu7knLFxyXG4gICAgICAgICAgICAnRG9uYWxkIFRydW1wJyxcclxuICAgICAgICAgICAgJ0Lhuqd1IGPhu60gVOG7lW5nIHRo4buRbmcgTeG7uScsXHJcbiAgICAgICAgICAgICdUaW4nLFxyXG4gICAgICAgICAgICAnVGluIG7Ds25nJ1xyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBicmVhZGNydW1iU3RydWN0dXJlOiB7XHJcbiAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcclxuICAgICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxyXG4gICAgICAgICdpdGVtTGlzdEVsZW1lbnQnOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAxLFxyXG4gICAgICAgICAgICAgICAgJ2l0ZW0nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IENvbnN0YW50LlNJVEVfVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1RpbiB04bupYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEFjdGlvbiB0eXBlXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIFNFVF9IRUFERVJfTUVOVTogJ1NFVF9IRUFERVJfTUVOVScsXHJcbiAgICBVUERBVEVfRE9DVU1FTlQ6ICdVUERBVEVfRE9DVU1FTlQnLFxyXG4gICAgVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFOiAnVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFJyxcclxuICAgIFVQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRTogJ1VQREFURV9CUkVBRENSVU1CX1NUUlVDVFVSRScsXHJcbiAgICBTRVRfVE9LRU46ICdTRVRfVE9LRU4nLFxyXG4gICAgU0VUX1BST0ZJTEVfVVNFUjogJ1NFVF9QUk9GSUxFX1VTRVInXHJcbn07XHJcblxyXG4vLyBBY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9UT0tFTixcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFByb2ZpbGVVc2VyID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1BST0ZJTEVfVVNFUixcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEhlYWRlck1lbnUgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfSEVBREVSX01FTlUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVEb2N1bWVudCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9ET0NVTUVOVCxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFydGljbGVTdHJ1Y3R1cmUgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQVJUSUNMRV9TVFJVQ1RVUkUsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVCcmVhZGNydW1iU3RydWN0dXJlID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0JSRUFEQ1JVTUJfU1RSVUNUVVJFLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfVE9LRU46XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfUFJPRklMRV9VU0VSOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VyOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0hFQURFUl9NRU5VOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1lbnU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfRE9DVU1FTlQ6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX0FSVElDTEVfU1RSVUNUVVJFOlxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYXJ0aWNsZVN0cnVjdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQlJFQURDUlVNQl9TVFJVQ1RVUkU6XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5pdGVtTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJTdHJ1Y3R1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYnJlYWRjcnVtYlN0cnVjdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3RFbGVtZW50OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5pdGVtTGlzdEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlIChpbml0aWFsU3RhdGUpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoKVxyXG4gICAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxhenlzaXplc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWltYWdlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9