const mongoose = require("mongoose");
const Product = require("./model/Product");

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce',)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

let Data = [
    {
        name: "Iphone",
        image: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 1200,
        description: "This is the latest Iphone"
    },
    {
        name: "Drone",
        image: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
        price: 1000,
        description: "This is the latest Drone"
    },
    {
        name: "Smartwatch",
        image: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        price: 500,
        description: "This is the latest Smartwatch"
    },
    {
        name: "Camera",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fHww",
        price: 800,
        description: "This is the latest Camera"
    },
    {
        name:'Macbook',
        image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:2000,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    }
]
Product.create(Data)
    .then(() => console.log('Data inserted successfully...'))
    .catch(err => console.error(err));
