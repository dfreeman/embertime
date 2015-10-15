export default function() {
  /*
   * As with the factories, Mirage will soon support JSON:API
   * out of the box for routing, so we'll be able to use shorthand
   * for all of these rather than manually slinging the data around.
   */

  this.get('/people', function(db, request) {
    return {
      data: db.people.map(({ id, ...attributes }) => {
        return { type: 'people', id, ...attributes };
      })
    };
  });

  this.get('/people/:id', function(db, request) {
    const { id, ...attributes } = db.people.find(request.params.id);
    return {
      data: { type: 'people', id, ...attributes }
    };
  });

  this.get('/departments', function(db, request) {
    return {
      data: db.departments.map(({ id, ...attributes }) => {
        return { type: 'departments', id, ...attributes };
      })
    };
  });

  this.get('/departments/:id', function(db, request) {
    const { id, ...attributes } = db.departments.find(request.params.id);
    return {
      data: { type: 'departments', id, ...attributes }
    };
  });
}
