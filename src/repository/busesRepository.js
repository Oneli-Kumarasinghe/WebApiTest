const busesModel = require('../model/busesModel');

class BusesRepository {
    async findingByNTCNum(ntc_registered_number) {
        return await Buses.findAllByNTC({where: {ntc_registered_number}});
    
    }
    
}

module.exports = new BusesRepository();
