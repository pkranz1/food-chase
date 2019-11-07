const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('./middleware/authentication');
const path = require('path');
const db = require('./models');
const app = express();



// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json())

// setup passport and session cookies

app.use(expressSession({ secret: 'asecret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

module.exports = app;
