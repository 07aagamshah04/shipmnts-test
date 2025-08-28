const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_code: {
      type: String,
      required: true,
      unique: true,
    },
    location_code: {
      type: mongoose.Schema.Types.String,
      ref: "bin",
    },
    transaction_date: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
