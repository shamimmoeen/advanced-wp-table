/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@reach/dialog/dist/dialog.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/dialog/dist/dialog.esm.js ***!
  \*******************************************************/
/*! exports provided: default, Dialog, DialogContent, DialogOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverlay", function() { return DialogOverlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/portal */ "./node_modules/@reach/portal/dist/portal.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-remove-scroll */ "./node_modules/react-remove-scroll/dist/es2015/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var overlayPropTypes = {
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  allowPinchZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogOverlay(_ref, forwardedRef) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose(_ref, ["isOpen"]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["checkStyles"])("dialog");
  }, []);
  return isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-reach-dialog-wrapper": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogInner, Object.assign({
    ref: forwardedRef
  }, props))) : null;
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes, {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */


var DialogInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref2$onDismiss,
      onMouseDown = _ref2.onMouseDown,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref2, ["allowPinchZoom", "initialFocusRef", "onClick", "onDismiss", "onMouseDown", "onKeyDown"]);

  var mouseDownTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var overlayNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["useForkedRef"])(overlayNode, forwardedRef);
  var activateFocusLock = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__["RemoveScroll"], {
    allowPinchZoom: allowPinchZoom
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": "",

    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, handleClick),
    onKeyDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onKeyDown, handleKeyDown),
    onMouseDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onMouseDown, handleMouseDown)
  }))));
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogContent(_ref3, forwardedRef) {
  var onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref3, ["onClick", "onKeyDown"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});

if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialog
 */


var Dialog = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function Dialog(_ref4, forwardedRef) {
  var isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref4$onDismiss,
      initialFocusRef = _ref4.initialFocusRef,
      allowPinchZoom = _ref4.allowPinchZoom,
      props = _objectWithoutPropertiesLoose(_ref4, ["isOpen", "onDismiss", "initialFocusRef", "allowPinchZoom"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogOverlay, {
    initialFocusRef: initialFocusRef,
    allowPinchZoom: allowPinchZoom,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogContent, Object.assign({
    ref: forwardedRef
  }, props)));
});

if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}

function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["getOwnerDocument"])(dialogNode) || document;

  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) === null || _dialogNode$parentNod === void 0 ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) === null || _dialogNode$parentNod2 === void 0 ? void 0 : _dialogNode$parentNod2.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Dialog);



/***/ }),

/***/ "./node_modules/@reach/dialog/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@reach/dialog/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@reach/dialog/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@reach/portal/dist/portal.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/portal/dist/portal.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reacttraining.com/reach-ui/portal
 * @see Source https://github.com/reach/reach-ui/tree/master/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */
/**
 * Portal
 *
 * @see Docs https://reacttraining.com/reach-ui/portal#portal
 */

var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  var mountNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var portalNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    // It's possible that the content we are portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(children, portalNode.current) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    ref: mountNode
  });
};

if (true) {
  Portal.displayName = "Portal";
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);


/***/ }),

/***/ "./node_modules/@reach/utils/dist/utils.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@reach/utils/dist/utils.esm.js ***!
  \*****************************************************/
/*! exports provided: assignRef, boolOrBoolString, canUseDOM, checkStyles, cloneValidElement, createNamedContext, forwardRefWithAs, getElementComputedStyle, getOwnerDocument, getScrollbarOffset, isBoolean, isFunction, isNumber, isRightClick, isString, makeId, noop, ponyfillGlobal, stateToAttributeString, useConstant, useControlledSwitchWarning, useFocusChange, useForkedRef, useIsomorphicLayoutEffect, usePrevious, useStateLogger, useUpdateEffect, wrapEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolOrBoolString", function() { return boolOrBoolString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStyles", function() { return checkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneValidElement", function() { return cloneValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamedContext", function() { return createNamedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRefWithAs", function() { return forwardRefWithAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return getElementComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerDocument", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarOffset", function() { return getScrollbarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightClick", function() { return isRightClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeId", function() { return makeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return ponyfillGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateToAttributeString", function() { return stateToAttributeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstant", function() { return useConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledSwitchWarning", function() { return useControlledSwitchWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusChange", function() { return useFocusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForkedRef", function() { return useForkedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateLogger", function() { return useStateLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return useUpdateEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapEvent", function() { return wrapEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable no-restricted-globals, eqeqeq,  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect;
var checkedPkgs = {};
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */
// @ts-ignore

var checkStyles = function checkStyles(packageName) {
  return void packageName;
};

if (true) {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;

  checkStyles = function checkStyles(packageName) {
    // only check once per package
    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
/**
 * Ponyfill for the global object in some environments.
 *
 * @link https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */

var ponyfillGlobal = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self :
/*#__PURE__*/
// eslint-disable-next-line no-new-func
Function("return this")();
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Checks true|"true" vs false|"false"
 *
 * @param value
 */

function boolOrBoolString(value) {
  return value === "true" ? true : isBoolean(value) ? value : false;
}
function canUseDOM() {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
}
/**
 * Type-safe clone element
 *
 * @param element
 * @param props
 * @param children
 */

function cloneValidElement(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(element) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(void 0, [element, props].concat(children)) : element;
}
function createNamedContext(name, defaultValue) {
  var Ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 *
 * TODO: Eventually we should probably just try to get the type defs above
 * working across the board, but ain't nobody got time for that mess!
 *
 * @param Comp
 */

function forwardRefWithAs(comp) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(comp);
}
/**
 * Get a computed style value by property, backwards compatible with IE
 * @param element
 * @param styleProp
 */

function getElementComputedStyle(element, styleProp) {
  var y = null;
  var doc = getOwnerDocument(element);

  if (element.currentStyle) {
    y = element.currentStyle[styleProp];
  } else if (doc && doc.defaultView && isFunction(doc.defaultView.getComputedStyle)) {
    y = doc.defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
  }

  return y;
}
/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
}
/**
 * Get the scrollbar offset distance.
 */

function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {}

  return 0;
}
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */

function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */

function isNumber(value) {
  return typeof value === "number";
}
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */

