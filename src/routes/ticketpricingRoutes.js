const express = require('express');
const router = express.Router();
const ticketpricingService = require('../service/ticketpricingService');

// Endpoint to get filtered buses
router.get('/filtered-buses', async (req, res) => {
    try {
        // Extract the minPrice query parameter from the request
        const minPrice = req.query.minPrice || 20;
         // Build the filter object for the service call
        const filter = {
            ticketpricingModel: { [require('sequelize').Op.gt]: minPrice },
        };

        const busesDTO = await ticketpricingService.getFilteredBusesWithPrices(filter);
        res.status(200).json({ success: true, data: busesDTO });
    } catch (error) {
        console.error('Error in route:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;