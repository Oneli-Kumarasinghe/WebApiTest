const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bookings = sequelize.define('bookings', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    passenger_id: DataTypes.STRING,
    payment_slip_id: DataTypes.INTEGER,
    bus_number_plate: DataTypes.STRING,
    schedule_slot: DataTypes.INTEGER,
    seat_number: DataTypes.STRING,
    date_of_booking: DataTypes.DATE,
}, {
    tableName: 'bookings',
    timestamps: false,
});

module.exports = Bookings;
