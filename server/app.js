var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const local = require('./strategies/local');
const session = require('express-session')


// db connection
const db = require('./configs/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser')


var app = express();

app.use(session({
  secret: 'cookie',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 600000}
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
// app.use(bodyParser)

// directory for router
const listingRouter = require('./routes/listings');
const listingsfilterRouter = require('./routes/listingsfilter');
const authRouter = require('./routes/auth')

//routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter(db));
app.use('/api', listingRouter(db));
app.use('/api', listingsfilterRouter(db));



module.exports = app;
