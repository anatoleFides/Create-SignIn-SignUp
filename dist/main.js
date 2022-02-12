/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/fast-sha256/sha256.js":
/*!********************************************!*\
  !*** ./node_modules/fast-sha256/sha256.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {\n    // Hack to make all exports of this module sha256 function object properties.\n    var exports = {};\n    factory(exports);\n    var sha256 = exports[\"default\"];\n    for (var k in exports) {\n        sha256[k] = exports[k];\n    }\n        \n    if ( true && typeof module.exports === 'object') {\n        module.exports = sha256;\n    } else if (true) {\n        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return sha256; }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); \n    } else {}\n})(this, function(exports) {\n\"use strict\";\nexports.__esModule = true;\n// SHA-256 (+ HMAC and PBKDF2) for JavaScript.\n//\n// Written in 2014-2016 by Dmitry Chestnykh.\n// Public domain, no warranty.\n//\n// Functions (accept and return Uint8Arrays):\n//\n//   sha256(message) -> hash\n//   sha256.hmac(key, message) -> mac\n//   sha256.pbkdf2(password, salt, rounds, dkLen) -> dk\n//\n//  Classes:\n//\n//   new sha256.Hash()\n//   new sha256.HMAC(key)\n//\nexports.digestLength = 32;\nexports.blockSize = 64;\n// SHA-256 constants\nvar K = new Uint32Array([\n    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,\n    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,\n    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,\n    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,\n    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,\n    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,\n    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,\n    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,\n    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,\n    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,\n    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,\n    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,\n    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2\n]);\nfunction hashBlocks(w, v, p, pos, len) {\n    var a, b, c, d, e, f, g, h, u, i, j, t1, t2;\n    while (len >= 64) {\n        a = v[0];\n        b = v[1];\n        c = v[2];\n        d = v[3];\n        e = v[4];\n        f = v[5];\n        g = v[6];\n        h = v[7];\n        for (i = 0; i < 16; i++) {\n            j = pos + i * 4;\n            w[i] = (((p[j] & 0xff) << 24) | ((p[j + 1] & 0xff) << 16) |\n                ((p[j + 2] & 0xff) << 8) | (p[j + 3] & 0xff));\n        }\n        for (i = 16; i < 64; i++) {\n            u = w[i - 2];\n            t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);\n            u = w[i - 15];\n            t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);\n            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);\n        }\n        for (i = 0; i < 64; i++) {\n            t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^\n                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +\n                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;\n            t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^\n                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;\n            h = g;\n            g = f;\n            f = e;\n            e = (d + t1) | 0;\n            d = c;\n            c = b;\n            b = a;\n            a = (t1 + t2) | 0;\n        }\n        v[0] += a;\n        v[1] += b;\n        v[2] += c;\n        v[3] += d;\n        v[4] += e;\n        v[5] += f;\n        v[6] += g;\n        v[7] += h;\n        pos += 64;\n        len -= 64;\n    }\n    return pos;\n}\n// Hash implements SHA256 hash algorithm.\nvar Hash = /** @class */ (function () {\n    function Hash() {\n        this.digestLength = exports.digestLength;\n        this.blockSize = exports.blockSize;\n        // Note: Int32Array is used instead of Uint32Array for performance reasons.\n        this.state = new Int32Array(8); // hash state\n        this.temp = new Int32Array(64); // temporary state\n        this.buffer = new Uint8Array(128); // buffer for data to hash\n        this.bufferLength = 0; // number of bytes in buffer\n        this.bytesHashed = 0; // number of total bytes hashed\n        this.finished = false; // indicates whether the hash was finalized\n        this.reset();\n    }\n    // Resets hash state making it possible\n    // to re-use this instance to hash other data.\n    Hash.prototype.reset = function () {\n        this.state[0] = 0x6a09e667;\n        this.state[1] = 0xbb67ae85;\n        this.state[2] = 0x3c6ef372;\n        this.state[3] = 0xa54ff53a;\n        this.state[4] = 0x510e527f;\n        this.state[5] = 0x9b05688c;\n        this.state[6] = 0x1f83d9ab;\n        this.state[7] = 0x5be0cd19;\n        this.bufferLength = 0;\n        this.bytesHashed = 0;\n        this.finished = false;\n        return this;\n    };\n    // Cleans internal buffers and re-initializes hash state.\n    Hash.prototype.clean = function () {\n        for (var i = 0; i < this.buffer.length; i++) {\n            this.buffer[i] = 0;\n        }\n        for (var i = 0; i < this.temp.length; i++) {\n            this.temp[i] = 0;\n        }\n        this.reset();\n    };\n    // Updates hash state with the given data.\n    //\n    // Optionally, length of the data can be specified to hash\n    // fewer bytes than data.length.\n    //\n    // Throws error when trying to update already finalized hash:\n    // instance must be reset to use it again.\n    Hash.prototype.update = function (data, dataLength) {\n        if (dataLength === void 0) { dataLength = data.length; }\n        if (this.finished) {\n            throw new Error(\"SHA256: can't update because hash was finished.\");\n        }\n        var dataPos = 0;\n        this.bytesHashed += dataLength;\n        if (this.bufferLength > 0) {\n            while (this.bufferLength < 64 && dataLength > 0) {\n                this.buffer[this.bufferLength++] = data[dataPos++];\n                dataLength--;\n            }\n            if (this.bufferLength === 64) {\n                hashBlocks(this.temp, this.state, this.buffer, 0, 64);\n                this.bufferLength = 0;\n            }\n        }\n        if (dataLength >= 64) {\n            dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);\n            dataLength %= 64;\n        }\n        while (dataLength > 0) {\n            this.buffer[this.bufferLength++] = data[dataPos++];\n            dataLength--;\n        }\n        return this;\n    };\n    // Finalizes hash state and puts hash into out.\n    //\n    // If hash was already finalized, puts the same value.\n    Hash.prototype.finish = function (out) {\n        if (!this.finished) {\n            var bytesHashed = this.bytesHashed;\n            var left = this.bufferLength;\n            var bitLenHi = (bytesHashed / 0x20000000) | 0;\n            var bitLenLo = bytesHashed << 3;\n            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;\n            this.buffer[left] = 0x80;\n            for (var i = left + 1; i < padLength - 8; i++) {\n                this.buffer[i] = 0;\n            }\n            this.buffer[padLength - 8] = (bitLenHi >>> 24) & 0xff;\n            this.buffer[padLength - 7] = (bitLenHi >>> 16) & 0xff;\n            this.buffer[padLength - 6] = (bitLenHi >>> 8) & 0xff;\n            this.buffer[padLength - 5] = (bitLenHi >>> 0) & 0xff;\n            this.buffer[padLength - 4] = (bitLenLo >>> 24) & 0xff;\n            this.buffer[padLength - 3] = (bitLenLo >>> 16) & 0xff;\n            this.buffer[padLength - 2] = (bitLenLo >>> 8) & 0xff;\n            this.buffer[padLength - 1] = (bitLenLo >>> 0) & 0xff;\n            hashBlocks(this.temp, this.state, this.buffer, 0, padLength);\n            this.finished = true;\n        }\n        for (var i = 0; i < 8; i++) {\n            out[i * 4 + 0] = (this.state[i] >>> 24) & 0xff;\n            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;\n            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;\n            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;\n        }\n        return this;\n    };\n    // Returns the final hash digest.\n    Hash.prototype.digest = function () {\n        var out = new Uint8Array(this.digestLength);\n        this.finish(out);\n        return out;\n    };\n    // Internal function for use in HMAC for optimization.\n    Hash.prototype._saveState = function (out) {\n        for (var i = 0; i < this.state.length; i++) {\n            out[i] = this.state[i];\n        }\n    };\n    // Internal function for use in HMAC for optimization.\n    Hash.prototype._restoreState = function (from, bytesHashed) {\n        for (var i = 0; i < this.state.length; i++) {\n            this.state[i] = from[i];\n        }\n        this.bytesHashed = bytesHashed;\n        this.finished = false;\n        this.bufferLength = 0;\n    };\n    return Hash;\n}());\nexports.Hash = Hash;\n// HMAC implements HMAC-SHA256 message authentication algorithm.\nvar HMAC = /** @class */ (function () {\n    function HMAC(key) {\n        this.inner = new Hash();\n        this.outer = new Hash();\n        this.blockSize = this.inner.blockSize;\n        this.digestLength = this.inner.digestLength;\n        var pad = new Uint8Array(this.blockSize);\n        if (key.length > this.blockSize) {\n            (new Hash()).update(key).finish(pad).clean();\n        }\n        else {\n            for (var i = 0; i < key.length; i++) {\n                pad[i] = key[i];\n            }\n        }\n        for (var i = 0; i < pad.length; i++) {\n            pad[i] ^= 0x36;\n        }\n        this.inner.update(pad);\n        for (var i = 0; i < pad.length; i++) {\n            pad[i] ^= 0x36 ^ 0x5c;\n        }\n        this.outer.update(pad);\n        this.istate = new Uint32Array(8);\n        this.ostate = new Uint32Array(8);\n        this.inner._saveState(this.istate);\n        this.outer._saveState(this.ostate);\n        for (var i = 0; i < pad.length; i++) {\n            pad[i] = 0;\n        }\n    }\n    // Returns HMAC state to the state initialized with key\n    // to make it possible to run HMAC over the other data with the same\n    // key without creating a new instance.\n    HMAC.prototype.reset = function () {\n        this.inner._restoreState(this.istate, this.inner.blockSize);\n        this.outer._restoreState(this.ostate, this.outer.blockSize);\n        return this;\n    };\n    // Cleans HMAC state.\n    HMAC.prototype.clean = function () {\n        for (var i = 0; i < this.istate.length; i++) {\n            this.ostate[i] = this.istate[i] = 0;\n        }\n        this.inner.clean();\n        this.outer.clean();\n    };\n    // Updates state with provided data.\n    HMAC.prototype.update = function (data) {\n        this.inner.update(data);\n        return this;\n    };\n    // Finalizes HMAC and puts the result in out.\n    HMAC.prototype.finish = function (out) {\n        if (this.outer.finished) {\n            this.outer.finish(out);\n        }\n        else {\n            this.inner.finish(out);\n            this.outer.update(out, this.digestLength).finish(out);\n        }\n        return this;\n    };\n    // Returns message authentication code.\n    HMAC.prototype.digest = function () {\n        var out = new Uint8Array(this.digestLength);\n        this.finish(out);\n        return out;\n    };\n    return HMAC;\n}());\nexports.HMAC = HMAC;\n// Returns SHA256 hash of data.\nfunction hash(data) {\n    var h = (new Hash()).update(data);\n    var digest = h.digest();\n    h.clean();\n    return digest;\n}\nexports.hash = hash;\n// Function hash is both available as module.hash and as default export.\nexports[\"default\"] = hash;\n// Returns HMAC-SHA256 of data under the key.\nfunction hmac(key, data) {\n    var h = (new HMAC(key)).update(data);\n    var digest = h.digest();\n    h.clean();\n    return digest;\n}\nexports.hmac = hmac;\n// Fills hkdf buffer like this:\n// T(1) = HMAC-Hash(PRK, T(0) | info | 0x01)\nfunction fillBuffer(buffer, hmac, info, counter) {\n    // Counter is a byte value: check if it overflowed.\n    var num = counter[0];\n    if (num === 0) {\n        throw new Error(\"hkdf: cannot expand more\");\n    }\n    // Prepare HMAC instance for new data with old key.\n    hmac.reset();\n    // Hash in previous output if it was generated\n    // (i.e. counter is greater than 1).\n    if (num > 1) {\n        hmac.update(buffer);\n    }\n    // Hash in info if it exists.\n    if (info) {\n        hmac.update(info);\n    }\n    // Hash in the counter.\n    hmac.update(counter);\n    // Output result to buffer and clean HMAC instance.\n    hmac.finish(buffer);\n    // Increment counter inside typed array, this works properly.\n    counter[0]++;\n}\nvar hkdfSalt = new Uint8Array(exports.digestLength); // Filled with zeroes.\nfunction hkdf(key, salt, info, length) {\n    if (salt === void 0) { salt = hkdfSalt; }\n    if (length === void 0) { length = 32; }\n    var counter = new Uint8Array([1]);\n    // HKDF-Extract uses salt as HMAC key, and key as data.\n    var okm = hmac(salt, key);\n    // Initialize HMAC for expanding with extracted key.\n    // Ensure no collisions with `hmac` function.\n    var hmac_ = new HMAC(okm);\n    // Allocate buffer.\n    var buffer = new Uint8Array(hmac_.digestLength);\n    var bufpos = buffer.length;\n    var out = new Uint8Array(length);\n    for (var i = 0; i < length; i++) {\n        if (bufpos === buffer.length) {\n            fillBuffer(buffer, hmac_, info, counter);\n            bufpos = 0;\n        }\n        out[i] = buffer[bufpos++];\n    }\n    hmac_.clean();\n    buffer.fill(0);\n    counter.fill(0);\n    return out;\n}\nexports.hkdf = hkdf;\n// Derives a key from password and salt using PBKDF2-HMAC-SHA256\n// with the given number of iterations.\n//\n// The number of bytes returned is equal to dkLen.\n//\n// (For better security, avoid dkLen greater than hash length - 32 bytes).\nfunction pbkdf2(password, salt, iterations, dkLen) {\n    var prf = new HMAC(password);\n    var len = prf.digestLength;\n    var ctr = new Uint8Array(4);\n    var t = new Uint8Array(len);\n    var u = new Uint8Array(len);\n    var dk = new Uint8Array(dkLen);\n    for (var i = 0; i * len < dkLen; i++) {\n        var c = i + 1;\n        ctr[0] = (c >>> 24) & 0xff;\n        ctr[1] = (c >>> 16) & 0xff;\n        ctr[2] = (c >>> 8) & 0xff;\n        ctr[3] = (c >>> 0) & 0xff;\n        prf.reset();\n        prf.update(salt);\n        prf.update(ctr);\n        prf.finish(u);\n        for (var j = 0; j < len; j++) {\n            t[j] = u[j];\n        }\n        for (var j = 2; j <= iterations; j++) {\n            prf.reset();\n            prf.update(u).finish(u);\n            for (var k = 0; k < len; k++) {\n                t[k] ^= u[k];\n            }\n        }\n        for (var j = 0; j < len && i * len + j < dkLen; j++) {\n            dk[i * len + j] = t[j];\n        }\n    }\n    for (var i = 0; i < len; i++) {\n        t[i] = u[i] = 0;\n    }\n    for (var i = 0; i < 4; i++) {\n        ctr[i] = 0;\n    }\n    prf.clean();\n    return dk;\n}\nexports.pbkdf2 = pbkdf2;\n});\n\n\n//# sourceURL=webpack://create-signin-signup/./node_modules/fast-sha256/sha256.js?");

/***/ }),

/***/ "./src/assets/default-avatar.js":
/*!**************************************!*\
  !*** ./src/assets/default-avatar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultPicture\": () => (/* binding */ defaultPicture),\n/* harmony export */   \"getDefaultAvatar\": () => (/* binding */ getDefaultAvatar)\n/* harmony export */ });\nconst defaultPicture = 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'\r\n\r\nconst getDefaultAvatar = (function () {\r\n\tlet avatar = defaultPicture\r\n\treturn function (value) {\r\n\t\tif (value) {\r\n\t\t\tavatar = value\r\n\t\t} else return avatar\r\n\t}\r\n})()\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/default-avatar.js?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* reexport safe */ _logo_img__WEBPACK_IMPORTED_MODULE_0__.logoImg),\n/* harmony export */   \"getDefaultAvatar\": () => (/* reexport safe */ _default_avatar__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)\n/* harmony export */ });\n/* harmony import */ var _logo_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-img */ \"./src/assets/logo-img.js\");\n/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-avatar */ \"./src/assets/default-avatar.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/logo-img.js":