function isRightClick(nativeEvent) {
  return nativeEvent.which === 3 || nativeEvent.button === 2;
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */

function makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */

function noop() {}
/**
 * Convert our state strings for HTML data attributes.
 * No need for a fancy kebab-caser here, we know what our state strings are!
 *
 * @param state
 */

function stateToAttributeString(state) {
  return String(state).replace(/([\s_]+)/g, "-").toLowerCase();
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlPropValue
 * @param controlPropName
 * @param componentName
 */

function useControlledSwitchWarning(controlPropValue, controlPropName, componentName) {
  /*
   * Determine whether or not the component is controlled and warn the developer
   * if this changes unexpectedly.
   */
  var isControlled = controlPropValue != null;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isControlled),
      wasControlled = _useRef.current;

  var effect = noop;

  if (true) {
    effect = function effect() {
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from uncontrolled to be controlled. Reach UI components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from controlled to be uncontrolled. Reach UI components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [componentName, controlPropName, isControlled]);
}
/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}
/**
 * Detect when focus changes in our document.
 *
 * @param handleChange
 * @param when
 * @param ownerDocument
 */

function useFocusChange(handleChange, when, ownerDocument) {
  if (handleChange === void 0) {
    handleChange = console.log;
  }

  if (when === void 0) {
    when = "focus";
  }

  if (ownerDocument === void 0) {
    ownerDocument = document;
  }

  var lastActiveElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(ownerDocument.activeElement);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    lastActiveElement.current = ownerDocument.activeElement;

    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }

    ownerDocument.addEventListener(when, onChange, true);
    return function () {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useForkedRef() {
  for (var _len3 = arguments.length, refs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    refs[_key3] = arguments[_key3];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */

function useUpdateEffect(effect, deps) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  var effect = noop;

  if (true) {
    if (DEBUG) {
      effect = function effect() {
        console.group("State Updated");
        console.log("%c" + state, "font-weight: normal; font-size: 120%; font-style: italic;");
        console.groupEnd();
      };
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [state]);
}
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@reach/dialog/styles.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@reach/dialog/styles.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* This code is subject to LICENSE in root of this repository */\n/* Used to detect in JavaScript if apps have loaded styles or not. */\n:root {\n  --reach-dialog: 1; }\n\n[data-reach-dialog-overlay] {\n  background: rgba(0, 0, 0, 0.33);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto; }\n\n[data-reach-dialog-content] {\n  width: 50vw;\n  margin: 10vh auto;\n  background: white;\n  padding: 2rem;\n  outline: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Toastify__toast-container {\n  z-index: 9999;\n  -webkit-transform: translate3d(0, 0, 9999px);\n  position: fixed;\n  padding: 4px;\n  width: 320px;\n  box-sizing: border-box;\n  color: #fff; }\n\n.Toastify__toast-container--top-left {\n  top: 1em;\n  left: 1em; }\n\n.Toastify__toast-container--top-center {\n  top: 1em;\n  left: 50%;\n  margin-left: -160px; }\n\n.Toastify__toast-container--top-right {\n  top: 1em;\n  right: 1em; }\n\n.Toastify__toast-container--bottom-left {\n  bottom: 1em;\n  left: 1em; }\n\n.Toastify__toast-container--bottom-center {\n  bottom: 1em;\n  left: 50%;\n  margin-left: -160px; }\n\n.Toastify__toast-container--bottom-right {\n  bottom: 1em;\n  right: 1em; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast-container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0; }\n  .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {\n    top: 0; }\n  .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {\n    bottom: 0; }\n  .Toastify__toast-container--rtl {\n    right: 0;\n    left: initial; } }\n\n.Toastify__toast {\n  position: relative;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 8px;\n  border-radius: 1px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  max-height: 800px;\n  overflow: hidden;\n  font-family: sans-serif;\n  cursor: pointer;\n  direction: ltr; }\n\n.Toastify__toast--rtl {\n  direction: rtl; }\n\n.Toastify__toast--default {\n  background: #fff;\n  color: #aaa; }\n\n.Toastify__toast--info {\n  background: #3498db; }\n\n.Toastify__toast--success {\n  background: #07bc0c; }\n\n.Toastify__toast--warning {\n  background: #f1c40f; }\n\n.Toastify__toast--error {\n  background: #e74c3c; }\n\n.Toastify__toast-body {\n  margin: auto 0;\n  -ms-flex: 1;\n  flex: 1; }\n\n@media only screen and (max-width: 480px) {\n  .Toastify__toast {\n    margin-bottom: 0; } }\n\n.Toastify__close-button {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: 0.3s ease;\n  -ms-flex-item-align: start;\n  align-self: flex-start; }\n\n.Toastify__close-button--default {\n  color: #000;\n  opacity: 0.3; }\n\n.Toastify__close-button:hover, .Toastify__close-button:focus {\n  opacity: 1; }\n\n@keyframes Toastify__trackProgress {\n  0% {\n    transform: scaleX(1); }\n  100% {\n    transform: scaleX(0); } }\n\n.Toastify__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n  opacity: 0.7;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left; }\n\n.Toastify__progress-bar--animated {\n  animation: Toastify__trackProgress linear 1 forwards; }\n\n.Toastify__progress-bar--controlled {\n  transition: transform .2s; }\n\n.Toastify__progress-bar--rtl {\n  right: 0;\n  left: initial;\n  transform-origin: right; }\n\n.Toastify__progress-bar--default {\n  background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }\n\n@keyframes Toastify__bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    transform: translate3d(5px, 0, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes Toastify__bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    transform: translate3d(0, -5px, 0); }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes Toastify__bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    transform: translate3d(0, 5px, 0); }\n  to {\n    transform: none; } }\n\n@keyframes Toastify__bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0); }\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0); } }\n\n.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {\n  animation-name: Toastify__bounceInLeft; }\n\n.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {\n  animation-name: Toastify__bounceInRight; }\n\n.Toastify__bounce-enter--top-center {\n  animation-name: Toastify__bounceInDown; }\n\n.Toastify__bounce-enter--bottom-center {\n  animation-name: Toastify__bounceInUp; }\n\n.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {\n  animation-name: Toastify__bounceOutLeft; }\n\n.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {\n  animation-name: Toastify__bounceOutRight; }\n\n.Toastify__bounce-exit--top-center {\n  animation-name: Toastify__bounceOutUp; }\n\n.Toastify__bounce-exit--bottom-center {\n  animation-name: Toastify__bounceOutDown; }\n\n@keyframes Toastify__zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes Toastify__zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.Toastify__zoom-enter {\n  animation-name: Toastify__zoomIn; }\n\n.Toastify__zoom-exit {\n  animation-name: Toastify__zoomOut; }\n\n@keyframes Toastify__flipIn {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes Toastify__flipOut {\n  from {\n    transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.Toastify__flip-enter {\n  animation-name: Toastify__flipIn; }\n\n.Toastify__flip-exit {\n  animation-name: Toastify__flipOut; }\n\n@keyframes Toastify__slideInRight {\n  from {\n    transform: translate3d(110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInLeft {\n  from {\n    transform: translate3d(-110%, 0, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInUp {\n  from {\n    transform: translate3d(0, 110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideInDown {\n  from {\n    transform: translate3d(0, -110%, 0);\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes Toastify__slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(110%, 0, 0); } }\n\n@keyframes Toastify__slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(-110%, 0, 0); } }\n\n@keyframes Toastify__slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 500px, 0); } }\n\n@keyframes Toastify__slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -500px, 0); } }\n\n.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {\n  animation-name: Toastify__slideInLeft; }\n\n.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {\n  animation-name: Toastify__slideInRight; }\n\n.Toastify__slide-enter--top-center {\n  animation-name: Toastify__slideInDown; }\n\n.Toastify__slide-enter--bottom-center {\n  animation-name: Toastify__slideInUp; }\n\n.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {\n  animation-name: Toastify__slideOutLeft; }\n\n.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {\n  animation-name: Toastify__slideOutRight; }\n\n.Toastify__slide-exit--top-center {\n  animation-name: Toastify__slideOutUp; }\n\n.Toastify__slide-exit--bottom-center {\n  animation-name: Toastify__slideOutDown; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".advanced-wp-table-admin #wpcontent {\n  background-color: #f1f1f1; }\n\n.advanced-wp-table-wrapper button:focus {\n  box-shadow: none !important;\n  outline-style: none !important; }\n\n.advanced-wp-table-wrapper a:focus {\n  box-shadow: none;\n  outline-style: none; }\n\n.advanced-wp-table-header .advanced-wp-table-header-inner {\n  align-items: center;\n  display: flex;\n  margin: 0 0 1em; }\n  .advanced-wp-table-header .advanced-wp-table-header-inner h1 {\n    margin: 0;\n    padding: 0; }\n  .advanced-wp-table-header .advanced-wp-table-header-inner .button {\n    align-items: center;\n    border-radius: 2px;\n    display: inline-flex;\n    font-weight: 600;\n    height: 25px;\n    line-height: 1;\n    margin: 0 0 0 10px;\n    min-height: 25px; }\n    .advanced-wp-table-header .advanced-wp-table-header-inner .button .dashicons {\n      margin-right: 5px; }\n\n.advanced-wp-table-fixed-header-wrapper {\n  height: 50px;\n  margin: -23px -20px 23px -22px;\n  position: relative;\n  z-index: 3; }\n  .advanced-wp-table-fixed-header-wrapper .advanced-wp-table-header-title .advanced-wp-table-edit-title-toggle {\n    cursor: pointer;\n    margin-right: -40px;\n    opacity: 0;\n    padding: 0 10px;\n    transition: opacity .4s ease-out;\n    visibility: hidden; }\n    .advanced-wp-table-fixed-header-wrapper .advanced-wp-table-header-title .advanced-wp-table-edit-title-toggle > div {\n      align-items: center;\n      display: inline-flex;\n      height: 30px; }\n    .advanced-wp-table-fixed-header-wrapper .advanced-wp-table-header-title .advanced-wp-table-edit-title-toggle:hover {\n      opacity: 1;\n      visibility: visible; }\n  .advanced-wp-table-fixed-header-wrapper .advanced-wp-table-header-title .advanced-wp-table-title:hover ~ .advanced-wp-table-edit-title-toggle {\n    opacity: 1;\n    visibility: visible; }\n\n.advanced-wp-table-fixed-header {\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n  display: flex;\n  height: 50px;\n  margin: 0;\n  padding: 15px 20px 15px 22px;\n  position: fixed;\n  right: 0;\n  top: 32px;\n  transition: transform 0.3s ease-in-out 0s; }\n  @media (min-width: 960px) {\n    .advanced-wp-table-fixed-header {\n      left: 160px; } }\n  @media (max-width: 960px) {\n    .advanced-wp-table-fixed-header {\n      left: 36px; } }\n  .advanced-wp-table-fixed-header.sticky {\n    transform: none; }\n  .advanced-wp-table-fixed-header.no-sticky {\n    transform: translateY(-100%); }\n  .advanced-wp-table-fixed-header > div {\n    flex: 1; }\n  .advanced-wp-table-fixed-header .advanced-wp-table-header-navigate-to-list .button {\n    align-items: center;\n    display: inline-flex; }\n    .advanced-wp-table-fixed-header .advanced-wp-table-header-navigate-to-list .button .dashicons {\n      margin: 0 5px 0 0; }\n  .advanced-wp-table-fixed-header .advanced-wp-table-header-title {\n    min-width: 0; }\n    .advanced-wp-table-fixed-header .advanced-wp-table-header-title .advanced-wp-table-edit-title-wrapper {\n      align-items: center;\n      display: flex;\n      justify-content: center; }\n    .advanced-wp-table-fixed-header .advanced-wp-table-header-title h1 {\n      margin: 0;\n      overflow: hidden;\n      padding: 0;\n      position: relative;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .advanced-wp-table-fixed-header .advanced-wp-table-header-title [type=\"text\"] {\n      text-align: center;\n      width: 100%; }\n  .advanced-wp-table-fixed-header .advanced-wp-table-header-actions {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end; }\n    .advanced-wp-table-fixed-header .advanced-wp-table-header-actions > * {\n      margin: 0 0 0 8px; }\n  .advanced-wp-table-fixed-header .advanced-wp-table-shortcode {\n    align-items: center;\n    cursor: pointer;\n    display: inline-flex;\n    height: 30px; }\n\n.folded .advanced-wp-table-fixed-header {\n  left: 36px; }\n\n.advanced-wp-table-pagination-wrapper {\n  align-items: flex-end;\n  display: flex;\n  justify-content: space-between;\n  min-height: 26px; }\n\n.advanced-wp-table-total-info {\n  font-weight: 500; }\n\n.advanced-wp-table-pagination {\n  margin: 0;\n  padding: 0; }\n  .advanced-wp-table-pagination li {\n    background: #f3f5f6;\n    border-color: #0071a1;\n    border-radius: 3px;\n    border-style: solid;\n    border-width: 1px;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    text-align: center;\n    vertical-align: baseline; }\n    .advanced-wp-table-pagination li:not(:last-child) {\n      margin: 0 4px 0 0; }\n    .advanced-wp-table-pagination li:last-child {\n      margin: 0; }\n    .advanced-wp-table-pagination li a {\n      box-shadow: none;\n      color: #0071a1;\n      cursor: pointer;\n      display: block;\n      outline-style: none; }\n    .advanced-wp-table-pagination li.disabled {\n      background: #f7f7f7;\n      border-color: #ddd;\n      box-shadow: none;\n      text-shadow: 0 1px 0 #fff;\n      transform: none; }\n      .advanced-wp-table-pagination li.disabled a {\n        color: #a0a5aa;\n        cursor: default; }\n    .advanced-wp-table-pagination li.active {\n      background: #0071a1;\n      border-color: #0071a1; }\n      .advanced-wp-table-pagination li.active a {\n        color: #fff; }\n\n.advanced-wp-table-list,\n.advanced-wp-table-list-loading {\n  margin: 1em 0; }\n\n.advanced-wp-table-list .advanced-wp-table-shortcode,\n.advanced-wp-table-list .advanced-wp-table-shortcode:hover,\n.advanced-wp-table-list .advanced-wp-table-shortcode:focus {\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  outline: none;\n  padding: 0; }\n\n@keyframes advanced-wp-table-placeholder {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n\n.advanced-wp-table-liner-loading {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: advanced-wp-table-placeholder;\n  animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 104px;\n  height: 16px;\n  overflow: hidden;\n  position: relative; }\n  .advanced-wp-table-liner-loading.title-loading {\n    width: 100%; }\n  .advanced-wp-table-liner-loading.actions-loading {\n    margin: 8px 0 0;\n    max-width: 150px;\n    width: 100%; }\n  .advanced-wp-table-liner-loading.shortcode-loading {\n    max-width: 250px;\n    width: 100%; }\n\n.advanced-wp-table-list-loading tbody tr:nth-child(3n+1) .advanced-wp-table-liner-loading.title-loading {\n  max-width: 250px; }\n\n.advanced-wp-table-list-loading tbody tr:nth-child(3n+2) .advanced-wp-table-liner-loading.title-loading {\n  max-width: 280px; }\n\n.advanced-wp-table-list-loading tbody tr:nth-child(3n+3) .advanced-wp-table-liner-loading.title-loading {\n  max-width: 220px; }\n\n.advanced-wp-table-new-table-form {\n  background-color: #fff;\n  margin: 2.5em 0;\n  max-width: 500px;\n  padding: 2.5em;\n  position: relative;\n  width: 100%; }\n  .advanced-wp-table-new-table-form label {\n    font-size: 14px;\n    font-weight: bold; }\n  .advanced-wp-table-new-table-form .advanced-wp-table-form-item {\n    align-items: center;\n    display: flex;\n    margin: 0 0 1em; }\n    .advanced-wp-table-new-table-form .advanced-wp-table-form-item label {\n      flex: 1; }\n    .advanced-wp-table-new-table-form .advanced-wp-table-form-item .advanced-wp-table-form-input-wrapper {\n      flex: 1.2; }\n    .advanced-wp-table-new-table-form .advanced-wp-table-form-item input[type=number] {\n      width: 60px; }\n  .advanced-wp-table-new-table-form .advanced-wp-table-form-buttons {\n    margin: 1.5em 0 0; }\n\n.advanced-wp-table-new-table-form.loading:before {\n  background: rgba(255, 255, 255, 0.9);\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n.advanced-wp-table-new-table-form.loading:after {\n  -webkit-animation: advanced-wp-table-spin .6s linear;\n  animation: advanced-wp-table-spin .6s linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  border-color: #767676 rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);\n  border-radius: 500rem;\n  border-style: solid;\n  border-width: .2em;\n  -webkit-box-shadow: 0 0 0 1px transparent;\n  box-shadow: 0 0 0 1px transparent;\n  content: '';\n  height: 3em;\n  left: 50%;\n  margin: -1.5em 0 0 -1.5em;\n  position: absolute;\n  top: 50%;\n  visibility: visible;\n  width: 3em;\n  z-index: 101; }\n\n@keyframes advanced-wp-table-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.advanced-wp-table-toast {\n  top: 3.5em; }\n  .advanced-wp-table-toast .Toastify__toast {\n    font-family: inherit;\n    font-size: 14px;\n    min-height: 44px; }\n\n.advanced-wp-table-post-item {\n  background-color: #fff;\n  border-collapse: collapse;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);\n  margin: 1em 0;\n  width: 100%; }\n  .advanced-wp-table-post-item td {\n    border: 1px solid;\n    padding: 5px;\n    position: relative;\n    vertical-align: top; }\n  .advanced-wp-table-post-item th {\n    border: 1px solid;\n    padding: 5px;\n    text-align: initial; }\n  .advanced-wp-table-post-item td,\n  .advanced-wp-table-post-item th {\n    border-color: #ccd0d4; }\n  .advanced-wp-table-post-item .advanced-wp-table-cell-wrapper {\n    align-items: self-start;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    min-height: 2em; }\n    .advanced-wp-table-post-item .advanced-wp-table-cell-wrapper .advanced-wp-table-cell-preview {\n      position: relative; }\n  .advanced-wp-table-post-item .advanced-wp-table-edit-cell {\n    border-radius: 3px 3px 0 0;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    opacity: 0;\n    position: relative;\n    transition: opacity .4s ease-out;\n    visibility: hidden;\n    z-index: 2; }\n  .advanced-wp-table-post-item td:hover .advanced-wp-table-edit-cell {\n    opacity: 1;\n    visibility: visible; }\n  .advanced-wp-table-post-item .advanced-wp-table-cell-actions {\n    position: absolute;\n    right: 0;\n    top: 0; }\n    .advanced-wp-table-post-item .advanced-wp-table-cell-actions .advanced-wp-table-actions-dropdown {\n      cursor: initial;\n      opacity: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      transition: opacity 0.1s ease-in;\n      visibility: hidden;\n      width: 115px;\n      z-index: 1;\n      padding: 100% 0 0; }\n      .advanced-wp-table-post-item .advanced-wp-table-cell-actions .advanced-wp-table-actions-dropdown .advanced-wp-table-actions-dropdown-inner {\n        background-color: #6d6d6d;\n        border-radius: 0 0 3px 3px;\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n        color: #fff;\n        padding: 10px; }\n      .advanced-wp-table-post-item .advanced-wp-table-cell-actions .advanced-wp-table-actions-dropdown:hover {\n        opacity: 1;\n        visibility: visible; }\n      .advanced-wp-table-post-item .advanced-wp-table-cell-actions .advanced-wp-table-actions-dropdown .advanced-wp-table-action-item {\n        cursor: pointer; }\n    .advanced-wp-table-post-item .advanced-wp-table-cell-actions:hover .advanced-wp-table-edit-cell {\n      background-color: #6d6d6d;\n      color: #fff; }\n    .advanced-wp-table-post-item .advanced-wp-table-cell-actions:hover .advanced-wp-table-actions-dropdown {\n      opacity: 1;\n      visibility: visible; }\n\n.advanced-wp-table-post-item-buttons {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 1em 0; }\n\n[data-reach-dialog-overlay] {\n  background: rgba(0, 0, 0, 0.5) !important;\n  z-index: 999999; }\n\n.Toastify__toast-container {\n  z-index: 999999; }\n\n[data-reach-dialog-content] {\n  max-width: 500px; }\n\n.advanced-wp-table-alert-title {\n  font-size: 1.8em;\n  margin: 0 0 10px; }\n\n.advanced-wp-table-alert-desc {\n  font-size: 1.2em;\n  margin: 0 0 20px; }\n\n.advanced-wp-table-alert-buttons .button-leave,\n.advanced-wp-table-alert-buttons .button-leave:hover {\n  background-color: #fa784f;\n  border-color: #fa784f; }\n\n.advanced-wp-table-alert-buttons .button-leave:focus {\n  background: #fa784f;\n  border-color: #fa784f;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #fa784f;\n  color: #fff;\n  outline: 2px solid transparent;\n  outline-offset: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/editor.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/editor.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  box-sizing: border-box; }\n\n:root *,\n:root *::before,\n:root *::after {\n  box-sizing: border-box; }\n\n.editor-styles-wrapper {\n  font-family: \"Noto Serif\", serif;\n  font-size: 16px;\n  line-height: 1.8;\n  color: #191e23; }\n\n.editor-styles-wrapper p {\n  font-size: inherit;\n  line-height: inherit; }\n\n.editor-styles-wrapper ul,\n.editor-styles-wrapper ol {\n  margin: 0;\n  padding: 0; }\n\n.editor-styles-wrapper ul li,\n.editor-styles-wrapper ol li {\n  margin-bottom: initial; }\n\n.editor-styles-wrapper ul {\n  list-style-type: disc; }\n\n.editor-styles-wrapper ol {\n  list-style-type: decimal; }\n\n.editor-styles-wrapper ul ul,\n.editor-styles-wrapper ol ul {\n  list-style-type: circle; }\n\n.editor-styles-wrapper .wp-block {\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.editor-styles-wrapper .wp-block[data-align=\"wide\"] {\n  max-width: 1100px; }\n\n.editor-styles-wrapper .wp-block[data-align=\"full\"] {\n  max-width: none; }\n\n.editor-styles-wrapper .block-editor-plain-text {\n  width: 100%; }\n\n/**\n * Animations\n */\n@keyframes edit-post__fade-in-animation {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/style.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/style.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".advanced-wp-table-edit-cell-modal {\n  background-color: #fff;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 99999; }\n  .advanced-wp-table-edit-cell-modal .advanced-wp-table-edit-cell-modal-wrapper {\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n    overflow-y: auto; }\n    .advanced-wp-table-edit-cell-modal .advanced-wp-table-edit-cell-modal-wrapper .advanced-wp-table-editor {\n      display: flex;\n      flex: 1 1 auto;\n      flex-direction: column;\n      overflow-y: auto; }\n      .advanced-wp-table-edit-cell-modal .advanced-wp-table-edit-cell-modal-wrapper .advanced-wp-table-editor .components-drop-zone__provider {\n        display: flex;\n        flex: 1 1 auto;\n        overflow-y: auto; }\n        .advanced-wp-table-edit-cell-modal .advanced-wp-table-edit-cell-modal-wrapper .advanced-wp-table-editor .components-drop-zone__provider .editor-styles-wrapper {\n          overflow-y: auto; }\n        .advanced-wp-table-edit-cell-modal .advanced-wp-table-edit-cell-modal-wrapper .advanced-wp-table-editor .components-drop-zone__provider .playground__sidebar {\n          overflow-y: auto; }\n  .advanced-wp-table-edit-cell-modal .advanced-wp-table-editor-action-buttons {\n    background-color: #fff;\n    border-bottom: 1px solid #e2e4e7;\n    display: flex;\n    flex: 0 0 auto;\n    justify-content: flex-end;\n    padding: 15px; }\n\n.advanced-wp-table-editor img {\n  height: auto;\n  max-width: 100%; }\n\n.advanced-wp-table-editor iframe {\n  width: 100%; }\n\n.advanced-wp-table-editor .components-navigate-regions {\n  height: 100%; }\n\n@media (min-width: 600px) {\n  .advanced-wp-table-editor .components-drop-zone__provider .editor-styles-wrapper {\n    width: calc(100% - 280px); } }\n\n.advanced-wp-table-editor .components-drop-zone__provider .advanced-wp-table-editor-sidebar {\n  border-left: 1px solid #e2e4e7;\n  display: none;\n  height: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n  width: 280px; }\n  @media (min-width: 600px) {\n    .advanced-wp-table-editor .components-drop-zone__provider .advanced-wp-table-editor-sidebar {\n      display: block; } }\n\n.advanced-wp-table-editor .advanced-wp-table-editor-sidebar .block-editor-block-card {\n  padding: 16px; }\n\n.advanced-wp-table-editor .advanced-wp-table-editor-sidebar .components-panel__body {\n  margin-top: -1px; }\n\n.advanced-wp-table-editor .advanced-wp-table-editor-sidebar .block-library-image__dimensions .block-library-image__dimensions__row:last-child {\n  display: flex;\n  justify-content: space-between; }\n\n.advanced-wp-table-editor .block-editor-writing-flow__click-redirect {\n  height: 50vh;\n  width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/detect-node/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-node/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;



/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/*! exports provided: FOCUS_GROUP, FOCUS_DISABLED, FOCUS_ALLOW, FOCUS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_AUTO", function() { return FOCUS_AUTO; });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");



var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInsideIframe = function focusInsideIframe(topNode) {
  return !!Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"])(Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (focusInside);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");



var focusIsHidden = function focusIsHidden() {
  return document && Object(_utils_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(document.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_1__["FOCUS_ALLOW"] + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (focusIsHidden);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/*! exports provided: NEW_FOCUS, newFocus, getFocusabledIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_FOCUS", function() { return NEW_FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFocus", function() { return newFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return getFocusabledIn; });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _utils_correctFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");






var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node && node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var NEW_FOCUS = 'NEW_FOCUS';

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  var correctedNodes = Object(_utils_correctFocus__WEBPACK_IMPORTED_MODULE_4__["correctNodes"])(outerNodes);
  var correctedIndexDiff = correctedNodes.indexOf(activeElement) - correctedNodes.indexOf(lastNode || activeIndex);

  var returnFirstNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, 0);
  var returnLastNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(baseActiveElement);
  var leftEntries = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["parentAutofocusables"])(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent], true);
  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var anyFocusable = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getAllTabbableNodes"])(entries);
  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getAllTabbableNodes"])([commonParent]).map(function (_ref5) {
    var node = _ref5.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);

  if (newId === "NEW_FOCUS") {
    var autoFocusable = anyFocusable.map(function (_ref7) {
      var node = _ref7.node;
      return node;
    }).filter(findAutoFocused(allParentAutofocusables(entries)));

    return {
      node: autoFocusable && autoFocusable.length ? Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(autoFocusable) : Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(innerNodes)
    };
  }

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ __webpack_exports__["default"] = (getFocusMerge);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/*! exports provided: tabHook, focusInside, focusIsHidden, focusMerge, getFocusabledIn, constants, getAllAffectedNodes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabHook", function() { return _tabHook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusMerge", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["getFocusabledIn"]; });

/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInside", function() { return _focusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusIsHidden", function() { return _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAffectedNodes", function() { return _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__["default"]; });











/* harmony default export */ __webpack_exports__["default"] = (_setFocus__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/*! exports provided: focusOn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusOn", function() { return focusOn; });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ __webpack_exports__["default"] = (function (topNode, lastNode) {
  var focusable = Object(_focusMerge__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  attach: function attach() {},
  detach: function detach() {}
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/*! exports provided: isVisible, notHiddenInput, getCommonParent, filterFocusable, getTabbableNodes, getAllTabbableNodes, parentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notHiddenInput", function() { return notHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonParent", function() { return getCommonParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFocusable", function() { return filterFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabbableNodes", function() { return getTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTabbableNodes", function() { return getAllTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentAutofocusables", function() { return parentAutofocusables; });
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode && node.parentNode.nodeType === node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_2__["toArray"])(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes, withGuards)), true, withGuards);
};

/**
 * actually anything focusable
 */
var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getParentAutofocusables"])(topNode));
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = Object(_array__WEBPACK_IMPORTED_MODULE_1__["asArray"])(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"]);
    acc.push.apply(acc, group ? filterNested(Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(getTopParent(currentNode).querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"] + '="' + group + '"]:not([' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_DISABLED"] + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (getAllAffectedNodes);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/*! exports provided: toArray, arrayFind, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/correctFocus.js ***!
  \*******************************************************************/
/*! exports provided: correctNode, correctNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctNode", function() { return correctNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctNodes", function() { return correctNodes; });
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var correctNode = function correctNode(node, nodes) {
  if (isRadio(node) && node.name) {
    return findSelectedRadio(node, nodes);
  }
  return node;
};

var correctNodes = function correctNodes(nodes) {
  // IE11 has no Set constructor
  var resultSet = new Set();
  nodes.forEach(function (node) {
    return resultSet.add(correctNode(node, nodes));
  });
  // using filter to support IE11
  return nodes.filter(function (node) {
    return resultSet.has(node);
  });
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/*! exports provided: pickFocusable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickFocusable", function() { return pickFocusable; });
/* harmony import */ var _correctFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");


var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return Object(_correctFocus__WEBPACK_IMPORTED_MODULE_0__["correctNode"])(nodes[0], nodes);
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    return nodes.indexOf(Object(_correctFocus__WEBPACK_IMPORTED_MODULE_0__["correctNode"])(nodes[index], nodes));
  }
  return index;
};

/* harmony default export */ __webpack_exports__["default"] = (pickFirstFocus);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/*! exports provided: tabSort, orderByTabIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabSort", function() { return tabSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByTabIndex", function() { return orderByTabIndex; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/*! exports provided: getFocusables, getParentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusables", function() { return getFocusables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAutofocusables", function() { return getParentAutofocusables; });
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");




var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.parentNode.querySelectorAll(_tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_2__["FOCUS_AUTO"] + ']');
  return Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);

/***/ }),

/***/ "./node_modules/get-nonce/dist/es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-nonce/dist/es2015/index.js ***!
  \*****************************************************/
/*! exports provided: setNonce, getNonce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNonce", function() { return setNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonce", function() { return getNonce; });
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__["default"],
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/*! exports provided: hiddenGuard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenGuard", function() { return hiddenGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
} : undefined;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_ALLOW"], true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
  var _extends2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  var isActive = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
  var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_6__["mediumFocus"].useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_6__["mediumBlur"].useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_DISABLED"]] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_GROUP"]] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([parentRef, setObserveNode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hasLeadingGuards && [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }),
  /*#__PURE__*/
  // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }) // first tabbed element guard
  ], !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_6__["mediumSidecar"],
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Container, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  returnFocus: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  crossFrame: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  shards: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]),
  as: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired
} : undefined;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: useFocusInside, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusInside", function() { return useFocusInside; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");






var useFocusInside = function useFocusInside(observedRef) {
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var enabled = true;
    _medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].useMedium(function (car) {
      var observed = observedRef && observedRef.current;

      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function () {
      enabled = false;
    };
  }, [observedRef]);
};

