const express = require("express");
const mongoose = require("mongoose");
const app = express();
var methodOverride = require('method-override')
const port = 3005;

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/Restfull") // returns a promise so we use then
  .then(() => console.log("Connected!")) //if the connection is successful
  .catch((err) => console.log(err)); //if the connection is not successful

app.use(express.json()); // To parse JSON payloads

const Product = require("./model/Product"); //import the model

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))//override the method

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products", async (req, res) => {
  //get all products
  const products = await Product.find({}); //find all products
  res.render("product", { products }); //render the products page
});

app.get("/products/new",(req,res)=>{
  res.render("new");
});

app.post("/products",async(req,res)=>{
  const {name,price,image,description} = req.body;
  await Product.create({name,price,image,description});
  res.redirect("/products");
});

app.get("/products/:id",async(req,res)=>{
  const {id} = req.params;
  const product = await Product
  .findById(id);
  res.render("show",{product});
});

app.get("/products/:id/edit",async(req,res)=>{
  const {id} = req.params;
  const product = await Product
  .findById(id);
  res.render("edit",{product});
});

app.patch("/products/:id",async(req,res)=>{
  const {id} = req.params;
  const {name,price,image,description} = req.body;
  await Product.findByIdAndUpdate(id,{name,price,image,description});
  res.redirect("/products");
});

app.delete("/products/:id",async(req,res)=>{
  const {id} = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
