import EventModel from "../models/EventModel";
import SettingsModel from "../models/SettingsModel";
import { RoomModel, Booking } from "../models/RoomModel";
import User from "../models/User";

const e1 = new EventModel('1', 'Office Potluck', '10-24-22', '1:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e2 = new EventModel('2', 'Coffee and Donuts', '10-26-22', '9:30 AM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e3 = new EventModel('3', 'Catered Lunch', '10-27-22', '1:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e4 = new EventModel('4', 'Halloween Party', '10-31-22', '6:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.");
const e5 = new EventModel('5', 'Staff Appreciation Dinner', '11-04-22', '7:00 PM', null, "This is a placeholder description to test the client application. Please RSVP at least a day before each event.")


export const EVENTS = [
    e1,
    e2,
    e3,
    e4,
    e5,
]

export const SETTINGS = new SettingsModel('s1', 'John Garrett', 'jgarrett47@gatech.edu', 'admin', 'Low', 70, 'Room 401A - Tower 1');

const user = new User("Jacob Reinier");
const booking = new Booking(new Date('2023-03-13T10:10:00'), new Date('2023-03-13T14:30:00'), user);
const r1 = new RoomModel('r1', 'Room 1', 'low', 15, 65, 15, []);
const r2 = new RoomModel('r2', 'Room 2', 'high', 20, 68, 25, [booking]);

const r3 = new RoomModel('r3', 'Room 3', 'high', 23, 72, 17, []);
const r4 = new RoomModel('r4', 'Room 4', 'high', 20, 71, 19, [booking]);

const r5 = new RoomModel('r5', 'Room 5', 'low', 19, 78, 5, []);
const r6 = new RoomModel('r6', 'Room 6', 'high', 2, 68, 2, [booking]);

export const ROOMS = [
    r1, 
    r2,
    r3,
    r4,
    r5,
    r6
]
