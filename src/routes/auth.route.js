const express = require('express');
const endpoints = require('../../endpoints');
const {
  httpLoginUser,
  httpRegisterUser
} = require('../controllers/auth.controller');
const route = express.Router();


route.post(endpoints.LOGIN, httpLoginUser);
route.post(endpoints.REGISTER, httpRegisterUser);

module.exports = route;