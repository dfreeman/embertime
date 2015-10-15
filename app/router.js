import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people', function() {
    // implicitly, there's a `this.route('index', { path: '' });` here
    this.route('person', { path: ':person_id' });
  });

  this.route('departments', function() {
    // implicitly, there's a `this.route('index', { path: '' });` here
    this.route('department', { path: ':department_id' });
  });
});

export default Router;
