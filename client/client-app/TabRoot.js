import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Events from "./Events";
import Map from "./Map";
import Settings from "./Settings";
import Desks from "./Desks";
import Rooms from "./Rooms"
import Management from "./Management";

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
        <Tab.Screen name="Rooms" component={Rooms}/>
        <Tab.Screen name="Desks" component={Desks} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Management" component={Management}/>
      </Tab.Navigator>
  );
}


export default TabRoot;
 