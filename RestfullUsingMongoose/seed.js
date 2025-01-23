const mongoose = require("mongoose");
const Product = require("./model/Product");

mongoose
  .connect("mongodb://127.0.0.1:27017/Restfull") // returns a promise so we use then
  .then(() => console.log("Connected!")) //if the connection is successful
  .catch((err) => console.log(err)); //if the connection is not successful

let dummyData = [
  {
    name: "Iphone 12",
    price: 1200,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343704000",
    description: "This is the latest Iphone",
  },
  {
    name: "Samsung S21",
    price: 1100,
    image: "https://www.samsung.com/uk/smartphones/galaxy-s21-5g/buy/hero/hero_black.jpg",
    description: "This is the latest Samsung",
  },
  {
    name: "OnePlus 9",
    price: 1000,
    image: "https://cdn.mos.cms.futurecdn.net/7d4a2b7d2b7c2c0e6f7e3c7d0c8c7d0c.jpg",
    description: "This is the latest OnePlus",
  },
];// dummy data for testing

Product.create(dummyData) //create the dummy data
    .then(() => console.log("Data inserted!")) //if the data is inserted
    .catch((err) => console.log(err)); //if the data is not inserted
