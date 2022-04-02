import React, { Component, useCallback } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Profile from "../screens/Profile";
import List from "../screens/List";
import Mapa from "../screens/Map";

const Stack = createStackNavigator();

export default AppStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppStack" component={Tabs} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
