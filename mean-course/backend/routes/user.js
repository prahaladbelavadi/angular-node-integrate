const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user")
const jwt = require("jsonwebtoken")

const router = express.Router();

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {

            const user = new User({
                email: req.body.email,
                password: hash
            });

            user.save()
                .then((result)=>{
                    res.status(201).json({
                        message: 'User Created!',
                        result: result
                    });
            })
            .catch(err =>{
                res.status(500).json({
                    error:err
                })
            });
        })

})

router.post("/login", (req, res, next) => {
    User.find({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth Failed"
                });
            } else {
                return bcrypt.compare(req.body.password, user.password);
            }
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth Failed"
                });
            }

            const token = jwt.sign(
                { email: user.email, userId: user._id },
                "Secret_key",
                { expiresIn: "1h" }
            );
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth Failed"
            });
        });
});


module.exports = router;