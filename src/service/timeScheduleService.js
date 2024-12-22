const timeScheduleRepository = require('../repository/timeScheduleRepository');

class timeScheduleService {
    constructor() {
        this.timeScheduleRepository = new timeScheduleRepository();
    }

    async findAllSchedulesWithRouteId() {
        try {
            const schedules = await this.timeScheduleRepository.findingWithRouteId();
            return schedules;
        } catch (error) {
            throw new Error(`Error occurred while fetching data: ${error.message}`);
        }
    }
}

module.exports = new timeScheduleService();