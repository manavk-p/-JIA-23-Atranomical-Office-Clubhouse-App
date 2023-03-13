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

function renderRoomComponent(data, navigation) {
    return (<RoomComponent
        room={data.item}
        callback={onRoomClick}
        navigation={navigation}
    />
    );
}

const onRoomClick = (room, navigation) => {
    console.log("room clicked", room)
    params = {
        room: room,
    }
    console.log(params)
    navigation.navigate("RoomDetail", params);
}

const Rooms = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={textStyles.h1}>
                {'Rooms'}
            </Text>
            <View style={styles.eventListContainer}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={(ROOMS.sort((a, b) => b.available - a.available))}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => renderRoomComponent(item, navigation)}
                />
            </View>
        </SafeAreaView>
    );
}

export default Rooms;
