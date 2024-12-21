const RoutesRepository = require('../repository/routesRepository');

class RoutesServices{
    constructor() {
        this.routesRepository = new RoutesRepository();
    }
    async findAllRoutes(){
    try{
        const routes = await this.routesRepository.findAllRoutes();
        return routes;
    }
    catch (error) {
        throw new Error(`Error occurred : ${error.message}`);
    }

 }
}
module.exports = new RoutesServices();