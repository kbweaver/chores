import React from 'react';

const ChoreList = ({ chores }) =>
  <ul>
  {chores.map((chore, index) => {
    return (
      <li key={index}>{chore.name} ({index})</li>
    );
  })}
  </ul>

ChoreList.prototype.propTypes = {
  chores: React.PropTypes.array.isRequired,
}

export default ChoreList;
