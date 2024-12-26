const Buses = require('./busesModel');
const TicketPricing = require('./ticketpricingModel');


Buses.hasMany(TicketPricing, {
    foreignKey: 'bus_type', 
    sourceKey: 'type',       
    as: 'ticketDetails',    
});

TicketPricing.belongsTo(Buses, {
    foreignKey: 'bus_type', 
    targetKey: 'type',      
    as: 'busDetails',        
});

module.exports = { Buses, TicketPricing };
