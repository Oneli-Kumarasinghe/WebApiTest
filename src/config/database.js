const{ Sequelize } = require('sequelize');
const sequelize = new Sequelize('transport_reservation_service_5avs','transport_reservation_service_user','fELC9plOsSLcQsqwRgDoeNAFik2VIFsX',{
host:'dpg-ctpc4li3esus73dg68kg-a',
port: 5432,
dialect: 'postgres',
dialectOptions: {
    ssl:{
        require: true,
        rejectUnauthorized: false,
    },
 }
});

async function connectionTest() {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  module.exports = sequelize;