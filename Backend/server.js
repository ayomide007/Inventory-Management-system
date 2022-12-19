const dotenv = require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser")
const cors = require ("cors")
const userRoute = require("./routes/userRoute")


mongoose.set('strictQuery', true)



const app = express()
// Middlewares
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
        app.use(bodyParser.json())

        //Route Middleware
app.use("/api/users", userRoute);

//Routes
    app.get("/", (req,res) => {
        res.send("Home Page");
    })

const PORT = process.env.PORT || 5000;

//connect to DB and start Server

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server Running on Port ${PORT}`)})
        })
        .catch((error) => {
            console.log(error)
    })
    
    