const express = require('express');
const app = express();

// Your code goes here
app.get('/', (req, res)=>{
    res.send('Working Fine');
})
    // format => app.get('/(Route-name)', function(request object, response object))
app.get('/new',(req,res)=>{
    res.send('New Route Working Fine');
})
// 7th Jan lab1
app.get('/route3',(req,res)=>{
    res.send('Route 3 working fine');
})
app.get('/route4',(req,res)=>{
    res.send('Route 4 working fine');
})
app.get('/route5',(req,res)=>{ 
    console.log(req.params);
    res.send('Route 5 working fine');
})
app.get('/route5/:user1/:pass', (req,res)=>{ // the colon ':' can help to make dynamic rods
    console.log(req.params); // req.params give the required parameters here are user and pass
    res.send('Route 5 working fine');
})
let Movies = [
    {
        "name": "Movie1",
        "year": 2020  
    },
    {
        "name": "Movie2",
        "year": 2024  
    },
    {
        "name": "Movie5",
        "year": 1999
    },
    {
        "name": "Movie4",
        "year": 2018 
    },
    {
        "name": "Movie3",
        "year": 2016  
    }
]
app.get('/getdata',(req,res)=>{
    console.log(req.params);
    // let name = req.query.name; this and next line do the same work
    let {name} = req.query;
    console.log(name);
    let data = Movies.find((movie)=> movie.name == name);
    console.log(data);
    res.send(data);
    res.json(data); // for API
})
app.get('/*',(req,res)=>{
    res.send('<h1>Error 404 page not found</h1>')
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});