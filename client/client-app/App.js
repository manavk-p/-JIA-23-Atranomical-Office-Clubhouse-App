import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import Login from "./Login";
import TabRoot from "./TabRoot";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabRoot" component={TabRoot} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="EditEvent" component={EditEvent} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
