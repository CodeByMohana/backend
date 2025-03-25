const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.get('/',(req,res)=>{
    res.send(req.session);
})
app.get('/setsession',(req,res)=>{
    req.session.name="temp name";
    req.session.mode="dark";
    res.send("session set");
})
app.listen(3000, () => console.log("Server is running on port 3000"));