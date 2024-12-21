const Routes = require('../model/routesModel');

class RoutesRepository {
    async findAllRoutes() {
        try {
            return await Routes.findAll();
        } catch (error) {
            throw new Error(`Error occurred while querying routes: ${error.message}`);
        }
    }
}

module.exports = RoutesRepository;