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
    
    async getListofBookedSeats(bus_number_plate, schedule_slot, date_of_booking) {
        try {
            const bookedSeats = await PassengerBookings.findAll({
                where: {
                    bus_number_plate: bus_number_plate,
                    schedule_slot: schedule_slot,
                    date_of_booking: date_of_booking,
                },
                attributes: ['seat_number'],
            });
            return bookedSeats.map(seat => seat.seat_no);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

module.exports = new BookingRepository();