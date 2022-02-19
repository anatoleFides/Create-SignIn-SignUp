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

/***/ "./node_modules/js-sha256/src/sha256.js":
/*!**********************************************!*\
  !*** ./node_modules/js-sha256/src/sha256.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/**\r\n * [js-sha256]{@link https://github.com/emn178/js-sha256}\r\n *\r\n * @version 0.9.0\r\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\r\n * @copyright Chen, Yi-Cyuan 2014-2017\r\n * @license MIT\r\n */\r\n/*jslint bitwise: true */\r\n(function () {\r\n  'use strict';\r\n\r\n  var ERROR = 'input is invalid type';\r\n  var WINDOW = typeof window === 'object';\r\n  var root = WINDOW ? window : {};\r\n  if (root.JS_SHA256_NO_WINDOW) {\r\n    WINDOW = false;\r\n  }\r\n  var WEB_WORKER = !WINDOW && typeof self === 'object';\r\n  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;\r\n  if (NODE_JS) {\r\n    root = __webpack_require__.g;\r\n  } else if (WEB_WORKER) {\r\n    root = self;\r\n  }\r\n  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && \"object\" === 'object' && module.exports;\r\n  var AMD =  true && __webpack_require__.amdO;\r\n  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';\r\n  var HEX_CHARS = '0123456789abcdef'.split('');\r\n  var EXTRA = [-2147483648, 8388608, 32768, 128];\r\n  var SHIFT = [24, 16, 8, 0];\r\n  var K = [\r\n    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,\r\n    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,\r\n    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,\r\n    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,\r\n    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,\r\n    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,\r\n    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,\r\n    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2\r\n  ];\r\n  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];\r\n\r\n  var blocks = [];\r\n\r\n  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {\r\n    Array.isArray = function (obj) {\r\n      return Object.prototype.toString.call(obj) === '[object Array]';\r\n    };\r\n  }\r\n\r\n  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {\r\n    ArrayBuffer.isView = function (obj) {\r\n      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;\r\n    };\r\n  }\r\n\r\n  var createOutputMethod = function (outputType, is224) {\r\n    return function (message) {\r\n      return new Sha256(is224, true).update(message)[outputType]();\r\n    };\r\n  };\r\n\r\n  var createMethod = function (is224) {\r\n    var method = createOutputMethod('hex', is224);\r\n    if (NODE_JS) {\r\n      method = nodeWrap(method, is224);\r\n    }\r\n    method.create = function () {\r\n      return new Sha256(is224);\r\n    };\r\n    method.update = function (message) {\r\n      return method.create().update(message);\r\n    };\r\n    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {\r\n      var type = OUTPUT_TYPES[i];\r\n      method[type] = createOutputMethod(type, is224);\r\n    }\r\n    return method;\r\n  };\r\n\r\n  var nodeWrap = function (method, is224) {\r\n    var crypto = eval(\"require('crypto')\");\r\n    var Buffer = eval(\"require('buffer').Buffer\");\r\n    var algorithm = is224 ? 'sha224' : 'sha256';\r\n    var nodeMethod = function (message) {\r\n      if (typeof message === 'string') {\r\n        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');\r\n      } else {\r\n        if (message === null || message === undefined) {\r\n          throw new Error(ERROR);\r\n        } else if (message.constructor === ArrayBuffer) {\r\n          message = new Uint8Array(message);\r\n        }\r\n      }\r\n      if (Array.isArray(message) || ArrayBuffer.isView(message) ||\r\n        message.constructor === Buffer) {\r\n        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');\r\n      } else {\r\n        return method(message);\r\n      }\r\n    };\r\n    return nodeMethod;\r\n  };\r\n\r\n  var createHmacOutputMethod = function (outputType, is224) {\r\n    return function (key, message) {\r\n      return new HmacSha256(key, is224, true).update(message)[outputType]();\r\n    };\r\n  };\r\n\r\n  var createHmacMethod = function (is224) {\r\n    var method = createHmacOutputMethod('hex', is224);\r\n    method.create = function (key) {\r\n      return new HmacSha256(key, is224);\r\n    };\r\n    method.update = function (key, message) {\r\n      return method.create(key).update(message);\r\n    };\r\n    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {\r\n      var type = OUTPUT_TYPES[i];\r\n      method[type] = createHmacOutputMethod(type, is224);\r\n    }\r\n    return method;\r\n  };\r\n\r\n  function Sha256(is224, sharedMemory) {\r\n    if (sharedMemory) {\r\n      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =\r\n        blocks[4] = blocks[5] = blocks[6] = blocks[7] =\r\n        blocks[8] = blocks[9] = blocks[10] = blocks[11] =\r\n        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\r\n      this.blocks = blocks;\r\n    } else {\r\n      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\r\n    }\r\n\r\n    if (is224) {\r\n      this.h0 = 0xc1059ed8;\r\n      this.h1 = 0x367cd507;\r\n      this.h2 = 0x3070dd17;\r\n      this.h3 = 0xf70e5939;\r\n      this.h4 = 0xffc00b31;\r\n      this.h5 = 0x68581511;\r\n      this.h6 = 0x64f98fa7;\r\n      this.h7 = 0xbefa4fa4;\r\n    } else { // 256\r\n      this.h0 = 0x6a09e667;\r\n      this.h1 = 0xbb67ae85;\r\n      this.h2 = 0x3c6ef372;\r\n      this.h3 = 0xa54ff53a;\r\n      this.h4 = 0x510e527f;\r\n      this.h5 = 0x9b05688c;\r\n      this.h6 = 0x1f83d9ab;\r\n      this.h7 = 0x5be0cd19;\r\n    }\r\n\r\n    this.block = this.start = this.bytes = this.hBytes = 0;\r\n    this.finalized = this.hashed = false;\r\n    this.first = true;\r\n    this.is224 = is224;\r\n  }\r\n\r\n  Sha256.prototype.update = function (message) {\r\n    if (this.finalized) {\r\n      return;\r\n    }\r\n    var notString, type = typeof message;\r\n    if (type !== 'string') {\r\n      if (type === 'object') {\r\n        if (message === null) {\r\n          throw new Error(ERROR);\r\n        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {\r\n          message = new Uint8Array(message);\r\n        } else if (!Array.isArray(message)) {\r\n          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {\r\n            throw new Error(ERROR);\r\n          }\r\n        }\r\n      } else {\r\n        throw new Error(ERROR);\r\n      }\r\n      notString = true;\r\n    }\r\n    var code, index = 0, i, length = message.length, blocks = this.blocks;\r\n\r\n    while (index < length) {\r\n      if (this.hashed) {\r\n        this.hashed = false;\r\n        blocks[0] = this.block;\r\n        blocks[16] = blocks[1] = blocks[2] = blocks[3] =\r\n          blocks[4] = blocks[5] = blocks[6] = blocks[7] =\r\n          blocks[8] = blocks[9] = blocks[10] = blocks[11] =\r\n          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\r\n      }\r\n\r\n      if (notString) {\r\n        for (i = this.start; index < length && i < 64; ++index) {\r\n          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];\r\n        }\r\n      } else {\r\n        for (i = this.start; index < length && i < 64; ++index) {\r\n          code = message.charCodeAt(index);\r\n          if (code < 0x80) {\r\n            blocks[i >> 2] |= code << SHIFT[i++ & 3];\r\n          } else if (code < 0x800) {\r\n            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\r\n          } else if (code < 0xd800 || code >= 0xe000) {\r\n            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\r\n          } else {\r\n            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));\r\n            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];\r\n            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];\r\n          }\r\n        }\r\n      }\r\n\r\n      this.lastByteIndex = i;\r\n      this.bytes += i - this.start;\r\n      if (i >= 64) {\r\n        this.block = blocks[16];\r\n        this.start = i - 64;\r\n        this.hash();\r\n        this.hashed = true;\r\n      } else {\r\n        this.start = i;\r\n      }\r\n    }\r\n    if (this.bytes > 4294967295) {\r\n      this.hBytes += this.bytes / 4294967296 << 0;\r\n      this.bytes = this.bytes % 4294967296;\r\n    }\r\n    return this;\r\n  };\r\n\r\n  Sha256.prototype.finalize = function () {\r\n    if (this.finalized) {\r\n      return;\r\n    }\r\n    this.finalized = true;\r\n    var blocks = this.blocks, i = this.lastByteIndex;\r\n    blocks[16] = this.block;\r\n    blocks[i >> 2] |= EXTRA[i & 3];\r\n    this.block = blocks[16];\r\n    if (i >= 56) {\r\n      if (!this.hashed) {\r\n        this.hash();\r\n      }\r\n      blocks[0] = this.block;\r\n      blocks[16] = blocks[1] = blocks[2] = blocks[3] =\r\n        blocks[4] = blocks[5] = blocks[6] = blocks[7] =\r\n        blocks[8] = blocks[9] = blocks[10] = blocks[11] =\r\n        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\r\n    }\r\n    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;\r\n    blocks[15] = this.bytes << 3;\r\n    this.hash();\r\n  };\r\n\r\n  Sha256.prototype.hash = function () {\r\n    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,\r\n      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;\r\n\r\n    for (j = 16; j < 64; ++j) {\r\n      // rightrotate\r\n      t1 = blocks[j - 15];\r\n      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);\r\n      t1 = blocks[j - 2];\r\n      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);\r\n      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;\r\n    }\r\n\r\n    bc = b & c;\r\n    for (j = 0; j < 64; j += 4) {\r\n      if (this.first) {\r\n        if (this.is224) {\r\n          ab = 300032;\r\n          t1 = blocks[0] - 1413257819;\r\n          h = t1 - 150054599 << 0;\r\n          d = t1 + 24177077 << 0;\r\n        } else {\r\n          ab = 704751109;\r\n          t1 = blocks[0] - 210244248;\r\n          h = t1 - 1521486534 << 0;\r\n          d = t1 + 143694565 << 0;\r\n        }\r\n        this.first = false;\r\n      } else {\r\n        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));\r\n        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));\r\n        ab = a & b;\r\n        maj = ab ^ (a & c) ^ bc;\r\n        ch = (e & f) ^ (~e & g);\r\n        t1 = h + s1 + ch + K[j] + blocks[j];\r\n        t2 = s0 + maj;\r\n        h = d + t1 << 0;\r\n        d = t1 + t2 << 0;\r\n      }\r\n      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));\r\n      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));\r\n      da = d & a;\r\n      maj = da ^ (d & b) ^ ab;\r\n      ch = (h & e) ^ (~h & f);\r\n      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];\r\n      t2 = s0 + maj;\r\n      g = c + t1 << 0;\r\n      c = t1 + t2 << 0;\r\n      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));\r\n      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));\r\n      cd = c & d;\r\n      maj = cd ^ (c & a) ^ da;\r\n      ch = (g & h) ^ (~g & e);\r\n      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];\r\n      t2 = s0 + maj;\r\n      f = b + t1 << 0;\r\n      b = t1 + t2 << 0;\r\n      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));\r\n      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));\r\n      bc = b & c;\r\n      maj = bc ^ (b & d) ^ cd;\r\n      ch = (f & g) ^ (~f & h);\r\n      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];\r\n      t2 = s0 + maj;\r\n      e = a + t1 << 0;\r\n      a = t1 + t2 << 0;\r\n    }\r\n\r\n    this.h0 = this.h0 + a << 0;\r\n    this.h1 = this.h1 + b << 0;\r\n    this.h2 = this.h2 + c << 0;\r\n    this.h3 = this.h3 + d << 0;\r\n    this.h4 = this.h4 + e << 0;\r\n    this.h5 = this.h5 + f << 0;\r\n    this.h6 = this.h6 + g << 0;\r\n    this.h7 = this.h7 + h << 0;\r\n  };\r\n\r\n  Sha256.prototype.hex = function () {\r\n    this.finalize();\r\n\r\n    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,\r\n      h6 = this.h6, h7 = this.h7;\r\n\r\n    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +\r\n      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +\r\n      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +\r\n      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +\r\n      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +\r\n      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +\r\n      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +\r\n      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +\r\n      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +\r\n      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];\r\n    if (!this.is224) {\r\n      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +\r\n        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +\r\n        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +\r\n        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];\r\n    }\r\n    return hex;\r\n  };\r\n\r\n  Sha256.prototype.toString = Sha256.prototype.hex;\r\n\r\n  Sha256.prototype.digest = function () {\r\n    this.finalize();\r\n\r\n    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,\r\n      h6 = this.h6, h7 = this.h7;\r\n\r\n    var arr = [\r\n      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,\r\n      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,\r\n      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,\r\n      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,\r\n      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,\r\n      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,\r\n      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF\r\n    ];\r\n    if (!this.is224) {\r\n      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);\r\n    }\r\n    return arr;\r\n  };\r\n\r\n  Sha256.prototype.array = Sha256.prototype.digest;\r\n\r\n  Sha256.prototype.arrayBuffer = function () {\r\n    this.finalize();\r\n\r\n    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);\r\n    var dataView = new DataView(buffer);\r\n    dataView.setUint32(0, this.h0);\r\n    dataView.setUint32(4, this.h1);\r\n    dataView.setUint32(8, this.h2);\r\n    dataView.setUint32(12, this.h3);\r\n    dataView.setUint32(16, this.h4);\r\n    dataView.setUint32(20, this.h5);\r\n    dataView.setUint32(24, this.h6);\r\n    if (!this.is224) {\r\n      dataView.setUint32(28, this.h7);\r\n    }\r\n    return buffer;\r\n  };\r\n\r\n  function HmacSha256(key, is224, sharedMemory) {\r\n    var i, type = typeof key;\r\n    if (type === 'string') {\r\n      var bytes = [], length = key.length, index = 0, code;\r\n      for (i = 0; i < length; ++i) {\r\n        code = key.charCodeAt(i);\r\n        if (code < 0x80) {\r\n          bytes[index++] = code;\r\n        } else if (code < 0x800) {\r\n          bytes[index++] = (0xc0 | (code >> 6));\r\n          bytes[index++] = (0x80 | (code & 0x3f));\r\n        } else if (code < 0xd800 || code >= 0xe000) {\r\n          bytes[index++] = (0xe0 | (code >> 12));\r\n          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));\r\n          bytes[index++] = (0x80 | (code & 0x3f));\r\n        } else {\r\n          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));\r\n          bytes[index++] = (0xf0 | (code >> 18));\r\n          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));\r\n          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));\r\n          bytes[index++] = (0x80 | (code & 0x3f));\r\n        }\r\n      }\r\n      key = bytes;\r\n    } else {\r\n      if (type === 'object') {\r\n        if (key === null) {\r\n          throw new Error(ERROR);\r\n        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {\r\n          key = new Uint8Array(key);\r\n        } else if (!Array.isArray(key)) {\r\n          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {\r\n            throw new Error(ERROR);\r\n          }\r\n        }\r\n      } else {\r\n        throw new Error(ERROR);\r\n      }\r\n    }\r\n\r\n    if (key.length > 64) {\r\n      key = (new Sha256(is224, true)).update(key).array();\r\n    }\r\n\r\n    var oKeyPad = [], iKeyPad = [];\r\n    for (i = 0; i < 64; ++i) {\r\n      var b = key[i] || 0;\r\n      oKeyPad[i] = 0x5c ^ b;\r\n      iKeyPad[i] = 0x36 ^ b;\r\n    }\r\n\r\n    Sha256.call(this, is224, sharedMemory);\r\n\r\n    this.update(iKeyPad);\r\n    this.oKeyPad = oKeyPad;\r\n    this.inner = true;\r\n    this.sharedMemory = sharedMemory;\r\n  }\r\n  HmacSha256.prototype = new Sha256();\r\n\r\n  HmacSha256.prototype.finalize = function () {\r\n    Sha256.prototype.finalize.call(this);\r\n    if (this.inner) {\r\n      this.inner = false;\r\n      var innerHash = this.array();\r\n      Sha256.call(this, this.is224, this.sharedMemory);\r\n      this.update(this.oKeyPad);\r\n      this.update(innerHash);\r\n      Sha256.prototype.finalize.call(this);\r\n    }\r\n  };\r\n\r\n  var exports = createMethod();\r\n  exports.sha256 = exports;\r\n  exports.sha224 = createMethod(true);\r\n  exports.sha256.hmac = createHmacMethod();\r\n  exports.sha224.hmac = createHmacMethod(true);\r\n\r\n  if (COMMON_JS) {\r\n    module.exports = exports;\r\n  } else {\r\n    root.sha256 = exports.sha256;\r\n    root.sha224 = exports.sha224;\r\n    if (AMD) {\r\n      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n        return exports;\r\n      }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n    }\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://create-signin-signup/./node_modules/js-sha256/src/sha256.js?");

/***/ }),

