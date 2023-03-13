const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
router.get("/:productId", productController.getProduct);
router.get("/", productController.getAllProducts);
router.post("/",productController.createProduct)
router.get("/count", productController.getProductsCount);
router.post("/search", productController.searchForProducts);
module.exports = router;