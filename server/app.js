var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
const local = require("./strategies/local");
const session = require("express-session");
const bodyParser = require("body-parser");

// db connection
const db = require("./configs/db.config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

var app = express();

app.use(
  session({
    secret: "cookie",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000000 },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// directory for router
const listingRouter = require("./routes/listings");
const listingsfilterRouter = require("./routes/listingsfilter");
const authRouter = require("./routes/auth");
const logoutRouter = require("./routes/logout");
const profileRouter = require("./routes/profile");
const registerRouter = require("./routes/register");
const myListingsRouter = require("./routes/mylistings");
const listedItemOfferingRouter = require("./routes/listedItemOffering")
//routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/auth", logoutRouter);
app.use("/register", registerRouter(db));
app.use("/users", usersRouter(db));
app.use("/api", listingRouter(db));
app.use("/api", listingsfilterRouter(db));
app.use("/api", profileRouter(db));
app.use("/api", myListingsRouter(db));
app.use("/api", listedItemOfferingRouter(db));

module.exports = app;
