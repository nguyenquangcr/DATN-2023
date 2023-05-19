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

  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm();
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "      ", __jsx(Typography.Title, {
    editable: true,
    level: 4,
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "h4. Ant Design"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
      lineNumber: 24,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    layout: 'vertical',
    form: form,
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Field A",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "input placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Field B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "input placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Submit")))), __jsx("button", {
    onClick: log,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Log editor content")));
};

_s(NewPost, "wPrX5vUa359xKl/d0xVDkeJmQzE=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UG9zdC5qc3giXSwibmFtZXMiOlsiTmV3UG9zdCIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsImVkaXRvclJlZiIsInVzZVJlZiIsImxvZyIsImN1cnJlbnQiLCJjb25zb2xlIiwiZ2V0Q29udGVudCIsIm9uRmluaXNoIiwidmFsdWVzIiwibWFyZ2luIiwiZXZ0IiwiZWRpdG9yIiwic2VsZWN0b3IiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsImNvbnRlbnRfc3R5bGUiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNLENBQUNDLElBQUQsSUFBU0MseUNBQUksQ0FBQ0MsT0FBTCxFQUFmO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU07QUFDZCxRQUFJRixTQUFTLENBQUNHLE9BQWQsRUFBdUI7QUFDbkJDLGFBQU8sQ0FBQ0YsR0FBUixDQUFZRixTQUFTLENBQUNHLE9BQVYsQ0FBa0JFLFVBQWxCLEVBQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsUUFBTUMsUUFBUSxHQUFJQyxNQUFELElBQVk7QUFDekJILFdBQU8sQ0FBQ0YsR0FBUixDQUFZSyxNQUFaO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLDZFQUFRLE1BQUMsVUFBRCxDQUFZLEtBQVo7QUFBa0IsWUFBUSxNQUExQjtBQUEyQixTQUFLLEVBQUUsQ0FBbEM7QUFBcUMsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQVIsRUFHQSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUNJLFVBQU0sRUFBRSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sS0FBaUJWLFNBQVMsQ0FBQ0csT0FBVixHQUFvQk8sTUFEakQ7QUFFSSxnQkFBWSxFQUFDLG1EQUZqQjtBQUdJLFFBQUksRUFBRTtBQUNGQyxjQUFRLEVBQUUsc0JBRFI7QUFFRkMsWUFBTSxFQUFFLEdBRk47QUFHRkMsYUFBTyxFQUFFLENBQ0wsZ0VBREssRUFFTCw0Q0FGSyxFQUdMLHVEQUhLLENBSFA7QUFRRkMsYUFBTyxFQUFFLGdKQVJQO0FBU0ZDLG1CQUFhLEVBQUU7QUFUYixLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBa0JJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNJLFVBQU0sRUFBRSxVQURaO0FBRUksUUFBSSxFQUFFbEIsSUFGVjtBQUdJLFNBQUssRUFBRTtBQUFDbUIsY0FBUSxFQUFFO0FBQVgsS0FIWDtBQUlJLFlBQVEsRUFBRVYsUUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsbUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsbUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLEVBYUksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FiSixDQURKLENBbEJKLEVBcUNJO0FBQVEsV0FBTyxFQUFFSixHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXJDSixDQUhBLENBREo7QUE2Q0gsQ0ExREQ7O0dBQU1OLE87VUFDYUUseUNBQUksQ0FBQ0MsTzs7O0tBRGxCSCxPO0FBNERTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdQb3N0LjY3Y2I4MGI5NzcwMjA2MjU5MGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ29sLCBGb3JtLCBJbnB1dCwgUm93fSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gICAgICA8VHlwb2dyYXBoeS5UaXRsZSBlZGl0YWJsZSBsZXZlbD17NH0gc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICBoNC4gQW50IERlc2lnblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeS5UaXRsZT5cclxuICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4gZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiPHA+VGhpcyBpcyB0aGUgaW5pdGlhbCBjb250ZW50IG9mIHRoZSBlZGl0b3IuPC9wPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RleHRhcmVhI2ltYWdlLXRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBwYXN0ZSBpbWFnZXRvb2xzIHdvcmRjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD17J3ZlcnRpY2FsJ31cclxuICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDYwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRmllbGQgQVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJpbnB1dCBwbGFjZWhvbGRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZpZWxkIEJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiaW5wdXQgcGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nfT5Mb2cgZWRpdG9yIGNvbnRlbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9