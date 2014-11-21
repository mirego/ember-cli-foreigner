// jshint node:true
var path = require('path');

module.exports = {
  description: 'Generates a locale file',

  fileMapTokens: function() {
    var config = this.project.config();
    var localePrefix = config.localePrefix ? path.relative(config.modulePrefix, config.localePrefix) : 'locales';

    return {
      __localeprefix__: function() {
        return localePrefix;
      }
    };
  }
};
