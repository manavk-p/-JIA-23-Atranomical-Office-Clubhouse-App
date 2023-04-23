
class DeskBooking {
    constructor(start, end, user) {
        this.start = start;
        this.end = end;
        this.user = user;
        this.id = Math.random() * 1000; 
    }
}

class Desk {
    constructor(id, name, floor, bookings) {
        this.id = id;
        this.name = name;
        this.floor = floor;
        this.bookings = bookings;
    }
}

class Floor {
    constructor(id, name, noiseLevel, occupancyLimit, temperature, numDesks) {
        this.id = id;
        this.name = name;
        this.noiseLevel = noiseLevel;
        this.occupancyLimit = occupancyLimit;
        this.temperature = temperature;
        this.numDesks = numDesks;
        this.id = Math.random() * 1000; 
        this.desks = [];
        this.create_desks();
    }

    create_desks() {
        for (var i = 0; i < this.numDesks; i++) {
            id = this.id + "d" + i;
            this.desks.push(new Desk(id, "Desk " + i, this, []));
        }
    }
    
}
export { DeskBooking, Desk, Floor };
