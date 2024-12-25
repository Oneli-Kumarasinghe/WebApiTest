const busesModel = require('../model/busesModel');
const ticketpricingModel = require('../model/ticketpricingModel');

class ticketpricingRepository {
    async getFilteredBusesWithPrices(filter) {
        try {
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
                    model: ticketpricingModel,
                    required: true,
                    as: 'ticketDetails', // Match alias in the association
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
