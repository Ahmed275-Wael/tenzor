const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const orderController = require("../controllers/orderController");
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.post("/register", authController.register);
router.get("/:userId", userController.getUser);
router.post("/", authController.logIn);
 
router.get("/:userId/orders", orderController.getUserOrders);
 
module.exports = router;