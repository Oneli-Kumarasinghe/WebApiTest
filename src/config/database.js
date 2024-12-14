const{ Sequelize } = require('sequelize');
const sequelize = new Sequelize('transport_reservation_service','transport_reservation_service_user','9yW9pvByvZupXGj52JOHwckRErbnbgrh',{
host:'dpg-ct87ke1opnds73bu40jg-a',
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