const sequelize = require('../config/database');

class PassengerRepository {
    async createPassenger(passenger) {
        const query = 'INSERT INTO passenger (nic_no, full_name, address, contact_info, email, date_of_birth, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING nic_no';
        const values = [passenger.nic_no, passenger.full_name, passenger.address, passenger.contact_info, passenger.email, passenger.date_of_birth, passenger.password];
        const result = await sequelize.query(query, {
            replacements: values,
            type: sequelize.QueryTypes.INSERT,
        });
        return result[0]; // Sequelize returns the result as an array
    }
}

module.exports = new PassengerRepository();
