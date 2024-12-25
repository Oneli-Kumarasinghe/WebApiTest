const busesModel = require('../model/busesModel');
const TicketPrice = require('../model/ticketpricingModel');
const { Op } = require('sequelize');

class BusesRepository {
    async findingByNTCNum(ntc_registered_number) {
        return await busesModel.findAllByNTC({where: {ntc_registered_number}});
    
    }

    /**
    
     * @param {Object} filter - The filter criteria.
     * @returns {Promise<Array>} - Filtered bus details with ticket prices.
     */
    async getFilteredBusesWithPrices(filter) {
        try {
            return await busesModel.findAll({
                where: {
                    type: filter.busType || { [Op.ne]: null }, 
                },
                attributes: [
                    'vehicle_register_number',
                    'vehicle_capacity',
                    'type',
                    'owner_id',
                    'operator_id',
                    'conductor_id',
                ],
                include: [
                    {
                        model: TicketPrice,
                        required: false, // Outer join to include matching ticket prices
                        attributes: ['ticket_price'],
                        where: filter.priceRange || {}, // Apply ticket price filter if provided
                    },
                ],
            });
        } catch (error) {
            console.error('Error in BusRepository:', error);
            throw error;
        }
    }
    
}

module.exports = new BusesRepository();
