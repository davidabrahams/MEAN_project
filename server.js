// set up
import express from 'express';

import mongoose from 'mongoose'; // mongoose for mongodb
import morgan from 'morgan'; // log requests to the console (express4)
import bodyParser from 'body-parser'; // pull information from HTML POST (express4)
import methodOverride from 'method-override'; // simulate DELETE and PUT (express4)

const app = express(); // create our app w/ express

// configuration

// connect to mongoDB database
mongoose.connect('YOUR_SERVER_HERE', {
  useMongoClient: true,
});

// set the static files location /public/img will be /img for users
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log('App listening on port 8080');
