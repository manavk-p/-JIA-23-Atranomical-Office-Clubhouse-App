import React from "react";
import { styles } from "./styles";

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
