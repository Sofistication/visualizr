import Ember from 'ember';

export default Ember.Component.extend({
  newViz: {
    color: ''
  },

  actions: {
    save (model) {
      let data = this.get('newViz');
      console.log(model);
      this.sendAction('save', data, model);
      this.set('newViz.color', '');
    }
  }
});
