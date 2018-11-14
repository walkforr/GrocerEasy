const express = require("express");
const path = require("path");
const app = express();
const passport = require("passport");
const env = require("dotenv").load();
const exphbs = require("express-handlebars");
const session = require("express-session");

// For Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

//For Handlebars
app.set("views", "./app/views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

//
var PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

require("./routes/login-routes")(app, passport);

//load passport strategies
require("./config/passport")(passport, db.User);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});
