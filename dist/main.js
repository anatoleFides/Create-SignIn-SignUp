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

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* reexport safe */ _logo_img__WEBPACK_IMPORTED_MODULE_0__.logoImg),\n/* harmony export */   \"getDefaultAvatar\": () => (/* reexport safe */ _default_avatar__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)\n/* harmony export */ });\n/* harmony import */ var _logo_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-img */ \"./src/assets/logo-img.js\");\n/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-avatar */ \"./src/assets/default-avatar.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\t\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: _helpers__WEBPACK_IMPORTED_MODULE_3__.closeSignIn\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign in to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst [login, password] = [\r\n\t\t\t['text', 'Login', 'Login not found'],\r\n\t\t\t['password', 'Password', 'Invalid passvord']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem__container = this.createElem(forms__body, 'div')\r\n\r\n\t\t\tconst elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n\t\t\t})\r\n\r\n\t\t\tconst error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n\t\t\t\ttextContent: item[2],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tlogin.onchange = function (event) {\r\n\t\t\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_2__.loginHandler)(event.target.value)\r\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testLoginSignIn)(password, (0,_data_handlers__WEBPACK_IMPORTED_MODULE_2__.loginHandler)())\r\n\t\t}\r\n\r\n\t\tpassword.oninput = function (event) {\r\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testPassordSignIn)(event.target, event.target.value)\r\n\t\t}\r\n\r\n\t\tconst forgot__password = Object.assign(this.createElem(container, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.forgotPasswordStyle,\r\n\t\t\tinnerText: 'Forgot password?',\r\n\t\t})\r\n\r\n\t\twindow[Symbol.for('listInputSignIn')] = [login, password]\r\n\r\n\t\twindow[Symbol.for('buttonSignIn')] = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tinnerText: 'Sign In',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle,\r\n\t\t\tdisabled: true,\r\n\t\t\tonclick: async function (event) {\r\n\t\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.authorizeUser)({\r\n\t\t\t\t\tlogin: login.value,\r\n\t\t\t\t\tpassword: password.value\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignIn.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_3__.createElem\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\nconst elemSignIn = document.createElement('sign-in')\r\nelemSignIn.id = 'sign-in'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignIn);\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignUp\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign up to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst elems__body = Object.assign(this.createElem(forms__body, 'div'), {\r\n\t\t})\r\n\r\n\t\tconst [login, name, telephone, email, password] = [\r\n\t\t\t['text', 'Login', 'Invalid login format'],\r\n\t\t\t['text', 'User name', 'Invalid name format'],\r\n\t\t\t['tel', '(___)___-__-__', 'Invalid telephone format'],\r\n\t\t\t['email', 'e-mail', 'Invalid e-mail format'],\r\n\t\t\t['password', 'Password', 'Invalid password format']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem__container = this.createElem(elems__body, 'div')\r\n\r\n\t\t\tconst elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputValidationStyle\r\n\t\t\t})\r\n\r\n\t\t\tconst error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n\t\t\t\ttextContent: item[2],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tconst avatar__container = Object.assign(this.createElem(forms__body, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarContainerStyle\r\n\t\t})\r\n\t\tconst avatar = Object.assign(this.createElem(avatar__container, 'input'), {\r\n\t\t\ttype: 'file',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarStyle\r\n\t\t})\r\n\t\t\t\r\n\t\tconst avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarBodyStyle\r\n\t\t})\r\n\r\n\t\twindow[Symbol.for('photo')] = Object.assign(this.createElem(avatar__body, 'img'), {\r\n\t\t\tsrc: (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)(),\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\twindow[Symbol.for('error__message-avatar')] = Object.assign(this.createElem(forms__body, 'p'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle,\r\n\t\t\tinnerText: 'Invalid file type'\r\n\t\t})\r\n\r\n\t\tlogin.onchange = (event) => {\r\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateLogin)(event.target, event.target.value) === true \r\n\t\t\t? name.oninput = (event) => {\r\n\t\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateName)(event.target, event.target.value) === true\r\n\t\t\t\t\t? telephone.oninput = (event) => {\r\n\t\t\t\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePhone)(event.target, event.target.value) === true\r\n\t\t\t\t\t\t\t? email.oninput = (event) => {\r\n\t\t\t\t\t\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(event.target, event.target.value) === true\r\n\t\t\t\t\t\t\t\t\t? password.oninput = (event) => {\r\n\t\t\t\t\t\t\t\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePassword)(event.target, event.target.value) === true\r\n\t\t\t\t\t\t\t\t\t\t\t? avatar.onchange = (event) => {\r\n\t\t\t\t\t\t\t\t\t\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.readFile)(event.target) === true \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t? Object.assign(button, {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled: false,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}) : Object.assign(button, {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled: true,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t\t\t\t\t\t} : null\r\n\t\t\t\t\t\t\t\t\t} : null\r\n\t\t\t\t\t\t\t} : null\r\n\t\t\t\t\t} : null\r\n\t\t\t} : null\r\n\t\t}\r\n\r\n\t\twindow[Symbol.for('listInputSignUp')] = [login, name, telephone, email, password]\r\n\r\n\t\tconst button = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tdisabled: true,\r\n\t\t\tinnerText: 'Sign Up',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle,\r\n\t\t\tonclick: async function (event) {\r\n\t\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createUser) (login.value, {\r\n\t\t\t\t\tname: name.value,\r\n\t\t\t\t\ttelephone: telephone.value,\r\n\t\t\t\t\temail: email.value,\r\n\t\t\t\t\tpassword: password.value,\r\n\t\t\t\t\tavatar: window[Symbol.for('photo')].src\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignUp.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/configs/api-host.js":
/*!*********************************!*\
  !*** ./src/configs/api-host.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHost\": () => (/* binding */ apiHost)\n/* harmony export */ });\nconst apiHost = 'https://garevna-rest-api.glitch.me'\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/api-host.js?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHost\": () => (/* reexport safe */ _api_host__WEBPACK_IMPORTED_MODULE_0__.apiHost)\n/* harmony export */ });\n/* harmony import */ var _api_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-host */ \"./src/configs/api-host.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/index.js?");

