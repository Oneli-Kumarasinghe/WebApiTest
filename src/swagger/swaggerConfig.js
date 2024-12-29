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
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Specify JWT format
        },
      },
    },
    security: [
      {
        BearerAuth: [], // Apply BearerAuth globally to all endpoints
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
