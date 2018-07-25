const mongoose = require('mongoose');
const config = require('../config')();
const initialiseRouters = require('../routes');

async function initialiseDB () {
  mongoose.Promise = global.Promise;
  await mongoose.connect(`${config.mongodb.host}/${config.mongodb.database}`, { useNewUrlParser: true });

  return mongoose.connect;
}

async function closeDB (){
  await mongoose.connection.close();
}

async function isConnected () {
  return mongoose.connection.readyState;
}

module.exports = {
  initialiseDB,
  closeDB,
  isConnected,
}
