/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/data.csv":
/*!*****************************!*\
  !*** ./src/assets/data.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["to","from","title","content"],["Mary","John","Reminde","Call Cindy on Tuseday"],["Zoe","Bill","Reminde","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"],[""]]

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/style.less":
/*!*******************************!*\
  !*** ./src/assets/style.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/data.xml":
/*!*****************************!*\
  !*** ./src/assets/data.xml ***!
  \*****************************/
/***/ ((module) => {

module.exports = {"note":{"to":["Mary"],"from":["John"],"title":["Reminde"],"content":["Call Cindy on Tuseday"]}}

/***/ }),

/***/ "./src/assets/data.json5":
/*!*******************************!*\
  !*** ./src/assets/data.json5 ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"unquoted":"and you can quote me on that","singleQuotes":"I can use \\"double quotes\\" here","lineBreaks":"Look, Mom! No \\\\n\'s!","hexadecimal":912559,"leadingDecimalPoint":0.8675309,"andTrailing":8675309,"positiveSign":1,"trailingComma":"in objects","andIn":["arrays"],"backwardsCompatible":"with JSON"}');

/***/ }),

/***/ "./src/assets/data.toml":
/*!******************************!*\
  !*** ./src/assets/data.toml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","dob":"1979-05-27T15:32:00.000Z"},"database":{"enabled":true,"ports":[8000,8001,8002],"data":[["delta","phi"],[3.14]],"temp_targets":{"cpu":79.5,"case":72}},"servers":{"alpha":{"ip":"10.0.0.1","role":"frontend"},"beta":{"ip":"10.0.0.2","role":"backend"}}}');

/***/ }),

/***/ "./src/assets/data.yaml":
/*!******************************!*\
  !*** ./src/assets/data.yaml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Martin D\'vloper","job":"Developer","skill":"Elite","employed":true,"foods":["Apple","Orange","Strawberry","Mango"],"languages":{"perl":"Elite","python":"Elite","pascal":"Lame"},"education":"4 GCSEs\\n3 A-Levels\\nBSc in the Internet of Things\\n"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.less */ "./src/assets/style.less");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/data.csv */ "./src/assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/data.xml */ "./src/assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_data_toml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.toml */ "./src/assets/data.toml");
/* harmony import */ var _assets_data_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.yaml */ "./src/assets/data.yaml");
/* harmony import */ var _assets_data_json5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/data.json5 */ "./src/assets/data.json5");








console.log("CSV", (_assets_data_csv__WEBPACK_IMPORTED_MODULE_2___default()));
console.log("XML", (_assets_data_xml__WEBPACK_IMPORTED_MODULE_3___default()));
console.log("TOML", _assets_data_toml__WEBPACK_IMPORTED_MODULE_4__);
console.log("YAML", _assets_data_yaml__WEBPACK_IMPORTED_MODULE_5__);
console.log("JSON5", _assets_data_json5__WEBPACK_IMPORTED_MODULE_6__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTRmNWFlZjc0MjNlMTM2MmY5NzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWtCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0ExQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0Q7QUFDWTtBQUNBO0FBQ0U7QUFDQTtBQUNFOztBQUU1QyxtQkFBbUIseURBQU87QUFDMUIsbUJBQW1CLHlEQUFPO0FBQzFCLG9CQUFvQiw4Q0FBUTtBQUM1QixvQkFBb0IsOENBQVE7QUFDNUIscUJBQXFCLCtDQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDgtbG9hZC1kYXRhLy4vc3JjL2Fzc2V0cy9kYXRhLmNzdiIsIndlYnBhY2s6Ly8wOC1sb2FkLWRhdGEvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz84M2FjIiwid2VicGFjazovLzA4LWxvYWQtZGF0YS8uL3NyYy9hc3NldHMvc3R5bGUubGVzcz82YTY2Iiwid2VicGFjazovLzA4LWxvYWQtZGF0YS8uL3NyYy9hc3NldHMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vMDgtbG9hZC1kYXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzA4LWxvYWQtZGF0YS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8wOC1sb2FkLWRhdGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzA4LWxvYWQtZGF0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzA4LWxvYWQtZGF0YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzA4LWxvYWQtZGF0YS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFtbXCJ0b1wiLFwiZnJvbVwiLFwidGl0bGVcIixcImNvbnRlbnRcIl0sW1wiTWFyeVwiLFwiSm9oblwiLFwiUmVtaW5kZVwiLFwiQ2FsbCBDaW5keSBvbiBUdXNlZGF5XCJdLFtcIlpvZVwiLFwiQmlsbFwiLFwiUmVtaW5kZVwiLFwiQnV5IG9yYW5nZSBqdWljZVwiXSxbXCJBdXR1bW5cIixcIkxpbmRzZXlcIixcIkxldHRlclwiLFwiSSBtaXNzIHlvdVwiXSxbXCJcIl1dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJ0aXRsZVwiOltcIlJlbWluZGVcIl0sXCJjb250ZW50XCI6W1wiQ2FsbCBDaW5keSBvbiBUdXNlZGF5XCJdfX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUubGVzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3N2RGF0YSBmcm9tIFwiLi9hc3NldHMvZGF0YS5jc3ZcIjtcbmltcG9ydCB4bWxEYXRhIGZyb20gXCIuL2Fzc2V0cy9kYXRhLnhtbFwiO1xuaW1wb3J0IHRvbWxEYXRhIGZyb20gXCIuL2Fzc2V0cy9kYXRhLnRvbWxcIjtcbmltcG9ydCB5YW1sRGF0YSBmcm9tIFwiLi9hc3NldHMvZGF0YS55YW1sXCI7XG5pbXBvcnQganNvbjVEYXRhIGZyb20gXCIuL2Fzc2V0cy9kYXRhLmpzb241XCI7XG5cbmNvbnNvbGUubG9nKFwiQ1NWXCIsIGNzdkRhdGEpO1xuY29uc29sZS5sb2coXCJYTUxcIiwgeG1sRGF0YSk7XG5jb25zb2xlLmxvZyhcIlRPTUxcIiwgdG9tbERhdGEpO1xuY29uc29sZS5sb2coXCJZQU1MXCIsIHlhbWxEYXRhKTtcbmNvbnNvbGUubG9nKFwiSlNPTjVcIiwganNvbjVEYXRhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==