import React from "react";
import { View, Image } from "react-native";

export default function FoodImage({ marginLeft, ...props }) {
  return (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );
}
