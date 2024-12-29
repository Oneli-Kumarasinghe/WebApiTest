const sequelize = require('../config/database'); // Ensure the correct path to your database configuration
const { QueryTypes } = require('sequelize');
const Booking = require('../model/bookingModel');

class BookingRepository {

    /**
     * Fetch seat numbers booked for a given bus, schedule slot, and booking date.
     * @param {string} bus_number_plate - Bus registration number.
     * @param {number} schedule_slot - Schedule slot.
     * @param {string} date_of_booking - Date of booking.
     * @returns {Promise<string[]>} - Array of seat numbers.
     */
    async getNumberOfSeatings(bus_number_plate, schedule_slot, date_of_booking) {
        try {
            const results = await sequelize.query(
                `SELECT seat_number 
                 FROM bookings 
                 WHERE bus_number_plate = :bus_number_plate 
                   AND schedule_slot = :schedule_slot 
                   AND date_of_booking = :date_of_booking`,
                {
                    replacements: { bus_number_plate, schedule_slot, date_of_booking },
                    type: QueryTypes.SELECT,
                }
            );

            return results.map(row => row.seat_number);
        } catch (error) {
            console.error('Error fetching booked seats:', error);
            return [];
        }
    }

    /**
     * Save booking data to the database.
     * @param {Object} bookingData - Booking details to save.
     * @returns {Promise<number>} - ID of the created booking record.
     */
    async save(bookingData) {
        try {
            const booking = await Booking.create(bookingData);
            return booking.booking_id;
        } catch (error) {
            console.error('Error saving booking:', error);
            throw error;
        }
    }

    /**
     * Get seat numbers booked for a specific bus, schedule slot, and booking date.
     * @param {string} bus_number_plate - Bus registration number.
     * @param {number} schedule_slot - Schedule slot.
     * @param {string} date_of_booking - Date of booking.
     * @returns {Promise<string[]>} - Array of seat numbers.
     */
    async gettingNumberofSeatsWithVehicleRegistrationNumberTime(bus_number_plate, schedule_slot, date_of_booking) {
        try {
            const bookedSeats = await Booking.findAll({
                where: { bus_number_plate, schedule_slot, date_of_booking },
                attributes: ['seat_number'],
            });

            return bookedSeats.map(seating => seating.seat_number);
        } catch (error) {
            console.error('Error fetching booked seats with vehicle registration:', error);
            return [];
        }
    }
}

module.exports = new BookingRepository();
