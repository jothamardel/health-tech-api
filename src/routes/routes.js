const express = require("express");
const authRoute = require("./auth.route");
const appRoute = require("./app.route");
const profileRoute = require("./profile.route");
const unwellRoute = require("./unwell.route");
const route = express.Router();

route.use("/", appRoute);
route.use("/auth/", authRoute);
route.use("/api/", unwellRoute);
route.use("/api/", profileRoute);

module.exports = route;
