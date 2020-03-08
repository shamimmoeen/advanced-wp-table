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
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
  throw new TypeError("Invalid attempt to spread non-iterable instance");
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

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
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

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/table.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/table.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wp-table table {\n  border-collapse: collapse;\n  margin: 2.5em 0;\n  width: 100%; }\n  .wp-table table .wp-table-cell-wrapper {\n    align-items: self-start;\n    display: flex;\n    justify-content: space-between; }\n  .wp-table table .wp-table-edit-cell {\n    border-radius: 3px 3px 0 0;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 20px;\n    opacity: 0;\n    position: relative;\n    transition: background-color 0.1s ease-in;\n    visibility: hidden;\n    z-index: 2; }\n  .wp-table table td {\n    border: 1px solid;\n    cursor: grab;\n    padding: 5px;\n    position: relative;\n    vertical-align: initial; }\n    .wp-table table td:hover .wp-table-edit-cell {\n      opacity: 1;\n      visibility: visible; }\n\n.wp-table .wp-table-cell-actions {\n  position: relative; }\n  .wp-table .wp-table-cell-actions .wp-table-actions-dropdown {\n    background-color: #6d6d6d;\n    border-radius: 0 0 3px 3px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n    color: #fff;\n    cursor: initial;\n    opacity: 0;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 100%;\n    transition: opacity 0.1s ease-in;\n    visibility: hidden;\n    width: 100px;\n    z-index: 1; }\n    .wp-table .wp-table-cell-actions .wp-table-actions-dropdown .wp-table-action-item {\n      cursor: pointer; }\n  .wp-table .wp-table-cell-actions:hover .wp-table-edit-cell {\n    background-color: #6d6d6d;\n    color: #fff; }\n  .wp-table .wp-table-cell-actions:hover .wp-table-actions-dropdown {\n    opacity: 1;\n    visibility: visible; }\n\n.wp-table .wp-table-modal {\n  background-color: #fff;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 99999; }\n  .wp-table .wp-table-modal .wp-table-cell-editor-button-groups {\n    border-bottom: 1px solid #ddd;\n    padding: 25px;\n    text-align: right; }\n  .wp-table .wp-table-modal .block-editor {\n    position: relative; }\n    .wp-table .wp-table-modal .block-editor .block-editor-block-card {\n      padding: 16px; }\n    .wp-table .wp-table-modal .block-editor .components-select-control__input {\n      border-color: #7e8993;\n      border-radius: 3px;\n      box-shadow: none;\n      color: #32373c;\n      font-size: 14px;\n      line-height: 2;\n      padding: 0 24px 0 8px; }\n", ""]);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/Modal */ "./src/components/modal/Modal.js");
/* harmony import */ var _table_Buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/Buttons */ "./src/components/table/Buttons.js");
/* harmony import */ var _table_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/Table */ "./src/components/table/Table.js");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;






var defaultTable = {
  size: {
    rows: 2,
    columns: 2
  },
  rows: [['', ''], ['', '']]
};

