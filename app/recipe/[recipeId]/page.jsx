"use client";

// Utils
import { deleteRecipe, getRecipe } from "@/utils/fetchUtils/recipeFetchUtils";

// Components
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const router = useRouter();
  const [recipeData, setRecipeData] = useState({});
  useEffect(() => {
    async function fetchRecipe(id) {
      const data = await getRecipe(id);
      setRecipeData(data);
    }
    fetchRecipe(params.recipeId);
  }, [params]);

  const handleDelete = async () => {
    const hasConfirmed = confirm("Are you sure ?");
    if (hasConfirmed) {
      const res = await deleteRecipe(params.recipeId);
      if (res.ok) {
        router.push("/dashboard");
      }
    }
  };

  return (
    <section className="text-primary m-4 p-4 lg:p-12">
      <button
        onClick={() => handleDelete()}
        disabled={false}
        type="button"
        className={`py-2 px-4 text-sm font-medium text-primary focus:outline-none  rounded-full border border-primary shadow-sm hover:shadow-md transition duration-300 ml-4 `}
      >
        Delete Recipe
      </button>
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
            priority
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
