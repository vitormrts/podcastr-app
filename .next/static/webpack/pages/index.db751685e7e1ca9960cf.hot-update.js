webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/podcastr-app/src/pages/index.tsx\";\n// Formas de conseguir uma API\n// SPA => useEffect() -> nao carrega se desabilitar o JS\n// SSR => getServerSideProps() -> carrega a API antes de abrir a pagina\n// SSG => gera uma versao estatica, isto eh, a mesma pagina eh disponibilizada num determinado tempo (nao precisa fazer novas requisicoes, deixa a pagina mais performatica)\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var latestEpisodes = _ref.latestEpisodes,\n      allEpisodes = _ref.allEpisodes;\n  // useEffect(() => {\n  //   fetch('http://localhost:3333/episodes')\n  //     .then(response => response.json())\n  //       .then(data => console.log(data))\n  // }, [])\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['homeContainer'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.latestEpisodes,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"\\xDAltimos lan\\xE7amentos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: latestEpisodes.map(function (episode) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              width: 192,\n              objectFit: \"cover\",\n              height: 192,\n              src: episode.thumbnail,\n              alt: episode.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episodeDetails,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: episode.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/play-green.svg\",\n                alt: \"Tocar epis\\xF3dio\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 19\n            }, _this)]\n          }, episode.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.allEpisodes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps() { // carrega a API antes mesmo de abrir a pagina (executa toda vez que alguem acessa a home do app)\n//     const response = await fetch('http://localhost:3333/episodes')\n//     const data = await response.json()\n//     return {\n//       props: {\n//         episodes: data\n//       }\n//     }\n// }\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RFcGlzb2RlcyIsImFsbEVwaXNvZGVzIiwic3R5bGVzIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbkFzU3RyaW5nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU1BOztBQXFCZSxTQUFTQSxJQUFULE9BQTBEO0FBQUE7O0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDLGVBQUQsQ0FBdEI7QUFBQSw0QkFDSTtBQUFTLGVBQVMsRUFBRUEsd0RBQU0sQ0FBQ0YsY0FBM0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFDSUEsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUM5Qiw4QkFDRTtBQUFBLHlDQUNFLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUssRUFBRSxHQUFkO0FBQW1CLHVCQUFTLEVBQUMsT0FBN0I7QUFBcUMsb0JBQU0sRUFBRSxHQUE3QztBQUFrRCxpQkFBRyxFQUFFQSxPQUFPLENBQUNDLFNBQS9EO0FBQTJFLGlCQUFHLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQUssdUJBQVMsRUFBRUosd0RBQU0sQ0FBQ0ssY0FBdkI7QUFBQSxzQ0FDRTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFBLDBCQUFhSCxPQUFPLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDBCQUFJRixPQUFPLENBQUNJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUEsMEJBQU9KLE9BQU8sQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLGVBSUU7QUFBQSwwQkFBT0wsT0FBTyxDQUFDTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBVUU7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsaUJBQVQ7QUFBMkIsbUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBLGFBQVNOLE9BQU8sQ0FBQ08sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWdCRCxTQWpCQztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXlCSTtBQUFTLGVBQVMsRUFBRVQsd0RBQU0sQ0FBQ0Q7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRCxDLENBc0NEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FwRndCRixJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcm1hcyBkZSBjb25zZWd1aXIgdW1hIEFQSVxuXG4vLyBTUEEgPT4gdXNlRWZmZWN0KCkgLT4gbmFvIGNhcnJlZ2Egc2UgZGVzYWJpbGl0YXIgbyBKU1xuLy8gU1NSID0+IGdldFNlcnZlclNpZGVQcm9wcygpIC0+IGNhcnJlZ2EgYSBBUEkgYW50ZXMgZGUgYWJyaXIgYSBwYWdpbmFcbi8vIFNTRyA9PiBnZXJhIHVtYSB2ZXJzYW8gZXN0YXRpY2EsIGlzdG8gZWgsIGEgbWVzbWEgcGFnaW5hIGVoIGRpc3BvbmliaWxpemFkYSBudW0gZGV0ZXJtaW5hZG8gdGVtcG8gKG5hbyBwcmVjaXNhIGZhemVyIG5vdmFzIHJlcXVpc2ljb2VzLCBkZWl4YSBhIHBhZ2luYSBtYWlzIHBlcmZvcm1hdGljYSlcblxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIGlkOiBzdHJpbmcsXG4gIHRpdGxlOnN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgcHVibGlzaGVkQXQ6IHN0cmluZyxcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICB1cmw6IHN0cmluZ1xufVxuXG50eXBlIEhvbWVQcm9wcyA9IHtcbiAgbGF0ZXN0RXBpc29kZXM6IEVwaXNvZGVbXVxuICBhbGxFcGlzb2RlczogRXBpc29kZVtdXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0RXBpc29kZXMsIGFsbEVwaXNvZGVzIH06IEhvbWVQcm9wcykge1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAvLyB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydob21lQ29udGFpbmVyJ119PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3RFcGlzb2Rlc30+XG4gICAgICAgICAgPGgyPsOabHRpbW9zIGxhbsOnYW1lbnRvczwvaDI+XG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IGxhdGVzdEVwaXNvZGVzLm1hcChlcGlzb2RlID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT4gey8qIGEga2V5IGV2aXRhIHBvc3NpdmVpcyByZW5kZXJpemFjb2VzIGRlc25lY2Vzc2FyaWFzICovfVxuICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPXsxOTJ9IG9iamVjdEZpdD1cImNvdmVyXCIgaGVpZ2h0PXsxOTJ9IHNyYz17ZXBpc29kZS50aHVtYm5haWx9ICBhbHQ9e2VwaXNvZGUudGl0bGV9Lz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlRGV0YWlsc30+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZXBpc29kZS5tZW1iZXJzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIi8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHsgLy8gYSBtZXNtYSBwYWdpbmEgZWggZGlzcG9uaWJpbGl6YWRhIHBhcmEgbyB1c3VhcmlvIG51bSB0cmVjaG8gZGUgdGVtcG8gKHNlbSBhdHRzIGNvbnN0YW50ZXMpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCdlcGlzb2RlcycsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBfbGltaXQ6IDEyLFxuICAgICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG4gICAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZXBpc29kZS5pZCxcbiAgICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG4gICAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcbiAgICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgICB1cmw6IGVwaXNvZGUuZmlsZS51cmxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIGVwaXNvZGVzLmxlbmd0aClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgICAgYWxsRXBpc29kZXNcbiAgICAgIH0sXG5cbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA4IC8vIGEgY2FkYSA4aHJzIGVoIGdlcmFkYSB1bWEgbm92YSBwYWdpbmFcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIGNhcnJlZ2EgYSBBUEkgYW50ZXMgbWVzbW8gZGUgYWJyaXIgYSBwYWdpbmEgKGV4ZWN1dGEgdG9kYSB2ZXogcXVlIGFsZ3VlbSBhY2Vzc2EgYSBob21lIGRvIGFwcClcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBlcGlzb2RlczogZGF0YVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})