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

/***/ "./src/assets/default-avatar.js":
/*!**************************************!*\
  !*** ./src/assets/default-avatar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultPicture\": () => (/* binding */ defaultPicture),\n/* harmony export */   \"getDefaultAvatar\": () => (/* binding */ getDefaultAvatar)\n/* harmony export */ });\nconst defaultPicture = 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'\r\n\r\nconst getDefaultAvatar = (function () {\r\n\tlet avatar = defaultPicture\r\n\treturn function (value) {\r\n\t\tif (value) {\r\n\t\t\tavatar = value\r\n\t\t} else return avatar\r\n\t}\r\n})()\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/default-avatar.js?");

/***/ }),

/***/ "./src/assets/endpoint.js":
/*!********************************!*\
  !*** ./src/assets/endpoint.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": () => (/* binding */ endpoint)\n/* harmony export */ });\nconst endpoint = 'http://localhost:3000/users'\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/endpoint.js?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* reexport safe */ _logo_img__WEBPACK_IMPORTED_MODULE_0__.logoImg),\n/* harmony export */   \"getDefaultAvatar\": () => (/* reexport safe */ _default_avatar__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar),\n/* harmony export */   \"endpoint\": () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_2__.endpoint)\n/* harmony export */ });\n/* harmony import */ var _logo_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-img */ \"./src/assets/logo-img.js\");\n/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-avatar */ \"./src/assets/default-avatar.js\");\n/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint */ \"./src/assets/endpoint.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/logo-img.js":
/*!********************************!*\
  !*** ./src/assets/logo-img.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* binding */ logoImg)\n/* harmony export */ });\nconst logoImg = 'https://avatarko.ru/img/kartinka/33/cherep_fantastika_feniks_33560.jpg'\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/logo-img.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\t// this.handlers = [loginHandlerSignIn, passwordHandlerSignIn]\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignIn\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign in to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst [login, password] = [\r\n\t\t\t['text', 'Login', 'Login not found'],\r\n\t\t\t['password', 'Password', 'Invalid passvord']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem__container = this.createElem(forms__body, 'div')\r\n\r\n\t\t\tconst elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n\t\t\t})\r\n\r\n\t\t\tconst error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n\t\t\t\ttextContent: item[2],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tconst forgot__password = Object.assign(this.createElem(container, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.forgotPasswordStyle,\r\n\t\t\tinnerText: 'Forgot password?',\r\n\t\t\thref: '#'\r\n\t\t})\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.loginHandlerSignIn)(login)\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.passwordHandlerSignIn)(password)\r\n\r\n\t\t// const user = {\r\n\t\t// \tlogin: login.value,\r\n\t\t// \tpassword: password.value\r\n\t\t// }\r\n\r\n\t\t// console.log(user)\r\n\t\twindow[Symbol.for('listInputSignIn')] = [login, password]\r\n\r\n\t\tconst button = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tinnerText: 'Sign In',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle,\r\n\t\t\t// onclick: authorizeUser\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignIn.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\nconst elemSignIn = document.createElement('sign-in')\r\nelemSignIn.id = 'sign-in'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignIn);\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignUp\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign up to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst elems__body = Object.assign(this.createElem(forms__body, 'div'), {\r\n\t\t})\r\n\r\n\t\tconst [login, telephone, email, password] = [\r\n\t\t\t['text', 'Login', 'Invalid login format'],\r\n\t\t\t['tel', '(___)___-__-__', 'Invalid telephone format'],\r\n\t\t\t['email', 'e-mail', 'Invalid e-mail format'],\r\n\t\t\t['password', 'Password', 'Invalid password format']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem__container = this.createElem(elems__body, 'div')\r\n\r\n\t\t\tconst elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputValidationStyle\r\n\t\t\t})\r\n\r\n\t\t\tconst error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n\t\t\t\ttextContent: item[2],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.loginValidationSignUp)(login)\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.phoneValidation)(telephone)\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.emailValidation)(email)\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.passwordValidation)(password)\r\n\r\n\t\tconst avatar__container = Object.assign(this.createElem(forms__body, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarContainerStyle\r\n\t\t})\r\n\t\tconst avatar = Object.assign(this.createElem(avatar__container, 'input'), {\r\n\t\t\ttype: 'file',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarStyle\r\n\t\t})\r\n\t\t\t\r\n\t\tconst avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarBodyStyle\r\n\t\t})\r\n\r\n\t\twindow[Symbol.for('photo')] = Object.assign(this.createElem(avatar__body, 'img'), {\r\n\t\t\tsrc: (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)(),\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\twindow[Symbol.for('error__message-avatar')] = Object.assign(this.createElem(forms__body, 'p'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle,\r\n\t\t\tinnerText: 'Invalid file type'\r\n\t\t})\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.readFile)(avatar)\r\n\r\n\t\twindow[Symbol.for('listInputSignUp')] = [login, telephone, email, password]\r\n\r\n\t\tconst button = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\t// disabled: false,\r\n\t\t\tinnerText: 'Sign Up',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle,\r\n\t\t\tonclick: async function (event) {\r\n\t\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUser) ({\r\n\t\t\t\t\tlogin: login.value,\r\n\t\t\t\t\ttelephone: telephone.value,\r\n\t\t\t\t\temail: email.value,\r\n\t\t\t\t\tpassword: password.value,\r\n\t\t\t\t\tavatar: window[Symbol.for('photo')].src\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignUp.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/helpers/closeSignIn.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* binding */ closeSignIn)\n/* harmony export */ });\n/* harmony import */ var _resetInputSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetInputSignIn */ \"./src/helpers/resetInputSignIn.js\");\n\r\n\r\nconst closeSignIn = (event) => {\r\n\t(0,_resetInputSignIn__WEBPACK_IMPORTED_MODULE_0__.resetInputSignIn)()\r\n\tdocument.getElementById(\"sign-in\").remove()\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignIn.js?");

