const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

    const protect = asynchandler(async(req, res, next) =>{
        try {
            const token = req.cookies.token
            if(!token){
            res.status(401)
            throw new Error("Not authorized, Please login")
            }

            //Verify  Token

            const verified = jwt.verify(token, process.env.JWT_SECRET)
            // Get user Id from Token

            user = await User.findById(verified.id).select("-password")

            if(!user){
                res.status(401)
                throw new Error ("User not found")
            }
            req.user = user
            next()  
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, Please login")
        }
    });

    module.exports = protect