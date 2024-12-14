const PassengerRepository = require('../repository/passengerRepository');
const bcrypt = require('bcrypt');

class PassengerServices{
    async passengerRegistration(nic_no,full_name,address,contact_info,email,date_of_birth,password)
    {
     const passwordHash = await bcrypt.hash(password, 10);
     const passenger = {nic_no,full_name,address,contact_info,email,date_of_birth, password: passwordHash};
     const passengerCreating= await PassengerRepository.createPassenger(passenger);
     return passengerCreating;
    }
}

module.exports = new PassengerServices();