
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}
