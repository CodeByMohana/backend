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
    image: "https://images.unsplash.com/photo-1736616980443-537d3af09915?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    description: "This is the latest Samsung",
  },
  {
    name: "OnePlus 9",
    price: 1000,
    image: "https://plus.unsplash.com/premium_photo-1669349129170-f06dc5e9b68a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25lJTIwcGx1c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "This is the latest OnePlus",
  },
];// dummy data for testing

Product.create(dummyData) //create the dummy data
    .then(() => console.log("Data inserted!")) //if the data is inserted
    .catch((err) => console.log(err)); //if the data is not inserted