/***/ "./src/assets/default-avatar.js":
/*!**************************************!*\
  !*** ./src/assets/default-avatar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultPicture\": () => (/* binding */ defaultPicture),\n/* harmony export */   \"getDefaultAvatar\": () => (/* binding */ getDefaultAvatar)\n/* harmony export */ });\nconst defaultPicture = 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'\r\n\r\nconst getDefaultAvatar = (function () {\r\n  let avatar = defaultPicture\r\n  return function (value) {\r\n    if (value) {\r\n      avatar = value\r\n    } else return avatar\r\n  }\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/default-avatar.js?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* reexport safe */ _logo_img__WEBPACK_IMPORTED_MODULE_0__.logoImg),\n/* harmony export */   \"getDefaultAvatar\": () => (/* reexport safe */ _default_avatar__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)\n/* harmony export */ });\n/* harmony import */ var _logo_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-img */ \"./src/assets/logo-img.js\");\n/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-avatar */ \"./src/assets/default-avatar.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/logo-img.js":
/*!********************************!*\
  !*** ./src/assets/logo-img.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoImg\": () => (/* binding */ logoImg)\n/* harmony export */ });\nconst logoImg = 'https://avatarko.ru/img/kartinka/33/cherep_fantastika_feniks_33560.jpg'\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/assets/logo-img.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n\r\n    const shadow = this.attachShadow({ mode: 'closed' })\r\n\r\n    shadow.innerHTML = _styles__WEBPACK_IMPORTED_MODULE_0__.outlineStyle\r\n\r\n    const wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n    })\r\n\r\n    const container = Object.assign(this.createElem(wrapper, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n    })\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.btnClose)(this, container, _helpers__WEBPACK_IMPORTED_MODULE_3__.closeSignIn)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.logoElem)(this, container)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.titleElem)(this, container)\r\n\r\n    const forms__body = Object.assign(this.createElem(container, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n    })\r\n\r\n    const [login, password] = [\r\n      ['text', 'Login', 'Login not found'],\r\n      ['password', 'Password', 'Invalid passvord']\r\n    ].map(function (item) {\r\n      const elem__container = this.createElem(forms__body, 'div')\r\n\r\n      const elem = Object.assign(this.createElem(elem__container, 'input'), {\r\n        type: item[0],\r\n        placeholder: item[1],\r\n        style: _styles__WEBPACK_IMPORTED_MODULE_0__.inputStyle\r\n      })\r\n\r\n      const error__message = Object.assign(this.createElem(elem__container, 'p'), {\r\n        textContent: item[2],\r\n        style: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n      })\r\n\r\n      return elem\r\n    }.bind(this))\r\n\r\n    login.onchange = function (event) {\r\n      ;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.loginHandler)(event.target.value)\r\n      ;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testLoginSignIn)(event.target, (0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.loginHandler)())\r\n    }\r\n\r\n    password.oninput = function (event) {\r\n      ;(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.testPassordSignIn)(event.target, event.target.value)\r\n    }\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_2__.forgotPasElem)(this, container) \r\n\r\n    window[Symbol.for('listInputSignIn')] = [login, password]\r\n\r\n    window[Symbol.for('buttonSignIn')] = Object.assign(this.createElem(container, 'button'), {\r\n      innerText: 'Sign In',\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle,\r\n      disabled: true,\r\n      onclick: async function (event) {\r\n        await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.authorizeUser)({\r\n          login: login.value,\r\n          password: password.value\r\n        })\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nSignIn.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_3__.createElem\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\nconst elemSignIn = document.createElement('sign-in')\r\nelemSignIn.id = 'sign-in'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignIn);\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow({ mode: 'closed' })\r\n\r\n    shadow.innerHTML = _styles__WEBPACK_IMPORTED_MODULE_0__.outlineStyle\r\n\r\n    const wrapper = Object.assign(this.createElem(shadow, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.wrapperStyle\r\n    })\r\n\r\n    const container = Object.assign(this.createElem(wrapper, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.containerStyle\r\n    })\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.btnClose)(this, container, _helpers__WEBPACK_IMPORTED_MODULE_2__.closeSignUp)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.logoElem)(this, container)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.titleElem)(this, container)\r\n\r\n    const forms__body = Object.assign(this.createElem(container, 'div'), {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.formsBodyStyle\r\n    })\r\n\r\n    const elems__body = this.createElem(forms__body, 'div')\r\n\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getInputs)(this, elems__body)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.avatarElem)(this, forms__body)\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.avatarMessageErrorElem)(this, forms__body)\r\n\r\n    _helpers__WEBPACK_IMPORTED_MODULE_2__.login.onchange = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateLogin)(event.target.value)\r\n\r\n\r\n    // const [name, telephone, email, password] = [\r\n    //   validateName(event.target.value),\r\n    //   validateEmail(event.target.value),\r\n    //   validateEmail(event.target.value),\r\n    //   validatePassword(event.target.value)\r\n    // ].forEach(item => { oninput: (event) => item })\r\n\r\n    _helpers__WEBPACK_IMPORTED_MODULE_2__.name.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateName)(event.target.value)\r\n\r\n    _helpers__WEBPACK_IMPORTED_MODULE_2__.telephone.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePhone)(event.target.value)\r\n\r\n    _helpers__WEBPACK_IMPORTED_MODULE_2__.email.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(event.target.value)\r\n\r\n    _helpers__WEBPACK_IMPORTED_MODULE_2__.password.oninput = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.validatePassword)(event.target.value)\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_1__.avatar.onchange = (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.readFile)(event.target.files[0], window[Symbol.for('photo')])\r\n\r\n    ;(0,_elements__WEBPACK_IMPORTED_MODULE_1__.buttonElem)(this, container)\r\n  }\r\n}\r\n\r\nSignUp.prototype.createElem = _helpers__WEBPACK_IMPORTED_MODULE_2__.createElem\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\nconst elemSignUp = document.createElement('sign-up')\r\nelemSignUp.id = 'sign-up'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elemSignUp);\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/components/sign-up.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarHandler\": () => (/* binding */ avatarHandler)\n/* harmony export */ });\nconst avatarHandler = (function () {\r\n  let avatar = ''\r\n  return function (property) {\r\n  if (!property) return avatar\r\n    avatar = property\r\n  }\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/avatar-handler.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginHandler\": () => (/* binding */ loginHandler)\n/* harmony export */ });\nconst loginHandler = (function () {\r\n  let login = ''\r\n  return function (property) {\r\n    if (!property) return login\r\n\r\n    login = property\r\n  }\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/login-handler.js?");

