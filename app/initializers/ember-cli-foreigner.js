import Ember from 'ember';
import t from '../helpers/t';
import translateAttr from '../helpers/translate-attr';
import config from '../config/environment';

var LOCALE_PREFIX = config.localePrefix ? config.localePrefix.replace(config.modulePrefix + '/', '') : 'locales';

var registerLibrary = function() {
  if (Ember.libraries) {
    Ember.libraries.register('ember-cli-foreigner', '0.0.2');
  }
};

var loadLocale = function(app, locale) {
  foreigner.translations[locale] = app.__container__.lookupFactory(LOCALE_PREFIX + '/' + locale + ':main');
};

var registerHelpers = function() {
  Ember.Handlebars.registerBoundHelper('t', t);
  Ember.Handlebars.registerHelper('translate-attr', translateAttr);
};

var createLocaleProperty = function(app) {
  app.reopen({
    locale: Ember.computed(function(key, value) {
      if (arguments.length > 1) {
        loadLocale(app, value);
        foreigner.locale = value;
        return value;
      } else {
        return foreigner.locale;
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
