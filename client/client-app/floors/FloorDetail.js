import { styles, textStyles, Colors } from "../styles";
import { React, useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

const FloorDetail = ({ route, navigation }) => {
  

  const { floorName, room } = route.params;
  let color_arr = []
  for (let i = 0; i < room.desks.length; i++) {
    color_arr.push(false);
  }

  const [color_state, set_color_state] = useState(color_arr)
  function handleChange(deskIdx) {
    console.log("handleChange color push");
    const nextCounters = color_state.map((c, i) => {
      if (i == deskIdx) {
        // Increment the clicked counter
        return !c;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    set_color_state(nextCounters);
  
  }

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
          {[...Array(room.numDesks)].map(
          (value, index) => (
            <TouchableOpacity
                    onPress={() => {
                        console.log(index)
                        params = {
                          room: room,
                          idx: index,
                          handleChange: handleChange
                        }
                        navigation.navigate("DeskDetail", params);
                    }}
              >
                <View style={[floorStyles.desk,  color_state[index] ? floorStyles.unavail : floorStyles.avail ]} />
            </TouchableOpacity>
            
          ))}
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
