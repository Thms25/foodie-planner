'use client';

// Hooks
import { useState } from 'react';
import Link from 'next/link';

// Style
import styles from '../styles/navbar.module.scss';
// Anmations
import { motion, AnimatePresence } from 'framer-motion';

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NewRecipe from "@/components/NewRecipe";
import UserDropdown from './UserDropdown';


export default function Navbar ({ session }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className='text-3xl'
          >
            Foodie Planner
          </motion.h2>
        </Link>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search for something...' className={styles.searchInput} />
        </div>
        <UserDropdown session={session} />
      </nav>
    </>
  );
}
