const passengerModel = require('../model/passengerModel');

class PassengerRepository {
    async createPassenger(passenger) {
        const passengerCreate = await passengerModel.create(passenger);
        return passengerCreate;
    }
    async findingByEmail(email){
        return await Passenger.findOne({where: { email }})
      }
}

module.exports = new PassengerRepository();
