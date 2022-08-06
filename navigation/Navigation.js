// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HotelFlatList from "../screens/HotelFlatList";
import Home from "./Home";
import SquareInLoop from '../screens/SquareInLoop';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HotelFlatList"
        component={HotelFlatList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SquareInLoop"
        component={SquareInLoop}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;

// export default Navigation;