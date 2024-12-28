class BookingBusDTO{
    constructor(passenger_id,seat_number_list=[],bus_number_plate,scheduled_slot,total_amount,date_of_booking){
        this.passenger_id = passenger_id;
        this.seat_number_list = seat_number_list;
        this.bus_number_plate = bus_number_plate;
        this.scheduled_slot = scheduled_slot;
        this.total_amount = total_amount;
        this.date_of_booking = date_of_booking;
  
    }

}

module.exports = BookingBusDTO;