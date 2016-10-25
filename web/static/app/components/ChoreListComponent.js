import React from 'react';
import Chore from './Chore';

const ChoreListComponent = ({ chores }) =>
  <ul>
  {chores.map(chore => {
    return (
      <Chore chore={chore} key={chore.id} />
    );
  })}
  </ul>

ChoreListComponent.propTypes = {
  chores: React.PropTypes.array.isRequired,
}

export default ChoreListComponent;
