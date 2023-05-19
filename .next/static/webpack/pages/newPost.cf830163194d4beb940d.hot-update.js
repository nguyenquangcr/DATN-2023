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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Ch\xE0o m\u1EEBng m\u1ECDi ng\u01B0\u1EDDi \u0111\u1EBFn v\u1EDBi k\xEAnh c\u1EE7a Trinh -\xA0", __jsx("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 79
    }
  }, "Ng\u1ECDc Trinh"), "\xA0Official. T\u1EA1i \u0111\xE2y Trinh s\u1EBD c\u1EADp nh\u1EADt nh\u1EEFng video c\u1EF1c hay, c\u1EF1c h\u1EA5p d\u1EABn v\u1EC1 cu\u1ED9c s\u1ED1ng (My Day),\xA0..."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhdeOh_r3OGflyrRqgoyzyKJhd2U1SZP3kk29JAAs&s",
    alt: "",
    width: "115",
    height: "144",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }
  })), __jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
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
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: log,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UG9zdC5qc3giXSwibmFtZXMiOlsiTmV3UG9zdCIsImVkaXRvclJlZiIsInVzZVJlZiIsImxvZyIsImN1cnJlbnQiLCJjb25zb2xlIiwiZ2V0Q29udGVudCIsImV2dCIsImVkaXRvciIsInNlbGVjdG9yIiwiaGVpZ2h0IiwicGx1Z2lucyIsInRvb2xiYXIiLCJjb250ZW50X3N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2QsUUFBSUYsU0FBUyxDQUFDRyxPQUFkLEVBQXVCO0FBQ25CQyxhQUFPLENBQUNGLEdBQVIsQ0FBWUYsU0FBUyxDQUFDRyxPQUFWLENBQWtCRSxVQUFsQixFQUFaO0FBQ0g7QUFDSixHQUpEOztBQU1BLFNBQ0ksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1R0FBa0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBbEUsK0tBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBSyxPQUFHLEVBQUMsb0dBQVQ7QUFBa0gsT0FBRyxFQUFDLEVBQXRIO0FBQXlILFNBQUssRUFBQyxLQUEvSDtBQUFxSSxVQUFNLEVBQUMsS0FBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILENBRkosRUFHSSxNQUFDLDZEQUFEO0FBQ0ksVUFBTSxFQUFFLENBQUNDLEdBQUQsRUFBTUMsTUFBTixLQUFpQlAsU0FBUyxDQUFDRyxPQUFWLEdBQW9CSSxNQURqRDtBQUVJLGdCQUFZLEVBQUMsbURBRmpCO0FBR0ksUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxzQkFEUjtBQUVGQyxZQUFNLEVBQUUsR0FGTjtBQUdGQyxhQUFPLEVBQUUsQ0FDTCxnRUFESyxFQUVMLDRDQUZLLEVBR0wsdURBSEssQ0FIUDtBQVFGQyxhQUFPLEVBQUUsZ0pBUlA7QUFTRkMsbUJBQWEsRUFBRTtBQVRiLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBa0JJO0FBQVEsV0FBTyxFQUFFVixHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWxCSixDQURKO0FBc0JILENBOUJEOztHQUFNSCxPOztLQUFBQSxPO0FBZ0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdQb3N0LmNmODMwMTYzMTk0ZDRiZWI5NDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xyXG5cclxuY29uc3QgTmV3UG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+Q2gmYWdyYXZlO28gbeG7q25nIG3hu41pIG5nxrDhu51pIMSR4bq/biB24bubaSBrJmVjaXJjO25oIGPhu6dhIFRyaW5oIC0mbmJzcDs8ZW0+Tmfhu41jIFRyaW5oPC9lbT4mbmJzcDtPZmZpY2lhbC4gVOG6oWkgxJEmYWNpcmM7eSBUcmluaCBz4bq9IGPhuq1wIG5o4bqtdCBuaOG7r25nIHZpZGVvIGPhu7FjIGhheSwgY+G7sWMgaOG6pXAgZOG6q24gduG7gSBjdeG7mWMgc+G7kW5nIChNeSBEYXkpLCZuYnNwOy4uLjwvcD5cclxuICAgICAgICAgICAgPHA+PGltZyBzcmM9XCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTemhkZU9oX3IzT0dmbHlyUnFnb3l6eUtKaGQyVTFTWlAza2syOUpBQXMmYW1wO3NcIiBhbHQ9XCJcIiB3aWR0aD1cIjExNVwiIGhlaWdodD1cIjE0NFwiIC8+PC9wPlxyXG4gICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4gZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCI8cD5UaGlzIGlzIHRoZSBpbml0aWFsIGNvbnRlbnQgb2YgdGhlIGVkaXRvci48L3A+XCJcclxuICAgICAgICAgICAgICAgIGluaXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RleHRhcmVhI2ltYWdlLXRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHZpc3VhbGJsb2NrcyBjb2RlIGZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgdGFibGUgcGFzdGUgaW1hZ2V0b29scyB3b3JkY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudF9zdHlsZTogJ2JvZHkgeyBmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOjE0cHggfSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nfT5Mb2cgZWRpdG9yIGNvbnRlbnQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9