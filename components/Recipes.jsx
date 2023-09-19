"use client";

import { useEffect, useState } from 'react';
import RecipeCard from "./RecipeCard";
import styles from "../styles/recipes.module.scss";

async function fetchRecipes() {
  const res = await fetch(process.env.NEXT_PUBLIC_RECIPES);
  return res.json();
}

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getRecipes() {
      const myRecipes = await fetchRecipes();
      setRecipes(myRecipes);
      setIsLoading(false)
    }
    getRecipes();
  }, []);

  const handleDeleteRecipe = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      } else {
        throw res;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.recipes}>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} onDeleteRecipe={handleDeleteRecipe} />
              </div>
            );
          })}
        </div>
      )}
    </>
  )
};

export default Recipes;
