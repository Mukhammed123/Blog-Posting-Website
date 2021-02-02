import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import i18n from '@/plugins/i18n';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs',
    scrollBarWidth: 8,
  },
  lang: {
    current: 'en',
    locales: i18n.messages,
  },
  theme: {
    // default: 'light',
    dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        // primary: '#1976D2',
        // secondary: '#424242',
        // accent: '#82B1FF',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FB8C00',
      },
      dark: {
        // primary: '#2196F3',
        // secondary: '#424242',
        // accent: '#FF4081',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FB8C00',
      },
    },
  },
});
