import { styles, textStyles, Colors } from "../styles";
import React from "react";

import {
    Text,
    SafeAreaView,
    View,
    StyleSheet
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";

const BookRoom = ({room, onBookRoom, navigation}) => {
    return (
        <View>
            <Text style={[textStyles.h2, roomDetailStyles.centered]}>
                {'Book Room'}
            </Text>

            <View style={styles.leftRightFlex}>
                <Text>Select Date</Text>
                <DateTimePicker mode="date" value={new Date()} style={styles.dateTimePicker} />
            </View>
            <View style={styles.leftRightFlex}>
                <Text>Select Time</Text>
                <DateTimePicker mode="time" value={new Date()} style={styles.dateTimePicker} />
            </View>

            <TouchableOpacity
                style={roomDetailStyles.bookButton}
                onPress={() => onBookRoom(room, navigation)}
            >
                <Text stlye={roomDetailStyles.bookButtonText}>Book Room</Text>
            </TouchableOpacity>
        </View>
    );
}

const EditBooking = () => {
    return (
        <Text>TODO</Text>
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
            { room.isBooked ? <EditBooking navigation={navigation} onBookRoom={onRoomBook} room={room}/> : <BookRoom /> }
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
    bookButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
    }
});
export default RoomDetail;