function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  useFocusInside(isDisabled ? undefined : ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusIsHidden"])();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"])(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

              document.body.focus();
            } else {
              result = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"])(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["getFocusabledIn"])(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
} : undefined;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_5__["mediumFocus"].assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumBlur"].assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"],
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, useFocusInside, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _Lock__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusInside", function() { return _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__["useFocusInside"]; });

/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _FocusGuard__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Lock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, useFocusInside, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["AutoFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["MoveFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FreeFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["InFocusGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FocusLockUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["useFocusInside"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Combination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/*! exports provided: mediumFocus, mediumBlur, mediumEffect, mediumSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumFocus", function() { return mediumFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumBlur", function() { return mediumBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumEffect", function() { return mediumEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumSidecar", function() { return mediumSidecar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var mediumFocus = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumEffect = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumSidecar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/*! exports provided: deferAction, inlineProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferAction", function() { return deferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineProp", function() { return inlineProp; });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "react"));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
  module.exports.AppContainer.warnAboutHMRDisabled = true;
  module.exports.hot.shouldWrapWithAppContainer = true;
} else { var jsFeaturesPresent, evalError, evalAllowed; }


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  var hot = __webpack_require__(/*! ./index */ "./node_modules/react-hot-loader/index.js").hot;
  if (false) { var parent, cache; }
  // setup hot for caller
  exports.hot = hot(parent);
} else {}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-paginate/dist/BreakView.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-paginate/dist/BreakView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreakView = function BreakView(props) {
  var breakLabel = props.breakLabel,
      breakClassName = props.breakClassName,
      breakLinkClassName = props.breakLinkClassName,
      onClick = props.onClick;

  var className = breakClassName || 'break';

  return _react2.default.createElement(
    'li',
    { className: className },
    _react2.default.createElement(
      'a',
      {
        className: breakLinkClassName,
        onClick: onClick,
        role: 'button',
        tabIndex: '0',
        onKeyPress: onClick
      },
      breakLabel
    )
  );
};

BreakView.propTypes = {
  breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  breakClassName: _propTypes2.default.string,
  breakLinkClassName: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = BreakView;


/***/ }),

/***/ "./node_modules/react-paginate/dist/PageView.js":
/*!******************************************************!*\
  !*** ./node_modules/react-paginate/dist/PageView.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageView = function PageView(props) {
  var pageClassName = props.pageClassName;
  var pageLinkClassName = props.pageLinkClassName;

  var onClick = props.onClick;
  var href = props.href;
  var ariaLabel = props.ariaLabel || 'Page ' + props.page + (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  var ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';

    ariaLabel = props.ariaLabel || 'Page ' + props.page + ' is your current page';

    if (typeof pageClassName !== 'undefined') {
      pageClassName = pageClassName + ' ' + props.activeClassName;
    } else {
      pageClassName = props.activeClassName;
    }

    if (typeof pageLinkClassName !== 'undefined') {
      if (typeof props.activeLinkClassName !== 'undefined') {
        pageLinkClassName = pageLinkClassName + ' ' + props.activeLinkClassName;
      }
    } else {
      pageLinkClassName = props.activeLinkClassName;
    }
  }

  return _react2.default.createElement(
    'li',
    { className: pageClassName },
    _react2.default.createElement(
      'a',
      {
        onClick: onClick,
        role: 'button',
        className: pageLinkClassName,
        href: href,
        tabIndex: '0',
        'aria-label': ariaLabel,
        'aria-current': ariaCurrent,
        onKeyPress: onClick
      },
      props.page
    )
  );
};

PageView.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  activeLinkClassName: _propTypes2.default.string,
  extraAriaContext: _propTypes2.default.string,
  href: _propTypes2.default.string,
  ariaLabel: _propTypes2.default.string,
  page: _propTypes2.default.number.isRequired
};

exports.default = PageView;


/***/ }),

/***/ "./node_modules/react-paginate/dist/PaginationBoxView.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-paginate/dist/PaginationBoxView.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PageView = __webpack_require__(/*! ./PageView */ "./node_modules/react-paginate/dist/PageView.js");

var _PageView2 = _interopRequireDefault(_PageView);

var _BreakView = __webpack_require__(/*! ./BreakView */ "./node_modules/react-paginate/dist/BreakView.js");

var _BreakView2 = _interopRequireDefault(_BreakView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationBoxView = function (_Component) {
  _inherits(PaginationBoxView, _Component);

  function PaginationBoxView(props) {
    _classCallCheck(this, PaginationBoxView);

    var _this = _possibleConstructorReturn(this, (PaginationBoxView.__proto__ || Object.getPrototypeOf(PaginationBoxView)).call(this, props));

    _this.handlePreviousPage = function (evt) {
      var selected = _this.state.selected;

      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
      if (selected > 0) {
        _this.handlePageSelected(selected - 1, evt);
      }
    };

    _this.handleNextPage = function (evt) {
      var selected = _this.state.selected;
      var pageCount = _this.props.pageCount;


      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
      if (selected < pageCount - 1) {
        _this.handlePageSelected(selected + 1, evt);
      }
    };

    _this.handlePageSelected = function (selected, evt) {
      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

      if (_this.state.selected === selected) return;

      _this.setState({ selected: selected });

      // Call the callback with the new selected item:
      _this.callCallback(selected);
    };

    _this.handleBreakClick = function (index, evt) {
      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

      var selected = _this.state.selected;


      _this.handlePageSelected(selected < index ? _this.getForwardJump() : _this.getBackwardJump(), evt);
    };

    _this.callCallback = function (selectedItem) {
      if (typeof _this.props.onPageChange !== 'undefined' && typeof _this.props.onPageChange === 'function') {
        _this.props.onPageChange({ selected: selectedItem });
      }
    };

    _this.pagination = function () {
      var items = [];
      var _this$props = _this.props,
          pageRangeDisplayed = _this$props.pageRangeDisplayed,
          pageCount = _this$props.pageCount,
          marginPagesDisplayed = _this$props.marginPagesDisplayed,
          breakLabel = _this$props.breakLabel,
          breakClassName = _this$props.breakClassName,
          breakLinkClassName = _this$props.breakLinkClassName;
      var selected = _this.state.selected;


      if (pageCount <= pageRangeDisplayed) {
        for (var index = 0; index < pageCount; index++) {
          items.push(_this.getPageElement(index));
        }
      } else {
        var leftSide = pageRangeDisplayed / 2;
        var rightSide = pageRangeDisplayed - leftSide;

        // If the selected page index is on the default right side of the pagination,
        // we consider that the new right side is made up of it (= only one break element).
        // If the selected page index is on the default left side of the pagination,
        // we consider that the new left side is made up of it (= only one break element).
        if (selected > pageCount - pageRangeDisplayed / 2) {
          rightSide = pageCount - selected;
          leftSide = pageRangeDisplayed - rightSide;
        } else if (selected < pageRangeDisplayed / 2) {
          leftSide = selected;
          rightSide = pageRangeDisplayed - leftSide;
        }

        var _index = void 0;
        var page = void 0;
        var breakView = void 0;
        var createPageView = function createPageView(index) {
          return _this.getPageElement(index);
        };

        for (_index = 0; _index < pageCount; _index++) {
          page = _index + 1;

          // If the page index is lower than the margin defined,
          // the page has to be displayed on the left side of
          // the pagination.
          if (page <= marginPagesDisplayed) {
            items.push(createPageView(_index));
            continue;
          }

          // If the page index is greater than the page count
          // minus the margin defined, the page has to be
          // displayed on the right side of the pagination.
          if (page > pageCount - marginPagesDisplayed) {
            items.push(createPageView(_index));
            continue;
          }

          // If the page index is near the selected page index
          // and inside the defined range (pageRangeDisplayed)
          // we have to display it (it will create the center
          // part of the pagination).
          if (_index >= selected - leftSide && _index <= selected + rightSide) {
            items.push(createPageView(_index));
            continue;
          }

          // If the page index doesn't meet any of the conditions above,
          // we check if the last item of the current "items" array
          // is a break element. If not, we add a break element, else,
          // we do nothing (because we don't want to display the page).
          if (breakLabel && items[items.length - 1] !== breakView) {
            breakView = _react2.default.createElement(_BreakView2.default, {
              key: _index,
              breakLabel: breakLabel,
              breakClassName: breakClassName,
              breakLinkClassName: breakLinkClassName,
              onClick: _this.handleBreakClick.bind(null, _index)
            });
            items.push(breakView);
          }
        }
      }

      return items;
    };

    var initialSelected = void 0;
    if (props.initialPage) {
      initialSelected = props.initialPage;
    } else if (props.forcePage) {
      initialSelected = props.forcePage;
    } else {
      initialSelected = 0;
    }

    _this.state = {
      selected: initialSelected
    };
    return _this;
  }

  _createClass(PaginationBoxView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          initialPage = _props.initialPage,
          disableInitialCallback = _props.disableInitialCallback,
          extraAriaContext = _props.extraAriaContext;
      // Call the callback with the initialPage item:

      if (typeof initialPage !== 'undefined' && !disableInitialCallback) {
        this.callCallback(initialPage);
      }

      if (extraAriaContext) {
        console.warn('DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (typeof this.props.forcePage !== 'undefined' && this.props.forcePage !== prevProps.forcePage) {
        this.setState({ selected: this.props.forcePage });
      }
    }
  }, {
    key: 'getForwardJump',
    value: function getForwardJump() {
      var selected = this.state.selected;
      var _props2 = this.props,
          pageCount = _props2.pageCount,
          pageRangeDisplayed = _props2.pageRangeDisplayed;


      var forwardJump = selected + pageRangeDisplayed;
      return forwardJump >= pageCount ? pageCount - 1 : forwardJump;
    }
  }, {
    key: 'getBackwardJump',
    value: function getBackwardJump() {
      var selected = this.state.selected;
      var pageRangeDisplayed = this.props.pageRangeDisplayed;


      var backwardJump = selected - pageRangeDisplayed;
      return backwardJump < 0 ? 0 : backwardJump;
    }
  }, {
    key: 'hrefBuilder',
    value: function hrefBuilder(pageIndex) {
      var _props3 = this.props,
          hrefBuilder = _props3.hrefBuilder,
          pageCount = _props3.pageCount;

      if (hrefBuilder && pageIndex !== this.state.selected && pageIndex >= 0 && pageIndex < pageCount) {
        return hrefBuilder(pageIndex + 1);
      }
    }
  }, {
    key: 'ariaLabelBuilder',
    value: function ariaLabelBuilder(pageIndex) {
      var selected = pageIndex === this.state.selected;
      if (this.props.ariaLabelBuilder && pageIndex >= 0 && pageIndex < this.props.pageCount) {
        var label = this.props.ariaLabelBuilder(pageIndex + 1, selected);
        // DEPRECATED: The extraAriaContext prop was used to add additional context
        // to the aria-label. Users should now use the ariaLabelBuilder instead.
        if (this.props.extraAriaContext && !selected) {
          label = label + ' ' + this.props.extraAriaContext;
        }
        return label;
      }
    }
  }, {
    key: 'getPageElement',
    value: function getPageElement(index) {
      var selected = this.state.selected;
      var _props4 = this.props,
          pageClassName = _props4.pageClassName,
          pageLinkClassName = _props4.pageLinkClassName,
          activeClassName = _props4.activeClassName,
          activeLinkClassName = _props4.activeLinkClassName,
          extraAriaContext = _props4.extraAriaContext;


      return _react2.default.createElement(_PageView2.default, {
        key: index,
        onClick: this.handlePageSelected.bind(null, index),
        selected: selected === index,
        pageClassName: pageClassName,
        pageLinkClassName: pageLinkClassName,
        activeClassName: activeClassName,
        activeLinkClassName: activeLinkClassName,
        extraAriaContext: extraAriaContext,
        href: this.hrefBuilder(index),
        ariaLabel: this.ariaLabelBuilder(index),
        page: index + 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          disabledClassName = _props5.disabledClassName,
          previousClassName = _props5.previousClassName,
          nextClassName = _props5.nextClassName,
          pageCount = _props5.pageCount,
          containerClassName = _props5.containerClassName,
          previousLinkClassName = _props5.previousLinkClassName,
          previousLabel = _props5.previousLabel,
          nextLinkClassName = _props5.nextLinkClassName,
          nextLabel = _props5.nextLabel;
      var selected = this.state.selected;


      var previousClasses = previousClassName + (selected === 0 ? ' ' + disabledClassName : '');
      var nextClasses = nextClassName + (selected === pageCount - 1 ? ' ' + disabledClassName : '');

      var previousAriaDisabled = selected === 0 ? 'true' : 'false';
      var nextAriaDisabled = selected === pageCount - 1 ? 'true' : 'false';

      return _react2.default.createElement(
        'ul',
        { className: containerClassName },
        _react2.default.createElement(
          'li',
          { className: previousClasses },
          _react2.default.createElement(
            'a',
            {
              onClick: this.handlePreviousPage,
              className: previousLinkClassName,
              href: this.hrefBuilder(selected - 1),
              tabIndex: '0',
              role: 'button',
              onKeyPress: this.handlePreviousPage,
              'aria-disabled': previousAriaDisabled
            },
            previousLabel
          )
        ),
        this.pagination(),
        _react2.default.createElement(
          'li',
          { className: nextClasses },
          _react2.default.createElement(
            'a',
            {
              onClick: this.handleNextPage,
              className: nextLinkClassName,
              href: this.hrefBuilder(selected + 1),
              tabIndex: '0',
              role: 'button',
              onKeyPress: this.handleNextPage,
              'aria-disabled': nextAriaDisabled
            },
            nextLabel
          )
        )
      );
    }
  }]);

  return PaginationBoxView;
}(_react.Component);

PaginationBoxView.propTypes = {
  pageCount: _propTypes2.default.number.isRequired,
  pageRangeDisplayed: _propTypes2.default.number.isRequired,
  marginPagesDisplayed: _propTypes2.default.number.isRequired,
  previousLabel: _propTypes2.default.node,
  nextLabel: _propTypes2.default.node,
  breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  hrefBuilder: _propTypes2.default.func,
  onPageChange: _propTypes2.default.func,
  initialPage: _propTypes2.default.number,
  forcePage: _propTypes2.default.number,
  disableInitialCallback: _propTypes2.default.bool,
  containerClassName: _propTypes2.default.string,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  activeLinkClassName: _propTypes2.default.string,
  previousClassName: _propTypes2.default.string,
  nextClassName: _propTypes2.default.string,
  previousLinkClassName: _propTypes2.default.string,
  nextLinkClassName: _propTypes2.default.string,
  disabledClassName: _propTypes2.default.string,
  breakClassName: _propTypes2.default.string,
  breakLinkClassName: _propTypes2.default.string,
  extraAriaContext: _propTypes2.default.string,
  ariaLabelBuilder: _propTypes2.default.func
};
PaginationBoxView.defaultProps = {
  pageCount: 10,
  pageRangeDisplayed: 2,
  marginPagesDisplayed: 3,
  activeClassName: 'selected',
  previousClassName: 'previous',
  nextClassName: 'next',
  previousLabel: 'Previous',
  nextLabel: 'Next',
  breakLabel: '...',
  disabledClassName: 'disabled',
  disableInitialCallback: false
};
exports.default = PaginationBoxView;


/***/ }),

/***/ "./node_modules/react-paginate/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-paginate/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaginationBoxView = __webpack_require__(/*! ./PaginationBoxView */ "./node_modules/react-paginate/dist/PaginationBoxView.js");

var _PaginationBoxView2 = _interopRequireDefault(_PaginationBoxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaginationBoxView2.default;


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/*! exports provided: RemoveScrollBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return RemoveScrollBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");




var Style = Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_1__["styleSingleton"])();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["noScrollbarsClassName"] + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: 0 " + important + ";\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode)), gap = _a[0], setGap = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setGap(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/*! exports provided: zeroRightClassName, fullWidthClassName, noScrollbarsClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return zeroRightClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return fullWidthClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return noScrollbarsClassName; });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/*! exports provided: RemoveScrollBar, zeroRightClassName, fullWidthClassName, noScrollbarsClassName, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["RemoveScrollBar"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getGapWidth"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["noScrollbarsClassName"]; });







/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/*! exports provided: zeroGap, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroGap", function() { return zeroGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return getGapWidth; });
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/Combination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/Combination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./node_modules/react-remove-scroll/dist/es2015/UI.js");
/* harmony import */ var _sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidecar */ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js");




var ReactRemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { ref: ref, sideCar: _sidecar__WEBPACK_IMPORTED_MODULE_3__["default"] }))); });
ReactRemoveScroll.classNames = _UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"].classNames;
/* harmony default export */ __webpack_exports__["default"] = (ReactRemoveScroll);


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js ***!
  \********************************************************************/
