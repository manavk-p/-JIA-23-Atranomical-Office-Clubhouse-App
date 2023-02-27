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

    get id() { return this._id; }
    
    set id(id) { this._id = id; }

    get name() { return this._name; }

    set name(name) { this._name = name; }

    get date() { return this._date; }   

    set date(date) { this._date = date; }

    get time() { return this._time; }

    set time(time) { this._time = time; }

    get imgSrc() { return this._imgSrc; }

    set imgSrc(imgSrc) { this._imgSrc = imgSrc; }

    get description() { return this._description; }

    set description(description) { this._description = description; }
}
export default EventModel;