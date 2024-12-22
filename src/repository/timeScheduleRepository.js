const Schedules = require('../model/timeScheduleModel');

class timeScheduleRepository {
    async findingWithRouteId(route_id) {
        try {
            return await Schedules.findOne({where: {route_id}});
        } catch (error) {
            throw new Error(`Error occurred while querying data: ${error.message}`);
        }
    }
}

module.exports = new timeScheduleRepository();