/*! exports provided: getTouchXY, getDeltaXY, RemoveScrollSideCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchXY", function() { return getTouchXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeltaXY", function() { return getDeltaXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollSideCar", function() { return RemoveScrollSideCar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar */ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js");
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleScroll */ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js");
/* harmony import */ var _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggresiveCapture */ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js");





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([]);
    var touchStartRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([0, 0]);
    var activeAxis = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var id = react__WEBPACK_IMPORTED_MODULE_0__["useState"](idCounter++)[0];
    var Style = react__WEBPACK_IMPORTED_MODULE_0__["useState"](function () { return Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_2__["styleSingleton"])(); })[0];
    var lastProps = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](props);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lastProps.current = props;
    }, [props]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis == 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        inert ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollBar"], { gapMode: "margin" }) : null));
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/UI.js":
/*!************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/UI.js ***!
  \************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return RemoveScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-remove-scroll-bar/constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");





var nothing = function () {
    return;
};
var RemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom"]);
    var SideCar = sideCar;
    var containerProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([
            ref,
            parentRef
        ]) }, rest, callbacks);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        enabled && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, { sideCar: _medium__WEBPACK_IMPORTED_MODULE_3__["effectCar"], removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(children), containerProps)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, { className: className }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"],
    zeroRight: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]
};



/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js ***!
  \**************************************************************************/
/*! exports provided: nonPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonPassive", function() { return nonPassive; });
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js ***!
  \**********************************************************************/
/*! exports provided: locationCouldBeScrolled, handleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationCouldBeScrolled", function() { return locationCouldBeScrolled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScroll", function() { return handleScroll; });
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (0) {}
    else if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/index.js ***!
  \***************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-remove-scroll/dist/es2015/Combination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return _Combination__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/medium.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/medium.js ***!
  \****************************************************************/
/*! exports provided: effectCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectCar", function() { return effectCar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var effectCar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])();


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/sidecar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");
/* harmony import */ var _SideEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideEffect */ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["exportSidecar"])(_medium__WEBPACK_IMPORTED_MODULE_2__["effectCar"], _SideEffect__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollSideCar"]));


/***/ }),

/***/ "./node_modules/react-resize-aware/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-resize-aware/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! react */ "react"),n={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},t=function(t){var r=t.onResize,u=e.useRef();return function(n,t){var r=function(){return n.current&&n.current.contentDocument&&n.current.contentDocument.defaultView};function u(){t();var e=r();e&&e.addEventListener("resize",t)}e.useEffect((function(){return r()?u():n.current&&n.current.addEventListener&&n.current.addEventListener("load",u),function(){var e=r();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",t)}}),[])}(u,(function(){return r(u)})),e.createElement("iframe",{style:n,src:"about:blank",ref:u,"aria-hidden":!0,tabIndex:-1,frameBorder:0})},r=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};module.exports=function(n){void 0===n&&(n=r);var u=e.useState(n(null)),o=u[0],i=u[1],c=e.useCallback((function(e){return i(n(e.current))}),[n]);return[e.useMemo((function(){return e.createElement(t,{onResize:c})}),[c]),o]};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/*! exports provided: styleSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return styleSingleton; });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");

var styleSingleton = function () {
    var useStyle = Object(_hook__WEBPACK_IMPORTED_MODULE_0__["styleHookSingleton"])();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/*! exports provided: styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return styleHookSingleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");


var styleHookSingleton = function () {
    var sheet = Object(_singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"])();
    return function (styles) {
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/*! exports provided: styleSingleton, stylesheetSingleton, styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-style-singleton/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["styleSingleton"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return _singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return _hook__WEBPACK_IMPORTED_MODULE_2__["styleHookSingleton"]; });






/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/*! exports provided: stylesheetSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return stylesheetSingleton; });
/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ "./node_modules/get-nonce/dist/es2015/index.js");

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = Object(get_nonce__WEBPACK_IMPORTED_MODULE_0__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};


/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./ReactToastify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/react-toastify/esm/react-toastify.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-toastify/esm/react-toastify.js ***!
  \***********************************************************/
/*! exports provided: Bounce, Flip, Slide, ToastContainer, ToastPosition, ToastType, Zoom, cssTransition, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flip", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainer", function() { return ToastContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPosition", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastType", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssTransition", function() { return cssTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);









var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};
var ACTION = {
  SHOW: 0,
  CLEAR: 1,
  DID_MOUNT: 2,
  WILL_UNMOUNT: 3,
  ON_CHANGE: 4
};
var NOOP = function NOOP() {};
var RT_NAMESPACE = 'Toastify';

function isValidDelay(val) {
  return typeof val === 'number' && !isNaN(val) && val > 0;
}
function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withRequired(fn) {
  fn.isRequired = function (props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop === 'undefined') {
      return new Error("The prop " + propName + " is marked as required in \n      " + componentName + ", but its value is undefined.");
    }

    fn(props, propName, componentName);
  };

  return fn;
}

var falseOrDelay = withRequired(function (props, propName, componentName) {
  var prop = props[propName];

  if (prop !== false && !isValidDelay(prop)) {
    return new Error(componentName + " expect " + propName + " \n      to be a valid Number > 0 or equal to false. " + prop + " given.");
  }

  return null;
});

var eventManager = {
  list: new Map(),
  emitQueue: new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event) {
    this.list.delete(event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.emitQueue.delete(event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition;
  return function Animation(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["children", "position", "preventExitTransition"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var enterDuration, exitDuration;

    if (Array.isArray(duration) && duration.length === 2) {
      enterDuration = duration[0];
      exitDuration = duration[1];
    } else {
      enterDuration = exitDuration = duration;
    }

    var onEnter = function onEnter(node) {
      node.classList.add(enterClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = enterDuration * 0.001 + "s";
    };

    var onEntered = function onEntered(node) {
      node.classList.remove(enterClassName);
      node.style.cssText = '';
    };

    var onExit = function onExit(node) {
      node.classList.add(exitClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = exitDuration * 0.001 + "s";
    };

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["Transition"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      timeout: preventExitTransition ? 0 : {
        enter: enterDuration,
        exit: exitDuration
      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? NOOP : onExit
    }), children);
  };
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl;

  var style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1,
    transform: controlledProgress ? "scaleX(" + progress + ")" : null
  });

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__progress-bar", controlledProgress ? RT_NAMESPACE + "__progress-bar--controlled" : RT_NAMESPACE + "__progress-bar--animated", RT_NAMESPACE + "__progress-bar--" + type, (_cx = {}, _cx[RT_NAMESPACE + "__progress-bar--rtl"] = rtl, _cx), className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : closeToast, _animationEvent);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classNames,
    style: style
  }, animationEvent));
}

ProgressBar.propTypes = {
  /**
   * The animation delay which determine when to close the toast
   */
  delay: falseOrDelay.isRequired,

  /**
   * Whether or not the animation is running or paused
   */
  isRunning: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * Func to close the current toast
   */
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /**
   * Support rtl content
   */
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * Optional type : info, success ...
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Hide or not the progress bar
   */
  hide: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Optionnal className
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * Controlled progress value
   */
  progress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * Tell wether or not controlled progress bar is used
   */
  controlledProgress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

var iLoveInternetExplorer = canUseDom && /(msie|trident)/i.test(navigator.userAgent);

var Toast =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Toast, _Component);

  function Toast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isRunning: true,
      preventExitTransition: false
    };
    _this.flag = {
      canCloseOnClick: true,
      canDrag: false
    };
    _this.drag = {
      start: 0,
      x: 0,
      y: 0,
      deltaX: 0,
      removalDistance: 0
    };
    _this.boundingRect = null;
    _this.ref = null;

    _this.pauseToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: false
        });
      }
    };

    _this.playToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: true
        });
      }
    };

    _this.onDragStart = function (e) {
      _this.flag.canCloseOnClick = true;
      _this.flag.canDrag = true;
      _this.boundingRect = _this.ref.getBoundingClientRect();
      _this.ref.style.transition = '';
      _this.drag.start = _this.drag.x = getX(e.nativeEvent);
      _this.drag.removalDistance = _this.ref.offsetWidth * (_this.props.draggablePercent / 100);
    };

    _this.onDragMove = function (e) {
      if (_this.flag.canDrag) {
        if (_this.state.isRunning) {
          _this.pauseToast();
        }

        _this.drag.x = getX(e);
        _this.drag.deltaX = _this.drag.x - _this.drag.start;
        _this.drag.y = getY(e); // prevent false positif during a toast click

        _this.drag.start !== _this.drag.x && (_this.flag.canCloseOnClick = false);
        _this.ref.style.transform = "translateX(" + _this.drag.deltaX + "px)";
        _this.ref.style.opacity = 1 - Math.abs(_this.drag.deltaX / _this.drag.removalDistance);
      }
    };

    _this.onDragEnd = function (e) {
      if (_this.flag.canDrag) {
        _this.flag.canDrag = false;

        if (Math.abs(_this.drag.deltaX) > _this.drag.removalDistance) {
          _this.setState({
            preventExitTransition: true
          }, _this.props.closeToast);

          return;
        }

        _this.ref.style.transition = 'transform 0.2s, opacity 0.2s';
        _this.ref.style.transform = 'translateX(0)';
        _this.ref.style.opacity = 1;
      }
    };

    _this.onDragTransitionEnd = function () {
      if (_this.boundingRect) {
        var _this$boundingRect = _this.boundingRect,
            top = _this$boundingRect.top,
            bottom = _this$boundingRect.bottom,
            left = _this$boundingRect.left,
            right = _this$boundingRect.right;

        if (_this.props.pauseOnHover && _this.drag.x >= left && _this.drag.x <= right && _this.drag.y >= top && _this.drag.y <= bottom) {
          _this.pauseToast();
        } else {
          _this.playToast();
        }
      }
    };

    _this.onExitTransitionEnd = function () {
      if (iLoveInternetExplorer) {
        _this.props.onExited();

        return;
      }

      var height = _this.ref.scrollHeight;
      var style = _this.ref.style;
      requestAnimationFrame(function () {
        style.minHeight = 'initial';
        style.height = height + 'px';
        style.transition = 'all 0.4s ';
        requestAnimationFrame(function () {
          style.height = 0;
          style.padding = 0;
          style.margin = 0;
        });
        setTimeout(function () {
          return _this.props.onExited();
        }, 400);
      });
    };

    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.onOpen(this.props.children.props);

    if (this.props.draggable) {
      this.bindDragEvents();
    } // Maybe I could bind the event in the ToastContainer and rely on delegation


    if (this.props.pauseOnFocusLoss) {
      this.bindFocusEvents();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      if (this.props.draggable) {
        this.bindDragEvents();
      } else {
        this.unbindDragEvents();
      }
    }

    if (prevProps.pauseOnFocusLoss !== this.props.pauseOnFocusLoss) {
      if (this.props.pauseOnFocusLoss) {
        this.bindFocusEvents();
      } else {
        this.unbindFocusEvents();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onClose(this.props.children.props);

    if (this.props.draggable) {
      this.unbindDragEvents();
    }

    if (this.props.pauseOnFocusLoss) {
      this.unbindFocusEvents();
    }
  };

  _proto.bindFocusEvents = function bindFocusEvents() {
    window.addEventListener('focus', this.playToast);
    window.addEventListener('blur', this.pauseToast);
  };

  _proto.unbindFocusEvents = function unbindFocusEvents() {
    window.removeEventListener('focus', this.playToast);
    window.removeEventListener('blur', this.pauseToast);
  };

  _proto.bindDragEvents = function bindDragEvents() {
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchmove', this.onDragMove);
    document.addEventListener('touchend', this.onDragEnd);
  };

  _proto.unbindDragEvents = function unbindDragEvents() {
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.onDragEnd);
    document.removeEventListener('touchmove', this.onDragMove);
    document.removeEventListener('touchend', this.onDragEnd);
  };

  _proto.render = function render() {
    var _cx,
        _this2 = this;

    var _this$props = this.props,
        closeButton = _this$props.closeButton,
        children = _this$props.children,
        autoClose = _this$props.autoClose,
        pauseOnHover = _this$props.pauseOnHover,
        onClick = _this$props.onClick,
        closeOnClick = _this$props.closeOnClick,
        type = _this$props.type,
        hideProgressBar = _this$props.hideProgressBar,
        closeToast = _this$props.closeToast,
        Transition = _this$props.transition,
        position = _this$props.position,
        className = _this$props.className,
        bodyClassName = _this$props.bodyClassName,
        progressClassName = _this$props.progressClassName,
        progressStyle = _this$props.progressStyle,
        updateId = _this$props.updateId,
        role = _this$props.role,
        progress = _this$props.progress,
        rtl = _this$props.rtl;
    var toastProps = {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast", RT_NAMESPACE + "__toast--" + type, (_cx = {}, _cx[RT_NAMESPACE + "__toast--rtl"] = rtl, _cx), className)
    };

    if (autoClose && pauseOnHover) {
      toastProps.onMouseEnter = this.pauseToast;
      toastProps.onMouseLeave = this.playToast;
    } // prevent toast from closing when user drags the toast


    if (closeOnClick) {
      toastProps.onClick = function (e) {
        onClick && onClick(e);
        _this2.flag.canCloseOnClick && closeToast();
      };
    }

    var controlledProgress = parseFloat(progress) === progress;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, {
      in: this.props.in,
      appear: true,
      onExited: this.onExitTransitionEnd,
      position: position,
      preventExitTransition: this.state.preventExitTransition
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      onClick: onClick
    }, toastProps, {
      ref: function ref(_ref) {
        return _this2.ref = _ref;
      },
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseUp: this.onDragTransitionEnd,
      onTouchEnd: this.onDragTransitionEnd
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.in && {
      role: role
    }, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast-body", bodyClassName)
    }), children), closeButton && closeButton, (autoClose || controlledProgress) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProgressBar, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateId && !controlledProgress ? {
      key: "pb-" + updateId
    } : {}, {
      rtl: rtl,
      delay: autoClose,
      isRunning: this.state.isRunning,
      closeToast: closeToast,
      hide: hideProgressBar,
      type: type,
      style: progressStyle,
      className: progressClassName,
      controlledProgress: controlledProgress,
      progress: progress
    }))));
  };

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Toast.propTypes = {
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]).isRequired,
  autoClose: falseOrDelay.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(POSITION)).isRequired,
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  pauseOnFocusLoss: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  closeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  hideProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  draggablePercent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(TYPE)),
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  bodyClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  updateId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  containerId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
Toast.defaultProps = {
  type: TYPE.DEFAULT,
  in: true,
  onOpen: NOOP,
  onClose: NOOP,
  className: null,
  bodyClassName: null,
  progressClassName: null,
  updateId: null
};

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: RT_NAMESPACE + "__close-button " + RT_NAMESPACE + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, "\u2716\uFE0E");
}

