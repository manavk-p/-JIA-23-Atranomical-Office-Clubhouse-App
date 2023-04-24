# Office-Clubhouse-App
Application for AstraZeneca and CS-3312/LMC-3431.  Desk booking and Office notification software for returning to in-person working. 

# Installation
## Pre-requisites / Third-party software
npm and Node.js must be installed before any further steps can be taken. If on Mac, xcode developer tools are likely needed as well to run simulators. Instead of using a simulator, you can use an iPhone as well to run the application and develop using Expo. Dowload the Expo Go app onto your iPhone to use this. 

## Download Instructions
Download the repository off GitHub using the command below.
```
git clone https://github.com/manavk-p/JIA-2318-Astranomical-Office-Clubhouse-App.git
```


## Build Instructions
The main requirements to install are related to the react-native application. 

Install react native cli
```
npm install -g react-native-cli
```
Install local dependencies
```
JIA-2318-Astranomical-Office-Clubhouse-App
cd client/client-app
npm i
```

Run application - scan the QR code that shows up in the terminal using a device that has Expo Go installed.
```
npm start
```

## Troubleshooting
Check the npm and Node.js versions using the commands below. node v16.18.1 and npm v8.19.2 are known to work.
```
npm -v
node -v
```
Make sure react-native is installed according to the version in the package.json file as well. 

# Release Notes
## v1.0.0
### Features
* Desks screen - desk discovery, booking
* Events screen - event discovery, editing
* Settings screen - viewing settings, editing user preferences
* Settings screen - displaying user settings and logging out
### Bug Fixes
* Scrolling issues on events page, rooms page
* Displaying new data on events page
* Desk bookings on iOS
### Known Issues
* Displaying a new event after adding
* Adding new images to an event
* Editing user preference settings
## v.0.4.0
### Features
* Added desk map to desks screen
* Booking details on rooms page
* Editing user preferences on settings page
### Bug Fixes
* Styling issues on desks page
* Images not displaying correctly on events page
### Known Issues
* Scroll not working on events page
## v.0.3.0
### Features
* Edit events page
* Desks screen
* Editing room bookings
* Creating room bookings
### Bug Fixes
* Edit events button non-functional
## v.0.2.0
### Features
* Events Page
### Bug Fixes
* Logout button
## v.0.1.0
### Features
* Login Screen
### Bug Fixes
* React Native Set Up
* Database Set Up