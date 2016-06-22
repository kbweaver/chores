import React from 'react';

const sampleChores = [
  {
    name: 'kitchen',
  },
  {
    name: 'bathroom',
  },
];

const ChoreList = () =>
  <ul>
  {sampleChores.map((chore, index) => {
    return (
      <li>{chore.name} ({index})</li>
    );
  })}
  </ul>

export default ChoreList;
