const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const ticketpricingModel = sequelize.define('ticketpricingModel',{
    ticket_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      bus_type: DataTypes.STRING,
      ticketpricingModel : DataTypes.FLOAT,
    }, {
      tableName: 'ticketpricingModel',
      timestamps: false,
    });
    // Define Buses model
    const BusesModel = require('./busesModel');

    // Association: Ticket_price belongs to Buses by bus_type
    ticketpricingModel.belongsTo(BusesModel, {
    foreignKey: 'bus_type',
    targetKey: 'type', // 'type' in Buses model
    as: 'busDetails',
    });
    module.exports = ticketpricingModel;