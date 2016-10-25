import React from 'react';
import Chore from './Chore';

const ChoreListComponent = ({ chores, deleteChore }) =>
  <ul>
  {chores.map(chore => {
    return (
      <Chore key={chore.id}
             chore={chore}
             onDelete={deleteChore}
      />
    );
  })}
  </ul>;

ChoreListComponent.propTypes = {
  chores: React.PropTypes.array.isRequired,
  deleteChore: React.PropTypes.func.isRequired,
};

export default ChoreListComponent;
