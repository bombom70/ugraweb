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

/***/ "./src/js/Post.js":
/*!************************!*\
  !*** ./src/js/Post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Post = /*#__PURE__*/function () {\n  function Post(title) {\n    _classCallCheck(this, Post);\n    this.title = title;\n    this.date = new Date();\n  }\n  _createClass(Post, [{\n    key: \"toString\",\n    value: function toString() {\n      return JSON.stringify({\n        title: this.title,\n        date: this.date.toJSON()\n      });\n    }\n  }]);\n  return Post;\n}();\n\n\n//# sourceURL=webpack://ugraweb/./src/js/Post.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./src/js/Post.js\");\n/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.sass */ \"./src/styles/style.sass\");\n\n\nvar post = new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Webpack post title\");\nconsole.log(post.toString());\n\n//# sourceURL=webpack://ugraweb/./src/js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 16.1.svg */ \"./src/img/Group 16.1.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/twitter.svg */ \"./src/img/twitter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/inst.svg */ \"./src/img/inst.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fc.svg */ \"./src/img/fc.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/glasses.svg */ \"./src/img/glasses.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arrow.svg */ \"./src/img/arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 19.svg */ \"./src/img/Group 19.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 9.svg */ \"./src/img/Group 9.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 13.svg */ \"./src/img/Group 13.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 21.svg */ \"./src/img/Group 21.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Group 18.svg */ \"./src/img/Group 18.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prev.svg */ \"./src/img/prev.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/next.svg */ \"./src/img/next.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/tw-gray.svg */ \"./src/img/tw-gray.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/insta-gray.svg */ \"./src/img/insta-gray.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fc-gray.svg */ \"./src/img/fc-gray.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".main {\\n  overflow: hidden;\\n}\\n\\n.preview {\\n  background-color: #C2DA6B;\\n}\\n.preview__title {\\n  -webkit-box-flex: 0;\\n      -ms-flex: 0 1 800px;\\n          flex: 0 1 800px;\\n  margin: 0px;\\n  font-size: 87px;\\n  line-height: 110px;\\n  text-transform: uppercase;\\n  z-index: 2;\\n}\\n.preview__title_date {\\n  font-weight: normal;\\n}\\n.preview-header {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.preview-header:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 500px;\\n  height: 200px;\\n  top: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position-y: -40px;\\n  right: 233px;\\n  background-size: cover;\\n}\\n.preview__img {\\n  position: relative;\\n}\\n.preview-footer {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 40px;\\n}\\n.preview_registration {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 400px;\\n          flex: 1 1 400px;\\n  position: relative;\\n  padding: 50px 150px 50px 0px;\\n  background-color: #ffffff;\\n}\\n.preview_registration:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: -1000px;\\n  width: 1001px;\\n  height: 100%;\\n  background-color: #FFF;\\n}\\n.preview__soc-seti {\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 50px;\\n  -webkit-box-flex: 0;\\n      -ms-flex: 0 1 200px;\\n          flex: 0 1 200px;\\n}\\n.preview__info {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  gap: 23px;\\n  position: relative;\\n  top: -14px;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  margin-left: 200px;\\n  margin-bottom: 53px;\\n  font-size: 25px;\\n}\\n\\n.soc-seti__item {\\n  width: 30px;\\n  height: 25px;\\n  display: block;\\n}\\n.soc-seti__item_twitter {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.soc-seti__item__instagam {\\n  width: 25px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.soc-seti__item_facebook {\\n  width: 13px;\\n  height: 24px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.img-wrapper {\\n  position: relative;\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  width: 550px;\\n  height: 550px;\\n  z-index: 2;\\n}\\n.img-wrapper:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -5px;\\n  right: -251px;\\n  width: 495px;\\n  height: 460px;\\n  background-color: #ffffff;\\n}\\n.img-wrapper:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 150px;\\n  height: 200px;\\n  top: -148px;\\n  right: -251px;\\n  background-color: #C2DA6B;\\n}\\n\\n.soc-seti {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n\\n.btn {\\n  font-family: var(--main-font-family);\\n  font-weight: normal;\\n  font-style: var(--main-font-style);\\n  border-radius: 4px;\\n  font-size: 16px;\\n}\\n.btn_registarion {\\n  padding: 25px 80px;\\n  background-color: #333333;\\n  -webkit-box-shadow: 0px 34px 24px rgba(88, 121, 34, 0.24);\\n          box-shadow: 0px 34px 24px rgba(88, 121, 34, 0.24);\\n  color: #C2DA6B;\\n  font-size: 18px;\\n  border: none;\\n  font-weight: var(--main-font-weight);\\n}\\n\\n.title-number {\\n  font-size: 44px;\\n}\\n\\n.line {\\n  display: block;\\n  height: 2px;\\n  margin-top: 13px;\\n}\\n.line-black {\\n  width: 95px;\\n  background-color: #333333;\\n}\\n\\n.info_font {\\n  font-size: 34px;\\n  text-align: right;\\n}\\n\\n.info__date {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 30px;\\n}\\n\\n.info__text {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  gap: 15px;\\n  -webkit-box-align: baseline;\\n      -ms-flex-align: baseline;\\n          align-items: baseline;\\n}\\n\\nheader {\\n  overflow: hidden;\\n}\\n\\n.header-wrapper {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 180px;\\n  margin: 30px 0;\\n}\\n\\n.decor_header {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 149px;\\n  height: 20%;\\n  background: #C2DA6B;\\n}\\n\\n.logos {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 20px;\\n  max-width: 367px;\\n}\\n.logos__img {\\n  width: 42px;\\n  height: 34px;\\n}\\n.logos__img_main {\\n  width: 100%;\\n  height: 100%;\\n}\\n.logos__img_mg-left {\\n  margin-left: 50px;\\n}\\n\\n.menu-wrapper {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 80px;\\n}\\n\\n.menu {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n}\\n.menu__link {\\n  font-size: 15px;\\n}\\n.menu__link_header {\\n  color: #333333;\\n}\\n.menu__link_header:hover {\\n  color: #C2DA6B;\\n}\\n.menu__item {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  padding-bottom: 15px;\\n}\\n.menu__item:hover .sub-menu {\\n  display: block;\\n  position: absolute;\\n}\\n.menu-lng {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 12px;\\n}\\n.menu-lng__link {\\n  font-size: 15px;\\n  color: #333333;\\n}\\n.menu-lng__link_active {\\n  color: #C2DA6B;\\n}\\n.menu-lng__link_mob {\\n  font-size: 24px;\\n}\\n.menu--dop {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  gap: 30px;\\n}\\n.menu--dop_mobile {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: reverse;\\n      -ms-flex-direction: column-reverse;\\n          flex-direction: column-reverse;\\n  gap: 30px;\\n  width: 100%;\\n}\\n.menu-item-1 {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  width: 100%;\\n  text-align: center;\\n  padding: 20px 0px;\\n}\\n.menu-title-1 {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 10px;\\n  font-size: 25px;\\n}\\n.menu-item-2 {\\n  padding: 30px 0;\\n  background-color: #F0F0F0;\\n  text-align: center;\\n  border-bottom: 1px solid rgba(187, 187, 187, 0.5);\\n}\\n.menu-item-2:last-child {\\n  border: none;\\n}\\n.menu-title-2 {\\n  font-size: 21px;\\n  font-style: normal;\\n  font-weight: normal;\\n}\\n\\n.header__menu {\\n  padding: 0;\\n  gap: 20px 10px;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 auto;\\n          flex: 1 1 auto;\\n  max-width: 620px;\\n}\\n\\n.vds {\\n  width: 37px;\\n  height: 15px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  cursor: pointer;\\n}\\n.vds_mob {\\n  width: 55px;\\n  height: 21px;\\n  background-size: 100%;\\n}\\n\\n.btn-burger-wrapper {\\n  display: none;\\n}\\n\\n.btn__burger-menu {\\n  width: 35px;\\n  height: 6px;\\n  border-radius: 15px;\\n  background-color: #C2DA6B;\\n}\\n.btn__burger-menu:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 51px;\\n  width: 35px;\\n  height: 6px;\\n  border-radius: 15px;\\n  background-color: #C2DA6B;\\n}\\n.btn__burger-menu:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 75px;\\n  width: 35px;\\n  height: 6px;\\n  border-radius: 15px;\\n  background-color: #C2DA6B;\\n}\\n\\n.btn-burger-wrapper {\\n  padding: 20px 10px;\\n  border: 2px solid #333333;\\n}\\n\\n.sub-menu {\\n  display: none;\\n  margin-top: 10px;\\n  max-width: 230px;\\n  background-color: #ffffff;\\n  -webkit-box-shadow: 0px 0px 14px rgba(51, 51, 51, 0.14);\\n          box-shadow: 0px 0px 14px rgba(51, 51, 51, 0.14);\\n  z-index: 5;\\n}\\n.sub-menu__item {\\n  padding: 25px 30px;\\n  border-bottom: 1px solid #F0F0F0;\\n}\\n.sub-menu-mob {\\n  display: none;\\n}\\n\\n.rectangle {\\n  border-radius: 10px;\\n  position: relative;\\n  background-color: #ffffff;\\n}\\n.rectangle:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -20px;\\n  left: 45%;\\n  border: 10px solid transparent;\\n  border-bottom: 10px solid #ffffff;\\n}\\n\\n.burger-wrapper {\\n  width: 100vw;\\n  height: 100%;\\n  position: fixed;\\n  top: 100%;\\n  right: 0;\\n  background: white;\\n  visibility: hidden;\\n  opacity: 0;\\n  z-index: -1;\\n  -webkit-transition: all 0.5s ease-out;\\n  transition: all 0.5s ease-out;\\n  overflow: scroll;\\n}\\n\\n.logo-burger_header {\\n  width: 170px;\\n  height: 55px;\\n}\\n\\n.header-menu {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  width: 90%;\\n  margin: 0 auto;\\n  padding-top: 30px;\\n}\\n\\n.btn-close {\\n  position: relative;\\n  border-color: #BBBBBB;\\n  width: 50px;\\n  height: 50px;\\n  padding: 0px;\\n  border: 2px solid #BBBBBB;\\n}\\n.btn-close:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background-color: #BBBBBB;\\n  width: 100%;\\n  height: 5px;\\n  border-radius: 15px;\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n  top: 45%;\\n}\\n.btn-close:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background-color: #BBBBBB;\\n  width: 100%;\\n  height: 5px;\\n  -webkit-transform: rotate(-45deg);\\n          transform: rotate(-45deg);\\n  border-radius: 15px;\\n  top: 45%;\\n}\\n\\n.burger-menu {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: 40px 0px 60px;\\n}\\n\\n.footer-menu {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 30px;\\n}\\n\\n.contacts-mob-menu {\\n  width: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 20px;\\n}\\n\\n.contacts_font__mobile {\\n  font-size: 34px;\\n  line-height: 20px;\\n  font-weight: 300;\\n  color: #C2DA6B;\\n}\\n\\n.bold_mobile {\\n  font-weight: 700;\\n}\\n\\n.location_mob {\\n  width: 180px;\\n  font-size: 20px;\\n  font-weight: 500;\\n  text-align: center;\\n}\\n\\n.arrow {\\n  content: \\\"\\\";\\n  width: 22px;\\n  height: 15px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.activeSubMenu {\\n  display: block;\\n}\\n\\n.news {\\n  position: relative;\\n  padding: 150px 0 100px;\\n  border-bottom: 1px solid #F0F0F0;\\n}\\n.news__photo {\\n  z-index: 1;\\n}\\n.news__title:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 600px;\\n  height: 400px;\\n  background-color: #F0F0F0;\\n  top: -150px;\\n  left: -129px;\\n  z-index: -1;\\n}\\n.news__title {\\n  position: relative;\\n  z-index: 3;\\n}\\n.news__title:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 215px;\\n  height: 60px;\\n  background-color: #C2DA6B;\\n  left: 2px;\\n  top: 15px;\\n  z-index: -1;\\n}\\n.news__title_weight {\\n  font-weight: 400;\\n}\\n.news-content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  gap: 36px;\\n}\\n.news-content__title {\\n  font-family: \\\"Baufra\\\";\\n  font-size: 32px;\\n  line-height: 44px;\\n  font-weight: 700;\\n}\\n.news-content__text {\\n  max-width: 360px;\\n  font-size: 16px;\\n  font-weight: normal;\\n  line-height: 28px;\\n  color: #888888;\\n}\\n.news-content__decor {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  gap: 30px;\\n}\\n.news-content__date {\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: #C2DA6B;\\n}\\n.news__text {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  gap: 30px;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n  max-width: 470px;\\n}\\n\\n.title {\\n  font-size: 56px;\\n  font-weight: 900;\\n}\\n\\n.decor1, .decor2, .decor3, .decor4 {\\n  position: relative;\\n}\\n\\n.decor1 {\\n  z-index: 3;\\n}\\n.decor1:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 500px;\\n  height: 570px;\\n  top: -62%;\\n  right: -9%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.decor2:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 122px;\\n  height: 149px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  background-repeat: no-repeat;\\n  left: -90px;\\n  top: 30%;\\n  z-index: 1;\\n}\\n\\n.decor3:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 547px;\\n  height: 351px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  background-repeat: no-repeat;\\n  top: -78%;\\n  left: -18%;\\n  z-index: 0;\\n}\\n\\n.decor4:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 489px;\\n  height: 700px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  top: 15%;\\n  left: -19%;\\n  z-index: 0;\\n}\\n\\n.decor4:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 274px;\\n  height: 600px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  top: -59%;\\n  right: -19%;\\n  z-index: -1;\\n}\\n\\n.rectangle_decor:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  right: -18%;\\n  top: -74%;\\n  width: 466px;\\n  height: 200px;\\n  background-color: #C2DA6B;\\n}\\n\\n.line-green {\\n  width: 140px;\\n  height: 2px;\\n  background-color: #C2DA6B;\\n}\\n.line-green_angle {\\n  color: #C2DA6B;\\n  font-weight: 900;\\n}\\n\\n.jc-end {\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n}\\n\\n.content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  gap: 100px;\\n}\\n\\n.btn_still {\\n  max-width: 231px;\\n  margin: 0 auto;\\n  padding: 25px 56px;\\n  background-color: #ffffff;\\n  border: 1px solid #BBBBBB;\\n  color: #C2DA6B;\\n  font-weight: normal;\\n  cursor: pointer;\\n}\\n.btn_still:hover {\\n  color: #888888;\\n  background-color: #C2DA6B;\\n}\\n\\n.partners {\\n  margin-top: 100px;\\n}\\n.partners__header {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-bottom: 100px;\\n}\\n.partners__header:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 215px;\\n  height: 60px;\\n  background-color: #C2DA6B;\\n  z-index: -1;\\n  top: 25px;\\n  left: 3px;\\n}\\n\\n.switcher_prev {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n\\n.switcher_next {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n\\n.carrousel-wrapper {\\n  overflow: hidden;\\n}\\n\\n.carousel {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 1400px;\\n  left: 0;\\n  -webkit-transition: all ease 1s;\\n  transition: all ease 1s;\\n}\\n.carousel__item {\\n  height: 150px;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 233px;\\n          flex: 1 0 233px;\\n  text-align: center;\\n  overflow: hidden;\\n}\\n.carousel__item_current {\\n  border-bottom: 9px solid #C2DA6B;\\n}\\n\\n.switcher {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  width: 100%;\\n  max-width: 80px;\\n  height: 10px;\\n}\\n.switcher__item {\\n  width: 12px;\\n  height: 20px;\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  padding: 50px 0px;\\n  background-color: #333333;\\n}\\n.footer-wrapper {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n.footer__menu {\\n  max-width: 400px;\\n  gap: 40px;\\n}\\n.footer-color-text {\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 24px;\\n  color: #888888;\\n}\\n.footer-item {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-flex: 0;\\n      -ms-flex: 0 1 400px;\\n          flex: 0 1 400px;\\n}\\n\\n.menu__item_footer {\\n  -webkit-box-flex: 0;\\n      -ms-flex: 0 1 170px;\\n          flex: 0 1 170px;\\n}\\n\\n.menu__link_footer {\\n  color: #ffffff;\\n}\\n\\n.contacts__phone {\\n  margin-bottom: 15px;\\n}\\n\\n.contacts__mail {\\n  margin-bottom: 40px;\\n}\\n\\n.contacts_font {\\n  font-size: 24px;\\n  line-height: 29px;\\n  color: #C2DA6B;\\n}\\n\\n.wrapper-text {\\n  width: 250px;\\n}\\n\\n.location {\\n  width: 130px;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  color: #333333;\\n  font-family: \\\"Montserrat\\\";\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n\\nh1, h2, h3, h4, h5, h6, p, ul {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nli {\\n  list-style-type: none;\\n}\\n\\na {\\n  -webkit-text-decoration: none;\\n  text-decoration: none;\\n}\\n\\n.container {\\n  max-width: 1400px;\\n  margin: 0 auto;\\n}\\n\\n.soc-seti-mobile {\\n  display: none;\\n}\\n\\n.isShow {\\n  z-index: 10;\\n  opacity: 1;\\n  visibility: visible;\\n  right: 0;\\n  -webkit-transition: all 0.5s ease-out;\\n  transition: all 0.5s ease-out;\\n  -webkit-transform: translateY(-100vh);\\n          transform: translateY(-100vh);\\n}\\n\\n@media (max-width: 1400px) {\\n  .container {\\n    max-width: 1100px;\\n  }\\n  .img-wrapper:after,\\n  .rectangle_decor:before,\\n  .img-wrapper:before,\\n  .decor2:before {\\n    display: none;\\n  }\\n  .news__title:before {\\n    left: -160px;\\n  }\\n  .header-wrapper {\\n    gap: 60px;\\n  }\\n  .menu-wrapper {\\n    gap: 0px;\\n  }\\n  .preview__title {\\n    margin-top: 50px;\\n    font-size: 67px;\\n    line-height: 90px;\\n    -webkit-box-flex: 0;\\n        -ms-flex: 0 0 576px;\\n            flex: 0 0 576px;\\n  }\\n  .preview-header {\\n    -webkit-box-align: start;\\n        -ms-flex-align: start;\\n            align-items: flex-start;\\n  }\\n  .preview-footer {\\n    position: relative;\\n  }\\n  .preview__info {\\n    position: absolute;\\n    margin: 0;\\n    left: 0;\\n    top: -163px;\\n  }\\n  .info_font {\\n    text-align: left;\\n  }\\n  .preview_registration {\\n    -webkit-box-flex: 0;\\n        -ms-flex: 0 0 auto;\\n            flex: 0 0 auto;\\n  }\\n  .preview-header:after {\\n    right: 0;\\n    width: 600px;\\n  }\\n  .preview__img {\\n    right: -100px;\\n  }\\n  .decor3:before {\\n    left: -36%;\\n  }\\n  .decor4:before {\\n    top: 30%;\\n    left: -18%;\\n  }\\n  .decor4:after {\\n    right: -8%;\\n  }\\n  .decor1:after {\\n    right: -15%;\\n  }\\n}\\n@media (max-width: 1280px) {\\n  .container {\\n    max-width: 992px;\\n  }\\n  .carousel__item {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 0 250px;\\n            flex: 1 0 250px;\\n  }\\n  .menu-wrapper {\\n    -webkit-box-pack: end;\\n        -ms-flex-pack: end;\\n            justify-content: flex-end;\\n  }\\n  .decor4:before {\\n    top: 50%;\\n    left: -26%;\\n  }\\n  .decor4:after {\\n    right: -115px;\\n  }\\n  .logos__img_mg-left {\\n    margin: 0;\\n  }\\n  .preview__img {\\n    right: -52px;\\n  }\\n  .decor1:after {\\n    right: -27%;\\n  }\\n  .footer-wrapper {\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n  }\\n  .footer__menu {\\n    -webkit-box-ordinal-group: 4;\\n        -ms-flex-order: 3;\\n            order: 3;\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n    max-width: 100%;\\n    gap: 20px;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n  }\\n  .menu__item_footer {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 150px;\\n            flex: 1 1 150px;\\n  }\\n  .preview-header:after {\\n    right: -10%;\\n    width: 500px;\\n  }\\n}\\n@media (max-width: 992px) {\\n  .container {\\n    max-width: 780px;\\n  }\\n  .preview__img {\\n    right: 120px;\\n    top: 120px;\\n  }\\n  .header__menu {\\n    display: none;\\n  }\\n  .btn-burger-wrapper, .btn__burger-menu {\\n    display: block;\\n  }\\n  .preview {\\n    padding-bottom: 60px;\\n  }\\n  .preview-footer {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    -webkit-box-align: start;\\n        -ms-flex-align: start;\\n            align-items: flex-start;\\n    gap: 100px;\\n  }\\n  .preview_registration {\\n    background-color: #C2DA6B;\\n    padding: 0;\\n  }\\n  .preview_registration:before {\\n    display: none;\\n  }\\n  .preview__soc-seti {\\n    display: none;\\n  }\\n  .decor1:after {\\n    display: none;\\n  }\\n  .btn_registarion {\\n    padding: 25px 95px;\\n  }\\n  .news__title:before {\\n    display: none;\\n  }\\n  .soc-seti-mobile {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    gap: 35px;\\n    padding-top: 45px;\\n  }\\n  .soc-seti__item_twitter {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n  }\\n  .soc-seti__item__instagam {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n  }\\n  .soc-seti__item_facebook {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n  }\\n  .news {\\n    padding-top: 80px;\\n  }\\n  .decor4:before, .decor4:after, .decor3:before {\\n    display: none;\\n  }\\n  .jc-end {\\n    -webkit-box-pack: start;\\n        -ms-flex-pack: start;\\n            justify-content: flex-start;\\n  }\\n  .menu-lng_mob {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n    width: 100%;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    background-color: rgba(187, 187, 187, 0.5);\\n    padding: 20px 0;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .container {\\n    max-width: 685px;\\n  }\\n  .news__photo {\\n    max-width: 330px;\\n  }\\n  .preview__img {\\n    right: 45%;\\n    top: 26%;\\n  }\\n  .title-number {\\n    font-size: 34px;\\n  }\\n  .line-black {\\n    width: 29px;\\n  }\\n  .info__date {\\n    gap: 21px;\\n  }\\n  .content {\\n    gap: 40px;\\n  }\\n  .btn_still {\\n    margin-top: 50px;\\n  }\\n  .news-content__text {\\n    height: 85px;\\n    white-space: normal;\\n    overflow: hidden;\\n    padding: 5px;\\n    text-overflow: ellipsis;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 3;\\n    -webkit-box-orient: vertical;\\n  }\\n  .news-content__title {\\n    font-size: 30px;\\n    line-height: 35px;\\n  }\\n}\\n@media (max-width: 677px) {\\n  .container {\\n    max-width: 469px;\\n  }\\n  .carousel__item {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 0 167px;\\n            flex: 1 0 167px;\\n  }\\n  .carrousel-wrapper {\\n    overflow: scroll;\\n  }\\n  .news-content {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n  }\\n  .line-green {\\n    display: none;\\n  }\\n  .news__title {\\n    font-size: 50px;\\n  }\\n  .soc-seti-mobile {\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n  }\\n  .news__photo, .news-content__text {\\n    min-width: 100%;\\n  }\\n  .news-content__title {\\n    font-size: 34px;\\n    line-height: 45px;\\n  }\\n  .footer-wrapper {\\n    gap: 100px;\\n  }\\n  .footer-item {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n    gap: 20px;\\n  }\\n  .logos {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n  }\\n  .logos__img_main {\\n    width: 75%;\\n  }\\n  .footer-color-text {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n    width: auto;\\n    text-align: center;\\n  }\\n  .contacts {\\n    -webkit-box-ordinal-group: 4;\\n        -ms-flex-order: 3;\\n            order: 3;\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n  }\\n  .contacts__phone, .contacts__mail, .location {\\n    text-align: center;\\n  }\\n  .location {\\n    width: auto;\\n  }\\n  .btn__burger-menu:before {\\n    top: 55px;\\n  }\\n  .btn__burger-menu:after {\\n    top: 81px;\\n  }\\n  .preview__title {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 1 auto;\\n            flex: 1 1 auto;\\n    font-size: 54px;\\n    line-height: 70px;\\n    text-align: center;\\n  }\\n  .preview-footer {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: reverse;\\n        -ms-flex-direction: column-reverse;\\n            flex-direction: column-reverse;\\n    margin-top: 30px;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    gap: 50px;\\n  }\\n  .preview__info {\\n    position: static;\\n    position: initial;\\n  }\\n  .news__title {\\n    margin-bottom: 80px;\\n  }\\n  .menu-wrapper, .img-wrapper {\\n    display: none;\\n  }\\n  .soc-seti__item_facebook {\\n    width: 22px;\\n    height: 40px;\\n    background-size: contain;\\n  }\\n  .soc-seti__item__instagam {\\n    width: 40px;\\n    height: 40px;\\n    background-size: contain;\\n  }\\n  .soc-seti__item_twitter {\\n    width: 50px;\\n    height: 40px;\\n    background-size: contain;\\n  }\\n  .partners__title {\\n    width: 100%;\\n    text-align: center;\\n  }\\n  .partners__header:before {\\n    left: 78px;\\n  }\\n  .switcher {\\n    display: none;\\n  }\\n  .preview-header:after {\\n    display: none;\\n  }\\n}\\n@media (max-width: 560px) {\\n  .mini-logo {\\n    display: none;\\n  }\\n  .carousel__item {\\n    -webkit-box-flex: 1;\\n        -ms-flex: 1 0 178px;\\n            flex: 1 0 178px;\\n  }\\n  .btn__burger-menu:before {\\n    top: 58px;\\n  }\\n  .btn__burger-menu:after {\\n    top: 85px;\\n  }\\n  .into__font {\\n    text-align: center;\\n  }\\n}\\n@media (max-width: 470px) {\\n  .container {\\n    max-width: 340px;\\n  }\\n  .title {\\n    font-size: 34px;\\n  }\\n  .partners__header:before {\\n    left: 76px;\\n    top: 15px;\\n  }\\n  .btn__burger-menu:before {\\n    top: 42px;\\n  }\\n  .btn__burger-menu:after {\\n    top: 69px;\\n  }\\n  .info__text {\\n    gap: 10px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ugraweb/./src/styles/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ugraweb/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://ugraweb/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ugraweb/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ugraweb/./src/styles/style.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ugraweb/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/Group 13.svg":
/*!******************************!*\
  !*** ./src/img/Group 13.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 13.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_13.svg?");

/***/ }),

/***/ "./src/img/Group 16.1.svg":
/*!********************************!*\
  !*** ./src/img/Group 16.1.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 16.1.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_16.1.svg?");

/***/ }),

/***/ "./src/img/Group 18.svg":
/*!******************************!*\
  !*** ./src/img/Group 18.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 18.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_18.svg?");

/***/ }),

