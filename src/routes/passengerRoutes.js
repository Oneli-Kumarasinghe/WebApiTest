const express = require('express');
const PassengerController = require('../controller/passengerController');

const router = express.Router();
/**
 * @swagger
 * /passenger/register:
 *   post:
 *     summary: Register a new passenger
 *     description: Endpoint to register a new passenger by providing the required details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nic_no:
 *                 type: string
 *                 description: National Identity Card number of the passenger.
 *                 example: "200232932V"
 *               full_name:
 *                 type: string
 *                 description: Full name of the passenger.
 *                 example: "Minda Silva"
 *               address:
 *                 type: string
 *                 description: Residential address of the passenger.
 *                 example: "Colombo"
 *               contact_info:
 *                 type: integer
 *                 description: Contact number of the passenger.
 *                 example: 765940360
 *               email:
 *                 type: string
 *                 description: Email address of the passenger.
 *                 example: "minda@gmail.com"
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *                 description: Date of birth of the passenger in YYYY-MM-DD format.
 *                 example: "2002-05-15"
 *               password:
 *                 type: string
 *                 description: Password for the passenger account.
 *                 example: "minda@123"
 *     responses:
 *       200:
 *         description: Passenger successfully registered.
 *       400:
 *         description: Bad request. Missing or invalid payload.
 *       500:
 *         description: Internal server error.
 */
router.post('/register', PassengerController.passengerRegistration);

/**
 * @swagger
 * /passenger/login:
 *   post:
 *     summary: Log in a passenger
 *     description: Passenger login endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address of the passenger
 *               password:
 *                 type: string
 *                 description: Password for the passenger's account
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Unauthorized. Invalid email or password.
 */
router.post('/login', PassengerController.passengerLogining);

module.exports = router;