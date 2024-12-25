const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ticketpriceModel = require('./ticketpricingModel');

const Buses = sequelize.define('buses',{
    ntc_registered_number: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      vehicle_register_number: DataTypes.STRING,
      vehicle_capacity: DataTypes.INTEGER,
      type: DataTypes.STRING,
      owner_id: DataTypes.STRING,
      operator_id: DataTypes.STRING,
      conductor_id: DataTypes.STRING
    }, {
      tableName: 'buses',
      timestamps: false,
    });
    Buses.hasOne(ticketpriceModel, { sourceKey: 'type', foreignKey: 'bus_type', as: 'ticketDetails' });
    
    module.exports = Buses;