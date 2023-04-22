import { useState } from "react";
import { View, SafeAreaView, Pressable, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList, Alert, Image} from "react-native";
import { styles, textStyles, Colors } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ROOMS } from "./data/DummyData";
import EventModel from "./models/EventModel";
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
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState("event name");
    function roomSelectedHandler(roomSelected){
        console.log(roomSelected)
        setSelectedRoom(roomSelected);
        closeRoomModalHandler();
    }
    
    const [eventName, setEventName] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    function renderEventComponent(itemData) {
        
        return (
            <View style={addEventStyles.roomItemStyle}>
                <Pressable onPress={() => roomSelectedHandler(itemData.item.name)} hitSlop={{top: 10, bottom: 10, left: 10, right: 40}}>
                    <Text style={{color: 'white'}}>{itemData.item.name}</Text>
                </Pressable>
            </View>
        );
      }

      function onEventNameTextChange(inputText) {
        setEventName(inputText);
      }

    function onDescriptionTextChange(inputText) {
        setDescriptionText(inputText);
    }
    const [date, setDate] = useState(new Date());

    function changeDate(event, selectedDate) {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        console.log(currentDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
          }).replace(/(\d)(?=(\d{2})+$)/g, '$1st,'));
    }

    const [time, setTime] = useState(new Date());

    function changeTime(event, selectedTime) {
        const currentTime = selectedTime || time;
        setTime(currentTime);
        console.log(time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          }));
    }
    
    function createEventHandler() {

        if (eventName.length === 0) {
            setAlertText("event name");
            setAlertVisible(true);
            return;
        }
        if (selectedRoom === "Select Location") {
            setAlertText("room")
            setAlertVisible(true);
            return;
        }
        if (date < new Date()) {
            setAlertText("date");
            setAlertVisible(true);
            return;
        }
        if (descriptionText.length === 0) {
            setAlertText("description");
            setAlertVisible(true);
            return;
        }


        const e1 = new EventModel('1', eventName, date.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: '2-digit'
        }).replace(/\//g, '-')
        , 
        time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
        , null,descriptionText, selectedRoom);
        APPDATA.addEvent(e1);
        navigation.navigate('Events', {updateId: true})
        }

        function closeAlertHandler() {
            setAlertVisible(false);
        }
        
    return (
        <SafeAreaView style={styles.eventScreenContainer}>
        <ScrollView>
        <Modal style={addEventStyles.roomSelectModal} transparent={true} animationType="fade" visible={roomSelectVisible}>
            <View style={addEventStyles.roomSelectModalView}>
                <FlatList data={ROOMS} keyExtractor={(item) => item.id}
          renderItem={renderEventComponent}>
                    
                </FlatList>
            </View>
        </Modal>
        <Modal style={addEventStyles.errorModal} transparent={true} animationType="slide" visible={alertVisible}>
            <TouchableOpacity onPress={closeAlertHandler}>
            <View style={addEventStyles.errorModalView}>
                <Image source={require('../client-app/assets/images/error.jpeg')} style={addEventStyles.errorImage}/>
                <Text>
                    Please enter a valid {alertText}
                </Text>
            </View>
            </TouchableOpacity>
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
                <TextInput placeholder="Event Name" style={addEventStyles.textEntryFont} placeholderTextColor={'black'} onChangeText={onEventNameTextChange}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable onPress={openRoomModalHandler}>
                    <Text style={addEventStyles.textEntryFont}>{selectedRoom}</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Date</Text>
                <DateTimePicker mode="date" value={date} style={styles.dateTimePicker} onChange={changeDate}/>
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Time</Text>
                <DateTimePicker mode="time" value={time} style={styles.dateTimePicker} onChange={changeTime} />
            </View>
            <View style={addEventStyles.textEntryContainerSecondary}>
                <TextInput placeholder="Description" style={[addEventStyles.textEntryFont]} placeholderTextColor={'black'} onChangeText={onDescriptionTextChange}></TextInput>
            </View>
            <View style={addEventStyles.createButton}>
                <TouchableOpacity 
                    style={addEventStyles.createText}
                    onPress={createEventHandler}
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
        marginLeft: 5,
        color: 'black'
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
    },
    roomItemStyle: {
        backgroundColor: '#00A36C',
        width: 200,
        height: 40,
        marginBottom: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roomSelectModal: {
        height: 200,
        width: 200,
        margin: 50  
    },
    roomSelectModalView: {
        height: 200,
        width: 200,
        backgroundColor: 'white',
        top: 215,
        left: 50,
        borderRadius: 15
    },
    errorModal: {
        height: 200,
        width: 200,
        margin: 50
    },
    errorModalView: {
        height: 280,
        width: 300,
        backgroundColor: 'white',
        top: 270,
        left: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorImage: {
        height: 100,
        width: 100,
        marginTop:10,
        marginBottom: 30
    }
});


