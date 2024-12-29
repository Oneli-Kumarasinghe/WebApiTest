const express = require('express');
const seatbookingController = require('../controller/seatbookingController');
const authenticationJason = require('../config/jasonwebtoken');

const routes = express.Router();
routes.post('/saveSeats', authenticationJason, seatbookingController.seatBooking);
routes.get('/getSeatings',authenticationJason, seatbookingController.getAvailableSeatings);
module.exports = routes;