CloseButton.propTypes = {
  closeToast: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  arialLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
CloseButton.defaultProps = {
  ariaLabel: 'close'
};

var Bounce = cssTransition({
  enter: RT_NAMESPACE + "__bounce-enter",
  exit: RT_NAMESPACE + "__bounce-exit",
  appendPosition: true
});
var Slide = cssTransition({
  enter: RT_NAMESPACE + "__slide-enter",
  exit: RT_NAMESPACE + "__slide-exit",
  duration: [450, 750],
  appendPosition: true
});
var Zoom = cssTransition({
  enter: RT_NAMESPACE + "__zoom-enter",
  exit: RT_NAMESPACE + "__zoom-exit"
});
var Flip = cssTransition({
  enter: RT_NAMESPACE + "__flip-enter",
  exit: RT_NAMESPACE + "__flip-exit"
});

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToastContainer, _Component);

  function ToastContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      toast: []
    };
    _this.toastKey = 1;
    _this.collection = {};

    _this.isToastActive = function (id) {
      return _this.state.toast.indexOf(id) !== -1;
    };

    return _this;
  }

  var _proto = ToastContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    eventManager.cancelEmit(ACTION.WILL_UNMOUNT).on(ACTION.SHOW, function (content, options) {
      return _this2.ref ? _this2.buildToast(content, options) : null;
    }).on(ACTION.CLEAR, function (id) {
      return !_this2.ref ? null : id == null ? _this2.clear() : _this2.removeToast(id);
    }).emit(ACTION.DID_MOUNT, this);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    eventManager.emit(ACTION.WILL_UNMOUNT, this);
  };

  _proto.removeToast = function removeToast(id) {
    this.setState({
      toast: this.state.toast.filter(function (v) {
        return v !== id;
      })
    }, this.dispatchChange);
  };

  _proto.dispatchChange = function dispatchChange() {
    eventManager.emit(ACTION.ON_CHANGE, this.state.toast.length, this.props.containerId);
  };

  _proto.makeCloseButton = function makeCloseButton(toastClose, toastId, type) {
    var _this3 = this;

    var closeButton = this.props.closeButton;

    if (Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(toastClose) || toastClose === false) {
      closeButton = toastClose;
    } else if (toastClose === true) {
      closeButton = this.props.closeButton && typeof this.props.closeButton !== 'boolean' ? this.props.closeButton : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CloseButton, null);
    }

    return closeButton === false ? false : Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(closeButton, {
      closeToast: function closeToast() {
        return _this3.removeToast(toastId);
      },
      type: type
    });
  };

  _proto.getAutoCloseDelay = function getAutoCloseDelay(toastAutoClose) {
    return toastAutoClose === false || isValidDelay(toastAutoClose) ? toastAutoClose : this.props.autoClose;
  };

  _proto.canBeRendered = function canBeRendered(content) {
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(content) || typeof content === 'string' || typeof content === 'number' || typeof content === 'function';
  };

  _proto.parseClassName = function parseClassName(prop) {
    if (typeof prop === 'string') {
      return prop;
    } else if (prop !== null && typeof prop === 'object' && 'toString' in prop) {
      return prop.toString();
    }

    return null;
  };

  _proto.belongToContainer = function belongToContainer(_ref) {
    var containerId = _ref.containerId;
    return containerId === this.props.containerId;
  };

  _proto.buildToast = function buildToast(content, _ref2) {
    var _this4 = this;

    var delay = _ref2.delay,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["delay"]);

    if (!this.canBeRendered(content)) {
      throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof content);
    }

    var toastId = options.toastId,
        updateId = options.updateId; // Check for multi-container and also for duplicate toastId
    // Maybe it would be better to extract it

    if (this.props.enableMultiContainer && !this.belongToContainer(options) || this.isToastActive(toastId) && updateId == null) {
      return;
    }

    var closeToast = function closeToast() {
      return _this4.removeToast(toastId);
    };

    var toastOptions = {
      id: toastId,
      // ⚠️ if no options.key, this.toastKey - 1 is assigned
      key: options.key || this.toastKey++,
      type: options.type,
      closeToast: closeToast,
      updateId: options.updateId,
      rtl: this.props.rtl,
      position: options.position || this.props.position,
      transition: options.transition || this.props.transition,
      className: this.parseClassName(options.className || this.props.toastClassName),
      bodyClassName: this.parseClassName(options.bodyClassName || this.props.bodyClassName),
      onClick: options.onClick || this.props.onClick,
      closeButton: this.makeCloseButton(options.closeButton, toastId, options.type),
      pauseOnHover: typeof options.pauseOnHover === 'boolean' ? options.pauseOnHover : this.props.pauseOnHover,
      pauseOnFocusLoss: typeof options.pauseOnFocusLoss === 'boolean' ? options.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
      draggable: typeof options.draggable === 'boolean' ? options.draggable : this.props.draggable,
      draggablePercent: typeof options.draggablePercent === 'number' && !isNaN(options.draggablePercent) ? options.draggablePercent : this.props.draggablePercent,
      closeOnClick: typeof options.closeOnClick === 'boolean' ? options.closeOnClick : this.props.closeOnClick,
      progressClassName: this.parseClassName(options.progressClassName || this.props.progressClassName),
      progressStyle: this.props.progressStyle,
      autoClose: this.getAutoCloseDelay(options.autoClose),
      hideProgressBar: typeof options.hideProgressBar === 'boolean' ? options.hideProgressBar : this.props.hideProgressBar,
      progress: parseFloat(options.progress),
      role: typeof options.role === 'string' ? options.role : this.props.role
    };
    typeof options.onOpen === 'function' && (toastOptions.onOpen = options.onOpen);
    typeof options.onClose === 'function' && (toastOptions.onClose = options.onClose); // add closeToast function to react component only

    if (Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(content) && typeof content.type !== 'string' && typeof content.type !== 'number') {
      content = Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(content, {
        closeToast: closeToast
      });
    } else if (typeof content === 'function') {
      content = content({
        closeToast: closeToast
      });
    }

    if (isValidDelay(delay)) {
      setTimeout(function () {
        _this4.appendToast(toastOptions, content, options.staleToastId);
      }, delay);
    } else {
      this.appendToast(toastOptions, content, options.staleToastId);
    }
  };

  _proto.appendToast = function appendToast(options, content, staleToastId) {
    var _extends2;

    var id = options.id,
        updateId = options.updateId;
    this.collection = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.collection, (_extends2 = {}, _extends2[id] = {
      options: options,
      content: content,
      position: options.position
    }, _extends2));
    this.setState({
      toast: (updateId ? [].concat(this.state.toast) : [].concat(this.state.toast, [id])).filter(function (id) {
        return id !== staleToastId;
      })
    }, this.dispatchChange);
  };

  _proto.clear = function clear() {
    this.setState({
      toast: []
    });
  };

  _proto.renderToast = function renderToast() {
    var _this5 = this;

    var toastToRender = {};
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        newestOnTop = _this$props.newestOnTop;
    var collection = newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection); // group toast by position

    collection.forEach(function (toastId) {
      var _this5$collection$toa = _this5.collection[toastId],
          position = _this5$collection$toa.position,
          options = _this5$collection$toa.options,
          content = _this5$collection$toa.content;
      toastToRender[position] || (toastToRender[position] = []);

      if (_this5.state.toast.indexOf(options.id) !== -1) {
        toastToRender[position].push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Toast, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          isDocumentHidden: _this5.state.isDocumentHidden,
          key: "toast-" + options.key
        }), content));
      } else {
        toastToRender[position].push(null);
        delete _this5.collection[toastId];
      }
    });
    return Object.keys(toastToRender).map(function (position) {
      var _cx;

      var disablePointer = toastToRender[position].length === 1 && toastToRender[position][0] === null;
      var props = {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(RT_NAMESPACE + "__toast-container", RT_NAMESPACE + "__toast-container--" + position, (_cx = {}, _cx[RT_NAMESPACE + "__toast-container--rtl"] = _this5.props.rtl, _cx), _this5.parseClassName(className)),
        style: disablePointer ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
          pointerEvents: 'none'
        }) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style)
      };
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["TransitionGroup"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        key: "container-" + position
      }), toastToRender[position]);
    });
  };

  _proto.render = function render() {
    var _this6 = this;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(node) {
        return _this6.ref = node;
      },
      className: "" + RT_NAMESPACE
    }, this.renderToast());
  };

  return ToastContainer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

ToastContainer.propTypes = {
  /**
   * Set toast position
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(objectValues(POSITION)),

  /**
   * Disable or set autoClose delay
   */
  autoClose: falseOrDelay,

  /**
   * Disable or set a custom react element for the close button
   */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * Hide or not progress bar when autoClose is enabled
   */
  hideProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Pause toast duration on hover
   */
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Dismiss toast on click
   */
  closeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Newest on top
   */
  newestOnTop: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * An optional className
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional style
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * An optional className for the toast
   */
  toastClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional className for the toast body
   */
  bodyClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional className for the toast progress bar
   */
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),

  /**
   * An optional style for the toast progress bar
   */
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Define enter and exit transition using react-transition-group
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Support rtl display
   */
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Allow toast to be draggable
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The percentage of the toast's width it takes for a drag to dismiss a toast
   */
  draggablePercent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * Pause the toast on focus loss
   */
  pauseOnFocusLoss: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Show the toast only if it includes containerId and it's the same as containerId
   */
  enableMultiContainer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Set id to handle multiple container
   */
  containerId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /**
   * Set role attribute for the toast body
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Fired when clicking inside toaster
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CloseButton, null),
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null,
  progressStyle: null,
  role: 'alert'
};

var containers = new Map();
var latestInstance = null;
var containerDomNode = null;
var containerConfig = {};
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  if (!containerId) return containers.get(latestInstance);
  return containers.get(containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  var toast = container.collection[toastId];
  if (typeof toast === 'undefined') return null;
  return toast;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(options, type) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    type: type,
    toastId: getToastId(options)
  });
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (typeof options.toastId === 'string' || typeof options.toastId === 'number' && !isNaN(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(ACTION.SHOW, content, options);
  } else {
    queue.push({
      action: ACTION.SHOW,
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ToastContainer, containerConfig), containerDomNode);
    }
  }

  return options.toastId;
}

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(options, options && options.type || TYPE.DEFAULT));
};
/**
 * For each available type create a shortcut
 */


var _loop = function _loop(t) {
  if (TYPE[t] !== TYPE.DEFAULT) {
    toast[TYPE[t].toLowerCase()] = function (content, options) {
      return dispatchToast(content, mergeOptions(options, options && options.type || TYPE[t]));
    };
  }
};

for (var t in TYPE) {
  _loop(t);
}
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  if (id === void 0) {
    id = null;
  }

  return isAnyContainerMounted() && eventManager.emit(ACTION.CLEAR, id);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;

  if (containers.size > 0) {
    containers.forEach(function (container) {
      if (container.isToastActive(id)) {
        isToastActive = true;
      }
    });
  }

  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.options,
          oldContent = toast.content;

      var nextOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldOptions, {}, options, {
        toastId: options.toastId || toastId
      });

      if (!options.toastId || options.toastId === toastId) {
        nextOptions.updateId = generateToastId();
      } else {
        nextOptions.staleToastId = toastId;
      }

      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 */


toast.onChange = function (callback) {
  if (typeof callback === 'function') {
    eventManager.on(ACTION.ON_CHANGE, callback);
  }
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(ACTION.DID_MOUNT, function (containerInstance) {
  latestInstance = containerInstance.props.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(item.action, item.content, item.options);
  });
  queue = [];
}).on(ACTION.WILL_UNMOUNT, function (containerInstance) {
  if (containerInstance) containers.delete(containerInstance.props.containerId || containerInstance);else containers.clear();

  if (containers.size === 0) {
    eventManager.off(ACTION.SHOW).off(ACTION.CLEAR);
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});




/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/*! exports provided: assignRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \****************************************************************/
/*! exports provided: createCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return createCallbackRef; });
/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: assignRef, useCallbackRef, createCallbackRef, mergeRefs, useMergeRefs, useTransformRef, transformRef, refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return _assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"]; });

/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useRef__WEBPACK_IMPORTED_MODULE_1__["useCallbackRef"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_2__["createCallbackRef"]; });

/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return _mergeRef__WEBPACK_IMPORTED_MODULE_3__["mergeRefs"]; });

/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return _useMergeRef__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"]; });

/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return _useTransformRef__WEBPACK_IMPORTED_MODULE_5__["useTransformRef"]; });

/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return _transformRef__WEBPACK_IMPORTED_MODULE_6__["transformRef"]; });

/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["refToCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["useRefToCallback"]; });


// callback ref


// merge ref


// transform ref


// refToCallback



/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \***************************************************************/
/*! exports provided: mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function mergeRefs(refs) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_0__["createCallbackRef"])(function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \********************************************************************/
/*! exports provided: refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return refToCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return useRefToCallback; });
/**
 * Unmemoized version of {@link useRefToCallback}
 * @see {@link useRefToCallback}
 * @param ref
 */
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    if (weakMem.has(usedRef)) {
        return weakMem.get(usedRef);
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
/**
 * Transforms a given `ref` into `callback`.
 *
 * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
 *
 * @param {ReactRef} ref
 * @returns {Function}
 *
 * @see https://github.com/theKashey/use-callback-ref#reftocallback
 *
 * @example
 * const ref = useRef(0);
 * const setRef = useRefToCallback(ref);
 * 👉 setRef(10);
 * ✅ ref.current === 10
 */
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \*******************************************************************/
/*! exports provided: transformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return transformRef; });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_1__["createCallbackRef"])(function (value) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"])(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/*! exports provided: useMergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return useMergeRefs; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/*! exports provided: useCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \**********************************************************************/
/*! exports provided: useTransformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return useTransformRef; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Create a _lense_ on Ref, making it possible to transform ref value
 * @param {ReactRef} ref
 * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
 * @returns {RefObject}
 *
 * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
 * @example
 *
 * const ResizableWithRef = forwardRef((props, ref) =>
 *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
 * );
 */
function useTransformRef(ref, transformer) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(undefined, function (value) {
        return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/config.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/config.js ***!
  \********************************************************/
/*! exports provided: config, setConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/env.js ***!
  \*****************************************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-node */ "./node_modules/detect-node/browser.js");
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_node__WEBPACK_IMPORTED_MODULE_0__);

var env = {
    isNode: detect_node__WEBPACK_IMPORTED_MODULE_0___default.a,
    forceCache: false,
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/*! exports provided: exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return exportSidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Target, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hoc.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hoc.js ***!
  \*****************************************************/
/*! exports provided: sidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return sidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");



function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = Object(_hook__WEBPACK_IMPORTED_MODULE_2__["useSidecar"])(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Car, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)) : null;
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hook.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hook.js ***!
  \******************************************************/
/*! exports provided: useSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return useSidecar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/use-sidecar/dist/es2015/env.js");


var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache = _env__WEBPACK_IMPORTED_MODULE_1__["env"].forceCache || (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !!options.ssr) || (!options.async);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _b[0], setError = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}
;


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/index.js ***!
  \*******************************************************/
/*! exports provided: sidecar, useSidecar, setConfig, createMedium, createSidecarMedium, renderCar, exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./node_modules/use-sidecar/dist/es2015/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["sidecar"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return _hook__WEBPACK_IMPORTED_MODULE_1__["useSidecar"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/use-sidecar/dist/es2015/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["setConfig"]; });

/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/use-sidecar/dist/es2015/medium.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createSidecarMedium"]; });

/* harmony import */ var _renderProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProp */ "./node_modules/use-sidecar/dist/es2015/renderProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return _renderProp__WEBPACK_IMPORTED_MODULE_4__["renderCar"]; });

/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exports */ "./node_modules/use-sidecar/dist/es2015/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return _exports__WEBPACK_IMPORTED_MODULE_5__["exportSidecar"]; });









/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/*! exports provided: createMedium, createSidecarMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return createMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return createSidecarMedium; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/renderProp.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/renderProp.js ***!
  \************************************************************/
/*! exports provided: renderCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return renderCar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function renderCar(WrappedComponent, defaults, options) {
    if (options === void 0) { options = {}; }
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { children: renderTarget }));
    }
    var Children = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState.current), state = _b[0], setState = _b[1];
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaults(props));
        var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](function (state) { return defaultState.current = state; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](State, { stateRef: ref, props: props }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: StateContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.scss */ "./src/components/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EditCellModal_EditCellModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditCellModal/EditCellModal */ "./src/components/EditCellModal/EditCellModal.js");
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./List/List */ "./src/components/List/List.js");
/* harmony import */ var _NewTable_NewTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NewTable/NewTable */ "./src/components/NewTable/NewTable.js");
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Table/Table */ "./src/components/Table/Table.js");
/* harmony import */ var _TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TableChangedDialog/TableChangedDialog */ "./src/components/TableChangedDialog/TableChangedDialog.js");
/* harmony import */ var _TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TableDeleteDialog/TableDeleteDialog */ "./src/components/TableDeleteDialog/TableDeleteDialog.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














var React = wp.element;
var _wp$element = wp.element,
    useReducer = _wp$element.useReducer,
    useEffect = _wp$element.useEffect;
var StateContext = React.createContext();
var newTableData = {
  title: '',
  sizeOfRows: 2,
  sizeOfColumns: 2
};
var tableChangedDialog = {
  status: false,
  callbackCancel: null,
  callbackLeave: null
};
var tableDeleteDialog = {
  status: false,
  id: null
};
var initialState = {
  loading: true,
  tablesLoading: true,
  formLoading: false,
  total: 0,
  totalPages: 1,
  perPage: 10,
  offset: 0,
  currentPage: 0,
  tables: [],
  table: {},
  tableData: [],
  activeCell: {},
  tableChangedDialog: tableChangedDialog,
  tableDeleteDialog: tableDeleteDialog,
  view: 'list',
  newTableData: newTableData
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.payload
      });

    case 'SET_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case 'UNSET_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    case 'SET_TABLES_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        tablesLoading: true
      });

    case 'UNSET_TABLES_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        tablesLoading: false
      });

    case 'SET_FORM_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        formLoading: true
      });

    case 'UNSET_FORM_LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        formLoading: false
      });

    case 'FETCH_TABLES':
      var _action$payload = action.payload,
          total = _action$payload.total,
          totalPages = _action$payload.totalPages,
          tables = _action$payload.tables;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: total,
        totalPages: totalPages,
        tables: tables
      });

    case 'UPDATE_TOTAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        total: action.payload
      });

    case 'UPDATE_TABLES':
      return _objectSpread(_objectSpread({}, state), {}, {
        tables: action.payload
      });

    case 'PAGINATE_TABLES':
      return _objectSpread(_objectSpread({}, state), {}, {
        offset: action.payload.offset,
        currentPage: action.payload.currentPage
      });

    case 'SET_INPUT':
      var data = _objectSpread({}, state.newTableData);

      data[action.payload.name] = action.payload.value;
      return _objectSpread(_objectSpread({}, state), {}, {
        newTableData: data
      });

    case 'CLEAR_NEW_TABLE_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        newTableData: newTableData
      });

    case 'SET_TABLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        table: Object(_utils_table__WEBPACK_IMPORTED_MODULE_7__["parseTableSize"])(action.payload)
      });

    case 'UNSET_TABLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        table: {}
      });

    case 'ON_DRAG_END_TABLE':
      var tableData = state.table.advanced_wp_table_data;

      var updatedTableData = _objectSpread(_objectSpread({}, tableData), {}, {
        rows: action.payload
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        table: _objectSpread(_objectSpread({}, state.table), {}, {
          advanced_wp_table_data: updatedTableData
        })
      });

    case 'SET_ACTIVE_CELL':
      return _objectSpread(_objectSpread({}, state), {}, {
        activeCell: action.payload
      });

    case 'UNSET_ACTIVE_CELL':
      return _objectSpread(_objectSpread({}, state), {}, {
        activeCell: {}
      });

    case 'SET_TABLE_CHANGED_DIALOG':
      return _objectSpread(_objectSpread({}, state), {}, {
        tableChangedDialog: action.payload
      });

    case 'UNSET_TABLE_CHANGED_DIALOG':
      return _objectSpread(_objectSpread({}, state), {}, {
        tableChangedDialog: tableChangedDialog
      });

    case 'SET_TABLE_DELETE_DIALOG':
      return _objectSpread(_objectSpread({}, state), {}, {
        tableDeleteDialog: action.payload
      });

    case 'UNSET_TABLE_DELETE_DIALOG':
      return _objectSpread(_objectSpread({}, state), {}, {
        tableDeleteDialog: tableDeleteDialog
      });

    default:
      return state;
  }
};

