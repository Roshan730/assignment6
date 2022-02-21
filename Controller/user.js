const { response } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const user = require("../Model/mealtype");

module.exports.userLogin = (req, res) => {
  const { user, pwd } = req.body;
  user
    .find({
      username: user,
      password: pwd,
    })
    .then((response) => {
      let msg, auth;
      if (response.lenght == 0) {
        msg = "User is Authenticated";
        auth = false;
      } else {
        msg = "User is Authenticated";
        auth = true;
      }
      res.status(200).json({
        message: msg,
        user: response,
        isAuthenticated: auth,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

module.exports.userSignUp = (req, res) => {
  const { user, pwd, fn, ln } = req.body;

  const userObj = new userSignUp({
    username: user,
    password: pwd,
    firstname: fn,
    lastname: ln,
  });
  userObj
    .save()
    .then((response) => {
      res.status(200).json({
        message: "user added successfully",
        user: "response",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
