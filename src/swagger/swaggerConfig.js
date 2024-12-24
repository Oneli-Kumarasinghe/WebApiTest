const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'tranport-reservation-seat',
      version: '1.0.0',
      description: 'Transportation API End Points',
    },
    servers: [
      {
        url: 'https://webapitest-gouu.onrender.com',
        description: 'Transport Seat Reservation Service System',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Location of your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;