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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: rgb(253, 253, 253);\\n    color: rgb(0, 0, 0);\\n    text-align: center;\\n}\\n\\n.header {\\n    border-bottom: 0.125rem solid;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-columns: 0.25fr 1fr;\\n    gap: 1rem;\\n}\\n\\n.left-panel {\\n    background-color: rgb(252, 239, 221);\\n    height: 100vh;\\n}\\n\\n.project-list {\\n    display: grid;\\n    grid-template-columns: auto 1fr auto ;\\n    column-gap: 1rem;\\n    justify-items: start;align-items: center;padding:0 15px;\\n}\\n\\n\\n.right-panel {\\n    background-color: antiquewhite;\\n    height: 100vh;\\n}\\n\\n.project-title-header {\\n    font-size: 2rem;\\n}\\n#edit-project-form{\\n    display: none;\\n}\\n#edit-project-form.visible {\\n    display: block;\\n}\\n#edit-task-form{\\n    display: none;\\n}\\n#edit-task-form.visible {\\n    display: block !important;\\n} \\n/* #create-project-form, #edit-project-form{\\n    display: none;\\n}\\n\\n#create-project-form.visible, #edit-project-form.visible {\\n    display: block;\\n}\\n\\n#create-task-form, #edit-task-form{\\n    display: none;\\n}\\n\\n#create-task-form.visible, #edit-task-form.visible {\\n    display: block;\\n} */\\n\\n.task-list {\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n}\\n\\n.fa-solid.fa-ellipsis-vertical {\\n    padding: 1rem;\\n}\\nbody{padding: 0;margin: 0;font-family: 'Open Sans', sans-serif;}\\n.home-container, .project-container{    margin: 0 15px;}\\n.home-container > :first-child, .project-container > :first-child, .project-container .accordion, .right-panel .accordion{    font-size: 18px;\\n    font-weight: bold;\\n    text-align: left;\\n    padding: 20px 15px 10px;\\n}\\n.home-container div{font-size:16px;\\n    font-weight: normal;\\n    text-align: left;\\n    padding: 12px 15px;\\n}\\n.fa{padding-right: 10px; color: #1d3557;}\\n.home-container div:hover, .project-container .project-list:hover, .accordion:hover{background-color:#c1e4e5;cursor: pointer;\\n    border-radius: 5px;}\\n#add-task:hover{background-color:#d0ebec;cursor: pointer;\\n    border-radius: 5px;}\\nh1{    color: #3a5a40;\\n    font-weight: bold;\\n    font-size:46px;    margin: 20px 0;\\n}\\nh2{    margin: 0;\\n    padding: 0px 0 10px;text-align: left;font-size: 18px    ;\\n    border-bottom: 2px solid #3a5a40;}\\n.header {\\n    background: #f1faee;\\n    color: #1d3557;\\n    padding: 5px;\\n}\\n.left-panel {\\n    background-color: #a8dadc85;\\n    height: 100vh;\\n}\\n.right-panel {\\n    background-color: #a8dadcb3;\\n    height: 100vh;padding:10px 20px;    \\n}\\n.accordion{    background: transparent;\\n    outline: none;\\n    border: none;\\n    font-weight: bold;width: 100%;\\n    font-size: 16px;cursor: pointer;}\\nform{    text-align: left;\\n    padding: 0px 0 10px 10px;\\n}\\ninput, textarea{width: 95%;    border: 1px solid #3a5a40;\\n    outline: #3a5a40;\\n    padding: 10px 0px 10px 5px;}\\n.add, .cancel, .delete{background:transparent;\\n     \\n    outline: none;\\n   font-weight: bold;\\n    padding: 5px 15px;margin-top: 12px;}\\n .delete{color: rgb(190, 4, 4) !important;border: 1px solid rgb(190, 4, 4);}\\n .add{color:#008000;border: 1px solid #008000;}\\n .cancel {\\n    color: #0096c7;\\n    border: 1px solid #0096c7;\\n}\\n #add-task{ margin-top: 20px;}\\n .panel { transition: max-height 0.2s ease-out;max-height: 0;overflow: hidden;}\\n .modal {\\n    position: fixed;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    z-index: 1050;\\n    display: none;\\n    overflow: hidden;\\n    -webkit-overflow-scrolling: touch;\\n    outline: 0;\\n}\\n.modal.fade .modal-dialog {\\n    -webkit-transform: translate(0,-25%);\\n    -ms-transform: translate(0,-25%);\\n    -o-transform: translate(0,-25%);\\n    transform: translate(0,-25%);\\n    -webkit-transition: -webkit-transform .3s ease-out;\\n    -o-transition: -o-transform .3s ease-out;\\n    transition: -webkit-transform .3s ease-out;\\n    transition: transform .3s ease-out;\\n    transition: transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform .3s ease-out;\\n}\\n.modal-dialog {\\n    position: relative;\\n    width: auto;\\n    margin: 10px;\\n}\\n.modal-content {\\n    position: relative;\\n    background-color: #fff;\\n    background-clip: padding-box;\\n    border: 1px solid #999;\\n    border: 1px solid rgba(0,0,0,.2);\\n    border-radius: 6px;\\n    -webkit-box-shadow: 0 3px 9px rgb(0 0 0 / 50%);\\n    box-shadow: 0 3px 9px rgb(0 0 0 / 50%);\\n    outline: 0;\\n}\\n.modal-body {\\n    position: relative;\\n    padding: 15px;\\n}\\n.modal-header {\\n    padding: 15px;\\n    border-bottom: 1px solid #e5e5e5;\\n}\\n.modal-header .close {\\n    margin-top: -2px;\\n}\\n.modal-title {\\n    margin: 0;\\n    line-height: 1.42857143;\\n}\\n.btn {\\n    display: inline-block;\\n    margin-bottom: 0;\\n    font-weight: 400;\\n    text-align: center;\\n    white-space: nowrap;\\n    vertical-align: middle;\\n    -ms-touch-action: manipulation;\\n    touch-action: manipulation;\\n    cursor: pointer;\\n    background-image: none;\\n    border: 1px solid transparent;\\n    padding: 6px 12px;\\n    font-size: 14px;\\n    line-height: 1.42857143;\\n    border-radius: 4px;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n}\\n.btn-info {\\n    color: #fff;\\n    background-color: #5bc0de;\\n    border-color: #46b8da;\\n}\\n.modal-open .modal {\\n    overflow-x: hidden;\\n    overflow-y: auto;\\n}\\n.fade.in {\\n    opacity: 1;\\n}\\n.fade {\\n    opacity: 1;\\n    -webkit-transition: opacity .15s linear;\\n    -o-transition: opacity .15s linear;\\n    transition: opacity .15s linear;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listOfProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listOfProjects */ \"./src/listOfProjects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _uiRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiRender */ \"./src/uiRender.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nlet dom = (0,_uiRender__WEBPACK_IMPORTED_MODULE_2__.Dom)();\ndom.display();\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/listOfProjects.js":
/*!*******************************!*\
  !*** ./src/listOfProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listOfProjects\": () => (/* binding */ listOfProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst listOfProjects = () => {\n\n    let projectList=[];\n\n    const setProject = (prjTitle) => {\n        let temp = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(prjTitle);\n        projectList.push(temp);\n    }\n\n    const getProjects = () => {\n        return projectList;\n    }\n\n    const deleteProject = (tempPrj) => {\n        projectList = projectList.filter(prj => prj.getProjectTitle() !== tempPrj.getProjectTitle());\n    }\n\n    const getProjectByName = (prjName) => {\n            return projectList.find(p => p.getProjectTitle() === prjName);\n    }\n\n    return {setProject, getProjects, deleteProject, getProjectByName};\n\n};\n\n\n\n//# sourceURL=webpack://todo/./src/listOfProjects.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\nconst project = (prjTitle) => {\n\n    let title = prjTitle;\n    let projectTasks = [];\n\n    const getProjectTitle = () => {\n        return title;\n    }\n\n    const getProjectTasks = () => {         \n        return projectTasks;\n    }\n\n    const setProjectTitle = (temp) => {\n        title = temp;\n    }\n\n    const setProjectTasks = (tempTask) => {\n        projectTasks.push(tempTask);\n    }\n\n    const deleteTask = (tempTask) => {\n        projectTasks = projectTasks.filter(task => task.getTaskTitle() !== tempTask.getTaskTitle());\n    }\n\n    const getTaskByName = (taskName) => {\n        return projectTasks.find(p => p.getTaskTitle() === taskName);\n    }\n\n    return { getProjectTasks, \n             getProjectTitle, \n             setProjectTasks, \n             setProjectTitle, \n             deleteTask,\n             getTaskByName\n            };\n\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"task\": () => (/* binding */ task)\n/* harmony export */ });\nconst task = (item) => {\n    \n    let taskTitle = item.title;\n    let taskDescription = item.description;\n    let dueDate = item.dueDate|| \"no due date\";\n    let important = item.important || false;\n    let status = item.status|| false;\n\n    const getTaskTitle = () => {\n        return taskTitle;\n    }\n\n    const getTaskDescription = () => {\n        return taskDescription;\n    }\n\n    const getDueDate = () => {\n        return  dueDate;\n    }\n\n    const getImportance = () => {\n        return important;\n    }\n\n    const getStatus = () => {\n        return status;\n    }\n\n    const setTaskTitle = (temp) => {\n        taskTitle = temp;\n    }\n\n    const setTaskDescription = (temp) => {\n        taskDescription = temp;\n    }\n\n    const setDueDate = (temp) => {\n        dueDate = temp;\n    }\n\n    const setImportance = (temp) => {\n        important = temp;\n    }\n\n    const setStatus = (temp) => {\n         status = temp;\n    }\n\n    return {getTaskTitle, \n            getTaskDescription, \n            getDueDate,\n            getImportance,\n            getStatus,\n            setTaskDescription, \n            setTaskTitle,\n            setDueDate,\n            setImportance,\n            setStatus\n            };\n};\n\n\n\n//# sourceURL=webpack://todo/./src/task.js?");