/***/ }),

/***/ "./src/helpers/closeSignUp.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignUp\": () => (/* binding */ closeSignUp)\n/* harmony export */ });\n/* harmony import */ var _resetInputSignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetInputSignUp */ \"./src/helpers/resetInputSignUp.js\");\n\r\n\r\nconst closeSignUp = (event) => {\r\n\t(0,_resetInputSignUp__WEBPACK_IMPORTED_MODULE_0__.resetInputSignUp)()\r\n\tdocument.getElementById(\"sign-up\").remove()\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignUp.js?");

/***/ }),

/***/ "./src/helpers/compareLogin.js":
/*!*************************************!*\
  !*** ./src/helpers/compareLogin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareLogin\": () => (/* binding */ compareLogin)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst compareLogin = (inputElem, loginValue) => {\r\n\t// const usersLogin = localStorage.getObject('logins')\r\n\tconst usersLogin = JSON.parse(localStorage.logins)\r\n\r\n\tusersLogin.filter(login => login === loginValue).length !== 0\r\n\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\ttextContent: 'login exists',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageActiveStyle\r\n\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\ttextContent: 'Invalid login format'\r\n\t\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/compareLogin.js?");

/***/ }),

/***/ "./src/helpers/createElem.js":
/*!***********************************!*\
  !*** ./src/helpers/createElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nconst createElem = (сontainerName, tagName) => { \r\n\treturn сontainerName.appendChild(document.createElement(tagName)) \r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createElem.js?");

/***/ }),

/***/ "./src/helpers/emailValidation.js":
/*!****************************************!*\
  !*** ./src/helpers/emailValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailValidation\": () => (/* binding */ emailValidation)\n/* harmony export */ });\n/* harmony import */ var _valueValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueValidation */ \"./src/helpers/valueValidation.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst emailValidation = (inputElem) => {\r\n\tinputElem.oninput = (event) => {\r\n\t\t(0,_valueValidation__WEBPACK_IMPORTED_MODULE_0__.valueValidation)(inputElem, event.target)\r\n\r\n\t\tlet mailformat = /^(([^<>()[\\].,;:\\s@\"]+(\\.[^<>()[\\].,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\].,;:\\s@\"]+\\.)+[^<>()[\\].,;:\\s@\"]{2,})$/iu\r\n\r\n\t\tevent.target.value.match(mailformat) \r\n\t\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n\t\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n\t\t\t})\r\n\r\n\t\t;(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/emailValidation.js?");

/***/ }),

/***/ "./src/helpers/emptiValidationStyle.js":
/*!*********************************************!*\
  !*** ./src/helpers/emptiValidationStyle.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emptiValidationStyle\": () => (/* binding */ emptiValidationStyle)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst emptiValidationStyle = (inputElem, callbackValue) => {\r\n\tif (callbackValue.value === '') {\r\n\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/emptiValidationStyle.js?");

/***/ }),