/*!********************************!*\
  !*** ./src/assets/logo-img.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* binding */ logoImg)\n/* harmony export */ });\nconst logoImg = 'https://avatarko.ru/img/kartinka/33/cherep_fantastika_feniks_33560.jpg'\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/logo-img.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\r\n\t\tshadow.innerHTML = _styles__WEBPACK_IMPORTED_MODULE_0__.outlineStyle\r\n\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.btnClose)(this, container, _helpers__WEBPACK_IMPORTED_MODULE_3__.closeSignIn)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.logoElem)(this, container)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.titleElem)(this, container)\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\t\t\r\n\t\tconst [login, password] = [\r\n\t\t\t['text', 'Login', 'Login not found'],\r\n\t\t\t['password', 'Password', 'Invalid passvord']\r\n\t\t].map(function (item) {\r\n\t\t\tconst elem__container = this.createElem(forms__body, 'div')\r\n\r\n\t\t\tconst elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n\t\t\t\ttype: item[0],\r\n\t\t\t\tplaceholder: item[1],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n\t\t\t})\r\n\r\n\t\t\tconst error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n\t\t\t\ttextContent: item[2],\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t\t})\r\n\r\n\t\t\treturn elem\r\n\t\t}.bind(this))\r\n\r\n\t\tlogin.onchange = function (event) {\r\n\t\t\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.loginHandler)(event.target.value)\r\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testLoginSignIn)(event.target, (0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.loginHandler)())\r\n\t\t}\r\n\r\n\t\tpassword.oninput = function (event) {\r\n\t\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testPassordSignIn)(event.target, event.target.value)\r\n\t\t}\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.forgotPasElem)(this, container) \r\n\r\n\t\twindow[Symbol.for('listInputSignIn')] = [login, password]\r\n\r\n\t\twindow[Symbol.for('buttonSignIn')] = Object.assign(this.createElem(container, 'button'), {\r\n\t\t\tinnerText: 'Sign In',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle,\r\n\t\t\tdisabled: true,\r\n\t\t\tonclick: async function (event) {\r\n\t\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.authorizeUser)({\r\n\t\t\t\t\tlogin: login.value,\r\n\t\t\t\t\tpassword: password.value\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\nSignIn.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_3__.createElem\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\nconst elemSignIn = document.createElement('sign-in')\r\nelemSignIn.id = 'sign-in'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignIn);\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n\tconstructor () {\r\n\t\tsuper()\r\n\t\tconst shadow = this.attachShadow({ mode: 'closed' })\r\n\r\n\t\tshadow.innerHTML = _styles__WEBPACK_IMPORTED_MODULE_0__.outlineStyle\r\n\r\n\t\tconst wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n\t\t})\r\n\r\n\t\tconst container = Object.assign(this.createElem(wrapper, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n\t\t})\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.btnClose)(this, container, _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignUp)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.logoElem)(this, container)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.titleElem)(this, container)\r\n\r\n\t\tconst forms__body = Object.assign(this.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n\t\t})\r\n\r\n\t\tconst elems__body = this.createElem(forms__body, 'div')\r\n\r\n\t\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getInputs)(this, elems__body)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.avatarElem)(this, forms__body)\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.avatarMessageErrorElem)(this, forms__body)\r\n\r\n\t\t_helpers__WEBPACK_IMPORTED_MODULE_2__.login.onchange = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateLogin)(event.target.value)\r\n\r\n\t\t_helpers__WEBPACK_IMPORTED_MODULE_2__.name.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateName)(event.target.value)\r\n\r\n\t\t_helpers__WEBPACK_IMPORTED_MODULE_2__.telephone.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePhone)(event.target.value)\r\n\r\n\t\t_helpers__WEBPACK_IMPORTED_MODULE_2__.email.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(event.target.value)\r\n\r\n\t\t_helpers__WEBPACK_IMPORTED_MODULE_2__.password.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePassword)(event.target.value)\r\n\r\n\t\t_elements__WEBPACK_IMPORTED_MODULE_1__.avatar.onchange = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.readFile)(event.target.files[0], window[Symbol.for('photo')])\r\n\r\n\t\t;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.buttonElem)(this, container)\r\n\t}\r\n}\r\n\r\nSignUp.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/configs/api-host.js":
