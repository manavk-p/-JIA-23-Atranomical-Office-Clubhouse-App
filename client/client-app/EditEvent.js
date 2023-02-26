import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, Image, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import { EVENTS } from "./Events"


const EditEvent = ({navigation, id}) => {
    //TODO: Get Event

    //States for all fields
    //TODO: Get Actual Text, Change date and time fields to actual date and time specific input fields
    const [desc, onChangeDesc] = useState("Placeholder text");
    const [name, onChangeName] = useState("Name");
    const [date, onChangeDate] = useState("Date");
    const [time, onChangeTime] = useState("Time");
    
    return (
        <SafeAreaView style={styles.safeViewContainer}>
            <Text style={styles.titleText}>
                {'Edit Event'}
            </Text>
            <TouchableOpacity  
                onPress={() =>
                    //Navigation here
                    //x =1+2
                    navigation.navigate('TabRoot', {name: 'Jane'})
                }
            >

                <Text style={styles.eventTextSecondary}>
                    {"Test + " + id}
                </Text>
            </TouchableOpacity>
            
            
            
                <View style={styles.eventEditContainer}>
                <ScrollView>
                    <View style={{
                        
                    }}>
                    <TextInput 
                    onChange={onChangeName}
                    value={name}
                    style={styles.singleLineEdit}/>
                    <TextInput 
                    onChange={onChangeDate}
                    value={date}
                    style={styles.singleLineEdit}/>
                    <TextInput 
                    onChange={onChangeTime}
                    value={time}
                    style={styles.singleLineEdit}/>
                    </View>
                    
                    <View style={{
                        marginBottom: 100,
                    }}>
                        <TextInput
                        multiline={true}
                        numberOfLines={10}
                        onChangeText={onChangeDesc}
                        value={desc}
                        style={{ textAlignVertical: 'top',
                                height: 250,
                                borderWidth: 1,
                                borderColor: 'black',
                                paddingRight: 10,
                                paddingLeft: 10,
                                }}/>
                     </View>
                        
             

                </ScrollView> 
                </View>
             
            

        </SafeAreaView>
  );
}

export default EditEvent;

