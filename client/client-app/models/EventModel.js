class EventModel {
    constructor(id, name, date, time, imgSrc, description) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.imgSrc = imgSrc; // When we begin to add images, we should probably move 
                              // image representation away from a file path. Maybe a database ID?
        this.description = description;
    }

}
export default EventModel;