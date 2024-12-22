const timeScheduleRepository = require('../repository/timeScheduleRepository');

class timeScheduleService {
    

    async findAllSchedulesWithRouteId(route_id) {
        try {
            const schedules = await timeScheduleRepository.findingWithRouteId(route_id);
            return schedules;
        } catch (error) {
            throw new Error(`Error occurred while fetching data: ${error.message}`);
        }
    }
}

module.exports = new timeScheduleService();