import React from "react";
import { textStyles } from "./styles";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Map = ({}) => {
  return (
    <SafeAreaView>
      <Text style={textStyles.h1}>
        {'Map'}
      </Text>
    </SafeAreaView>
  );
}

export default Map;
