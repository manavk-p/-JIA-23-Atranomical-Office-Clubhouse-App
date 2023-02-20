import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import styles from "./styles";



const EventComponent = ({name, date, time, imgSrc, description}) => {
    
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

    return(
        <SafeAreaView>
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
                    <Text style={{display: displayDescription, marginBottom: 15, marginTop: 5}}> 
                        {description}
                    </Text>

                </View>
                <View style={styles.eventRightContainer}>
                    <Text style={styles.eventTextSecondary}>
                        Edit
                    </Text>
                </View>
            </View>
            </Pressable>
        </SafeAreaView>
    );
}

export default EventComponent;