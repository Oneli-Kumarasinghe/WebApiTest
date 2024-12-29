const express = require('express');
const RouteController = require('../controller/routesController');
const authenticationJason = require('../config/jasonwebtoken');

const routes = express.Router();
/**
 * @swagger
 * /routes/getRoutes:
 *   get:
 *     summary: Retrieve all available routes
 *     description: This endpoint fetches all available routes. Requires a Bearer token for authentication.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer token for authentication. Format: Bearer <token>.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched all routes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 routes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       route_id:
 *                         type: integer
 *                         description: Unique identifier for the route
 *                       origin_point:
 *                         type: string
 *                         description: Starting point of the route
 *                       destination:
 *                         type: string
 *                         description: Destination of the route
 *                       distance:
 *                         type: number
 *                         description: Distance of the route in kilometers
 *       400:
 *         description: Bad request. Invalid or missing parameters.
 *       401:
 *         description: Unauthorized. Invalid or missing Bearer token.
 */
routes.get('/getRoutes',authenticationJason, RouteController.findAllRoutes);

module.exports = routes;