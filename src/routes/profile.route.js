const express = require("express");
const endpoints = require("../../endpoints");
const {
  httpCreateUserAndUpdateMedicalHistory,
} = require("../controllers/profile.controller");
const route = express.Router();

route.post(endpoints.PROFILE, httpCreateUserAndUpdateMedicalHistory);

module.exports = route;
