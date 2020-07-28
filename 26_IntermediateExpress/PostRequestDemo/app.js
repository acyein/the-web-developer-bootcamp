var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Parses into JS
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Miranda", "Alex", "Joshua", "Nikael", "Louise"];

// Routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){

    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("*", function(req, res){
    res.send("Oops, you reached an unknown page!");
});

// Port
app.listen(process.env.PORT || 3000, function(){
    console.log("Server started!");
});