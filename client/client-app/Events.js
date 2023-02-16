import styles from "./styles";
import React from "react";
import {
  Text,
  SafeAreaView,
} from "react-native";

const Events = ({}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Events'}
      </Text>
    </SafeAreaView>
  );
}

export default Events;
