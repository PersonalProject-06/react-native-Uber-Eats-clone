import React from "react";
import { View, TouchableOpacity } from "react-native";
import RestaurantInfo from "./RestaurantItems/RestaurantInfo";
import RestaurantImage from "./RestaurantItems/RestaurantImage";

export default function RestaurantItem({ navigation, restaurantData }) {
  return (
    <>
      {restaurantData.map((e, i) => (
        <TouchableOpacity
        key={i}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: e.name,
              image: e.image_url,
              price: e.price,
              reviews: e.review_count,
              rating: e.rating,
              categories: e.categories,
            })
          }
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            <RestaurantImage image={e.image_url} />
            <RestaurantInfo name={e.name} rating={e.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
