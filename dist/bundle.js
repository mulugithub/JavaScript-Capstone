/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/loadCharacters.js":
/*!***************************************!*\
  !*** ./src/modules/loadCharacters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addComment: () => (/* binding */ addComment),
/* harmony export */   addLike: () => (/* binding */ addLike),
/* harmony export */   fetchCharacterDetails: () => (/* binding */ fetchCharacterDetails),
/* harmony export */   fetchCharacters: () => (/* binding */ fetchCharacters),
/* harmony export */   fetchComments: () => (/* binding */ fetchComments),
/* harmony export */   fetchLikesFromInvolvementAPI: () => (/* binding */ fetchLikesFromInvolvementAPI),
/* harmony export */   initialize: () => (/* binding */ initialize),
/* harmony export */   loadCharacters: () => (/* binding */ loadCharacters),
/* harmony export */   newCharacter: () => (/* binding */ newCharacter),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),
/* harmony export */   updateModalContent: () => (/* binding */ updateModalContent),
/* harmony export */   updateUIWithLikeCounts: () => (/* binding */ updateUIWithLikeCounts)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* global bootstrap */
var myAppId = '3rhiucgu7avOD8E9hBq1';
var newCharacter = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = {
            name: 'My Character'
          };
          _context.next = 3;
          return fetch('https://rickandmortyapi.com/api/character', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(function (response) {
            return response.json();
          }).then(function (result) {
            var myId = result.result.split(': ')[1];
            console.log("Character created successfully! Character ID:".concat(myId));
          })["catch"](function (error) {
            return error;
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function newCharacter() {
    return _ref.apply(this, arguments);
  };
}();
var fetchCharacters = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch('https://rickandmortyapi.com/api/character');
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", data.results);
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", []);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function fetchCharacters() {
    return _ref2.apply(this, arguments);
  };
}();
var updateLocalStorage = function updateLocalStorage(characterId, likeCount) {
  var storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
  storedLikes[characterId] = likeCount;
  localStorage.setItem('likes', JSON.stringify(storedLikes));
};
var addLike = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(characterId) {
    var response, likeCountElement, currentLikes, newLikes;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(myAppId, "/likes"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              item_id: characterId
            })
          });
        case 3:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 6;
            break;
          }
          throw new Error('Failed to add like');
        case 6:
          likeCountElement = document.querySelector("[data-id=\"".concat(characterId, "\"] + .like-count"));
          if (likeCountElement) {
            currentLikes = parseInt(likeCountElement.textContent, 10);
            newLikes = currentLikes + 1;
            likeCountElement.textContent = "".concat(newLikes, " Like").concat(newLikes === 1 ? '' : 's');
            updateLocalStorage(characterId, newLikes);
          }
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error adding like');
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function addLike(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var fetchLikesFromInvolvementAPI = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(characters) {
    var likes, characterIds;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          likes = {};
          characterIds = characters.map(function (character) {
            return character.id;
          });
          _context5.next = 4;
          return Promise.all(characterIds.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(characterId) {
              var response, data;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(myAppId, "/likes?item_id=").concat(characterId));
                  case 3:
                    response = _context4.sent;
                    if (!response.ok) {
                      _context4.next = 9;
                      break;
                    }
                    _context4.next = 7;
                    return response.json();
                  case 7:
                    data = _context4.sent;
                    likes[characterId] = data.likes;
                  case 9:
                    _context4.next = 14;
                    break;
                  case 11:
                    _context4.prev = 11;
                    _context4.t0 = _context4["catch"](0);
                    throw new Error("Error fetching likes for character ".concat(characterId, ": ").concat(_context4.t0));
                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[0, 11]]);
            }));
            return function (_x3) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 4:
          return _context5.abrupt("return", likes);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function fetchLikesFromInvolvementAPI(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var fetchCharacterDetails = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(characterId) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return fetch("https://rickandmortyapi.com/api/character/".concat(characterId));
        case 3:
          response = _context6.sent;
          _context6.next = 6;
          return response.json();
        case 6:
          data = _context6.sent;
          return _context6.abrupt("return", {
            image: data.image,
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
            comments: ['Comment 1', 'Comment 2', 'Comment 3']
          });
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", null);
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function fetchCharacterDetails(_x4) {
    return _ref6.apply(this, arguments);
  };
}();
var updateUIWithLikeCounts = function updateUIWithLikeCounts(likes) {
  var likeCountElements = document.querySelectorAll('.like-count');
  likeCountElements.forEach(function (likeCountElement) {
    var _likeCountElement$par;
    var characterId = (_likeCountElement$par = likeCountElement.parentElement.querySelector('.fa-heart')) === null || _likeCountElement$par === void 0 ? void 0 : _likeCountElement$par.getAttribute('data-id');
    var likeCount = likes[characterId] || 0;
    likeCountElement.textContent = "".concat(likeCount, " Like").concat(likeCount === 1 ? '' : 's');
  });
};
var cWithDetails = [];
var loadCharacters = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var charactersContainer, characters, _yield$Promise$all, _yield$Promise$all2, storedLikes, likes, mergedLikes, characterPromises;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          charactersContainer = document.querySelector('.all-characters');
          _context8.next = 3;
          return fetchCharacters();
        case 3:
          characters = _context8.sent;
          _context8.next = 6;
          return Promise.all([JSON.parse(localStorage.getItem('likes')) || {}, fetchLikesFromInvolvementAPI(characters)]);
        case 6:
          _yield$Promise$all = _context8.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          storedLikes = _yield$Promise$all2[0];
          likes = _yield$Promise$all2[1];
          mergedLikes = _objectSpread(_objectSpread({}, likes), storedLikes);
          updateUIWithLikeCounts(mergedLikes);
          charactersContainer.innerHTML = '';
          characterPromises = characters.map( /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(character) {
              var characterDetails;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return fetchCharacterDetails(character.id);
                  case 2:
                    characterDetails = _context7.sent;
                    character.comments = characterDetails.comments;
                    return _context7.abrupt("return", character);
                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x5) {
              return _ref8.apply(this, arguments);
            };
          }());
          _context8.next = 16;
          return Promise.all(characterPromises);
        case 16:
          cWithDetails = _context8.sent;
          cWithDetails.forEach(function (character) {
            var characterElement = document.createElement('div');
            characterElement.className = 'character-container';
            characterElement.innerHTML = "\n        <img class=\"character\" src=\"".concat(character.image, "\" alt=\"Image of - ").concat(character.name, "\">\n        <div class=\"below-image\">\n          <p class=\"character-name\">").concat(character.name, "</p>\n          <div class=\"likes\">\n            <i class=\"fa-regular fa-heart\" data-id=\"").concat(character.id, "\"></i>\n            <p class=\"like-count\">").concat(mergedLikes[character.id] || 0, " Like").concat(mergedLikes[character.id] === 0 ? '' : 's', "</p>\n          </div>\n        </div>\n        <div class=\"reactions\">\n          <span class=\"comment\" data-id=\"").concat(character.id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-container\">Comments</span>\n          <span class=\"reservation\">Reservations</span>\n        </div>\n      ");
            charactersContainer.appendChild(characterElement);
          });
          return _context8.abrupt("return", cWithDetails);
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function loadCharacters() {
    return _ref7.apply(this, arguments);
  };
}();
var countCharacters = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var characters, characterCountElement;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return fetchCharacters();
        case 2:
          characters = _context9.sent;
          characterCountElement = document.getElementById('character-count');
          characterCountElement.textContent = "Characters(".concat(characters.length, ")");
        case 5:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function countCharacters() {
    return _ref9.apply(this, arguments);
  };
}();
var countComments = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
    var commentCountElement;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          commentCountElement = document.getElementById('comment-counter');
          commentCountElement.textContent = "Comments(".concat(data.length < 1 ? 0 : data.length, ")");
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function countComments(_x6) {
    return _ref10.apply(this, arguments);
  };
}();
var fetchComments = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(appId, characterId) {
    var queryString, url, response, data, errorMessage;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          queryString = "?item_id=".concat(characterId);
          url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/comments").concat(queryString);
          _context11.next = 5;
          return fetch(url);
        case 5:
          response = _context11.sent;
          if (!response.ok) {
            _context11.next = 12;
            break;
          }
          _context11.next = 9;
          return response.json();
        case 9:
          data = _context11.sent;
          countComments(data);
          return _context11.abrupt("return", data.map(function (comment) {
            var formattedDate = new Date(comment.creation_date).toLocaleDateString();
            return "".concat(formattedDate, " ").concat(comment.username, ": ").concat(comment.comment);
          }));
        case 12:
          _context11.next = 14;
          return response.text();
        case 14:
          errorMessage = _context11.sent;
          throw new Error("Failed to fetch comments: ".concat(errorMessage));
        case 18:
          _context11.prev = 18;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", []);
        case 21:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 18]]);
  }));
  return function fetchComments(_x7, _x8) {
    return _ref11.apply(this, arguments);
  };
}();
var updateModalContent = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(character) {
    var _character$origin;
    var modalBody, characterContainer, features1, features2, commentsList, updatedComments;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          modalBody = document.querySelector('.modal-body');
          if (modalBody) {
            _context12.next = 3;
            break;
          }
          throw new Error('Modal body not found');
        case 3:
          characterContainer = modalBody.querySelector('.character-content');
          if (characterContainer) {
            _context12.next = 6;
            break;
          }
          throw new Error('Character container not found');
        case 6:
          features1 = modalBody.querySelector('.features-1');
          if (features1) {
            _context12.next = 9;
            break;
          }
          throw new Error('Features 1 container not found');
        case 9:
          features2 = modalBody.querySelector('.features-2');
          if (features2) {
            _context12.next = 12;
            break;
          }
          throw new Error('Features 2 container not found');
        case 12:
          commentsList = modalBody.querySelector('.comment-body');
          if (commentsList) {
            _context12.next = 15;
            break;
          }
          throw new Error('Comments list not found');
        case 15:
          characterContainer.querySelector('img').src = character.image;
          characterContainer.querySelector('p').textContent = character.name;
          features1.innerHTML = "\n    <p><b>Status:</b> ".concat(character.status || 'Unknown', "</p>\n    <p><b>Species:</b> ").concat(character.species || 'Unknown', "</p>\n  ");
          features2.innerHTML = "\n    <p><b>Gender:</b> ".concat(character.gender || 'Unknown', "</p>\n    <p><b>Origin:</b> ").concat(((_character$origin = character.origin) === null || _character$origin === void 0 ? void 0 : _character$origin.name) || 'Unknown', "</p>\n  ");
          _context12.prev = 19;
          _context12.next = 22;
          return fetchComments(myAppId, character.id);
        case 22:
          updatedComments = _context12.sent;
          commentsList.innerHTML = '';
          updatedComments.forEach(function (comment) {
            var commentItem = document.createElement('li');
            commentItem.className = 'comment-';
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
          });
          _context12.next = 30;
          break;
        case 27:
          _context12.prev = 27;
          _context12.t0 = _context12["catch"](19);
          throw new Error('Error updating comments:', _context12.t0);
        case 30:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[19, 27]]);
  }));
  return function updateModalContent(_x9) {
    return _ref12.apply(this, arguments);
  };
}();
var addComment = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(characterId, name, comment) {
    var response;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(myAppId, "/comments"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              item_id: characterId,
              username: name,
              comment: comment
            })
          });
        case 3:
          response = _context13.sent;
          if (response.ok) {
            _context13.next = 6;
            break;
          }
          throw new Error('Failed to add comment');
        case 6:
          _context13.next = 11;
          break;
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          throw new Error('Error adding comment');
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 8]]);
  }));
  return function addComment(_x10, _x11, _x12) {
    return _ref13.apply(this, arguments);
  };
}();
var button = document.getElementById('button');
var nameInput = document.querySelector('.nameInput');
var insight = document.querySelector('.insightInput');
var insertComment = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(event) {
    var commentButton, characterId, modalBody, updatedComments, commentList;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          commentButton = event.target;
          characterId = commentButton.getAttribute('data-id');
          modalBody = document.querySelector('.modal-body');
          if (modalBody) {
            _context14.next = 5;
            break;
          }
          throw new Error('Modal body not found');
        case 5:
          _context14.prev = 5;
          _context14.next = 8;
          return addComment(characterId, nameInput.value, insight.value);
        case 8:
          _context14.next = 10;
          return fetchComments(myAppId, characterId);
        case 10:
          updatedComments = _context14.sent;
          commentList = modalBody.querySelector('.comment-body');
          if (commentList) {
            _context14.next = 14;
            break;
          }
          throw new Error('Comments list not found');
        case 14:
          commentList.innerHTML = '';
          updatedComments.forEach(function (comment) {
            var commentItem = document.createElement('li');
            commentItem.className = 'comment-';
            commentItem.textContent = comment;
            commentList.appendChild(commentItem);
          });
          _context14.next = 21;
          break;
        case 18:
          _context14.prev = 18;
          _context14.t0 = _context14["catch"](5);
          throw new Error('Error adding comment:', _context14.t0);
        case 21:
          nameInput.value = '';
          insight.value = '';
        case 23:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[5, 18]]);
  }));
  return function insertComment(_x13) {
    return _ref14.apply(this, arguments);
  };
}();
button.addEventListener('click', insertComment);
var isInitialized = false;
var modalBody;
var modal;
var initialize = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var charactersContainer;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (isInitialized) {
            _context16.next = 8;
            break;
          }
          _context16.next = 3;
          return loadCharacters();
        case 3:
          countCharacters();
          charactersContainer = document.querySelector('.all-characters');
          charactersContainer.addEventListener('click', /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(event) {
              var characterId, _characterId, card, commentsList, updatedComments;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    if (!event.target.classList.contains('fa-heart')) {
                      _context15.next = 10;
                      break;
                    }
                    event.stopImmediatePropagation();
                    characterId = event.target.getAttribute('data-id');
                    event.target.classList.add('disabled');
                    _context15.prev = 4;
                    _context15.next = 7;
                    return addLike(characterId);
                  case 7:
                    _context15.prev = 7;
                    event.target.classList.remove('disabled');
                    return _context15.finish(7);
                  case 10:
                    if (!event.target.classList.contains('comment')) {
                      _context15.next = 38;
                      break;
                    }
                    _characterId = event.target.getAttribute('data-id');
                    button.setAttribute('data-id', _characterId);
                    if (!_characterId) {
                      _context15.next = 37;
                      break;
                    }
                    card = cWithDetails.find(function (card) {
                      return card.id.toString() === _characterId;
                    });
                    if (!card) {
                      _context15.next = 35;
                      break;
                    }
                    _context15.next = 18;
                    return updateModalContent(card);
                  case 18:
                    modalBody = document.querySelector('.modal-body');
                    if (modalBody) {
                      _context15.next = 21;
                      break;
                    }
                    throw new Error('Modal body not found');
                  case 21:
                    commentsList = modalBody.querySelector('.comment-body');
                    if (!commentsList) {
                      _context15.next = 34;
                      break;
                    }
                    _context15.prev = 23;
                    _context15.next = 26;
                    return fetchComments(myAppId, _characterId);
                  case 26:
                    updatedComments = _context15.sent;
                    commentsList.innerHTML = '';
                    updatedComments.forEach(function (comment) {
                      var commentItem = document.createElement('li');
                      commentItem.className = 'comment-';
                      commentItem.textContent = comment;
                      commentsList.appendChild(commentItem);
                    });
                    _context15.next = 34;
                    break;
                  case 31:
                    _context15.prev = 31;
                    _context15.t0 = _context15["catch"](23);
                    throw new Error('Error updating comments:', _context15.t0);
                  case 34:
                    modal.show();
                  case 35:
                    _context15.next = 38;
                    break;
                  case 37:
                    throw new Error('Character ID not found in clicked element');
                  case 38:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, null, [[4,, 7, 10], [23, 31]]);
            }));
            return function (_x14) {
              return _ref16.apply(this, arguments);
            };
          }());
          modal = new bootstrap.Modal(document.getElementById('modal-container'));
          isInitialized = true;
        case 8:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function initialize() {
    return _ref15.apply(this, arguments);
  };
}();
window.addEventListener('load', initialize);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadCharacters.js */ "./src/modules/loadCharacters.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var charactersContainer, commentSpans;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.newCharacter)();
      case 3:
        _context3.next = 5;
        return (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.loadCharacters)();
      case 5:
        charactersContainer = document.querySelector('.all-characters');
        charactersContainer.addEventListener('click', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
            var characterId;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!event.target.classList.contains('fa-heart')) {
                    _context.next = 7;
                    break;
                  }
                  event.stopImmediatePropagation();
                  characterId = event.target.getAttribute('data-id');
                  event.target.classList.add('disabled');
                  _context.next = 6;
                  return (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(characterId);
                case 6:
                  event.target.classList.remove('disabled');
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
        _context3.next = 12;
        break;
      case 9:
        _context3.prev = 9;
        _context3.t0 = _context3["catch"](0);
        throw new Error('Error:', _context3.t0);
      case 12:
        commentSpans = document.querySelectorAll('.comment');
        commentSpans.forEach(function (commentSpan) {
          commentSpan.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var characterId, character, comments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  characterId = commentSpan.getAttribute('data-id');
                  _context2.next = 3;
                  return (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.fetchCharacterDetails)(characterId);
                case 3:
                  character = _context2.sent;
                  if (!character) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 7;
                  return (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)('bteUMr9caK7j5e9t91ze', characterId);
                case 7:
                  comments = _context2.sent;
                  character.comments = comments;
                  (0,_modules_loadCharacters_js__WEBPACK_IMPORTED_MODULE_0__.updateModalContent)(character);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        });
      case 14:
      case "end":
        return _context3.stop();
    }
  }, _callee3, null, [[0, 9]]);
})));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map