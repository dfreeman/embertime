import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import computed from 'ember-computed';

import placeholderFor from 'embertime-app/utils/placeholder-for';

/*
 * This model represents a person in our organization.
 * In the standard JSON:API serialization, its payload is expected
 * to look something like:
 *
 * {
 *    id: 'person-id',
 *    type: 'people',
 *    attributes: {
 *      firstName: 'Firstname',
 *      lastName: 'Lastname',
 *      role: 'Director of Titlehaving'
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
export default Model.extend({
  // Simple model attributes
  firstName: attr('string'),
  lastName: attr('string'),
  role: attr('string'),
  thumbnailUrl: attr('string'),
  profilePicture: attr('string'),
  homeTown: attr('string'),
  currentCity: attr('string'),

  // We might consider making these `date` attrs instead, but they're not in any defined format
  dateOfBirth: attr('string'),
  salsifyStartDate: attr('string'),

  // Singular relationship to another model
  department: belongsTo('department'),

  image: computed('profilePicture', function() {
    return this.get('profilePicture') || placeholderFor(this.get('firstName'), this.get('lastName'));
  })
});

