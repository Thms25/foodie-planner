"use client";

import { useEffect, useState } from "react";

// Utils
import { getRecipes, deleteRecipe } from "@/utils/fetchUtils/recipeFetchUtils";
import { fakeRecipes } from "@/utils/fakeData/fakeRecipes";
import RecipeCaroussel from "./RecipeCaroussel";

export default function Recipes({ className }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteRecipe = async (id) => {
    try {
      const res = await deleteRecipe(id);
      if (res.ok) {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      } else {
        throw res;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // async function fetchRecipes() {
    //   const myRecipes = await getRecipes();
    //   setRecipes(myRecipes);
    //   setIsLoading(false);
    // }
    // fetchRecipes();
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);

  return (
    <div className={className}>
      {isLoading ? (
        <h1 className="animate-pulse text-4xl m-auto p-24 font-bold">
          Loading Recipes...
        </h1>
      ) : (
        <div className="p-12 text center">
          <h3 className="text-2xl tracking-wide">Suggestions of the day</h3>
          <RecipeCaroussel recipes={fakeRecipes} />
        </div>
      )}
    </div>
  );
}