/***/ }),

/***/ "./src/data-handlers/avatar-handler.js":
/*!*********************************************!*\
  !*** ./src/data-handlers/avatar-handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarHandler\": () => (/* binding */ avatarHandler)\n/* harmony export */ });\nconst avatarHandler = (function () {\r\n\tlet avatar = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return avatar\r\n\t\tavatar = property\r\n\t}\r\n})()\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/avatar-handler.js?");

/***/ }),

/***/ "./src/data-handlers/index.js":
/*!************************************!*\
  !*** ./src/data-handlers/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandler\": () => (/* reexport safe */ _login_handler__WEBPACK_IMPORTED_MODULE_0__.loginHandler),\n/* harmony export */   \"passwordHandler\": () => (/* reexport safe */ _password_handler__WEBPACK_IMPORTED_MODULE_1__.passwordHandler),\n/* harmony export */   \"avatarHandler\": () => (/* reexport safe */ _avatar_handler__WEBPACK_IMPORTED_MODULE_2__.avatarHandler)\n/* harmony export */ });\n/* harmony import */ var _login_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-handler */ \"./src/data-handlers/login-handler.js\");\n/* harmony import */ var _password_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-handler */ \"./src/data-handlers/password-handler.js\");\n/* harmony import */ var _avatar_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-handler */ \"./src/data-handlers/avatar-handler.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/index.js?");

/***/ }),

/***/ "./src/data-handlers/login-handler.js":
/*!********************************************!*\
  !*** ./src/data-handlers/login-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandler\": () => (/* binding */ loginHandler)\n/* harmony export */ });\nconst loginHandler = (function () {\r\n\tlet login = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return login\r\n\t\tlogin = property\r\n\t}\r\n})()\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/login-handler.js?");

/***/ }),

