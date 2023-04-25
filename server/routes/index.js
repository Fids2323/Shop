const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/cart", require("./cart.routes"));
router.use("/order", require("./order.routes"));
router.use("/products", require("./product.routes"));
router.use("/service", require("./service.routes"));

module.exports = router;
