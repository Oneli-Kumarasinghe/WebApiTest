const express = require('express');
const router = express.Router();
const ticketpricingService = require('../service/ticketpricingService');

// Endpoint to get filtered buses
router.get('/filtered-buses', async (req, res) => {
    try {
        const filter = {
            ticket_price: { [require('sequelize').Op.gt]: req.query.minPrice || 20 },
        };

        const busesDTO = await ticketpricingService.getFilteredBusesWithPrices(filter);
        res.status(200).json({ success: true, data: busesDTO });
    } catch (error) {
        console.error('Error in route:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
