import Ember from 'ember';

export default Ember.Route.extend({
  // We keep an explicitly-sorted list of the department members because it makes for nicer
  // transitions between the main people index and specific department pages.
  async model(params) {
    const department = await this.store.findRecord('department', params.department_id);
    const members = (await department.get('members')).sortBy('lastName');
    return { department, members };
  },

  setupController(controller, { department, members }) {
    controller.setProperties({ department, members });
  }
});
