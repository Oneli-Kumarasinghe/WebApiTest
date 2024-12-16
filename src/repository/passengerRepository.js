const passengerModel = require('../model/passengerModel');

class PassengerRepository {
    async createPassenger(passenger) {
        const passengerCreate = await passengerModel.create(passenger);
        return passengerCreate;
    }
    async findByEmail(email){
        return await passengerModel.findOne({where: { email }})
      }
}

module.exports = new PassengerRepository();
