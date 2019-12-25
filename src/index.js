import Component from "./Component.vue";
import Directive from "./Directive.js";

export default {
  install: function(Vue, options) {
    Vue.component("readMore", Component);
    Vue.directive("readMore", Directive);
  }
};
