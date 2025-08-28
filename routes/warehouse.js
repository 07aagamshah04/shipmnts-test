const express = require("express");
const router = express.Router();

const { add_Warehouse_bin } = require("../controllers/warehouse");

router.post("/create_location", add_Warehouse_bin);

module.exports = router;
