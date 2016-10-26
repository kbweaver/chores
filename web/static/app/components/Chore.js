import React from 'react';
import styles from './Chore.css';

const Chore = ({ chore, onDelete }) => {
  return <div>
    <span className={styles.x}
          onClick={() => onDelete(chore.id)}
    >×</span> {chore.name}
  </div>;
}

Chore.propTypes = {
  chore: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired,
}

export default Chore;
