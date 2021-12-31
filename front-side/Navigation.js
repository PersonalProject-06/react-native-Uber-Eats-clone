import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './Screens/Home';
import RestaurantDetail from './Screens/RestaurantDetail';

export default function Navigation() {
  const Stack = createStackNavigator();

  const screenOption = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
          <Stack.Screen  name="Home" component={Home}/>
          <Stack.Screen name="RestaurantDetail"  component={RestaurantDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
