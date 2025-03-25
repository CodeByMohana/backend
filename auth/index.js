const express = require("express");
const mongoose = require('mongoose');
const app = express();
const User = require("./model/user");
const session = require('express-session');
app.set("view engine", "ejs");

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));
let isLogedin = (req,res,next)=>{
    if(!req.session.user_id){
        res.redirect("/");
    }else{
        next();
    }
}
app.get("/",isLogedin, (req, res) => {
    res.render("home.ejs");
});
app.get("/signup", (req, res) => {
    res.render("signup.ejs");
    }
);
app.post("/signup", async(req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username});
    if(!user){
        await User.create({ username, email, password });
        res.redirect("/login");
    }else{
        res.redirect("/signup");
    }
}
);
app.get("/login", (req, res) => {
    res.render("login.ejs");
    }
);
app.post("/login", async(req,res)=>{
    const { username, password } = req.body;
    const user = await User.findOne({ username});
    if(user && user.password === password){
        req.session.user_id = username;
        res.redirect("/");
    }
    else{
        res.redirect("/login");
    }
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
);
