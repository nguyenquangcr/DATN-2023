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
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Th\xEAm b\xE0i Vi\u1EBFt"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
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
    label: "Field A",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "input placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Field B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "input placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Submit")))), __jsx("button", {
    onClick: log,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UG9zdC5qc3giXSwibmFtZXMiOlsiTmV3UG9zdCIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsImVkaXRvclJlZiIsInVzZVJlZiIsImxvZyIsImN1cnJlbnQiLCJjb25zb2xlIiwiZ2V0Q29udGVudCIsIm9uRmluaXNoIiwidmFsdWVzIiwibWFyZ2luIiwiZXZ0IiwiZWRpdG9yIiwic2VsZWN0b3IiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsImNvbnRlbnRfc3R5bGUiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNLENBQUNDLElBQUQsSUFBU0MseUNBQUksQ0FBQ0MsT0FBTCxFQUFmO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU07QUFDZCxRQUFJRixTQUFTLENBQUNHLE9BQWQsRUFBdUI7QUFDbkJDLGFBQU8sQ0FBQ0YsR0FBUixDQUFZRixTQUFTLENBQUNHLE9BQVYsQ0FBa0JFLFVBQWxCLEVBQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsUUFBTUMsUUFBUSxHQUFJQyxNQUFELElBQVk7QUFDekJILFdBQU8sQ0FBQ0YsR0FBUixDQUFZSyxNQUFaO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLG1FQUNLLEdBREwsRUFFSSxNQUFDLCtDQUFELENBQVksS0FBWjtBQUFrQixZQUFRLE1BQTFCO0FBQTJCLFNBQUssRUFBRSxDQUFsQztBQUFxQyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGSixFQUtJLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQ0ksVUFBTSxFQUFFLENBQUNDLEdBQUQsRUFBTUMsTUFBTixLQUFrQlYsU0FBUyxDQUFDRyxPQUFWLEdBQW9CTyxNQURsRDtBQUVJLGdCQUFZLEVBQUMsbURBRmpCO0FBR0ksUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxzQkFEUjtBQUVGQyxZQUFNLEVBQUUsR0FGTjtBQUdGQyxhQUFPLEVBQUUsQ0FDTCxnRUFESyxFQUVMLDRDQUZLLEVBR0wsdURBSEssQ0FIUDtBQVFGQyxhQUFPLEVBQ25CLGdKQVRjO0FBVUZDLG1CQUFhLEVBQ3pCO0FBWGMsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQW9CSSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQ7QUFDSSxVQUFNLEVBQUUsVUFEWjtBQUVJLFFBQUksRUFBRWxCLElBRlY7QUFHSSxTQUFLLEVBQUU7QUFBQ21CLGNBQVEsRUFBRTtBQUFYLEtBSFg7QUFJSSxZQUFRLEVBQUVWLFFBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FOSixFQVNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FUSixFQVlJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBWkosQ0FESixDQXBCSixFQXNDSTtBQUFRLFdBQU8sRUFBRUosR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF0Q0osQ0FMSixDQURKO0FBZ0RILENBN0REOztHQUFNTixPO1VBQ2FFLHlDQUFJLENBQUNDLE87OztLQURsQkgsTztBQStEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3UG9zdC4xYjA3Zjc5OTZiMzQ3ZDA3MjdmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7RWRpdG9yfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENvbCwgRm9ybSwgSW5wdXQsIFJvdywgVHlwb2dyYXBoeX0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBOZXdQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRvclJlZi5jdXJyZW50LmdldENvbnRlbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlIGVkaXRhYmxlIGxldmVsPXs0fSBzdHlsZT17e21hcmdpbjogMH19PlxyXG4gICAgICAgICAgICAgICAgVGjDqm0gYsOgaSBWaeG6v3RcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRpdGxlPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4gKGVkaXRvclJlZi5jdXJyZW50ID0gZWRpdG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiPHA+VGhpcyBpcyB0aGUgaW5pdGlhbCBjb250ZW50IG9mIHRoZSBlZGl0b3IuPC9wPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGV4dGFyZWEjaW1hZ2UtdG9vbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgdGFibGUgcGFzdGUgaW1hZ2V0b29scyB3b3JkY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjpcclxuICAgICAgICAgICAgICAgICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRfc3R5bGU6XHJcbiAgICAgICAgICAgICAgICAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD17J3ZlcnRpY2FsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNjAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZpZWxkIEFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImlucHV0IHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGaWVsZCBCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJpbnB1dCBwbGFjZWhvbGRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nfT5Mb2cgZWRpdG9yIGNvbnRlbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==