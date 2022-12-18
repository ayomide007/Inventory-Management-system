const dotenv = require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser")
const cors = require ("cors")


mongoose.set('strictQuery', true)

const app = express()

const PORT = process.env.PORT || 3000;

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
    //listen for requests
    