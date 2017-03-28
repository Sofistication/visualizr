import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),

  model (params) {
    if (this.get('isAuthenticated')) {
      return this.get('store').findRecord('dataset', params.dataset_id);
    } else {
      this.transitionTo('sign-in');
      this.get('flashMessages')
      .danger('Please sign in to view this page.');
    }
  },
});
