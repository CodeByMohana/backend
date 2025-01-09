const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
// if view folder is not there and we are using another folder then we use this and also we require path
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
 res.send("run")
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.listen(4001,()=>{
    console.log('server is running on port 4001');
})