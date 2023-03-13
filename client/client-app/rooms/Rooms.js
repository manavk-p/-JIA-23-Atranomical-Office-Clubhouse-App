import { styles, textStyles } from "../styles";
import React from "react";

import {
    Text,
    SafeAreaView,
    View,
    FlatList
} from "react-native";
import { ROOMS } from "../data/DummyData";
import RoomComponent from "./RoomComponent";

function renderRoomComponent(itemData) {
    return (<RoomComponent
        name={itemData.item.name}
        noiseLevel={itemData.item.noiseLevel}
        occupancyLimit={itemData.item.occupancyLimit}
        temperature={itemData.item.temperature}
        numDesks={itemData.item.numDesks}
        available={itemData.item.available}
    />
    );
}

const Rooms = ({ }) => {
    return (
        <SafeAreaView style={styles.safeViewContainer}>

            <Text style={textStyles.h1}>
                {'Rooms'}
            </Text>
            <View style={styles.eventListContainer}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={(ROOMS.sort((a, b) => b.available - a.available))}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRoomComponent}
                />
            </View>
        </SafeAreaView>
    );
}

export default Rooms;
