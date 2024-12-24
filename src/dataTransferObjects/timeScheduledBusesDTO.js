class timeScheduledBusesDTO{
    constructor(origin_point,time_of_departure,time_of_arrival,vehicle_register_number){
        this.vehicle_register_number = vehicle_register_number;
        this.origin_point = origin_point;
        this.time_of_departure = time_of_departure;
        this.time_of_arrival = time_of_arrival;
        
    }

}

module.exports = timeScheduledBusesDTO;