exports.ids = [7];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("25fdc054", content, true, context)
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_165a09cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".topnav[data-v-165a09cc]{margin:0 auto;width:70%;height:100%;padding-top:80px}.centernav[data-v-165a09cc]{width:100%;height:100%}.centerTnav[data-v-165a09cc]{padding:10px 10px 20px 12px;display:flex;color:#555;font-size:18px}.centerTnav i[data-v-165a09cc]{padding-right:7px}.centerCnav[data-v-165a09cc]{width:100%;height:100%;flex-wrap:wrap}.centerCnav[data-v-165a09cc],.el-cardc[data-v-165a09cc]{display:flex;align-items:center}.el-cardc[data-v-165a09cc]{width:25%;height:68px;margin-bottom:20px}.slotv[data-v-165a09cc]{width:100%}.el-cardcc[data-v-165a09cc]{padding:15px;box-sizing:border-box;border-radius:4px;box-shadow:1px 1px 3px 0 #d1d1d1;overflow:hidden;color:#303133;margin:0 auto;width:90%;height:100%;display:flex;align-items:center;background-color:#fff}.el-img[data-v-165a09cc]{width:20%;height:100%}.el-imgc[data-v-165a09cc]{border-radius:50%;border:2px solid #ebecf1;box-sizing:border-box;width:100%;transition:all .5s}.el-text[data-v-165a09cc]{margin:0 auto;font-size:16px;color:#282a2d}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=165a09cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"topnav"},_vm._l((_vm.navList),function(item){return _vm._ssrNode("<div class=\"centernav\" data-v-165a09cc>","</div>",[_vm._ssrNode("<div class=\"centerTnav\" data-v-165a09cc><i class=\"el-icon-star-on\" style=\"font-size:19px; color:#555;\" data-v-165a09cc></i> <p data-v-165a09cc>"+_vm._ssrEscape("\n        "+_vm._s(item.type)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"centerCnav\" data-v-165a09cc>","</div>",_vm._l((item.websiteList),function(item2){return _c('el-popover',{key:item2.websiteId,staticClass:"el-cardc",attrs:{"placement":"top-start","title":item2.websiteName,"width":"60","trigger":"hover","content":item2.description}},[_c('div',{staticClass:"slotv",attrs:{"slot":"reference"},slot:"reference"},[_c('a',{staticClass:"el-cardcc",attrs:{"href":item2.websiteUrl}},[_c('div',{staticClass:"el-img"},[_c('img',{staticClass:"el-imgc",attrs:{"src":item2.iconUrl,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"el-text"},[_vm._v(" "+_vm._s(item2.websiteName)+" ")])])])])}),1)],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=165a09cc&scoped=true&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  data() {
    return {
      navList: {}
    };
  },

  methods: {
    async getNavList() {
      await request["a" /* default */].get('/navi').then(res => {
        console.log(res);
        this.navList = res.data.data;
      }).catch(err => {
        console.log(err);
      });
    }

  },

  async mounted() {
    this.getNavList();
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "165a09cc",
  "77428ce5"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=7.js.map