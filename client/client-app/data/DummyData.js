import EventModel from "../models/EventModel";

const e1 = new EventModel('e1', 'Office Potluck', '10-24-22', '1:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e2 = new EventModel('e2', 'Coffee and Donuts', '10-26-22', '9:30 AM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e3 = new EventModel('e3', 'Catered Lunch', '10-27-22', '1:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e4 = new EventModel('e4', 'Halloween Party', '10-31-22', '6:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e5 = new EventModel('e5', 'Staff Appreciation Dinner', '11-04-22', '7:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.")


export const EVENTS = [
    e1,
    e2,
    e3,
    e4,
    e5,
]