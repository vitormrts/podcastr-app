webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/vitormrts/\\xC1rea de Trabalho/Projects/podcastr-app/src/pages/index.tsx\";\n// Formas de conseguir uma API\n// SPA => useEffect() -> nao carrega se desabilitar o JS\n// SSR => getServerSideProps() -> carrega a API antes de abrir a pagina\n// SSG => gera uma versao estatica, isto eh, a mesma pagina eh disponibilizada num determinado tempo (nao precisa fazer novas requisicoes, deixa a pagina mais performatica)\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var latestEpisodes = _ref.latestEpisodes,\n      allEpisodes = _ref.allEpisodes;\n  // useEffect(() => {\n  //   fetch('http://localhost:3333/episodes')\n  //     .then(response => response.json())\n  //       .then(data => console.log(data))\n  // }, [])\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['homeContainer'],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.latestEpisodes,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"\\xDAltimos lan\\xE7amentos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: latestEpisodes.map(function (episode) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              width: 192,\n              objectFit: \"cover\",\n              height: 192,\n              src: episode.thumbnail,\n              alt: episode.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.episodeDetails,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                href: \"episodes/\".concat(episode.id),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: episode.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/play-green.svg\",\n                alt: \"Tocar epis\\xF3dio\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 19\n            }, _this)]\n          }, episode.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.allEpisodes,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Todos epis\\xF3dios\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        cellSpacing: 0,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: \"Podcast\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: \"Integrantes\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: \"Data\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: \"Dura\\xE7\\xE3o\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 15\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: allEpisodes.map(function (episode) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                style: {\n                  width: 72\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                  width: 120,\n                  height: 120,\n                  src: episode.thumbnail,\n                  alt: episode.title,\n                  objectFit: \"cover\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    href: \"/episodes/\".concat(episode.id),\n                    children: episode.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: episode.members\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                style: {\n                  width: 100\n                },\n                children: episode.publishedAt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: episode.durationAsString\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: \"/play-green.svg\",\n                    alt: \"Tocar epis\\xF3dio\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 106,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 105,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 23\n              }, _this)]\n            }, episode.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps() { // carrega a API antes mesmo de abrir a pagina (executa toda vez que alguem acessa a home do app)\n//     const response = await fetch('http://localhost:3333/episodes')\n//     const data = await response.json()\n//     return {\n//       props: {\n//         episodes: data\n//       }\n//     }\n// }\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RFcGlzb2RlcyIsImFsbEVwaXNvZGVzIiwic3R5bGVzIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU1BOztBQXFCZSxTQUFTQSxJQUFULE9BQTBEO0FBQUE7O0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDLGVBQUQsQ0FBdEI7QUFBQSw0QkFDSTtBQUFTLGVBQVMsRUFBRUEsd0RBQU0sQ0FBQ0YsY0FBM0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFDSUEsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUM5Qiw4QkFDRTtBQUFBLHlDQUNFLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUssRUFBRSxHQUFkO0FBQW1CLHVCQUFTLEVBQUMsT0FBN0I7QUFBcUMsb0JBQU0sRUFBRSxHQUE3QztBQUFrRCxpQkFBRyxFQUFFQSxPQUFPLENBQUNDLFNBQS9EO0FBQTJFLGlCQUFHLEVBQUVELE9BQU8sQ0FBQ0U7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQUssdUJBQVMsRUFBRUosd0RBQU0sQ0FBQ0ssY0FBdkI7QUFBQSxzQ0FDRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLHFCQUFjSCxPQUFPLENBQUNJLEVB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MkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUEsZUFBU1AsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBMEJELFdBM0JDO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQsQyxDQXNDRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBaEl3QlQsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3JtYXMgZGUgY29uc2VndWlyIHVtYSBBUElcblxuLy8gU1BBID0+IHVzZUVmZmVjdCgpIC0+IG5hbyBjYXJyZWdhIHNlIGRlc2FiaWxpdGFyIG8gSlNcbi8vIFNTUiA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSAtPiBjYXJyZWdhIGEgQVBJIGFudGVzIGRlIGFicmlyIGEgcGFnaW5hXG4vLyBTU0cgPT4gZ2VyYSB1bWEgdmVyc2FvIGVzdGF0aWNhLCBpc3RvIGVoLCBhIG1lc21hIHBhZ2luYSBlaCBkaXNwb25pYmlsaXphZGEgbnVtIGRldGVybWluYWRvIHRlbXBvIChuYW8gcHJlY2lzYSBmYXplciBub3ZhcyByZXF1aXNpY29lcywgZGVpeGEgYSBwYWdpbmEgbWFpcyBwZXJmb3JtYXRpY2EpXG5cbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJ1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2NzcydcblxudHlwZSBFcGlzb2RlID0ge1xuICBpZDogc3RyaW5nLFxuICB0aXRsZTpzdHJpbmcsXG4gIHRodW1ibmFpbDogc3RyaW5nLFxuICBtZW1iZXJzOiBzdHJpbmcsXG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmcsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgdXJsOiBzdHJpbmdcbn1cblxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGxhdGVzdEVwaXNvZGVzOiBFcGlzb2RlW11cbiAgYWxsRXBpc29kZXM6IEVwaXNvZGVbXVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzJylcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgLy8gfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaG9tZUNvbnRhaW5lciddfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0RXBpc29kZXN9PlxuICAgICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyBsYXRlc3RFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+IHsvKiBhIGtleSBldml0YSBwb3NzaXZlaXMgcmVuZGVyaXphY29lcyBkZXNuZWNlc3NhcmlhcyAqL31cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTkyfSBvYmplY3RGaXQ9XCJjb3ZlclwiIGhlaWdodD17MTkyfSBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSAgYWx0PXtlcGlzb2RlLnRpdGxlfS8+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZXBpc29kZS5tZW1iZXJzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIi8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XG4gICAgICAgICAgICA8aDI+VG9kb3MgZXBpc8OzZGlvczwvaDI+XG4gICAgICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+UG9kY2FzdDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkR1cmHDp8OjbzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBhbGxFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDcyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLm1lbWJlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOkdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4geyAvLyBhIG1lc21hIHBhZ2luYSBlaCBkaXNwb25pYmlsaXphZGEgcGFyYSBvIHVzdWFyaW8gbnVtIHRyZWNobyBkZSB0ZW1wbyAoc2VtIGF0dHMgY29uc3RhbnRlcylcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIF9saW1pdDogMTIsXG4gICAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgICAgX29yZGVyOiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcbiAgICAgICAgdGh1bWJuYWlsOiBlcGlzb2RlLnRodW1ibmFpbCxcbiAgICAgICAgbWVtYmVyczogZXBpc29kZS5tZW1iZXJzLFxuICAgICAgICBwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSxcbiAgICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgICAgZGVzY3JpcHRpb246IGVwaXNvZGUuZGVzY3JpcHRpb24sXG4gICAgICAgIHVybDogZXBpc29kZS5maWxlLnVybFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBsYXRlc3RFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIDIpO1xuICAgIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgZXBpc29kZXMubGVuZ3RoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGxhdGVzdEVwaXNvZGVzLFxuICAgICAgICBhbGxFcGlzb2Rlc1xuICAgICAgfSxcblxuICAgICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDggLy8gYSBjYWRhIDhocnMgZWggZ2VyYWRhIHVtYSBub3ZhIHBhZ2luYVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHsgLy8gY2FycmVnYSBhIEFQSSBhbnRlcyBtZXNtbyBkZSBhYnJpciBhIHBhZ2luYSAoZXhlY3V0YSB0b2RhIHZleiBxdWUgYWxndWVtIGFjZXNzYSBhIGhvbWUgZG8gYXBwKVxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9lcGlzb2RlcycpXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGVwaXNvZGVzOiBkYXRhXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})