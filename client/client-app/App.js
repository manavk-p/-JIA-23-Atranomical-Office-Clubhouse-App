import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import EditEvent from './EditEvent';
import Login from "./Login";
import TabRoot from "./TabRoot";
import ForgotPassword from "./ForgotPassword"
import AddEvent from './AddEvent';

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
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "Forgot Password",
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}
        />
        <Stack.Screen name="TabRoot" component={TabRoot} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="EditEvent" component={EditEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
