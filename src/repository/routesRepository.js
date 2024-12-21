const routesModel = require('../model/routesModel');

class RoutesRepository {
    async findAllRoutes(){
        return await routesModel.findAll()
      }
}
module.exports = new RoutesRepository();
