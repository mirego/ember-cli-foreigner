/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon({
  wrapInEval: false
});

module.exports = app.toTree();
