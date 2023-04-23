import EventModel from "../models/EventModel";
import { EVENTS } from "../data/DummyData";

class AppData {
    constructor() {
        this.EVENTS = new Map();
        this.USERNAME = "";
        this.EMAIL = "";
        this.PERMISSIONS = 0;
        this.eventCounter = 0; //This should be replaced with a methodology to assign unique event ids
                               //from the database
        this.FLOORS = new Map();
        this.floorCounter = 0;
    }

    //These getters and setters have some additional class overhead where we shouldn't access them directly
    //If theres a more functional way to do this, we should implement it in the future.    
    addEvent(eventmodel) {
        this.eventCounter++;
        eventmodel.id = this.eventCounter;

        this.EVENTS.set(this.eventCounter, eventmodel);
        
    }

    getEvent(key) {
        return this.EVENTS.get(key);
    }

    addEvents(name, date, time, imgSrc, description) {
        this.eventCounter++;
        this.EVENTS.set(this.eventCounter, new EventModel(this.eventCounter, name, date, time, imgSrc, description));
    }

    removeEvent(key) {
        //Do not decrement ID here. 
        tmp = this.EVENTS.get(key);
        this.EVENTS.delete(key);
        return tmp;
    }
    
    //Needed because rendering needs a list of events
    getEventList() {
        return Array.from(this.EVENTS.values());
    }

    addFloor(floorModel) {
        this.floorCounter++;
        floorModel.id = this.floorCounter
        this.FLOORS.set(this.eventCounter, floorModel);
    }

}



let tmp = new AppData();
//Fetch intial events from server. 
//For now, we will call a populate dummy events here.
for (let i = 0; i < EVENTS.length; i++) {

    tmp.addEvent(EVENTS[i]);
}
export const APPDATA = tmp;