var App = function App() {
  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var perPage = state.perPage,
      offset = state.offset,
      view = state.view;

  var fetchTables = function fetchTables() {
    dispatch({
      type: 'SET_TABLES_LOADING'
    });
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_7__["getTables"])(perPage, offset).then(function (response) {
      dispatch({
        type: 'FETCH_TABLES',
        payload: response
      });
      dispatch({
        type: 'UNSET_TABLES_LOADING'
      });
    }).catch(function (err) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["toastError"])(err.message);
      dispatch({
        type: 'UNSET_TABLES_LOADING'
      });
    });
  };
  /**
   * Initially fetch the tables from the database.
   */


  useEffect(function () {
    fetchTables();
    dispatch({
      type: 'UNSET_LOADING'
    });
  }, []);
  /**
   * Fetch the tables when offset gets changed.
   */

  useEffect(function () {
    if (state.loading) {
      return;
    }

    fetchTables();
  }, [offset]);
  /**
   * Register the gutenberg core blocks.
   */

  useEffect(function () {
    Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_3__["registerCoreBlocks"])(); // Since wp 5.4 core/freeform, core/shortcode block issues are fixed.

    var disAllowedBlocks = [];
    wp.blocks.getBlockTypes().forEach(function (blockType) {
      if (disAllowedBlocks.includes(blockType.name)) {
        wp.blocks.unregisterBlockType(blockType.name);
      }
    });
  }, []);
  var content;

  if ('list' === view) {
    content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_List_List__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  } else if ('form' === view) {
    content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_NewTable_NewTable__WEBPACK_IMPORTED_MODULE_12__["default"], null);
  } else if ('table' === view) {
    content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Table_Table__WEBPACK_IMPORTED_MODULE_13__["default"], null);
  } else if ('editCellModal' === view) {
    content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_EditCellModal_EditCellModal__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(StateContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    className: 'advanced-wp-table-toast',
    autoClose: 3000
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_15__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_14__["default"], null), content);
};

__signature__(App, "useReducer{[ state, dispatch ](initialState)}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(React, "React", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(useReducer, "useReducer", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(useEffect, "useEffect", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(StateContext, "StateContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(newTableData, "newTableData", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(tableChangedDialog, "tableChangedDialog", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(tableDeleteDialog, "tableDeleteDialog", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(initialState, "initialState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(reducer, "reducer", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(App, "App", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/App.scss":
/*!*********************************!*\
  !*** ./src/components/App.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/BlockPreviewAWT/auto.js":
/*!************************************************!*\
  !*** ./src/components/BlockPreviewAWT/auto.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resize-aware */ "./node_modules/react-resize-aware/dist/index.js");
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resize_aware__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

 // This is used to avoid rendering the block list if the sizes change.

var MemoizedBlockList;

function AutoBlockPreview(_ref) {
  var viewportWidth = _ref.viewportWidth,
      __experimentalPadding = _ref.__experimentalPadding;

  var _useResizeObserver = react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default()(),
      _useResizeObserver2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useResizeObserver, 2),
      containerResizeListener = _useResizeObserver2[0],
      containerWidth = _useResizeObserver2[1].width;

  var _useResizeObserver3 = react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default()(),
      _useResizeObserver4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useResizeObserver3, 2),
      containtResizeListener = _useResizeObserver4[0],
      contentHeight = _useResizeObserver4[1].height; // Initialize on render instead of module top level, to avoid circular dependency issues.


  MemoizedBlockList = MemoizedBlockList || Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["pure"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["BlockList"]);
  var scale = (containerWidth - 2 * __experimentalPadding) / viewportWidth;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "block-editor-block-preview__container editor-styles-wrapper",
    "aria-hidden": true,
    style: {
      height: contentHeight * scale + 2 * __experimentalPadding
    }
  }, containerResizeListener, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    style: {
      transform: "scale(".concat(scale, ")"),
      width: viewportWidth,
      left: __experimentalPadding,
      right: __experimentalPadding,
      top: __experimentalPadding
    },
    className: "block-editor-block-preview__content"
  }, containtResizeListener, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MemoizedBlockList, null)));
}

__signature__(AutoBlockPreview, "useResizeObserver{[\n\t\tcontainerResizeListener,\n\t\t{ width: containerWidth },\n\t]}\nuseResizeObserver{[\n\t\tcontaintResizeListener,\n\t\t{ height: contentHeight },\n\t]}", function () {
  return [react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default.a, react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default.a];
});

var _default = AutoBlockPreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MemoizedBlockList, "MemoizedBlockList", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/auto.js");
  reactHotLoader.register(AutoBlockPreview, "AutoBlockPreview", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/auto.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/auto.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/BlockPreviewAWT/index.js":
/*!*************************************************!*\
  !*** ./src/components/BlockPreviewAWT/index.js ***!
  \*************************************************/
/*! exports provided: BlockPreview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPreview", function() { return BlockPreview; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live */ "./src/components/BlockPreviewAWT/live.js");
/* harmony import */ var _auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto */ "./src/components/BlockPreviewAWT/auto.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function BlockPreview(_ref) {
  var blocks = _ref.blocks,
      _ref$__experimentalPa = _ref.__experimentalPadding,
      __experimentalPadding = _ref$__experimentalPa === void 0 ? 0 : _ref$__experimentalPa,
      _ref$viewportWidth = _ref.viewportWidth,
      viewportWidth = _ref$viewportWidth === void 0 ? 700 : _ref$viewportWidth,
      _ref$__experimentalLi = _ref.__experimentalLive,
      __experimentalLive = _ref$__experimentalLi === void 0 ? false : _ref$__experimentalLi,
      __experimentalOnClick = _ref.__experimentalOnClick;

  var settings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }, []);
  var renderedBlocks = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["castArray"])(blocks);
  }, [blocks]);

  if (!blocks || blocks.length === 0) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockEditorProvider"], {
    value: renderedBlocks,
    settings: settings
  }, __experimentalLive ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_live__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: __experimentalOnClick
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_auto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    viewportWidth: viewportWidth,
    __experimentalPadding: __experimentalPadding
  }));
}
/**
 * BlockPreview renders a preview of a block or array of blocks.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-preview/README.md
 *
 * @param {Object} preview options for how the preview should be shown
 * @param {Array|Object} preview.blocks A block instance (object) or an array of blocks to be previewed.
 * @param {number} preview.viewportWidth Width of the preview container in pixels. Controls at what size the blocks will be rendered inside the preview. Default: 700.
 *
 * @return {WPComponent} The component to be rendered.
 */

__signature__(BlockPreview, "useSelect{settings}\nuseMemo{renderedBlocks}", function () {
  return [_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"]];
});

var _default = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["memo"])(BlockPreview);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlockPreview, "BlockPreview", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/index.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/BlockPreviewAWT/live.js":
/*!************************************************!*\
  !*** ./src/components/BlockPreviewAWT/live.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveBlockPreview; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function LiveBlockPreview(_ref) {
  var onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    tabIndex: 0,
    role: "button",
    onClick: onClick,
    onKeyPress: onClick
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockList"], null)));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LiveBlockPreview, "LiveBlockPreview", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/BlockPreviewAWT/live.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/EditCellModal/EditCellModal.js":
/*!*******************************************************!*\
  !*** ./src/components/EditCellModal/EditCellModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor/Editor */ "./src/components/EditCellModal/Editor/Editor.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var EditCellModal = function EditCellModal() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-edit-cell-modal'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-edit-cell-modal-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Editor_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

var _default = EditCellModal;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditCellModal, "EditCellModal", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/EditCellModal.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/EditCellModal.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/EditCellModal/Editor/Buttons.js":
/*!********************************************************!*\
  !*** ./src/components/EditCellModal/Editor/Buttons.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ "./src/components/App.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Buttons = function Buttons() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_5__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var tables = state.tables,
      table = state.table,
      activeCell = state.activeCell;
  var i = activeCell.i,
      j = activeCell.j,
      content = activeCell.content;

  var onHandleSave = function onHandleSave() {
    var oldTables = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tables);

    var updatedTable = Object(_utils_table__WEBPACK_IMPORTED_MODULE_3__["updateTableWithCellData"])(table, activeCell);
    var newTables = oldTables.map(function (item) {
      if (item.id === updatedTable.id) {
        return updatedTable;
      }

      return item;
    });
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
    dispatch({
      type: 'UNSET_ACTIVE_CELL'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["toastSuccess"])(__('Successfully updated', 'advanced-wp-table')); // eslint-disable-next-line camelcase

    var id = updatedTable.id,
        advanced_wp_table_data = updatedTable.advanced_wp_table_data;
    var title = updatedTable.title.rendered;
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_3__["updateTable"])(id, title, advanced_wp_table_data).catch(function (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["dismissToasts"])();
      dispatch({
        type: 'SET_TABLE',
        payload: table
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["toastError"])(__('Oops, there was a problem when updating the table', 'advanced-wp-table'));
    });
  };

  var navigateToTable = function navigateToTable() {
    dispatch({
      type: 'UNSET_ACTIVE_CELL'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };

  var isActiveCellChanged = function isActiveCellChanged() {
    var oldTable = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(state.tables, function (item) {
      return item.id === table.id;
    });

    var _parseTableSize = Object(_utils_table__WEBPACK_IMPORTED_MODULE_3__["parseTableSize"])(oldTable),
        oldTableData = _parseTableSize.advanced_wp_table_data;

    var oldContent = oldTableData.rows[i][j]; // @todo Serialize content only if gutenberg active.

    var newContent = wp.blocks.serialize(content);

    var isEqual = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(oldContent, newContent);

    return !isEqual;
  };

  var onHandleCloseModal = function onHandleCloseModal() {
    if (isActiveCellChanged()) {
      dispatch({
        type: 'SET_TABLE_CHANGED_DIALOG',
        payload: {
          status: true,
          callbackLeave: navigateToTable
        }
      });
    } else {
      navigateToTable();
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-editor-action-buttons'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: onHandleSave,
    className: 'button button-primary button-large'
  }, __('Save Changes', 'advanced-wp-table')), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: onHandleCloseModal,
    className: 'button button-large'
  }, __('Close', 'advanced-wp-table'))));
};

__signature__(Buttons, "useContext{{ state, dispatch }}");

var _default = Buttons;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Buttons.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Buttons.js");
  reactHotLoader.register(Buttons, "Buttons", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Buttons.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Buttons.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/EditCellModal/Editor/Editor.js":
/*!*******************************************************!*\
  !*** ./src/components/EditCellModal/Editor/Editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/format-library */ "@wordpress/format-library");
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ "./src/components/App.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buttons */ "./src/components/EditCellModal/Editor/Buttons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/components/EditCellModal/Editor/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/components/EditCellModal/Editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useContext = _wp$element.useContext;
var __ = wp.i18n.__;
/**
 * Fix media upload permission error.
 *
 * Change the key form __experimentalMediaUpload to mediaUpload since wp 5.4.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */

_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["SETTINGS_DEFAULTS"].mediaUpload = wp.mediaUtils.uploadMedia;
_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["SETTINGS_DEFAULTS"].imageSizes = [{
  slug: 'thumbnail',
  name: __('Thumbnail', 'advanced-wp-table')
}, {
  slug: 'medium',
  name: __('Medium', 'advanced-wp-table')
}, {
  slug: 'large',
  name: __('Large', 'advanced-wp-table')
}, {
  slug: 'full',
  name: __('Full Size', 'advanced-wp-table')
}];

var Editor = function Editor() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_5__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var activeCell = state.activeCell;
  var blocks = activeCell.content;

  var onHandleChange = function onHandleChange(updatedBlocks) {
    dispatch({
      type: 'SET_ACTIVE_CELL',
      payload: _objectSpread(_objectSpread({}, activeCell), {}, {
        content: updatedBlocks
      })
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-editor'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SlotFillProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["DropZoneProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockEditorProvider"], {
    value: blocks,
    onInput: onHandleChange,
    onChange: onHandleChange
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'editor-styles-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      padding: '20px'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"].Slot, {
    name: 'block-toolbar'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockEditorKeyboardShortcuts"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["WritingFlow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ObserveTyping"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockList"], null)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-editor-sidebar'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockInspector"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"].Slot, null))))));
};

__signature__(Editor, "useContext{{ state, dispatch }}");

var _default = Editor;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Editor.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Editor.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Editor.js");
  reactHotLoader.register(Editor, "Editor", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Editor.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/EditCellModal/Editor/Editor.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/EditCellModal/Editor/editor.scss":
/*!*********************************************************!*\
  !*** ./src/components/EditCellModal/Editor/editor.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/editor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/EditCellModal/Editor/style.scss":
/*!********************************************************!*\
  !*** ./src/components/EditCellModal/Editor/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/EditCellModal/Editor/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/List/Actions.js":
/*!****************************************!*\
  !*** ./src/components/List/Actions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Actions = function Actions(_ref) {
  var table = _ref.table;
  var stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_4__["StateContext"]);
  var state = stateContext.state,
      dispatch = stateContext.dispatch;
  var tables = state.tables;
  var id = table.id;
  var total = parseInt(state.total);

  var onHandleNavigateToTable = function onHandleNavigateToTable() {
    dispatch({
      type: 'UNSET_TABLE_CHANGED'
    });
    dispatch({
      type: 'SET_TABLE',
      payload: table
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };

  var onHandleDuplicateTable = function onHandleDuplicateTable() {
    var oldTables = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tables);

    var tempTable = Object(_utils_table__WEBPACK_IMPORTED_MODULE_2__["prepareTableToDuplicate"])(oldTables, id);
    var tempTables = [tempTable].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oldTables));
    var newTableData = {
      title: tempTable.title.rendered,
      advanced_wp_table_data: tempTable.advanced_wp_table_data
    }; // Insert the temp table at the top of the tables list.

    dispatch({
      type: 'UPDATE_TOTAL',
      payload: total + 1
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: tempTables
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toastSuccess"])(__('Table duplicated successfully', 'advanced-wp-table')); // Insert the table into database.

    Object(_utils_table__WEBPACK_IMPORTED_MODULE_2__["postTable"])(newTableData).then(function (newTable) {
      // Replace the duplicated table with the temp table.
      var newTables = tempTables.map(function (item) {
        if (tempTable.id === item.id) {
          return newTable;
        }

        return item;
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: newTables
      }); // If we are not in the first page then paginate the tables to the first page.

      dispatch({
        type: 'PAGINATE_TABLES',
        payload: {
          offset: 0,
          currentPage: 0
        }
      });
    }).catch(function (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toastError"])(__('Oops, there was a problem when duplicating the table', 'advanced-wp-table'));
    });
  };

  var onHandleDeleteTable = function onHandleDeleteTable(e) {
    e.preventDefault();
    dispatch({
      type: 'SET_TABLE_DELETE_DIALOG',
      payload: {
        status: true,
        id: id
      }
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'row-actions'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: 'edit'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button-link',
    onClick: onHandleNavigateToTable
  }, __('Edit', 'advanced-wp-table'))), " | ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: 'duplicate'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button-link',
    onClick: onHandleDuplicateTable
  }, __('Duplicate', 'advanced-wp-table'))), " | ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: 'trash'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: '#/',
    onClick: onHandleDeleteTable
  }, __('Delete', 'advanced-wp-table'))));
};

__signature__(Actions, "useContext{stateContext}");

var _default = Actions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Actions.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Actions.js");
  reactHotLoader.register(Actions, "Actions", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Actions.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Actions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/List/Header.js":
/*!***************************************!*\
  !*** ./src/components/List/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Header = function Header() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__["StateContext"]),
      dispatch = _useContext.dispatch;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-header'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-header-inner'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, __('All Tables', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button',
    onClick: function onClick() {
      return dispatch({
        type: 'SET_VIEW',
        payload: 'form'
      });
    }
  }, __('Add New', 'advanced-wp-table'))));
};

__signature__(Header, "useContext{{ dispatch }}");

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Header.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Header.js");
  reactHotLoader.register(Header, "Header", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Header.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/List/List.js":
/*!*************************************!*\
  !*** ./src/components/List/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/List/Header.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ "./src/components/List/Pagination.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ "./src/components/List/Table.js");
/* harmony import */ var _TableLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableLoading */ "./src/components/List/TableLoading.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useContext = _wp$element.useContext;

var List = function List() {
  var stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__["StateContext"]);
  var tablesLoading = stateContext.state.tablesLoading;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], null), tablesLoading ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_TableLoading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

__signature__(List, "useContext{stateContext}");

