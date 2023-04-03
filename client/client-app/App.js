import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import EditEvent from './EditEvent';
import Login from "./Login";
import TabRoot from "./TabRoot";
import ForgotPassword from "./ForgotPassword"
import AddEvent from './AddEvent';
import RoomDetail from './rooms/RoomDetail';
import FloorDetail from './floors/FloorDetail';

const Stack = createNativeStackNavigator();

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';


function App() {
  useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // heheheheh
  }, [])
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
        <Stack.Screen name="TabRoot" screenOptions={{ presentation: 'modal' }} component={TabRoot} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="EditEvent" component={EditEvent} />
        <Stack.Screen name="RoomDetail" component={RoomDetail} />
        <Stack.Screen name="FloorDetail" component={FloorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
