import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { styles } from "./styles";

const Management = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Management'}
      </Text>
    </SafeAreaView>
  );
}
const settingsStyle = StyleSheet.create({
  titleText: {
    fontWeight: "500",
    fontSize: 20
  }
})

export default Management;
