import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('datasets', function() {});
  this.route('dataset', { path: '/datasets/:dataset_id' });
  this.route('visualizations');
  this.route('visualization', { path: '/visualizations/:visualization_id' }, function() {});
});

export default Router;
