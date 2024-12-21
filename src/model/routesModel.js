const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Routes = sequelize.define('routes',{
    route_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      origin_point: DataTypes.STRING,
      destination: DataTypes.STRING,
      distance: DataTypes.FLOAT,
    }, {
      tableName: 'routes',
      timestamps: false,
    });
    
    module.exports = Routes ;