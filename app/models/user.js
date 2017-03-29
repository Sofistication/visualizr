import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  visualizations: DS.hasMany('visualization'),

  saved: Ember.computed('visualizations', function () {
    let visualizations = this.hasMany('visualizations');
    return visualizations.ids().length;
  })
});
