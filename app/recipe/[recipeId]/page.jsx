'use client'

import { useState, useEffect } from 'react';

async function fetchRecipe(id) {
  const res = await fetch(`http://localhost:3000/api/v1/recipes/${id}`)
  return res.json();
}

export default function Page ({ params }) {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    async function getRecipe() {
      const myRecipe = await fetchRecipe(params.recipeId)
      setRecipe(myRecipe)
    }
    getRecipe();
  }, []);

  return (
    <div>
      <h1>This is {recipe.title}</h1>
    </div>
  );
}
