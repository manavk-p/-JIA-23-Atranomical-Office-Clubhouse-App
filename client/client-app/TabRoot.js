import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Events from "./Events";
import Map from "./Map";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

const TabRoot = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}


export default TabRoot;
