import Ember from 'ember';

var translationMissing = function(keyPath) {
  return 'translation missing: ' + foreigner.locale + '.' + keyPath;
};

var eachTranslatedAttribute = function(object, fn) {
  var isTranslatedAttribute = /(.+)Translation$/;
  var isTranslatedAttributeMatch;

  for (var key in object) {
    isTranslatedAttributeMatch = key.match(isTranslatedAttribute);
    if (isTranslatedAttributeMatch) {
      fn.call(object, isTranslatedAttributeMatch[1], foreigner.t(object[key]) || translationMissing(object[key]));
    }
  }
};

export default Ember.Mixin.create({
  didInsertElement: function() {
    var result = this._super.apply(this, arguments);
    eachTranslatedAttribute(this, function(attribute, translation) {
      this.set(attribute, translation);
      this.$().attr(attribute, translation);
    });
    return result;
  }
});
