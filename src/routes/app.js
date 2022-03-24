import React, { Component, useCallback } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default AppStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
};
