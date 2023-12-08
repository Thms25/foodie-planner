// Utils
import { connectToDb } from "@/utils/databaseUtils";

// Models
import Recipe from "@/models/recipe";

export async function GET(request, { params }) {
  try {
    await connectToDb();

    const recipe = await Recipe.findById(params.recipeId);

    return new Response(JSON.stringify(recipe), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch recipe", { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const recipeData = await request.json();
  try {
    await connectToDb();

    let recipe = await Recipe.findById(params.recipeId);

    if (!recipe) {
      return new Response("Recipe not found in db...", { status: 404 });
    }

    recipe = recipeData;
    await recipe.save();

    return new Response(JSON.stringify(recipe), { status: 201 });
  } catch (error) {
    return new Response("Failed to update recipe", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDb();

    const deletedRecipe = await Recipe.findOneAndDelete({
      _id: params.recipeId,
    });

    return new Response("Recipe successfully deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete recipe", { status: 500 });
  }
}
