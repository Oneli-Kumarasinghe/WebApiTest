const busRepository = require('../repository/busesRepository');

class BusService {
    /**
     * @param {Object} filter 
     * @returns {Promise<Array>}
     */
    async getFilteredBusesWithPrices(filter) {
        try {
            const busesWithPrices = await busRepository.getFilteredBusesWithPrices(filter);
            return busesWithPrices.map(bus => ({
                vehicleRegisterNumber: bus.vehicle_register_number,
                vehicleCapacity: bus.vehicle_capacity,
                type: bus.type,
                ownerId: bus.owner_id,
                operatorId: bus.operator_id,
                conductorId: bus.conductor_id,
                ticketPrice: bus.ticketPrices?.ticket_price || 'Not Available', 
            }));
        } catch (error) {
            console.error('Error in BusService:', error);
            throw error;
        }
    }
}

module.exports = new BusService();
