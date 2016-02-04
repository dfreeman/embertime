import PageObject from 'embertime-app/tests/page-object';

const {
  visitable,
  collection,
  clickable,
  text
} = PageObject;

export default PageObject.create({
  visit: visitable('/departments'),

  departments: collection({
    itemScope: 'tbody tr',

    item: {
      name: text('td'),
      visit: clickable('a')
    }
  })
});