/***/ "./src/helpers/getListLogins.js":
/*!**************************************!*\
  !*** ./src/helpers/getListLogins.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListLogins\": () => (/* binding */ getListLogins)\n/* harmony export */ });\n/* harmony import */ var _usersCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersCollection */ \"./src/helpers/usersCollection.js\");\n// import { endpoint } from '../assets'\r\n\r\n\r\nconst getListLogins = () => {\r\n\t// const collecUsers = async () => await (await fetch(\"http://localhost:3000/users\")).json()\r\n\r\n\t(0,_usersCollection__WEBPACK_IMPORTED_MODULE_0__.usersCollection)().then(response => {\r\n\t\tlocalStorage.setObject('logins', response.map(item => item.login))\r\n\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getListLogins.js?");

/***/ }),

/***/ "./src/helpers/getUser.js":
/*!********************************!*\
  !*** ./src/helpers/getUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _getListLogins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getListLogins */ \"./src/helpers/getListLogins.js\");\n/* harmony import */ var _resetInputSignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetInputSignUp */ \"./src/helpers/resetInputSignUp.js\");\n\r\n\r\n\r\n\r\nconst getUser = async user => {\r\n\tconst response = await fetch(_assets__WEBPACK_IMPORTED_MODULE_0__.endpoint, {\r\n\t\t\t\tmethod: 'POST',\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(user)\r\n\t\t\t})\r\n\t\t\tif (response.status === 201) {\r\n\t\t\t\t(0,_getListLogins__WEBPACK_IMPORTED_MODULE_1__.getListLogins)()\r\n\t\t\t\t;(0,_resetInputSignUp__WEBPACK_IMPORTED_MODULE_2__.resetInputSignUp)()\r\n\r\n\t\t\t\tdocument.getElementsByTagName('sign-up')[0].remove()\r\n\t\t\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getUser.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* reexport safe */ _closeSignIn__WEBPACK_IMPORTED_MODULE_0__.closeSignIn),\n/* harmony export */   \"closeSignUp\": () => (/* reexport safe */ _closeSignUp__WEBPACK_IMPORTED_MODULE_1__.closeSignUp),\n/* harmony export */   \"resetInputSignIn\": () => (/* reexport safe */ _resetInputSignIn__WEBPACK_IMPORTED_MODULE_2__.resetInputSignIn),\n/* harmony export */   \"resetInputSignUp\": () => (/* reexport safe */ _resetInputSignUp__WEBPACK_IMPORTED_MODULE_3__.resetInputSignUp),\n/* harmony export */   \"valueValidation\": () => (/* reexport safe */ _valueValidation__WEBPACK_IMPORTED_MODULE_4__.valueValidation),\n/* harmony export */   \"emptiValidationStyle\": () => (/* reexport safe */ _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_5__.emptiValidationStyle),\n/* harmony export */   \"loginValidationSignUp\": () => (/* reexport safe */ _loginValidationSignUp__WEBPACK_IMPORTED_MODULE_6__.loginValidationSignUp),\n/* harmony export */   \"phoneValidation\": () => (/* reexport safe */ _phoneValidation__WEBPACK_IMPORTED_MODULE_7__.phoneValidation),\n/* harmony export */   \"emailValidation\": () => (/* reexport safe */ _emailValidation__WEBPACK_IMPORTED_MODULE_8__.emailValidation),\n/* harmony export */   \"passwordValidation\": () => (/* reexport safe */ _passwordValidation__WEBPACK_IMPORTED_MODULE_9__.passwordValidation),\n/* harmony export */   \"compareLogin\": () => (/* reexport safe */ _compareLogin__WEBPACK_IMPORTED_MODULE_10__.compareLogin),\n/* harmony export */   \"readFile\": () => (/* reexport safe */ _readFile__WEBPACK_IMPORTED_MODULE_11__.readFile),\n/* harmony export */   \"getUser\": () => (/* reexport safe */ _getUser__WEBPACK_IMPORTED_MODULE_12__.getUser),\n/* harmony export */   \"getListLogins\": () => (/* reexport safe */ _getListLogins__WEBPACK_IMPORTED_MODULE_13__.getListLogins),\n/* harmony export */   \"usersCollection\": () => (/* reexport safe */ _usersCollection__WEBPACK_IMPORTED_MODULE_14__.usersCollection),\n/* harmony export */   \"loginHandlerSignIn\": () => (/* reexport safe */ _loginHandlerSignIn__WEBPACK_IMPORTED_MODULE_15__.loginHandlerSignIn),\n/* harmony export */   \"passwordHandlerSignIn\": () => (/* reexport safe */ _passwordHandlerSignIn__WEBPACK_IMPORTED_MODULE_16__.passwordHandlerSignIn),\n/* harmony export */   \"createElem\": () => (/* reexport safe */ _createElem__WEBPACK_IMPORTED_MODULE_17__.createElem)\n/* harmony export */ });\n/* harmony import */ var _closeSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeSignIn */ \"./src/helpers/closeSignIn.js\");\n/* harmony import */ var _closeSignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeSignUp */ \"./src/helpers/closeSignUp.js\");\n/* harmony import */ var _resetInputSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetInputSignIn */ \"./src/helpers/resetInputSignIn.js\");\n/* harmony import */ var _resetInputSignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInputSignUp */ \"./src/helpers/resetInputSignUp.js\");\n/* harmony import */ var _valueValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valueValidation */ \"./src/helpers/valueValidation.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _loginValidationSignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginValidationSignUp */ \"./src/helpers/loginValidationSignUp.js\");\n/* harmony import */ var _phoneValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phoneValidation */ \"./src/helpers/phoneValidation.js\");\n/* harmony import */ var _emailValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emailValidation */ \"./src/helpers/emailValidation.js\");\n/* harmony import */ var _passwordValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passwordValidation */ \"./src/helpers/passwordValidation.js\");\n/* harmony import */ var _compareLogin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compareLogin */ \"./src/helpers/compareLogin.js\");\n/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readFile */ \"./src/helpers/readFile.js\");\n/* harmony import */ var _getUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getUser */ \"./src/helpers/getUser.js\");\n/* harmony import */ var _getListLogins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getListLogins */ \"./src/helpers/getListLogins.js\");\n/* harmony import */ var _usersCollection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usersCollection */ \"./src/helpers/usersCollection.js\");\n/* harmony import */ var _loginHandlerSignIn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loginHandlerSignIn */ \"./src/helpers/loginHandlerSignIn.js\");\n/* harmony import */ var _passwordHandlerSignIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./passwordHandlerSignIn */ \"./src/helpers/passwordHandlerSignIn.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./createElem */ \"./src/helpers/createElem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { disabledSummit } from './disabledSummit'\r\n\r\n\r\n// import { authorizeUser } from './authorizeUser'\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/loginHandlerSignIn.js":
