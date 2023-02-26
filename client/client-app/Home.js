import styles from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Home = ({}) => {
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={styles.titleText}>
        {'Home'}
      </Text>
    </SafeAreaView>
  );
}

export default Home;
