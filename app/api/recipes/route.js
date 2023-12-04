import { connectToDb } from "@/utils/databaseUtils";

// Models
import Recipe from "@/models/recipe";
import User from "@/models/user";

// Auth
import { getServerSession } from "next-auth";

export async function GET(request) {
  return new Response("Hello from recipes");
}

export async function POST(request) {
  const recipeData = await request.json();

  const { user } = await getServerSession();

  const foundUser = await User.findOne({ email: user.email });

  try {
    await connectToDb();
    const newRecipe = new Recipe({
      creator: foundUser._id,
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
