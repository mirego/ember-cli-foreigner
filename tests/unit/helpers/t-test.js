/* jshint expr:true */

import translations from '../../fixtures/locale-en';
import t from 'dummy/helpers/t';

describe('`t` helper', function() {
  beforeEach(function() {
    foreigner.locale = 'en';
    foreigner.translations.en = translations;
  });

  afterEach(function() {
    foreigner.locale = null;
    foreigner.translations = {};
  });

  it('should return the correct translation for a given key', function() {
    expect(t('unit_tests.hello_world').string).to.equal('Hello, World.');
  });

  it('should return a string stating that a translation is missing when it’s the case', function() {
    expect(t('unit_tests.inexistant_key').string).to.equal('translation missing: en.unit_tests.inexistant_key');
  });
});