/***/ "./src/data-handlers/password-handler.js":
/*!***********************************************!*\
  !*** ./src/data-handlers/password-handler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordHandler\": () => (/* binding */ passwordHandler)\n/* harmony export */ });\nconst passwordHandler = (function () {\r\n\tlet password = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return password\r\n\t\tpassword = property\r\n\t}\r\n})()\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/password-handler.js?");

/***/ }),

/***/ "./src/helpers/authorizeUser.js":
/*!**************************************!*\
  !*** ./src/helpers/authorizeUser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorizeUser\": () => (/* binding */ authorizeUser)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n\r\n\r\nconst authorizeUser = async objectAutorize => {\r\n\tdocument.getElementById(\"not_authorize\").classList.remove('uzer-not_active')\r\n\tdocument.getElementById(\"authorize\").classList.add('user-active')\r\n\tdocument.getElementById(\"user-name\").textContent = objectAutorize.login\r\n\tdocument.getElementById(\"user-avatar\").src = (0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.avatarHandler)()\r\n\r\n\tdocument.getElementsByTagName('sign-in')[0].remove()\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/authorizeUser.js?");

/***/ }),

/***/ "./src/helpers/closeSignIn.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* binding */ closeSignIn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignIn = (event) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignIn)()\r\n\tdocument.getElementById(\"sign-in\").remove()\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignIn.js?");

/***/ }),

/***/ "./src/helpers/closeSignUp.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignUp\": () => (/* binding */ closeSignUp)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignUp = (event) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignUp)()\r\n\tdocument.getElementById(\"sign-up\").remove()\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignUp.js?");

/***/ }),

/***/ "./src/helpers/createElem.js":
/*!***********************************!*\
  !*** ./src/helpers/createElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nconst createElem = (сontainerName, tagName) => { \r\n\treturn сontainerName.appendChild(document.createElement(tagName)) \r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createElem.js?");

/***/ }),

/***/ "./src/helpers/createUser.js":
/*!***********************************!*\
  !*** ./src/helpers/createUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nconst createUser = async (login, user) => {\r\n\tconst response = await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`, {\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json'\r\n\t\t},\r\n\t\tbody: JSON.stringify(user)\r\n\t})\r\n\r\n\tconsole.log(response.status)\r\n\r\n\tif (response.status === 200) {\r\n\t\t(0,___WEBPACK_IMPORTED_MODULE_1__.resetInputSignUp)()\r\n\r\n\t\tdocument.getElementsByTagName('sign-up')[0].remove()\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createUser.js?");

/***/ }),