/***/ }),

/***/ "./src/data-handlers/password-handler.js":
/*!***********************************************!*\
  !*** ./src/data-handlers/password-handler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordHandler\": () => (/* binding */ passwordHandler)\n/* harmony export */ });\nconst passwordHandler = (function () {\r\n  let password = ''\r\n  return function (property) {\r\n    if (!property) return password\r\n    password = property\r\n  }\r\n})()\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/data-handlers/password-handler.js?");

/***/ }),

/***/ "./src/elements/avatarElem.js":
/*!************************************!*\
  !*** ./src/elements/avatarElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarElem\": () => (/* binding */ avatarElem),\n/* harmony export */   \"avatar\": () => (/* binding */ avatar)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet avatar\r\n\r\nconst avatarElem = (webElem, container) => {\r\n  const avatar__container = Object.assign(webElem.createElem(container, 'div'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarContainerStyle\r\n  })\r\n\r\n  avatar = Object.assign(webElem.createElem(avatar__container, 'input'), {\r\n    type: 'file',\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarStyle,\r\n    disabled: true\r\n  })\r\n\r\n  const avatar__body = Object.assign(webElem.createElem(avatar__container, 'div'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.avatarBodyStyle\r\n  })\r\n\r\n  window[Symbol.for('photo')] = Object.assign(webElem.createElem(avatar__body, 'img'), {\r\n    src: (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)(),\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.imageStyle\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/avatarElem.js?");

