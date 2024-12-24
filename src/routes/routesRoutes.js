const express = require('express');
const RouteController = require('../controller/routesController');

const routes = express.Router();
/**
 * @swagger
 * /getRoutes:
 *   get:
 *     summary: Finding Routes
 *     description: Finding Route end point
 *     responses:
 *       200:
 *         description: All Routes Fetched Successfully .
 */
routes.get('/getRoutes', RouteController.findAllRoutes);

module.exports = routes;