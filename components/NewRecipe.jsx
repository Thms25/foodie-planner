'use client';

import { useState } from 'react';
import styles from 'styles/newRecipe.module.scss';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Backdrop from "./Backdrop";

export default function newRecipe({ handleClose }) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('no description yet');
  const [rate, setRate] = useState(5);
  const [prep, setPrep] = useState(60);
  const [servings, setServings] = useState(4);
  const [category, setCategory] = useState('Italian');

  const DropIn = {
    init: {
      y: "-10vh",
      opacity: 0,
    },
    anim: {
      y: "0",
      opacity: 1,
    },
    trs: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 80,
    },
    exit: {
      y: "10vh",
      opacity: 0,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      title,
      description,
      rate,
      prep_time: prep,
      servings,
      category
    }

    const res = await fetch(process.env.NEXT_PUBLIC_RECIPES, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipeData)
    })

    if (res.ok) {
      const { id } = await res.json();
      router.push(`/recipe/${id}`)
    } else {
      console.log('error')
    }
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles.newRecipe}
        variants={DropIn}
        initial="init"
        animate="anim"
        transition="trs"
        exit="exit"
      >
        <div className={styles.cross}>
          <p onClick={handleClose}>X</p>
        </div>
        <h1>Let's create your own recipe</h1>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={styles.items}>
            <label htmlFor="title">Recipe Title</label>
            <input
              id='title'
              type="text"
              value={title}
              onChange={ (e) => { setTitle(e.currentTarget.value) } }
              required
            />
          </div>
          <div className={styles.items}>
            <label htmlFor="description">Recipe Description</label>
            <input
              id='description'
              type="textarea"
              value={description}
              onChange={(e) => {setDescription(e.currentTarget.value)}}
              required
            />
          </div>
          <div className={styles.items}>
            <label htmlFor="rate">Recipe rate</label>
            <input
              id='rate'
              type="number"
              value={rate}
              onChange={(e) => {setRate(e.currentTarget.value)}}
              required
            />
          </div>
          <div className={styles.items}>
            <label htmlFor="prep-time">Preparation time</label>
            <input
              id='prep-time'
              type="number"
              value={prep}
              onChange={(e) => {setPrep(e.currentTarget.value)}}
              required
            />
          </div>
          <div className={styles.fields}>
            <label htmlFor="servings">Servings</label>
            <input
              id='servings'
              type="number"
              value={servings}
              onChange={(e) => {setServings(e.currentTarget.value)}}
              required
            />
          </div>
          <div className={styles.fields}>
            <label htmlFor="category">Food Category</label>
            <input
              id='category'
              type="text"
              value={category}
              onChange={(e) => {setCategory(e.currentTarget.value)}}
              required
            />
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </motion.div>
    </Backdrop>
  )
}
