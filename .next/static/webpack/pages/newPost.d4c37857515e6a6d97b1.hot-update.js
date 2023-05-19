webpackHotUpdate_N_E("pages/newPost",{

/***/ "./pages/newPost.jsx":
/*!***************************!*\
  !*** ./pages/newPost.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "E:\\meovathay\\application\\pages\\newPost.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NewPost = () => {
  _s();

  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    onInit: (evt, editor) => editorRef.current = editor,
    initialValue: "<p>This is the initial content of the editor.</p>",
    init: {
      selector: 'textarea#image-tools',
      height: 500,
      plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste imagetools wordcount'],
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "abc"), __jsx("button", {
    onClick: log,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Log editor content"));
};

_s(NewPost, "U23Mj2fZUVBkuOSyNtK9IkK2H0s=");

_c = NewPost;
/* harmony default export */ __webpack_exports__["default"] = (NewPost);

var _c;

$RefreshReg$(_c, "NewPost");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UG9zdC5qc3giXSwibmFtZXMiOlsiTmV3UG9zdCIsImVkaXRvclJlZiIsInVzZVJlZiIsImxvZyIsImN1cnJlbnQiLCJjb25zb2xlIiwiZ2V0Q29udGVudCIsImV2dCIsImVkaXRvciIsInNlbGVjdG9yIiwiaGVpZ2h0IiwicGx1Z2lucyIsInRvb2xiYXIiLCJjb250ZW50X3N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2QsUUFBSUYsU0FBUyxDQUFDRyxPQUFkLEVBQXVCO0FBQ25CQyxhQUFPLENBQUNGLEdBQVIsQ0FBWUYsU0FBUyxDQUFDRyxPQUFWLENBQWtCRSxVQUFsQixFQUFaO0FBQ0g7QUFDSixHQUpEOztBQU1BLFNBQ0ksTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFDSSxVQUFNLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEtBQWlCUCxTQUFTLENBQUNHLE9BQVYsR0FBb0JJLE1BRGpEO0FBRUksZ0JBQVksRUFBQyxtREFGakI7QUFHSSxRQUFJLEVBQUU7QUFDRkMsY0FBUSxFQUFFLHNCQURSO0FBRUZDLFlBQU0sRUFBRSxHQUZOO0FBR0ZDLGFBQU8sRUFBRSxDQUNMLGdFQURLLEVBRUwsNENBRkssRUFHTCx1REFISyxDQUhQO0FBUUZDLGFBQU8sRUFBRSxnSkFSUDtBQVNGQyxtQkFBYSxFQUFFO0FBVGIsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQWtCSSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWxCSixFQXFCSTtBQUFRLFdBQU8sRUFBRVYsR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFyQkosQ0FESjtBQXlCSCxDQWpDRDs7R0FBTUgsTzs7S0FBQUEsTztBQW1DU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3UG9zdC5kNGMzNzg1NzUxNWU2YTZkOTdiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7RWRpdG9yfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBOZXdQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0b3JSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3JSZWYuY3VycmVudC5nZXRDb250ZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4gZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiPHA+VGhpcyBpcyB0aGUgaW5pdGlhbCBjb250ZW50IG9mIHRoZSBlZGl0b3IuPC9wPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RleHRhcmVhI2ltYWdlLXRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBwYXN0ZSBpbWFnZXRvb2xzIHdvcmRjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICBhYmNcclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nfT5Mb2cgZWRpdG9yIGNvbnRlbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9