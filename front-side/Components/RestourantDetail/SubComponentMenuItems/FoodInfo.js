import React from "react";
import { View, Text } from "react-native";

export default function FoodInfo({ food }) {
  return (
    <View>
      <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
      </View>
    </View>
  );
}
