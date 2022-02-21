const order = require("../Model/order");

module.exports.saveOrderDetail = (req, res) => {
  const { placedBy, placedByUserId, placedOn, items, Amount, restaurantId } =
    req.body;

  const orderObj = new order({
    placedBy,
    placedByUserId,
    placedOn,
    items,
    Amount,
    restaurantId,
  });
  orderObj
    .save()
    .then((response) => {
      res.status(200).json({
        message: "orders added successfully",
        orders: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

module.exports.getOrderByUserId = (req, res) => {
  const { UserId } = req.params;
  order
    .find({ placedByUserId: UserId })
    .then((response) => {
      res.status(200).json({
        message: "Order fetch successfully",
        orders: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
