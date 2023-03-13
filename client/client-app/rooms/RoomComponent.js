import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, Colors } from "../styles";


const BookingTag = (booking) => {
    const {start, end, user} = booking.item;
    return (
        <View style={roomComponentStyles.booking}>
            <Text style={roomComponentStyles.bookingTitle}>Booked By</Text>
            <Text style={roomComponentStyles.bookingSubTitle}>{user.name}</Text>
            <Text style={roomComponentStyles.bookingTime}>{start} - {end}</Text>
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
    console.log(room.bookings)
    return (
        <SafeAreaView>
            <View style={styles.eventComponentContainer}>
                <TouchableOpacity
                    onPress={() => callback(room, navigation)}
                    disabled={!room.available}
                >
                    <View style={styles.eventLeftContainer}>
                        <View>
                            <Text style={styles.eventTextPrimary}>
                                {room.name}
                            </Text>
                            <RoomBookings bookings={room.bookings} />
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
                </TouchableOpacity>
            </View>
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
        textAlign: "center"
    }
});
export default RoomComponent;
