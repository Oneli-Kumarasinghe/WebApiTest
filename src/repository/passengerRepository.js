const passengerModel = require('../model/passengerModel');

class PassengerRepository {
    async createPassenger(passenger) {
        const passengerCreate = await passengerModel.create(passenger);
        return passengerCreate;
    }
}

module.exports = new PassengerRepository();
