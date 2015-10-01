import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('app route');
    return Person.create({ firstName: 'Dan', lastName: 'Freeman' });
  }
});

const Person = Ember.Object.extend({
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
