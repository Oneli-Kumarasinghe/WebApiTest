const seatBookingService = require('../service/seatbookingService');

class BookingController {
    async seatBooking(req, res) {
        try {
            const payload = req.body;
            const newBooking = await seatBookingService.seatBooking(payload);

           
            return res.status(201).json({
                message: newBooking.message,
                booking_ids: newBooking.booking_ids,
                payment_id: newBooking.payment_id,
            });
        } catch (error) {
            console.error('Error creating booking:', error);

            
            if (error instanceof Error && error.status) {
                return res.status(error.status).json({ message: error.message, details: error.details || undefined });
            }

           
            return res.status(500).json({ message: 'Internal Server Error', error: error.message || error });
        }
    }

    async getAvailableSeatings(req, res) {
        try {
            const { bus_number_plate, schedule_slot, date_of_booking } = req.body;
    
            if (!bus_number_plate || !schedule_slot || !date_of_booking) {
                res.status(400).json({ message: "Missing required fields in the request body." });
                console.log("Missing required fields in the request body.");
                return;
            }
    
            console.log(`Fetching available seats for vehicle: ${bus_number_plate}, schedule slot: ${schedule_slot}, date: ${date_of_booking}`);
            const seatingsAvailable = await seatBookingService.getAvailableSeatings(bus_number_plate, schedule_slot, date_of_booking);
    
            if (Array.isArray(seatingsAvailable) && seatingsAvailable.length > 0) {
                res.status(200).json(seatingsAvailable);
                console.log("Data fetched successfully");
            } else {
                res.status(404).json({ message: "No available seats found." });
                console.log("No available seats found.");
            }
        } catch (error) {
            res.status(500).json({ message: "Data fetching was unsuccessful", error: error.message });
            console.error(`Error occurred: ${error.message}`);
        }
    }
    
}

module.exports = new BookingController();