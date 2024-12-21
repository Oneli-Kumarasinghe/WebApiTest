const RoutesServices =  require('../service/routesService');

class routesController{
    async findAllroutes(req,res){
        try{
            const routesOfAll = await RoutesServices.findAll();
            res.status(201).json({allRoutes});
            console.log('routes fetched successfully');
        }
        catch{
            res.status(400).json({error: error.message});
            console.log('routes were not successfully fetched');
        }
    }
}
module.exports = routesController;