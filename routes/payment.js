const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const paymentController = require("../controllers/paymentController.js");

router.post("/create-order/:id", isLoggedIn, wrapAsync(paymentController.createOrder));

router.post("/verify", isLoggedIn, wrapAsync(paymentController.verifyPayment));

router.get("/success", isLoggedIn, wrapAsync(paymentController.paymentSuccess));

router.get("/failure", isLoggedIn, wrapAsync(paymentController.paymentFailure));

router.get("/history", isLoggedIn, wrapAsync(paymentController.paymentHistory));

router.get("/invoice/:id", isLoggedIn, wrapAsync(paymentController.downloadInvoice));

module.exports = router;