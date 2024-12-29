const express = require('express');
const router = express.Router();
const busController = require('../controller/busesController');
const authenticationJason = require('../config/jasonwebtoken');

router.get('/filtered-buses', authenticationJason, busController.getFilteredBusesWithPrices);

module.exports = router;