/***/ }),

/***/ "./src/elements/avatarMessageErrorElem.js":
/*!************************************************!*\
  !*** ./src/elements/avatarMessageErrorElem.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarMessageErrorElem\": () => (/* binding */ avatarMessageErrorElem),\n/* harmony export */   \"avatarMessageError\": () => (/* binding */ avatarMessageError)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nlet avatarMessageError\r\n\r\nconst avatarMessageErrorElem = (webElem, container) => {\r\n  avatarMessageError = Object.assign(webElem.createElem(container, 'p'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle,\r\n    innerText: 'Invalid file type'\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/avatarMessageErrorElem.js?");

/***/ }),

/***/ "./src/elements/btnClose.js":
/*!**********************************!*\
  !*** ./src/elements/btnClose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnClose\": () => (/* binding */ btnClose)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst btnClose = (webElem, container, funcClose) => {\r\n  const close = Object.assign(webElem.createElem(container, 'div'), {\r\n    innerText: 'x',\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonCloseStyle,\r\n    onclick: funcClose\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/btnClose.js?");

/***/ }),

/***/ "./src/elements/buttonElem.js":
/*!************************************!*\
  !*** ./src/elements/buttonElem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonElem\": () => (/* binding */ buttonElem),\n/* harmony export */   \"button\": () => (/* binding */ button)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha256 */ \"./node_modules/js-sha256/src/sha256.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet button\r\n\r\nconst buttonElem = (webElem, container) => {\r\n  button = Object.assign(webElem.createElem(container, 'button'), {\r\n    disabled: true,\r\n    innerText: 'Sign Up',\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.buttonDisabledStyle,\r\n    onclick: async function (event) {\r\n      await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createUser) (_helpers__WEBPACK_IMPORTED_MODULE_0__.login.value, {\r\n        name: _helpers__WEBPACK_IMPORTED_MODULE_0__.name.value,\r\n        telephone: _helpers__WEBPACK_IMPORTED_MODULE_0__.telephone.value,\r\n        email: _helpers__WEBPACK_IMPORTED_MODULE_0__.email.value,\r\n        password: (0,js_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(_helpers__WEBPACK_IMPORTED_MODULE_0__.password.value),\r\n        avatar: window[Symbol.for('photo')].src\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/buttonElem.js?");