/*!*******************************************!*\
  !*** ./src/helpers/loginHandlerSignIn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandlerSignIn\": () => (/* binding */ loginHandlerSignIn)\n/* harmony export */ });\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\nconst loginHandlerSignIn = (inputElem) => {\r\n\tconst usersLogin = JSON.parse(localStorage.logins)\r\n\r\n\tinputElem.oninput = (event) => {\r\n\t\twindow[Symbol.for('userLoginIndex')] = usersLogin.indexOf(usersLogin\r\n\t\t\t.filter(item => item === event.target.value)[0])\r\n\t\tconsole.log(window[Symbol.for('userLoginIndex')])\r\n\r\n\t\tusersLogin[window[Symbol.for('userLoginIndex')]] !== event.target.value\r\n\t\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t\t\t})\r\n\r\n\t\t;(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_0__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/loginHandlerSignIn.js?");

/***/ }),

/***/ "./src/helpers/loginValidationSignUp.js":
/*!**********************************************!*\
  !*** ./src/helpers/loginValidationSignUp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginValidationSignUp\": () => (/* binding */ loginValidationSignUp)\n/* harmony export */ });\n/* harmony import */ var _valueValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueValidation */ \"./src/helpers/valueValidation.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _compareLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareLogin */ \"./src/helpers/compareLogin.js\");\n/* harmony import */ var _getListLogins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getListLogins */ \"./src/helpers/getListLogins.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst loginValidationSignUp = (inputElem) => {\r\n\tinputElem.oninput = function(event) {\r\n\t\t(0,_valueValidation__WEBPACK_IMPORTED_MODULE_0__.valueValidation)(inputElem, event.target)\r\n\r\n\t\tlet letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/\r\n\r\n\t\t!event.target.value.match(letters) ? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_4__.errorMessageActiveStyle\r\n\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_4__.errorMessageStyle\r\n\t\t})\r\n\r\n\t\t;(0,_compareLogin__WEBPACK_IMPORTED_MODULE_2__.compareLogin)(inputElem, inputElem.value)\r\n\r\n\t\t;(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n\t// return let validLogin = true\r\n\t// console.log(validLogin)\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/loginValidationSignUp.js?");

