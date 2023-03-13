import { styles, textStyles } from "../styles";
import React from "react";

import {
    Text,
    SafeAreaView,
    View,
    FlatList
} from "react-native";

const RoomDetail = ({ route, navigation }) => {
    const { room } = route.params;
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={textStyles.h1}>
                {'Room Detail'}
            </Text>
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
        </SafeAreaView>
    );
}

export default RoomDetail;
