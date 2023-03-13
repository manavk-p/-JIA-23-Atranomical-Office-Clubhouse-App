import { View, SafeAreaView, Pressable, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { styles, textStyles, Colors } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEvent = ({navigation}) => {
    return (
        <SafeAreaView style={styles.eventScreenContainer}>
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
                <Pressable>
                    <Text style={addEventStyles.textEntryFont}>Select Location</Text>
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
                        navigation.goBack()
                    }}
                >
                    <Text style={{fontWeight: "500"}}> Create </Text>
                </TouchableOpacity>
            </View>
        </View>
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
