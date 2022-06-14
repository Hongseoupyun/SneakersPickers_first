const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieSession = require('cookie-session')

const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();
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
const pofileRouter = require('./routes/profile');

//routes
app.use('/', indexRouter);
app.use('/users', usersRouter());
app.use('/api', listingRouter(db));
app.use('/api', listingsfilterRouter(db));
app.use('/api', pofileRouter(db));



module.exports = app;
