import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";


const Restaurant_Info ={
    name:"test",
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dOpgQrbqVA0Iyxnj-8_hDkTfFh0QauuqfA&usqp=CAU",
    price:"",
    reviews:"1500",
    rating:4.5,
    categories:[{title:"Thai"},{title:"Comfort Food"}]
}

const { name , image , price ,reviews ,rating ,categories}=Restaurant_Info
const  FormatedCategories =categories.map((e)=>e.title).join(" • ")     
const description = `${FormatedCategories} ${  price ? " • " + price : "" } • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
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
