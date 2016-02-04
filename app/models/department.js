import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

/*
 * This model represents a department in our organization.
 * In the standard JSON:API serialization, its payload is expected
 * to look something like:
 *
 * {
 *    id: 'dept-id',
 *    type: 'departments',
 *    attributes: {
 *      name: 'Department Name'
 *    },
 *    relationships: {
 *      members: [
 *        { data: { type: 'people', id: 'foo' } },
 *        { data: { type: 'people', id: 'bar' } }
 *      ]
 *    }
 * }
 *
 * The server may also include those people in the response ("sideloading"),
 * in which case the store will automatically hook up the relationship to the
 * department. Otherwise, a GET request will go out for each person the first
 * time you do `department.get('members')`
 */
export default Model.extend({
  name: attr('string'),
  members: hasMany('person')
});
