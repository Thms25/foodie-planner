'use client'

import { useState, useEffect } from 'react';
import styles from 'styles/recipePage.module.scss'
import EditRecipe from "@/components/EditRecipe";


async function fetchRecipe(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`)
  return res.json();
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState({})
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    async function getRecipe() {
      const myRecipe = await fetchRecipe(params.recipeId)
      setRecipe(myRecipe)
    }
    getRecipe();
  }, []);

  const handleEditRecipe = async (id, body) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    if (res.ok) {
      console.log("form submitted succesfully !")
      setRecipe(body)
      setEdit(false)
    } else {
      console.log('error')
    }
  }

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
        <EditRecipe recipe={recipe} editRecipe={handleEditRecipe} />
      )}
    </div>
  );
}
