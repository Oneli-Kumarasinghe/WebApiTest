const Booking = require('../model/bookingModel'); 

class BookingRepository {
    async getNumberOfSeatings(bus_number_plate, schedule_slot, date_of_booking) {
        try {
            const [results] = await sequelize.query(
                `
                SELECT seat_number 
                FROM bookings 
                WHERE bus_number_plate = :bus_number_plate 
                  AND schedule_slot = :schedule_slot 
                  AND date_of_booking = :date_of_booking
                `,
                {
                    replacements: {
                        bus_number_plate,
                        schedule_slot,
                        date_of_booking,
                    },
                    type: Sequelize.QueryTypes.SELECT,
                }
            );
            
            // Extract seat numbers from results
            return results.map(row => row.seat_number);
        } catch (error) {
            console.error('Error fetching booked seats:', error);
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

    async gettingNumberofSeatsWithVehicleRegistrationNumberTime(bus_number_plate, schedule_slot, date_of_booking) {
        try {
            const NumberOfSeatingsBooked = await BookingRepository.findAll({
                where: {
                    bus_number_plate:bus_number_plate,
                    schedule_slot: schedule_slot,
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



