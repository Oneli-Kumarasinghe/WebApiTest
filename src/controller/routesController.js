const RoutesService = require('../service/routesService');

class RoutesController {
    async findAllRoutes(req, res) {
        try {
            const allRoutes = await RoutesService.findAllRoutes();
            res.status(200).json({ routes: allRoutes });
        } catch (error) {
            res.status(400).json({ error: error.message });
            
        }
    }
}

module.exports = new RoutesController();