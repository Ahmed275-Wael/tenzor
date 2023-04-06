const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
router.get("/count", productController.getProductsCount);

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:productId", productController.getProduct);
module.exports = router;
