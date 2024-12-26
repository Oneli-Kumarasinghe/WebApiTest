const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TicketPrice = require('./ticketpricingModel'); // Import the related model

const Buses = sequelize.define('buses', {
    ntc_registered_number: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    vehicle_register_number: DataTypes.STRING,
    vehicle_capacity: DataTypes.INTEGER,
    type: DataTypes.STRING, // This field is used for the association
    owner_id: DataTypes.STRING,
    operator_id: DataTypes.STRING,
    conductor_id: DataTypes.STRING,
}, {
    tableName: 'buses',
    timestamps: false,
});

// Define the logical association
Buses.hasMany(TicketPrice, {
    foreignKey: 'bus_type', // Field in TicketPrice
    sourceKey: 'type',      // Field in Buses
    as: 'ticketDetails',    // Alias for the association
});

module.exports = Buses;
console.log(Buses === sequelize.models.Buses);

// const Buses = sequelize.define('buses',{
//     ntc_registered_number: {
//         type: DataTypes.STRING,
//         primaryKey: true,
//       },
//       vehicle_register_number: DataTypes.STRING,
//       vehicle_capacity: DataTypes.INTEGER,
//       type: DataTypes.STRING,
//       owner_id: DataTypes.STRING,
//       operator_id: DataTypes.STRING,
//       conductor_id: DataTypes.STRING
//     }, {
//       tableName: 'buses',
//       timestamps: false,
//     });
//     module.exports = Buses;