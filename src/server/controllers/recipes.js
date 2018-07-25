const { Recipes } = require('../models');
const { NotFoundError } = require('restify-errors');

async function getAllRecipes(req, res, next) {
  const recipeListData = await Recipes.find();

  if (!recipeListData) return next(new NotFoundError('No Recipes exist'));

  res.send(recipeListData.map( recipe => ({
    id: parseInt(recipe.id),
    createdAt: recipe.createdAt,
    image: recipe.image,
    title: recipe.title,
    summary: recipe.summary,
    serves: recipe.serves,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
  })));

  next();
}

async function getSingleRecipe(req, res, next) {
  const recipeData = await Recipes.findOne({
    _id: req.params.id,
  });

  if (!recipeData) return next(new NotFoundError('Recipe not found'));

  res.send({
    id: parseInt(recipeData.id),
    createdAt: recipeData.createdAt,
    image: recipeData.image,
    title: recipeData.title,
    summary: recipeData.summary,
    serves: recipeData.serves,
    ingredients: recipeData.ingredients,
    steps: recipeData.steps,
  });
  next();
}

module.exports = {
  getAllRecipes,
  getSingleRecipe,
};
