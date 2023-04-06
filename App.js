import React, { useState } from 'react';

function Person({ name, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
    </tr>
  );
}

function PersonList() {
  const [people, setPeople] = useState([
    { name: 'John', age: 28 },
    { name: 'Mary', age: 32 },
    { name: 'Alex', age: 24 },
  ]);

  const addPerson = () => {
    const newPerson = { name: 'Sarah', age: 26 };
    setPeople([...people, newPerson]);
  };

  const removePerson = (index) => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  return (
    <div>
      <h1>Person List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => removePerson(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addPerson}>Add Person</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <PersonList />
    </div>
  );
}

export default App;