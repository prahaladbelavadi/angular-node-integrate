const express = require('express');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const Post  = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://admin:3LMVtL3qs1sJRreU@cluster0-njshn.mongodb.net/node-angular?retryWrites=true")
.then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connection failed")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res, next)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-With,Content-Type, Accept");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST,PATCH,DELETE, OPTIONS");
    
    next()
})


app.post("/api/posts", (req,res, next)=>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    post.save();

    res.status(201).json({
        message: 'Post added Successfully'
    });
})

app.get('/api/posts' ,(req,res,next)=>{
    
    const posts = [
      {
        title: "First server side spost",
        content: "fromt the dark side",
        id: "wfkjnwkjfn"
      },
      {
        title: "Second server side spost",
        content: "fromt the dark side",
        id: "wfkjnwkjfn"
      }
    ];
    res.status(200).json(
        {
            message:'Posts fetched Successfully',
        posts: posts
})
})

module.exports = app