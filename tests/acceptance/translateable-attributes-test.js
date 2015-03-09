/* jshint expr:true */

import Ember from 'ember';
import startApp from '../helpers/start-app';
import TranslateableAttributes from 'ember-cli-foreigner/translateable-attributes';

var App;

describe('Acceptance: TranslateableAttributes', function() {
  beforeEach(function() {
    App = startApp();
    Ember.TextField.reopen(TranslateableAttributes);
    visit('/');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('should output the correct translation for a given key', function() {
    expect($('#translateable-attributes').attr('placeholder')).to.equal('This is a translated attribute on an Ember.TextField.');
  });

  it('should output a string stating that a translation is missing when it’s the case', function() {
    expect($('#inexistant-key').attr('placeholder')).to.equal('translation missing: en.acceptance_tests.inexistant_key');
  });
});
