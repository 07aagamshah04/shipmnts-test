const express = require("express");
const router = express.Router();

const { add_Product } = require("../controllers/product");

router.post("/receipt", add_Product);

module.exports = router;
