import Ember from 'ember';

export function capitalize([word]) {
  return word.toUpperCase();
}

export default Ember.Helper.helper(capitalize);
