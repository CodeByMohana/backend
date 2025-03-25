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

const productRoutes = require('./routes/product');
app.use(productRoutes)



const Port = 3005;
app.listen(Port, () => console.log(`Server is running on port ${Port}`));
