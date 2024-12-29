const Booking = require('../model/bookingModel'); 

class BookingRepository {
    async getNumberOfSeatings(bus_number_plate, schedule_slot,date_of_booking) {
        try {
            const seatsBooked = await Booking.findAll({
                where: {
                    bus_number_plate: bus_number_plate,
                    schedule_slot: schedule_slot,
                    date_of_booking: date_of_booking,
                },
                attributes: ['seat_number'],
            });
    
           
            return seatsBooked.map(seat => seat.seat_number);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async save(bookingData) {
        try {
            const booking = await Booking.create(bookingData);
            return booking.booking_id;
        } catch (error) {
            console.error('Error saving booking:', error);
            throw error;
        }
    }

    async gettingNumberofSeatsWithVehicleRegistrationNumberTime(vehicle_register_number, scheduled_slot, date_of_booking) {
        try {
            const NumberOfSeatingsBooked = await BookingRepository.findAll({
                where: {
                    vehicle_register_number: vehicle_register_number,
                    scheduled_slot: scheduled_slot,
                    date_of_booking: date_of_booking,
                },
                attributes: ['seat_number'],
            });
            return NumberOfSeatingsBooked.map(seating => seating.seat_number);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    
}

module.exports = new BookingRepository();



