const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
},
name:{
    type: String,
    required: [true, "Please add a name"],
    trim: true
},
sku :{ 
     type: String,
    required: [true, "Please add a name"],
    trim: true,
    default: "SKU",
},
category :{  
    type: String,
    required: [true, "Please add a Category"],
    trim: true,
}, 
quantity :{  
    type: String, 
    required: [true, "Please add a Quantity"],
    trim: true, 
}, 
price :{  
    type: String,
    required: [true, "Please add a Price"],
    trim: true,
}, 
decription :{  
    type: String,
    required: [true, "Please add a Description"],
    trim: true,
}, 
image :{  
    type: object,
   default: {}
    
   
}, 
})
const Product = mongoose.model("Product", productSchema)
module.exports = Token 