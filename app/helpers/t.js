import Ember from 'ember';

var translationMissing = function(keyPath) {
  return 'translation missing: ' + foreigner.locale + '.' + keyPath;
};

export default function(key, options) {
  options = options || {};
  var attrs = options.hash;
  return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
}
