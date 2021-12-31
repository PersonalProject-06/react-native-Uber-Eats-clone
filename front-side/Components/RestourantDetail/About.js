import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
const detail = {
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dOpgQrbqVA0Iyxnj-8_hDkTfFh0QauuqfA&usqp=CAU",

  title: "FarmHouse Kitchen Thai Cuisine",
  description: "Thai • comfort Food • $$ • 🎫 • 4 ⭐ (2913+)  ",
};
export default function About() {
  return (
    <View>
      <RestaurantImage imageUrl={detail.image_url} />
      <RestaurantTitle text={detail.title} />
      <RestaurantDescription description={detail.description} />
    </View>
  );
}

const RestaurantImage = ({imageUrl}) => (
  <Image
    source={{ uri:imageUrl }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const RestaurantTitle = ({text}) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    
    {text}
  </Text>
);

const RestaurantDescription = ({description}) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: "400",
    }}
  >
    {description}
  </Text>
);
