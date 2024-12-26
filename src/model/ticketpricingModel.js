const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Buses = require('./busesModel'); // Import the related model

const ticketpricingModel = sequelize.define('ticket_price', {
    ticket_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    bus_type: DataTypes.STRING, // This field is used for the association
    ticket_price: DataTypes.FLOAT,
}, {
    tableName: 'ticket_price',
    timestamps: false,
});

// Define the logical association
ticketpricingModel.belongsTo(Buses, {
    foreignKey: 'bus_type', // Field in TicketPrice
    targetKey: 'type',      // Field in Buses
    as: 'busDetails',       // Alias for the association
});

module.exports = ticketpricingModel;

// const TicketPrice = sequelize.define('ticket_price',{
//     ticket_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//       },
//       bus_type: DataTypes.STRING,
//       ticket_price: DataTypes.FLOAT,
//     }, {
//       tableName: 'ticket_price',
//       timestamps: false,
//     });
//     module.exports = TicketPrice;