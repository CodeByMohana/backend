const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema); // Product is the name of the collection in the database
module.exports = Product; //export the model to use it in other files
