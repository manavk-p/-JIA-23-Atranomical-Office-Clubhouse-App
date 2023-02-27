import { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import styles from "../styles";



const RoomComponent = ({ name, noiseLevel, occupancyLimit, temperature, numDesks }) => {

    return (
        <SafeAreaView>
            <View style={styles.eventComponentContainer}>
                <View style={styles.eventLeftContainer}>
                    <View>
                        <Text style={styles.eventTextPrimary}>
                            {name}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default RoomComponent;