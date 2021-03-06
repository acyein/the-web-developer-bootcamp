// Using express-validator instead of express-sanitizer

const express                  = require("express"),
      app                      = express(),
      mongoose                 = require("mongoose"),
      bodyParser               = require("body-parser"),
      methodOverride           = require("method-override"),
      {body, validationResult} = require("express-validator"),
      validators               = [
        body("blog.title", "Title is required")
        .not().isEmpty().trim().escape(),
    
        body("blog.image")
        .isURL().trim(),
    
        body("blog.body", "Description is required")
        .not().isEmpty().trim().escape()
      ];

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

// MONGOOSE / MODEL CONFIG 
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

const Blog = mongoose.model("Blog", blogSchema);

// INDEX ROUTE
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", (req, res) => {
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", validators, (req, res) => {
    console.log("req.body: ");
    console.log(req.body);
    // Output validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({ errors: errors.array() });
    }

    Blog.create(req.body.blog, (err, newBlog) => {
        // console.log(newBlog);
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err){
            res.redirect("/");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id", 
    validators, 

    (req, res) => {
        console.log("req.body: ");
        console.log(req.body);
    // Output validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({ errors: errors.array() });
    };

    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err){
            console.log(err);
        } else {
            res.redirect(`/blogs/${req.params.id}`);
        }
    });
});

// DESTROY ROUTE
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, blog) => {
        if(err){
            console.log(err);
        } else {
            blog.remove();
            res.redirect("/blogs");
        }
    });
});

// PORT
app.listen(3000, () => {
    console.log("Server is running!");
});