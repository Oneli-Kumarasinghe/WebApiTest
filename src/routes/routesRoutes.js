const express = require('express');
const RouteController = require('../controller/routesController');
const authenticationJason = require('../config/jasonwebtoken');

const routes = express.Router();
/**
 * @swagger
 * /routes/getRoutes:
 *   get:
 *     summary: Finding Routes
 *     description: Finding Route end point
 *     responses:
 *       200:
 *         description: All Routes Fetched Successfully .
 */
routes.get('/getRoutes',authenticationJason, RouteController.findAllRoutes);

module.exports = routes;