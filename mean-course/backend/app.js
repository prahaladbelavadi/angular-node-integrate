const express = require('expres');

const app = express();

app.use((req, res, next)=>{
    console.log('First middleware')
    next();
})

app.use((req,res,next)=>{
    res.send("Hello From express")
})

module.exports = app