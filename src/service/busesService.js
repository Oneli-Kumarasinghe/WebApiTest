const BusRepository = require('../repository/busesRepository');

class BusService {

    async getFilteredBusesWithPrices(filter) {
        try {
            const busesWithPrices = await BusRepository.getFilteredBusesWithPrices(filter);
            return busesWithPrices.map(bus => {
                return {
                    vehicle_register_number: bus.vehicle_register_number,
                    vehicle_capacity: bus.vehicle_capacity,
                    type: bus.type,
                    owner_id: bus.owner_id,
                    operator_id: bus.operator_id,
                    conductor_id: bus.conductor_id,
                    ticket_price: bus.ticketDetails[0]?.ticket_price || null, // Safely access ticket price
                };
            });
        } catch (error) {
            console.error('Error in BusService:', error);
            throw error;
        }
    }
}

module.exports = new BusService();
