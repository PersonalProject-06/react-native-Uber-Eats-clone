import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";



export default function About({route}) {
    const {params}=route
    const { name , image , price ,reviews ,rating ,categories}=params
    const  FormatedCategories =categories.map((e)=>e.title).join(" • ")     
    const description = `${FormatedCategories} ${  price ? " • " + price : "" } • 🎫 • ${rating} ⭐ (${reviews}+)`;
   
  return (
    <View>
      <RestaurantImage imageUrl={image} />
      <RestaurantTitle text={name} />
      <RestaurantDescription description={description} />
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
