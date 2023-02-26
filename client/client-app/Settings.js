import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { styles, textStyles } from "./styles";

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={textStyles.h1}>
        {'Settings'}
      </Text>
      <ScrollView>
        <View style={settingsStyle.btnFlex}>
          <View style={styles.cell}>
            <Text style={textStyles.h2}>John Garrett</Text>
            <Text style={textStyles.paragraph}>jgarrett47@gatech.edu</Text>
          </View>

          <View style={styles.cell}>
            <Text style={textStyles.h2}>User Preferences</Text>
            <Text style={textStyles.paragraph}>Noise Level: Low</Text>
            <Text style={textStyles.paragraph}>Temperature: 70ºF</Text>
          </View>

          <View style={styles.cell}>
            <Text style={textStyles.h2}>Location Preferences</Text>
            <Text style={textStyles.paragraph}>Room 410A - Tower 1</Text>
            <Text style={textStyles.paragraph}>Room 410B - Tower 1</Text>
          </View>
          <TouchableOpacity 
            style={settingsStyle.logoutBtn}
            onPress={() =>
              navigation.navigate('Login')
            }
          >
          <Text style={settingsStyle.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const settingsStyle = StyleSheet.create({
  titleText: {
    fontWeight: "500",
    fontSize: 20
  },
  logoutText: {
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    fontWeight: "500",
    fontSize: 14
  },
  logoutBtn: {
    width: "90%",
    borderRadius: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#880808",
  },
  btnFlex: {
    flex: 1,
    alignItems: "center"
  }
})

export default Settings;
