import DS from 'ember-data';

/*
 * This model represents a person in our organization.
 * In the standard JSON:API serialization, its payload is expected
 * to look something like:
 *
 * {
 *    id: 'person-id',
 *    type: 'people',
 *    attributes: {
 *      name: 'Firstname Lastname',
 *      title: 'Director of Titlehaving'
 *    },
 *    relationships: {
 *      department: {
 *        data: { type: 'departments', id: 'dept-id' }
 *      }
 *    }
 * }
 *
 * As with department members, the department itself will be "sideloaded"
 * if it's included in the response from the server and automatically wired
 * up. Otherwise, the first time you do `user.get('department')`, ember-data
 * will automatically do a request to get the details about it.
 */
export default DS.Model.extend({
  // Simple model attributes
  name: DS.attr('string'),
  title: DS.attr('string'),

  // Singular relationship to another model
  department: DS.belongsTo('department')
});
