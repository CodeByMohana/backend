const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const productSchema = require("../joiSchema");



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
  
  router.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
  });
  
  router.get("/products/new", (req, res) => {
    res.render("products/new");
  });
  
  router.post("/products", validateProduct, async (req, res) => {
    const { name, image, price, description } = req.body;
    await Product.create({ name, image, price, description });
    res.redirect("/products");
  });
  router.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("show", { product });
  });
  
  router.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
  });
  
  router.patch("/products/:id", validateProduct, async (req, res) => {
    const { id } = req.params;
    const { name, price, image, description } = req.body;
    await Product.findByIdAndUpdate(id, { name, price, image, description });
    res.redirect("/products");
  });
  
  router.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
  });

  module.exports = router;