import { textStyles, styles } from "./styles";
import React from "react";

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { ROOMS } from "./data/DummyData";

const Floor = ({ title, room1, room2, navigation }) => {
  return (
    <View style={{padding: 20}}>
      <Text style={textStyles.h2}>
        {title}
      </Text>
      <View style={deskStyles.floorContainer}>
        <View style={deskStyles.floorLeft}>
         <TouchableOpacity
                    onPress={() => {
                        params = {
                            floorName: title,
                            room: room1
                        }
                        navigation.navigate("FloorDetail", params);
                    }}
                >
                    <View>
                        <View>
                            <Text style={styles.eventTextSecondary}>
                                Noise Level {room1.noiseLevel}
                            </Text>
                            <Text style={styles.eventTextSecondary}>
                                Temperature {room1.temperature}°
                            </Text>
                            <Text style={styles.eventTextSecondary}>
                                Number of Desks {room1.numDesks}
                            </Text>
                        </View>
                </View>
            </TouchableOpacity>

        </View>
        <View style={deskStyles.floorRight}>
           <TouchableOpacity
                      onPress={() => {
                        params = {
                            room: room2
                        }
                        navigation.navigate("FloorDetail", params);
                      }}
                  >
                      <View>
                          <View>
                              <Text style={styles.eventTextSecondary}>
                                   {room2.noiseLevel} noise level
                              </Text>
                              <Text style={styles.eventTextSecondary}>
                                  Avg Temp {room2.temperature}°
                              </Text>
                              <Text style={styles.eventTextSecondary}>
                                   {room2.numDesks} avail desks
                              </Text>
                          </View>
                  </View>
              </TouchableOpacity>
        </View>

        </View>
      </View>
  );
};

const Desks = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={textStyles.h1}>
        {'Floors'}
      </Text>
      <ScrollView>
        <Floor title="Floor 0" room1={ROOMS[0]} room2={ROOMS[1]} navigation={navigation}/>
        <Floor title="Floor 1" room1={ROOMS[2]} room2={ROOMS[3]} navigation={navigation}/>
        <Floor title="Floor 2" room1={ROOMS[4]} room2={ROOMS[5]} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const deskStyles = StyleSheet.create({
  floorLeft: {
    width: "40%",
    height: 100,
    borderColor: styles.black,
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: styles.white,
    justifyContent: "center",
    borderRightWidth: 0
  },
  floorRight: {
    width: "50%",
    backgroundColor: styles.white,
    height: 200,
    borderColor: styles.black,
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  floorContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  }
});
export default Desks;
