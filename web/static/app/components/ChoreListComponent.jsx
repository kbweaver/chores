import React from 'react';

const ChoreListComponent = ({ chores }) =>
  <ul>
  {chores.map((chore, index) => {
    return (
      <li key={index}>{chore.name} ({index})</li>
    );
  })}
  </ul>

console.log(ChoreListComponent);
ChoreListComponent.propTypes = {
  chores: React.PropTypes.array.isRequired,
}

export default ChoreListComponent;
