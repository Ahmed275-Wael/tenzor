const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const paymentController = require("../controllers/paymentController");
const authController = require("../controllers/authController");
router.get("/:orderId", orderController.getOrder);
router.get("/",authController.protectRoute ,orderController.getAllOrders);
router.post("/", orderController.createOrder);
router.delete("/:orderId",orderController.deleteOrder);
router.post("/:orderId/pay", paymentController.payOrder);
module.exports = router;