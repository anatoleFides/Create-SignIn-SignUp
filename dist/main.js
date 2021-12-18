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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultAvatar\": () => (/* binding */ defaultAvatar)\n/* harmony export */ });\nconst defaultAvatar = 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/default-avatar.js?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* reexport safe */ _logo_img__WEBPACK_IMPORTED_MODULE_0__.logoImg),\n/* harmony export */   \"defaultAvatar\": () => (/* reexport safe */ _default_avatar__WEBPACK_IMPORTED_MODULE_1__.defaultAvatar)\n/* harmony export */ });\n/* harmony import */ var _logo_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-img */ \"./src/assets/logo-img.js\");\n/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-avatar */ \"./src/assets/default-avatar.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: closeSignUp\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign in to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst [login, password] = [\r\n\t\t\t['text', 'Login'],\r\n\t\t\t['password', 'Password']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem = Object.assign(this.createElem(forms__body, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tconst button = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tinnerText: 'submit',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle\r\n\t\t\t// onclick: async function (event) {\r\n\t\t\t// \tawait getUser ({\r\n\t\t\t// \t\tlogin: login.value,\r\n\t\t\t// \t\ttelephone: telephone.value,\r\n\t\t\t// \t\temail: email.value,\r\n\t\t\t// \t\tpassword: password.value,\r\n\t\t\t// \t\tavatat: avatar__photo.src\r\n\t\t\t// \t})\r\n\t\t\t// }\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignIn.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\nconst elemSignIn = document.createElement('sign-in')\r\nelemSignIn.id = 'sign-in'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignIn);\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\t\t\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\tconst close = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tinnerText: 'x',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonCloseStyle,\r\n\t\t\tonclick: _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignUp\r\n\t\t})\r\n\r\n\t\tconst logo = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(this.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(this.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tconst title = Object.assign(this.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign up to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.titleStyle\r\n\t\t})\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\tconst [login, telephone, email, password] = [\r\n\t\t\t['text', 'Login'],\r\n\t\t\t['tel', '+38(___)___-__-__'],\r\n\t\t\t['email', 'e-mail'],\r\n\t\t\t['password', 'Password']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem = Object.assign(this.createElem(forms__body, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tconst avatar__container = Object.assign(this.createElem(forms__body, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarContainerStyle\r\n\t\t})\r\n\t\tconst avatar = Object.assign(this.createElem(avatar__container, 'input'), {\r\n\t\t\ttype: 'file',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarStyle\r\n\t\t})\r\n\t\t\t\r\n\t\tconst avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.avatarBodyStyle\r\n\t\t})\r\n\t\tconst avatar__photo = Object.assign(this.createElem(avatar__body, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.defaultAvatar,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.imageStyle\r\n\t\t})\r\n\r\n\t\tavatar.onchange = _helpers__WEBPACK_IMPORTED_MODULE_2__.readFile\r\n\r\n\t\tconst button = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tinnerText: 'submit',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle,\r\n\t\t\tonclick: async function (event) {\r\n\t\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUser) ({\r\n\t\t\t\t\tlogin: login.value,\r\n\t\t\t\t\ttelephone: telephone.value,\r\n\t\t\t\t\temail: email.value,\r\n\t\t\t\t\tpassword: password.value,\r\n\t\t\t\t\tavatat: avatar__photo.src\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignUp.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/helpers/closeSignIn.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* binding */ closeSignIn)\n/* harmony export */ });\nconst closeSignIn = function (event) {\r\n\tdocument.getElementById(\"sign-in\")\r\n\t\t.classList.remove(\"open-sign_in\")\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignIn.js?");

/***/ }),

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

/***/ "./src/helpers/getClickSignIn.js":
/*!***************************************!*\
  !*** ./src/helpers/getClickSignIn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClickSignIn\": () => (/* binding */ getClickSignIn)\n/* harmony export */ });\nconst getClickSignIn = document.getElementById(\"singup-btn\").onclick = function (event) {\r\n\tevent.preventDefault()\r\n\tconst customElemSignUp = document.getElementById(\"sign-in\")\r\n\tconsole.log(customElemSignUp)\r\n\tcustomElemSignUp.classList.add(\"open-sign_in\")\r\n\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getClickSignIn.js?");

