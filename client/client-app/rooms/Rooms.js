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
import RoomModel from "../models/RoomModel";

function renderRoomComponent(itemData) {
    return (<RoomComponent
        room={itemData.item}
        callback={onRoomClick}
    />
    );
}

const onRoomClick = (room) => {
    console.log("room clicked", room)
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
