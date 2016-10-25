import React from 'react';

const Chore = ({ chore }) => <li>{chore.name} ({chore.date})</li>;

Chore.propTypes = {
  chore: React.PropTypes.object.isRequired,
}

export default Chore;
