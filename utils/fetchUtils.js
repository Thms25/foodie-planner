export async function getRecipes() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_RECIPES);
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
