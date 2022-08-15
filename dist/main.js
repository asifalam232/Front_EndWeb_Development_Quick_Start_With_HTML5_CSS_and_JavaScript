/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Contact.js":
/*!********************!*\
  !*** ./Contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n// Contact.js\n\nclass Contact {\n\n    constructor(form) {\n        this.fullName = form.elements[\"fullName\"].value;\n        this.email = form.elements[\"email\"].value;\n        this.subject = form.elements[\"subject\"].value;\n        this.body = form.elements[\"msg\"].value;\n    }\n\n    fullName =  \"\";\n    email = \"\";\n    subject = \"\";\n    body = \"\";\n\n    send() {\n        console.info(this.formatMessage());\n        document.getElementById(\"formInfo\").innerHTML = \"We're not sending emails yet... feature for version 2\";\n    }\n\n    formatMessage () {\n        return `To: ${this.fullName}\n                Email: ${this.email}\n                Subject: ${this.subject}\n                Body: ${this.body}`;\n    }\n}\n\n//# sourceURL=webpack:///./Contact.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./Contact.js\");\n//index.js\n\n\n\n// let number = 5;\n// let name = \"Asif\";\n// // Writing to the document\n// document.writeln(name);\n// alert(\"Hello world\");\nconst formInfo = document.getElementById(\"formInfo\");\n\nlet hasJob  = false;\n\nif (!hasJob) {\n    // I need a job\n    showMessage(\"Please look around. I'm currently looking for a position.\");\n} else {\n    //I have a job\n    showMessage(\"Thanks for visiting. I'm currently employed.\");\n}\n\nlet today = new Date();\nlet dayOfWeek = today.getDay();\n\nif (dayOfWeek === 0 || dayOfWeek === 6) {\n    showMessage(\"Since it is the weekend, Please be patient with my returning your email.\");\n}\n\nfunction showMessage(message) {\n    formInfo.innerHTML = \"<p>\" + message + \"</p>\"\n}\n\nfunction clearMessage() {\n    formInfo.innerHTML = \"\";\n}\n\nconst contactForm = document.getElementById(\"contactForm\");\ncontactForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    const contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contactForm);\n    contact.send();\n});\n\nfunction sendMessage() {\n    showMessage(\"Please wait, sending your email\");\n}\n\nconst experiences = document.getElementsByClassName(\"experience\");\nfor (let i = 0; i < experiences.length; i++) {\n    const item = experiences[i];\n    item.addEventListener(\"mouseenter\", function (event) {\n        event.target.style  = \"background-color: #999999\";\n    });\n    item.addEventListener(\"mouseleave\", function (event) {\n        event.target.style  = \"\";\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;