import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  dataset: DS.belongsTo('dataset'),
  color: DS.attr('string')
});
