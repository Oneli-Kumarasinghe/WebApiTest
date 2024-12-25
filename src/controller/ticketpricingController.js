const ticketpricingService = require('../service/ticketpricingService');
const { Op } = require('sequelize');

class ticketpricingController {
    async getFilteredBusesWithPrices(req, res) {
        try {
            const { minPrice = 20, maxPrice, busType } = req.query;

            const filter = {
                ...(minPrice && { ticket_price: { [Op.gte]: parseFloat(minPrice) } }),
                ...(maxPrice && { ticket_price: { [Op.lte]: parseFloat(maxPrice) } }),
                ...(busType && { bus_type: busType }),
            };

            const busesDTO = await ticketpricingService.getFilteredBusesWithPrices(filter);
            res.status(200).json({ success: true, data: busesDTO });
        } catch (error) {
            console.error('Error in TicketPricingController:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}

module.exports = new ticketpricingController();
