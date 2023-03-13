class RoomModel {
    constructor(id, name, noiseLevel, occupancyLimit, temperature, numDesks, available) {
        this.id = id;
        this.name = name;
        this.noiseLevel = noiseLevel;
        this.occupancyLimit = occupancyLimit;
        this.temperature = temperature;
        this.numDesks = numDesks;
        this.available = available;
    }
}
export default RoomModel;
