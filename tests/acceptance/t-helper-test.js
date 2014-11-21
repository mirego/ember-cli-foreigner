/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: `t` helper', function() {
  beforeEach(function() {
    App = startApp();
    visit('/');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('should output the correct translation for a given key', function() {
    expect($('#key-lookup').text().trim()).to.equal('This is a key lookup.');
  });

  it('should output the correct translation for a string with a simple interpolation', function() {
    expect($('#simple-interpolation').text().trim()).to.equal('This is a simple interpolation.');
  });

  it('should output the correct translation for a string with a bound interpolation', function() {
    expect($('#bound-interpolation').text().trim()).to.equal('This is a simple interpolation.');

    click($('#change-bound-interpolation')[0]).then(function() {
      expect($('#bound-interpolation').text().trim()).to.equal('This is a bound interpolation.');
    });
  });
});
