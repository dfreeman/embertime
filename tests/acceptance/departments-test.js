import { test } from 'qunit';
import moduleForAcceptance from 'embertime-app/tests/helpers/module-for-acceptance';

import departmentsPage from 'embertime-app/tests/pages/departments';
import departmentPage from 'embertime-app/tests/pages/department';

moduleForAcceptance('Acceptance | departments');

test('visiting /departments', async function(assert) {
  server.create('department', { id: 'one', name: 'First Dept' });
  server.create('department', { id: 'two', name: 'Second Dept' });

  server.create('person', { department: 'one' });

  await departmentsPage.visit();

  assert.equal(departmentsPage.departments().count(), 2);
  assert.equal(departmentsPage.departments(1).name(), 'First Dept');
  assert.equal(departmentsPage.departments(2).name(), 'Second Dept');

  await departmentsPage.departments(1).visit();

  assert.equal(departmentPage.people().count(), 1);
});
