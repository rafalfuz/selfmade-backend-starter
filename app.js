const express = require("express");
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const { homeRoute } = require("./Routers/home");
const { orderRoute } = require("./Routers/order");
const { configuratorRoute } = require("./Routers/configurator");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.engine(".hbs", hbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", homeRoute);
app.use("/order", orderRoute);
app.use("/configurator", configuratorRoute);

app.listen("3000", "localhost");
