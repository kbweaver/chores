import React from 'react';

const ChoreList = ({ chores }) =>
  <ul>
  {chores.map((chore, index) => {
    return (
      <li key={index}>{chore.name} ({index})</li>
    );
  })}
  </ul>

export default ChoreList;
