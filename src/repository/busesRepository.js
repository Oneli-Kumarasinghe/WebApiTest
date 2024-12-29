
const { Buses, TicketPricing } = require('../model/associations'); 
const busesModel = require('../model/busesModel');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/database');

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
    

    async getTypeOfBusByVehicleRegistrationNumber(vehicle_register_number) {
        try {
            const type = await Buses.findOne({
                where: {
                    vehicle_register_number: vehicle_register_number, 
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



