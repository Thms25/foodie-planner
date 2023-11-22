'use client';

// Hooks
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Style
import styles from '../styles/navbar.module.scss';
// Anmations
import { motion, AnimatePresence } from 'framer-motion';

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import NewRecipe from "@/components/NewRecipe";

// Auth
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { LogIn, LogOut, SignIn } from './Buttons';

const Navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function settingProviders() {
      const res = await getProviders()
      setProviders(res)
    }

    settingProviders()
    return () => {
      console.log("clean up");
    };
  }, []);

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
        {isUserLoggedIn ? (
          <div className='d-flex'>
            <LogOut />
            <FontAwesomeIcon
              onClick={() => open()}
              icon={faUser}
              className={styles.userIcon}
            />
          </div>
        ) : (
          <>
            {providers && (
              <div className='d-flex'>
                {Object.values.map((provider) => (
                  <>
                    <SignIn provider={provider} />
                    <LogIn provider={provider} />
                  </>
                ))}
              </div>
            )}
          </>
        )}
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
