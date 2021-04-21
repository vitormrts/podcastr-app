webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Episode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episode.module.scss */ \"./src/pages/episodes/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/podcastr-app/src/pages/episodes/[slug].tsx\";\n\n\nvar __N_SSG = true;\nfunction Episode(_ref) {\n  var episode = _ref.episode;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episodeContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.thumbnailContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/arrow-left.svg\",\n          alt: \"Voltar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n_c = Episode;\n\nvar _c;\n\n$RefreshReg$(_c, \"Episode\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInN0eWxlcyIsImVwaXNvZGVDb250YWluZXIiLCJ0aHVtYm5haWxDb250YWluZXIiLCJ0aHVtYm5haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUE7QUFJQTs7QUFrQmUsU0FBU0EsT0FBVCxPQUE2QztBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFDeEQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLGdCQUF2QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFRCwyREFBTSxDQUFDRSxrQkFBdkI7QUFBQSw4QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyxpREFBRDtBQUFPLGFBQUssRUFBRSxHQUFkO0FBQW1CLGNBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFHLEVBQUVILE9BQU8sQ0FBQ0ksU0FBN0M7QUFBd0QsaUJBQVMsRUFBQztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFLSTtBQUFRLFlBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtLQVp1QkwsTyIsImZpbGUiOiIuL3NyYy9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUidcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXBpc29kZS5tb2R1bGUuc2NzcydcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdGl0bGU6c3RyaW5nLFxuICAgIHRodW1ibmFpbDogc3RyaW5nLFxuICAgIG1lbWJlcnM6IHN0cmluZyxcbiAgICBwdWJsaXNoZWRBdDogc3RyaW5nLFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICB1cmw6IHN0cmluZ1xufVxuICBcbnR5cGUgRXBpc29kZVByb3BzID0ge1xuICAgIGVwaXNvZGU6IEVwaXNvZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXBpc29kZSh7IGVwaXNvZGUgfTogRXBpc29kZVByb3BzICkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiVm9sdGFyXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NzAwfSBoZWlnaHQ9ezE2MH0gc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gb2JqZWN0Rml0PVwiY292ZXJcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBbXSxcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSBjdHgucGFyYW1zIC8vIHBlZ2EgbyBub21lIGRvIGVwaXNvZGlvXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAvZXBpc29kZXMvJHtzbHVnfWApXG5cbiAgICBjb25zdCBlcGlzb2RlID0ge1xuICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgIHRodW1ibmFpbDogZGF0YS50aHVtYm5haWwsXG4gICAgICAgIG1lbWJlcnM6IGRhdGEubWVtYmVycyxcbiAgICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhkYXRhLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgICBkdXJhdGlvbjogTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbiksXG4gICAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICB1cmw6IGRhdGEuZmlsZS51cmxcbiAgICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlcGlzb2RlLFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhyc1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ })

})