
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

    async getTypeOfBusByVehicleRegistrationNumber(bus_number_plate) {
        try {
            const type = await BusRepository.findOne({
                where: {
                    bus_number_plate: bus_number_plate, 
                },
                attributes: ['type'], 
            });
            return type ? type.type : null; 
        } catch (error) {
            console.error('Error fetching bus type:', error);
            return null;
        }
    }
    
}

module.exports = new BusRepository();



