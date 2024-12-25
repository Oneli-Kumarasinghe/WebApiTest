const ticketpricingRepository = require('../repository/ticketpricingRepository');
const timeScheduledBusesDTO = require('../model/timeScheduledBusesDTO');

class ticketpricingService {
    async getFilteredBusesWithPrices(filter) {
        try {
            const busesWithPrices = await ticketpricingRepository.getFilteredBusesWithPrices(filter);

            // Map the results to DTOs
            return busesWithPrices.map(bus => {
                const ticketDetails = bus.ticketDetails || {};
                return new timeScheduledBusesDTO(
                    bus.vehicle_register_number,
                    bus.destination,
                    bus.origin_point,
                    bus.time_of_departure = time_of_departure,
                    bus.time_of_arrival = time_of_arrival,

                    ticketDetails.ticket_price || 0
                );
            });
        } catch (error) {
            console.error('Error in TicketPricingService:', error);
            throw error;
        }
    }
}

module.exports = new ticketpricingService();
