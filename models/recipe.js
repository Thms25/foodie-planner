import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  title: {
    type: String,
    unique: [true, "Recipe name already exists!"],
    required: [true, "Recipe name is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
  },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
