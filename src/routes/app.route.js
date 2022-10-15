const express = require("express");
const endpoints = require("../../endpoints");
const { getRoot } = require("../controllers/app.controller");
const route = express.Router();
route.get(endpoints.ROOT, getRoot);

module.exports = route;
