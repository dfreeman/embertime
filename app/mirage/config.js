import { capitalize } from 'ember-string';

/*
 * Normally this file would be a much simpler representation of your API structure,
 * but here we're mimicking the Salsify APIs that we're coercing into serving our
 * very different needs.
 */

export default function() {
  this.get('/api/products/:filter', function(db, request) {
    if (request.params.filter[0] === '=') {
      let people = db.people;

      const match = /'Department':'(.*?)'/.exec(request.params.filter);
      if (match) {
        people = people.filter(person => person.department === match[1]);
      }

      return { products: people.map(serializePerson) };
    } else {
      return serializePerson(db.people.find(request.params.filter))
    }
  });

  this.get('/api/properties/Department/enumerated_values', function(db, request) {
    return { enumerated_values: db.departments };
  });

  this.get('/api/properties/Department/enumerated_values/:id', function(db, request) {
    return db.departments.find(request.params.id);
  });
}

function serializePerson({ id, ...attributes }) {
  const properties = Object.entries(attributes).map(([key, value]) => {
    return { id: capitalize(key), values: [{ id: value, name: value }] };
  });

  return { id, properties };
}
