'use client'

import { useState, useEffect } from 'react';
import styles from 'styles/recipePage.module.scss'

async function fetchRecipe(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`)
  return res.json();
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    async function getRecipe() {
      const myRecipe = await fetchRecipe(params.recipeId)
      setRecipe(myRecipe)
    }
    getRecipe();
  }, []);

  return (
    <div className={styles.recipePage}>
      <h1>This is {recipe.title}</h1>
      <h3>{recipe.description}</h3>
      <h3>{recipe.category}</h3>
      <p>{recipe.rate}</p>
      <p>{recipe.prep_time}</p>
      <p>{recipe.servings}</p>
    </div>
  );
}
