var express = require("express");
var app = express();

// Home page
app.get('/', function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// Speak/animal
app.get('/speak/:animal', function(req, res){
    // Create a dict for the sounds animals make
    var sounds = {
        pig: "Oink oink",
        cow: "MoooOoooOOOoooo",
        dog: "Woof woof woof!",
        cat: "MEOW",
        horse: "Neighhhh"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send(`The ${animal} says '${sound}'`);
});

// Repeat/string/number
app.get('/repeat/:string/:number', function(req, res){
    var string = req.params.string;
    var number = Number(req.params.number);
    var result = "";

    for(var i = 0; i < number; i++){
        result += string + " ";
    }
    res.send(result);
});

// Undefined page
app.get('*', function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Server has started!");
});