import PageObject from 'embertime-app/tests/page-object';

const {
  visitable,
  collection,
  text
} = PageObject;

export default PageObject.create({
  visit: visitable('/departments/:id'),

  people: collection({
    itemScope: '.person-card'
  })
});
