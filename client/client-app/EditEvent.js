import { useState } from "react";
import { View, SafeAreaView, Pressable, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList, Alert, Image} from "react-native";
import { styles, textStyles, Colors } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import EventModel from "./models/EventModel";
import { APPDATA } from "./data/AppData";
import { ROOMS } from "./data/DummyData";

const EditEvent = ({route, navigation}) => {
    
    //States for all fields
    //TODO: Get Actual Text, Change date and time fields to actual date and time specific input fields
    const {id} = route.params;
    const eventmodel = APPDATA.getEvent(id);
    let init_description = eventmodel.description 
    let init_name = eventmodel.name
    let init_room = eventmodel.location
    let init_date = eventmodel.date
    let init_time = eventmodel.time
    const [selectedRoom, setSelectedRoom] = useState(init_room);
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
    
    const [eventName, setEventName] = useState(init_name);
    const [descriptionText, setDescriptionText] = useState(init_description);
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


    const dateString = init_date;
    const dateParts = dateString.split("-");
    
    // The Date constructor takes year, month (0-indexed), and day as arguments
    const dateObject = new Date(
      2000 + parseInt(dateParts[2]), // add 2000 to get full year
      parseInt(dateParts[0]) - 1, // subtract 1 from month to make it 0-indexed
      parseInt(dateParts[1])
    );



    const [date, setDate] = useState(dateObject);

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

        eventmodel.name = eventName;
        eventmodel.location = selectedRoom;
        eventmodel.date = date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit'
          }).replace(/\//g, '-')
        eventmodel.time = time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
          eventmodel.description = descriptionText
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
              {'Edit Event'}
            </Text>
          </View>
          <View style={styles.headerSeperator}>
            
          </View>
        </View>
        <View style={addEventStyles.addEventContainer}>
            <View style={addEventStyles.textEntryContainerMain}>
                <TextInput placeholder={init_name} style={addEventStyles.textEntryFont} placeholderTextColor={'black'} onChangeText={onEventNameTextChange}></TextInput>
            </View>
            <View style={addEventStyles.textEntryContainerMain}>
                <Pressable onPress={openRoomModalHandler}>
                    <Text style={addEventStyles.textEntryFont}>{selectedRoom}</Text>
                </Pressable>
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Date</Text>
                <DateTimePicker mode="date" value={date} style={styles.dateTimePicker} onChange={changeDate} />
            </View>
            <View style={addEventStyles.leftRightFlex}>
                <Text>Select Time</Text>
                <DateTimePicker mode="time" value={time} style={styles.dateTimePicker} onChange={changeTime} />
            </View>
            <View style={addEventStyles.textEntryContainerSecondary}>
                <TextInput placeholder={init_description} style={[addEventStyles.textEntryFont]} placeholderTextColor={'black'} onChangeText={onDescriptionTextChange}></TextInput>
            </View>
            <View style={addEventStyles.createButton}>
                <TouchableOpacity 
                    style={addEventStyles.createText}
                    onPress={createEventHandler}
                >
                    <Text style={{fontWeight: "500"}}> Edit </Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
} 
export default EditEvent;


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