const express = require('express');
const endpoints = require('../../endpoints');
const {
  httpUnwell,
  httpDoctorDiagnosis,
  httpAllUnwell,
  httpSingleUnwell
} = require('../controllers/unwell.controller');
const route = express.Router();


route.post(endpoints.NOTWELL, httpUnwell);
route.get(endpoints.ALLUNWELL, httpAllUnwell);
route.get(endpoints.SINGLEUNWELL, httpSingleUnwell)

module.exports = route;