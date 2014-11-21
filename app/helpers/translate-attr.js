import Ember from 'ember';

export default function(options) {
  var attrs;
  var result;
  attrs = options.hash;
  result = [];

  Ember.keys(attrs).forEach(function(property) {
    var translatedValue;
    translatedValue = foreigner.t(attrs[property]);
    return result.push('%@="%@"'.fmt(property, translatedValue));
  });

  return new Ember.Handlebars.SafeString(result.join(' '));
}
