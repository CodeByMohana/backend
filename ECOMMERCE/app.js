const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const joi = require("joi");
var methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/Ecommerce")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const Product = require("./model/Product");
const productSchema = require("./joiSchema");

let validateProduct = async (req, res, next) => {
  const { name, image, price, description } = req.body;
  try {
    const value = await productSchema.validateAsync({
      name,
      image,
      price,
      description,
    });
    next();
  } catch (err) {
    res.send(err.details[0].message);
  }
};

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.post("/products", validateProduct, async (req, res) => {
  const { name, image, price, description } = req.body;
  await Product.create({ name, image, price, description });
  res.redirect("/products");
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

app.patch("/products/:id", validateProduct, async (req, res) => {
  const { id } = req.params;
  const { name, price, image, description } = req.body;
  await Product.findByIdAndUpdate(id, { name, price, image, description });
  res.redirect("/products");
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

const Port = 3005;
app.listen(Port, () => console.log(`Server is running on port ${Port}`));
