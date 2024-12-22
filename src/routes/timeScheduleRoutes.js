const express = require('express');
const timeScheduleController = require('../controller/timeScheduleController');

const router = express.Router();
router.get('/getTimeSchedules', RouteController.findAllSchedulesWithRouteId);

module.exports = router;