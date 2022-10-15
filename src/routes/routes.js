const express = require("express");
const authRoute = require("./auth.route");
const appRoute = require("./app.route");
const route = express.Router();

route.use("/auth/", authRoute);
route.use("/", appRoute);

module.exports = route;
