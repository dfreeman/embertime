import Adapter from 'ember-data/adapter';
import service from 'ember-service/inject';

import Env from 'embertime-app/config/environment';

/**
 * This class takes requests to look up people and translates them into calls to the product API,
 * returning appropriate properties.
 */
export default Adapter.extend({
  ajax: service(),

  findRecord(store, type, id, snapshot) {
    return this.get('ajax').request(`/api/products/${encodeURIComponent(id)}`, payload());
  },

  findAll(store, type) {
    return this.query(store, type);
  },

  query(store, type, { filter = {} } = {}) {
    const baseFilter = `'First Name':*,'Role':*`;
    const encodePair = ([k, v]) => `'${encodeURIComponent(k)}':'${encodeURIComponent(v)}'`;
    const filterString = [baseFilter, Object.entries(filter).map(encodePair).join(',')].filter(Boolean).join(',');

    return this.get('ajax').request(`/api/products/=${filterString}`, payload({
      per_page: 100,
      selections: `'Date of Birth','Department','Home Town','Role','First Name','Last Name','Salsify Start Date','Profile Picture'`
    }));
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
