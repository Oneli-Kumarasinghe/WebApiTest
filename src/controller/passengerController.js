const passengerService = require('../service/passengerService');
const jwt = require('jsonwebtoken');
const jason_secret_key = "48a0d93893cd6f784478246cf66a76e710f14cc6177512330ceab0a90fc4dfd6";

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
      const {email, password} = req.body;
      const loginVerification = await passengerService.PassengerVerification(email, password);
      if (loginVerification) {
        const jason_token = jwt.sign({ email, password }, jason_secret_key, { expiresIn: '2h' });
        res.status(201).json({ message: 'verified the passenger sucessfully', jason_token });

      }
    }catch(error){
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new PassengerController();