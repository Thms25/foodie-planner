"use client";

// Hooks
import { useState } from "react";

// Animation
import { motion } from "framer-motion";

// Components
import Image from "next/image";

// Utils
import { upload } from "@/utils/svgData";

export default function NewRecipe({ onSubnit }) {
  const [recipeData, setRecipeData] = useState({
    private: false,
  });
  const [ingredientsData, setIngredientsData] = useState([]);
  const [ingredient, setIngredient] = useState({});

  const foodCat = ["Other", "Italian", "Nordic", "Asian"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubnit(recipeData);
  };

  return (
    <div className="text-primary m-4 p-4 lg:p-16">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid md:grid-cols-2 text-left">
          {/* recipe main */}
          <section className="m-4">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={recipeData.title}
                onChange={(e) => {
                  setRecipeData({
                    ...recipeData,
                    title: e.currentTarget.value,
                  });
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
                  className="block p-2 w-full text-sm bg-light border-0 border-b-2 border-primary appearance-none focus:outline-none peer"
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
              <label for="recipe_category" class="sr-only">
                Recipe Category
              </label>
              <select
                value={recipeData.category}
                onChange={(e) => {
                  setRecipeData({
                    ...recipeData,
                    category: e.currentTarget.value,
                  });
                }}
                id="recipe_category"
                className="block p-2 w-full text-sm bg-light border-0 border-b-2 border-primary appearance-none focus:outline-none peer"
                placeholder=""
              >
                {foodCat.map((cat) => (
                  <option value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div class="flex items-center mb-4">
              <input
                checked={recipeData.private}
                id="recipe_privay"
                type="checkbox"
                value={recipeData.private}
                onChange={(e) => {
                  setRecipeData({
                    ...recipeData,
                    private: !recipeData.private,
                  });
                }}
                className="w-4 h-4 text-primary border-primary rounded focus:outline-none"
              />
              <label
                for="checkbox-1"
                className="ms-2 text-sm font-medium hover:underline"
                onClick={(e) => {
                  setRecipeData({
                    ...recipeData,
                    private: !recipeData.private,
                  });
                }}
              >
                Keep the recipe just for me
              </label>
            </div>
          </section>

          {/* image */}
          <div className="flex items-center justify-center m-4 relative">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-48 lg:h-96 rounded-lg cursor-pointer text-md lg:text-xl font-bold"
            >
              <div className="grid md:flex flex-col items-center justify-center md:py-6 z-10">
                <div className="w-12 h-12">{upload}</div>
                <p className="hidden md:block mb-2">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="hidden md:block">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <Image
              priority
              width={1600}
              height={1600}
              src="https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhdGV8fHx8fHwxNzAxNjA3OTEx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              lt="unsplah image"
              className="object-contain absolute opacity-20 w-full h-full"
            />
          </div>

          {/*  ingredients */}
          <div className="m-4">
            <h1 className="text-xl mb-4 underline">Ingredients</h1>
            <div className="grid lg:grid-cols-3 md:gap-6 mb-5">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => {
                    setIngredient({
                      ...ingredient,
                      name: e.currentTarget.value,
                    });
                  }}
                  name="ingredient_name"
                  id="ingredient_name"
                  className="block p-2 w-full text-sm bg-light border-0 border-b-2 border-primary appearance-none focus:outline-none peer"
                  placeholder=""
                  required
                />
                <label
                  for="ingredient_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Ingredient
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  value={ingredient.qty}
                  onChange={(e) => {
                    setIngredient({
                      ...ingredient,
                      qty: e.currentTarget.value,
                    });
                  }}
                  name="ingredient_qty"
                  id="ingredient_qty"
                  className="block p-2 w-full text-sm text-gray-900 bg-light border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  for="ingredient_qty"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Quantity
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={ingredient.unit}
                  onChange={(e) => {
                    setRecipeData({
                      ...recipeData,
                      unit: e.currentTarget.value,
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
                  Unit
                </label>
              </div>
            </div>
            <motion.button
              type="button"
              className="border border-primary hover:bg-primary hover:text-light focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
            >
              Add another ingredient
            </motion.button>
          </div>

          {/* instructions */}
          <div className="m-4 px-8">
            <label
              for="recipe_instructions"
              className="block my-2 text-sm font-medium"
            >
              Recipe Instructions
            </label>
            <textarea
              value={recipeData.instructions}
              onChange={(e) => {
                setRecipeData({
                  ...recipeData,
                  instructions: e.currentTarget.value,
                });
              }}
              required
              id="recipe_instructions"
              rows="8"
              className="block p-2 w-full text-sm bg-light rounded-lg border border-primary focus:outline-none placeholder:text-primary"
              placeholder="Enter instructions here..."
            ></textarea>
          </div>
        </div>

        {/* submit button */}
        <motion.button
          type="submit"
          className="text-3xl border-2 border-primary hover:bg-primary hover:text-light focus:outline-none font-medium rounded-lg px-12 py-4 text-center transition-colors duration-300 mt-12 mx-auto"
          whileTap={{ scale: 0.9 }}
        >
          Create Recipe
        </motion.button>
      </form>
    </div>
  );
}
