const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema(
  {
    location_code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Warehouse = mongoose.model("warehouse", warehouseSchema);

module.exports = Warehouse;
