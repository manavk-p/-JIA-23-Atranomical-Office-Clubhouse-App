import styles from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const mockData = {
    rooms: [
        {
            noiseLevel: 'low',
            occupancyLimit: 10,
            temperature: 65,
            numDesks: 10,
        },
        {
            noiseLevel: 'high',
            occupancyLimit: 15,
            temperature: 68,
            numDesks: 20,
        }
    ]
}

const Rooms = ({}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Rooms'}
      </Text>
    </SafeAreaView>
  );
}

export default Rooms;
