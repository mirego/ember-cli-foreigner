import Ember from 'ember';

var translationMissing = function(keyPath) {
  return `translation missing: ${foreigner.locale}.${keyPath}`;
};

export default function(key, options) {
  options = options || {};
  let attrs = options.hash;
  let translation = foreigner.t(key, attrs);

  if (!translation) return new Ember.Handlebars.SafeString(translationMissing(key));
  if (typeof translation === 'string') return new Ember.Handlebars.SafeString(translation);
  return translation;
}
