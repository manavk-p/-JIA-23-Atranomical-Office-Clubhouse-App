import styles from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Map = ({}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Map'}
      </Text>
    </SafeAreaView>
  );
}

export default Map;
