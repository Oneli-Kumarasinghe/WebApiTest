const express = require('express');
const PassengerController = require('../controller/passengerController');

const router = express.Router();
/**
 * @swagger
 * /passenger/register:
 *   post:
 *     summary: A new passenger is being registed
 *     description: Passenger Register end point
 *     responses:
 *       200:
 *         description: Registered Successful.
 */
router.post('/register', PassengerController.passengerRegistration);
/**
 * @swagger
 * /passenger/login:
 *   post:
 *     summary: New passenger logged In
 *     description: Passenger Login end point
 *     responses:
 *       200:
 */
router.post('/login', PassengerController.passengerLogining);

module.exports = router;