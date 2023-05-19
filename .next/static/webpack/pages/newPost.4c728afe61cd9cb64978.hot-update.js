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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title, {
    editable: true,
    level: 4,
    style: {
      margin: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Th\xEAm b\xE0i Vi\u1EBFt"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      margin: '20px 10px'
    },
    gutter: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
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
      lineNumber: 26,
      columnNumber: 21
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
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
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Ti\xEAu \u0111\u1EC1",
    name: "title",
    rules: [{
      required: true,
      message: 'Nôi dung này không được để trống!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "H\xECnh \u0111\u1EA1i di\u1EC7n",
    name: "linkImage",
    rules: [{
      required: true,
      message: 'Nôi dung này không được để trống!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "L\u01B0u \xFD nh\u1EADp link h\xECnh \u1EA3nh. V\xED d\u1EE5:http://meovathay.com/image.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "M\xF4 t\u1EA3",
    name: "des",
    rules: [{
      required: true,
      message: 'Nôi dung này không được để trống!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "\u0110\u0103ng b\xE0i vi\u1EBFt"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UG9zdC5qc3giXSwibmFtZXMiOlsiTmV3UG9zdCIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsImVkaXRvclJlZiIsInVzZVJlZiIsImxvZyIsImN1cnJlbnQiLCJjb25zb2xlIiwiZ2V0Q29udGVudCIsIm9uRmluaXNoIiwidmFsdWVzIiwibWFyZ2luIiwiZXZ0IiwiZWRpdG9yIiwic2VsZWN0b3IiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsImNvbnRlbnRfc3R5bGUiLCJtYXhXaWR0aCIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNLENBQUNDLElBQUQsSUFBU0MseUNBQUksQ0FBQ0MsT0FBTCxFQUFmO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU07QUFDZCxRQUFJRixTQUFTLENBQUNHLE9BQWQsRUFBdUI7QUFDbkJDLGFBQU8sQ0FBQ0YsR0FBUixDQUFZRixTQUFTLENBQUNHLE9BQVYsQ0FBa0JFLFVBQWxCLEVBQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsUUFBTUMsUUFBUSxHQUFJQyxNQUFELElBQVk7QUFDekJILFdBQU8sQ0FBQ0YsR0FBUixDQUFZSyxNQUFaO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLG1FQUNLLEdBREwsRUFFSSxNQUFDLCtDQUFELENBQVksS0FBWjtBQUFrQixZQUFRLE1BQTFCO0FBQTJCLFNBQUssRUFBRSxDQUFsQztBQUFxQyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGSixFQUtJLE1BQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBQ0EsWUFBTSxFQUFFO0FBQVQsS0FBWjtBQUFtQyxVQUFNLEVBQUUsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUNJLFVBQU0sRUFBRSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sS0FBa0JWLFNBQVMsQ0FBQ0csT0FBVixHQUFvQk8sTUFEbEQ7QUFFSSxnQkFBWSxFQUFDLG1EQUZqQjtBQUdJLFFBQUksRUFBRTtBQUNGQyxjQUFRLEVBQUUsc0JBRFI7QUFFRkMsWUFBTSxFQUFFLEdBRk47QUFHRkMsYUFBTyxFQUFFLENBQ0wsZ0VBREssRUFFTCw0Q0FGSyxFQUdMLHVEQUhLLENBSFA7QUFRRkMsYUFBTyxFQUNuQixnSkFUYztBQVVGQyxtQkFBYSxFQUN6QjtBQVhjLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFvQkksTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFEO0FBQ0ksVUFBTSxFQUFFLFVBRFo7QUFFSSxRQUFJLEVBQUVsQixJQUZWO0FBR0ksU0FBSyxFQUFFO0FBQUNtQixjQUFRLEVBQUU7QUFBWCxLQUhYO0FBSUksWUFBUSxFQUFFVixRQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFNBQUssRUFBQyxzQkFEVjtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksU0FBSyxFQUFFLENBQUM7QUFBQ1csY0FBUSxFQUFFLElBQVg7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUFELENBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBTkosRUFhSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFNBQUssRUFBQyxpQ0FEVjtBQUVJLFFBQUksRUFBQyxXQUZUO0FBR0ksU0FBSyxFQUFFLENBQUM7QUFBQ0QsY0FBUSxFQUFFLElBQVg7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUFELENBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsNkZBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQWJKLEVBb0JJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksU0FBSyxFQUFDLGVBRFY7QUFFSSxRQUFJLEVBQUMsS0FGVDtBQUdJLFNBQUssRUFBRSxDQUFDO0FBQUNELGNBQVEsRUFBRSxJQUFYO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBRCxDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FwQkosRUEyQkksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FESixDQTNCSixDQURKLENBcEJKLENBTEosQ0FESjtBQThESCxDQTNFRDs7R0FBTXRCLE87VUFDYUUseUNBQUksQ0FBQ0MsTzs7O0tBRGxCSCxPO0FBNkVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdQb3N0LjRjNzI4YWZlNjFjZDljYjY0OTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ29sLCBGb3JtLCBJbnB1dCwgUm93LCBUeXBvZ3JhcGh5fSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IE5ld1Bvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGUgZWRpdGFibGUgbGV2ZWw9ezR9IHN0eWxlPXt7bWFyZ2luOiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgIFRow6ptIGLDoGkgVmnhur90XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeS5UaXRsZT5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbjogJzIwcHggMTBweCd9fSBndXR0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0PXsoZXZ0LCBlZGl0b3IpID0+IChlZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIjxwPlRoaXMgaXMgdGhlIGluaXRpYWwgY29udGVudCBvZiB0aGUgZWRpdG9yLjwvcD5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RleHRhcmVhI2ltYWdlLXRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIHBhc3RlIGltYWdldG9vbHMgd29yZGNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6XHJcbiAgICAgICAgICAgICAgICAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOlxyXG4gICAgICAgICAgICAgICAgJ2JvZHkgeyBmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOjE0cHggfSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9eyd2ZXJ0aWNhbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDYwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGnDqnUgxJHhu4FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnTsO0aSBkdW5nIG7DoHkga2jDtG5nIMSRxrDhu6NjIMSR4buDIHRy4buRbmchJ31dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSMOsbmggxJHhuqFpIGRp4buHblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlua0ltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnTsO0aSBkdW5nIG7DoHkga2jDtG5nIMSRxrDhu6NjIMSR4buDIHRy4buRbmchJ31dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J0zGsHUgw70gbmjhuq1wIGxpbmsgaMOsbmgg4bqjbmguIFbDrSBk4bulOmh0dHA6Ly9tZW92YXRoYXkuY29tL2ltYWdlLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTcO0IHThuqNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ07DtGkgZHVuZyBuw6B5IGtow7RuZyDEkcaw4bujYyDEkeG7gyB0cuG7kW5nISd9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+xJDEg25nIGLDoGkgdmnhur90PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9