/*!*********************************!*\
  !*** ./src/configs/api-host.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHost\": () => (/* binding */ apiHost)\n/* harmony export */ });\nconst apiHost = 'https://garevna-rest-api.glitch.me'\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/api-host.js?");

/***/ }),

/***/ "./src/configs/emailRule.js":
/*!**********************************!*\
  !*** ./src/configs/emailRule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailRule\": () => (/* binding */ emailRule)\n/* harmony export */ });\nconst emailRule = /^(([^<>()[\\].,;:\\s@\"]+(\\.[^<>()[\\].,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\].,;:\\s@\"]+\\.)+[^<>()[\\].,;:\\s@\"]{2,})$/iu\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/emailRule.js?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHost\": () => (/* reexport safe */ _api_host__WEBPACK_IMPORTED_MODULE_0__.apiHost),\n/* harmony export */   \"loginRule\": () => (/* reexport safe */ _loginRule__WEBPACK_IMPORTED_MODULE_1__.loginRule),\n/* harmony export */   \"nameRule\": () => (/* reexport safe */ _nameRule__WEBPACK_IMPORTED_MODULE_2__.nameRule),\n/* harmony export */   \"telephoneRule\": () => (/* reexport safe */ _telephoneRule__WEBPACK_IMPORTED_MODULE_3__.telephoneRule),\n/* harmony export */   \"emailRule\": () => (/* reexport safe */ _emailRule__WEBPACK_IMPORTED_MODULE_4__.emailRule),\n/* harmony export */   \"passwordRule\": () => (/* reexport safe */ _passwordRule__WEBPACK_IMPORTED_MODULE_5__.passwordRule)\n/* harmony export */ });\n/* harmony import */ var _api_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-host */ \"./src/configs/api-host.js\");\n/* harmony import */ var _loginRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginRule */ \"./src/configs/loginRule.js\");\n/* harmony import */ var _nameRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nameRule */ \"./src/configs/nameRule.js\");\n/* harmony import */ var _telephoneRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telephoneRule */ \"./src/configs/telephoneRule.js\");\n/* harmony import */ var _emailRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emailRule */ \"./src/configs/emailRule.js\");\n/* harmony import */ var _passwordRule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passwordRule */ \"./src/configs/passwordRule.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/index.js?");

/***/ }),

/***/ "./src/configs/loginRule.js":
/*!**********************************!*\
  !*** ./src/configs/loginRule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginRule\": () => (/* binding */ loginRule)\n/* harmony export */ });\nconst loginRule = /^[a-zA-z]{1}[a-zA-Z1-9]{3,12}$/\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/loginRule.js?");

/***/ }),

/***/ "./src/configs/nameRule.js":
/*!*********************************!*\
  !*** ./src/configs/nameRule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nameRule\": () => (/* binding */ nameRule)\n/* harmony export */ });\nconst nameRule = /^[A-Za-z]{2,10}$/\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/nameRule.js?");

/***/ }),

/***/ "./src/configs/passwordRule.js":
/*!*************************************!*\
  !*** ./src/configs/passwordRule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordRule\": () => (/* binding */ passwordRule)\n/* harmony export */ });\nconst passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/passwordRule.js?");

/***/ }),

/***/ "./src/configs/telephoneRule.js":
/*!**************************************!*\
  !*** ./src/configs/telephoneRule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"telephoneRule\": () => (/* binding */ telephoneRule)\n/* harmony export */ });\nconst telephoneRule = /^\\(?([0]{1}[3-9]{2})\\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/configs/telephoneRule.js?");

/***/ }),

/***/ "./src/data-handlers/avatar-handler.js":
/*!*********************************************!*\
  !*** ./src/data-handlers/avatar-handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarHandler\": () => (/* binding */ avatarHandler)\n/* harmony export */ });\nconst avatarHandler = (function () {\r\n\tlet avatar = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return avatar\r\n\t\tavatar = property\r\n\t}\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/avatar-handler.js?");

/***/ }),

/***/ "./src/data-handlers/index.js":
/*!************************************!*\
  !*** ./src/data-handlers/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandler\": () => (/* reexport safe */ _login_handler__WEBPACK_IMPORTED_MODULE_0__.loginHandler),\n/* harmony export */   \"passwordHandler\": () => (/* reexport safe */ _password_handler__WEBPACK_IMPORTED_MODULE_1__.passwordHandler),\n/* harmony export */   \"avatarHandler\": () => (/* reexport safe */ _avatar_handler__WEBPACK_IMPORTED_MODULE_2__.avatarHandler)\n/* harmony export */ });\n/* harmony import */ var _login_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-handler */ \"./src/data-handlers/login-handler.js\");\n/* harmony import */ var _password_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-handler */ \"./src/data-handlers/password-handler.js\");\n/* harmony import */ var _avatar_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-handler */ \"./src/data-handlers/avatar-handler.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/index.js?");

