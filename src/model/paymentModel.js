const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    passenger_id: DataTypes.STRING,
    total_amount: DataTypes.FLOAT,
    payment_time: DataTypes.TIME,
    
}, {
    tableName: 'payment',
    timestamps: false,
});

module.exports = Payment;