/***/ }),

/***/ "./src/helpers/getClickSignUp.js":
/*!***************************************!*\
  !*** ./src/helpers/getClickSignUp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClickSignUp\": () => (/* binding */ getClickSignUp)\n/* harmony export */ });\nconst getClickSignUp = document.getElementById(\"singup-btn\").onclick = function (event) {\r\n\tevent.preventDefault()\r\n\tconst customElemSignUp = document.getElementById(\"sign-up\")\r\n\tconsole.log(customElemSignUp)\r\n\tcustomElemSignUp.classList.add(\"open-sign_up\")\r\n\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getClickSignUp.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClickSignIn\": () => (/* reexport safe */ _getClickSignIn__WEBPACK_IMPORTED_MODULE_0__.getClickSignIn),\n/* harmony export */   \"getClickSignUp\": () => (/* reexport safe */ _getClickSignUp__WEBPACK_IMPORTED_MODULE_1__.getClickSignUp),\n/* harmony export */   \"closeSignIn\": () => (/* reexport safe */ _closeSignIn__WEBPACK_IMPORTED_MODULE_2__.closeSignIn),\n/* harmony export */   \"closeSignUp\": () => (/* reexport safe */ _closeSignUp__WEBPACK_IMPORTED_MODULE_3__.closeSignUp),\n/* harmony export */   \"readFile\": () => (/* reexport safe */ _readFile__WEBPACK_IMPORTED_MODULE_4__.readFile),\n/* harmony export */   \"getUser\": () => (/* reexport safe */ _getUser__WEBPACK_IMPORTED_MODULE_5__.getUser),\n/* harmony export */   \"createElem\": () => (/* reexport safe */ _createElem__WEBPACK_IMPORTED_MODULE_6__.createElem)\n/* harmony export */ });\n/* harmony import */ var _getClickSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClickSignIn */ \"./src/helpers/getClickSignIn.js\");\n/* harmony import */ var _getClickSignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getClickSignUp */ \"./src/helpers/getClickSignUp.js\");\n/* harmony import */ var _closeSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeSignIn */ \"./src/helpers/closeSignIn.js\");\n/* harmony import */ var _closeSignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closeSignUp */ \"./src/helpers/closeSignUp.js\");\n/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readFile */ \"./src/helpers/readFile.js\");\n/* harmony import */ var _getUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getUser */ \"./src/helpers/getUser.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createElem */ \"./src/helpers/createElem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\nconst readFile = function (event) {\r\n\tconst reader = new FileReader\r\n\treader.onload = function (ev) {\r\n\t\tavatar__photo.src = ev.target.result\r\n\t}\r\n\treader.readAsDataURL(event.target.files[0])\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\ndocument.body.appendChild(_components_sign_up__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarContainerStyle\": () => (/* binding */ avatarContainerStyle)\n/* harmony export */ });\nconst avatarContainerStyle = `\r\n\tposition: relative;\r\n\tmargin: 8px auto;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #FF8C00;\r\n\toverflow: hidden;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-container.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonSubmitStyle\": () => (/* binding */ buttonSubmitStyle)\n/* harmony export */ });\nconst buttonSubmitStyle = `\r\n\tpadding: 8px; \r\n\tmargin: 0 auto; \r\n\tbackground: #9ACD32; \r\n\tcolor: #fff; \r\n\tborder: none; \r\n\tborder-radius: 4px; \r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-submit.js?");

/***/ }),

