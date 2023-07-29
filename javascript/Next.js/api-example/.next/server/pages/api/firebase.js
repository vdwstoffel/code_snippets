"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/firebase";
exports.ids = ["pages/api/firebase"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/firebase.js":
/*!*******************************!*\
  !*** ./pages/api/firebase.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n    path: \"../../../.env\"\n});\nasync function handler(req, res) {\n    const url = process.env[\"FIREBASE\"];\n    // check if the correct method is used\n    if (req.method === \"POST\") {\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, req.body);\n        res.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDMUJDLG9EQUF3QixDQUFDO0lBQUNFLE1BQU07QUFBZTtBQUUvQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDN0IsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDLFdBQVc7SUFFbkMsc0NBQXNDO0lBQ3RDLElBQUlKLElBQUlLLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU1WLGtEQUFVLENBQUNPLEtBQUtGLElBQUlPLElBQUk7UUFDOUJOLElBQUlPLEdBQUc7SUFDVDtBQUNGO0FBRUEsaUVBQWVULE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktZXhhbXBsZS8uL3BhZ2VzL2FwaS9maXJlYmFzZS5qcz80NTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKHtwYXRoOiAnLi4vLi4vLi4vLmVudid9KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudltcIkZJUkVCQVNFXCJdO1xuXG4gIC8vIGNoZWNrIGlmIHRoZSBjb3JyZWN0IG1ldGhvZCBpcyB1c2VkXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QodXJsLCByZXEuYm9keSk7XG4gICAgcmVzLmVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiY29uZmlnIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwibWV0aG9kIiwicG9zdCIsImJvZHkiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/firebase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/firebase.js"));
module.exports = __webpack_exports__;

})();