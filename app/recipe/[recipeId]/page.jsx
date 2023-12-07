// Utils
import { getRecipe } from "@/utils/fetchUtils";

// Components
import Image from "next/image";

export default async function Page({ params }) {
  console.log(params);
  const recipe = await getRecipe(params.recipeId);

  return (
    <section className="text-primary m-4 p-4 lg:p-12">
      <div className="grid md:grid-cols-2 text-left">
        {/* recipe main */}
        <div className="m-4">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              Recipe name: {recipeData.title}
            </h2>
            <p className="text-gray-600 mb-3">
              Description: {recipeData.description}
            </p>
            <p className="text-gray-600 mb-3">
              Prep Time: {recipeData.prepTime}
            </p>
            <p className="text-gray-600 mb-3">
              Servings: {recipeData.servings}
            </p>
            <p className="text-gray-600 mb-3">
              Category: {recipeData.category}
            </p>
            <p className="text-gray-600 mb-3">
              Private: {recipeData.private ? "Yes" : "No"}
            </p>
          </div>
        </div>

        {/* image */}
        <div className="flex items-center justify-center m-4 relative">
          {/* Display your image here */}
          {/* Use an <img> tag or any suitable component */}
          {/* Example:
        <img src={recipeData.imageURL} alt="Recipe Image" className="w-full h-auto" />
      */}
        </div>

        {/* ingredients */}
        <div className="m-4">
          <h1 className="text-xl mb-4 underline">Ingredients</h1>
          <div className="mb-5">
            {/* Display your ingredients here */}
            {/* Loop through the ingredients array */}
            {recipeData.ingredients.map((ingredient, index) => (
              <div key={index} className="text-gray-600 mb-3">
                <p>Ingredient: {ingredient.name}</p>
                <p>Quantity: {ingredient.qty}</p>
                <p>Unit: {ingredient.unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* instructions */}
        <div className="m-4 px-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold mb-2">Recipe Instructions</h2>
            <p className="text-gray-600">{recipeData.instructions}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
