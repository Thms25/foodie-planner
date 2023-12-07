import fetch from "node-fetch";
import fs from "fs";

const apiKey = process.env.EDAMAM_API_KEY;
const apiId = process.env.EDAMAM_ID;

// Function to fetch and save recipes for a specific cuisine type
async function getRecipes(type) {
  try {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}&cuisineType=${type}&dishType=Main%20course`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(`Starting with ${type} recipes - page 1`);

    data.hits.forEach(async (hit) => {
      const photoResponse = await fetch(hit.recipe.image);
      const photoBuffer = await photoResponse.arrayBuffer(); // Get photo as a buffer

      // Here, you would process the recipe information and save it accordingly
      // For demonstration purposes, let's just save the photo buffer to a file
      const filename = `${hit.recipe.label.split(" ").join("_")}.png`;
      fs.writeFileSync(filename, photoBuffer);
      console.log(`Saved ${hit.recipe.label}`);
    });

    // You can add pagination logic here if the API supports it
    // Example: data._links.next.href contains the URL for the next page
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

const cuisineTypes = [
  "Mexican",
  "Asian",
  "British",
  "Caribbean",
  // Add more cuisine types here
];

console.log("Let's populate the recipes and ingredients!");

// Fetch recipes for each cuisine type
cuisineTypes.forEach((type) => {
  fetchRecipesByType(type);
});
