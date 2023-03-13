import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, Image, 
         TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import { styles, textStyles, Colors } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { APPDATA } from "./data/AppData";

const EditEvent = ({route, navigation}) => {
    
    //States for all fields
    //TODO: Get Actual Text, Change date and time fields to actual date and time specific input fields
    const {id} = route.params;
    const eventmodel = APPDATA.getEvent(id);
    let init_description = eventmodel.description 
    let init_name = eventmodel.name


    const [desc, onChangeDesc] = useState(init_description);
    const [name, onChangeName] = useState(init_name);
    const [date, onChangeDate] = useState("Date");
    const [time, onChangeTime] = useState("Time");
    
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={textStyles.h1}>
                {'Edit Event'}
            </Text>
            <TouchableOpacity  
                onPress={() =>
                    //Navigation here
                    //x =1+2
                    navigation.navigate('TabRoot', {name: 'Jane'})
                }
            >
                <Text style={textStyles.h2}>
                    {"Cancel"}
                </Text>
            </TouchableOpacity>
                <View style={styles.eventEditContainer}>
                <ScrollView>
                    <View style={{}}>
                    <TextInput 
                    onChange={onChangeName}
                    value={name}
                    style={styles.singleLineEdit}/>

                    <View style = {editEventStyles.leftRightFlex}>
                        <Text>Select Date</Text>
                        <DateTimePicker mode="date" value={new Date()} style={styles.dateTimePicker} />
                    </View>
                    <View style = {editEventStyles.leftRightFlex}>
                        <Text>Select Time</Text>
                        <DateTimePicker mode="time" value={new Date()} style={styles.dateTimePicker} />
                    </View>
                    {/* <TextInput 
                    onChange={onChangeDate}
                    value={date}
                    style={styles.singleLineEdit}/>
                    <TextInput 
                    onChange={onChangeTime}
                    value={time}
            style={styles.singleLineEdit}/> */}
                    </View> 
                    
                    <View style={{}}>
                        <TextInput
                        multiline={true}
                        numberOfLines={10}
                        onChangeText={onChangeDesc}
                        value = {desc}
                        style = {{textAlignVertical: 'top',
                                height: 250,
                                borderWidth: 1,
                                borderColor: 'black',
                                paddingRight: 10,
                                paddingLeft: 10,
                                }}/>
                     </View>
                    <View style={editEventStyles.editButton}>
                        <TouchableOpacity 
                            style={editEventStyles.editText}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Text style={{fontWeight: "500"}}> Edit </Text>
                        </TouchableOpacity>
                    </View> 
                
                </ScrollView>
                </View>
        </SafeAreaView>
  );
}

export default EditEvent;

const editEventStyles = StyleSheet.create({
    leftRightFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
        justifyContent: "space-between",
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
    }, 
    editButton: {
        width: "90%",
        borderRadius: 16,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: Colors.green,
    },
    editText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
    }
});

