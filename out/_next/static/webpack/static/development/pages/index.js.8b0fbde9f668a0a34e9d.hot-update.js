webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/timvaneker/Repositories/Personal/tmvnkr-com/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var r = false ? undefined : {
  name: "1ir35tz-r",
  styles: "flex-basis:100%;height:0;;label:r;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHYSIsImZpbGUiOiIvVXNlcnMvdGltdmFuZWtlci9SZXBvc2l0b3JpZXMvUGVyc29uYWwvdG12bmtyLWNvbS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCByID0gY3NzYFxuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG5gXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPGgxIGNzcz17cn0+IFRNVk5LUiA8L2gxPlxuICAgICAgPGgyIGNzcz17cn0+U29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICBjb250YWN0IG1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref = false ? undefined : {
  name: "b7bsiu-HomePage",
  styles: "height:100vh;display:flex;align-items:center;justify-content:center;;label:HomePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXYyIsImZpbGUiOiIvVXNlcnMvdGltdmFuZWtlci9SZXBvc2l0b3JpZXMvUGVyc29uYWwvdG12bmtyLWNvbS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCByID0gY3NzYFxuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG5gXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPGgxIGNzcz17cn0+IFRNVk5LUiA8L2gxPlxuICAgICAgPGgyIGNzcz17cn0+U29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICBjb250YWN0IG1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = false ? undefined : {
  name: "1q00fc2-HomePage",
  styles: "color:red;;label:HomePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCIiwiZmlsZSI6Ii9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmNvbnN0IHIgPSBjc3NgXG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGhlaWdodDogMDtcbmBcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYH1cbiAgICA+XG4gICAgICA8aDEgY3NzPXtyfT4gVE1WTktSIDwvaDE+XG4gICAgICA8aDIgY3NzPXtyfT5Tb2Z0d2FyZSBFbmdpbmVlcjwvaDI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIGNvbnRhY3QgbWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var HomePage = function HomePage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    css: r,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " TMVNKR "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
    css: r,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Software Engineer"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    css: _ref2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "contact me"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.8b0fbde9f668a0a34e9d.hot-update.js.map