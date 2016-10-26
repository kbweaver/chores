import React from 'react';
import Day from './Day';
import { addDays } from '../utilities/date';
import styles from './ChoreListComponent.css';

function getDisplayDays(chores) {
  const daysPerWeek = 7;
  const weeksBefore = 2;
  const weeksAfter = 4;
  const currentTime = new Date();
  const today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

  // The beginning of the week weeksBefore weeks ago. +1 to start on Monday instead of Sunday.
  const firstDay = addDays(today, (-1 * daysPerWeek * weeksBefore) - today.getDay() + 1);
  let displayDays = [];
  for (let i = 0; i < daysPerWeek * (weeksBefore + weeksAfter + 1); i++) {
    const date = addDays(firstDay, i);
    displayDays.push({
      date,
      chores: chores.filter(chore => chore.date.getTime() === date.getTime()),
    });
  }

  return displayDays; 
}

const ChoreListComponent = ({ chores, deleteChore }) => {
  const displayDays = getDisplayDays(chores);

  return <ul className={styles.chorelist}>
    {displayDays.map(day => {
      return (
        <Day key={day.date.getTime()}
             date={day.date}
             chores={day.chores}
             onDelete={deleteChore}
        />
      );
    })}
  </ul>;
}

ChoreListComponent.propTypes = {
  chores: React.PropTypes.array.isRequired,
  deleteChore: React.PropTypes.func.isRequired,
};

export default ChoreListComponent;
