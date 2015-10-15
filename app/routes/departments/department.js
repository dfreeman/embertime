import Ember from 'ember';

export default Ember.Route.extend({
  /*
   * Because the entry in router.js for this route has a dynamic segment
   * called `:department_id`, Ember's default behavior in the model hook
   * for this route is going to be to look for a model called 'department'
   * and then try to load the one with that id. If we wanted to be explicit,
   * we could define the model hook ourselves:
   */

  //  model(params) {
  //    return this.store.findRecord('department', params.department_id);
  //  }
});
