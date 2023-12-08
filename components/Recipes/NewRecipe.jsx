"use client";

// Hooks
import { useState } from "react";

// Animation
import { motion } from "framer-motion";

// Components
import Image from "next/image";

// Utils
import { upload } from "@/utils/svgData";
import { randomImage } from "@/utils/fetchUtils/fetchUnsplash";

export default function NewRecipe({ onSubnit }) {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    prepTime: 60,
    servings: 4,
    category: "",
    instructions: "",
    private: false,
    ingredients: ingredientsData,
  });
  const [ingredient, setIngredient] = useState({
    name: "",
    qty: 1,
    unit: "Kg",
  });
  const unsplashImg =
    "https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhdGV8fHx8fHwxNzAxNjA3OTEx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
  const [imgUrl, setImgUrl] = useState(unsplashImg);
  const [loadingImg, setLoadingImg] = useState(false);

  const foodCat = ["Other", "Italian", "Nordic", "Asian"];
  const units = ["Kg", "Grams", "Piece", "L", "mL", "Tea Spoon", "Table Spoon"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubnit(recipeData);
  };

  const generateImage = async (word) => {
    setLoadingImg(true);
    const url = await randomImage(recipeData.title);
    setImgUrl(url);
    setLoadingImg(false);
  };

  return (
    <div className="text-primary m-4 p-4 lg:p-12">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid md:grid-cols-2 text-left">
          {/* recipe main */}
          <div className="m-4">
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
                htmlFor="recipe_name"
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
                htmlFor="recipe_description"
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
                  htmlFor="recipe_prep_time"
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
                  htmlFor="recipe_servings"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Servings
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="recipe_category" className="sr-only">
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
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center mb-4">
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
                htmlFor="checkbox-1"
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
          </div>

          {/* image */}
          <div className="flex items-end justify-center m-4 relative">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-48 lg:h-96 rounded-lg cursor-pointer text-md lg:text-xl font-bold"
            >
              <div className="grid md:flex items-center justify-center md:py-6 z-10">
                <div className="w-12 h-12">{upload}</div>
                <button
                  disabled={recipeData.title === ""}
                  onClick={(e) => {
                    e.preventDefault();
                    generateImage("bolognese");
                  }}
                  type="button"
                  className={`py-2 px-4 text-sm font-medium text-primary focus:outline-none  rounded-full border border-primary shadow-sm hover:shadow-md transition duration-300 z-10 ml-4 ${
                    recipeData.title === "" ? "hidden" : ""
                  }`}
                >
                  Generate Image
                </button>
              </div>

              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <Image
              priority
              width={1600}
              height={1600}
              src={imgUrl}
              alt="unsplah image"
              className={`object-cover absolute w-full h-full ${
                imgUrl === unsplashImg ? "opacity-20" : ""
              } ${loadingImg ? "animate-pulse" : ""}`}
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
                  htmlFor="ingredient_name"
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
                  htmlFor="ingredient_qty"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Quantity
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="recipe_category" className="sr-only">
                  Unit
                </label>
                <select
                  value={ingredient.unit}
                  onChange={(e) => {
                    setRecipeData({
                      ...recipeData,
                      unit: e.currentTarget.value,
                    });
                  }}
                  id="recipe_category"
                  className="block p-2 w-full text-sm bg-light border-0 border-b-2 border-primary appearance-none focus:outline-none peer"
                  placeholder=""
                >
                  {units.map((unit) => (
                    <option value={unit} key={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
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
          <div className="md:m-4 px-4 md:px-8">
            <label
              htmlFor="recipe_instructions"
              className="block my-2 text-md font-medium"
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
              className="block p-2 w-full text-md bg-light rounded-lg border border-primary focus:outline-none placeholder:text-primary"
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
