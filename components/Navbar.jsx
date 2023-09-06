import React from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h2>Foodie Planner</h2>
      </Link>
      <div className={styles.searchBar}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search for something...' className={styles.searchInput} />
      </div>
      <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
    </nav>
  );
}

export default Navbar;
