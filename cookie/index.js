const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookieParser("secret123"));

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/store", (req, res) => {
  res.cookie("price", 20000 ).send("visited store route");
});
app.get("/store", (req, res) => {
  res.cookie("price", 10000, { signed: true }).send("visited store route");
});
app.get("/get", (req, res) => {
  let product = 30000;
  let price = req.cookies.price;
  product = product - price;
  res.send(`You have to purchased ${product}`);
});
app.get("/signedGet", (req, res) => {
  let product = 30000;
  let { price } = req.signedCookies;
  product = product - price;
  res.send(`You have to purchased ${product}`);
});
app.listen(3000, () => console.log("Server is running on port 3000"));
