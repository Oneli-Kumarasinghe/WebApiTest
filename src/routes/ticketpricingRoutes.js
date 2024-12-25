const express = require('express');
const router = express.Router();
const ticketpricingController = require('../controller/ticketpricingController');

// Endpoint to get filtered buses
router.get('/filtered-buses', ticketpricingController.getFilteredBusesWithPrices);

module.exports = router;
