// 'use client';

import styles from '/styles/modal.module.scss'
import { motion } from 'framer-motion';

export default function Backdrop ({ children, onClick }) {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