/***/ }),

/***/ "./src/data-handlers/login-handler.js":
/*!********************************************!*\
  !*** ./src/data-handlers/login-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandler\": () => (/* binding */ loginHandler)\n/* harmony export */ });\nconst loginHandler = (function () {\r\n\tlet login = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return login\r\n\t\tlogin = property\r\n\t}\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/login-handler.js?");

/***/ }),

/***/ "./src/data-handlers/password-handler.js":
/*!***********************************************!*\
  !*** ./src/data-handlers/password-handler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordHandler\": () => (/* binding */ passwordHandler)\n/* harmony export */ });\nconst passwordHandler = (function () {\r\n\tlet password = ''\r\n\treturn function (property) {\r\n\t\tif (!property) return password\r\n\t\tpassword = property\r\n\t}\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/password-handler.js?");

/***/ }),

/***/ "./src/elements/avatarElem.js":
/*!************************************!*\
  !*** ./src/elements/avatarElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarElem\": () => (/* binding */ avatarElem),\n/* harmony export */   \"avatar\": () => (/* binding */ avatar)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet avatar\r\n\r\nconst avatarElem = (webElem, container) => {\r\n\tconst avatar__container = Object.assign(webElem.createElem(container, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarContainerStyle\r\n\t})\r\n\r\n\tavatar = Object.assign(webElem.createElem(avatar__container, 'input'), {\r\n\t\ttype: 'file',\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarStyle,\r\n\t\tdisabled: true\r\n\t})\r\n\r\n\tconst avatar__body = Object.assign(webElem.createElem(avatar__container, 'div'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarBodyStyle\r\n\t})\r\n\r\n\twindow[Symbol.for('photo')] = Object.assign(webElem.createElem(avatar__body, 'img'), {\r\n\t\tsrc: (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)(),\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.imageStyle\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/avatarElem.js?");

/***/ }),

/***/ "./src/elements/avatarMessageErrorElem.js":
/*!************************************************!*\
  !*** ./src/elements/avatarMessageErrorElem.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarMessageErrorElem\": () => (/* binding */ avatarMessageErrorElem),\n/* harmony export */   \"avatarMessageError\": () => (/* binding */ avatarMessageError)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nlet avatarMessageError\r\n\r\nconst avatarMessageErrorElem = (webElem, container) => {\r\n\tavatarMessageError = Object.assign(webElem.createElem(container, 'p'), {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle,\r\n\t\tinnerText: 'Invalid file type'\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/avatarMessageErrorElem.js?");

/***/ }),

/***/ "./src/elements/btnClose.js":
/*!**********************************!*\
  !*** ./src/elements/btnClose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnClose\": () => (/* binding */ btnClose)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst btnClose = (webElem, container, funcClose) => {\r\n\tconst close = Object.assign(webElem.createElem(container, 'div'), {\r\n\t\tinnerText: 'x',\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonCloseStyle,\r\n\t\tonclick: funcClose\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/btnClose.js?");

/***/ }),

/***/ "./src/elements/buttonElem.js":
/*!************************************!*\
  !*** ./src/elements/buttonElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonElem\": () => (/* binding */ buttonElem),\n/* harmony export */   \"button\": () => (/* binding */ button)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var fast_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-sha256 */ \"./node_modules/fast-sha256/sha256.js\");\n/* harmony import */ var fast_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_sha256__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet button\r\n\r\nconst hasher = new (fast_sha256__WEBPACK_IMPORTED_MODULE_2___default().Hash)()\r\n\r\nconst buttonElem = (webElem, container) => {\r\n\tconst array = fast_sha256__WEBPACK_IMPORTED_MODULE_2___default().hash(_helpers__WEBPACK_IMPORTED_MODULE_0__.password.value)\r\n\tconst digest = String.fromCharCode(...array)\r\n\r\n\tconsole.log(digest)\r\n\r\n\tbutton = Object.assign(webElem.createElem(container, 'button'), {\r\n\t\tdisabled: true,\r\n\t\tinnerText: 'Sign Up',\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonDisabledStyle,\r\n\t\tonclick: async function (event) {\r\n\t\t\tawait (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createUser) (_helpers__WEBPACK_IMPORTED_MODULE_0__.login.value, {\r\n\t\t\t\tname: _helpers__WEBPACK_IMPORTED_MODULE_0__.name.value,\r\n\t\t\t\ttelephone: _helpers__WEBPACK_IMPORTED_MODULE_0__.telephone.value,\r\n\t\t\t\temail: _helpers__WEBPACK_IMPORTED_MODULE_0__.email.value,\r\n\t\t\t\tpassword: digest,\r\n\t\t\t\tavatar: window[Symbol.for('photo')].src\r\n\t\t\t})\r\n\t\t}\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/buttonElem.js?");

/***/ }),

/***/ "./src/elements/forgotPasElem.js":
/*!***************************************!*\
  !*** ./src/elements/forgotPasElem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forgotPasElem\": () => (/* binding */ forgotPasElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst forgotPasElem = (webElem, container) => {\r\n\tObject.assign(webElem.createElem(container, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.forgotPasswordStyle,\r\n\t\t\tinnerText: 'Forgot password?',\r\n\t\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/forgotPasElem.js?");

/***/ }),

/***/ "./src/elements/index.js":
/*!*******************************!*\
  !*** ./src/elements/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnClose\": () => (/* reexport safe */ _btnClose__WEBPACK_IMPORTED_MODULE_0__.btnClose),\n/* harmony export */   \"logoElem\": () => (/* reexport safe */ _logotipElem__WEBPACK_IMPORTED_MODULE_1__.logoElem),\n/* harmony export */   \"titleElem\": () => (/* reexport safe */ _titleElem__WEBPACK_IMPORTED_MODULE_2__.titleElem),\n/* harmony export */   \"avatarElem\": () => (/* reexport safe */ _avatarElem__WEBPACK_IMPORTED_MODULE_3__.avatarElem),\n/* harmony export */   \"avatar\": () => (/* reexport safe */ _avatarElem__WEBPACK_IMPORTED_MODULE_3__.avatar),\n/* harmony export */   \"avatarMessageErrorElem\": () => (/* reexport safe */ _avatarMessageErrorElem__WEBPACK_IMPORTED_MODULE_4__.avatarMessageErrorElem),\n/* harmony export */   \"avatarMessageError\": () => (/* reexport safe */ _avatarMessageErrorElem__WEBPACK_IMPORTED_MODULE_4__.avatarMessageError),\n/* harmony export */   \"buttonElem\": () => (/* reexport safe */ _buttonElem__WEBPACK_IMPORTED_MODULE_5__.buttonElem),\n/* harmony export */   \"button\": () => (/* reexport safe */ _buttonElem__WEBPACK_IMPORTED_MODULE_5__.button),\n/* harmony export */   \"forgotPasElem\": () => (/* reexport safe */ _forgotPasElem__WEBPACK_IMPORTED_MODULE_6__.forgotPasElem)\n/* harmony export */ });\n/* harmony import */ var _btnClose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnClose */ \"./src/elements/btnClose.js\");\n/* harmony import */ var _logotipElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logotipElem */ \"./src/elements/logotipElem.js\");\n/* harmony import */ var _titleElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titleElem */ \"./src/elements/titleElem.js\");\n/* harmony import */ var _avatarElem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatarElem */ \"./src/elements/avatarElem.js\");\n/* harmony import */ var _avatarMessageErrorElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatarMessageErrorElem */ \"./src/elements/avatarMessageErrorElem.js\");\n/* harmony import */ var _buttonElem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttonElem */ \"./src/elements/buttonElem.js\");\n/* harmony import */ var _forgotPasElem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotPasElem */ \"./src/elements/forgotPasElem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/index.js?");

/***/ }),

