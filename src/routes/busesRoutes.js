const express = require('express');
const router = express.Router();
const busController = require('../controller/busesController');

router.get('/filtered-buses', busController.getFilteredBusesWithPrices);

module.exports = router;
