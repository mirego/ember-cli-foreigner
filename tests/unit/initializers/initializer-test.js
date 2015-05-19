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

  it('should register the `t` helper', function() {
    initializer.initialize(container, application);
    expect(Ember.Handlebars.helpers.t).to.exist;
  });
});
