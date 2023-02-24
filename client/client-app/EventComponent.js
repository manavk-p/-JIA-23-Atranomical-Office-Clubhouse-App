import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import styles from "./styles";



const EventComponent = ({name, date, time, imgSrc, description}) => {
    
    const [imgHeight, setImgHeight] = useState(0);
    const [descriptionText, setDescriptionText] = useState("");
    function onPressHandler() {
        if (imgHeight===150) {
            setImgHeight(0);
            setDescriptionText("");
        } else {
            setImgHeight(150);
            setDescriptionText(description);
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
                    <Text style={styles.eventTextSecondary}>
                        {time}
                    </Text>
                    </View>
                    <View>
                    <Text style={{ marginBottom: 15, marginTop: 5}}> 
                        {descriptionText}
                    </Text>
                    </View>

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