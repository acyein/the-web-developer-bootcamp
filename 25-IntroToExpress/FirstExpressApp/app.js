var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome Home");
});

app.get('/bye', function(req, res){
    res.send("Goodbye!");
});

app.get('/cat', function(req, res){
    res.send("Meowww");
});

app.get("*", function(req, res){
    res.send("Ho ho ho, Santa gives you a gift!");
});

app.listen(3000, function(){
    console.log("Server has started!");
});