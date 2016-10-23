import React from 'react';

const ChoreListComponent = ({ chores }) =>
  <ul>
  {chores.map(chore => {
    return (
      <li key={chore.id}>{chore.name} ({chore.id})</li>
    );
  })}
  </ul>

ChoreListComponent.propTypes = {
  chores: React.PropTypes.array.isRequired,
}

export default ChoreListComponent;
