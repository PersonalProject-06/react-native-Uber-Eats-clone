import React from "react";
import { View, Text } from "react-native";

export default function RestaurantInfo() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Farhouse kitchen Thai Cuisine
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
          }}
        >
          30-45 min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
}
