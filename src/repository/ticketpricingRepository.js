const busesModel = require('../model/busesModel');
const ticketpricingModel = require('../model/ticketpricingModel');

class ticketpricingRepository {
    async getFilteredBusesWithPrices(filter) {
        try {
            // Fetch buses with ticket price details based on the 'type' match
            return await busesModel.findAll({
                attributes: [
                    'vehicle_register_number',
                    'vehicle_capacity',
                    'type',
                    'owner_id',
                    'operator_id',
                    'conductor_id',
                ],
                include: {
                    model: Ticket_price,
                    required: true,
                    as: 'ticketDetails',
                    attributes: ['ticket_price'],
                    where: filter, // Apply filter on ticket_price
                },
            });
        } catch (error) {
            console.error('Error in TicketPricingRepository:', error);
            throw error;
        }
    }
}

module.exports = new ticketpricingRepository();

