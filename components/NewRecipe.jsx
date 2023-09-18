'use client';

import { useState } from 'react';
import styles from 'styles/newRecipe.module.scss';
import { useRouter } from 'next/navigation';

export default function newRecipe() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('no description yet');
  const [rate, setRate] = useState(5);
  const [prep, setPrep] = useState(60);
  const [servings, setServings] = useState(4);
  const [category, setCategory] = useState('Italian');

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

    console.log(recipeData);

    const res = await fetch(process.env.NEXT_PUBLIC_RECIPES, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipeData)
    })


    console.log(res);

    if (res.ok) {
      // console.log(res.json());
      console.log("form submitted succesfully !")
      const { id } = await res.json();
      router.push(`/recipe/${id}`)
    } else {
      console.log('error')
    }
  }
  return (
    <div className={styles.newRecipe}>
      <h1>Let's create your own recipe</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div>
          <label htmlFor="title">Recipe Title</label>
          <input
            id='title'
            type="text"
            value={title}
            onChange={ (e) => { setTitle(e.currentTarget.value) } }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Recipe Description</label>
          <input
            id='description'
            type="textarea"
            value={description}
            onChange={(e) => {setDescription(e.currentTarget.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="rate">Recipe rate</label>
          <input
            id='rate'
            type="number"
            value={rate}
            onChange={(e) => {setRate(e.currentTarget.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="prep-time">Preparation time</label>
          <input
            id='prep-time'
            type="number"
            value={prep}
            onChange={(e) => {setPrep(e.currentTarget.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="servings">Servings</label>
          <input
            id='servings'
            type="number"
            value={servings}
            onChange={(e) => {setServings(e.currentTarget.value)}}
            required
          />
        </div>
        <div>
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
    </div>
  )
}
