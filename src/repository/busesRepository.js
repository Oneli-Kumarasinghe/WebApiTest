
const { Buses, TicketPricing } = require('../model/associations'); 
const busesModel = require('../model/busesModel');

class BusRepository {
    async getFilteredBusesWithPrices(bus_number_plate) {
        try {
            const results = await sequelize.query(
                `
                SELECT type, price
                FROM buses
                WHERE bus_number_plate = :bus_number_plate
                `,
                {
                    replacements: { bus_number_plate },
                    type: QueryTypes.SELECT,
                }
            );
            return results;
        } catch (error) {
            console.error('Error fetching buses with raw query:', error);
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



