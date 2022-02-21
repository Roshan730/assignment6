const { response } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const location = require("../Model/location");

module.exports.getLocation = (req, res) => {
  console.log("roshan");
  location
    .find()
    .then((response) => {
      res.status(200).json({
        message: "location fetch successfully",
        location: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
