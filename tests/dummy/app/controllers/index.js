import Ember from 'ember';

export default Ember.Controller.extend({
  adjective: 'simple',

  actions: {
    changeAdjective: function() {
      this.set('adjective', 'bound');
    }
  }
});