/***/ "./src/elements/logotipElem.js":
/*!*************************************!*\
  !*** ./src/elements/logotipElem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoElem\": () => (/* binding */ logoElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logoElem = (webElem, container) => {\r\n\t\t\tconst logo = Object.assign(webElem.createElem(container, 'div'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.logoStyle\r\n\t\t})\r\n\t\tconst logo__link = Object.assign(webElem.createElem(logo, 'a'), {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.logoLinkStyle\r\n\t\t})\r\n\t\tconst logo__img = Object.assign(webElem.createElem(logo__link, 'img'), {\r\n\t\t\tsrc: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.imageStyle\r\n\t\t})\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/logotipElem.js?");

/***/ }),

/***/ "./src/elements/titleElem.js":
/*!***********************************!*\
  !*** ./src/elements/titleElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleElem\": () => (/* binding */ titleElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst titleElem = (webElem, container) => {\r\n\t\tconst title = Object.assign(webElem.createElem(container, 'h2'), {\r\n\t\t\tinnerText: 'Sign up to Fantasy World',\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.titleStyle\r\n\t\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/titleElem.js?");

/***/ }),

/***/ "./src/helpers/authorizeUser.js":
/*!**************************************!*\
  !*** ./src/helpers/authorizeUser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorizeUser\": () => (/* binding */ authorizeUser)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n\r\n\r\nconst authorizeUser = async objectAutorize => {\r\n\tdocument.getElementById(\"not_authorize\").classList.remove('uzer-not_active')\r\n\tdocument.getElementById(\"authorize\").classList.add('user-active')\r\n\tdocument.getElementById(\"user-name\").textContent = objectAutorize.login\r\n\tdocument.getElementById(\"user-avatar\").src = (0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.avatarHandler)()\r\n\r\n\tdocument.getElementsByTagName('sign-in')[0].remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/authorizeUser.js?");

/***/ }),

/***/ "./src/helpers/closeSignIn.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* binding */ closeSignIn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignIn = (event) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignIn)()\r\n\tdocument.getElementById(\"sign-in\").remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignIn.js?");

/***/ }),

/***/ "./src/helpers/closeSignUp.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignUp\": () => (/* binding */ closeSignUp)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignUp = (event) => {\r\n\t(0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignUp)()\r\n\tdocument.getElementById(\"sign-up\").remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignUp.js?");

/***/ }),

/***/ "./src/helpers/createElem.js":
/*!***********************************!*\
  !*** ./src/helpers/createElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nconst createElem = (сontainerName, tagName) => { \r\n\treturn сontainerName.appendChild(document.createElement(tagName)) \r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createElem.js?");

/***/ }),

/***/ "./src/helpers/createUser.js":
/*!***********************************!*\
  !*** ./src/helpers/createUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nconst createUser = async (login, user) => {\r\n\tconst response = await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`, {\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-Type': 'application/json'\r\n\t\t},\r\n\t\tbody: JSON.stringify(user)\r\n\t})\r\n\r\n\tconsole.log(response.status)\r\n\r\n\tif (response.status === 200) {\r\n\t\t(0,___WEBPACK_IMPORTED_MODULE_1__.resetInputSignUp)()\r\n\r\n\t\tdocument.getElementsByTagName('sign-up')[0].remove()\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createUser.js?");

/***/ }),

/***/ "./src/helpers/getInputs.js":
/*!**********************************!*\
  !*** ./src/helpers/getInputs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInputs\": () => (/* binding */ getInputs),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"telephone\": () => (/* binding */ telephone),\n/* harmony export */   \"email\": () => (/* binding */ email),\n/* harmony export */   \"password\": () => (/* binding */ password)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nlet login, name, telephone, email, password\r\n\r\nfunction getInputs (webElem, container) {\r\n\t[login, name, telephone, email, password] = [\r\n\t\t['text', 'Login', 'Invalid login format', false],\r\n\t\t['text', 'User name', 'Invalid name format', true],\r\n\t\t['tel', '(0XX)XXX-XX-XX', 'Invalid telephone format', true],\r\n\t\t['email', 'e-mail', 'Invalid e-mail format', true],\r\n\t\t['password', 'Password', 'Invalid password format', true]\r\n\t].map(function (item) {\r\n\t\tconst elem__container = webElem.createElem(container, 'div')\r\n\r\n\t\tconst elem = Object.assign(webElem.createElem(elem__container, 'input'), {\r\n\t\t\ttype: item[0],\r\n\t\t\tplaceholder: item[1],\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.inputStyle,\r\n\t\t\tdisabled: item[3]\r\n\t\t})\r\n\r\n\t\tconst error__message = Object.assign(webElem.createElem(elem__container, 'p'), {\r\n\t\t\ttextContent: item[2],\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t})\r\n\r\n\t\treturn elem\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getInputs.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCloseBurgerMenu\": () => (/* reexport safe */ _openCloseBurgerMenu__WEBPACK_IMPORTED_MODULE_0__.openCloseBurgerMenu),\n/* harmony export */   \"closeSignIn\": () => (/* reexport safe */ _closeSignIn__WEBPACK_IMPORTED_MODULE_1__.closeSignIn),\n/* harmony export */   \"closeSignUp\": () => (/* reexport safe */ _closeSignUp__WEBPACK_IMPORTED_MODULE_2__.closeSignUp),\n/* harmony export */   \"resetInputSignIn\": () => (/* reexport safe */ _resetInputSignIn__WEBPACK_IMPORTED_MODULE_3__.resetInputSignIn),\n/* harmony export */   \"resetInputSignUp\": () => (/* reexport safe */ _resetInputSignUp__WEBPACK_IMPORTED_MODULE_4__.resetInputSignUp),\n/* harmony export */   \"validateEmptyString\": () => (/* reexport safe */ _validateEmptyString__WEBPACK_IMPORTED_MODULE_5__.validateEmptyString),\n/* harmony export */   \"validateLogin\": () => (/* reexport safe */ _validateLogin__WEBPACK_IMPORTED_MODULE_6__.validateLogin),\n/* harmony export */   \"validateName\": () => (/* reexport safe */ _validateName__WEBPACK_IMPORTED_MODULE_7__.validateName),\n/* harmony export */   \"validatePhone\": () => (/* reexport safe */ _validatePhone__WEBPACK_IMPORTED_MODULE_8__.validatePhone),\n/* harmony export */   \"validateEmail\": () => (/* reexport safe */ _validateEmail__WEBPACK_IMPORTED_MODULE_9__.validateEmail),\n/* harmony export */   \"validatePassword\": () => (/* reexport safe */ _validatePassword__WEBPACK_IMPORTED_MODULE_10__.validatePassword),\n/* harmony export */   \"readFile\": () => (/* reexport safe */ _readFile__WEBPACK_IMPORTED_MODULE_11__.readFile),\n/* harmony export */   \"setErrorMessage\": () => (/* reexport safe */ _setErrorMessage__WEBPACK_IMPORTED_MODULE_12__.setErrorMessage),\n/* harmony export */   \"createUser\": () => (/* reexport safe */ _createUser__WEBPACK_IMPORTED_MODULE_13__.createUser),\n/* harmony export */   \"testLoginSignIn\": () => (/* reexport safe */ _testLoginSignIn__WEBPACK_IMPORTED_MODULE_14__.testLoginSignIn),\n/* harmony export */   \"testLoginSignUp\": () => (/* reexport safe */ _testLoginSignUp__WEBPACK_IMPORTED_MODULE_15__.testLoginSignUp),\n/* harmony export */   \"testPassordSignIn\": () => (/* reexport safe */ _testPassordSignIn__WEBPACK_IMPORTED_MODULE_16__.testPassordSignIn),\n/* harmony export */   \"authorizeUser\": () => (/* reexport safe */ _authorizeUser__WEBPACK_IMPORTED_MODULE_17__.authorizeUser),\n/* harmony export */   \"signOut\": () => (/* reexport safe */ _signOut__WEBPACK_IMPORTED_MODULE_18__.signOut),\n/* harmony export */   \"createElem\": () => (/* reexport safe */ _createElem__WEBPACK_IMPORTED_MODULE_19__.createElem),\n/* harmony export */   \"getInputs\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.getInputs),\n/* harmony export */   \"login\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.login),\n/* harmony export */   \"name\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.name),\n/* harmony export */   \"telephone\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.telephone),\n/* harmony export */   \"email\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.email),\n/* harmony export */   \"password\": () => (/* reexport safe */ _getInputs__WEBPACK_IMPORTED_MODULE_20__.password),\n/* harmony export */   \"showError\": () => (/* reexport safe */ _showError__WEBPACK_IMPORTED_MODULE_21__.showError),\n/* harmony export */   \"showDisabledButton\": () => (/* reexport safe */ _showDisabledButton__WEBPACK_IMPORTED_MODULE_22__.showDisabledButton)\n/* harmony export */ });\n/* harmony import */ var _openCloseBurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openCloseBurgerMenu */ \"./src/helpers/openCloseBurgerMenu.js\");\n/* harmony import */ var _closeSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeSignIn */ \"./src/helpers/closeSignIn.js\");\n/* harmony import */ var _closeSignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closeSignUp */ \"./src/helpers/closeSignUp.js\");\n/* harmony import */ var _resetInputSignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetInputSignIn */ \"./src/helpers/resetInputSignIn.js\");\n/* harmony import */ var _resetInputSignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resetInputSignUp */ \"./src/helpers/resetInputSignUp.js\");\n/* harmony import */ var _validateEmptyString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validateEmptyString */ \"./src/helpers/validateEmptyString.js\");\n/* harmony import */ var _validateLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateLogin */ \"./src/helpers/validateLogin.js\");\n/* harmony import */ var _validateName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validateName */ \"./src/helpers/validateName.js\");\n/* harmony import */ var _validatePhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validatePhone */ \"./src/helpers/validatePhone.js\");\n/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validateEmail */ \"./src/helpers/validateEmail.js\");\n/* harmony import */ var _validatePassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validatePassword */ \"./src/helpers/validatePassword.js\");\n/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readFile */ \"./src/helpers/readFile.js\");\n/* harmony import */ var _setErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setErrorMessage */ \"./src/helpers/setErrorMessage.js\");\n/* harmony import */ var _createUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./createUser */ \"./src/helpers/createUser.js\");\n/* harmony import */ var _testLoginSignIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testLoginSignIn */ \"./src/helpers/testLoginSignIn.js\");\n/* harmony import */ var _testLoginSignUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testLoginSignUp */ \"./src/helpers/testLoginSignUp.js\");\n/* harmony import */ var _testPassordSignIn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testPassordSignIn */ \"./src/helpers/testPassordSignIn.js\");\n/* harmony import */ var _authorizeUser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authorizeUser */ \"./src/helpers/authorizeUser.js\");\n/* harmony import */ var _signOut__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signOut */ \"./src/helpers/signOut.js\");\n/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./createElem */ \"./src/helpers/createElem.js\");\n/* harmony import */ var _getInputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./getInputs */ \"./src/helpers/getInputs.js\");\n/* harmony import */ var _showError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./showError */ \"./src/helpers/showError.js\");\n/* harmony import */ var _showDisabledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./showDisabledButton */ \"./src/helpers/showDisabledButton.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/openCloseBurgerMenu.js":
