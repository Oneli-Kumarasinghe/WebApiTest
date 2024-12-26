
const { Buses, TicketPricing } = require('../model/associations'); 

class BusRepository {
    async getFilteredBusesWithPrices(filter) {
        try {
            return await Buses.findAll({
                attributes: [
                    'vehicle_register_number',
                    'vehicle_capacity',
                    'type',
                    'owner_id',
                    'operator_id',
                    'conductor_id',
                ],
                include: {
                    model: TicketPricing, 
                    as: 'ticketDetails', 
                    attributes: ['ticket_price'],
                    where: filter, 
                },
            });
        } catch (error) {
            console.error('Error in BusRepository:', error);
            throw error;
        }
    }
}

module.exports = new BusRepository();



