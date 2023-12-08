// Utils
import { getRecipe } from "@/utils/fetchUtils/recipeFetchUtils";

// Components
import Image from "next/image";

export default async function Page({ params }) {
  const recipeData = await getRecipe(params.recipeId);

  return (
    <section className="text-primary m-4 p-4 lg:p-12">
      <div className="grid md:grid-cols-2 text-left">
        {/* recipe main */}
        <div className="m-4">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">{recipeData.title}</h2>
            <p className="text-gray-600 mb-3">{recipeData.description}</p>
            <p className="text-gray-600 mb-3">{recipeData.prepTime}</p>
            <p className="text-gray-600 mb-3">{recipeData.servings}</p>
            <p className="text-gray-600 mb-3">{recipeData.category}</p>
          </div>
        </div>

        {/* image */}
        <div className="flex items-center justify-center m-4 relative">
          <Image
            src="https://images.unsplash.com/photo-1580959367188-956b3b6c389d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVzdG98fHx8fHwxNzAxOTc1NTA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt="Recipe Image"
            className="w-full h-auto shadow-sm"
            width={1600}
            height={1200}
          />
        </div>

        {/* ingredients */}
        <div className="m-4">
          {/* <h1 className="text-xl mb-4 underline">Ingredients</h1>
          <div className="mb-5">
            {recipeData.ingredients.map((ingredient, index) => (
              <div key={index} className="text-gray-600 mb-3">
                <p>Ingredient: {ingredient.name}</p>
                <p>Quantity: {ingredient.qty}</p>
                <p>Unit: {ingredient.unit}</p>
              </div>
            ))}
          </div> */}
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
