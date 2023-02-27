import React from "react";
import {
  Text,
  SafeAreaView,
} from "react-native";

import { textStyles } from "./styles";

const Management = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={textStyles.h1}>
        {'Management'}
      </Text>
    </SafeAreaView>
  );
}

export default Management;
