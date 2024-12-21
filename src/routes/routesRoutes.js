const express = require('express');
const RouteController = require('../controller/routesController');

const router = express.Router();
router.get('/getRoutes', RouteController.getRoutes);

module.exports = router;