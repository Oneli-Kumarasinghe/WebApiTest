class timeScheduledBusesDTO{
    constructor(vehicle_register_number,distination,origin_point,time_of_departure,time_of_arrival,ticket_price){
        this.vehicle_register_number = vehicle_register_number;
        this.distination = distination;
        this.origin_point = origin_point;
        this.time_of_departure = time_of_departure;
        this.time_of_arrival = time_of_arrival;
        this.ticket_price = ticket_price;

        
    }

}

module.exports = timeScheduledBusesDTO;