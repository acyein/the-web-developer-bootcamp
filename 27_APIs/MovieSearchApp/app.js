const express = require("express"),
      app = express(),
      axios = require("axios");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    const query = req.query.s;
    const url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
   
    axios.get(url)
    .then(response => {
        res.render("results", {data: response.data.Search});
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
    })
});

app.listen(3000, () => {
    console.log("Movie App has started!")
});