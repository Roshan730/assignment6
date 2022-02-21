const mongoose = require("mongoose");
const express = require("express");
const res = require("express/lib/response");
const { Router } = require("express");
const cors = require("cors");
const paymentRoute = require("./paymentRoute");

const router = require("./Router/Index");

const port = 8989;
const hostname = "localhost";

const localDB = "mongodb://127.0.0.1:27017/zomato";
const serverDB =
  "mongodb+srv://ZOMATOO:roshan098@zomato.bfngj.mongodb.net/zomato?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/", router);
app.use("/api", paymentRoute);

mongoose
  .connect(serverDB)
  .then((res) => {
    app.listen(port, hostname, () => {
      console.log(`server is running at ${hostname}:${port}`);
    });
  })
  .catch((err) => console.log(err));