/***/ }),

/***/ "./src/elements/forgotPasElem.js":
/*!***************************************!*\
  !*** ./src/elements/forgotPasElem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forgotPasElem\": () => (/* binding */ forgotPasElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst forgotPasElem = (webElem, container) => {\r\n  Object.assign(webElem.createElem(container, 'a'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.forgotPasswordStyle,\r\n    innerText: 'Forgot password?',\r\n  })\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/forgotPasElem.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoElem\": () => (/* binding */ logoElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logoElem = (webElem, container) => {\r\n  const logo = Object.assign(webElem.createElem(container, 'div'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.logoStyle\r\n  })\r\n\r\n  const logo__link = Object.assign(webElem.createElem(logo, 'a'), {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.logoLinkStyle\r\n  })\r\n\r\n  const logo__img = Object.assign(webElem.createElem(logo__link, 'img'), {\r\n    src: _assets__WEBPACK_IMPORTED_MODULE_1__.logoImg,\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.imageStyle\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/logotipElem.js?");

/***/ }),

/***/ "./src/elements/titleElem.js":
/*!***********************************!*\
  !*** ./src/elements/titleElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleElem\": () => (/* binding */ titleElem)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst titleElem = (webElem, container) => {\r\n  const title = Object.assign(webElem.createElem(container, 'h2'), {\r\n    innerText: 'Sign up to Fantasy World',\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.titleStyle\r\n  })\r\n}\n\n//# sourceURL=webpack://create-signin-signup/./src/elements/titleElem.js?");

/***/ }),

/***/ "./src/helpers/authorizeUser.js":
/*!**************************************!*\
  !*** ./src/helpers/authorizeUser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorizeUser\": () => (/* binding */ authorizeUser)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n\r\n\r\nconst authorizeUser = async objectAutorize => {\r\n  document.getElementById(\"not_authorize\").classList.remove('uzer-not_active')\r\n  document.getElementById(\"authorize\").classList.add('user-active')\r\n  document.getElementById(\"user-name\").textContent = objectAutorize.login\r\n  document.getElementById(\"user-avatar\").src = (0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.avatarHandler)()\r\n\r\n  document.getElementsByTagName('sign-in')[0].remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/authorizeUser.js?");

/***/ }),

/***/ "./src/helpers/closeSignIn.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignIn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignIn\": () => (/* binding */ closeSignIn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignIn = (event) => {\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignIn)()\r\n  document.getElementById(\"sign-in\").remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignIn.js?");

/***/ }),