/***/ "./src/helpers/fillFormStyle.js":
/*!**************************************!*\
  !*** ./src/helpers/fillFormStyle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillFormStyle\": () => (/* binding */ fillFormStyle)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst fillFormStyle = (inputElem, property) => {\r\n\t\tproperty.length !== 0\r\n\t\t\t? inputElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle : inputElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.inputValidationStyle\r\n\t}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/fillFormStyle.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCloseBurgerMenu\": () => (/* reexport safe */ _openCloseBurgerMenu__WEBPACK_IMPORTED_MODULE_0__.openCloseBurgerMenu),\n/* harmony export */   \"closeSignIn\": () => (/* reexport safe */ _closeSignIn__WEBPACK_IMPORTED_MODULE_1__.closeSignIn),\n/* harmony export */   \"closeSignUp\": () => (/* reexport safe */ _closeSignUp__WEBPACK_IMPORTED_MODULE_2__.closeSignUp),\n/* harmony export */   \"resetInputSignIn\": () => (/* reexport safe */ _resetInputSignIn__WEBPACK_IMPORTED_MODULE_3__.resetInputSignIn),\n/* harmony export */   \"resetInputSignUp\": () => (/* reexport safe */ _resetInputSignUp__WEBPACK_IMPORTED_MODULE_4__.resetInputSignUp),\n/* harmony export */   \"fillFormStyle\": () => (/* reexport safe */ _fillFormStyle__WEBPACK_IMPORTED_MODULE_5__.fillFormStyle),\n/* harmony export */   \"validateEmptyString\": () => (/* reexport safe */ _validateEmptyString__WEBPACK_IMPORTED_MODULE_6__.validateEmptyString),\n/* harmony export */   \"validateLogin\": () => (/* reexport safe */ _validateLogin__WEBPACK_IMPORTED_MODULE_7__.validateLogin),\n/* harmony export */   \"validateName\": () => (/* reexport safe */ _validateName__WEBPACK_IMPORTED_MODULE_8__.validateName),\n/* harmony export */   \"validatePhone\": () => (/* reexport safe */ _validatePhone__WEBPACK_IMPORTED_MODULE_9__.validatePhone),\n/* harmony export */   \"validateEmail\": () => (/* reexport safe */ _validateEmail__WEBPACK_IMPORTED_MODULE_10__.validateEmail),\n/* harmony export */   \"validatePassword\": () => (/* reexport safe */ _validatePassword__WEBPACK_IMPORTED_MODULE_11__.validatePassword),\n/* harmony export */   \"readFile\": () => (/* reexport safe */ _readFile__WEBPACK_IMPORTED_MODULE_12__.readFile),\n/* harmony export */   \"createUser\": () => (/* reexport safe */ _createUser__WEBPACK_IMPORTED_MODULE_13__.createUser),\n/* harmony export */   \"testLoginSignIn\": () => (/* reexport safe */ _testLoginSignIn__WEBPACK_IMPORTED_MODULE_14__.testLoginSignIn),\n/* harmony export */   \"testLoginSignUp\": () => (/* reexport safe */ _testLoginSignUp__WEBPACK_IMPORTED_MODULE_15__.testLoginSignUp),\n/* harmony export */   \"testPassordSignIn\": () => (/* reexport safe */ _testPassordSignIn__WEBPACK_IMPORTED_MODULE_16__.testPassordSignIn),\n/* harmony export */   \"authorizeUser\": () => (/* reexport safe */ _authorizeUser__WEBPACK_IMPORTED_MODULE_17__.authorizeUser),\n/* harmony export */   \"createElem\": () => (/* reexport safe */ _createElem__WEBPACK_IMPORTED_MODULE_18__.createElem)\n/* harmony export */ });\n/* harmony import */ var _openCloseBurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openCloseBurgerMenu */ \"./src/helpers/openCloseBurgerMenu.js\");\n/* harmony import */ var _closeSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeSignIn */ \"./src/helpers/closeSignIn.js\");\n/* harmony import */ var _closeSignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeSignUp */ \"./src/helpers/closeSignUp.js\");\n/* harmony import */ var _resetInputSignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInputSignIn */ \"./src/helpers/resetInputSignIn.js\");\n/* harmony import */ var _resetInputSignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resetInputSignUp */ \"./src/helpers/resetInputSignUp.js\");\n/* harmony import */ var _fillFormStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fillFormStyle */ \"./src/helpers/fillFormStyle.js\");\n/* harmony import */ var _validateEmptyString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateEmptyString */ \"./src/helpers/validateEmptyString.js\");\n/* harmony import */ var _validateLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validateLogin */ \"./src/helpers/validateLogin.js\");\n/* harmony import */ var _validateName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validateName */ \"./src/helpers/validateName.js\");\n/* harmony import */ var _validatePhone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validatePhone */ \"./src/helpers/validatePhone.js\");\n/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validateEmail */ \"./src/helpers/validateEmail.js\");\n/* harmony import */ var _validatePassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validatePassword */ \"./src/helpers/validatePassword.js\");\n/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./readFile */ \"./src/helpers/readFile.js\");\n/* harmony import */ var _createUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./createUser */ \"./src/helpers/createUser.js\");\n/* harmony import */ var _testLoginSignIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testLoginSignIn */ \"./src/helpers/testLoginSignIn.js\");\n/* harmony import */ var _testLoginSignUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testLoginSignUp */ \"./src/helpers/testLoginSignUp.js\");\n/* harmony import */ var _testPassordSignIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testPassordSignIn */ \"./src/helpers/testPassordSignIn.js\");\n/* harmony import */ var _authorizeUser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authorizeUser */ \"./src/helpers/authorizeUser.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./createElem */ \"./src/helpers/createElem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/openCloseBurgerMenu.js":
