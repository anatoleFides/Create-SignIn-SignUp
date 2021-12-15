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

/***/ "./src/components/signUp.js":
/*!**********************************!*\
  !*** ./src/components/signUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SignUp extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: `\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tz-index: 100;\r\n\t\t\t\twidth: 100vw;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tbackground: rgba(204, 204, 204, 0.8);\r\n\t\t\t\tfont-family: Arial;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t`\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: `\r\n\t\t\t\tmax-width: 320px;\r\n\t\t\t\tbox-shadow: 2px 2px 8px #000;\r\n\t\t\t\tbackground: rgba(240, 255, 255, 0.8);\r\n\t\t\t\tborder-radius: 8px;\r\n\t\t\t\tpadding: 12px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tposition: relative;\r\n\t\t\t`\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: `\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 12px;\r\n\t\t\t\tright: 12px;\r\n\t\t\t\twidth: 16px;\r\n\t\t\t\theight: 16px;\r\n\t\t\t\tborder-radius: 2px;\r\n\t\t\t\tbackground: #8A2BE2;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t`\r\n\t\t})\r\n\t\tclose.onclick = function (event) {\r\n\t\t\tdocument.getElementById(\"sign-up\")\r\n\t\t\t\t.classList.remove(\"open-sign_up\")\r\n\t\t}\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: `\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t`\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: `\r\n\t\t\t\tflex: 0 0 100px;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t`\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: 'https://avatarko.ru/img/kartinka/33/cherep_fantastika_feniks_33560.jpg',\r\n\t\t\tstyle: `\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tmax-width: 100%;\r\n\t\t\t`\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign up to Fantasy World',\r\n\t\t\tstyle: `\r\n\t\t\t\tfont-size: 24px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tcolor: #9ACD32;\r\n\t\t\t\tmargin: 16px auto\r\n\t\t\t`\r\n\t\t})\r\n\r\n\t\tconst form__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: `\r\n\t\t\t\twidth: 100%;\r\n\t\t\t`\r\n\t\t})\r\n\t\tconst [login, telephone, email, password] = [['text', 'Login'], ['tel', '+38(___)___-__-__'], ['email', 'e-mail'], ['password', 'Password']]\r\n\t\t\t.map(function (item) {\r\n\t\t\t\tconst elem = this.createElem(form__body, 'input')\r\n\t\t\t\telem.type = item[0],\r\n\t\t\t\telem.placeholder = item[1],\r\n\t\t\t\telem.style = `\r\n\t\t\t\t\t\twidth: 90%;\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tmargin: 12px auto;\r\n\t\t\t\t\t\tpadding: 4px 0 4px 8px;\r\n\t\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t\tborder: 1px solid #FF8C00;\r\n\t\t\t\t\t\ttransition: all .5s ease;\r\n\t\t\t\t\t`\r\n\t\t\t\treturn elem\r\n\t\t\t}.bind(this))\r\n\r\n\r\n\t\t\tconst avatar__container = Object.assign(this.createElem(form__body, 'div'), {\r\n\t\t\tstyle: `\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tmargin: 8px auto;\r\n\t\t\t\twidth: 80px;\r\n\t\t\t\theight: 80px;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tborder: 1px solid #FF8C00;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t`\r\n\t\t\t})\r\n\t\t\tconst avatar = Object.assign(this.createElem(avatar__container, 'input'), {\r\n\t\t\ttype: 'file',\r\n\t\t\tstyle: `\r\n\t\t\t\topacity: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tz-index: 8;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t`\r\n\t\t\t})\r\n\t\t\t\r\n\t\tconst avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {\r\n\t\t\tstyle: `\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tz-index: 4;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t`\r\n\t\t})\r\n\t\tconst avatar__photo = Object.assign(this.createElem(avatar__body, 'img'), {\r\n\t\t\tsrc: 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg',\r\n\t\t\tstyle: `\r\n\t\t\t\tmax-width: 100%; \r\n\t\t\t\tdisplay: block;\r\n\t\t\t`\r\n\t\t})\r\n\t\tavatar.onchange = function (event) {\r\n\t\t\t\tconst reader = new FileReader\r\n\t\t\t\treader.onload = function (ev) {\r\n\t\t\t\t\tavatar__photo.src = ev.target.result\r\n\t\t\t\t}\r\n\t\t\t\treader.readAsDataURL(event.target.files[0])\r\n\t\t\t}\r\n\t\tconst button = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'submit',\r\n\t\t\tstyle: `\r\n\t\t\t\tpadding: 8px; \r\n\t\t\t\tmargin: 0 auto; \r\n\t\t\t\tbackground: #9ACD32; \r\n\t\t\t\tcolor: #fff; \r\n\t\t\t\tborder: none; \r\n\t\t\t\tborder-radius: 4px; \r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t`\r\n\t\t})\r\n\r\n\t\tbutton.onclick = async function (event) {\r\n\t\t\tconst user = {\r\n\t\t\t\tlogin: login.value,\r\n\t\t\t\ttelephone: telephone.value,\r\n\t\t\t\temail: email.value,\r\n\t\t\t\tpassword: password.value,\r\n\t\t\t\tavatat: avatar__photo.src\r\n\t\t\t}\r\n\t\t\tconst response = await fetch('http://localhost:3000/users', {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(user)\r\n\t\t\t})\r\n\t\t\tif (response.status === 201) { \r\n\t\t\t\tdocument.getElementsByTagName('sign-up')[0].remove()\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tcreateElem (сontainerName, tagName) { \r\n\t\tconsole.log(сontainerName.nodeType) \r\n\t\treturn сontainerName.appendChild(document.createElement(tagName)) \r\n\t}\r\n}\r\n\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/signUp.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setClickSignUp\": () => (/* reexport safe */ _setClickSignUp__WEBPACK_IMPORTED_MODULE_0__.setClickSignUp)\n/* harmony export */ });\n/* harmony import */ var _setClickSignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setClickSignUp */ \"./src/helpers/setClickSignUp.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/setClickSignUp.js":
/*!***************************************!*\
  !*** ./src/helpers/setClickSignUp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setClickSignUp\": () => (/* binding */ setClickSignUp)\n/* harmony export */ });\nconst setClickSignUp = document.getElementById(\"singup-btn\").onclick = function (event) {\r\n\tevent.preventDefault()\r\n\tconst customElemSignUp = document.getElementById(\"sign-up\")\r\n\tconsole.log(customElemSignUp)\r\n\tcustomElemSignUp.classList.add(\"open-sign_up\")\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/setClickSignUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_signUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signUp */ \"./src/components/signUp.js\");\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_components_signUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

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