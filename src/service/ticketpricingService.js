const ticketpricingRepository = require('../repository/ticketpricingRepository');
const timeScheduledBusesDTO = require('../dataTransferObjects/timeScheduledBusesDTO');

class ticketpricingService {
    async getFilteredBusesWithPrices(filter) {
        try {
            const busesWithPrices = await ticketpricingRepository.getFilteredBusesWithPrices(filter);

            return busesWithPrices.map(bus => {
                const ticketDetails = bus.ticketDetails[0] || {}; // Handle array result
                return new timeScheduledBusesDTO(
                    bus.vehicle_register_number,
                    bus.type, // Replace with actual fields if necessary
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
