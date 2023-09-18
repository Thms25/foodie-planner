'use client';

import { useState } from 'react';
import styles from 'styles/newRecipe.module.scss';
import { useRouter } from 'next/navigation';

export default function editRecipe({ recipe }) {
  const router = useRouter();

  const [editedRecipe, setEditedRecipe] = useState(recipe)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${recipe.id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: editedRecipe.title,
        description: editedRecipe.description,
        description: editedRecipe.description,
        rate: editedRecipe.rate,
        prep_time: editedRecipe.prep_time,
        servings: editedRecipe.servings,
        category: editedRecipe.category
      })
    })

    // console.log(res);

    if (res.ok) {
      console.log("form submitted succesfully !")
      router.push(`/recipe/${recipe.id}`);
    } else {
      console.log('error')
    }
  }
  return (
    <div className={styles.newRecipe}>
      <h1>Let's edit your recipe</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div>
          <label htmlFor="title">Recipe Title</label>
          <input
            id='title'
            type="text"
            value={editedRecipe.title}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, title: e.currentTarget.value }) } }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Recipe Description</label>
          <input
            id='description'
            type="textarea"
            value={editedRecipe.description}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, description: e.currentTarget.value }) } }
            required
          />
        </div>
        <div>
          <label htmlFor="rate">Recipe rate</label>
          <input
            id='rate'
            type="number"
            value={editedRecipe.rate}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, rate: e.currentTarget.value }) } }
            required
          />
        </div>
        <div>
          <label htmlFor="prep-time">Preparation time</label>
          <input
            id='prep-time'
            type="number"
            value={editedRecipe.prep_time}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, prep_time: e.currentTarget.value }) } }
            required
          />
        </div>
        <div>
          <label htmlFor="servings">Servings</label>
          <input
            id='servings'
            type="number"
            value={editedRecipe.servings}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, servings: e.currentTarget.value }) } }
            required
          />
        </div>
        <div>
          <label htmlFor="category">Food Category</label>
          <input
            id='category'
            type="text"
            value={editedRecipe.category}
            onChange={ (e) => { setEditedRecipe({...editedRecipe, category: e.currentTarget.value }) } }
            required
          />
        </div>
        <button type="submit">Edit Recipe</button>
      </form>
    </div>
  )
}
