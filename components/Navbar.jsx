'use client';

import React from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Foodie Planner
        </motion.h2>
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
