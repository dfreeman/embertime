export default function(server) {
  const eng = server.create('department', { id: 'Engineering', name: 'Engineering' });
  const cse = server.create('department', { id: 'CS Engineering', name: 'CS Engineering' });

  for (const name of ['Dan Freeman', 'Doug Rourke', 'Daniel Piet', 'Andrew Hills']) {
    // Create a new person
    const engineer = server.create('person', {
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1],
      role: 'Engineer',
      department: eng.id
    });
  }

  for (const name of ['Brian Tenggren', 'Chris Davies', 'Dave Simel', 'Jack Ford', 'Jesse Norris', 'Pat Breault', 'Rovaira Dasig']) {
    // Create a new person
    const engineer = server.create('person', {
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1],
      role: 'CS Engineer',
      department: cse.id
    });
  }
}
