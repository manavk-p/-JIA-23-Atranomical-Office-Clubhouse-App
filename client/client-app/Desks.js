import { textStyles } from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
} from "react-native";

const Desks = ({}) => {
  return (
    <SafeAreaView>
      <Text style={textStyles.h1}>
        {'Desks'}
      </Text>
    </SafeAreaView>
  );
}

export default Desks;
