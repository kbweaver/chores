import React from 'react';

const HelloWorld = ({ phrase }) =>
  <h1>Hello from {phrase}!</h1>

HelloWorld.propTypes = {
  phrase: React.PropTypes.string.isRequired
};

export default HelloWorld;
