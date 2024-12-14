const db = require('../config/database');

class PassengerRepository{
    async createPassenger(passenger){
    const query = 'Insert into passenger (nic_no,full_name,address,contact_info,email,password) values ($1, $2 , $3,$4,$5,$6,$7) returning nic_no';
    const values = [passenger.nic_no,passenger.full_name,passenger.address,passenger.contact_info,passenger.email,passenger.date_of_birth,passenger.password];
    const result = await db.query(query,values);
    return result.rows[0];
    }
}
module.exports = new PassengerRepository();