import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateVisualization (color, visualization) {
      console.log(visualization.get('id'));
      visualization.set('color', color);
      visualization.save();
    }
  }
});
