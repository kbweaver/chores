import React from 'react';
import Chore from './Chore';
import styles from './Day.css';

const Day = ({ chores, onDelete, date }) => {
  return <li className={styles.day}>
    <span>{date.toLocaleString(undefined, { month: "long" })}&nbsp;{date.getDate()}</span>
    {chores.map( chore =>
      <Chore key={chore.id} chore={chore} onDelete={onDelete} />
    )}
  </li>;
}

Day.propTypes = {
  chores: React.PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  date: React.PropTypes.object.isRequired,
}

export default Day;
