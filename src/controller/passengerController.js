const passengerService = require('../service/passengerService');

class PassengerController {
  async passengerRegistration(req, res) {
    try {
      const { nic_no, full_name, address, contact_info, email,date_of_birth, password } = req.body;
      const passengerNew = await passengerService.passengerRegistration(nic_no, full_name, address, contact_info, email,date_of_birth, password);
      res.status(201).json({ message: 'Passenger registered successfully', newPassenger: newPassenger.nic_no });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PassengerController();