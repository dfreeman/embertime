import Ember from 'ember';

export default Ember.Route.extend({
  /*
   * Because the entry in router.js for this route has a dynamic segment
   * called `:person_id`, Ember's default behavior in the model hook
   * for this route is going to be to look for a model called 'person'
   * and then try to load the one with that id. If we wanted to be explicit,
   * we could define the model hook ourselves:
   */

  //  model(params) {
  //    return this.store.findRecord('person', params.person_id);
  //  }
});
