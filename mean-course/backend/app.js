const express = require('express');

const app = express();

app.use((req,res, next)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Header',"Origin, X-Requested-With,Content-Type, Accept");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST,PATCH,DELETE, OPTIONS");
    
    next()
})


app.use('/api/posts' ,(req,res,next)=>{
    
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