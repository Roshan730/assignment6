const { response } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const MealType = require("../Model/mealtype");

module.exports.getMealType = (req, res) => {
  MealType.find()
    .then((response) => {
      res.status(200).json({
        message: "mealtype fetch successfully",
        MealType: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
