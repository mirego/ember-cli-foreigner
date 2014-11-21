// jshint node:true

'use strict';

module.exports = {
  name: 'ember-cli-foreigner',

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/foreigner.js/dist/foreigner.js');
  }
};
