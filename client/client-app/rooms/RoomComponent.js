import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, Colors } from "../styles";


const BookingTag = (booking) => {
    const {start, end, user} = booking.item;
    const dateString = (date) => date.getMonth() + "/" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes()
    return (
        <View style={roomComponentStyles.booking}>
            <Text style={roomComponentStyles.bookingTitle}>Booked By</Text>
            <Text style={roomComponentStyles.bookingSubTitle}>{user.name}</Text>
            <Text style={roomComponentStyles.bookingTime}>{dateString(start)} - {dateString(end)}</Text>
        </View>
    );
}
const RoomBookings = ({bookings}) => {
    return (
        <View>
            {bookings.length == 0 ?
                    <Text style={[roomComponentStyles.available, roomComponentStyles.bookingTitle]}>available</Text>
                :
                <FlatList showsVerticalScrollIndicator={false}
                    data={bookings}
                    keyExtractor={(item) => item.id}
                    renderItem={(b) => BookingTag(b)}
                />
            }
        </View>
    );
}
const RoomComponent = ({ room, callback, navigation }) => {
    return (
        <SafeAreaView>
                <TouchableOpacity
                    onPress={() => callback(room, navigation)}
                >
                    <View style={[
                        styles.eventComponentContainer,
                        { display: "flex", flexDirection: "row", alignItems: "center", padding: 15 }
                    ]}>
                    <View >
                        <View>
                            <Text style={styles.eventTextPrimary}>
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
                    </View>
                    <View >
                        <RoomBookings bookings={room.bookings} />
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const roomComponentStyles = StyleSheet.create({
    booking: {
        ...styles.eventTextSecondary,
        backgroundColor: Colors.red,
        color: Colors.white,
        borderRadius: 8,
        padding: 10,
        textAlign: "center"
    },
    bookingTitle: {
        fontWeight: "bold",
        fontSize: 14,
    },
    bookingSubTitle: {
        fontWeight: "500",
        fontSize: 14,
    },
    bookingTime: {

    },
    available: {
        ...styles.eventTextSecondary,
        backgroundColor: Colors.green,
        color: Colors.white,
        borderRadius: 16,
        padding: 2.5,
        textAlign: "center",
    }
});
export default RoomComponent;
