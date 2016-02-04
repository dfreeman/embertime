import { camelize } from 'ember-string';
import EmberObject from 'ember-object';

/*
 * This file is responsible for taking the product format returned by Salsify's API
 * and converting it into a JSON:API representation of our (much simpler) person
 * model.
 */
export default EmberObject.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.products) {
      return { data: payload.products.map(normalizePerson) };
    } else {
      return { data: normalizePerson(payload) };
    }
  }
});

function normalizePerson(payload) {
  const { attributes, relationships } = extractPropertyData(payload);

  return {
    type: 'person',
    id: payload.id,
    relationships,
    attributes: {
      thumbnailUrl: payload.thumbnail_url,
      ...attributes
    }
  };
}

function extractPropertyData(payload) {
  const attributes = {};
  const relationships = {};

  let properties = payload.properties;
  if (!properties) {
    properties = [].concat(...payload.property_groups.mapBy('properties'));
  }

  for (const property of properties) {
    if (property.id === 'Department') {
      relationships.department = {
        data: {
          type: 'department',
          id: property.values[0].id
        }
      };
    } else {
      attributes[camelize(property.id)] = property.values.map((value) => {
        return value.large_url || value.name || value.id;
      }).join(', ')
    }
  }

  return { attributes, relationships };
}
