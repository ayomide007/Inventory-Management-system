const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");
const protect = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");



router.post("/", protect, upload.single("image"), createProduct) //upload.array for multiple file 

//done
module.exports = router