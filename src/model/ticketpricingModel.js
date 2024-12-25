const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Ticket_price = sequelize.define('ticket_price',{
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
    // Define Buses model
    const Buses = require('./busesModel');

    // Association: Ticket_price belongs to Buses by bus_type
    Ticket_price.belongsTo(Buses, {
    foreignKey: 'bus_type',
    targetKey: 'type', // 'type' in Buses model
    });
    module.exports = Ticket_price;