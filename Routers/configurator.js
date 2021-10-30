const express = require("express");
const configuratorRoute = express.Router();

configuratorRoute.get("/", (req, res) => {
  res.send("configurator works");
});

module.exports = {
  configuratorRoute,
};
