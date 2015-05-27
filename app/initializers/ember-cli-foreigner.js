import Ember from 'ember';
import t from '../helpers/t';
import config from '../config/environment';

const LOCALE_PREFIX = config.localePrefix ? config.localePrefix.replace(`${config.modulePrefix}/`, '') : 'locales';

var registerLibrary = function() {
  if (Ember.libraries && !Ember.libraries._getLibraryByName('ember-cli-foreigner')) {
    Ember.libraries.register('ember-cli-foreigner', '1.1.0');
  }
};

var loadLocale = function(app, locale) {
  foreigner.translations[locale] = app.__container__.lookupFactory(`${LOCALE_PREFIX}/${locale}:main`);
};

var registerHelpers = function() {
  Ember.Handlebars.registerBoundHelper('t', t);
};

var createLocaleProperty = function(app) {
  app.reopen({
    locale: Ember.computed({
      get: function() {
        return foreigner.locale;
      },
      set: function(key, value) {
        loadLocale(app, value);
        foreigner.locale = value;
        return value;
      }
    })
  });
};

export default {
  name: 'ember-cli-foreigner',

  initialize: function(container, app) {
    registerLibrary();
    registerHelpers();
    createLocaleProperty(app);

    if (!app.get('locale')) {
      app.set('locale', app.defaultLocale);
    }
  }
};
