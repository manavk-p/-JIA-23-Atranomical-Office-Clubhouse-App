import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import styles from "../styles";



const RoomComponent = ({ name, noiseLevel, occupancyLimit, temperature, numDesks }) => {

    return (
        <SafeAreaView>
            <View style={styles.eventComponentContainer}>
                <View style={styles.eventLeftContainer}>
                    <View>
                        <Text style={styles.eventTextPrimary}>
                            {name}
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

export default RoomComponent;