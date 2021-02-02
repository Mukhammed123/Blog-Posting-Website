import Vue from 'vue';

import '@/registerServiceWorker';
import App from '@/App';
import i18n from '@/plugins/i18n';
import router from '@/plugins/router';
import store from '@/plugins/store';
import vuetify from '@/plugins/vuetify';

import '@/styles/global.scss';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
