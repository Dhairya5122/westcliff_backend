const express = require("express");
const app = express();

app.use(express.static(__dirname));

const bodyParser = require("body-parser");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 60000,
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("App listen on port " + port));

// Passport

const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

//Connencting to the database

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// Corrected connection string
mongoose.connect("mongodb://localhost/MyDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String,
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model("userInfo", UserDetail, "userInfo");

//Passort Authencication
passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

//Routes

const connectEnsureLogin = require("connect-ensure-login");

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login?info=" + info);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  });
  req, res, next;
});

app.get("/login", (req, res) =>
  res.sendFile("html/login.html", { root: __dirname })
);

app.get("/", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.sendFile("html/index.html", { root: __dirname })
);

app.get("/private", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.sendFile("html/private.html", { root: __dirname })
);

app.get("/user", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.send({ user: req.user })
);

app.get("/logout", (req, res) => {
  req.logOut(), res.sendFile("html/logout.html", { root: __dirname });
});

// UserDetails.register({ username: "paul", active: false }, "paul");
// UserDetails.register({ username: "joy", active: false }, "joy");
// UserDetails.register({ username: "ray", active: false }, "ray");
