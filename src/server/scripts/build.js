const mongoose = require('mongoose');

const config = require('./config')();

mongoose.Promise = global.Promise;
mongoose.connect(`${config.mongodb.host}/${config.mongodb.database}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
  process.exit(1);
});

db.once('open', () => {

  const recipesData = require('../mocks/recipes.mock');

  const { Recipes } = require('../models');

  Recipes.remove({})
    .then(() => {
      Recipes.create(...recipesData.map( recipe => ({
        ...recipe,
        _id: recipe.id,
      })));
    });

});
