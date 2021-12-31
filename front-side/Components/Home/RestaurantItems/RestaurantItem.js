import React from "react";
import { View, TouchableOpacity } from "react-native";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantImage from "./RestaurantImage";


export default function RestaurantItem({ restaurantData }) {

  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((e, i) => (
        <View
          key={i}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: "white",
          }}
        >
          <RestaurantImage image={e.image_url} />
          <RestaurantInfo name={e.name} rating={e.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}
