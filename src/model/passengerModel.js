const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Passenger = sequelize.define('passenger',{
    nic_no: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      full_name: DataTypes.STRING,
      address: DataTypes.STRING,
      contact_info: DataTypes.INTEGER,
      email: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      password: DataTypes.STRING,
    }, {
      tableName: 'passenger',
      timestamps: false,
    });
    
    module.exports = Passenger;