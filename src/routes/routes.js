const express = require('express');
const authRoute = require('./auth.route');
const route = express.Router();


route.use('/auth/', authRoute);
// route.use('/api/')



module.exports = route;
