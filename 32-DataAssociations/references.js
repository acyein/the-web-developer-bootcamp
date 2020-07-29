// Method 2 - Referencing data
const mongoose = require("mongoose"),
      Post     = require("./models/post"),
      User     = require("./models/user");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

// Add new user to DB
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Dylan"
// });

// Add new post to DB, then push it to the selected email
Post.create({
    title: "How to compose the best song PART 4",
    content: "qwertyuiopsdfghjklzxcvbnm"
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// Show all posts linked to the selected email
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });