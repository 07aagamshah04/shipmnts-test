// const Warehouse = require("../models/warehouse");
const Bins = require("../models/bins");
const Product = require("../models/product");

const add_Product = async (req, res) => {
  const data = req.body;
  console.log(data.warehouse_code);
  data.products.forEach(async (body) => {
    // console.log(body.location_code);
    const bin = await Bins.find({
      location_code: body.location_code,
      parent_location_code: data.warehouse_code,
    });
    // console.log(bin);
    if (bin.length === 0) {
    } else {
      const product = new Product({
        product_code: body.product_code,
        location_code: body.location_code,
        transaction_date: data.transaction_date,
        qty: body.qty,
        volume: body.volume,
      });
      await product.save();
    }
  });
  // console.log("hey");
  return res.status(201).json({
    success: true,
    message: "Products added successfully",
  });
};

module.exports = { add_Product };
