const express = require('express');
const timeScheduleController = require('../controller/timeScheduleController');

const router = express.Router();
/**
 * @swagger
 * /timeschedules/getTimeSchedules:
 *   get:
 *     summary: Finding All Schedules with Route Id
 *     description: Finding All Schedules end point
 *     responses:
 *       200:
 *         description: All Schedules Fetched Successfully .
 */
router.get('/getTimeSchedules', timeScheduleController.findAllSchedulesWithRouteId);

module.exports = router;