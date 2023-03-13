import { styles, textStyles } from "../styles";
import React from "react";

import {
    Text,
    SafeAreaView,
    View,
    FlatList
} from "react-native";

const RoomDetail = ({ }) => {
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={textStyles.h1}>
                {'Room Detail'}
            </Text>
        </SafeAreaView>
    );
}

export default RoomDetail;
