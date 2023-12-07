export async function getRecipes() {
  try {
    const res = await fetch("/api/recipes");
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getRecipe(id) {
  try {
    const res = await fetch(`/api/recipes/${id}`);
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteRecipe(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createRecipe(recipeData) {
  try {
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeData),
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
