import placeholderFor from '../../../utils/placeholder-for';
import { module, test } from 'qunit';

module('Unit | Utility | placeholder for');

test('produces a placeholder URL for the given name', function(assert) {
  const placeholder = placeholderFor('John', 'Deaux', { color: '000000' });
  assert.equal(placeholder, '//place-hold.it/300/000000&text=(John)&fontsize=16');
});

test('honors the given size', function(assert) {
  const placeholder = placeholderFor('John', 'Deaux', { color: '000000', size: 100 });
  assert.equal(placeholder, '//place-hold.it/100/000000&text=(John)&fontsize=16');
});

test('uses the given names to generate a stable color', function(assert) {
  const johnOne = placeholderFor('John', 'Deaux');
  const jane = placeholderFor('Jane', 'Doe');
  const johnTwo = placeholderFor('John', 'Deaux');

  assert.equal(extractColor(johnOne), extractColor(johnTwo));
  assert.notEqual(extractColor(johnOne), extractColor(jane));
});

function extractColor(url) {
  return /place-hold\.it\/\d+\/(.*)&/.exec(url)[1];
}
