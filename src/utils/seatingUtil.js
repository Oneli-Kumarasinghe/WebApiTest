import { Double_Decker, Coach, Mini_Bus } from './seats.js';

class seatingUtils {
  async DoubleDeckerFiltering(BookSeats = []) {
    
    const filteredSeats = Double_Decker.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async CoachFiltering(BookSeats = []) {
    
    const filteredSeats = Coach.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }

  async MiniBusFiltering(BookSeats = []) {
    
    const filteredSeats = Mini_Bus.filter(allseats => !BookSeats.includes(allseats.seatNumber));
    return filteredSeats;
  }
}

module.exports = new seatingUtils();
