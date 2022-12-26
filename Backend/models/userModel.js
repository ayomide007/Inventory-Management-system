const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a Email"],
        unique:true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid Email"
        ]
    },
    password:{
        type: String,
        required: [true, "Please add your Password"],
        minLength: [6, "password must be up to 6 characters"],
       //  maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo:{
        type: String,
        required: [true, "Please Enter a photo"],
        default: "https://ibb.co/mCCwcP4"
    },
    phone:{
        type: String,
        default: "+234"
    },
    bio:{
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio"
    },
}, {timestamps: true,});

 //encrypt password before saving to DB
 userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next()
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password =  hashedPassword
    next();
 })

const User = mongoose.model("User", userSchema)
module.exports = User