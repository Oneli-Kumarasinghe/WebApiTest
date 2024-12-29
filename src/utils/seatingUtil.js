const { Double_Decker, Coach, Mini_Bus } = require('./seats');


class seatingUtils {
  async DoubleDeckerFiltering(BookSeats = []) {
    const filteredSeats = Double_Decker.filter(allseat => !BookSeats.includes(allseat.seatNumber));
    return filteredSeats;
}

async CoachFiltering(BookSeats = []) {
    const filteredSeats = Coach.filter(allseat => !BookSeats.includes(allseat.seatNumber));
    return filteredSeats;
}

async MiniBusFiltering(BookSeats = []) {
    const filteredSeats = Mini_Bus.filter(allseat => !BookSeats.includes(allseat.seatNumber));
    return filteredSeats;
}
}

module.exports = new seatingUtils();
