const express = require("express");
const authRoute = require("./auth.route");
const appRoute = require("./app.route");
const profileRoute = require("./profile.route");
const route = express.Router();

route.use("/auth/", authRoute);
route.use("/", appRoute);
route.use("/profile", profileRoute);

module.exports = route;
