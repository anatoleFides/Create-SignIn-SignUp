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

/***/ "./src/helpers/closeSignUp.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignUp\": () => (/* binding */ closeSignUp)\n/* harmony export */ });\nconst closeSignUp = function (event) {\r\n\tdocument.getElementById(\"sign-up\")\r\n\t\t.classList.remove(\"open-sign_up\")\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignUp.js?");

/***/ }),

/***/ "./src/helpers/createElem.js":
/*!***********************************!*\
  !*** ./src/helpers/createElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nconst createElem = (сontainerName, tagName) => { \r\n\treturn сontainerName.appendChild(document.createElement(tagName)) \r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createElem.js?");

/***/ }),

/***/ "./src/helpers/getUser.js":
/*!********************************!*\
  !*** ./src/helpers/getUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser)\n/* harmony export */ });\nconst getUser = async user => {\r\n\tconst response = await fetch('http://localhost:3000/users', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(user)\r\n\t\t\t})\r\n\t\t\tif (response.status === 201) { \r\n\t\t\t\tdocument.getElementsByTagName('sign-up')[0].remove()\r\n\t\t\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getUser.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setClickSignUp\": () => (/* reexport safe */ _setClickSignUp__WEBPACK_IMPORTED_MODULE_0__.setClickSignUp),\n/* harmony export */   \"closeSignUp\": () => (/* reexport safe */ _closeSignUp__WEBPACK_IMPORTED_MODULE_1__.closeSignUp),\n/* harmony export */   \"readFile\": () => (/* reexport safe */ _readFile__WEBPACK_IMPORTED_MODULE_2__.readFile),\n/* harmony export */   \"getUser\": () => (/* reexport safe */ _getUser__WEBPACK_IMPORTED_MODULE_3__.getUser),\n/* harmony export */   \"createElem\": () => (/* reexport safe */ _createElem__WEBPACK_IMPORTED_MODULE_4__.createElem)\n/* harmony export */ });\n/* harmony import */ var _setClickSignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setClickSignUp */ \"./src/helpers/setClickSignUp.js\");\n/* harmony import */ var _closeSignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeSignUp */ \"./src/helpers/closeSignUp.js\");\n/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readFile */ \"./src/helpers/readFile.js\");\n/* harmony import */ var _getUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getUser */ \"./src/helpers/getUser.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createElem */ \"./src/helpers/createElem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\nconst readFile = function (event) {\r\n\tconst reader = new FileReader\r\n\treader.onload = function (ev) {\r\n\t\tavatar__photo.src = ev.target.result\r\n\t}\r\n\treader.readAsDataURL(event.target.files[0])\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

/***/ }),

/***/ "./src/helpers/setClickSignUp.js":
/*!***************************************!*\
  !*** ./src/helpers/setClickSignUp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setClickSignUp\": () => (/* binding */ setClickSignUp)\n/* harmony export */ });\nconst setClickSignUp = document.getElementById(\"singup-btn\").onclick = function (event) {\r\n\tevent.preventDefault()\r\n\tconst customElemSignUp = document.getElementById(\"sign-up\")\r\n\tconsole.log(customElemSignUp)\r\n\tcustomElemSignUp.classList.add(\"open-sign_up\")\r\n\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/setClickSignUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/signUp'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n// import { createElem } from './helpers'\r\n\r\n// import { changeAvatar } from './helpers'\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/signUp'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;