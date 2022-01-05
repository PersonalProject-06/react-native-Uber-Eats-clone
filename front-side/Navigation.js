import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestaurantDetail from "./Screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Redux/Store";
import OrderCompleted from "./Screens/OrderCompleted";
const store = configureStore();
export default function Navigation() {
  const Stack = createStackNavigator();

  const screenOption = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="orderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
