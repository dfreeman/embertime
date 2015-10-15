import Mirage, { faker } from 'ember-cli-mirage';

/*
 * Note that we're having to fake things out in JSON:API format rather
 * than just defining attributes directly in the factory like we'd like
 * to. A future release of Mirage is going to introduce a serialization
 * layer and some default behavior around JSON:API to solve this problem.
 */
export default Mirage.Factory.extend({
  attributes: () => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle()
  }),
  relationships: {
    department: null
  }
});
