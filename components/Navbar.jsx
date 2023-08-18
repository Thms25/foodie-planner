import React from 'react';
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h3>Foodie Planner</h3>
      <div className={styles.searchBar}>Search for something</div>
      <div className={styles.dropdown}>head icon</div>
    </nav>
  );
}

export default Navbar;
