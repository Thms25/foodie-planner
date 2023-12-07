// Utils
import { connectToDb } from "@/utils/databaseUtils";

// Models
import Recipe from "@/models/recipe";

export async function GET(request) {
  try {
    await connectToDb();

    const recipes = await Recipe.find({});
    console.log(recipes);

    return new Response(JSON.stringify(recipes), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch recipes", { status: 500 });
  }
}

export async function POST(request) {
  const recipeData = await request.json();

  console.log(recipeData);

  try {
    await connectToDb();
    const newRecipe = new Recipe({
      creator: recipeData.userId,
      private: recipeData.private,
      title: recipeData.title,
      description: recipeData.description,
      instructions: recipeData.instructions,
      prepTime: recipeData.prepTime,
      servings: recipeData.servings,
      category: recipeData.category,
      unit: recipeData.unit,
    });

    await newRecipe.save();

    return new Response(JSON.stringify(newRecipe), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new recipe", { status: 500 });
  }
}
