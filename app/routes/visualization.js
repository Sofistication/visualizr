import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findAll('dataset')
      .then(() => this.get('store').findRecord('visualization', params.visualization_id));
  }
});