/*!********************************************!*\
  !*** ./src/helpers/openCloseBurgerMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCloseBurgerMenu\": () => (/* binding */ openCloseBurgerMenu)\n/* harmony export */ });\nconst openCloseBurgerMenu = () => {\r\n\tconst buttonBurger = document.getElementById(\"burger-menu\")\r\n\tObject.assign(buttonBurger, {\r\n\t\tonclick: function (event) {\r\n\t\t\tbuttonBurger.classList.toggle('open')\r\n\t\t\tdocument.getElementById(\"header-menu\").classList.toggle('active')\r\n\t\t\tdocument.getElementsByTagName('body')[0].classList.toggle('hidden')\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/openCloseBurgerMenu.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst readFile = (value) => {\r\n\tif (value.files[0].type.indexOf('image')) {\r\n\t\twindow[Symbol.for('error__message-avatar')].style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\r\n\t\treturn false\r\n\t} else {\r\n\t\twindow[Symbol.for('error__message-avatar')].style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\tconst reader = new FileReader\r\n\t\treader.onload = function (ev) {\r\n\t\t\twindow[Symbol.for('photo')].src = ev.target.result\r\n\t\t}\r\n\t\treader.readAsDataURL(value.files[0])\r\n\r\n\t\treturn true\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

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

/***/ "./src/helpers/testLoginSignIn.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignIn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignIn\": () => (/* binding */ testLoginSignIn)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n\r\n\r\n\r\n\r\nconst testLoginSignIn = async (inputElem, login) => {\r\n\tconst response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\tconsole.log(response)\r\n\tconsole.log(response.password)\r\n\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.passwordHandler)(response.password)\r\n\r\n\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.avatarHandler)(response.avatar)\r\n\r\n\treturn response.error ? null : response\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignIn.js?");

/***/ }),

/***/ "./src/helpers/testLoginSignUp.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignUp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignUp\": () => (/* binding */ testLoginSignUp)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\nconst testLoginSignUp = async (inputElem, login) => {\r\n\t\tconst response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\r\n\treturn response.error \r\n\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\ttextContent: 'Invalid login format'\r\n\t\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\ttextContent: 'login exists',\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t\t\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignUp.js?");

/***/ }),

/***/ "./src/helpers/testPassordSignIn.js":
/*!******************************************!*\
  !*** ./src/helpers/testPassordSignIn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testPassordSignIn\": () => (/* binding */ testPassordSignIn)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst testPassordSignIn = async (inputElem, property) => {\r\n\tif ((0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.passwordHandler)() === property) {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t})\r\n\t\tObject.assign(window[Symbol.for('buttonSignIn')], {\r\n\t\t\tdisabled: false,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonSubmitStyle\r\n\t\t})\r\n\t} else {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t})\r\n\t\tObject.assign(window[Symbol.for('buttonSignIn')], {\r\n\t\t\tdisabled: true,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonDisabledStyle\r\n\t\t})\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testPassordSignIn.js?");

/***/ }),

/***/ "./src/helpers/validateEmail.js":
/*!**************************************!*\
  !*** ./src/helpers/validateEmail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst validateEmail = (inputElem, value) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.fillFormStyle)(inputElem, value)\r\n\r\n\tlet emailformat = /^(([^<>()[\\].,;:\\s@\"]+(\\.[^<>()[\\].,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\].,;:\\s@\"]+\\.)+[^<>()[\\].,;:\\s@\"]{2,})$/iu\r\n\r\n\t\tif (value.match(emailformat)) {\r\n\t\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn true\r\n\t\t} else {\r\n\t\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn false\r\n\t\t}\r\n\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(inputElem, value)\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmail.js?");

/***/ }),

/***/ "./src/helpers/validateEmptyString.js":
/*!********************************************!*\
  !*** ./src/helpers/validateEmptyString.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmptyString\": () => (/* binding */ validateEmptyString)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst validateEmptyString = (inputElem, property) => {\r\n\tif (property === '') {\r\n\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t}\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmptyString.js?");

/***/ }),

