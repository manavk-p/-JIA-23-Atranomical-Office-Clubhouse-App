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

function renderRoomComponent(data, navigation, handleChange) {
    return (<RoomComponent
        room={data.item}
        callback={handleChange}
        navigation={navigation}
    />
    );
}

const onRoomClick = (room, navigation, handleChange) => {
    console.log("room clicked", room)
    params = {
        room: room,
        onRoomBook: onRoomBook,
        handleChange: handleChange
    }
    console.log(params)
    navigation.navigate("RoomDetail", params);
}

const onRoomBook = ({room}) => {
    console.log("booked", room)
}

const Rooms = ({ navigation }) => {
    const [rooms, setRooms] = React.useState(ROOMS);

    function handleChange(newValue) {
        console.log("new value", newValue)
        // TODO: add room to array
        newRooms = ROOMS.filter(r => r.name != newValue.name)
        newRooms.push(newValue)
      setRooms(newRooms);
        params = {
            room: newValue,
            onRoomBook: onRoomBook,
            handleChange: handleChange
        }
        console.log(params)
        navigation.navigate("RoomDetail", params);
    }
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={textStyles.h1}>
                {'Rooms'}
            </Text>
            <View style={styles.eventListContainer}>
                <FlatList showsVerticalScrollIndicator={false}
                    //data={(ROOMS.sort((a, b) => b.available - a.available))}
                    data={rooms}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => renderRoomComponent(item, navigation, handleChange)}
                />
            </View>
        </SafeAreaView>
    );
}

export default Rooms;