var App = function App() {
  var _useState = useState([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      modalState = _useState4[0],
      setModalState = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      cellData = _useState6[0],
      setCellData = _useState6[1];

  var size = data.size,
      rows = data.rows;
  var cacheKey = 'wp_table_blocks';
  useEffect(function () {
    Object(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_5__["registerCoreBlocks"])();
    var disAllowedBlocks = ['core/freeform', // causes js not found issue when rendering
    'core/shortcode' // causes block validation failed
    ];
    wp.blocks.getBlockTypes().forEach(function (blockType) {
      if (disAllowedBlocks.includes(blockType.name)) {
        wp.blocks.unregisterBlockType(blockType.name);
      }
    });
  }, []);
  useEffect(function () {
    // eslint-disable-next-line no-undef
    var oldData = JSON.parse(localStorage.getItem(cacheKey));

    if (!oldData) {
      oldData = defaultTable;
    }

    setData(oldData);
  }, []);

  var handleAddRow = function handleAddRow() {
    var tempSize = _objectSpread({}, size);

    var tempRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rows);

    var newRow = [];

    for (var i = 0; i < tempSize.columns; i++) {
      newRow.push('');
    }

    var newData = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tempRows), [newRow]);

    var newSize = _objectSpread({}, tempSize, {
      rows: tempSize.rows + 1
    });

    var newTable = {
      size: newSize,
      rows: newData
    };
    setData(newTable);
  };

  var handleAddColumn = function handleAddColumn() {
    var tempSize = _objectSpread({}, size);

    var tempRows = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rows);

    var newData = [];
    tempRows.map(function (row) {
      var newRow = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(row), ['']);
      return newData.push(newRow);
    });

    var newSize = _objectSpread({}, tempSize, {
      columns: tempSize.columns + 1
    });

    var newTable = {
      size: newSize,
      rows: newData
    };
    setData(newTable);
  };

  var handleResetTable = function handleResetTable() {
    var newTable = _objectSpread({}, defaultTable);

    setData(newTable);
  };

  var handleDeleteColumn = function handleDeleteColumn(j) {
    var tempSize = _objectSpread({}, size);

    var newRows = rows.map(function (row) {
      return row.filter(function (column, index) {
        return index !== j;
      });
    });

    var newSize = _objectSpread({}, tempSize, {
      columns: tempSize.columns - 1
    });

    var newTable = {
      size: newSize,
      rows: newRows
    };
    setData(newTable);
  };

  var handleDeleteRow = function handleDeleteRow(i) {
    var tempSize = _objectSpread({}, size);

    var newRows = rows.filter(function (row, index) {
      return index !== i;
    });

    var newSize = _objectSpread({}, tempSize, {
      rows: tempSize.rows - 1
    });

    var newTable = {
      size: newSize,
      rows: newRows
    };
    setData(newTable);
  };

  var handleDragEnd = function handleDragEnd(type, from, to, newData) {
    var newTable = _objectSpread({}, data, {
      rows: newData
    });

    setData(newTable);
  };

  var handleOpenModal = function handleOpenModal(i, j) {
    var content = rows[i][j];
    var _data = {
      i: i,
      j: j,
      content: content
    };
    setModalState(function (prevState) {
      return !prevState;
    });
    setCellData(_data);
  };

  var handleSetCellData = function handleSetCellData(_data) {
    var i = cellData.i,
        j = cellData.j;
    var newRows = rows.map(function (row, rowIndex) {
      if (i === rowIndex) {
        row.map(function (column, columnIndex) {
          if (j === columnIndex) {
            return row[j] = _data;
          }

          return column;
        });
      }

      return row;
    });
    setData(_objectSpread({}, data, {
      rows: newRows
    }));
  };

  var handleCloseModal = function handleCloseModal() {
    setModalState(function (prevState) {
      return !prevState;
    });
  };

  var prepareData = function prepareData() {
    var content = '';
    content += '<table>';
    rows.forEach(function (row) {
      content += '<tr>';
      row.forEach(function (column) {
        content += '<td>';
        content += column;
        content += '</td>';
      });
      content += '</tr>';
    });
    content += '</table>';
    return content;
  };

  var handleSaveTable = function handleSaveTable() {
    var content = prepareData(); // GET

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wp/v2/posts'
    }).then(function (posts) {
      console.log(posts);
    }); // eslint-disable-next-line no-undef

    localStorage.setItem(cacheKey, JSON.stringify(data));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_table_Table__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rows: rows,
    onDragEnd: handleDragEnd,
    onHandleOpenModal: handleOpenModal,
    onHandleDeleteColumn: handleDeleteColumn,
    onHandleDeleteRow: handleDeleteRow
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_table_Buttons__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onAddRow: handleAddRow,
    onAddColumn: handleAddColumn,
    onResetTable: handleResetTable,
    onSaveTable: handleSaveTable
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_modal_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    modalState: modalState,
    cellData: cellData,
    onHandleSetCellData: handleSetCellData,
    onHandleCloseModal: handleCloseModal
  }));
};

