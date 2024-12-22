const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Schedules = sequelize.define(
    'schedules',
    {
        schedule_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        route_id: DataTypes.INTEGER,
        bus_ntc: DataTypes.STRING,
        time_of_departure: DataTypes.TIME,
        time_of_arrival: DataTypes.TIME,
        date_of_scheduling: DataTypes.STRING,
        activity: DataTypes.BOOLEAN,

    },
    {
        tableName: 'schedules',
        timestamps: false,
    }
);

module.exports = Schedules;