
class Booking {
    constructor(start, end, user) {
        this.start = start;
        this.end = end;
        this.user = user;
        this.id = Math.random() * 1000; 
    }
}

class RoomModel {
    constructor(id, name, noiseLevel, occupancyLimit, temperature, numDesks, bookings) {
        this.id = id;
        this.name = name;
        this.noiseLevel = noiseLevel;
        this.occupancyLimit = occupancyLimit;
        this.temperature = temperature;
        this.numDesks = numDesks;
        this.bookings = bookings;
        this.id = Math.random() * 1000; 
    }
}
export { Booking, RoomModel };
