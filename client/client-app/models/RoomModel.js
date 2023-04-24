
class Booking {
    constructor(start, end, user) {
        this.start = start;
        this.end = end;
        this.user = user;
        this.id = Math.random() * 1000
    }
}

class Desk {
    constructor(id, name, bookings) {
        this.id = id;
        this.name = name;
        this.bookings = bookings;
        this.refresh = false;
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
        this.desks = [];
        this.create_desks();    
    }


    create_desks() {
        for (var i = 0; i < this.numDesks; i++) {
            id = this.id + "d" + i;
            this.desks.push(new Desk(id, "Desk " + i, []));
        }
    }
}
export { Booking, RoomModel, Desk };
