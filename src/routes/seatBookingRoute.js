const express = require('express');
const seatbookingController = require('../controller/seatbookingController');
const authenticationJason = require('../config/jasonwebtoken');

const routes = express.Router();

/**
 * @swagger
 * /seatbooking/saveSeats:
 *   post:
 *     summary: Save seat booking for a passenger
 *     description: Save seat booking details for a passenger. JWT token is required for authentication.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               passenger_id:
 *                 type: string
 *                 description: NIC number of the passenger.
 *                 example: "198990123V"
 *               seat_number_list:
 *                 type: array
 *                 description: List of seat numbers to be booked.
 *                 items:
 *                   type: string
 *                 example: ["B1", "B5", "B6"]
 *               bus_number_plate:
 *                 type: string
 *                 description: The number plate of the bus.
 *                 example: "BR1234"
 *               schedule_slot:
 *                 type: integer
 *                 description: The schedule slot for the booking.
 *                 example: 1
 *               total_amount:
 *                 type: number
 *                 format: float
 *                 description: The total cost of the booking.
 *                 example: 4500.00
 *               date_of_booking:
 *                 type: string
 *                 format: date
 *                 description: The date of the booking.
 *                 example: "2024-12-28"
 *     responses:
 *       200:
 *         description: Booking saved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: "Seats booked successfully"
 *       400:
 *         description: Bad request. Invalid input data.
 *       401:
 *         description: Unauthorized. Missing or invalid JWT token.
 *       500:
 *         description: Internal server error.
 */

routes.post('/saveSeats', authenticationJason, seatbookingController.seatBooking);

/**
 * @swagger
 * /seatbooking/getSeatings:
 *   post:
 *     summary: Retrieve seat availability for a specific bus and schedule
 *     description: Get the available seating details for a specific bus, schedule, and booking date. JWT token is required for authentication.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bus_number_plate:
 *                 type: string
 *                 description: The number plate of the bus.
 *                 example: "BR1234"
 *               schedule_slot:
 *                 type: integer
 *                 description: The schedule slot for the booking.
 *                 example: 1
 *               date_of_booking:
 *                 type: string
 *                 format: date
 *                 description: The date of the booking.
 *                 example: "2024-12-28"
 *     responses:
 *       200:
 *         description: Successfully fetched seat availability.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 available_seats:
 *                   type: array
 *                   description: List of available seat numbers.
 *                   items:
 *                     type: string
 *                   example: ["A1", "A2", "B5", "B6"]
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: "Seat availability fetched successfully."
 *       400:
 *         description: Bad request. Invalid input data.
 *       401:
 *         description: Unauthorized. Missing or invalid JWT token.
 *       500:
 *         description: Internal server error.
 */

routes.get('/getSeatings',authenticationJason, seatbookingController.getAvailableSeatings);
module.exports = routes;
