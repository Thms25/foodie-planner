'use client';

import { motion } from 'framer-motion'
import styles from "../styles/home.module.scss";
import Image from "next/image";


export default function Banner() {
  return (
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
  )
}
