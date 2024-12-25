const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ticketpricingModel = sequelize.define('ticketpricingModel',{
    ticket_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      bus_type: DataTypes.STRING,
      ticket_price : DataTypes.FLOAT,
    }, {
      tableName: 'ticket_price',
      timestamps: false,
    });
  

    module.exports = ticketpricingModel;