"use client";

import { useEffect, useState } from 'react';
import RecipeCard from "./RecipeCard";
import styles from "../styles/recipes.module.scss";
import Link from "next/link";

async function fetchRecipes() {
  const res = await fetch(process.env.NEXT_PUBLIC_RECIPES);
  return res.json();
}

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const myRecipes = await fetchRecipes();
      setRecipes(myRecipes);
    }
    getRecipes();
  }, []);

  return (
    <div className={styles.recipes}>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`}>
              <RecipeCard
                title={recipe.title}
                description={recipe.description}
                rate={recipe.rate}
                prep_time={recipe.prep_time}
                servings={recipe.servings}
                category={recipe.category}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
