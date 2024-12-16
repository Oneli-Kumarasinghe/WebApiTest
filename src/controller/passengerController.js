const passengerService = require('../service/passengerService');

class PassengerController {
  async passengerRegistration(req, res) {
    try {
      const { nic_no, full_name, address, contact_info, email,date_of_birth, password } = req.body;
      const passengerNew = await passengerService.passengerRegistration(nic_no, full_name, address, contact_info, email,date_of_birth, password);
      res.status(201).json({ message: 'Passenger registered successfully', passengerNew: passengerNew.nic_no });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async passengerLogining(req, res){
    try{
      const {nic_no, password} = req.body;
      const loginVerification = await passengerService.PassengerVerification(nic_no, password);
      if (loginVerification) {
        res.status(201).json({ message: 'Passenger verified sucessfully' });
        console.log('passenger verification sucessful for user with nic : ', nic_no);
      }
    }catch(error){
      res.status(401).json({ error: error.message });
      console.log('failed to verify passenger with nic :', nic_no);
    }
  }
}

module.exports = new PassengerController();