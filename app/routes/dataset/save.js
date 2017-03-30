import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createVisualization (color, model) {
      let visualization = this.get('store').createRecord('visualization', {
        color: color
      });
      visualization.set('dataset', model);
      visualization.save()
        .then(() => this.transitionTo('visualizations'));
    }
  }
});