__signature__(App, "useState{[ data, setData ]([])}\nuseState{[ modalState, setModalState ](0)}\nuseState{[ cellData, setCellData ]('')}\nuseEffect{}\nuseEffect{}");

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
  reactHotLoader.register(useState, "useState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
  reactHotLoader.register(useEffect, "useEffect", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
  reactHotLoader.register(defaultTable, "defaultTable", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
  reactHotLoader.register(App, "App", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/editor/Editor.js":
/*!*****************************************!*\
  !*** ./src/components/editor/Editor.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/format-library */ "@wordpress/format-library");
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_4__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





/**
 * Fix media upload permission error.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */

_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["SETTINGS_DEFAULTS"].__experimentalMediaUpload = wp.mediaUtils.uploadMedia;

var WPTableEditor = function WPTableEditor(_ref) {
  var cellData = _ref.cellData,
      onHandleSetCellData = _ref.onHandleSetCellData,
      onHandleCloseModal = _ref.onHandleCloseModal;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      blocks = _useState2[0],
      updateBlocks = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var content = cellData.content;
    var wpParsed = wp.blocks.parse(content);
    updateBlocks(wpParsed);
  }, []);

  var handleChange = function handleChange(e) {
    updateBlocks(e);
  };

  var handleResetBlocks = function handleResetBlocks() {
    var content = cellData.content;
    var wpParsed = wp.blocks.parse(content);
    updateBlocks(wpParsed);
  };

  var handleSave = function handleSave() {
    var string = wp.blocks.serialize(blocks);
    onHandleSetCellData(string);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'wp-table-cell-editor-button-groups'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: handleSave,
    className: 'button button-primary'
  }, "Save"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: handleResetBlocks,
    className: 'button button-primary'
  }, "Reset Blocks"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    onClick: onHandleCloseModal,
    className: 'button button-default'
  }, "Close")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "block-editor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "block-editor__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SlotFillProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["DropZoneProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-navigate-regions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-layout is-sidebar-opened"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-layout__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-visual-editor editor-styles-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockEditorProvider"], {
    value: blocks,
    onInput: handleChange,
    onChange: handleChange,
    settings: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["SETTINGS_DEFAULTS"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "editor-styles-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockEditorKeyboardShortcuts"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["WritingFlow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ObserveTyping"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockList"], null)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"].Slot, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-post-sidebar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockInspector"], null))))))))))));
};

__signature__(WPTableEditor, "useState{[ blocks, updateBlocks ]([])}\nuseEffect{}");

var _default = WPTableEditor;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WPTableEditor, "WPTableEditor", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/editor/Editor.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/editor/Editor.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor/Editor */ "./src/components/editor/Editor.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Modal = function Modal(_ref) {
  var modalState = _ref.modalState,
      cellData = _ref.cellData,
      onHandleSetCellData = _ref.onHandleSetCellData,
      onHandleCloseModal = _ref.onHandleCloseModal;
  var modal = '';

  if (modalState) {
    modal = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-table-modal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-table-modal-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-table-modal-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_editor_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      cellData: cellData,
      onHandleSetCellData: onHandleSetCellData,
      onHandleCloseModal: onHandleCloseModal
    }))));
  }

  return modal;
};

var _default = Modal;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Modal, "Modal", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/modal/Modal.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/modal/Modal.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/table/Actions.js":
/*!*****************************************!*\
  !*** ./src/components/table/Actions.js ***!
  \*****************************************/
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

var Actions = function Actions(props) {
  var onHandleOpenModal = props.onHandleOpenModal,
      onHandleDeleteColumn = props.onHandleDeleteColumn,
      onHandleDeleteRow = props.onHandleDeleteRow,
      x = props.x,
      y = props.y,
      i = props.i,
      j = props.j;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-table-cell-actions'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'dashicons dashicons-admin-generic wp-table-edit-cell'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-table-actions-dropdown"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-table-action-item",
    onClick: function onClick() {
      return onHandleOpenModal(i, j);
    },
    role: "presentation"
  }, "Edit"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-table-action-item",
    onClick: function onClick() {
      return onHandleDeleteColumn(j);
    },
    role: "presentation"
  }, "Delete Column"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-table-action-item",
    onClick: function onClick() {
      return onHandleDeleteRow(i);
    },
    role: "presentation"
  }, "Delete Row")));
};

var _default = Actions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Actions, "Actions", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Actions.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Actions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/table/Buttons.js":
/*!*****************************************!*\
  !*** ./src/components/table/Buttons.js ***!
  \*****************************************/
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

var Fragment = wp.element.Fragment;

var Buttons = function Buttons(_ref) {
  var onAddRow = _ref.onAddRow,
      onAddColumn = _ref.onAddColumn,
      onResetTable = _ref.onResetTable,
      onSaveTable = _ref.onSaveTable;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button',
    onClick: onAddRow
  }, "Add Row"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button',
    onClick: onAddColumn
  }, "Add Column"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button',
    onClick: onResetTable
  }, "Reset"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'button button-primary',
    onClick: onSaveTable
  }, "Save"));
};

var _default = Buttons;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Buttons.js");
  reactHotLoader.register(Buttons, "Buttons", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Buttons.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Buttons.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/table/Table.js":
/*!***************************************!*\
  !*** ./src/components/table/Table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Actions */ "./src/components/table/Actions.js");