/***/ "./src/helpers/closeSignUp.js":
/*!************************************!*\
  !*** ./src/helpers/closeSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeSignUp\": () => (/* binding */ closeSignUp)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\nconst closeSignUp = (event) => {\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.resetInputSignUp)()\r\n  document.getElementById(\"sign-up\").remove()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/closeSignUp.js?");

/***/ }),

/***/ "./src/helpers/createElem.js":
/*!***********************************!*\
  !*** ./src/helpers/createElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nconst createElem = (сontainerName, tagName) => { \r\n  return сontainerName.appendChild(document.createElement(tagName)) \r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createElem.js?");

/***/ }),

/***/ "./src/helpers/createUser.js":
/*!***********************************!*\
  !*** ./src/helpers/createUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nconst createUser = async (login, user) => {\r\n  const response = await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify(user)\r\n  })\r\n\r\n  console.log(response.status)\r\n\r\n  if (response.status === 200) {\r\n    (0,___WEBPACK_IMPORTED_MODULE_1__.resetInputSignUp)()\r\n\r\n    document.getElementsByTagName('sign-up')[0].remove()\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/createUser.js?");

/***/ }),

/***/ "./src/helpers/getInputs.js":
/*!**********************************!*\
  !*** ./src/helpers/getInputs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInputs\": () => (/* binding */ getInputs),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"telephone\": () => (/* binding */ telephone),\n/* harmony export */   \"email\": () => (/* binding */ email),\n/* harmony export */   \"password\": () => (/* binding */ password)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nlet login, name, telephone, email, password\r\n\r\nfunction getInputs (webElem, container) {\r\n  [login, name, telephone, email, password] = [\r\n    ['text', 'Login', 'Invalid login format', false],\r\n    ['text', 'User name', 'Invalid name format', true],\r\n    ['tel', '(0XX)XXX-XX-XX', 'Invalid telephone format', true],\r\n    ['email', 'e-mail', 'Invalid e-mail format', true],\r\n    ['password', 'Password', 'Invalid password format', true]\r\n\t].map(function (item) {\r\n    const elem__container = webElem.createElem(container, 'div')\r\n\r\n    const elem = Object.assign(webElem.createElem(elem__container, 'input'), {\r\n      type: item[0],\r\n      placeholder: item[1],\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_1__.inputStyle,\r\n      disabled: item[3]\r\n    })\r\n\r\n    const error__message = Object.assign(webElem.createElem(elem__container, 'p'), {\r\n      textContent: item[2],\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageStyle\r\n    })\r\n\r\n    return elem\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/getInputs.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCloseBurgerMenu\": () => (/* binding */ openCloseBurgerMenu)\n/* harmony export */ });\nconst openCloseBurgerMenu = () => {\r\n  document.getElementById(\"burger-menu\").classList.toggle('open')\r\n  document.getElementById(\"header-menu\").classList.toggle('active')\r\n  document.getElementsByTagName('body')[0].classList.toggle('hidden')\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/openCloseBurgerMenu.js?");

/***/ }),

/***/ "./src/helpers/readFile.js":
/*!*********************************!*\
  !*** ./src/helpers/readFile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst readFile = (file, elem) => {\r\n  const errorMessages = [\r\n    'Invalid file',\r\n    'Invalid elemHTML',\r\n    'Invalid file type',\r\n    'Image size exceeds 300 kB'\r\n  ]\r\n\r\n  if (!(file instanceof File)) return (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[0])\r\n\r\n  if (elem?.nodeType !== 1) return (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[1])\r\n\r\n  if (file.type.indexOf('image')) {\r\n    (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[2])\r\n\r\n    return (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(_elements__WEBPACK_IMPORTED_MODULE_1__.button, false)\r\n  } else {\r\n    _elements__WEBPACK_IMPORTED_MODULE_1__.avatarMessageError.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n\r\n    if (file.size > 300000) {\r\n      (0,___WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessages[3])\r\n\r\n    return (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(_elements__WEBPACK_IMPORTED_MODULE_1__.button, false)\r\n    }\r\n    const reader = new FileReader\r\n    reader.onload = function (event) {\r\n      elem.src = event.target.result\r\n    }\r\n    reader.readAsDataURL(file)\r\n\r\n    return (0,___WEBPACK_IMPORTED_MODULE_2__.showDisabledButton)(_elements__WEBPACK_IMPORTED_MODULE_1__.button, true)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/readFile.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignIn.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignIn\": () => (/* binding */ resetInputSignIn)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst resetInputSignIn = () => {\r\n  window[Symbol.for('listInputSignIn')].forEach(input => {\r\n    Object.assign(input, {\r\n      value: ''\r\n    })\r\n    Object.assign(input.nextElementSibling, {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignIn.js?");

/***/ }),

/***/ "./src/helpers/resetInputSignUp.js":
/*!*****************************************!*\
  !*** ./src/helpers/resetInputSignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetInputSignUp\": () => (/* binding */ resetInputSignUp)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst resetInputSignUp = () => {\r\n  [___WEBPACK_IMPORTED_MODULE_2__.login, ___WEBPACK_IMPORTED_MODULE_2__.name, ___WEBPACK_IMPORTED_MODULE_2__.telephone, ___WEBPACK_IMPORTED_MODULE_2__.email, ___WEBPACK_IMPORTED_MODULE_2__.password]\r\n    .forEach(input => {\r\n      Object.assign(input, {\r\n        value: ''\r\n      })\r\n      Object.assign(input.nextElementSibling, {\r\n        style: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n      })\r\n    })\r\n\r\n  window[Symbol.for('photo')].src = (0,_assets__WEBPACK_IMPORTED_MODULE_1__.getDefaultAvatar)()\r\n  _elements__WEBPACK_IMPORTED_MODULE_3__.avatarMessageErrorElem.style = _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/resetInputSignUp.js?");

/***/ }),

/***/ "./src/helpers/setErrorMessage.js":
/*!****************************************!*\
  !*** ./src/helpers/setErrorMessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setErrorMessage\": () => (/* binding */ setErrorMessage)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst setErrorMessage = (inputElem, validationResult) => {\r\n  inputElem.nextElementSibling.style = validationResult \r\n    ? _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle : _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageActiveStyle\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/setErrorMessage.js?");

/***/ }),

