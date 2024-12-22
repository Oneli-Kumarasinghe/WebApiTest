const timeScheduleService = require('../service/timeScheduleService');

class timeScheduleController {
    async findAllSchedulesWithRouteId(req, res) {
        try {
              const {route_id} = req.body;
              const schedulesOfAll = await timeScheduleService.findAllSchedulesWithRouteId(route_id);
              res.status(201).json({ message: 'Data successfully fetched', schedulesOfAll: schedulesOfAll });
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
    }
}

module.exports = new timeScheduleController();