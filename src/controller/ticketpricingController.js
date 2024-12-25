const ticketpricingService = require('../service/ticketpricingService');
const { Op } = require('sequelize');

class ticketpricingController {
    /**
     * Fetch filtered buses based on ticket price and other filters.
     * @param {Request} req - Express Request object
     * @param {Response} res - Express Response object
     */
    async getFilteredBusesWithPrices(req, res) {
        try {
            // Extract query parameters for filtering
            const { minPrice = 20, maxPrice, busType } = req.query;

            // Build the filter object dynamically
            const filter = {
                ...(minPrice && { ticketpricingModel: { [Op.gte]: parseFloat(minPrice) } }),
                ...(maxPrice && { ticketpricingModel: { [Op.lte]: parseFloat(maxPrice) } }),
                ...(busType && { bus_type: busType }),
            };

            // Call the service layer to fetch filtered buses
            const busesDTO = await ticketpricingService.getFilteredBusesWithPrices(filter);

            // Return the filtered data as a JSON response
            res.status(200).json({ success: true, data: busesDTO });
        } catch (error) {
            console.error('Error in TicketPricingController:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}

module.exports = new ticketpricingController();
