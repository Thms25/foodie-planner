"use client";

import { useEffect, useState } from 'react';
import RecipeCard from "./RecipeCard";
import styles from "styles/recipes.module.scss";

// Utils
import { getRecipes, deleteRecipe } from '@/utils/fetchUtils';
import { fakeRecipes } from '@/utils/fakeData/fakeRecipes';
import RecipeCaroussel from './RecipeCaroussel';


export default function Recipes () {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const handleDeleteRecipe = async (id) => {
    try {
      const res = await deleteRecipe(id)
      if (res.ok) {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      } else {
        throw res;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // async function fetchRecipes() {
    //   const myRecipes = await getRecipes();
    //   setRecipes(myRecipes);
    //   setIsLoading(false);
    // }
    // fetchRecipes();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className='animate-pulse text-4xl m-auto p-24 font-bold'>Loading...</h1>
      ) : (
        <RecipeCaroussel recipes={fakeRecipes}/>
      )}
    </>
  )
};
