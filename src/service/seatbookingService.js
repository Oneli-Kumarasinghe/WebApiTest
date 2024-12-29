const BookingRepository = require('../repository/seatbookingRepository');
const paymentRepository = require('../repository/paymentRepository');
const busesRepository = require('../repository/busesRepository');
const seatbookingRepository = require('../repository/seatbookingRepository');
const { default: seatingUtils } = require('../utils/seatingUtil');

class SeatBookingService {
    async availableSeats(seating = [], VehicleNumber, SlotsAllocated, date_of_booking) {
        try {
            const bookedSeats = await BookingRepository.getNumberOfSeatings(VehicleNumber, SlotsAllocated, date_of_booking);
            const availableSeats = seating.filter(seat => !bookedSeats.includes(seat.seatNumber));
            return availableSeats;
        } catch (error) {
            console.error('Error checking seat availability:', error);
            return [];
        }
    }
    
    async seatBooking(payload) {
        const { passenger_id, seat_number_list, bus_number_plate, schedule_slot, total_amount, date_of_booking } = payload;
        
        try {
            const seatAvailability = await this.availableSeats(seat_number_list, bus_number_plate, schedule_slot, date_of_booking);
            
            if (seatAvailability.length > 0) { 
                const paymentTime = new Date();
                const paymentData = { passenger_id, total_amount, payment_time: paymentTime };
                
                const paymentId = await paymentRepository.save(paymentData); 
                
                if (paymentId) {  
                    const bookingIds = [];
                    for (const seat_number of seat_number_list) {
                        const bookingData = {
                            passenger_id,
                            payment_slip_id: paymentId,  
                            bus_number_plate,
                            schedule_slot: schedule_slot,
                            seat_number,
                            date_of_booking
                        };
                        const bookingId = await BookingRepository.save(bookingData);
                        bookingIds.push(bookingId);
                    }
                    return {
                        message: 'Seats booked successfully.',
                        booking_ids: bookingIds,
                        payment_id: paymentId
                    };
                } else {
                    throw new Error('Payment failed');  
                }
            } else {
                throw new Error('No available seats'); 
            }
        } catch (error) {
            console.error('Error during seat booking:', error);
            throw error;
        }
    }

async getAvailableSeatings(bus_number_plate, schedule_slot, date_of_booking){
        try {
            console.log("request came to fetch seats availabilty information")
            const type = await busesRepository.getFilteredBusesWithPrices(bus_number_plate);
            console.log(`retreiving the type of the bus `, type);
            if (!type) {
                console.error("No bus registered to this registration number");
                return [];
            }
            if (type === 'Double Decker') {
                const seatingsBooked = await seatbookingRepository.gettingNumberofSeatsWithVehicleRegistrationNumberTime(bus_number_plate, schedule_slot, date_of_booking);
                console.log("fetched booked seats->", seatingsAvailable);
                const seatingsAvailable = await seatingUtils.DoubleDeckerFiltering(seatingsBooked);
                console.log("available seats successfully fetched ->", seatingsAvailable);
                return seatingsAvailable;
            }
            
            else if (type === 'Coach') {
                const seatingsBooked = await seatbookingRepository.gettingNumberofSeatsWithVehicleRegistrationNumberTime(bus_number_plate, schedule_slot, date_of_booking);
                const seatingsAvailable = await seatingUtils.CoachFiltering(seatingsBooked);
                console.log("available seats successfully fetched ->", seatingsAvailable);
                return seatingsAvailable;
            }

            else if (type === 'Mini Bus') {
                const seatingsBooked = await seatbookingRepository.gettingNumberofSeatsWithVehicleRegistrationNumberTime(bus_number_plate, schedule_slot, date_of_booking);
                const seatingsAvailable = await seatingUtils.MiniBusFiltering(seatingsBooked);
                console.log("available seats successfully fetched ->", seatingsAvailable);
                return seatingsAvailable;
            }
            

        } catch (error) {
            console.error("While fetching an error occured :", error);
            return [];
        }
    }

   
}

module.exports = new SeatBookingService();
