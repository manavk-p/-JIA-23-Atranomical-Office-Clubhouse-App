import { styles, textStyles } from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Home = ({}) => {
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={textStyles.titleText}>
        {'Home'}
      </Text>
    </SafeAreaView>
  );
}

export default Home;
