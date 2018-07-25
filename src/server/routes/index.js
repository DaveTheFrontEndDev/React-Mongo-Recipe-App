const recipeRoutes = require('./recipes');

module.exports = (server) => {
  recipeRoutes(server);
};
