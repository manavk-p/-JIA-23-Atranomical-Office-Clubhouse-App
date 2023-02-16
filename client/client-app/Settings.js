import styles from "./styles";
import React from "react";
import {
  Text,
  SafeAreaView,
} from "react-native";

const Settings = ({}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Settings'}
      </Text>
    </SafeAreaView>
  );
}

export default Settings;
