import styles from "../styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Rooms = ({}) => {
  return (
    <SafeAreaView style={styles.safeViewContainer}>

      <Text style={styles.titleText}>
        {'Rooms'}
      </Text>
    </SafeAreaView>
  );
}

export default Rooms;
