"use client";

// Hooks
import { useState } from "react";

// Components
import Image from "next/image";

export default function NewRecipe({ onSubnit }) {
  const [recipeData, setRecipeData] = useState({
    category: "Italian",
  });
  const foodCat = ["Italian", "Nordic", "Asian"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubnit(recipeData);
  };

  return (
    <div className="text-prinary m-4 h-1/2 p-16 mt-8">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid md:grid-cols-2 text-left"
      >
        <section>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={recipeData.title}
              onChange={(e) => {
                setRecipeData({ ...recipeData, title: e.currentTarget.value });
              }}
              type="text"
              name="recipe_name"
              id="recipe_name"
              className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="recipe_name"
              className="z-10 peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Recipe name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={recipeData.description}
              onChange={(e) => {
                setRecipeData({
                  ...recipeData,
                  description: e.currentTarget.value,
                });
              }}
              type="text"
              name="recipe_description"
              id="recipe_description"
              className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              for="recipe_description"
              className="z-10 peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                value={recipeData.prepTime}
                onChange={(e) => {
                  setRecipeData({
                    ...recipeData,
                    prepTime: e.currentTarget.value,
                  });
                }}
                name="recipe_prep_time"
                id="recipe_prep_time"
                className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="recipe_prep_time"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Prep Time
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                value={recipeData.servings}
                onChange={(e) => {
                  setRecipeData({
                    ...recipeData,
                    servings: e.currentTarget.value,
                  });
                }}
                name="recipe_servings"
                id="recipe_servings"
                className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="recipe_servings"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Servings
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              value={recipeData.description}
              onChange={(e) => {
                setRecipeData({
                  ...recipeData,
                  description: e.currentTarget.value,
                });
              }}
              type="text"
              name="recipe_description"
              id="recipe_description"
              className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            >
              {foodCat.map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
            </select>
            <label
              for="recipe_description"
              className="z-10 peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
        </section>
        <section className="p-4">
          <div className="flex justify-around p-1">
            <label htmlFor="category">Food Category</label>
            <input
              id="category"
              type="text"
              value={recipeData.category}
              onChange={(e) => {
                setRecipeData({
                  ...recipeData,
                  category: e.currentTarget.value,
                });
              }}
              className="bg-transparent w-1/2 ml-4 py-1 px-2 outline-none"
              required
            />
          </div>
        </section>
        <div className="p-4">
          <Image
            priority
            width={1600}
            height={1600}
            src="https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhdGV8fHx8fHwxNzAxNjA3OTEx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            lt="unsplah image"
            className="object-contain"
          />
        </div>
        <div className="p-4">
          <h1>Ingredients</h1>
        </div>
        <div className="p-4">
          <label htmlFor="instructions" className="">
            Recipe Instructions
          </label>
          <br />
          <input
            id="instructions"
            type="textarea"
            value={recipeData.instructions}
            onChange={(e) => {
              setRecipeData({
                ...recipeData,
                instructions: e.currentTarget.value,
              });
            }}
            className="bg-transparent p-1 rows-4 cols-24"
            required
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}