/***/ "./src/helpers/validateLogin.js":
/*!**************************************!*\
  !*** ./src/helpers/validateLogin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateLogin\": () => (/* binding */ validateLogin)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst validateLogin = (inputElem, value) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.fillFormStyle)(inputElem, value)\r\n\r\n\tlet letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,12}$/\r\n\r\n\tif (value.match(letters)) {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t})\r\n\r\n\t\t;(0,___WEBPACK_IMPORTED_MODULE_0__.testLoginSignUp)(inputElem, value)\r\n\t\t\r\n\t\treturn true\r\n\t} else {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t})\r\n\t}\r\n\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(inputElem, value)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateLogin.js?");

/***/ }),

/***/ "./src/helpers/validateName.js":
/*!*************************************!*\
  !*** ./src/helpers/validateName.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateName\": () => (/* binding */ validateName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst validateName = (inputElem, value) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.fillFormStyle)(inputElem, value)\r\n\r\n\tlet letters = /^[A-Za-z]{2,10}$/\r\n\r\n\tif (value.match(letters)) {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t})\r\n\r\n\t\treturn true\r\n\t} else {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t})\r\n\r\n\t\treturn false\r\n\t}\r\n\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(inputElem, value)\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateName.js?");

/***/ }),

/***/ "./src/helpers/validatePassword.js":
/*!*****************************************!*\
  !*** ./src/helpers/validatePassword.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst validatePassword = (inputElem, value) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.fillFormStyle)(inputElem, value)\r\n\r\n\tif (value.length < 8) {\r\n\t\tinputElem.style.color = '#f00'\r\n\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\r\n\t\treturn false\r\n\t} else { \r\n\t\tinputElem.style.color = '#090'\r\n\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\r\n\t\treturn true\r\n\t}\r\n\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(inputElem, value)\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePassword.js?");

/***/ }),

/***/ "./src/helpers/validatePhone.js":
/*!**************************************!*\
  !*** ./src/helpers/validatePhone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePhone\": () => (/* binding */ validatePhone)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst validatePhone = (inputElem, value) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.fillFormStyle)(inputElem, value)\r\n\r\n\tlet phoneformat = /^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/\r\n\r\n\tif (value.match(phoneformat)) {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t})\r\n\r\n\treturn true\r\n\t} else {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t})\r\n\r\n\t\treturn false\r\n\t}\r\n\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(inputElem, value)\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePhone.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './assers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.openCloseBurgerMenu)()\r\n\r\nconst forms = [_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_sign_up__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\r\n\r\nconst [sinInButton, sinUpButton] = [\"sing-in__btn\", \"sing-up__btn\"]\r\n\t.map((id, index) => Object.assign(document.getElementById(id), {\r\n\t\tonclick: function (event) {\r\n\t\t\tevent.preventDefault()\r\n\t\t\tdocument.body.appendChild(forms[index])\r\n\t\t}\r\n}))\r\n\r\n// document.getElementById(\"exit\").onclick = (event) => {\r\n// \tdocument.getElementById(\"authorize\").classList.remove('user-active')\r\n// \tdocument.getElementById(\"not_authorize\").classList.add('uzer-not_active')\r\n// \tdocument.getElementById(\"user-name\").textContent = 'User name'\r\n// \tdocument.getElementById(\"user-avatar\").src = getDefaultAvatar()\r\n\r\n\r\n// }\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

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

