import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    unique: [true, "Recipe name already exists!"],
    required: [true, "Recipe name is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  instructions: {
    type: String,
    required: [true, "instructions are required"],
  },
  rate: {
    type: Number,
  },
  servings: {
    type: Number,
    required: [true, "servings is required"],
  },
  prepTime: {
    type: Number,
    required: [true, "Preperation time is required"],
  },
  // image: {
  //   type: String,
  // },
  private: {
    type: Boolean,
    required: [true, "availability is required"],
  },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
