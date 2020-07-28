// Method 1 - Embedding data
const mongoose     = require("mongoose"),
      { title }    = require("process"),
      { response } = require("express");

mongoose.connect("mongodb://localhost:27017/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(() => console.log("Connected to DB!"))
    .catch(error => console.log(error.message));

// POST model
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model("Post", postSchema);

// USER model
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// const newUser = new User({
//     email: "shania@hogwarts.edu",
//     name: "Shania Miller"
// });

// newUser.posts.push({
//     title: "How to sing better!",
//     content: "Nah, acting is much easier"
// });

// newUser.save((err, user) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// // POST template
// const newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// })

// newPost.save((err, post) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({name: "Shania Miller"}, (err, user) => {
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I Really Hate",
            content: "Sore throat, sour fruits and lack of motivation"
        });
        user.save((err, user) => {
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});