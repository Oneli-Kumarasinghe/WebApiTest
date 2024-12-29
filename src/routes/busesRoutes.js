const express = require('express');
const router = express.Router();
const busController = require('../controller/busesController');
const authenticationJason = require('../config/jasonwebtoken');

/**
 * @swagger
 * /buses/filtered-buses:
 *   post:
 *     summary: Get filtered buses with price range
 *     description: Retrieve buses filtered by type and price range. JWT token is required for authentication.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bus_type:
 *                 type: string
 *                 description: Type of the bus.
 *                 example: "Double Decker"
 *               minPrice:
 *                 type: number
 *                 description: Minimum price of the bus tickets.
 *                 example: 1000
 *               maxPrice:
 *                 type: number
 *                 description: Maximum price of the bus tickets.
 *                 example: 12500
 *     responses:
 *       200:
 *         description: Successfully fetched filtered buses.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   bus_id:
 *                     type: string
 *                     description: Unique identifier for the bus.
 *                   bus_type:
 *                     type: string
 *                     description: Type of the bus.
 *                   price:
 *                     type: number
 *                     description: Ticket price.
 *                   available_seats:
 *                     type: number
 *                     description: Number of available seats.
 *       400:
 *         description: Bad request. Invalid input.
 *       401:
 *         description: Unauthorized. Missing or invalid token.
 *       500:
 *         description: Internal server error.
 */
router.get('/filtered-buses', authenticationJason, busController.getFilteredBusesWithPrices);

module.exports = router;
