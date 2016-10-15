import React from 'react';
import styles from './NavBar.css';

const NavBar = () => (
  <header className={styles.navbar}>
    <div className={styles.icon}>
      Chores
    </div>
    <div className={styles.login}>
      <a href="/auth/google">Log in with Google</a>
    </div>
  </header>
);

export default NavBar;
