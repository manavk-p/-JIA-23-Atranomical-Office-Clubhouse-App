import { styles, textStyles, Colors } from "../styles";
import React from "react";

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

const FloorDetail = ({ route, navigation }) => {
  const { floorName, room } = route.params;
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={textStyles.h1}>
        {floorName}
      </Text>
      <Text style={textStyles.h2}>
        {"Desks"}
      </Text>
      <ScrollView>
        <View style={floorStyles.deskGrid}>
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.unavail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
          <View style={[floorStyles.desk, floorStyles.avail]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const floorStyles = StyleSheet.create({
  desk: {
    width: 50,
    height: 100,
    margin: 10
  },
  unavail: {
    backgroundColor: "#FF0000",
  },
  avail: {
    backgroundColor: Colors.cellBg,
  },
  deskGrid: {
    flexDirection: "row",
    flexWrap: "wrap",

    marginHorizontal: "auto",
  },
});
export default FloorDetail;
