const express = require('express');
const app = express();
const Users = require('./data/details');
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Working Fine');
})
app.get('/users',(req,res)=>{
    res.render('user',{Users});
})
app.get('/user/new',(req,res)=>{
    res.render('new');
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    const{name,email,age} = req.body;
    let user = {name,email,age};
    Users.push(user);
    res.redirect('/users');
});
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})