/***/ "./src/helpers/showDisabledButton.js":
/*!*******************************************!*\
  !*** ./src/helpers/showDisabledButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showDisabledButton\": () => (/* binding */ showDisabledButton)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst showDisabledButton = (object, propBoolean) => {\r\n  propBoolean ? Object.assign(object, {\r\n      disabled: false,\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonSubmitStyle\r\n    }) : Object.assign(object, {\r\n        disabled: true,\r\n        style: _styles__WEBPACK_IMPORTED_MODULE_0__.buttonDisabledStyle\r\n      })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/showDisabledButton.js?");

/***/ }),

/***/ "./src/helpers/showError.js":
/*!**********************************!*\
  !*** ./src/helpers/showError.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\nconst showError = (message) => {\r\n  Object.assign(_elements__WEBPACK_IMPORTED_MODULE_0__.avatarMessageError, {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle,\r\n    textContent: message\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/showError.js?");

/***/ }),

/***/ "./src/helpers/signOut.js":
/*!********************************!*\
  !*** ./src/helpers/signOut.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n\r\n\r\nconst signOut = () => {\r\n  document.getElementById(\"authorize\").classList.remove('user-active')\r\n  document.getElementById(\"not_authorize\").classList.add('uzer-not_active')\r\n  document.getElementById(\"user-name\").textContent = 'User name'\r\n  document.getElementById(\"user-avatar\").src = (0,_assets__WEBPACK_IMPORTED_MODULE_0__.getDefaultAvatar)()\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/signOut.js?");

/***/ }),

/***/ "./src/helpers/testLoginSignIn.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignIn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignIn\": () => (/* binding */ testLoginSignIn)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst testLoginSignIn = async (inputElem, login) => {\r\n  const response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\r\n  console.log(response)\r\n  console.log(response.password)\r\n\r\n  ;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.passwordHandler)(response.password)\r\n\r\n  ;(0,_data_handlers__WEBPACK_IMPORTED_MODULE_1__.avatarHandler)(response.avatar)\r\n\r\n  return response.error\r\n    ? Object.assign(inputElem.nextElementSibling, {\r\n      style: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageActiveStyle\r\n    }) : Object.assign(inputElem.nextElementSibling, {\r\n        style: _styles__WEBPACK_IMPORTED_MODULE_2__.errorMessageStyle\r\n      })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignIn.js?");

/***/ }),

/***/ "./src/helpers/testLoginSignUp.js":
/*!****************************************!*\
  !*** ./src/helpers/testLoginSignUp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testLoginSignUp\": () => (/* binding */ testLoginSignUp)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\n\r\nconst testLoginSignUp = async (inputElem, login) => {\r\n  const response = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.apiHost}/user/${login}`)).json()\r\n\r\n  return response.error \r\n    ? Object.assign(inputElem.nextElementSibling, {\r\n        textContent: 'Invalid login format'\r\n      }) : Object.assign(inputElem.nextElementSibling, {\r\n             textContent: 'login exists',\r\n             style: _styles__WEBPACK_IMPORTED_MODULE_1__.errorMessageActiveStyle\r\n           })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testLoginSignUp.js?");

/***/ }),

/***/ "./src/helpers/testPassordSignIn.js":
/*!******************************************!*\
  !*** ./src/helpers/testPassordSignIn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testPassordSignIn\": () => (/* binding */ testPassordSignIn)\n/* harmony export */ });\n/* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-handlers */ \"./src/data-handlers/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha256 */ \"./node_modules/js-sha256/src/sha256.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst testPassordSignIn = async (inputElem, property) => {\r\n  const result = (0,_data_handlers__WEBPACK_IMPORTED_MODULE_0__.passwordHandler)() === (0,js_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(property)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_1__.setErrorMessage)(inputElem, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_1__.showDisabledButton)(window[Symbol.for('buttonSignIn')], result)\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/testPassordSignIn.js?");

/***/ }),

/***/ "./src/helpers/validateEmail.js":
/*!**************************************!*\
  !*** ./src/helpers/validateEmail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateEmail = (value) => {\r\n  const result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.emailRule))\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.email, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.email, value)\r\n\r\n  ___WEBPACK_IMPORTED_MODULE_0__.password.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmail.js?");

/***/ }),

/***/ "./src/helpers/validateEmptyString.js":
/*!********************************************!*\
  !*** ./src/helpers/validateEmptyString.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmptyString\": () => (/* binding */ validateEmptyString)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\r\n\r\nconst validateEmptyString = (inputElem, property) => {\r\n  property.length === 0 && Object.assign(inputElem.nextElementSibling, {\r\n    style: _styles__WEBPACK_IMPORTED_MODULE_0__.errorMessageStyle\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateEmptyString.js?");

/***/ }),

/***/ "./src/helpers/validateLogin.js":
/*!**************************************!*\
  !*** ./src/helpers/validateLogin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateLogin\": () => (/* binding */ validateLogin)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateLogin = (value) => {\r\n  const result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.loginRule))\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.login, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.testLoginSignUp)(___WEBPACK_IMPORTED_MODULE_0__.login, value)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.login, value)\r\n\r\n  ___WEBPACK_IMPORTED_MODULE_0__.name.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateLogin.js?");

/***/ }),

/***/ "./src/helpers/validateName.js":
/*!*************************************!*\
  !*** ./src/helpers/validateName.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateName\": () => (/* binding */ validateName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validateName = (value) => {\r\n  const result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.nameRule))\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.name, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.name, value)\r\n\r\n  ___WEBPACK_IMPORTED_MODULE_0__.telephone.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validateName.js?");

/***/ }),

/***/ "./src/helpers/validatePassword.js":
/*!*****************************************!*\
  !*** ./src/helpers/validatePassword.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./src/elements/index.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ \"./node_modules/js-sha256/src/sha256.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst validatePassword = (value) => {\r\n  const result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.passwordRule))\r\n\r\n  ___WEBPACK_IMPORTED_MODULE_0__.password.style.color = result ? '#090' : '#f00'\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.password, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.password, value)\r\n\r\n  _elements__WEBPACK_IMPORTED_MODULE_2__.avatar.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePassword.js?");

/***/ }),

/***/ "./src/helpers/validatePhone.js":
/*!**************************************!*\
  !*** ./src/helpers/validatePhone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePhone\": () => (/* binding */ validatePhone)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst validatePhone = (value) => {\r\n  const result = Boolean(value.match(_configs__WEBPACK_IMPORTED_MODULE_1__.telephoneRule))\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.setErrorMessage)(___WEBPACK_IMPORTED_MODULE_0__.telephone, result)\r\n\r\n  ;(0,___WEBPACK_IMPORTED_MODULE_0__.validateEmptyString)(___WEBPACK_IMPORTED_MODULE_0__.telephone, value)\r\n\r\n  ___WEBPACK_IMPORTED_MODULE_0__.email.disabled = !result\r\n}\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/helpers/validatePhone.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarBodyStyle\": () => (/* binding */ avatarBodyStyle)\n/* harmony export */ });\nconst avatarBodyStyle = `\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: 4;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-body.js?");

