// jshint node:true

module.exports = {
  description: 'Installs foreigner.js with Bower',

  afterInstall: function() {
    return this.addBowerPackageToProject('foreigner.js', '0.1.0');
  },

  normalizeEntityName: function() {}
};