var _default = List;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/List.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/List.js");
  reactHotLoader.register(List, "List", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/List.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/List.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/List/Pagination.js":
/*!*******************************************!*\
  !*** ./src/components/List/Pagination.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Pagination = function Pagination() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_2__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var total = state.total,
      totalPages = state.totalPages,
      perPage = state.perPage,
      currentPage = state.currentPage;

  var onHandlePageChange = function onHandlePageChange(data) {
    var selected = data.selected;
    var offset = Math.ceil(selected * perPage);
    dispatch({
      type: 'PAGINATE_TABLES',
      payload: {
        offset: offset,
        currentPage: selected
      }
    });
  };

  var paginationElement;

  if (1 < totalPages) {
    paginationElement = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_paginate__WEBPACK_IMPORTED_MODULE_1___default.a, {
      previousLabel: '‹',
      nextLabel: '›',
      breakLabel: '...',
      breakClassName: 'break-me',
      pageCount: parseInt(totalPages),
      forcePage: currentPage,
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 3,
      onPageChange: onHandlePageChange,
      containerClassName: 'advanced-wp-table-pagination',
      subContainerClassName: 'pages pagination',
      activeClassName: 'active'
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-pagination-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'advanced-wp-table-total-info'
  }, 1 === total ? "".concat(total, " ").concat(__('item', 'advanced-wp-table')) : "".concat(total, " ").concat(__('items', 'advanced-wp-table'))), paginationElement);
};

__signature__(Pagination, "useContext{{ state, dispatch }}");

var _default = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Pagination.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Pagination.js");
  reactHotLoader.register(Pagination, "Pagination", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Pagination.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Pagination.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/List/Table.js":
/*!**************************************!*\
  !*** ./src/components/List/Table.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./src/components/List/Actions.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Table = function Table() {
  var stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_2__["StateContext"]);
  var state = stateContext.state,
      dispatch = stateContext.dispatch;

  var onHandleNavigateToTable = function onHandleNavigateToTable(e, table) {
    e.preventDefault();
    dispatch({
      type: 'UNSET_TABLE_CHANGED'
    });
    dispatch({
      type: 'SET_TABLE',
      payload: table
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    className: 'title'
  }, __('Title', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    className: 'shortcode'
  }, __('Shortcode', 'advanced-wp-table')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, state.tables.length ? state.tables.map(function (table) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      key: table.id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: '#/',
      className: 'row-title',
      onClick: function onClick(e) {
        return onHandleNavigateToTable(e, table);
      }
    }, table.title.rendered)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      table: table
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      className: 'advanced-wp-table-shortcode',
      value: Object(_utils_table__WEBPACK_IMPORTED_MODULE_1__["getShortcode"])(table.id),
      readOnly: true,
      onClick: _utils_table__WEBPACK_IMPORTED_MODULE_1__["copyShortcode"]
    })));
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    colSpan: 2
  }, __('No tables found.', 'advanced-wp-table')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tfoot", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, __('Title', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, __('Shortcode', 'advanced-wp-table')))));
};

__signature__(Table, "useContext{stateContext}");

var _default = Table;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Table.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Table.js");
  reactHotLoader.register(Table, "Table", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Table.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/Table.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/List/TableLoading.js":
/*!*********************************************!*\
  !*** ./src/components/List/TableLoading.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var TableLoading = function TableLoading() {
  var stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__["StateContext"]);
  var state = stateContext.state;
  var rows = [];

  for (var i = 0; i < state.perPage; i++) {
    rows.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      key: i
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'advanced-wp-table-liner-loading title-loading'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'advanced-wp-table-liner-loading actions-loading'
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'advanced-wp-table-liner-loading shortcode-loading'
    }))));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list-loading'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    className: 'title'
  }, __('Title', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    className: 'shortcode'
  }, __('Shortcode', 'advanced-wp-table')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, rows), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tfoot", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, __('Title', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, __('Shortcode', 'advanced-wp-table')))));
};

__signature__(TableLoading, "useContext{stateContext}");

var _default = TableLoading;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/TableLoading.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/TableLoading.js");
  reactHotLoader.register(TableLoading, "TableLoading", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/TableLoading.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/List/TableLoading.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/NewTable/Form.js":
/*!*****************************************!*\
  !*** ./src/components/NewTable/Form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Form = function Form() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_4__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var tables = state.tables,
      formLoading = state.formLoading,
      newTableData = state.newTableData;
  var title = newTableData.title,
      sizeOfRows = newTableData.sizeOfRows,
      sizeOfColumns = newTableData.sizeOfColumns;

  var onHandleInputChange = function onHandleInputChange(e) {
    dispatch({
      type: 'SET_INPUT',
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  var onHandleCancelSubmission = function onHandleCancelSubmission() {
    dispatch({
      type: 'CLEAR_NEW_TABLE_DATA'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'list'
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["dismissToasts"])();
  };

  var onHandleFormSubmission = function onHandleFormSubmission(e) {
    e.preventDefault();

    try {
      Object(_utils_table__WEBPACK_IMPORTED_MODULE_2__["validateTable"])(newTableData);
    } catch (err) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toastError"])(err.message);
      return;
    }

    dispatch({
      type: 'SET_FORM_LOADING'
    });

    var oldTables = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tables);

    var parsedTableData = Object(_utils_table__WEBPACK_IMPORTED_MODULE_2__["prepareTable"])(newTableData);
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_2__["postTable"])(parsedTableData).then(function (newTable) {
      var newTables = [newTable].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oldTables));
      dispatch({
        type: 'UNSET_FORM_LOADING'
      });
      dispatch({
        type: 'SET_TABLE',
        payload: newTable
      });
      dispatch({
        type: 'SET_VIEW',
        payload: 'table'
      });
      dispatch({
        type: 'CLEAR_NEW_TABLE_DATA'
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toastSuccess"])(__('Table created successfully', 'advanced-wp-table'));
      dispatch({
        type: 'UPDATE_TABLES',
        payload: newTables
      }); // If we are not in the first page then paginate the tables to the first page.

      dispatch({
        type: 'PAGINATE_TABLES',
        payload: {
          offset: 0,
          currentPage: 0
        }
      });
    }).catch(function (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UNSET_FORM_LOADING'
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toastError"])(__('Oops, there was a problem when creating the table', 'advanced-wp-table'));
    });
  };

  var formClasses = 'advanced-wp-table-new-table-form';

  if (formLoading) {
    formClasses += ' loading';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", {
    className: formClasses,
    onSubmit: onHandleFormSubmission
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "advanced-wp-table-form-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    htmlFor: "title"
  }, __('Title', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    id: 'title',
    name: 'title',
    placeholder: __('Give a title', 'advanced-wp-table'),
    onChange: onHandleInputChange,
    value: title
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "advanced-wp-table-form-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    htmlFor: "no-of-rows"
  }, __('How many rows?', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    id: 'no-of-rows',
    name: 'sizeOfRows',
    onChange: onHandleInputChange,
    value: sizeOfRows
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "advanced-wp-table-form-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    htmlFor: "no-of-columns"
  }, __('How many columns?', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    id: 'no-of-columns',
    name: 'sizeOfColumns',
    onChange: onHandleInputChange,
    value: sizeOfColumns
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-form-buttons'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button button-primary',
    type: 'submit'
  }, __('Create', 'advanced-wp-table')), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button',
    onClick: onHandleCancelSubmission
  }, __('Cancel', 'advanced-wp-table'))));
};

__signature__(Form, "useContext{{ state, dispatch }}");

var _default = Form;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Form.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Form.js");
  reactHotLoader.register(Form, "Form", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Form.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Form.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/NewTable/Header.js":
/*!*******************************************!*\
  !*** ./src/components/NewTable/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var __ = wp.i18n.__;

var Header = function Header() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-header'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-header-inner'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, __('Add New Table', 'advanced-wp-table'))));
};

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Header.js");
  reactHotLoader.register(Header, "Header", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Header.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/Header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/NewTable/NewTable.js":
/*!*********************************************!*\
  !*** ./src/components/NewTable/NewTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/components/NewTable/Form.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/NewTable/Header.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Fragment = wp.element.Fragment;

var NewTable = function NewTable() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

var _default = NewTable;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/NewTable.js");
  reactHotLoader.register(NewTable, "NewTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/NewTable.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/NewTable/NewTable.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Table/Actions.js":
/*!*****************************************!*\
  !*** ./src/components/Table/Actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Actions = function Actions(_ref) {
  var i = _ref.i,
      j = _ref.j;

  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_4__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var table = state.table;
  var tableData = table.advanced_wp_table_data;
  var size = tableData.size,
      rows = tableData.rows;

  var onHandleOpenEditor = function onHandleOpenEditor() {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["dismissToasts"])();
    var content = rows[i][j]; // @todo Parse content only if gutenberg active.

    content = wp.blocks.parse(content);
    var activeCell = {
      i: i,
      j: j,
      content: content
    };
    dispatch({
      type: 'SET_ACTIVE_CELL',
      payload: activeCell
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'editCellModal'
    });
  };

  var onHandleDeleteColumn = function onHandleDeleteColumn() {
    var tempSize = _objectSpread({}, size);

    var newRows = rows.map(function (row) {
      return row.filter(function (column, index) {
        return index !== j;
      });
    });

    var newSize = _objectSpread(_objectSpread({}, tempSize), {}, {
      columns: tempSize.columns - 1
    });

    var updatedTable = _objectSpread(_objectSpread({}, table), {}, {
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    });

    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };

  var onHandleDeleteRow = function onHandleDeleteRow() {
    var tempSize = _objectSpread({}, size);

    var newRows = rows.filter(function (row, index) {
      return index !== i;
    });

    var newSize = _objectSpread(_objectSpread({}, tempSize), {}, {
      rows: tempSize.rows - 1
    });

    var updatedTable = _objectSpread(_objectSpread({}, table), {}, {
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    });

    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };

  var onHandleDuplicateRow = function onHandleDuplicateRow() {
    var tempSize = _objectSpread({}, size);

    var newRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rows);

    var newRowContent = newRows[i];
    newRows.splice(i + 0, 0, newRowContent);

    var newSize = _objectSpread(_objectSpread({}, tempSize), {}, {
      rows: tempSize.rows + 1
    });

    var updatedTable = _objectSpread(_objectSpread({}, table), {}, {
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    });

    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-cell-actions'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-actions-dropdown"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-actions-dropdown-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleOpenEditor,
    role: "presentation"
  }, __('Edit', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDeleteColumn,
    role: "presentation"
  }, __('Delete Column', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDeleteRow,
    role: "presentation"
  }, __('Delete Row', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDuplicateRow,
    role: "presentation"
  }, __('Duplicate Row', 'advanced-wp-table')))));
};

__signature__(Actions, "useContext{{ state, dispatch }}");

var _default = Actions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Actions.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Actions.js");
  reactHotLoader.register(Actions, "Actions", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Actions.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Actions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Table/Buttons.js":
/*!*****************************************!*\
  !*** ./src/components/Table/Buttons.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var useContext = wp.element.useContext;
var __ = wp.i18n.__;

var Buttons = function Buttons() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_5__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var tables = state.tables,
      table = state.table;
  var tableData = table.advanced_wp_table_data;
  var size = tableData.size,
      rows = tableData.rows;

  var onHandleSaveTable = function onHandleSaveTable() {
    var oldTables = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tables);

    var newTables = oldTables.map(function (item) {
      if (item.id === table.id) {
        return table;
      }

      return item;
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["toastSuccess"])(__('Successfully updated', 'advanced-wp-table')); // eslint-disable-next-line camelcase

    var id = table.id,
        advanced_wp_table_data = table.advanced_wp_table_data;
    var title = table.title.rendered;
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_3__["updateTable"])(id, title, advanced_wp_table_data).catch(function (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["dismissToasts"])();
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["toastError"])(__('Oops, there was a problem when updating the table', 'advanced-wp-table'));
    });
  };

  var onHandleAddRow = function onHandleAddRow() {
    var tempSize = _objectSpread({}, size);

    var tempRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(rows);

    var newRow = [];

    for (var i = 0; i < tempSize.columns; i++) {
      newRow.push('');
    }

    var newRows = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tempRows), [newRow]);

    var newSize = _objectSpread(_objectSpread({}, tempSize), {}, {
      rows: tempSize.rows + 1
    });

    var updatedTable = _objectSpread(_objectSpread({}, table), {}, {
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    });

    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };

  var onHandleAddColumn = function onHandleAddColumn() {
    var tempSize = _objectSpread({}, size);

    var tempRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(rows);

    var newRows = [];
    tempRows.map(function (row) {
      var newRow = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(row), ['']);
      return newRows.push(newRow);
    });

    var newSize = _objectSpread(_objectSpread({}, tempSize), {}, {
      columns: tempSize.columns + 1
    });

    var updatedTable = _objectSpread(_objectSpread({}, table), {}, {
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    });

    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-post-item-buttons'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: 'button button-primary',
    onClick: onHandleSaveTable
  }, __('Save Changes', 'advanced-wp-table'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'button-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: 'button button-small',
    onClick: onHandleAddRow
  }, __('Add Row', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: 'button button-small',
    onClick: onHandleAddColumn
  }, __('Add Column', 'advanced-wp-table'))));
};

__signature__(Buttons, "useContext{{ state, dispatch }}");

var _default = Buttons;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Buttons.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Buttons.js");
  reactHotLoader.register(Buttons, "Buttons", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Buttons.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Buttons.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Table/Header.js":
/*!****************************************!*\
  !*** ./src/components/Table/Header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useContext = _wp$element.useContext,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef;
var __ = wp.i18n.__;
var Tooltip = wp.components.Tooltip;

var Header = function Header() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_6__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var table = state.table;
  var title = table.title.rendered;

  var _useState = useState(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      elmClass = _useState2[0],
      setElmClass = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isEditing = _useState4[0],
      setEditing = _useState4[1];

  var headerRef = useRef(null);
  var editTitleRef = useRef(null);
  var inputRef = useRef(null);
  var navigateToListRef = useRef(null);
  var lastScroll = 0;

  var handleScroll = function handleScroll() {
    // @todo I am not sure why removeEventLister not working in the useEffect hook
    if (null === headerRef.current) {
      window.removeEventListener('scroll', function () {
        return handleScroll;
      }, false);
      return;
    }

    var currentScroll = window.pageYOffset;

    if (0 === currentScroll) {
      setElmClass('');
      return;
    }

    if (currentScroll > lastScroll && elmClass !== 'no-sticky') {
      setElmClass('no-sticky');
    } else if (currentScroll < lastScroll && elmClass !== 'sticky') {
      setElmClass('sticky');
    }

    lastScroll = currentScroll;
  };

  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', function () {
        return handleScroll;
      });
    };
  }, []);
  useEffect(function () {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  var closeEditTitle = function closeEditTitle(e) {
    if (!editTitleRef.current.contains(e.target)) {
      setEditing(false);
      document.getElementById('wpwrap').removeEventListener('click', closeEditTitle);
    }
  };

  var handleToggleEditTitle = function handleToggleEditTitle() {
    setEditing(true);
    document.getElementById('wpwrap').addEventListener('click', closeEditTitle);
  };

  var handleChange = function handleChange(e) {
    var newTable = _objectSpread(_objectSpread({}, table), {}, {
      title: _objectSpread(_objectSpread({}, table.title), {}, {
        rendered: e.target.value
      })
    });

    dispatch({
      type: 'SET_TABLE',
      payload: newTable
    });
  };

  var navigateToList = function navigateToList() {
    dispatch({
      type: 'UNSET_TABLE'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'list'
    });
  };

  var isTableChanged = function isTableChanged() {
    var oldTable = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(state.tables, function (item) {
      return item.id === table.id;
    });

    var _parseTableSize = Object(_utils_table__WEBPACK_IMPORTED_MODULE_4__["parseTableSize"])(oldTable),
        oldTableData = _parseTableSize.advanced_wp_table_data;

    var newTableData = table.advanced_wp_table_data;

    var isEqual = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(oldTableData, newTableData);

    return !isEqual;
  };

  var isTitleChanged = function isTitleChanged() {
    var oldTable = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(state.tables, function (item) {
      return item.id === table.id;
    });

    var oldTitle = oldTable.title.rendered;
    var newTitle = table.title.rendered;

    var isEqual = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(oldTitle, newTitle);

    return !isEqual;
  };

  var onHandleNavigateToList = function onHandleNavigateToList() {
    if (isTableChanged() || isTitleChanged()) {
      dispatch({
        type: 'SET_TABLE_CHANGED_DIALOG',
        payload: {
          status: true,
          callbackLeave: navigateToList
        }
      });
    } else {
      navigateToList();
    }
  };

  var handleShortcodeCopy = function handleShortcodeCopy() {
    var shortcode = Object(_utils_table__WEBPACK_IMPORTED_MODULE_4__["getShortcode"])(table.id);
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_4__["textToClipboard"])(shortcode);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["toastSuccess"])(__('Shortcode copied', 'advanced-wp-table'), {
      position: 'bottom-right'
    });
  };

  var handleSave = function handleSave() {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["toastSuccess"])(__('Successfully updated', 'advanced-wp-table'), {
      position: 'bottom-right'
    });
  };

  var elmClasses = 'advanced-wp-table-fixed-header';

  if (elmClass) {
    elmClasses = "advanced-wp-table-fixed-header ".concat(elmClass);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-fixed-header-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "".concat(elmClasses),
    ref: headerRef
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-header-navigate-to-list'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: 'button',
    ref: navigateToListRef,
    onClick: onHandleNavigateToList
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: 'dashicons dashicons-controls-back'
  }), __('Back to Tables', 'advanced-wp-table'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-header-title'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-edit-title-wrapper',
    ref: editTitleRef
  }, isEditing ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "text",
    ref: inputRef,
    value: title,
    onChange: handleChange
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h1", {
    className: 'advanced-wp-table-title'
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-edit-title-toggle',
    role: 'presentation',
    onClick: handleToggleEditTitle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tooltip, {
    text: __('Click to edit the title', 'advanced-wp-table'),
    position: 'bottom center'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: 'dashicons dashicons-edit'
  }))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-header-actions'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tooltip, {
    text: __('Click to copy the shortcode', 'advanced-wp-table'),
    position: 'bottom center'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'advanced-wp-table-shortcode',
    role: 'presentation',
    onClick: handleShortcodeCopy
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: 'dashicons dashicons-clipboard'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    type: 'button',
    className: 'button'
  }, __('Preview', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    type: 'button',
    className: 'button button-primary',
    onClick: handleSave
  }, __('Save', 'advanced-wp-table')))));
};

__signature__(Header, "useContext{{ state, dispatch }}\nuseState{[ elmClass, setElmClass ]('')}\nuseState{[ isEditing, setEditing ](false)}\nuseRef{headerRef}\nuseRef{editTitleRef}\nuseRef{inputRef}\nuseRef{navigateToListRef}\nuseEffect{}\nuseEffect{}");

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(useEffect, "useEffect", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(useState, "useState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(useRef, "useRef", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(Tooltip, "Tooltip", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(Header, "Header", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Table/Table.js":
/*!***************************************!*\
  !*** ./src/components/Table/Table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Actions */ "./src/components/Table/Actions.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buttons */ "./src/components/Table/Buttons.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./src/components/Table/Header.js");
/* harmony import */ var _BlockPreviewAWT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BlockPreviewAWT */ "./src/components/BlockPreviewAWT/index.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef,
    useContext = _wp$element.useContext; // tell direction after drag start, the first direction that reach 5px offset

var DRAG_DIRECTION_NONE = '';
var DRAG_DIRECTION_ROW = 'row';
var DRAG_DIRECTION_COLUMN = 'column';
var defaultDragState = {
  column: -1,
  row: -1,
  startPoint: null,
  direction: DRAG_DIRECTION_NONE,
  // row=move up down/column=move left right,
  dropIndex: -1 // drag target

};

var Table = function Table() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_4__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _state$table$advanced = state.table.advanced_wp_table_data.rows,
      rows = _state$table$advanced === void 0 ? [] : _state$table$advanced;

  var _useState = useState(_objectSpread({}, defaultDragState)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      dragState = _useState2[0],
      setDragState = _useState2[1];

  var rowsEl = useRef(null),
      preview = useRef(null);

  if (dragState.direction === DRAG_DIRECTION_COLUMN) {
    rows = rows.map(function (x) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["offsetIndex"])(dragState.column, dragState.dropIndex, x);
    });
  }

  if (dragState.direction === DRAG_DIRECTION_ROW) {
    rows = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["offsetIndex"])(dragState.row, dragState.dropIndex, rows);
  }

  var setOpacity = function setOpacity(i, j) {
    var opacity = null;
    var direction = dragState.direction,
        dropIndex = dragState.dropIndex;

    if (DRAG_DIRECTION_COLUMN === direction) {
      if (j === dropIndex) {
        opacity = 0.5;
      } else {
        opacity = 1;
      }
    }

    if (DRAG_DIRECTION_ROW === direction) {
      if (i === dropIndex) {
        opacity = 0.5;
      } else {
        opacity = 1;
      }
    }

    return opacity;
  };

  var renderBlocksPreview = function renderBlocksPreview(content) {
    var parsed = wp.blocks.parse(content);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_BlockPreviewAWT__WEBPACK_IMPORTED_MODULE_8__["BlockPreview"], {
      blocks: parsed
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("table", {
    className: 'advanced-wp-table advanced-wp-table-post-item'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tbody", {
    ref: rowsEl
  }, rows.map(function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", {
      key: i
    }, x.map(function (y, j) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", {
        key: j,
        style: {
          cursor: dragState.direction ? 'move' : 'grab',
          opacity: setOpacity(i, j)
        },
        draggable: "true",
        onDragStart: function onDragStart(e) {
          e.dataTransfer.setDragImage(preview.current, 0, 0);
          setDragState(_objectSpread(_objectSpread({}, dragState), {}, {
            row: i,
            column: j,
            startPoint: {
              x: e.pageX,
              y: e.pageY
            }
          }));
        },
        onDragEnter: function onDragEnter() {
          if (!dragState.direction) {
            if (dragState.column !== j) {
              setDragState(_objectSpread(_objectSpread({}, dragState), {}, {
                direction: DRAG_DIRECTION_COLUMN,
                dropIndex: j
              }));
              return;
            }

            if (dragState.row !== i) {
              setDragState(_objectSpread(_objectSpread({}, dragState), {}, {
                direction: DRAG_DIRECTION_ROW,
                dropIndex: i
              }));
              return;
            }

            return;
          }

          if (dragState.direction === DRAG_DIRECTION_COLUMN) {
            if (j !== dragState.dropIndex) {
              setDragState(_objectSpread(_objectSpread({}, dragState), {}, {
                dropIndex: j
              }));
            }

            return;
          }

          if (dragState.direction === DRAG_DIRECTION_ROW) {
            if (i !== dragState.dropIndex) {
              setDragState(_objectSpread(_objectSpread({}, dragState), {}, {
                dropIndex: i
              }));
            }
          }
        },
        onDragEnd: function onDragEnd() {
          dispatch({
            type: 'ON_DRAG_END_TABLE',
            payload: rows
          });
          setDragState(_objectSpread({}, defaultDragState));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'advanced-wp-table-cell-wrapper'
      }, renderBlocksPreview(y), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Actions__WEBPACK_IMPORTED_MODULE_5__["default"], {
        i: i,
        j: j
      })));
    }));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    ref: preview,
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

