const Buses = require('./busesModel');
const TicketPricing = require('./ticketpricingModel');

// Define associations
Buses.hasMany(TicketPricing, {
    foreignKey: 'bus_type',  // Field in TicketPricing
    sourceKey: 'type',       // Field in Buses
    as: 'ticketDetails',     // Alias for the association
});

TicketPricing.belongsTo(Buses, {
    foreignKey: 'bus_type',  // Field in TicketPricing
    targetKey: 'type',       // Field in Buses
    as: 'busDetails',        // Alias for the association
});

// Export models with associations defined
module.exports = { Buses, TicketPricing };
