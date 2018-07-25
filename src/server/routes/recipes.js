
const recipeController = require('../controllers/recipes');

function load (server) {

  server.get('/recipes',recipeController.getAllRecipes);

  server.get('/recipes/:id',recipeController.getSingleRecipe);

}

module.exports = load;