/*!********************************************!*\
  !*** ./src/helpers/openCloseBurgerMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCloseBurgerMenu\": () => (/* binding */ openCloseBurgerMenu)\n/* harmony export */ });\nconst openCloseBurgerMenu = () => {\r\n\tdocument.getElementById(\"burger-menu\").classList.toggle('open')\r\n\tdocument.getElementById(\"header-menu\").classList.toggle('active')\r\n\tdocument.getElementsByTagName('body')[0].classList.toggle('hidden')\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/openCloseBurgerMenu.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst readFile = (file, elem) => {\r\n\tconst errorMessages = [\r\n\t\t'Invalid file',\r\n\t\t'Invalid elemHTML',\r\n\t\t'Invalid file type',\r\n\t\t'Image size exceeds 300 kB'\r\n\t]\r\n\r\n\tif (!(file instanceof File)) return (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[0])\r\n\r\n\tif (elem?.nodeType !== 1) return (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[1])\r\n\r\n\tif (file.type.indexOf('image')) {\r\n\t\t(0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[2])\r\n\r\n\t\treturn (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(true, _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle)\r\n\t} else {\r\n\t\t_elements__WEBPACK_IMPORTED_MODULE_1__.avatarMessageError.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\r\n\t\tif (file.size > 300000) {\r\n\t\t\t(0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[3])\r\n\r\n\t\treturn (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(true, _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle)\r\n\t\t}\r\n\t\tconst reader = new FileReader\r\n\t\treader.onload = function (event) {\r\n\t\t\telem.src = event.target.result\r\n\t\t}\r\n\t\treader.readAsDataURL(file)\r\n\r\n\t\treturn (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(false, _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle)\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignIn.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignIn\": () => (/* binding */ resetInputSignIn)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst resetInputSignIn = () => {\r\n\twindow[Symbol.for('listInputSignIn')].forEach(input => {\r\n\t\tObject.assign(input, {\r\n\t\t\tvalue: ''\r\n\t\t})\r\n\t\tObject.assign(input.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t})\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignIn.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignUp.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignUp\": () => (/* binding */ resetInputSignUp)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst resetInputSignUp = () => {\r\n\t\tconst inputs = [___WEBPACK_IMPORTED_MODULE_2__.login, ___WEBPACK_IMPORTED_MODULE_2__.name, ___WEBPACK_IMPORTED_MODULE_2__.telephone, ___WEBPACK_IMPORTED_MODULE_2__.email, ___WEBPACK_IMPORTED_MODULE_2__.password]\r\n\t\tinputs.forEach(input => {\r\n\t\tObject.assign(input, {\r\n\t\t\tvalue: ''\r\n\t\t})\r\n\t\tObject.assign(input.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t\t})\r\n\t})\r\n\r\n\twindow[Symbol.for('photo')].src = (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)()\r\n\t_elements__WEBPACK_IMPORTED_MODULE_3__.avatarMessageErrorElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignUp.js?");

/***/ }),

/***/ "./src/helpers/setErrorMessage.js":
/*!****************************************!*\
  !*** ./src/helpers/setErrorMessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setErrorMessage\": () => (/* binding */ setErrorMessage)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst setErrorMessage = (inputElem, validationResult) => {\r\n\t\tinputElem.nextElementSibling.style = validationResult \r\n\t\t? _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle : _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageActiveStyle\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/setErrorMessage.js?");

/***/ }),

/***/ "./src/helpers/showDisabledButton.js":
/*!*******************************************!*\
  !*** ./src/helpers/showDisabledButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showDisabledButton\": () => (/* binding */ showDisabledButton)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n\r\n\r\nconst showDisabledButton = (paramDisabled, paramStyle) => {\r\n\tObject.assign(_elements__WEBPACK_IMPORTED_MODULE_0__.button, {\r\n\t\tdisabled: paramDisabled,\r\n\t\tstyle: paramStyle\r\n\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/showDisabledButton.js?");

/***/ }),

/***/ "./src/helpers/showError.js":
/*!**********************************!*\
  !*** ./src/helpers/showError.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst showError = (message) => {\r\n\tObject.assign(_elements__WEBPACK_IMPORTED_MODULE_0__.avatarMessageError, {\r\n\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle,\r\n\t\ttextContent: message\r\n\t})\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/showError.js?");

/***/ }),

/***/ "./src/helpers/signOut.js":
/*!********************************!*\
  !*** ./src/helpers/signOut.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n\r\n\r\nconst signOut = () => {\r\n\tdocument.getElementById(\"authorize\").classList.remove('user-active')\r\n\tdocument.getElementById(\"not_authorize\").classList.add('uzer-not_active')\r\n\tdocument.getElementById(\"user-name\").textContent = 'User name'\r\n\tdocument.getElementById(\"user-avatar\").src = (0,_assets__WEBPACK_IMPORTED_MODULE_0__.getDefaultAvatar)()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/signOut.js?");

/***/ }),

/***/ "./src/helpers/testLoginSignIn.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignIn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignIn\": () => (/* binding */ testLoginSignIn)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst testLoginSignIn = async (inputElem, login) => {\r\n\tconst response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\r\n\tconsole.log(response)\r\n\tconsole.log(response.password)\r\n\r\n\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.passwordHandler)(response.password)\r\n\r\n\t;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.avatarHandler)(response.avatar)\r\n\r\n\treturn response.error\r\n\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n\t\t\t})\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignIn.js?");

