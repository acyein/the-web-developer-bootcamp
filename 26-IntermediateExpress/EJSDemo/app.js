var express = require("./node_modules/express");
var app = express();

// Telling Express to use public directory
app.use(express.static("public"));

// Telling Express we're using ejs format
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/houseplant/:plantName", function(req, res){
    var plantName = req.params.plantName;
    // {name in template: name in app.js}
    res.render("plant", {plantNameVar: plantName});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Amazing!", author: "Tiffany"},
        {title: "Wow, look at how green this houseplant is!", author: "Melvin"},
        {title: "My Calathea is 2 feet tall!", author: "Ivan"}
    ]
    res.render("posts", {posts: posts});
});

app.get("*", function(req, res){
    res.send("You have reached the unknown page!");
});

port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is listening!");
});