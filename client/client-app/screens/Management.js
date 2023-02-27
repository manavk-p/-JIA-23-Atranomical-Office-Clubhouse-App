import styles from "../styles";
import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

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