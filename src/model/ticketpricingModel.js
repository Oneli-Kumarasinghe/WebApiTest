const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TicketPricing = sequelize.define('ticket_price', {
    ticket_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    bus_type: DataTypes.STRING,
    ticket_price: DataTypes.FLOAT,
}, {
    tableName: 'ticket_price',
    timestamps: false,
});

module.exports = TicketPricing;
