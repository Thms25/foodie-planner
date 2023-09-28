'use client'

import { useState, useEffect } from 'react';
import styles from 'styles/recipePage.module.scss'
import EditRecipe from "@/components/EditRecipe";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

async function fetchRecipe(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`)
  return res.json();
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState({})
  const [edit, setEdit] = useState(false)

  const router = useRouter();

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

  const deleteRecipe =  async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        console.log("recipe deleted")
        router.push('/');
      } else {
        console.log("error");
        throw res;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className={styles.recipePage}>
        <div className={styles.recipeTop}>
          <div className={styles.recipeInfo}>
            <div className={styles.title}>
              <h2>{recipe.title}</h2>
              <p>{recipe.rate}</p>
            </div>
            <div className={styles.data}>
              <p>{recipe.prep_time}</p>
              <p>{recipe.servings}</p>
            </div>
            <div>
              <ul>
                <li>nutri <span>value</span></li>
                <li>nutri <span>value</span></li>
                <li>nutri <span>value</span></li>
                <li>nutri <span>value</span></li>
                <li>nutri <span>value</span></li>
              </ul>
            </div>
          </div>
          <Image
            src={recipe.photo_url}
            alt={recipe.title}
            width={300}
            height={300}
            className={styles.recipeImage}
            />
        </div>
        <div className={styles.recipeBot}>
          <div className={styles.inregidents}>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className={styles.instructions}>
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>
      {edit && (
        <EditRecipe recipe={recipe} editRecipe={handleEditRecipe} />
        )}
    </div>
  );
}
{/* <button onClick={() => setEdit(true)}>EDIT</button>
<button onClick={() => deleteRecipe(recipe.id)}>DELETE</button> */}
