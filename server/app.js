var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieSession = require('cookie-session')

const db = require('./configs/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
// db connection

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express .static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ["sneakerspickers"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// directory for router
const listingRouter = require('./routes/listings');
const listingsfilterRouter = require('./routes/listingsfilter');

//routes
app.use('/', indexRouter);
app.use('/users', usersRouter());
app.use('/api', listingRouter(db));
app.use('/api', listingsfilterRouter(db));



module.exports = app;
