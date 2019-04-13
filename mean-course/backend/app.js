const express = require('express');

const app = express();

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