import React from "react";
import {Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function RestaurantImage({image}) {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: image,
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
