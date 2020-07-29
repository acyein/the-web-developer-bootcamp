const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

// make a template
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// add a new cat to DB

// Method 1: using new & save
// const tubby = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// })

// tubby.save((err, cat) => {
//     if(err) {
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat to the DB:");
//         console.log(cat);
//     }
// });

// Method 2: using create (new & save at once)
Cat.create({
    name: "Boba",
    age: 9,
    temperament: "Wild"
}, (err, cat) => {
    if(err){
        console.log(err);
    } else {
        console.log("----- NEW CAT -----");
        console.log(cat);
        catList();
    }
});

// retrieve all cats from DB and console.log all of them
function catList() {
    Cat.find({}, (err, cats) => {
        if(err){
            console.log("Oh no, error!");
            console.log(err);
        } else {
            console.log("----- ALL THE CATS -----");
            console.log(cats);
        }
    });
}