/***/ }),

/***/ "./src/helpers/testLoginSignUp.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignUp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignUp\": () => (/* binding */ testLoginSignUp)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\nconst testLoginSignUp = async (inputElem, login) => {\r\n\tconst response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\r\n\treturn response.error \r\n\t\t? Object.assign(inputElem.nextElementSibling, {\r\n\t\t\ttextContent: 'Invalid login format'\r\n\t\t\t}) : Object.assign(inputElem.nextElementSibling, {\r\n\t\t\t\t\ttextContent: 'login exists',\r\n\t\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t\t\t})\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignUp.js?");

/***/ }),

/***/ "./src/helpers/testPassordSignIn.js":
/*!******************************************!*\
  !*** ./src/helpers/testPassordSignIn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testPassordSignIn\": () => (/* binding */ testPassordSignIn)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst testPassordSignIn = async (inputElem, property) => {\r\n\tif ((0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.passwordHandler)() === property) {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n\t\t})\r\n\t\tObject.assign(window[Symbol.for('buttonSignIn')], {\r\n\t\t\tdisabled: false,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonSubmitStyle\r\n\t\t})\r\n\t} else {\r\n\t\tObject.assign(inputElem.nextElementSibling, {\r\n\t\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n\t\t})\r\n\t\tObject.assign(window[Symbol.for('buttonSignIn')], {\r\n\t\t\tdisabled: true,\r\n\t\t\tstyle: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonDisabledStyle\r\n\t\t})\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testPassordSignIn.js?");

/***/ }),

/***/ "./src/helpers/validateEmail.js":
/*!**************************************!*\
  !*** ./src/helpers/validateEmail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateEmail = (value) => {\r\n\tconst result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.emailRule))\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.email, result)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.email, value)\r\n\r\n\t___WEBPACK_IMPORTED_MODULE_0__.password.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmail.js?");

/***/ }),

/***/ "./src/helpers/validateEmptyString.js":
/*!********************************************!*\
  !*** ./src/helpers/validateEmptyString.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmptyString\": () => (/* binding */ validateEmptyString)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst validateEmptyString = (inputElem, property) => {\r\n\tif (property.length === 0) {\r\n\t\tinputElem.nextElementSibling.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmptyString.js?");

/***/ }),

/***/ "./src/helpers/validateLogin.js":
/*!**************************************!*\
  !*** ./src/helpers/validateLogin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateLogin\": () => (/* binding */ validateLogin)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateLogin = (value) => {\r\n\tconst result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.loginRule))\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.login, result)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.testLoginSignUp)(___WEBPACK_IMPORTED_MODULE_0__.login, value)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.login, value)\r\n\r\n\t___WEBPACK_IMPORTED_MODULE_0__.name.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateLogin.js?");

/***/ }),

/***/ "./src/helpers/validateName.js":
/*!*************************************!*\
  !*** ./src/helpers/validateName.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateName\": () => (/* binding */ validateName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateName = (value) => {\r\n\tconst result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.nameRule))\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.name, result)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.name, value)\r\n\r\n\t___WEBPACK_IMPORTED_MODULE_0__.telephone.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateName.js?");

/***/ }),

/***/ "./src/helpers/validatePassword.js":
/*!*****************************************!*\
  !*** ./src/helpers/validatePassword.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst validatePassword = (value) => {\r\n\tconst result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.passwordRule))\r\n\r\n\t___WEBPACK_IMPORTED_MODULE_0__.password.style.color = result ? '#090' : '#f00'\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.password, result)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.password, value)\r\n\r\n\t_elements__WEBPACK_IMPORTED_MODULE_2__.avatar.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePassword.js?");

/***/ }),

/***/ "./src/helpers/validatePhone.js":
/*!**************************************!*\
  !*** ./src/helpers/validatePhone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePhone\": () => (/* binding */ validatePhone)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validatePhone = (value) => {\r\n\tconst result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.telephoneRule))\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.telephone, result)\r\n\r\n\t;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.telephone, value)\r\n\r\n\t___WEBPACK_IMPORTED_MODULE_0__.email.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePhone.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.getElementById(\"burger-menu\").onclick = (event) => {\r\n\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.openCloseBurgerMenu)(event.target)\r\n}\r\n\r\nconst forms = [_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_sign_up__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\r\n\r\nconst [sinInButton, sinUpButton] = [\"sing-in__btn\", \"sing-up__btn\"]\r\n\t.map((id, index) => Object.assign(document.getElementById(id), {\r\n\t\tonclick: function (event) {\r\n\t\t\tevent.preventDefault()\r\n\t\t\tdocument.body.appendChild(forms[index])\r\n\t\t}\r\n}))\r\n\r\ndocument.getElementById(\"exit\").onclick = (event) => {\r\n\t;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.signOut)(event.target)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/index.js?");

/***/ }),

/***/ "./src/styles/avatar-body.js":
/*!***********************************!*\
  !*** ./src/styles/avatar-body.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarBodyStyle\": () => (/* binding */ avatarBodyStyle)\n/* harmony export */ });\nconst avatarBodyStyle = `\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tz-index: 4;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-body.js?");

/***/ }),

/***/ "./src/styles/avatar-container.js":
/*!****************************************!*\
  !*** ./src/styles/avatar-container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarContainerStyle\": () => (/* binding */ avatarContainerStyle)\n/* harmony export */ });\nconst avatarContainerStyle = `\r\n\tposition: relative;\r\n\tmargin: 0 auto;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #696969;\r\n\toverflow: hidden;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-container.js?");

/***/ }),

/***/ "./src/styles/avatar.js":
/*!******************************!*\
  !*** ./src/styles/avatar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarStyle\": () => (/* binding */ avatarStyle)\n/* harmony export */ });\nconst avatarStyle = `\r\n\topacity: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tz-index: 8;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar.js?");

/***/ }),

/***/ "./src/styles/button-close.js":
/*!************************************!*\
  !*** ./src/styles/button-close.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonCloseStyle\": () => (/* binding */ buttonCloseStyle)\n/* harmony export */ });\nconst buttonCloseStyle = `\r\n\tposition: absolute;\r\n\ttop: 8px;\r\n\tright: 8px;\r\n\tpadding: 0 4px;\r\n\tbackground: #8A2BE2;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n\tmargin: 0;\r\n\tborder-radius: 4px;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-close.js?");

/***/ }),

/***/ "./src/styles/button-disabled.js":
/*!***************************************!*\
  !*** ./src/styles/button-disabled.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonDisabledStyle\": () => (/* binding */ buttonDisabledStyle)\n/* harmony export */ });\nconst buttonDisabledStyle = `\r\n\tpadding: 8px; \r\n\tmargin: 4px 0 0 0;\r\n\tmargin: 0 auto; \r\n\tbackground: rgba(112, 128, 144, 0.7); \r\n\tcolor: #fff; \r\n\tborder: none; \r\n\tborder-radius: 4px; \r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\twidth: 50%;\r\n\topacity: 0.4;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-disabled.js?");

/***/ }),

/***/ "./src/styles/button-submit.js":
/*!*************************************!*\
  !*** ./src/styles/button-submit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonSubmitStyle\": () => (/* binding */ buttonSubmitStyle)\n/* harmony export */ });\nconst buttonSubmitStyle = `\r\n\tpadding: 8px; \r\n\tmargin: 4px 0 0 0;\r\n\tmargin: 0 auto; \r\n\tbackground: #696969; \r\n\tcolor: #fff; \r\n\tborder: none; \r\n\tborder-radius: 4px; \r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\twidth: 50%;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-submit.js?");

/***/ }),

/***/ "./src/styles/container.js":
/*!*********************************!*\
  !*** ./src/styles/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containerStyle\": () => (/* binding */ containerStyle)\n/* harmony export */ });\nconst containerStyle = `\r\n\tmax-width: 320px;\r\n\tbox-shadow: 2px 2px 8px #000;\r\n\tbackground: rgba(240, 255, 255, 0.8);\r\n\tborder-radius: 8px;\r\n\tpadding: 12px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/container.js?");

/***/ }),

/***/ "./src/styles/error-message-active.js":
/*!********************************************!*\
  !*** ./src/styles/error-message-active.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* binding */ errorMessageActiveStyle)\n/* harmony export */ });\nconst errorMessageActiveStyle = `\r\n\tcolor: #f00;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\tvisibility: visible;\r\n\tpadding: 2px 0;\r\n\ttransition: all .2s ease;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message-active.js?");

