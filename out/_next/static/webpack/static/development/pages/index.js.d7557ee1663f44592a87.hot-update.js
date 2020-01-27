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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHYSIsImZpbGUiOiIvVXNlcnMvdGltdmFuZWtlci9SZXBvc2l0b3JpZXMvUGVyc29uYWwvdG12bmtyLWNvbS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCByID0gY3NzYFxuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG5gXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxoMSBjc3M9e3J9PiBUTVZOS1IgPC9oMT5cbiAgICAgIDxoMiBjc3M9e3J9PlNvZnR3YXJlIEVuZ2luZWVyPC9oMj5cbiAgICAgIDxidXR0b24gY3NzPXtyfT5jb250YWN0IG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref = false ? undefined : {
  name: "1tm6xzo-HomePage",
  styles: "height:100vh;display:flex;flex-wrap:wrap;justify-content:center;;label:HomePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW12YW5la2VyL1JlcG9zaXRvcmllcy9QZXJzb25hbC90bXZua3ItY29tL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXYyIsImZpbGUiOiIvVXNlcnMvdGltdmFuZWtlci9SZXBvc2l0b3JpZXMvUGVyc29uYWwvdG12bmtyLWNvbS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCByID0gY3NzYFxuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG5gXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxoMSBjc3M9e3J9PiBUTVZOS1IgPC9oMT5cbiAgICAgIDxoMiBjc3M9e3J9PlNvZnR3YXJlIEVuZ2luZWVyPC9oMj5cbiAgICAgIDxidXR0b24gY3NzPXtyfT5jb250YWN0IG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdfQ== */",
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
      lineNumber: 20
    },
    __self: this
  }, " TMVNKR "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
    css: r,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Software Engineer"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    css: r,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "contact me"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.d7557ee1663f44592a87.hot-update.js.map