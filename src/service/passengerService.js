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

    async PassengerVerification(email,password){
        const passengerInformation = await PassengerRepository.findByEmail(email);
        if (!Details) {
            throw new Error('Invalid email');
          }
          else{
            const passwordVerification = await bcrypt.compare(password, passengerInformation.password);
            if (passwordVerificationd) {
              return passengerInformation;
            }
            else{
              throw new Error('invalid password');
            }
        }
    }
}


module.exports = new PassengerServices();