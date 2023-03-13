import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { styles, Colors } from "../styles";



const RoomComponent = ({ name, noiseLevel, occupancyLimit, temperature, numDesks, available }) => {

    return (
        <SafeAreaView>
            <View style={styles.eventComponentContainer}>
                <View style={styles.eventLeftContainer}>
                    <View>
                        <Text style={styles.eventTextPrimary}>
                            {name}
                        </Text>
                        <Text style={available ? RoomComponentStyles.available : RoomComponentStyles.unavailable}>
                            {available ? "available" : "unavailable"}
                        </Text>
                        <Text style={styles.eventTextSecondary}>
                            Noise Level: {noiseLevel}
                        </Text>
                        <Text style={styles.eventTextSecondary}>
                            Occupancy Limit: {occupancyLimit}
                        </Text>
                        <Text style={styles.eventTextSecondary}>
                            Temperature: {temperature}°
                        </Text>
                        <Text style={styles.eventTextSecondary}>
                            Number of Desks: {numDesks}
                        </Text>
                    </View>
                </View>
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
