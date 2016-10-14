import React from 'react';

const NavBar = () => (
  <header>
    <div id='logo'>
      Chores
    </div>
    <div id='login'>
      <a href="/auth/google">Log in with Google</a>
    </div>
  </header>
);

export default NavBar;
