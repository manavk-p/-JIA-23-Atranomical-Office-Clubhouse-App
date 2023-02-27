import React from "react";
import { styles, textStyles } from "./styles";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Rooms = ({}) => {
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={textStyles.h1}>
        {'Rooms'}
      </Text>
    </SafeAreaView>
  );
}

export default Rooms;
