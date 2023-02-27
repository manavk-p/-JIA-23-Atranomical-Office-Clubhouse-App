import { StyleSheet, Platform, StatusBar } from "react-native";

const textStyles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 12
  },
  h2: {
    fontSize: 22,
    fontWeight: "500",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "normal",
  }
});

const Colors = {
  green: "##94C9A9",
  palePurple: "#F6E4F6",
  red: "#E84855",
  blue: "#0081A7",
  black: "#32322C",
  shadow: "#171717",
  cellBg: "#D9D9D9",
  inputBg: "#e0e0e0",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  safeViewContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  inputView: {
    backgroundColor: Colors.inputBg,
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
    fontWeight: "bold",
    marginLeft: 18
  },
  paragraph: {
    fontSize: 12,
  },
  addEventText: {
    fontSize: 18,
    marginTop: 9,
    marginRight: 10
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
  screenHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSeperator: {
    backgroundColor: Colors.black,
    height: 1,
    marginBottom: 10
  },
  eventComponentContainer: {
    backgroundColor: '#D9D9D9',
    width: 365,
    borderColor: Colors.black,
    borderWidth: 1,
    marginBottom: 10,
    shadowColor: Colors.shadow,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eventListContainer: {
    alignItems: 'center',
  },
  eventTextPrimary: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  eventTextSecondary: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 2
  },
  eventLeftContainer: {
    marginTop: 5,
    marginLeft: 5,
  },
  eventRightContainer: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: -13
  },

  eventScreenContainer: {
    flex: .88
  },

  cell: {
    backgroundColor: Colors.cellBg,
    shadowColor: Colors.shadow,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "90%",
    padding: 10,
    marginBottom: 16
  },
  eventEditContainer: {
    backgroundColor: '#D9D9D9',
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'space-between',
    padding: 10,
    
    flexDirection: 'column'
  },

  singleLineEdit: { textAlignVertical: 'top',
  borderWidth: 1,
  borderColor: 'black',
  paddingRight: 10,
  paddingLeft: 10,
  marginBottom: 20,
  },
});


export { textStyles, Colors, styles };