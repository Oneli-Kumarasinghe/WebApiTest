const RoutesRepository = require('../repository/routesRepository');

class RoutesService {
    constructor() {
        this.routesRepository = new RoutesRepository();
    }

    async findAllRoutes() {
        try {
            const routes = await this.routesRepository.findAllRoutes();
            return routes;
        } catch (error) {
            throw new Error(`Error occurred while fetching routes: ${error.message}`);
        }
    }
}

module.exports = new RoutesService();