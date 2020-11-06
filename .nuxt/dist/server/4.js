exports.ids = [4];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7702aa22", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73da7f60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box-cardu h1[data-v-73da7f60],.box-cardu h3[data-v-73da7f60]{display:flex;justify-content:center}.box-cardu h3[data-v-73da7f60]{padding-top:20px}.photo-imgu[data-v-73da7f60]{position:relative}.photo-imgu[data-v-73da7f60],.pimgu[data-v-73da7f60]{width:300px;height:225px}.pimgu[data-v-73da7f60]{overflow:hidden;padding:0}.artimg2u[data-v-73da7f60]{height:100%;width:100%}.box-photou[data-v-73da7f60]{margin-bottom:20px;box-sizing:border-box}.box-cardu[data-v-73da7f60],.box-photou[data-v-73da7f60]{display:flex;position:relative}.box-cardu[data-v-73da7f60]{width:1260px;left:50%;padding-top:20px;transform:translate(-50%);justify-content:space-around;flex-wrap:wrap}.topu[data-v-73da7f60]{height:70px}.el-card[data-v-73da7f60] .el-card__body{padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/album/index.vue?vue&type=template&id=73da7f60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"topu\" data-v-73da7f60></div> "),_c('el-card',{staticClass:"box-cardu"},[_c('h1',[_vm._v(_vm._s(_vm.photo.albumName))]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.photo.albumDesc))]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"box-cardu"},_vm._l((_vm.photoList),function(item,index){return _c('div',{key:index,staticClass:"box-photou"},[_c('div',{staticClass:"photo-imgu"},[_c('div',{staticClass:"pimgu"},[_c('img',{staticClass:"artimg2u",attrs:{"src":item.pictureUrl,"alt":""}})])])])}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/album/index.vue?vue&type=template&id=73da7f60&scoped=true&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/album/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var albumvue_type_script_lang_js_ = ({
  data() {
    return {
      photo: {},
      photoList: {}
    };
  },

  methods: {},

  async mounted() {
    let id = this.$route.params.id;
    console.log(this.$route);
    await request["a" /* default */].get("/album/" + id).then(res => {
      console.log(res);
      console.log(id);
      this.photo = res.data.data;
      this.photoList = res.data.data.photosList;
    });
  }

});
// CONCATENATED MODULE: ./pages/album/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_albumvue_type_script_lang_js_ = (albumvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/album/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_albumvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "73da7f60",
  "1077b4aa"
  
)

/* harmony default export */ var album = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://121.36.55.44:8080'
}); //请求拦截器
//响应拦截器

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ })

};;
//# sourceMappingURL=4.js.map