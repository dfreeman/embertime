import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('person-card', 'Integration | Component | person card', {
  integration: true
});

test('it renders the given person\'s name', function(assert) {
  this.set('person', {
    firstName: 'John',
    lastName: 'Deaux',
    image: 'data:fake-url'
  });

  this.render(hbs`{{person-card person=person}}`);

  assert.equal(this.$('.card-title').text().trim(), 'John Deaux');
  assert.equal(this.$('img').attr('src'), 'data:fake-url');
});
