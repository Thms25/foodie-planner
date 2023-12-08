"use client";

// Hooks
import Link from "next/link";

// Style
import styles from "../styles/navbar.module.scss";
// Anmations
import { motion, AnimatePresence } from "framer-motion";

// Components
import { CiSearch } from "react-icons/ci";
import NewRecipe from "@/components/Recipes/NewRecipe";
import UserDropdown from "./dropdowns/UserDropdown";

export default function Navbar({ session }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-3xl"
          >
            Foodie Planner
          </motion.h2>
        </Link>
        <div className={styles.searchBar}>
          <CiSearch />
          <input
            type="text"
            placeholder="Search for something..."
            className={styles.searchInput}
          />
        </div>
        <UserDropdown session={session} />
      </nav>
    </>
  );
}
