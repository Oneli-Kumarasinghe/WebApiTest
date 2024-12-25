const express = require('express');
const router = express.Router();
const busController = require('../controller/busesController');

router.post('/filtered-buses', busController.getFilteredBusesWithPrices);

module.exports = router;
