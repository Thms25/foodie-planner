'use client';

import { useState } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import NewRecipe from "@/components/NewRecipe";

const Navbar = () => {
  const [modalOpen, setModaOpen] = useState(false);
  const close = () => setModaOpen(false);
  const open = () => setModaOpen(true);

  return (
    <>
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
        <FontAwesomeIcon
          onClick={() => open()}
          icon={faUser}
          className={styles.userIcon}
        />
      </nav>
      <div>
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <NewRecipe modalOpen={modalOpen} handleClose={close} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
