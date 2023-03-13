import { styles, textStyles, Colors } from "../styles";
import React from "react";

import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    FlatList
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";

const BookRoom = ({room, onBookRoom, navigation}) => {
    let startDate = new Date()
    let endDate = new Date()

    return (
        <View>
            <Text style={[textStyles.h2, roomDetailStyles.centered]}>
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
                style={roomDetailStyles.bookButton}
                onPress={() => navigation.goBack()}
            >
                <Text stlye={roomDetailStyles.bookButtonText}>Book Room</Text>
            </TouchableOpacity>

        </View>
    );
}

const EditBooking = ({room, navigation}) => {
    const dateString = (date) => date.getMonth() + "/" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes()
    const BookingEntry = (booking) => {
        const { user, start, end } = booking.item;
        return (
            <View>
                <View style={{borderWidth: 2, borderRadius: 8, padding: 5}}>
                    <View style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center"}}>
                        <Text style={styles.h2}>{dateString(start)} - {dateString(end)}</Text>
                        <Text>{user.name}</Text>
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>Start Date</Text>
                        <DateTimePicker mode="date" value={start} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>Start Time</Text>
                        <DateTimePicker mode="time" value={start} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>End Date</Text>
                        <DateTimePicker mode="date" value={end} style={styles.dateTimePicker} />
                    </View>
                    <View style={styles.leftRightFlex}>
                        <Text>End Time</Text>
                        <DateTimePicker mode="time" value={end} style={styles.dateTimePicker} />
                    </View>
                    <TouchableOpacity
                        style={roomDetailStyles.checkInButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text stlye={roomDetailStyles.bookButtonText}>Check in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View>
            <Text style={[textStyles.h2, roomDetailStyles.centered]}>
                {'Current Bookings'}
            </Text>
            <FlatList showsVerticalScrollIndicator={false}
                data={room.bookings}
                keyExtractor={(item) => item.id}
                renderItem={(b) => BookingEntry(b)}
            />
        </View>
    );
}


const RoomDetail = ({ route, navigation }) => {
    const { room, onRoomBook } = route.params;

    return (
        <SafeAreaView style={[styles.safeViewContainer, roomDetailStyles.viewPort]}>
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
                <Text style={styles.eventTextSecondary}>
                    Number of Desks: {room.numDesks}
                </Text>
            </View>
            { 
                room.bookings.length > 0 ?
                    <EditBooking navigation={navigation} room={room}/> 
                    : <BookRoom navigation={navigation} onBookRoom={onRoomBook} room={room}/> 
            }
            <TouchableOpacity
                style={roomDetailStyles.doneButton}
                onPress={() => navigation.goBack()}
            >
                <Text stlye={roomDetailStyles.bookButtonText}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const roomDetailStyles = StyleSheet.create({
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
        fontSize: 25,
        fontWeight: '500',
    }
});
export default RoomDetail;
