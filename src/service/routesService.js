const RoutesRepository = require('../repository/routesRepository');

class RoutesServices{
    async findAllRoutes(){
    try{
        const routes = await RoutesRepository.findAllRoutes();
        return routes;
    }
    catch (error) {
        throw new Error(`Error occurred : ${error.message}`);
    }

 }
}
module.exports = new RoutesServices();