class RoomModel {
    constructor(id, name, noiseLevel, occupancyLimit, temperature, numDesks) {
        this.id = id;
        this.name = name;
        this.noiseLevel = noiseLevel;
        this.occupancyLimit = occupancyLimit;
        this.temperature = temperature;
        this.numDesks = numDesks;
    }
}
export default RoomModel;