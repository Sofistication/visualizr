import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    updateVisualization (color, visualization) {
      visualization.set('color', color);
      visualization.save()
        .then(() => this.transitionTo('visualizations'))
        .catch(() => this.get('flashMessages')
          .danger('There was an error! Are you sure this belongs to you?'));
    }
  }
});
