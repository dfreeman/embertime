import { camelize } from 'ember-string';
import EmberObject from 'ember-object';

/*
 * This file is responsible for taking the enumerated value format returned by Salsify's API
 * and converting it into a JSON:API representation of our department model.
 */
export default EmberObject.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.enumerated_values) {
      return { data: payload.enumerated_values.map(normalizeDepartment) };
    } else {
      return { data: normalizeDepartment(payload) };
    }
  }
});

function normalizeDepartment(payload) {
  return {
    type: 'department',
    id: payload.id,
    relationships: {
      members: {
        links: {
          related: '//members'
        }
      }
    },
    attributes: {
      name: payload.name
    }
  };
}
