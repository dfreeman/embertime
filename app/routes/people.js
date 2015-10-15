import Ember from 'ember';

/*
 * We started out having this route fetch all people in its model
 * hook, but since it's also the parent of the individual person
 * route, that meant we'd fetch every person even when we only wanted
 * to see one.
 *
 * To solve this problem, we moved that fetch into the people.index
 * route, so this one is now empty, and we could delete this file if we
 * wanted.
 */
export default Ember.Route.extend({
});
