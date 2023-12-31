const URL = process.env.URL;

export async function getRecipes() {
  try {
    // const res = await fetch("/api/recipe");
    const res = await fetch(`${URL}/api/recipe`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createRecipe(recipeData) {
  try {
    const res = await fetch(`/api/recipe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeData),
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getRecipe(id) {
  try {
    const res = await fetch(`/api/recipe/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateRecipe(recipe) {
  try {
    const res = await fetch(`/api/recipe/${recipe.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteRecipe(id) {
  try {
    const res = await fetch(`/api/recipe/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