/***/ }),

/***/ "./src/uiRender.js":
/*!*************************!*\
  !*** ./src/uiRender.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dom\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _listOfProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listOfProjects */ \"./src/listOfProjects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n//import { storage } from \"./storage\";\n\n\nconst Dom = () => {\n  const projectForm = document.querySelector(\"#create-project-form\");\n  const editProjectForm = document.querySelector(\"#edit-project-form\");\n  const taskForm = document.querySelector(\"#create-task-form\");\n  const editTaskForm = document.querySelector(\"#edit-task-form\");\n  const projectContainer = document.querySelector(\"#project-list-container\");\n  const taskContainer = document.querySelector(\"#task-list-container\");\n  const addProject = document.querySelector(\"#add-project\");\n  const addTask = document.querySelector(\"#add-task\");\n  const renameProject = document.querySelector(\"#rename-project\");\n  const deleteProject = document.querySelector(\"#delete-project\");\n  const editTask = document.querySelector(\"#edit-task\");\n  const deleteTask = document.querySelector(\"#delete-task\");\n  let projectTitleHeader = document.querySelector(\".project-title-header\");\n  let lop = (0,_listOfProjects__WEBPACK_IMPORTED_MODULE_0__.listOfProjects)();\n  lop.setProject(\"Project 1\");\n  lop.setProject(\"Project 2\");\n  lop.setProject(\"Project 3\");\n\n  let iTask = {\n    title: \"odin1\",\n    description: \"to do list\",\n  };\n\n  let jTask = {\n    title: \"odin2\",\n    description: \"to do list\",\n  };\n\n  lop.getProjectByName(\"Project 1\").setProjectTasks((0,_task__WEBPACK_IMPORTED_MODULE_1__.task)(iTask));\n  lop.getProjectByName(\"Project 1\").setProjectTasks((0,_task__WEBPACK_IMPORTED_MODULE_1__.task)(jTask));\n\n  const display = () => {\n    displayProjects();\n\n    addProject.addEventListener(\"click\", () => {\n      projectForm.classList.toggle(\"visible\");\n    });\n\n    addTask.addEventListener(\"click\", () => {\n        taskForm.classList.toggle(\"visible\");\n      });\n    projectFormEventListener();\n  };\n\n  const displayProjects = () => {\n    let prjtList = lop.getProjects();\n    while (projectContainer.firstChild) {\n      projectContainer.removeChild(projectContainer.firstChild);\n    }\n\n    prjtList.forEach((project) => {\n      const projectEl = document.createElement(\"div\");\n      projectEl.className = \"project-list\";\n      let iconEl = document.createElement(\"i\");\n      iconEl.className = \"fa-solid fa-list\";\n      let titleEl = document.createElement(\"span\");\n      titleEl.innerText = project.getProjectTitle();\n      let editEl = document.createElement(\"i\");\n      editEl.className = \"fa-solid fa-ellipsis-vertical project-edit\";\n      projectEl.appendChild(iconEl);\n      projectEl.appendChild(titleEl);\n      projectEl.appendChild(editEl);\n\n      //event listener to display project tasks\n      projectEl.addEventListener(\"click\", (e) => {\n        let temp = document.querySelector(\"#data-selected-project\");\n        if (temp) {\n          temp.removeAttribute(\"id\");\n        }\n        titleEl.setAttribute(\"id\", \"data-selected-project\");\n        displayTasks(project);\n        // if (!taskFormEventAdded) {\n        //   taskFormEventAdded = true;\n        //   taskFormEventListener(projectEl);\n        // }\n      });\n      //event listener to edit and delete the project\n      editEl.addEventListener(\"click\", projectEditFormEventListener(editEl, titleEl));\n      projectContainer.appendChild(projectEl);\n    });\n  };\n\n  const displayTasks = (project) => {\n\n    while (taskContainer.firstChild) {\n      taskContainer.removeChild(taskContainer.firstChild);\n    }\n    \n    //project header displayed above the list of tasks\n    projectTitleHeader.innerText = project.getProjectTitle();\n\n    project.getProjectTasks().forEach((task) => {\n\n      //display complete details of the task\n      const taskEl = document.createElement(\"div\");\n      taskEl.className = \"task-list\";\n    \n        \n      let taskTitleEl = document.createElement(\"p\");\n      taskTitleEl.innerText = task.getTaskTitle();\n      \n      let descriptionEl = document.createElement(\"p\");\n      descriptionEl.innerText = task.getTaskDescription();\n      \n      let dueDateEl = document.createElement(\"p\");\n      dueDateEl.innerText = task.getDueDate();\n      \n      let importanceEl = document.createElement(\"p\");\n      importanceEl.innerText = task.getImportance();\n\n      let editEl = document.createElement(\"i\");\n      editEl.className = \"fa-solid fa-ellipsis-vertical task-edit\";\n      let statusEl = document.createElement(\"p\");\n      statusEl.innerText = task.getStatus();\n      taskEl.appendChild(statusEl);\n      taskEl.appendChild(taskTitleEl);\n      taskEl.appendChild(descriptionEl);\n      taskEl.appendChild(dueDateEl);\n      taskEl.appendChild(importanceEl);\n      taskEl.appendChild(editEl);\n      //add event listener to task 3 dot icon element, when clicked call task edit form\n      editEl.addEventListener(\"click\", taskEditFormEventListener(editEl, taskTitleEl));\n      taskContainer.appendChild(taskEl);\n\n      \n    //   editEl.addEventListener(\"click\", (e) => {\n    //     taskEditFormEventListener(editEl);\n    //   });\n    });\n\n    //after all tasks, show add task button\n    //call event listener to include task form\n    taskFormEventListener();\n  };\n\n  //add event listener to project-addition form and handle the same\n  const projectFormEventListener = () => {\n    projectForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      //when project title is submitted, call setproject to create a project and push it to the listofprojects.\n      const title = document.getElementById(\"project-title\").value;\n      lop.setProject(title);\n      //storage.saveProject(title) ;\n      //display updated projects list\n      displayProjects();\n      projectForm.classList.toggle(\"visible\");\n    });\n\n    projectForm.addEventListener(\"reset\", (e)=>{\n        e.preventDefault();\n        projectForm.classList.toggle(\"visible\");\n    })\n\n\n  };\n\n  const renameProjectFormCallBack = (e) => {\n    e.preventDefault();\n    let selectedProjectTitle = document.querySelector(\n       \"#data-selected-project\"\n        ).innerText;\n    let selectedProject = lop.getProjectByName(selectedProjectTitle);\n    let editProjectTitle = document.getElementById(\"edit-project-title\");\n\n    //when edit is clicked, form has to be prepopulated with already existing data.\n    editProjectTitle.placeholder = selectedProjectTitle;\n    selectedProject.setProjectTitle(editProjectTitle.value);\n    displayProjects();\n    editProjectForm.classList.toggle(\"visible\");   \n  };\n\n  const deleteProjectFormCallBack = (e) => {\n    e.preventDefault();\n    let selectedProjectTitle = document.querySelector(\n        \"#data-selected-project\"\n    ).innerText;\n    let selectedProject = lop.getProjectByName(selectedProjectTitle);\n    lop.deleteProject(selectedProject);\n    displayProjects();\n    editProjectForm.classList.toggle(\"visible\");   \n    //once project is deleted, take user to home page.\n  };\n\n  const resetProjectEditFormCallBack = () => {\n    editProjectForm.classList.toggle(\"visible\");\n  };\n  //add event listener to edit project form and handle the same\n  const projectEditFormEventListener = (editEl, titleEl) => {\n\n    let editProjectTitle = document.getElementById(\"edit-project-title\");\n    //display edit and delete buttons\n    editEl.addEventListener(\"click\", ()=> {\n        editProjectForm.classList.toggle(\"visible\");\n        editProjectTitle.value = titleEl.innerText;\n    });\n\n    //when edit clicked, call setProjectTitle function\n    renameProject.addEventListener(\"click\", renameProjectFormCallBack);\n\n    //when delete is clicked, call delete function (deleteProject)\n    deleteProject.addEventListener(\"click\", deleteProjectFormCallBack);\n    editProjectForm.removeEventListener(\"reset\", resetProjectEditFormCallBack);\n    editProjectForm.addEventListener(\"reset\", resetProjectEditFormCallBack);\n  };\n\n  const taskFormCallback = (e) => {\n    e.preventDefault();\n    const title = document.getElementById(\"task-title\").value;\n    const description = document.getElementById(\"task-description\").value;\n    const dueDate = document.getElementById(\"due-date\").value;\n    const important = document.getElementById(\"important\").checked;\n    const status = document.getElementById(\"status\").checked;\n    const tempTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.task)({ title, description, dueDate, important,status });\n    let selectedProjectTitle = document.querySelector(\n      \"#data-selected-project\"\n    ).innerText;\n    let selectedProject = lop.getProjectByName(selectedProjectTitle);\n      selectedProject.setProjectTasks(tempTask);\n      displayTasks(selectedProject);\n      debugger;\n      taskForm.reset();\n      \n      taskForm.classList.toggle(\"visible\");\n  };\n\n  //add event listener to task-addition form and handle the same\n  const taskFormEventListener = () => {\n\n    // Remove any existing event listeners for the task form\n    taskForm.removeEventListener(\"submit\", taskFormCallback);\n    // Add new event listener for task form submission\n    taskForm.addEventListener(\"submit\", taskFormCallback);\n\n    taskForm.addEventListener(\"reset\", ()=> {\n        taskForm.classList.toggle(\"visible\");\n    })\n    \n  };\n\n  const editTaskFormCallBack = (e) => {\n    \n    e.preventDefault();\n    \n    const title = document.getElementById(\"edit-task-title\").value;\n    const description = document.getElementById(\"edit-task-description\").value;\n    const dueDate = document.getElementById(\"edit-due-date\").value || \"no due date\";\n    const important = document.getElementById(\"edit-important\").checked;\n    const status = document.getElementById(\"edit-status\").checked;\n    let selectedProjectTitle = document.querySelector(\n        \"#data-selected-project\"\n      ).innerText;\n    let selectedTaskTitle = document.querySelector(\n        \"#data-selected-task\"\n      ).innerText;\n    let selectedTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(selectedTaskTitle);\n    \n    selectedTask.setTaskDescription(description);\n    selectedTask.setTaskTitle(title);\n    selectedTask.setDueDate(dueDate);\n    selectedTask.setImportance(important);\n    selectedTask.setStatus(status);\n    \n    displayTasks(lop.getProjectByName(selectedProjectTitle));\n    editTaskForm.reset();\n  };\n\n  const deleteTaskFormCallBack = (e) => {\n    e.preventDefault();\n    let selectedProjectTitle = document.querySelector(\n        \"#data-selected-project\"\n      ).innerText;\n    let selectedTaskTitle = document.querySelector(\n        \"#data-selected-task\"\n      ).innerText;\n    let selectedTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(selectedTaskTitle);\n\n    lop.getProjectByName(selectedProjectTitle).deleteTask(selectedTask);\n    displayTasks(lop.getProjectByName(selectedProjectTitle));\n    editTaskForm.classList.toggle(\"visible\");\n  };\n\n  const resetTaskEditFormCallBack = () => {\n        editTaskForm.classList.toggle(\"visible\");\n  };\n  //add event listener to edit task form and handle the same\n  const taskEditFormEventListener = (editEl, taskTitleEl) => {\n\n    //display edit and delete buttons\n    editEl.addEventListener(\"click\", ()=> {\n        editTaskForm.classList.toggle(\"visible\");\n        let temp = document.querySelector(\"#data-selected-task\");\n        if (temp) {\n          temp.removeAttribute(\"id\");\n        } \n        taskTitleEl.setAttribute(\"id\", \"data-selected-task\");\n\n        //display task form and populate with already existing data\n        let selectedProjectTitle = document.querySelector(\n            \"#data-selected-project\"\n          ).innerText;\n\n        let title = document.getElementById(\"edit-task-title\");\n        let description = document.getElementById(\"edit-task-description\");\n        let dueDate = document.getElementById(\"edit-due-date\");\n        let important = document.getElementById(\"edit-important\");\n        let status = document.getElementById(\"edit-status\");\n\n        let tempTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(taskTitleEl.innerText);\n        title.value = tempTask.getTaskTitle();\n        description.value = tempTask.getTaskDescription();\n        dueDate.value = tempTask.getDueDate();\n        important.checked = tempTask.getImportance();\n        status.checked = tempTask.getStatus();\n    });\n    \n    //when edit clicked, call setProjectTitle function\n    editTask.removeEventListener(\"click\", editTaskFormCallBack);\n    //when edit clicked, call setProjectTitle function\n    editTask.addEventListener(\"click\", editTaskFormCallBack);\n\n    deleteTask.removeEventListener(\"click\", deleteTaskFormCallBack);\n    //when delete is clicked, call delete function (deleteProject)\n    deleteTask.addEventListener(\"click\", deleteTaskFormCallBack);\n\n    editTaskForm.removeEventListener(\"reset\",resetTaskEditFormCallBack);\n    editTaskForm.addEventListener(\"reset\",resetTaskEditFormCallBack);\n    \n  };\n  return { display };\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/uiRender.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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