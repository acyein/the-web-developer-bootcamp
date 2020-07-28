const express               = require("express"),
      app                   = express(),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrategy         = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));
app.set("view engine", "ejs");
app.use(require("express-session")({
    secret: "Monstera is huge!",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// --------------- ROUTES -----------------
app.get("/", (req, res) => {
    res.render("home");
});

// SECRET route
app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

// AUTH routes
// Show sign up form
app.get("/register", (req, res) => {
    res.render("register");
});

// Handle user sign up
app.post("/register", (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
        res.redirect("/secret");
        });
    });
});

// LOGIN routes
// Show login form
app.get("/login", (req, res) => {
    res.render("login");
});

// Handle login logic + middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {
    
});

// Logout user
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

// PORT
app.listen(3000, () => {
    console.log("Server started!");
});