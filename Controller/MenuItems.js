const { response } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const location = require("../Model/MenuItems");

module.exports.getMenuItemsByRes = (req, res) => {
  const { resId } = req.params;
  MenuItems.find({ restaurantId: resId })
    .then((response) => {
      res.status(200).json({
        message: "MenuItems fetch successfully",
        menuItems: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
