/* jshint expr:true */
import Ember from 'ember';
import initializer from 'dummy/initializers/ember-cli-foreigner';

describe('Initializer', function() {
  var container, application;

  beforeEach(function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  });

  it('should register the addon in Ember.libraries', function() {
    initializer.initialize(container, application);

    var libraryIsRegistered = Ember.libraries.some(function(library) {
      return library.name == 'ember-cli-foreigner';
    });

    expect(libraryIsRegistered).to.be.true;
  });

  it('should register the `t` and `translate-attr` helpers', function() {
    initializer.initialize(container, application);

    expect(Ember.Handlebars.helpers.t).to.exist;
    expect(Ember.Handlebars.helpers['translate-attr']).to.exist;
  });

});
