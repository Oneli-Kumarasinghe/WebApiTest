const BookingRepository = require('../repository/seatbookingRepository');
const SeatingUtil = require('../utils/seatingUtil')
const PaymentRepository = require('../repository/paymentRepository');
const paymentRepository = require('../repository/paymentRepository');

class SeatBookingService {
    async availableSeats(seating = [],VehicleNumber, SlotsAllocated,date_of_booking) {
        try {
            
            const bookedSeats = await BookingRepository.getNumberOfSeatings(VehicleNumber, SlotsAllocated,date_of_booking);
            const availableSeats = seating.filter(seat => !bookedSeats.includes(seat.seatNumber));
            return availableSeats;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async seatBooking(payload)
    {
        const { passenger_id, seat_number_list, bus_number_plate, scheduled_slot, total_amount, date_of_booking } = payload;
        const seatAvailability = await this.availableSeats(seat_number_list,bus_number_plate,scheduled_slot,date_of_booking);
        if (seatAvailability.length < 0){
            const paymentTime = new Date();
            const paymentData = {passenger_id , total_amount ,paymentTime }
            const Payment= paymentRepository.save(paymentData);
            if(Payment)
            {
                const bookingIds = [];
                for (const seat_number of seat_number_list) {
                    const bookingData = {
                        passenger_id,
                        payment_slip_id: paymentId,
                        bus_number_plate,
                        schedule_slot,
                        seat_number,
                        date_of_booking
                    };
                    const bookingId = await seatbookingRepository.save(bookingData);
                    bookingIds.push(bookingId);
                }
                return {
                    message: 'Seats booked successfully.',
                    booking_ids: bookingIds,
                    payment_id: paymentId
                };
            }
        
        } 
    }
   
}

module.exports = new SeatBookingService();