/***/ "./src/img/Group 19.svg":
/*!******************************!*\
  !*** ./src/img/Group 19.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 19.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_19.svg?");

/***/ }),

/***/ "./src/img/Group 21.svg":
/*!******************************!*\
  !*** ./src/img/Group 21.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 21.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_21.svg?");

/***/ }),

/***/ "./src/img/Group 9.svg":
/*!*****************************!*\
  !*** ./src/img/Group 9.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\Group 9.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/Group_9.svg?");

/***/ }),

/***/ "./src/img/arrow.svg":
/*!***************************!*\
  !*** ./src/img/arrow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\arrow.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/arrow.svg?");

/***/ }),

/***/ "./src/img/fc-gray.svg":
/*!*****************************!*\
  !*** ./src/img/fc-gray.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\fc-gray.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/fc-gray.svg?");

/***/ }),

/***/ "./src/img/fc.svg":
/*!************************!*\
  !*** ./src/img/fc.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\fc.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/fc.svg?");

/***/ }),

/***/ "./src/img/glasses.svg":
/*!*****************************!*\
  !*** ./src/img/glasses.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\glasses.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/glasses.svg?");

/***/ }),

/***/ "./src/img/inst.svg":
/*!**************************!*\
  !*** ./src/img/inst.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\inst.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/inst.svg?");

/***/ }),

/***/ "./src/img/insta-gray.svg":
/*!********************************!*\
  !*** ./src/img/insta-gray.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\insta-gray.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/insta-gray.svg?");

/***/ }),

/***/ "./src/img/next.svg":
/*!**************************!*\
  !*** ./src/img/next.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\next.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/next.svg?");

/***/ }),

/***/ "./src/img/prev.svg":
/*!**************************!*\
  !*** ./src/img/prev.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\prev.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/prev.svg?");

/***/ }),

/***/ "./src/img/tw-gray.svg":
/*!*****************************!*\
  !*** ./src/img/tw-gray.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\tw-gray.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/tw-gray.svg?");

/***/ }),

/***/ "./src/img/twitter.svg":
/*!*****************************!*\
  !*** ./src/img/twitter.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img\\\\twitter.svg\";\n\n//# sourceURL=webpack://ugraweb/./src/img/twitter.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;