
const { Buses, TicketPricing } = require('../model/associations'); 

class BusRepository {
    async getFilteredBusesWithPrices(bus_number_plate) {
        try {
            const busesWithPrices = await buses.findAll({
                where: {
                    bus_number_plate: { [Sequelize.Op.eq]: bus_number_plate }, // Use Sequelize operator
                },
                attributes: ['type', 'price'],
            });
            return busesWithPrices;
        } catch (error) {
            console.error('Error fetching buses:', error);
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



