const express = require('express');
const timeScheduleController = require('../controller/timeScheduleController');

const router = express.Router();
/**
 * @swagger
 * /timeschedules/getTimeSchedules:
 *   get:
 *     summary: Find schedules by route ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               route_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Schedules fetched successfully.
 *       500:
 *         description: Server error.
 */
router.get('/getTimeSchedules', timeScheduleController.findAllSchedulesWithRouteId);

module.exports = router;