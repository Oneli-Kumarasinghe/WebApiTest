const express = require('express');
const seatbookingController = require('../controller/seatbookingController');

const routes = express.Router();
routes.post('/saveSeats', seatbookingController.seatBooking);
module.exports = routes;