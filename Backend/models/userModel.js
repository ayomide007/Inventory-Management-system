const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: {
        type: string,
        required: [true, "Please add a name"]
    },
    email: {
        type: string,
        required: [true, "Please add a Email"],
        unique:true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid Email"
        ]
    },
    password:{
        type: string,
        required: [true, "Please add your Password"],
        minLength: [6, "password must be up to 6 characters"],
        maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo:{
        type: string,
        required: [true, "Please Enter a photo"],
        default: "https://ibb.co/mCCwcP4"
    },
    phone:{
        type: string,
        default: "+234"
    },
    bio:{
        type: string,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio"
    },
}, {timestamps: true,})

const User = mongoose.model("User", userSchema)
module.export = User