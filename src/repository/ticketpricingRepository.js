const { Op, Sequelize } = require('sequelize');
const busesModel = require('../model/busesModel');
const ticketpricingModel = require('../model/ticketpricingModel');

class ticketpricingRepository {
    async getFilteredBusesWithPrices(filter) {
        try {
            // Perform a raw SQL join to fetch buses with ticket pricing information
            return await busesModel.findAll({
                attributes: [
                    'vehicle_register_number',
                    'vehicle_capacity',
                    'type', // buses table column
                    'owner_id',
                    'operator_id',
                    'conductor_id',
                ],
                raw: true, // Use raw queries to bypass the association system
                include: [{
                    model: ticketpricingModel,
                    attributes: ['ticket_price'],
                    required: true,
                    where: filter,
                    on: {
                        '$busesModel.type$': { [Op.eq]: Sequelize.col('ticketpricingModel.bus_type') }
                    }
                }],
            });
        } catch (error) {
            console.error('Error in TicketPricingRepository:', error);
            throw error;
        }
    }
}

module.exports = new ticketpricingRepository();