/***/ }),

/***/ "./src/helpers/passwordHandlerSignIn.js":
/*!**********************************************!*\
  !*** ./src/helpers/passwordHandlerSignIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordHandlerSignIn\": () => (/* binding */ passwordHandlerSignIn)\n/* harmony export */ });\n/* harmony import */ var _usersCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersCollection */ \"./src/helpers/usersCollection.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst passwordHandlerSignIn = (inputElem) => {\r\n\tconst usersLoginPassword = []\r\n\t;(0,_usersCollection__WEBPACK_IMPORTED_MODULE_0__.usersCollection)().then(response => response\r\n\t\t.map(item => usersLoginPassword.push({\r\n\t\t\tlogin: item.login,\r\n\t\t\tpassword: item.password\r\n\t\t})))\r\n\t\r\n\tinputElem.oninput = (event) => {\r\n\t\tconst usersPassord = usersLoginPassword.map(item => item.password)\r\n\r\n\t\tconst userPasswordIndex = usersPassord.indexOf(usersPassord\r\n\t\t\t.filter(item => item === event.target.value)[0])\r\n\t\tconsole.log(userPasswordIndex)\r\n\r\n\t\twindow[Symbol.for('userLoginIndex')] === userPasswordIndex\r\n\t\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n\t\t\t}): Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n\t\t\t\t})\r\n\r\n\t\t;(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/passwordHandlerSignIn.js?");

/***/ }),

/***/ "./src/helpers/passwordValidation.js":
/*!*******************************************!*\
  !*** ./src/helpers/passwordValidation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordValidation\": () => (/* binding */ passwordValidation)\n/* harmony export */ });\n/* harmony import */ var _valueValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueValidation */ \"./src/helpers/valueValidation.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst passwordValidation = (inputElem) => {\r\n\tinputElem.oninput = (event) => {\r\n\t\t(0,_valueValidation__WEBPACK_IMPORTED_MODULE_0__.valueValidation)(inputElem, event.target)\r\n\r\n\t\tif (event.target.value.length < 8) {\r\n\t\t\tevent.target.style.color = '#f00'\r\n\t\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n\t\t} else { \r\n\t\t\tevent.target.style.color = '#090'\r\n\t\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n\t\t}\r\n\r\n\t\t(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/passwordValidation.js?");

/***/ }),

/***/ "./src/helpers/phoneValidation.js":
/*!****************************************!*\
  !*** ./src/helpers/phoneValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phoneValidation\": () => (/* binding */ phoneValidation)\n/* harmony export */ });\n/* harmony import */ var _valueValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueValidation */ \"./src/helpers/valueValidation.js\");\n/* harmony import */ var _emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptiValidationStyle */ \"./src/helpers/emptiValidationStyle.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst phoneValidation = (inputElem) => {\r\n\tinputElem.oninput = (event) => {\r\n\t\t(0,_valueValidation__WEBPACK_IMPORTED_MODULE_0__.valueValidation)(inputElem, event.target)\r\n\r\n\t\tlet phoneformat = /^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/\r\n\t\t\r\n\t\tevent.target.value.match(phoneformat) ? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n\t\t})\r\n\r\n\t\t;(0,_emptiValidationStyle__WEBPACK_IMPORTED_MODULE_1__.emptiValidationStyle)(inputElem, event.target)\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/phoneValidation.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\nconst readFile = (elem) => {\r\n\telem.onchange = (event) => {\r\n\t\tif (event.target.files[0].type.indexOf('image')) {\r\n\t\t\twindow[Symbol.for('error__message-avatar')].style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t} else {\r\n\t\t\twindow[Symbol.for('error__message-avatar')].style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t\tconst reader = new FileReader\r\n\t\t\treader.onload = function (ev) {\r\n\t\t\t\twindow[Symbol.for('photo')].src = ev.target.result\r\n\t\t\t}\r\n\t\t\treader.readAsDataURL(event.target.files[0])\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignIn.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignIn\": () => (/* binding */ resetInputSignIn)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst resetInputSignIn = () => {\r\n\twindow[Symbol.for('listInputSignIn')].forEach(input => {\r\n\t\tObject.assign(input, {\r\n\t\t\tvalue: ''\r\n\t\t})\r\n\t\tObject.assign(input.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t})\r\n\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignIn.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignUp.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignUp\": () => (/* binding */ resetInputSignUp)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n\r\n\r\n\r\n\r\nconst resetInputSignUp = () => {\r\n\t\twindow[Symbol.for('listInputSignUp')].forEach(input => {\r\n\t\tObject.assign(input, {\r\n\t\t\tvalue: '',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputValidationStyle\r\n\t\t})\r\n\t\tObject.assign(input.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t})\r\n\t})\r\n\r\n\twindow[Symbol.for('photo')].src = (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)()\r\n\twindow[Symbol.for('error__message-avatar')].style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignUp.js?");

