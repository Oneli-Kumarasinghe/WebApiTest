const BusService = require('../service/busesService');
const { Op } = require('sequelize');

class BusesController {
    // /**
    
    //  * @param {Request} req 
    //  * @param {Response} res
    //  */
    // async getFilteredBusesWithPrices(req, res) {
    //     try {
    //         const { minPrice, maxPrice, busType } = req.body;

            
    //         const filter = {
    //             busType,
    //             priceRange: {
    //                 ...(minPrice && { ticket_price: { [Op.gte]: parseFloat(minPrice) } }),
    //                 ...(maxPrice && { ticket_price: { [Op.lte]: parseFloat(maxPrice) } }),
    //             },
    //         };

    //         const buses = await busService.getFilteredBusesWithPrices(filter);
    //         res.status(200).json({ success: true, data: buses });
    //     } catch (error) {
    //         console.error('Error in BusController:', error);
    //         res.status(500).json({ success: false, message: 'Internal Server Error' });
    //     }
    // }

    async getFilteredBusesWithPrices(req, res) {
        try {
            const { bus_type, minPrice, maxPrice } = req.body;

            // Build the filter object dynamically
            const filter = {
                ...(bus_type && { bus_type }),
                ...(minPrice && { ticket_price: { [Op.gte]: parseFloat(minPrice) } }),
                ...(maxPrice && { ticket_price: { [Op.lte]: parseFloat(maxPrice) } }),
            };

            const buses = await BusService.getFilteredBusesWithPrices(filter);
            res.status(200).json({ success: true, data: buses });
        } catch (error) {
            console.error('Error in BusController:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
}

module.exports = new BusesController();
