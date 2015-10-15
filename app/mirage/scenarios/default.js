export default function(server) {
  const eng = server.create('department', { attributes: { name: 'Engineering' } });
  const cse = server.create('department', { attributes: { name: 'Customer Success Engineering' } });

  for (const name of ['Dan Freeman', 'Doug Rourke', 'Daniel Piet', 'Andrew Hills']) {
    // Create a new person
    const engineer = server.create('person', {
      attributes: { name, title: 'Engineer' },
      relationships: {
        department: {
          data: { type: 'departments', id: eng.id }
        }
      }
    });

    // Add them to the department
    eng.relationships.members.data.push({ type: 'people', id: engineer.id });
  }

  for (const name of ['Brian Tenggren', 'Chris Davies', 'Dave Simel', 'Jack Ford', 'Jesse Norris', 'Pat Breault', 'Rovaira Dasig']) {
    // Create a new person
    const engineer = server.create('person', {
      attributes: { name, title: 'CS Engineer' },
      relationships: {
        department: {
          data: { type: 'departments', id: cse.id }
        }
      }
    });

    // Add them to the department
    cse.relationships.members.data.push({ type: 'people', id: engineer.id });
  }

  // Save the changes we made when we added people to our departments
  server.db.departments.update(eng.id, eng);
  server.db.departments.update(cse.id, cse);
}
