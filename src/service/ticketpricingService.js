const ticketpricingRepository = require('../repository/ticketpricingRepository');
const timeScheduledBusesDTO = require('../model/timeScheduledBusesDTO');

class ticketpricingService {
    async getFilteredBusesWithPrices(filter) {
        try {
            // Find ticket prices matching the filter
            const ticketPrices = await TicketPrice.findAll({ where: filter });

            // Extract bus types from the ticket prices
            const busTypes = ticketPrices.map((ticket) => ticket.bus_type);

            // Find buses that match the filtered bus types
            const buses = await Buses.findAll({
                where: {
                    type: busTypes, // Filter buses by type
                },
            });

            // Format buses as DTOs
            const busesDTO = buses.map((bus) => ({
                vehicle_register_number: bus.vehicle_register_number,
                type: bus.type,
                capacity: bus.vehicle_capacity,
                ntc_registered_number: bus.ntc_registered_number,
            }));

            return busesDTO;
        } catch (error) {
            console.error('Error in service:', error);
            throw error;
        }
    }
}

module.exports = new ticketpricingService();