/* harmony import */ var _table_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table.scss */ "./src/components/table/table.scss");
/* harmony import */ var _table_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_table_scss__WEBPACK_IMPORTED_MODULE_5__);





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _wp$element = wp.element,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;

 // tell direction after drag start, the first direction that reach 5px offset

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

var Table = function Table(props) {
  var _props$rows = props.rows,
      rows = _props$rows === void 0 ? [] : _props$rows;
  var _onDragEnd = props.onDragEnd,
      onHandleOpenModal = props.onHandleOpenModal,
      onHandleDeleteColumn = props.onHandleDeleteColumn,
      onHandleDeleteRow = props.onHandleDeleteRow;

  var _useState = useState(_objectSpread({}, defaultDragState)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      dragState = _useState2[0],
      setDragState = _useState2[1];

  var rowsEl = useRef(null),
      preview = useRef(null);

  if (dragState.direction === DRAG_DIRECTION_COLUMN) {
    rows = rows.map(function (x) {
      return offsetIndex(dragState.column, dragState.dropIndex, x);
    });
  }

  if (dragState.direction === DRAG_DIRECTION_ROW) {
    rows = offsetIndex(dragState.row, dragState.dropIndex, rows);
  }

  function setOpacity(i, j) {
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

  function createMarkup(html) {
    return {
      __html: html
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("tbody", {
    ref: rowsEl
  }, rows.map(function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("tr", {
      key: i
    }, x.map(function (y, j) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("td", {
        key: j,
        style: {
          border: '1px solid black',
          cursor: dragState.direction ? 'move' : 'grab',
          opacity: setOpacity(i, j)
        },
        draggable: "true",
        onDragStart: function onDragStart(e) {
          e.dataTransfer.setDragImage(preview.current, 0, 0);
          setDragState(_objectSpread({}, dragState, {
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
              setDragState(_objectSpread({}, dragState, {
                direction: DRAG_DIRECTION_COLUMN,
                dropIndex: j
              }));
              return;
            }

            if (dragState.row !== i) {
              setDragState(_objectSpread({}, dragState, {
                direction: DRAG_DIRECTION_ROW,
                dropIndex: i
              }));
              return;
            }

            return;
          }

          if (dragState.direction === DRAG_DIRECTION_COLUMN) {
            if (j !== dragState.dropIndex) {
              setDragState(_objectSpread({}, dragState, {
                dropIndex: j
              }));
            }

            return;
          }

          if (dragState.direction === DRAG_DIRECTION_ROW) {
            if (i !== dragState.dropIndex) {
              setDragState(_objectSpread({}, dragState, {
                dropIndex: i
              }));
            }
          }
        },
        onDragEnd: function onDragEnd() {
          _onDragEnd(dragState.direction, dragState.direction === DRAG_DIRECTION_COLUMN ? dragState.column : dragState.row, dragState.dropIndex, rows);

          setDragState(_objectSpread({}, defaultDragState));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: 'wp-table-cell-wrapper'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: 'wp-table-cell-content',
        dangerouslySetInnerHTML: createMarkup(y)
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_Actions__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onHandleOpenModal: onHandleOpenModal,
        onHandleDeleteColumn: onHandleDeleteColumn,
        onHandleDeleteRow: onHandleDeleteRow,
        x: x,
        y: y,
        i: i,
        j: j
      })));
    }));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    ref: preview,
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden'
    }
  }));
};

__signature__(Table, "useState{[ dragState, setDragState ]({ ...defaultDragState })}\nuseRef{rowsEl}\nuseRef{preview}");

var _default = Table;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useRef, "useRef", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(useState, "useState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(Fragment, "Fragment", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_NONE, "DRAG_DIRECTION_NONE", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_ROW, "DRAG_DIRECTION_ROW", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(DRAG_DIRECTION_COLUMN, "DRAG_DIRECTION_COLUMN", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(defaultDragState, "defaultDragState", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(Table, "Table", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
  reactHotLoader.register(_default, "default", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/components/table/Table.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/table/table.scss":
/*!*****************************************!*\
  !*** ./src/components/table/table.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./table.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/table.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

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

if (document.getElementById('wp-table')) {
  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById("wp-table"));
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/home/shamim/wp-local-docker-sites/wptable-test/wordpress/wp-content/plugins/wp-table/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map