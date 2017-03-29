import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  visualizations: DS.hasMany('visualization'),
  zipcodeCount: DS.attr(),

  saved: Ember.computed('visualizations', function () {
    let visualizations = this.hasMany('visualizations');
    return visualizations.ids().length;
  }),

  formattedCount: Ember.computed('zipcodeCount', function () {
    return Object.keys(this.get('zipcodeCount')).map((e) => {
      return {
        value: this.get('zipcodeCount')[e],
        label: e
      };
    });
  }),
});
