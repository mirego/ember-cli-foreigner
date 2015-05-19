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

  it('should output the correct translation after changing the locale', function(done) {
    App.set('locale', 'fr');

    visit('/not-found')
    .visit('/').then(function() {
      Ember.run.next(function() {
        expect($('#key-lookup').text().trim()).to.equal('Ceci est une recherche de clé.');

        App.set('locale', 'en');
        done();
      });
    });
  });
});
