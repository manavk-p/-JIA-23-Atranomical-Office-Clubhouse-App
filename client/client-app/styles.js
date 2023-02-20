import { StyleSheet } from "react-native";

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

export default styles;
