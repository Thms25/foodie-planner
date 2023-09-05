'use client'

import { useState, useEffect } from 'react';

async function fetchRecipe(id) {
  const res = fetch(`http://localhost:3000/api/v1/recipes/${id}`)
  console.log(res.json())
  return res.json()
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    // console.log(params.recipeId)
    async function getRecipe() {
      const myRecipe = await fetchRecipe(params.recipeId)
      setRecipe(myRecipe)
      // console.log(myRecipe)
    }
    // console.log(recipe);
  }, []);

  return (
    <div>
      Hello from Recipe show page
    </div>
  );
}
