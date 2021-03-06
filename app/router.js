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
  this.route('datasets', function () {});
  this.route('dataset', { path: '/datasets/:dataset_id' }, function() {
    this.route('save');
  });
  this.route('visualizations', function() {});
  this.route('visualization', { path: '/visualizations/:visualization_id' }, function() {
    this.route('edit');
  });
  this.route('*wildcard');
});

export default Router;