/***/ }),

/***/ "./src/helpers/usersCollection.js":
/*!****************************************!*\
  !*** ./src/helpers/usersCollection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersCollection\": () => (/* binding */ usersCollection)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n\r\n\r\nconst usersCollection = async () => await (await fetch(_assets__WEBPACK_IMPORTED_MODULE_0__.endpoint)).json()\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/usersCollection.js?");

/***/ }),

/***/ "./src/helpers/valueValidation.js":
/*!****************************************!*\
  !*** ./src/helpers/valueValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"valueValidation\": () => (/* binding */ valueValidation)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst valueValidation = (inputElem, callbackValue) => {\r\n\t\tcallbackValue.value.length !== 0\r\n\t\t\t? inputElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle : inputElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.inputValidationStyle\r\n\t}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/valueValidation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function (event) {\r\n\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getListLogins)()\r\n}\r\n\r\n// const openSearch = document.querySelector('search-form__icon')\r\n// openSearch.onclick = (event) => {\r\n// \tevent.target.classList.toggle('active')\r\n// }\r\n\r\n// const openBurger = document.getElementById(\"icon-menu\")\r\n// openBurger.onclick = (event) => {\r\n// \tevent.target.classList.toggle('open')\r\n// \topen () => {\r\n// \t\tdocument.getElementById(\"header-menu\").classList.toggle('open')\r\n// \t}\r\n// }\r\n\r\nconst forms = [_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_sign_up__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\r\n\r\nconst [sinInButton, sinUpButton] = [\"sing-in__btn\", \"sing-up__btn\"]\r\n\t.map((id, index) => Object.assign(document.getElementById(id), {\r\n\t\tonclick: function (event) {\r\n\t\t\tdocument.body.appendChild(forms[index])\r\n\t\t}\r\n}))\r\n\r\nconst buttonBurger = document.getElementById(\"burger-menu\")\r\nObject.assign(buttonBurger, {\r\n\tonclick: function (event) {\r\n\t\tbuttonBurger.classList.toggle('open')\r\n\t\tdocument.getElementById(\"header-menu\").classList.toggle('active')\r\n\t}\r\n})\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

/***/ }),

/***/ "./src/styles/avatar-body.js":
/*!***********************************!*\
  !*** ./src/styles/avatar-body.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarBodyStyle\": () => (/* binding */ avatarBodyStyle)\n/* harmony export */ });\nconst avatarBodyStyle = `\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tz-index: 4;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-body.js?");

/***/ }),

/***/ "./src/styles/avatar-container.js":
/*!****************************************!*\
  !*** ./src/styles/avatar-container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarContainerStyle\": () => (/* binding */ avatarContainerStyle)\n/* harmony export */ });\nconst avatarContainerStyle = `\r\n\tposition: relative;\r\n\tmargin: 0 auto;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #FF8C00;\r\n\toverflow: hidden;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-container.js?");

/***/ }),

/***/ "./src/styles/avatar.js":
/*!******************************!*\
  !*** ./src/styles/avatar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarStyle\": () => (/* binding */ avatarStyle)\n/* harmony export */ });\nconst avatarStyle = `\r\n\topacity: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar.js?");

/***/ }),

/***/ "./src/styles/button-close.js":
/*!************************************!*\
  !*** ./src/styles/button-close.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonCloseStyle\": () => (/* binding */ buttonCloseStyle)\n/* harmony export */ });\nconst buttonCloseStyle = `\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\tright: 8px;\r\n\tpadding: 0 4px;\r\n\tbackground: #8A2BE2;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n\tmargin: 0;\r\n\tborder-radius: 4px;\r\n\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-close.js?");

/***/ }),

