const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const RecipesSchema = new mongoose.Schema(
  {
    __v: false,
    _id: Number,
    title: String,
    summary: String,
    image: {
      small: {},
      large: {},
    },
    vegetarian: Boolean,
    serves: Number,
    steps: [ String ],
    ingredients: [{ amount: String, item: String }],
  }
);

/**
 * This will automatically add createdAt and updatedAt values to the documents, as per the required values for a recipe
 */
RecipesSchema.plugin(timestamps);

const Recipes = mongoose.model('recipes', RecipesSchema);
module.exports = Recipes;
