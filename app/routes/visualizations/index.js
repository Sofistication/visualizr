import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete (visualization) {
      visualization.destroyRecord();
    }
  }
});
