const express = require("express");
const orderRoute = express.Router();

orderRoute.get("/", (req, res) => {
  res.send("orderRoute works");
});

module.exports = {
  orderRoute,
};