__signature__(Table, "useContext{{ state, dispatch }}\nuseState{[ dragState, setDragState ]({ ...defaultDragState })}\nuseRef{rowsEl}\nuseRef{preview}");

var _default = Table;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(useState, "useState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(useRef, "useRef", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_NONE, "DRAG_DIRECTION_NONE", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_ROW, "DRAG_DIRECTION_ROW", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_COLUMN, "DRAG_DIRECTION_COLUMN", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(defaultDragState, "defaultDragState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(Table, "Table", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/Table/Table.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/TableChangedDialog/TableChangedDialog.js":
/*!*****************************************************************!*\
  !*** ./src/components/TableChangedDialog/TableChangedDialog.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/dialog.esm.js");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog/styles.css */ "./node_modules/@reach/dialog/styles.css");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useContext = _wp$element.useContext;
var __ = wp.i18n.__;

var TableChangedDialog = function TableChangedDialog() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_3__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var tableChangedDialog = state.tableChangedDialog;
  var status = tableChangedDialog.status,
      callbackCancel = tableChangedDialog.callbackCancel,
      callbackLeave = tableChangedDialog.callbackLeave;

  var onHandleCancel = function onHandleCancel() {
    if (callbackCancel) {
      callbackCancel();
    }

    dispatch({
      type: 'UNSET_TABLE_CHANGED_DIALOG'
    });
  };

  var onHandleLeave = function onHandleLeave() {
    if (callbackLeave) {
      callbackLeave();
    }

    dispatch({
      type: 'UNSET_TABLE_CHANGED_DIALOG'
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, status && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    "aria-label": 'Leave Changes?'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: 'advanced-wp-table-alert-title'
  }, __('Leave changes?', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: 'advanced-wp-table-alert-desc'
  }, __('The changes you made will be lost if you leave this.', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'advanced-wp-table-alert-buttons'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button button-cancel',
    onClick: onHandleCancel
  }, __('Cancel', 'advanced-wp-table')), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button button-primary button-leave',
    onClick: onHandleLeave
  }, __('Leave', 'advanced-wp-table')))));
};

__signature__(TableChangedDialog, "useContext{{ state, dispatch }}");

var _default = TableChangedDialog;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableChangedDialog/TableChangedDialog.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableChangedDialog/TableChangedDialog.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableChangedDialog/TableChangedDialog.js");
  reactHotLoader.register(TableChangedDialog, "TableChangedDialog", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableChangedDialog/TableChangedDialog.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableChangedDialog/TableChangedDialog.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/TableDeleteDialog/TableDeleteDialog.js":
/*!***************************************************************!*\
  !*** ./src/components/TableDeleteDialog/TableDeleteDialog.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/dialog.esm.js");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/dialog/styles.css */ "./node_modules/@reach/dialog/styles.css");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useContext = _wp$element.useContext;
var __ = wp.i18n.__;

var TableDeleteDialog = function TableDeleteDialog() {
  var _useContext = useContext(_App__WEBPACK_IMPORTED_MODULE_6__["StateContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var tables = state.tables,
      tableDeleteDialog = state.tableDeleteDialog;
  var status = tableDeleteDialog.status,
      id = tableDeleteDialog.id;
  var total = parseInt(state.total);

  var onHandleCancel = function onHandleCancel() {
    dispatch({
      type: 'UNSET_TABLE_DELETE_DIALOG'
    });
  };

  var onHandleDelete = function onHandleDelete() {
    var oldTables = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tables);

    var newTables = oldTables.filter(function (item) {
      return id !== item.id;
    });
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: total - 1
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
    dispatch({
      type: 'UNSET_TABLE_DELETE_DIALOG'
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["toastSuccess"])(__('Table deleted successfully', 'advanced-wp-table'));
    Object(_utils_table__WEBPACK_IMPORTED_MODULE_4__["deleteTable"])(id).then(function () {
      // If we are not in the first page then paginate the tables to the first page.
      dispatch({
        type: 'PAGINATE_TABLES',
        payload: {
          offset: 0,
          currentPage: 0
        }
      });
    }).catch(function (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UPDATE_TOTAL',
        payload: total
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["toastError"])(__('Oops, there was a problem when deleting the table', 'advanced-wp-table'));
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, status && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    "aria-label": 'Delete Table?'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: 'advanced-wp-table-alert-title'
  }, __('Delete Table?', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: 'advanced-wp-table-alert-desc'
  }, __('This action is permanent and can\'t be undone.', 'advanced-wp-table')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'advanced-wp-table-alert-buttons'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button button-cancel',
    onClick: onHandleCancel
  }, __('Cancel', 'advanced-wp-table')), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'button button-primary button-leave',
    onClick: onHandleDelete
  }, __('Delete', 'advanced-wp-table')))));
};

__signature__(TableDeleteDialog, "useContext{{ state, dispatch }}");

var _default = TableDeleteDialog;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableDeleteDialog/TableDeleteDialog.js");
  reactHotLoader.register(useContext, "useContext", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableDeleteDialog/TableDeleteDialog.js");
  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableDeleteDialog/TableDeleteDialog.js");
  reactHotLoader.register(TableDeleteDialog, "TableDeleteDialog", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableDeleteDialog/TableDeleteDialog.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/components/TableDeleteDialog/TableDeleteDialog.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var render = wp.element.render;
 // eslint-disable-next-line camelcase,no-undef

__webpack_require__.p = 'http://localhost:8083/'; // This is important, the port should be same as the devPort in webpack.config.js file.

if (document.getElementById('advanced-wp-table-wrapper')) {
  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById("advanced-wp-table-wrapper"));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/table.js":
/*!****************************!*\
  !*** ./src/utils/table.js ***!
  \****************************/
/*! exports provided: getTables, validateTable, prepareTable, postTable, getTable, deleteTable, updateTable, parseTableSize, updateTableWithCellData, prepareTableToDuplicate, getShortcode, copyShortcode, textToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTables", function() { return getTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTable", function() { return validateTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTable", function() { return prepareTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTable", function() { return postTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTable", function() { return getTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTable", function() { return deleteTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTable", function() { return updateTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTableSize", function() { return parseTableSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTableWithCellData", function() { return updateTableWithCellData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTableToDuplicate", function() { return prepareTableToDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortcode", function() { return getShortcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyShortcode", function() { return copyShortcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToClipboard", function() { return textToClipboard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var __ = wp.i18n.__;
function getTables(_x, _x2) {
  return _getTables.apply(this, arguments);
}

function _getTables() {
  _getTables = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(perPage, offset) {
    var options, response, total, totalPages, tables, err;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              path: wp.url.addQueryArgs(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getApiEndpoint"])(), {
                per_page: perPage,
                offset: offset
              }),
              parse: false
            };
            _context.prev = 1;
            _context.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()(options);

          case 4:
            response = _context.sent;
            total = response.headers && response.headers.get('X-WP-Total');
            totalPages = response.headers && response.headers.get('X-WP-TotalPages');
            _context.next = 9;
            return response.json();

          case 9:
            tables = _context.sent;
            return _context.abrupt("return", {
              total: total,
              totalPages: totalPages,
              tables: tables
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            _context.next = 17;
            return _context.t0.json();

          case 17:
            err = _context.sent;
            throw new Error(err.message);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _getTables.apply(this, arguments);
}

function validateTable(tableData) {
  var title = tableData.title,
      sizeOfRows = tableData.sizeOfRows,
      sizeOfColumns = tableData.sizeOfColumns;

  if (!title) {
    throw new Error(__('Title shouldn\'t be empty', 'advanced-wp-table'));
  }

  if (parseInt(sizeOfRows) < 1) {
    throw new Error(__('Size of rows should be greater than 0', 'advanced-wp-table'));
  }

  if (parseInt(sizeOfColumns) < 1) {
    throw new Error(__('Size of columns should be greater than 0', 'advanced-wp-table'));
  }
}
function prepareTable(tableData) {
  var title = tableData.title,
      sizeOfRows = tableData.sizeOfRows,
      sizeOfColumns = tableData.sizeOfColumns;
  var tableSize = {
    rows: sizeOfRows,
    columns: sizeOfColumns
  };
  var tableRows = [];

  for (var i = 0; i < sizeOfRows; i++) {
    var emptyRow = [];

    for (var j = 0; j < sizeOfColumns; j++) {
      emptyRow.push('');
    }

    tableRows.push(emptyRow);
  }

  return {
    title: title,
    advanced_wp_table_data: {
      size: tableSize,
      rows: tableRows
    }
  };
} // eslint-disable-next-line camelcase

function postTable(_x3) {
  return _postTable.apply(this, arguments);
}

function _postTable() {
  _postTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var title, advanced_wp_table_data, options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = _ref.title, advanced_wp_table_data = _ref.advanced_wp_table_data;
            options = {
              path: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getApiEndpoint"])(),
              method: 'POST',
              data: {
                title: title,
                status: 'publish',
                advanced_wp_table_data: advanced_wp_table_data
              }
            };
            _context2.prev = 2;
            _context2.next = 5;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()(options);

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            throw new Error(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return _postTable.apply(this, arguments);
}

function getTable(_x4) {
  return _getTable.apply(this, arguments);
}

function _getTable() {
  _getTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              path: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getApiEndpoint"])() + '/' + id,
              method: 'GET'
            };
            _context3.prev = 1;
            _context3.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()(options);

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            throw new Error(_context3.t0.message);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));
  return _getTable.apply(this, arguments);
}

function deleteTable(_x5) {
  return _deleteTable.apply(this, arguments);
} // eslint-disable-next-line camelcase

function _deleteTable() {
  _deleteTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = {
              path: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getApiEndpoint"])() + '/' + id,
              method: 'DELETE'
            };
            _context4.prev = 1;
            _context4.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()(options);

          case 4:
            return _context4.abrupt("return", _context4.sent);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            throw new Error(_context4.t0.message);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return _deleteTable.apply(this, arguments);
}

function updateTable(_x6, _x7, _x8) {
  return _updateTable.apply(this, arguments);
}

function _updateTable() {
  _updateTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, title, advanced_wp_table_data) {
    var options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = {
              path: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getApiEndpoint"])() + '/' + id,
              method: 'PUT',
              data: {
                title: title,
                advanced_wp_table_data: advanced_wp_table_data
              }
            };
            _context5.prev = 1;
            _context5.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()(options);

          case 4:
            return _context5.abrupt("return", _context5.sent);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            throw new Error(_context5.t0.message);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));
  return _updateTable.apply(this, arguments);
}

function parseTableSize(table) {
  var tableData = table.advanced_wp_table_data;
  var _tableData$size = tableData.size,
      rows = _tableData$size.rows,
      columns = _tableData$size.columns;
  var size = {
    rows: parseInt(rows),
    columns: parseInt(columns)
  };
  return _objectSpread(_objectSpread({}, table), {}, {
    advanced_wp_table_data: _objectSpread(_objectSpread({}, tableData), {}, {
      size: size
    })
  });
}
function updateTableWithCellData(table, activeCell) {
  var tableData = table.advanced_wp_table_data;

  var tempRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tableData.rows);

  var i = activeCell.i,
      j = activeCell.j,
      content = activeCell.content; // @todo Serialize content only if gutenberg active.

  var serializedContent = wp.blocks.serialize(content);
  var newRows = [];
  tempRows.map(function (row, rowIndex) {
    if (i !== rowIndex) {
      return newRows.push(row);
    }

    var newRow = [];
    row.map(function (data, columnIndex) {
      if (j !== columnIndex) {
        return newRow.push(data);
      }

      return newRow.push(serializedContent);
    });
    return newRows.push(newRow);
  });
  return _objectSpread(_objectSpread({}, table), {}, {
    advanced_wp_table_data: _objectSpread(_objectSpread({}, tableData), {}, {
      rows: newRows
    })
  });
}
function prepareTableToDuplicate(tables, targetTableId) {
  var targetTable = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.find(tables, function (item) {
    return targetTableId === item.id;
  });

  var tempId = "new".concat(targetTable.id);
  var newTableTitle = "".concat(targetTable.title.rendered, " (").concat(__('Duplicated', 'advanced-wp-table'), ")");
  return _objectSpread(_objectSpread({}, targetTable), {}, {
    id: tempId,
    title: _objectSpread(_objectSpread({}, targetTable.title), {}, {
      rendered: newTableTitle
    })
  });
}
function getShortcode(id) {
  return "[advanced_wp_table id=\"".concat(id, "\"]");
}
function copyShortcode(e) {
  e.target.select();
  document.execCommand('copy');
}
function textToClipboard(text) {
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__, "__", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(getTables, "getTables", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(validateTable, "validateTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(prepareTable, "prepareTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(postTable, "postTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(getTable, "getTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(deleteTable, "deleteTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(updateTable, "updateTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(parseTableSize, "parseTableSize", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(updateTableWithCellData, "updateTableWithCellData", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(prepareTableToDuplicate, "prepareTableToDuplicate", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(getShortcode, "getShortcode", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(copyShortcode, "copyShortcode", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
  reactHotLoader.register(textToClipboard, "textToClipboard", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/table.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getApiEndpoint, toastSuccess, toastError, dismissToasts, createMarkup, offsetIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiEndpoint", function() { return getApiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastSuccess", function() { return toastSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastError", function() { return toastError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissToasts", function() { return dismissToasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkup", function() { return createMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetIndex", function() { return offsetIndex; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


function getApiEndpoint() {
  return '/wp/v2/advanced-wp-table';
}
function toastSuccess(message) {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(message);
}
function toastError(message) {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(message);
}
function dismissToasts() {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss();
}
function createMarkup(html) {
  return {
    __html: html
  };
}
function offsetIndex(from, to) {
  var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (from < to) {
    var start = arr.slice(0, from),
        between = arr.slice(from + 1, to + 1),
        end = arr.slice(to + 1);
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(start), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(between), [arr[from]], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(end));
  }

  if (from > to) {
    var _start = arr.slice(0, to),
        _between = arr.slice(to, from),
        _end = arr.slice(from + 1);

    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_start), [arr[from]], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_between), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_end));
  }

  return arr;
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getApiEndpoint, "getApiEndpoint", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
  reactHotLoader.register(toastSuccess, "toastSuccess", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
  reactHotLoader.register(toastError, "toastError", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
  reactHotLoader.register(dismissToasts, "dismissToasts", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
  reactHotLoader.register(createMarkup, "createMarkup", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
  reactHotLoader.register(offsetIndex, "offsetIndex", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/advanced-wp-table-pro/src/utils/utils.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/block-library":
/*!***********************************************!*\
  !*** external {"this":["wp","blockLibrary"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockLibrary"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/format-library":
/*!************************************************!*\
  !*** external {"this":["wp","formatLibrary"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["formatLibrary"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map