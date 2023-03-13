import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, Colors } from "../styles";



const RoomComponent = ({ room, callback }) => {

    return (
        <SafeAreaView>
            <View style={styles.eventComponentContainer}>
                <TouchableOpacity
                    onPress={() => callback(room)}
                    disabled={!room.available}
                >
                    <View style={styles.eventLeftContainer}>
                        <View>
                            <Text style={styles.eventTextPrimary}>
                                {room.name}
                            </Text>
                            <Text style={room.available ? RoomComponentStyles.available : RoomComponentStyles.unavailable}>
                                {room.available ? "available" : "unavailable"}
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
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const RoomComponentStyles = StyleSheet.create({
    available: {
        ...styles.eventTextSecondary,
        backgroundColor: Colors.green,
        color: Colors.white,
        borderRadius: 16,
        padding: 2.5,
        textAlign: "center"
    },
    unavailable: {
        ...styles.eventTextSecondary,
        backgroundColor: Colors.red,
        color: Colors.white,
        borderRadius: 16,
        padding: 2.5,
        textAlign: "center"
    }
});
export default RoomComponent;
