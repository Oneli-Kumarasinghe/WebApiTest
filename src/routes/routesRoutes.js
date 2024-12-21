const express = require('express');
const RouteController = require('../controller/routesController');

const routes = express.Router();
routes.get('/getRoutes', RouteController.findAllroutes);

module.exports = routes;