/***/ "./src/styles/button-submit.js":
/*!*************************************!*\
  !*** ./src/styles/button-submit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonSubmitStyle\": () => (/* binding */ buttonSubmitStyle)\n/* harmony export */ });\nconst buttonSubmitStyle = `\r\n\tpadding: 8px; \r\n\tmargin: 4px 0 0 0;\r\n\tmargin: 0 auto; \r\n\tbackground: #9ACD32; \r\n\tcolor: #fff; \r\n\tborder: none; \r\n\tborder-radius: 4px; \r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\twidth: 50%;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-submit.js?");

/***/ }),

/***/ "./src/styles/container.js":
/*!*********************************!*\
  !*** ./src/styles/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containerStyle\": () => (/* binding */ containerStyle)\n/* harmony export */ });\nconst containerStyle = `\r\n\tmax-width: 320px;\r\n\tbox-shadow: 2px 2px 8px #000;\r\n\tbackground: rgba(240, 255, 255, 0.8);\r\n\tborder-radius: 8px;\r\n\tpadding: 12px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/container.js?");

/***/ }),

/***/ "./src/styles/error-message-active.js":
/*!********************************************!*\
  !*** ./src/styles/error-message-active.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* binding */ errorMessageActiveStyle)\n/* harmony export */ });\nconst errorMessageActiveStyle = `\r\n\tcolor: #f00;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\tvisibility: visible;\r\n\tpadding: 2px 0;\r\n\ttransition: all .2s ease;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message-active.js?");

/***/ }),

/***/ "./src/styles/error-message.js":
/*!*************************************!*\
  !*** ./src/styles/error-message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageStyle\": () => (/* binding */ errorMessageStyle)\n/* harmony export */ });\nconst errorMessageStyle = `\r\n\tcolor: #f00;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\tpadding: 2px 0;\r\n\tvisibility: hidden;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message.js?");

/***/ }),

/***/ "./src/styles/forgot-password.js":
/*!***************************************!*\
  !*** ./src/styles/forgot-password.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forgotPasswordStyle\": () => (/* binding */ forgotPasswordStyle)\n/* harmony export */ });\nconst forgotPasswordStyle = `\r\n\t\tfont-size: 16px;\r\n\t\ttext-decoration: none;\r\n\t\tcursor: pointer;\r\n\t\tcolor: #87CEEB;\r\n\t\tmargin: 0 0 16px 0;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forgot-password.js?");

/***/ }),

/***/ "./src/styles/forms-body.js":
/*!**********************************!*\
  !*** ./src/styles/forms-body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formsBodyStyle\": () => (/* binding */ formsBodyStyle)\n/* harmony export */ });\nconst formsBodyStyle = `\r\n\twidth: 100%;\r\n\tposition: relative;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forms-body.js?");

/***/ }),

