import { styles, textStyles, Colors } from "../styles";
import { useState, React } from "react";

import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native";
import { Booking } from "../models/RoomModel";

const BookDesk = ({room, handleChange, deskIdx, navigation}) => {
    let startDate = new Date()
    let endDate = new Date()

    return (
        <View>
            <Text style={[textStyles.h2, deskDetailStyles.centered]}>
                {'Book Room'}
            </Text>

            <View style={styles.leftRightFlex}>
                <Text>Start Date</Text>
                <DateTimePicker mode="date" value={startDate} style={styles.dateTimePicker} />
            </View>
            <View style={styles.leftRightFlex}>
                <Text>Start Time</Text>
                <DateTimePicker mode="time" value={startDate} style={styles.dateTimePicker} />
            </View>
            <View style={styles.leftRightFlex}>
                <Text>End Date</Text>
                <DateTimePicker mode="date" value={endDate} style={styles.dateTimePicker} />
            </View>
            <View style={styles.leftRightFlex}>
                <Text>End Time</Text>
                <DateTimePicker mode="time" value={endDate} style={styles.dateTimePicker} />
            </View>
            <TouchableOpacity
                style={deskDetailStyles.bookButton}
                onPress={() => {
                    const booking = new Booking(startDate, endDate, { name: "You" });
                    room.desks[deskIdx].bookings.push(booking);
                    handleChange(deskIdx)
                    navigation.goBack();
                }
                }
            >
                <Text style={deskDetailStyles.bookButtonText}>Book Room</Text>
            </TouchableOpacity>

        </View>
    );
}

const EditBooking = ({room, navigation, deskIdx,handleChange}) => {
    const dateString = (date) => date.getMonth() + "/" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes()
    const [reRenderState, setReRenderState] = useState(1)
    const BookingEntry = (bookingItem) => {
        let booking = bookingItem.item
        const { user, start, end } = booking;

        const updateBookingStart = (event, date) => {
            console.log("id", booking.id, booking)
            room.desks[deskIdx].bookings = room.desks[deskIdx].bookings.filter(b => b.id != booking.id)
            booking.user = user
            booking.start = date
            booking.end = end
            room.desks[deskIdx].bookings.push(booking)
            //handleChange(deskIdx)
        }
        const updateBookingEnd = (event, date) => {
            console.log("id", booking.id, booking)
            room.desks[deskIdx].bookings = room.desks[deskIdx].bookings.filter(b => b.id != booking.id)
            booking.user = user
            booking.start = start
            booking.end = date
            room.desks[deskIdx].bookings.push(booking)
            //handleChange(deskIdx)
        }

        

        return (
            <View>
                <View style={{borderWidth: 2, borderRadius: 8, padding: 5}}>
                    <View style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center"}}>
                        <Text style={styles.h2}>{dateString(start)} - {dateString(end)}</Text>
                        <Text>{user.name}</Text>
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>Start Date</Text>
                        <DateTimePicker mode="date" value={start} onChange={updateBookingStart} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>Start Time</Text>
                        <DateTimePicker mode="time" value={start} onChange={updateBookingStart} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>End Date</Text>
                        <DateTimePicker mode="date" value={end} onChange={updateBookingEnd} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>End Time</Text>
                        <DateTimePicker mode="time" value={end} onChange={updateBookingEnd} style={styles.dateTimePicker} />
                    </View>
                    <TouchableOpacity
                        style={deskDetailStyles.removeButton}
                        onPress={() => {
                            
                            console.log(room.desks[deskIdx].bookings.length);
                            room.desks[deskIdx].bookings = room.desks[deskIdx].bookings.filter(b => b.id != booking.id);
                            console.log(room.desks[deskIdx].bookings.length);
                            setReRenderState( (prevState) => {
                                return prevState + 1;
                            })
                            if (room.desks[deskIdx].bookings.length == 0) {
                                handleChange(deskIdx);
                            }

                            //handleChange(deskIdx)
                        }}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={deskDetailStyles.checkInButton}
                        onPress={() => {
                            booking = new Booking(start, end, { name: "You" });
                            room.desks[deskIdx].bookings.push(booking)
                            //handleChange(deskIdx)
                            room.desks[deskIdx].refresh = !room.desks[deskIdx].bookings
                            navigation.goBack()
                            
                        }
                        }
                    >
                        <Text style={deskDetailStyles.bookButtonText}>Check in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View>
            <Text style={[textStyles.h2, deskDetailStyles.centered]}>
                {'Current Bookings'}
            </Text>
            <FlatList showsVerticalScrollIndicator={false}
                data={room.desks[deskIdx].bookings}
                keyExtractor={(item) => item.id}
                renderItem={(b) => BookingEntry(b)}
                extraData={reRenderState}

            />

            {/* {
                room.desks[deskIdx].bookings.map((item)=> <BookingEntry booking={item}/>)
            } */}
        </View>
    );
}


const DeskDetail = ({ route, navigation }) => {
    const { room, idx, handleChange } = route.params;
    console.log(idx);
    return (
        <SafeAreaView style={[styles.safeViewContainer, deskDetailStyles.viewPort]}>
        <ScrollView>
            <View>
                <Text style={textStyles.h1}>
                    {room.name}
                </Text>
                <Text style={styles.eventTextSecondary}>
                    Noise Level: {room.noiseLevel}
                </Text>
                <Text style={styles.eventTextSecondary}>
                    Occupancy Limit: {room.occupancyLimit}
                </Text>
                <Text style={styles.eventTextSecondary}>
                    Temperature: {room.temperature}°
                </Text>
            </View>
            <EditBooking navigation={navigation} room={room} handleChange={handleChange} deskIdx={idx}/>  
            <BookDesk navigation={navigation} handleChange={handleChange} room={room} deskIdx={idx}/> 
            <TouchableOpacity
                style={deskDetailStyles.doneButton}
                onPress={() => {
                    navigation.goBack();
                }
                }
            >
                <Text style={deskDetailStyles.bookButtonText}>Done</Text>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    );
}

const deskDetailStyles = StyleSheet.create({
    viewPort: {
        display: "flex",
        marginHorizontal: 10
    },
    centered: {
        width: "100%",
        textAlign: "center"
    },
    bookButton: {
        width: "100%",
        borderRadius: 16,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 20,
        backgroundColor: Colors.green,
    },
    checkInButton: {
        width: "100%",
        borderRadius: 16,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.green,
    },
    doneButton: {
        width: "100%",
        borderRadius: 16,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 20,
        backgroundColor: Colors.blue,
    },
    bookButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    removeButton: {
        width: "100%",
        borderRadius: 16,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 20,
        backgroundColor: Colors.red,
        color: Colors.white
    }
});
export default DeskDetail;
