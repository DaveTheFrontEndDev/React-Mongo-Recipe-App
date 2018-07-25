const initialiseRouters = require('./routes');

const restify = require('restify');

const mongoose = require('mongoose');

const config = require('./config')();

const server = restify.createServer({
  version: '1.0.0',
});

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.listen(config.api.port, function() {

  mongoose.Promise = global.Promise;
  mongoose.connect(`${config.mongodb.host}/${config.mongodb.database}`, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  db.once('open', () => {
    initialiseRouters(server);
    console.log('%s listening at %s', server.name, server.url);
  });

});
