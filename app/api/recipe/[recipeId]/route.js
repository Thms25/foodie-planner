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
