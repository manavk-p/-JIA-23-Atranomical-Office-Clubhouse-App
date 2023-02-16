import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>
        {'Astranomical Office'}
      </Text>

      <KeyboardAvoidingView style={styles.inputPane}> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() =>
            navigation.navigate('Home', {name: 'Jane'})
          }
          disabled={!email || !password}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputView: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  inputPane: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  titleText: {
    fontSize: 28,
    paddingBottom: 28,
    fontWeight: "bold"
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    width: "100%"
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "90%",
    borderRadius: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#33CA7F",
  },

  loginText: {
    fontWeight: "500",
  }
});

export default Login;
