import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  zipcodeCount: DS.attr(),

  formattedCount: Ember.computed('zipcodeCount', function () {
    return Object.keys(this.get('zipcodeCount')).map((e) => {
      return {
        value: this.get('zipcodeCount')[e],
        label: e
      };
    });
  }),
});
