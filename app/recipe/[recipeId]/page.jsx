'use client'

import { useState, useEffect } from 'react';
import styles from 'styles/recipePage.module.scss'
import EditRecipe from "@/components/EditRecipe";


async function fetchRecipe(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`)
  return res.json();
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState([])
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    async function getRecipe() {
      const myRecipe = await fetchRecipe(params.recipeId)
      setRecipe(myRecipe)
    }
    getRecipe();
  }, []);

  return (
    <div>
      <div className={styles.recipePage}>
        <h1>This is {recipe.title}</h1>
        <h3>{recipe.description}</h3>
        <h3>{recipe.category}</h3>
        <p>{recipe.rate}</p>
        <p>{recipe.prep_time}</p>
        <p>{recipe.servings}</p>
        <button onClick={() => setEdit(true)}>EDIT</button>
      </div>
      {edit && (
        <div>
          <EditRecipe recipe={recipe} />
          <button onClick={() => setEdit(false)}>STOP EDIT</button>
        </div>
      )}
    </div>
  );
}
