const mongoose = require("mongoose");

const binSchema = new mongoose.Schema(
  {
    location_code: {
      type: String,
      required: true,
      unique: true,
    },
    parent_location_code: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "warehouse",
    },
  },
  { timestamps: true }
);

const Bins = mongoose.model("bin", binSchema);

module.exports = Bins;
