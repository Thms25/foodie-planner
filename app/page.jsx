'use client';

import Recipes from "@/components/Recipes";
import NewRecipe from "@/components/NewRecipe";
import styles from "../styles/home.module.scss";
import Calendar from "@/components/HomeCalendar";
import Image from "next/image";
import { motion } from 'framer-motion'
;
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Foodie Planner
        </motion.h1>
        <Image
          priority
          src="/images/foodBanner.jpg"
          alt="foodie planner's banner image"
          width={1024}
          height={596}
          id={styles.bannerImage}
        />
      </div>
      <div>
        <NewRecipe />
      </div>
      <div className={styles.recipes}>
        <h2>Browse through our most liked recipes...</h2>
        <Recipes />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
