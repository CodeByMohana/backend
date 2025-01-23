const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3005;

app.set("view engine", "ejs");


mongoose
  .connect("mongodb://127.0.0.1:27017/Restfull") // returns a promise so we use then
  .then(() => console.log("Connected!")) //if the connection is successful
  .catch((err) => console.log(err)); //if the connection is not successful

const Product = require("./model/Product");//import the model

app.get("/products", async(req, res) => {  //get all products
    const products = await Product.find({}); //find all products
    res.render("products",{products}); //render the products page
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
