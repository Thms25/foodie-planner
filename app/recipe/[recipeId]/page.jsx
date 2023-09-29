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

  // const img_url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CL_CLOUD}/image/upload/v1694797150/development/${recipe.photo_key}.jpg`

  const img_url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CL_CLOUD}/image/upload/v1695990100/${recipe.photo_key}.jpg`

  return (
    <div>
      <div className={styles.recipePage}>
        <div className={styles.recipeLeft}>
          <div className={styles.recipeInfo}>
            <h2 className={styles.title}>{recipe.title}</h2>
            <div className={styles.data}>
              <p>preps: <span>{recipe.prep_time}</span></p>
              <p>servings: <span>{recipe.servings}</span></p>
              <p className='btn'>Add to calendar</p>
            </div>
            <div className={styles.nutritions}>
              <ul>
                <li>nutri <p>value</p></li>
                <li>nutri <p>value</p></li>
                <li>nutri <p>value</p></li>
                <li>nutri <p>value</p></li>
                <li>nutri <p>value</p></li>
              </ul>
            </div>
          </div>
          <div className={styles.inregidents}>
            <h5>Ingredients</h5>
            <ul>
              <li>this is and ingredient - quantity</li>
              <li>this is and ingredient - quantity</li>
              <li>this is and ingredient - quantity</li>
              <li>this is and ingredient - quantity</li>
              <li>this is and ingredient - quantity</li>
            </ul>
          </div>
        </div>
        <div className={styles.recipeRight}>
          <Image
            src={img_url}
            alt={recipe.title}
            width={480}
            height={360}
            className={styles.img}
            />
          <div className={styles.instructions}>
            <h5>Instructions</h5>
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