/***/ "./src/styles/button-disabled.js":
/*!***************************************!*\
  !*** ./src/styles/button-disabled.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonDisabledStyle\": () => (/* binding */ buttonDisabledStyle)\n/* harmony export */ });\nconst buttonDisabledStyle = `\r\n\tpadding: 8px; \r\n\tmargin: 4px 0 0 0;\r\n\tmargin: 0 auto; \r\n\tbackground: rgba(154, 204, 0.3); \r\n\tcolor: #fff; \r\n\tborder: none; \r\n\tborder-radius: 4px; \r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\twidth: 50%;\r\n\topacity: 0.4;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-disabled.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle),\n/* harmony export */   \"containerStyle\": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.containerStyle),\n/* harmony export */   \"buttonCloseStyle\": () => (/* reexport safe */ _button_close__WEBPACK_IMPORTED_MODULE_2__.buttonCloseStyle),\n/* harmony export */   \"logoStyle\": () => (/* reexport safe */ _logo_js__WEBPACK_IMPORTED_MODULE_3__.logoStyle),\n/* harmony export */   \"logoLinkStyle\": () => (/* reexport safe */ _logo_link_js__WEBPACK_IMPORTED_MODULE_4__.logoLinkStyle),\n/* harmony export */   \"imageStyle\": () => (/* reexport safe */ _image_js__WEBPACK_IMPORTED_MODULE_5__.imageStyle),\n/* harmony export */   \"titleStyle\": () => (/* reexport safe */ _title_js__WEBPACK_IMPORTED_MODULE_6__.titleStyle),\n/* harmony export */   \"formsBodyStyle\": () => (/* reexport safe */ _forms_body__WEBPACK_IMPORTED_MODULE_7__.formsBodyStyle),\n/* harmony export */   \"inputStyle\": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_8__.inputStyle),\n/* harmony export */   \"inputValidationStyle\": () => (/* reexport safe */ _input_validation__WEBPACK_IMPORTED_MODULE_9__.inputValidationStyle),\n/* harmony export */   \"errorMessageStyle\": () => (/* reexport safe */ _error_message__WEBPACK_IMPORTED_MODULE_10__.errorMessageStyle),\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* reexport safe */ _error_message_active__WEBPACK_IMPORTED_MODULE_11__.errorMessageActiveStyle),\n/* harmony export */   \"avatarContainerStyle\": () => (/* reexport safe */ _avatar_container__WEBPACK_IMPORTED_MODULE_12__.avatarContainerStyle),\n/* harmony export */   \"avatarStyle\": () => (/* reexport safe */ _avatar__WEBPACK_IMPORTED_MODULE_13__.avatarStyle),\n/* harmony export */   \"avatarBodyStyle\": () => (/* reexport safe */ _avatar_body__WEBPACK_IMPORTED_MODULE_14__.avatarBodyStyle),\n/* harmony export */   \"forgotPasswordStyle\": () => (/* reexport safe */ _forgot_password__WEBPACK_IMPORTED_MODULE_15__.forgotPasswordStyle),\n/* harmony export */   \"buttonSubmitStyle\": () => (/* reexport safe */ _button_submit__WEBPACK_IMPORTED_MODULE_16__.buttonSubmitStyle),\n/* harmony export */   \"buttonDisabledStyle\": () => (/* reexport safe */ _button_disabled__WEBPACK_IMPORTED_MODULE_17__.buttonDisabledStyle)\n/* harmony export */ });\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ \"./src/styles/wrapper.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./src/styles/container.js\");\n/* harmony import */ var _button_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-close */ \"./src/styles/button-close.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ \"./src/styles/logo.js\");\n/* harmony import */ var _logo_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo-link.js */ \"./src/styles/logo-link.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.js */ \"./src/styles/image.js\");\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title.js */ \"./src/styles/title.js\");\n/* harmony import */ var _forms_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-body */ \"./src/styles/forms-body.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input */ \"./src/styles/input.js\");\n/* harmony import */ var _input_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-validation */ \"./src/styles/input-validation.js\");\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-message */ \"./src/styles/error-message.js\");\n/* harmony import */ var _error_message_active__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-message-active */ \"./src/styles/error-message-active.js\");\n/* harmony import */ var _avatar_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./avatar-container */ \"./src/styles/avatar-container.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avatar */ \"./src/styles/avatar.js\");\n/* harmony import */ var _avatar_body__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./avatar-body */ \"./src/styles/avatar-body.js\");\n/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password */ \"./src/styles/forgot-password.js\");\n/* harmony import */ var _button_submit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button-submit */ \"./src/styles/button-submit.js\");\n/* harmony import */ var _button_disabled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./button-disabled */ \"./src/styles/button-disabled.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/index.js?");

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