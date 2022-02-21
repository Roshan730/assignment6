const { response } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const restaurant = require("../Model/restaurant");

module.exports.getRestaurantByLocId = (req, res) => {
  const { locId } = req.params;
  restaurant
    .find({ location_id: locId })
    .then((response) => {
      res.status(200).json({
        message: "restaurant fetch successfully",
        restaurant: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
module.exports.getRestaurantDetailById = (req, res) => {
  const { resId } = req.params;
  restaurant
    .findById(resId)
    .then((response) => {
      res.status(200).json({
        message: "restaurant fetch successfully",
        restaurant: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
module.exports.restaurantsfilter = (req, res) => {
  let { mealtype, location, cuisine, lcost, hcost, sort, page } = req.body;

  sort = sort ? sort : 1;
  page = page ? page : 1;

  const itemsPerPage = 2;

  let startIndex, endIndex;

  let filterObj = {};

  mealtype && (filterObj["mealtype_id"] = mealtype);
  location && (filterObj["location_id"] = location);
  cuisine && (filterObj["cuisine_id"] = { $in: cuisine });
  lcost && hcost((filterObj["min_price"] = { $lte: hcost, $gte: lcost }));
  mealtype && (filterObj["mealtype_id"] = mealtype);

  restaurant
    .find(filterObj)
    .sort({ min_price: sort })
    .then((response) => {
      startIndex = page * itemsPerPage - page;
      endIndex = page * itemsPerPage;

      const paginatedResponse = response.slice(startIndex, endIndex);

      res.status(200).json({
        message: "restaurant fetch successfully",
        restaurant: paginatedResponse,
        pageCount: Math.ceil(response.length / itemsPerPage),
        activePage: page,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
