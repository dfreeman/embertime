import Ember from 'ember';
import Adapter from 'ember-data/adapter';
import service from 'ember-service/inject';

import Env from 'embertime-app/config/environment';

const { getOwner } = Ember;

/*
 * This class takes requests for locating departments (either by ID or in bulk) and goes off
 * to the Salsify API to request the `Department` property's enumerated values.
 */
export default Adapter.extend({
  ajax: service(),

  findRecord(store, type, id, snapshot) {
    return this.get('ajax').request(`/api/properties/Department/enumerated_values/${encodeURIComponent(id)}`, payload());
  },

  findAll() {
    return this.get('ajax').request(`/api/properties/Department/enumerated_values`, payload({
      per_page: 100
    }));
  },

  findHasMany(store, snapshot, url, relationship) {
    if (url === '//members') {
      const personAdapter = getOwner(this).lookup('adapter:person');
      return personAdapter.query(store, null, { filter: { 'Department': snapshot.record.id } });
    }
  }
});

function payload(data = {}) {
  return {
    data,
    headers: {
      Authorization: `Bearer ${Env.SALSIFY_API_KEY}`
    }
  };
}
