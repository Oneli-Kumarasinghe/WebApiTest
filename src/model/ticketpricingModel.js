const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ticketpricingModel = sequelize.define('ticketpricing', { // Corrected model name
    ticket_id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    bus_type: DataTypes.STRING,
    ticket_price: DataTypes.FLOAT, // Corrected field name
}, {
    tableName: 'ticketpricing',
    timestamps: false,
});

module.exports = ticketpricingModel;
