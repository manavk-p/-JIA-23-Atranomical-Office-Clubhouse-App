import { StyleSheet, Platform, StatusBar } from "react-native";


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
  },
  screenHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -12
  },
  headerSeperator: {
    backgroundColor: 'black',
    height: 1,
    marginBottom: 10
  },
  eventComponentContainer: {
    backgroundColor: '#D9D9D9',
    width: 365,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    shadowColor: '#171717',
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
  cell: {
    backgroundColor: '#D9D9D9',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "90%",
    padding: 10,
    marginBottom: 16
  }
});


export default styles;