/***/ "./src/styles/container.js":
/*!*********************************!*\
  !*** ./src/styles/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containerStyle\": () => (/* binding */ containerStyle)\n/* harmony export */ });\nconst containerStyle = `\r\n\tmax-width: 320px;\r\n\tbox-shadow: 2px 2px 8px #000;\r\n\tbackground: rgba(240, 255, 255, 0.8);\r\n\tborder-radius: 8px;\r\n\tpadding: 12px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/container.js?");

/***/ }),

/***/ "./src/styles/forms-body.js":
/*!**********************************!*\
  !*** ./src/styles/forms-body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formsBodyStyle\": () => (/* binding */ formsBodyStyle)\n/* harmony export */ });\nconst formsBodyStyle = `\r\n\twidth: 100%;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forms-body.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle),\n/* harmony export */   \"containerStyle\": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.containerStyle),\n/* harmony export */   \"buttonCloseStyle\": () => (/* reexport safe */ _button_close__WEBPACK_IMPORTED_MODULE_2__.buttonCloseStyle),\n/* harmony export */   \"logoStyle\": () => (/* reexport safe */ _logo_js__WEBPACK_IMPORTED_MODULE_3__.logoStyle),\n/* harmony export */   \"logoLinkStyle\": () => (/* reexport safe */ _logo_link_js__WEBPACK_IMPORTED_MODULE_4__.logoLinkStyle),\n/* harmony export */   \"imageStyle\": () => (/* reexport safe */ _image_js__WEBPACK_IMPORTED_MODULE_5__.imageStyle),\n/* harmony export */   \"titleStyle\": () => (/* reexport safe */ _title_js__WEBPACK_IMPORTED_MODULE_6__.titleStyle),\n/* harmony export */   \"formsBodyStyle\": () => (/* reexport safe */ _forms_body__WEBPACK_IMPORTED_MODULE_7__.formsBodyStyle),\n/* harmony export */   \"inputStyle\": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_8__.inputStyle),\n/* harmony export */   \"avatarContainerStyle\": () => (/* reexport safe */ _avatar_container__WEBPACK_IMPORTED_MODULE_9__.avatarContainerStyle),\n/* harmony export */   \"avatarStyle\": () => (/* reexport safe */ _avatar__WEBPACK_IMPORTED_MODULE_10__.avatarStyle),\n/* harmony export */   \"avatarBodyStyle\": () => (/* reexport safe */ _avatar_body__WEBPACK_IMPORTED_MODULE_11__.avatarBodyStyle),\n/* harmony export */   \"buttonSubmitStyle\": () => (/* reexport safe */ _button_submit__WEBPACK_IMPORTED_MODULE_12__.buttonSubmitStyle)\n/* harmony export */ });\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ \"./src/styles/wrapper.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./src/styles/container.js\");\n/* harmony import */ var _button_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-close */ \"./src/styles/button-close.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ \"./src/styles/logo.js\");\n/* harmony import */ var _logo_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo-link.js */ \"./src/styles/logo-link.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.js */ \"./src/styles/image.js\");\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title.js */ \"./src/styles/title.js\");\n/* harmony import */ var _forms_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-body */ \"./src/styles/forms-body.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input */ \"./src/styles/input.js\");\n/* harmony import */ var _avatar_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./avatar-container */ \"./src/styles/avatar-container.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./avatar */ \"./src/styles/avatar.js\");\n/* harmony import */ var _avatar_body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./avatar-body */ \"./src/styles/avatar-body.js\");\n/* harmony import */ var _button_submit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button-submit */ \"./src/styles/button-submit.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/index.js?");

/***/ }),

/***/ "./src/styles/input.js":
/*!*****************************!*\
  !*** ./src/styles/input.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputStyle\": () => (/* binding */ inputStyle)\n/* harmony export */ });\nconst inputStyle = `\r\n\twidth: 90%;\r\n\tdisplay: block;\r\n\tmargin: 12px auto;\r\n\tpadding: 4px 0 4px 8px;\r\n\tborder-radius: 4px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid #FF8C00;\r\n\ttransition: all .5s ease;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/input.js?");

/***/ }),

/***/ "./src/styles/logo-link.js":
/*!*********************************!*\
  !*** ./src/styles/logo-link.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoLinkStyle\": () => (/* binding */ logoLinkStyle)\n/* harmony export */ });\nconst logoLinkStyle = `\r\n\tflex: 0 0 100px;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/logo-link.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleStyle\": () => (/* binding */ titleStyle)\n/* harmony export */ });\nconst titleStyle = `\r\n\tfont-size: 24px;\r\n\tfont-weight: 700;\r\n\tcolor: #9ACD32;\r\n\tmargin: 16px auto\r\n`\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/title.js?");

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