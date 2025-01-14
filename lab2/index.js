const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));// helps to print the body of post requests

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
// using app.post to post login details as login details are send to action name in html form
app.post("/login-done", (req, res) => {
  console.log(req.body); //req.body prints the details given in login page
  res.send("login details retrieved");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup-ok",(req,res)=>{
    console.log(req.body);
    res.redirect('/') // res.redirect redirects to given page
})
app.get("/*", (req, res) => {
  res.send("Error 404");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
