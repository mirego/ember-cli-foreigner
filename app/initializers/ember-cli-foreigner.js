import Ember from 'ember';
import t from '../helpers/t';
import translateAttr from '../helpers/translate-attr';
import config from '../config/environment';

export default {
  name: 'ember-cli-foreigner',

  initialize: function(container) {
    if (Ember.libraries) {
      Ember.libraries.register('ember-cli-foreigner', '0.0.1');
    }

    Ember.assert('[ember-cli-foreigner] `ENV.APP.locales` must be specified.', Ember.isArray(config.APP.locales));

    var localePrefix = config.localePrefix ? config.localePrefix.replace(config.modulePrefix + '/', '') : 'locales';

    config.APP.locales.forEach(function(locale) {
      foreigner.translations[locale] = container.lookupFactory(localePrefix + '/' + locale + ':main');
    });

    Ember.Handlebars.registerBoundHelper('t', t);
    Ember.Handlebars.registerHelper('translate-attr', translateAttr);
  }
};