/***/ }),

/***/ "./src/styles/avatar-container.js":
/*!****************************************!*\
  !*** ./src/styles/avatar-container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarContainerStyle\": () => (/* binding */ avatarContainerStyle)\n/* harmony export */ });\nconst avatarContainerStyle = `\r\n  position: relative;\r\n  margin: 0 auto;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  border: 1px solid #696969;\r\n  overflow: hidden;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar-container.js?");

/***/ }),

/***/ "./src/styles/avatar.js":
/*!******************************!*\
  !*** ./src/styles/avatar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarStyle\": () => (/* binding */ avatarStyle)\n/* harmony export */ });\nconst avatarStyle = `\r\n  opacity: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: 8;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/avatar.js?");

/***/ }),

/***/ "./src/styles/button-close.js":
/*!************************************!*\
  !*** ./src/styles/button-close.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonCloseStyle\": () => (/* binding */ buttonCloseStyle)\n/* harmony export */ });\nconst buttonCloseStyle = `\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  padding: 0 4px;\r\n  background: #8A2BE2;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  border-radius: 4px;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-close.js?");

/***/ }),

/***/ "./src/styles/button-disabled.js":
/*!***************************************!*\
  !*** ./src/styles/button-disabled.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonDisabledStyle\": () => (/* binding */ buttonDisabledStyle)\n/* harmony export */ });\nconst buttonDisabledStyle = `\r\n  padding: 8px; \r\n  margin: 4px 0 0 0;\r\n  margin: 0 auto; \r\n  background: rgba(112, 128, 144, 0.7); \r\n  color: #fff; \r\n  border: none; \r\n  border-radius: 4px; \r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  width: 50%;\r\n  opacity: 0.4;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-disabled.js?");

/***/ }),

/***/ "./src/styles/button-submit.js":
/*!*************************************!*\
  !*** ./src/styles/button-submit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonSubmitStyle\": () => (/* binding */ buttonSubmitStyle)\n/* harmony export */ });\nconst buttonSubmitStyle = `\r\n  padding: 8px; \r\n  margin: 4px 0 0 0;\r\n  margin: 0 auto; \r\n  background: #696969; \r\n  color: #fff; \r\n  border: none; \r\n  border-radius: 4px; \r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  width: 50%;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/button-submit.js?");

/***/ }),

/***/ "./src/styles/container.js":
/*!*********************************!*\
  !*** ./src/styles/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containerStyle\": () => (/* binding */ containerStyle)\n/* harmony export */ });\nconst containerStyle = `\r\n  max-width: 320px;\r\n  box-shadow: 2px 2px 8px #000;\r\n  background: rgba(240, 255, 255, 0.8);\r\n  border-radius: 8px;\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/container.js?");

/***/ }),

/***/ "./src/styles/error-message-active.js":
/*!********************************************!*\
  !*** ./src/styles/error-message-active.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageActiveStyle\": () => (/* binding */ errorMessageActiveStyle)\n/* harmony export */ });\nconst errorMessageActiveStyle = `\r\n  color: #f00;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n  visibility: visible;\r\n  padding: 2px 0;\r\n  transition: all .2s ease;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message-active.js?");

/***/ }),

/***/ "./src/styles/error-message.js":
/*!*************************************!*\
  !*** ./src/styles/error-message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMessageStyle\": () => (/* binding */ errorMessageStyle)\n/* harmony export */ });\nconst errorMessageStyle = `\r\n  color: #f00;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n  padding: 2px 0;\r\n  visibility: hidden;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/error-message.js?");

/***/ }),

/***/ "./src/styles/forgot-password.js":
/*!***************************************!*\
  !*** ./src/styles/forgot-password.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forgotPasswordStyle\": () => (/* binding */ forgotPasswordStyle)\n/* harmony export */ });\nconst forgotPasswordStyle = `\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #87CEEB;\r\n  margin: 0 0 16px 0;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forgot-password.js?");

/***/ }),

/***/ "./src/styles/forms-body.js":
/*!**********************************!*\
  !*** ./src/styles/forms-body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formsBodyStyle\": () => (/* binding */ formsBodyStyle)\n/* harmony export */ });\nconst formsBodyStyle = `\r\n  width: 100%;\r\n  position: relative;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/forms-body.js?");

/***/ }),

/***/ "./src/styles/image.js":
/*!*****************************!*\
  !*** ./src/styles/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageStyle\": () => (/* binding */ imageStyle)\n/* harmony export */ });\nconst imageStyle = `\r\n  display: block;\r\n  max-width: 100%;\r\n`\r\n\n\n//# sourceURL=webpack://create-signin-signup/./src/styles/image.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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