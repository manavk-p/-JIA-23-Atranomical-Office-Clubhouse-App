import { useState } from "react";
import { View, SafeAreaView, Pressable, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList} from "react-native";
import { styles, textStyles, Colors } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ROOMS, EVENTS } from "./data/DummyData";
import EventModel from "./models/EventModel";
import Events from "./Events";
import { APPDATA } from "./data/AppData";
const AddEvent = ({navigation}) => {

    const rooms = useState(ROOMS);

    const [selectedRoom, setSelectedRoom] = useState("Select Location");
    function openRoomModalHandler() {
        setRoomSelectVisible(true);
        console.log("Select Event!");
    }

    function closeRoomModalHandler() {
        setRoomSelectVisible(false);
        console.log("Closed room menu!");
    }
    const [roomSelectVisible, setRoomSelectVisible] = useState(false);

    function roomSelectedHandler(roomSelected){
        console.log(roomSelected)
        setSelectedRoom(roomSelected);
        setRoomSelectVisible(false);
    }

    function renderEventComponent(itemData) {
        
        return (
            <View style={{backgroundColor: 'black', width: 200, height: 40, marginBottom: 2, borderRadius: 10}}>
                <Pressable onPress={() => roomSelectedHandler(itemData.item.name)} hitSlop={{top: 10, bottom: 10, left: 10, right: 40}}>
                    <Text style={{color: 'white'}}>{itemData.item.name}</Text>
                </Pressable>
            </View>
        );
      }


    return (
        <SafeAreaView style={styles.eventScreenContainer}>
        <ScrollView>
        <Modal style={{height: 200, width: 200, margin: 50  }} transparent={true} animationType="fade" visible={roomSelectVisible}>
            <View style={{height: 200, width: 200, backgroundColor: 'white', top: 215, left: 50, borderRadius: 15}}>
                <FlatList data={ROOMS} keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}>
                    
                </FlatList>
            </View>
        </Modal>
        <View>
          <View style={styles.screenHeader}>
            <Text style={textStyles.h1}>
              {'Create Event'}
            </Text>
          </View>
          <View style={styles.headerSeperator}>
            
          </View>
        </View>
        <View style={addEventStyles.addEventContainer}>
            <View style={addEventStyles.textEntryContainerMain}>
                <TextInput placeholder="Event Name" style={addEventStyles.textEntryFont}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable onPress={openRoomModalHandler}>
                    <Text style={addEventStyles.textEntryFont}>{selectedRoom}</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Date</Text>
                <DateTimePicker mode="date" value={new Date()} style={styles.dateTimePicker} />
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Time</Text>
                <DateTimePicker mode="time" value={new Date()} style={styles.dateTimePicker} />
            </View>
            <View style={addEventStyles.textEntryContainerSecondary}>
                <TextInput placeholder="Description" style={[addEventStyles.textEntryFont]}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable>
                <Text style={addEventStyles.textEntryFont}>Add Image</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.createButton}>
                <TouchableOpacity 
                    style={addEventStyles.createText}
                    onPress={() => {
                        // EVENTS.push(new EventModel('6', 'Test', 'Test', 'Test', 'test', 'test'));
                        console.log('pressed');
                        APPDATA.addEvent(new EventModel('6', 'Test', 'Test', 'Test', 'test', 'test'));
                        navigation.goBack()
                    }}
                >
                    <Text style={{fontWeight: "500"}}> Create </Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default AddEvent;

const addEventStyles = StyleSheet.create({
    leftRightFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
        justifyContent: "space-between",
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
    },
    addEventContainer: {
        flex: .88,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 15
    },
    textEntryContainerMain: {
        width: "90%",
        height: 30,
        backgroundColor: Colors.inputBg,
        marginBottom: 15
    },
    textEntryFont: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 5
    },
    textEntryContainerSecondary: {
        width: "90%",
        height: 260,
        backgroundColor: Colors.inputBg,
        marginBottom: 15
    },
    createButton: {
        width: "90%",
        borderRadius: 16,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: Colors.green,
    },
    createText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
    }
});
