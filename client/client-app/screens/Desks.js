import styles from "../styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Desks = ({}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Desks'}
      </Text>
    </SafeAreaView>
  );
}

export default Desks;
