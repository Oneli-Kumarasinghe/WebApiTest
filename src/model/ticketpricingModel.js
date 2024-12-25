const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const busesModel = require('./busesModel');

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
    Ticket_price.belongsTo(busesModel, { targetKey: 'type', foreignKey: 'bus_type', as: 'busDetails' });
    module.exports = Ticket_price;