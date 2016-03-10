import Ember from 'ember';

export default Ember.Route.extend({
  // We keep an explicitly-sorted list of the people in the org because it makes for nicer
  // transitions between the main people index and specific department pages.
  async model() {
    const people = await this.store.findAll('person', { reload: true });
    return people.sortBy('lastName');
  }
});
