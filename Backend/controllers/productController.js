const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel")

const createProduct = asyncHandler (async (req, res) =>{
    const {name, sku, category, quantity, price, description} = req.body
    
    // validation
    if (!name || !category || !quantity ||!price || !description ) {
        res.status(400)
        throw new error ("please fill in all fields")
    }

    //Handle  Image uploads
let fileData = {}
if(req.file){
    fileData = {
        fileName: req.file.originalname,
        filePath: req.path,
        filetype: req.file.mimetype,
        fileSize: req.file.size
    }
}

    //Create Product
    const product = await Product.create({
        user: req.user.id,
        name,
        sku,
        category,
        quantity,
        price,
        description,
    })
    res.status(201).json(product)


})

module.exports = {
    createProduct
}