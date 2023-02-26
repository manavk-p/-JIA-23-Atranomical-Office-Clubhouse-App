import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const EventComponent = ({name, date, time, imgSrc, description, id}) => {
    
    const [imgHeight, setImgHeight] = useState(0);
    const [displayDescription, setDisplayDescription] = useState(true);
    const [timeMarginBottom, setTimeMarginBottom] = useState(30);
    function onPressHandler() {
        if (imgHeight===150) {
            setImgHeight(0);
            setDisplayDescription(true);
            setTimeMarginBottom(30);
        } else {
            setImgHeight(150);
            setDisplayDescription(false)
            setTimeMarginBottom(0);
        }
    }
    
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <Pressable onPress={onPressHandler}>
            <View>
                <Image source={require('../client-app/assets/images/office_potluck.jpg')} style={{height: imgHeight, width: 365}}>

                </Image>
            </View>
            
            <View style={styles.eventComponentContainer}>
                <View style={styles.eventLeftContainer}>
                    <View>
                    <Text style={styles.eventTextPrimary}>
                        {name}
                    </Text>
                    <Text style={styles.eventTextSecondary}>
                        {date}
                    </Text>
                    <Text style={[styles.eventTextSecondary, {marginBottom: timeMarginBottom} ]}>
                        {time}
                    </Text>
                    </View>
                    <Text style={{ marginBottom: 15, marginTop: 5}}> 
                        {description}
                    </Text>

                </View>
                <View style={styles.eventRightContainer}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('EditEvent', {id: id})
                    }
                    >
                    <Text style={styles.eventTextSecondary}>
                       {"Edit +" + id}
                    </Text>
                </TouchableOpacity>
                    
                </View>
            </View>
            </Pressable>
        </SafeAreaView>
    );
}

export default EventComponent;