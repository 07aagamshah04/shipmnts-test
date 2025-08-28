const Warehouse = require("../models/warehouse");
const Bins = require("../models/bins");

const add_Warehouse_bin = async (req, res) => {
  const { location_code, parent_location_code } = req.body;
  if (parent_location_code === null) {
    const warehouse = new Warehouse({ location_code });
    await warehouse.save();
    return res.status(201).json({
      success: true,
      message: "Location created successfully",
      data: {
        location_code: location_code,
        parent_location_code: parent_location_code,
        type: "warehouse",
      },
    });
  } else {
    const warehouse = Warehouse.find({ location_code: parent_location_code });
    if (warehouse.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Parent location not found",
      });
    } else {
      const bin = new Bins({ location_code, parent_location_code });
      await bin.save();
      return res.status(201).json({
        success: true,
        message: "Location created successfully",
        data: {
          location_code: location_code,
          parent_location_code: parent_location_code,
          type: "storage",
        },
      });
    }
  }
};

module.exports = { add_Warehouse_bin };
