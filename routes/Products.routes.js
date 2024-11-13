const express = require("express");
const router = express.Router();

const {getAllProducts,getProduct, createProduct,UpdateProducts,deleteProducts }= require("../controllers/products.controller.js")

router.get("/",getAllProducts);
router.get("/:id",getProduct);

// Create a Product
router.post("/",createProduct);

// Update a Product
router.put("/:id",UpdateProducts);

// Delete a product 
router.delete("/:id",deleteProducts);

module.exports = router;