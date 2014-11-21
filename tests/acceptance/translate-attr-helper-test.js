/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: `translate-attr` helper', function() {
  beforeEach(function() {
    App = startApp();
    visit('/');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('should output the correct translation for a given key', function() {
    expect($('#translate-attr').attr('title')).to.equal('This is a translated attribute.');
  });

  it('should output the correct translation for a given key', function() {
    expect($('#multiple-translated-attribute').attr('title')).to.equal('This is a translated attribute.');
    expect($('#multiple-translated-attribute').attr('alt')).to.equal('This is a translated attribute.');
  });
});
