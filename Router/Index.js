const express = require("express");

const route = express.Router();

const locationController = require("../Controller/location");
// console.log(locationController.getLocation);
const mealtypeController = require("../Controller/mealtype");
const restaurantController = require("../Controller/restaurant");
const userController = require("../Controller/user");
const menuItemsController = require("../Controller/MenuItems");
const orderController = require("../Controller/order");
// const paymentGatewayController = require("../Controller/payments");

route.get("/location", locationController.getLocation);
route.get("/mealtype", mealtypeController.getMealType);
route.get("/restaurant/:locId", restaurantController.getRestaurantByLocId);
route.get("/restaurants/:resId", restaurantController.getRestaurantDetailById);
route.post("/filter", restaurantController.restaurantsfilter);
route.get("/menuitems/:resId", menuItemsController.getMenuItemsByRes);
route.get("/order", orderController.saveOrderDetail);
route.get("/order/:UserId", orderController.getOrderByUserId);
route.post("/userlogin", userController.userLogin);
route.post("/usersignup", userController.userSignUp);
// router.post("/payment", paymentGatewayController.payment);
// router.post("/callback", paymentGatewayController.callback);

module.exports = route;
