import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      name: process.env.VUE_APP_NAME,
      icon: process.env.VUE_APP_ICON,
      themeColor: process.env.VUE_APP_THEME_COLOR,
      package: {
        version: process.env.VUE_APP_PACKAGE_VERSION,
        author: process.env.VUE_APP_PACKAGE_AUTHOR,
        contributors: process.env.VUE_APP_PACKAGE_CONTRIBUTORS,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
