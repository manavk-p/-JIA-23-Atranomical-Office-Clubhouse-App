import styles from "./styles";
import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleText}>
        {'Settings'}
      </Text>

        <View style={settingsStyle.btnFlex}>
          <TouchableOpacity 
            style={settingsStyle.logoutBtn}
            onPress={() =>
              navigation.navigate('Login')
            }
          >
          <Text style={settingsStyle.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
const settingsStyle = StyleSheet.create({
  logoutText: {
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    fontWeight: "500",
    fontSize: 14
  },
  logoutBtn: {
    width: "80%",
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