/***/ "./src/styles/image.js":
/*!*****************************!*\
  !*** ./src/styles/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageStyle\": () => (/* binding */ imageStyle)\n/* harmony export */ });\nconst imageStyle = `\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/image.js?");

/***/ }),

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle),\n/* harmony export */   \"containerStyle\": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.containerStyle),\n/* harmony export */   \"buttonCloseStyle\": () => (/* reexport safe */ _button_close__WEBPACK_IMPORTED_MODULE_2__.buttonCloseStyle),\n/* harmony export */   \"logoStyle\": () => (/* reexport safe */ _logo_js__WEBPACK_IMPORTED_MODULE_3__.logoStyle),\n/* harmony export */   \"logoLinkStyle\": () => (/* reexport safe */ _logo_link_js__WEBPACK_IMPORTED_MODULE_4__.logoLinkStyle),\n/* harmony export */   \"imageStyle\": () => (/* reexport safe */ _image_js__WEBPACK_IMPORTED_MODULE_5__.imageStyle),\n/* harmony export */   \"titleStyle\": () => (/* reexport safe */ _title_js__WEBPACK_IMPORTED_MODULE_6__.titleStyle),\n/* harmony export */   \"formsBodyStyle\": () => (/* reexport safe */ _forms_body__WEBPACK_IMPORTED_MODULE_7__.formsBodyStyle),\n/* harmony export */   \"inputStyle\": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_8__.inputStyle),\n/* harmony export */   \"inputValidationStyle\": () => (/* reexport safe */ _input_validation__WEBPACK_IMPORTED_MODULE_9__.inputValidationStyle),\n/* harmony export */   \"errorMessageStyle\": () => (/* reexport safe */ _error_message__WEBPACK_IMPORTED_MODULE_10__.errorMessageStyle),\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* reexport safe */ _error_message_active__WEBPACK_IMPORTED_MODULE_11__.errorMessageActiveStyle),\n/* harmony export */   \"avatarContainerStyle\": () => (/* reexport safe */ _avatar_container__WEBPACK_IMPORTED_MODULE_12__.avatarContainerStyle),\n/* harmony export */   \"avatarStyle\": () => (/* reexport safe */ _avatar__WEBPACK_IMPORTED_MODULE_13__.avatarStyle),\n/* harmony export */   \"avatarBodyStyle\": () => (/* reexport safe */ _avatar_body__WEBPACK_IMPORTED_MODULE_14__.avatarBodyStyle),\n/* harmony export */   \"forgotPasswordStyle\": () => (/* reexport safe */ _forgot_password__WEBPACK_IMPORTED_MODULE_15__.forgotPasswordStyle),\n/* harmony export */   \"buttonSubmitStyle\": () => (/* reexport safe */ _button_submit__WEBPACK_IMPORTED_MODULE_16__.buttonSubmitStyle)\n/* harmony export */ });\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ \"./src/styles/wrapper.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./src/styles/container.js\");\n/* harmony import */ var _button_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-close */ \"./src/styles/button-close.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ \"./src/styles/logo.js\");\n/* harmony import */ var _logo_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo-link.js */ \"./src/styles/logo-link.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.js */ \"./src/styles/image.js\");\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title.js */ \"./src/styles/title.js\");\n/* harmony import */ var _forms_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-body */ \"./src/styles/forms-body.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input */ \"./src/styles/input.js\");\n/* harmony import */ var _input_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-validation */ \"./src/styles/input-validation.js\");\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-message */ \"./src/styles/error-message.js\");\n/* harmony import */ var _error_message_active__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-message-active */ \"./src/styles/error-message-active.js\");\n/* harmony import */ var _avatar_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./avatar-container */ \"./src/styles/avatar-container.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avatar */ \"./src/styles/avatar.js\");\n/* harmony import */ var _avatar_body__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./avatar-body */ \"./src/styles/avatar-body.js\");\n/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password */ \"./src/styles/forgot-password.js\");\n/* harmony import */ var _button_submit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button-submit */ \"./src/styles/button-submit.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/index.js?");

/***/ }),

/***/ "./src/styles/input-validation.js":
/*!****************************************!*\
  !*** ./src/styles/input-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputValidationStyle\": () => (/* binding */ inputValidationStyle)\n/* harmony export */ });\nconst inputValidationStyle = `\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tmargin: 4px 0;\r\n\tpadding: 4px 0 4px 8px;\r\n\tborder-radius: 4px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid #9ACD32;\r\n\ttransition: all .5s ease;\r\n\tbox-sizing: border-box;\r\n\tbox-shadow: 1px 1px 2px #f00;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/input-validation.js?");

/***/ }),

/***/ "./src/styles/input.js":
/*!*****************************!*\
  !*** ./src/styles/input.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputStyle\": () => (/* binding */ inputStyle)\n/* harmony export */ });\nconst inputStyle = `\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tmargin: 4px 0;\r\n\tpadding: 4px 0 4px 8px;\r\n\tborder-radius: 4px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid #9ACD32;\r\n\ttransition: all .5s ease;\r\n\tbox-sizing: border-box;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/input.js?");

/***/ }),

/***/ "./src/styles/logo-link.js":
/*!*********************************!*\
  !*** ./src/styles/logo-link.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoLinkStyle\": () => (/* binding */ logoLinkStyle)\n/* harmony export */ });\nconst logoLinkStyle = `\r\n\tflex: 0 0 100px;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tborder: 2px solid #9ACD32;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/logo-link.js?");

/***/ }),

/***/ "./src/styles/logo.js":
/*!****************************!*\
  !*** ./src/styles/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoStyle\": () => (/* binding */ logoStyle)\n/* harmony export */ });\nconst logoStyle = `\r\n\tdisplay: flex;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/logo.js?");

/***/ }),

/***/ "./src/styles/title.js":
/*!*****************************!*\
  !*** ./src/styles/title.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleStyle\": () => (/* binding */ titleStyle)\n/* harmony export */ });\nconst titleStyle = `\r\n\tfont-size: 24px;\r\n\tfont-weight: 700;\r\n\tcolor: #8A2BE2;\r\n\tmargin: 16px auto\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/title.js?");

/***/ }),

/***/ "./src/styles/wrapper.js":
/*!*******************************!*\
  !*** ./src/styles/wrapper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* binding */ wrapperStyle)\n/* harmony export */ });\nconst wrapperStyle = `\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 100;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow: hidden;\r\n\tbackground: rgba(204, 204, 204, 0.8);\r\n\tfont-family: Arial;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/wrapper.js?");

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