/***/ }),

/***/ "./src/styles/error-message.js":
/*!*************************************!*\
  !*** ./src/styles/error-message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageStyle\": () => (/* binding */ errorMessageStyle)\n/* harmony export */ });\nconst errorMessageStyle = `\r\n\tcolor: #f00;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tborder-radius: 4px;\r\n\tfont-size: 12px;\r\n\tpadding: 2px 0;\r\n\tvisibility: hidden;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message.js?");

/***/ }),

/***/ "./src/styles/forgot-password.js":
/*!***************************************!*\
  !*** ./src/styles/forgot-password.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forgotPasswordStyle\": () => (/* binding */ forgotPasswordStyle)\n/* harmony export */ });\nconst forgotPasswordStyle = `\r\n\t\tfont-size: 16px;\r\n\t\ttext-decoration: none;\r\n\t\tcursor: pointer;\r\n\t\tcolor: #87CEEB;\r\n\t\tmargin: 0 0 16px 0;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forgot-password.js?");

/***/ }),

/***/ "./src/styles/forms-body.js":
/*!**********************************!*\
  !*** ./src/styles/forms-body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formsBodyStyle\": () => (/* binding */ formsBodyStyle)\n/* harmony export */ });\nconst formsBodyStyle = `\r\n\twidth: 100%;\r\n\tposition: relative;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forms-body.js?");

/***/ }),

/***/ "./src/styles/image.js":
/*!*****************************!*\
  !*** ./src/styles/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageStyle\": () => (/* binding */ imageStyle)\n/* harmony export */ });\nconst imageStyle = `\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/image.js?");

/***/ }),

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle),\n/* harmony export */   \"containerStyle\": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.containerStyle),\n/* harmony export */   \"buttonCloseStyle\": () => (/* reexport safe */ _button_close__WEBPACK_IMPORTED_MODULE_2__.buttonCloseStyle),\n/* harmony export */   \"logoStyle\": () => (/* reexport safe */ _logo_js__WEBPACK_IMPORTED_MODULE_3__.logoStyle),\n/* harmony export */   \"logoLinkStyle\": () => (/* reexport safe */ _logo_link_js__WEBPACK_IMPORTED_MODULE_4__.logoLinkStyle),\n/* harmony export */   \"imageStyle\": () => (/* reexport safe */ _image_js__WEBPACK_IMPORTED_MODULE_5__.imageStyle),\n/* harmony export */   \"titleStyle\": () => (/* reexport safe */ _title_js__WEBPACK_IMPORTED_MODULE_6__.titleStyle),\n/* harmony export */   \"formsBodyStyle\": () => (/* reexport safe */ _forms_body__WEBPACK_IMPORTED_MODULE_7__.formsBodyStyle),\n/* harmony export */   \"inputStyle\": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_8__.inputStyle),\n/* harmony export */   \"outlineStyle\": () => (/* reexport safe */ _input_outline__WEBPACK_IMPORTED_MODULE_9__.outlineStyle),\n/* harmony export */   \"errorMessageStyle\": () => (/* reexport safe */ _error_message__WEBPACK_IMPORTED_MODULE_10__.errorMessageStyle),\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* reexport safe */ _error_message_active__WEBPACK_IMPORTED_MODULE_11__.errorMessageActiveStyle),\n/* harmony export */   \"avatarContainerStyle\": () => (/* reexport safe */ _avatar_container__WEBPACK_IMPORTED_MODULE_12__.avatarContainerStyle),\n/* harmony export */   \"avatarStyle\": () => (/* reexport safe */ _avatar__WEBPACK_IMPORTED_MODULE_13__.avatarStyle),\n/* harmony export */   \"avatarBodyStyle\": () => (/* reexport safe */ _avatar_body__WEBPACK_IMPORTED_MODULE_14__.avatarBodyStyle),\n/* harmony export */   \"forgotPasswordStyle\": () => (/* reexport safe */ _forgot_password__WEBPACK_IMPORTED_MODULE_15__.forgotPasswordStyle),\n/* harmony export */   \"buttonSubmitStyle\": () => (/* reexport safe */ _button_submit__WEBPACK_IMPORTED_MODULE_16__.buttonSubmitStyle),\n/* harmony export */   \"buttonDisabledStyle\": () => (/* reexport safe */ _button_disabled__WEBPACK_IMPORTED_MODULE_17__.buttonDisabledStyle)\n/* harmony export */ });\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ \"./src/styles/wrapper.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./src/styles/container.js\");\n/* harmony import */ var _button_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-close */ \"./src/styles/button-close.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ \"./src/styles/logo.js\");\n/* harmony import */ var _logo_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo-link.js */ \"./src/styles/logo-link.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.js */ \"./src/styles/image.js\");\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title.js */ \"./src/styles/title.js\");\n/* harmony import */ var _forms_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-body */ \"./src/styles/forms-body.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input */ \"./src/styles/input.js\");\n/* harmony import */ var _input_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-outline */ \"./src/styles/input-outline.js\");\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-message */ \"./src/styles/error-message.js\");\n/* harmony import */ var _error_message_active__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-message-active */ \"./src/styles/error-message-active.js\");\n/* harmony import */ var _avatar_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./avatar-container */ \"./src/styles/avatar-container.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avatar */ \"./src/styles/avatar.js\");\n/* harmony import */ var _avatar_body__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./avatar-body */ \"./src/styles/avatar-body.js\");\n/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password */ \"./src/styles/forgot-password.js\");\n/* harmony import */ var _button_submit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button-submit */ \"./src/styles/button-submit.js\");\n/* harmony import */ var _button_disabled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./button-disabled */ \"./src/styles/button-disabled.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/index.js?");

/***/ }),

/***/ "./src/styles/input-outline.js":
/*!*************************************!*\
  !*** ./src/styles/input-outline.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outlineStyle\": () => (/* binding */ outlineStyle)\n/* harmony export */ });\nconst outlineStyle = `\r\n\t<style>\r\n\t\tinput:focus-visible {\r\n\t\toutline: 1px solid #708090;\r\n\t\tborder-radius: 3px;\r\n\t\t}\r\n\t</style>\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/input-outline.js?");

/***/ }),

/***/ "./src/styles/input.js":
/*!*****************************!*\
  !*** ./src/styles/input.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputStyle\": () => (/* binding */ inputStyle)\n/* harmony export */ });\nconst inputStyle = `\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tmargin: 4px 0;\r\n\tpadding: 4px 0 4px 8px;\r\n\tborder-radius: 4px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid #696969;\r\n\ttransition: all .5s ease;\r\n\tbox-sizing: border-box;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/input.js?");

/***/ }),

/***/ "./src/styles/logo-link.js":
/*!*********************************!*\
  !*** ./src/styles/logo-link.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoLinkStyle\": () => (/* binding */ logoLinkStyle)\n/* harmony export */ });\nconst logoLinkStyle = `\r\n\tflex: 0 0 100px;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/logo-link.js?");

/***/ }),

/***/ "./src/styles/logo.js":
/*!****************************!*\
  !*** ./src/styles/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoStyle\": () => (/* binding */ logoStyle)\n/* harmony export */ });\nconst logoStyle = `\r\n\tdisplay: flex;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/logo.js?");

/***/ }),

/***/ "./src/styles/title.js":
/*!*****************************!*\
  !*** ./src/styles/title.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleStyle\": () => (/* binding */ titleStyle)\n/* harmony export */ });\nconst titleStyle = `\r\n\tfont-size: 24px;\r\n\tfont-weight: 700;\r\n\tcolor: #8A2BE2;\r\n\tmargin: 16px auto\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/title.js?");

/***/ }),

/***/ "./src/styles/wrapper.js":
/*!*******************************!*\
  !*** ./src/styles/wrapper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapperStyle\": () => (/* binding */ wrapperStyle)\n/* harmony export */ });\nconst wrapperStyle = `\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 100;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow: hidden;\r\n\tbackground: rgba(204, 204, 204, 0.8);\r\n\tfont-family: Arial;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/wrapper.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;