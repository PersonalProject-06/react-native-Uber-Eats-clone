import React from "react";
import { View, Text, Image ,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function RestaurantImage(props) {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: props.image,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
}
