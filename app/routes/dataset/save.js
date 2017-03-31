import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createVisualization (data, model) {
      let visualization = this.get('store').createRecord('visualization', data);
      visualization.set('dataset', model);
      visualization.save()
        .then(() => this.transitionTo('visualizations'));
    }
  }
});
