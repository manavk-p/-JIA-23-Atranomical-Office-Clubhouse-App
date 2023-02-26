import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Events from "./Events";
import Map from "./Map";
import Settings from "./Settings";

import EventRoot from "./EventRoot";

import Rooms from "./Rooms";


const Tab = createBottomTabNavigator();

const TabRoot = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Events" component={EventRoot} />
        <Tab.Screen name="Map" component={Map} />


        <Tab.Screen name="Rooms" component={Rooms} />

        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}


export default TabRoot;
