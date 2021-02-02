const packageJson = require('./package.json');

const appName = 'ShareThoughts';
const appIcon = 'application';
const themeColor = '#969999';
const i18nLocale = 'en';
const i18nFallbackLocale = 'en';

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('define')
      .tap((args) => {
        const env = args[0]['process.env'];
        env['VUE_APP_NAME'] = JSON.stringify(appName);
        env['VUE_APP_ICON'] = JSON.stringify(appIcon);
        env['VUE_APP_THEME_COLOR'] = JSON.stringify(themeColor);
        env['VUE_APP_PACKAGE_VERSION'] = JSON.stringify(packageJson.version);
        env['VUE_APP_PACKAGE_AUTHOR'] = JSON.stringify(packageJson.author);
        env['VUE_APP_PACKAGE_CONTRIBUTORS'] = JSON.stringify(packageJson.contributors);
        env['VUE_APP_I18N_LOCALE'] = JSON.stringify(i18nLocale);
        env['VUE_APP_I18N_FALLBACK_LOCALE'] = JSON.stringify(i18nFallbackLocale);
        return args;
      })
      .end()
      .plugin('html')
      .tap((args) => {
        args[0].lang = i18nLocale;
        args[0].title = appName;
        return args;
      })
      .end();
  },
  pluginOptions: {
    i18n: {
      locale: i18nLocale,
      fallbackLocale: i18nFallbackLocale,
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    name: appName,
    themeColor: themeColor,
    msTileColor: themeColor,
    manifestOptions: {
      background_color: themeColor,
    },
  },
  transpileDependencies: ['vuetify'],
};
