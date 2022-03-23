self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavDropDown/ScrollToTop.js":
/*!***************************************************!*\
  !*** ./src/components/NavDropDown/ScrollToTop.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\rasen\\OneDrive\\Desktop\\portfolio_website-STARTER\\src\\components\\NavDropDown\\ScrollToTop.js",
    _this = undefined,
    _s = $RefreshSig$();





var ScrollButton = function ScrollButton() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var toggleVisible = function toggleVisible() {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
      	in place of 'smooth' */

    });
  };

  window.addEventListener('scroll', toggleVisible);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowCircleUp, {
      onClick: scrollToTop,
      style: {
        display: visible ? 'inline' : 'none'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 2
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 2
  }, _this);
};

_s(ScrollButton, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = ScrollButton;
/* harmony default export */ __webpack_exports__["default"] = (ScrollButton);

var _c;

$RefreshReg$(_c, "ScrollButton");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2RHJvcERvd24vU2Nyb2xsVG9Ub3AuanMiXSwibmFtZXMiOlsiU2Nyb2xsQnV0dG9uIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRvZ2dsZVZpc2libGUiLCJzY3JvbGxlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFBQTs7QUFBQSxrQkFFSUMsK0NBQVEsQ0FBQyxLQUFELENBRlo7QUFBQSxNQUVuQkMsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUkxQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0IsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFDOztBQUNBLFFBQUlILFFBQVEsR0FBRyxHQUFmLEVBQW1CO0FBQ25CRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNDLEtBRkQsTUFHSyxJQUFJRSxRQUFRLElBQUksR0FBaEIsRUFBb0I7QUFDekJGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0M7QUFDRCxHQVJEOztBQVVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDeEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNoQkMsU0FBRyxFQUFFLENBRFc7QUFFaEJDLGNBQVEsRUFBRTtBQUNWO0FBQ0Q7O0FBSmlCLEtBQWhCO0FBTUEsR0FQRDs7QUFTQUgsUUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsYUFBbEM7QUFFQSxzQkFDQyw4REFBQyxvRUFBRDtBQUFBLDJCQUNBLDhEQUFDLDJEQUFEO0FBQWlCLGFBQU8sRUFBRUssV0FBMUI7QUFDQSxXQUFLLEVBQUU7QUFBQ00sZUFBTyxFQUFFYixPQUFPLEdBQUcsUUFBSCxHQUFjO0FBQS9CO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU1DLENBL0JEOztHQUFNRixZOztLQUFBQSxZO0FBaUNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE2NWRiZjVlOTY2N2NkNGZlNjk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0ZhQXJyb3dDaXJjbGVVcH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5jb25zdCBTY3JvbGxCdXR0b24gPSAoKSA9PntcclxuXHJcbmNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuXHRjb25zdCBzY3JvbGxlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0aWYgKHNjcm9sbGVkID4gMzAwKXtcclxuXHRzZXRWaXNpYmxlKHRydWUpXHJcblx0fVxyXG5cdGVsc2UgaWYgKHNjcm9sbGVkIDw9IDMwMCl7XHJcblx0c2V0VmlzaWJsZShmYWxzZSlcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+e1xyXG5cdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0dG9wOiAwLFxyXG5cdGJlaGF2aW9yOiAnc21vb3RoJ1xyXG5cdC8qIHlvdSBjYW4gYWxzbyB1c2UgJ2F1dG8nIGJlaGF2aW91clxyXG5cdFx0aW4gcGxhY2Ugb2YgJ3Ntb290aCcgKi9cclxuXHR9KTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmxlKTtcclxuXHJcbnJldHVybiAoXHJcblx0PEJ1dHRvbj5cclxuXHQ8RmFBcnJvd0NpcmNsZVVwIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxyXG5cdHN0eWxlPXt7ZGlzcGxheTogdmlzaWJsZSA/ICdpbmxpbmUnIDogJ25vbmUnfX0gLz5cclxuXHQ8L0J1dHRvbj5cclxuKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9