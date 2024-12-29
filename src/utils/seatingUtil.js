const { Double_Decker, Coach, Mini_Bus } = require('./seats');


class seatingUtils {
  async DoubleDeckerFiltering(BookSeats = []) {
      const bookedSeatNumbers = BookSeats.map(seat => seat.seatNumber); 
      const filteredSeats = Double_Decker.filter(allseat => !bookedSeatNumbers.includes(allseat.seatNumber));
      return filteredSeats;
  }

  async CoachFiltering(BookSeats = []) {
      const bookedSeatNumbers = BookSeats.map(seat => seat.seatNumber);
      const filteredSeats = Coach.filter(allseat => !bookedSeatNumbers.includes(allseat.seatNumber));
      return filteredSeats;
  }

  async MiniBusFiltering(BookSeats = []) {
      const bookedSeatNumbers = BookSeats.map(seat => seat.seatNumber);
      const filteredSeats = Mini_Bus.filter(allseat => !bookedSeatNumbers.includes(allseat.seatNumber));
      return filteredSeats;
  }
}

module.exports = new seatingUtils();
