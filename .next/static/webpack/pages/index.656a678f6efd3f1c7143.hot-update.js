webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/podcastr-app/src/pages/index.tsx\";\n// Formas de conseguir uma API\n// SPA => useEffect() -> nao carrega se desabilitar o JS\n// SSR => getServerSideProps() -> carrega a API antes de abrir a pagina\n// SSG => gera uma versao estatica, isto eh, a mesma pagina eh disponibilizada num determinado tempo (nao precisa fazer novas requisicoes, deixa a pagina mais performatica)\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var latestEpisodes = _ref.latestEpisodes,\n      allEpisodes = _ref.allEpisodes;\n  // useEffect(() => {\n  //   fetch('http://localhost:3333/episodes')\n  //     .then(response => response.json())\n  //       .then(data => console.log(data))\n  // }, [])\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['homeContainer'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.latestEpisodes,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"\\xDAltimos lan\\xE7amentos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: latestEpisodes.map(function (episode) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              width: 192,\n              objectFit: \"cover\",\n              height: 192,\n              src: episode.thumbnail,\n              alt: episode.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episodeDetails,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: episode.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/play-green.svg\",\n                alt: \"Tocar epis\\xF3dio\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 19\n            }, _this)]\n          }, episode.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.allEpisodes,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Todos epis\\xF3dios\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        cellSpacing: 0\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps() { // carrega a API antes mesmo de abrir a pagina (executa toda vez que alguem acessa a home do app)\n//     const response = await fetch('http://localhost:3333/episodes')\n//     const data = await response.json()\n//     return {\n//       props: {\n//         episodes: data\n//       }\n//     }\n// }\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RFcGlzb2RlcyIsImFsbEVwaXNvZGVzIiwic3R5bGVzIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbkFzU3RyaW5nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU1BOztBQXFCZSxTQUFTQSxJQUFULE9BQTBEO0FBQUE7O0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDLGVBQUQsQ0FBdEI7QUFBQSw0QkFDSTtBQUFTLGVBQVMsRUFBRUEsd0RBQU0sQ0FBQ0YsY0FBM0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFDSUEsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUM5Qiw4QkFDRTtBQUFBLHlDQUNFLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUssRUFBRSxHQUFkO0FBQW1CLHVCQUFTLEVBQUMsT0FBN0I7QUFBcUMsb0JBQU0sRUFBRSxHQUE3QztBQUFrRCxpQkFBRyxFQUFFQSxPQUFPLENBQUNDLFNBQS9EO0FBQTJFLGlCQUFHLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQUssdUJBQVMsRUFBRUosd0RBQU0sQ0FBQ0ssY0FBdkI7QUFBQSxzQ0FDRTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFBLDBCQUFhSCxPQUFPLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDBCQUFJRixPQUFPLENBQUNJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUEsMEJBQU9KLE9BQU8sQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLGVBSUU7QUFBQSwwQkFBT0wsT0FBTyxDQUFDTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBVUU7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsaUJBQVQ7QUFBMkIsbUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBLGFBQVNOLE9BQU8sQ0FBQ08sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWdCRCxTQWpCQztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXlCSTtBQUFTLGVBQVMsRUFBRVQsd0RBQU0sQ0FBQ0QsV0FBM0I7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTyxtQkFBVyxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0QsQyxDQXNDRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBdkZ3QkYsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3JtYXMgZGUgY29uc2VndWlyIHVtYSBBUElcblxuLy8gU1BBID0+IHVzZUVmZmVjdCgpIC0+IG5hbyBjYXJyZWdhIHNlIGRlc2FiaWxpdGFyIG8gSlNcbi8vIFNTUiA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSAtPiBjYXJyZWdhIGEgQVBJIGFudGVzIGRlIGFicmlyIGEgcGFnaW5hXG4vLyBTU0cgPT4gZ2VyYSB1bWEgdmVyc2FvIGVzdGF0aWNhLCBpc3RvIGVoLCBhIG1lc21hIHBhZ2luYSBlaCBkaXNwb25pYmlsaXphZGEgbnVtIGRldGVybWluYWRvIHRlbXBvIChuYW8gcHJlY2lzYSBmYXplciBub3ZhcyByZXF1aXNpY29lcywgZGVpeGEgYSBwYWdpbmEgbWFpcyBwZXJmb3JtYXRpY2EpXG5cbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJ1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2NzcydcblxudHlwZSBFcGlzb2RlID0ge1xuICBpZDogc3RyaW5nLFxuICB0aXRsZTpzdHJpbmcsXG4gIHRodW1ibmFpbDogc3RyaW5nLFxuICBtZW1iZXJzOiBzdHJpbmcsXG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmcsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgdXJsOiBzdHJpbmdcbn1cblxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGxhdGVzdEVwaXNvZGVzOiBFcGlzb2RlW11cbiAgYWxsRXBpc29kZXM6IEVwaXNvZGVbXVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzJylcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgLy8gfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaG9tZUNvbnRhaW5lciddfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0RXBpc29kZXN9PlxuICAgICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyBsYXRlc3RFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+IHsvKiBhIGtleSBldml0YSBwb3NzaXZlaXMgcmVuZGVyaXphY29lcyBkZXNuZWNlc3NhcmlhcyAqL31cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTkyfSBvYmplY3RGaXQ9XCJjb3ZlclwiIGhlaWdodD17MTkyfSBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSAgYWx0PXtlcGlzb2RlLnRpdGxlfS8+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWxsRXBpc29kZXN9PlxuICAgICAgICAgICAgPGgyPlRvZG9zIGVwaXPDs2Rpb3M8L2gyPlxuICAgICAgICAgICAgPHRhYmxlIGNlbGxTcGFjaW5nPXswfT5cblxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHsgLy8gYSBtZXNtYSBwYWdpbmEgZWggZGlzcG9uaWJpbGl6YWRhIHBhcmEgbyB1c3VhcmlvIG51bSB0cmVjaG8gZGUgdGVtcG8gKHNlbSBhdHRzIGNvbnN0YW50ZXMpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCdlcGlzb2RlcycsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBfbGltaXQ6IDEyLFxuICAgICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG4gICAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZXBpc29kZS5pZCxcbiAgICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG4gICAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcbiAgICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgICB1cmw6IGVwaXNvZGUuZmlsZS51cmxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIGVwaXNvZGVzLmxlbmd0aClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgICAgYWxsRXBpc29kZXNcbiAgICAgIH0sXG5cbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA4IC8vIGEgY2FkYSA4aHJzIGVoIGdlcmFkYSB1bWEgbm92YSBwYWdpbmFcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IC8vIGNhcnJlZ2EgYSBBUEkgYW50ZXMgbWVzbW8gZGUgYWJyaXIgYSBwYWdpbmEgKGV4ZWN1dGEgdG9kYSB2ZXogcXVlIGFsZ3VlbSBhY2Vzc2EgYSBob21lIGRvIGFwcClcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBlcGlzb2RlczogZGF0YVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})