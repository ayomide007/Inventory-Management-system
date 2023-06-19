const dotenv = require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser")
const cors = require ("cors")
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleWare/errorMiddleware")
const cookieParser = require("cookie-parser");
const path = require("path")

mongoose.set('strictQuery', true)



const app = express()    
// Middlewares
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({extended:false}))
        app.use(bodyParser.json())
        app.use(cors());

        app.use("/uploads", express.static(path.join(__dirname, "uploads")));
        
        //Route Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//Routes
    app.get("/", (req,res) => {
        res.send("Home Page");
    })
//Error MiddleWare
    app.use(errorHandler);
//connect to DB and start Server
const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server Running on Port ${PORT}`)})
        })
        .catch((error) => {
            console.log(error)
    })
    
    