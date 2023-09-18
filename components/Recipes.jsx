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

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.recipes}>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                {/* <Link href={`/recipe/${recipe.id}`}> */}
                  <RecipeCard recipe={recipe} />
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      )}
    </>
  )
};

export default Recipes;
