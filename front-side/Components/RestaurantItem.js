import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";


export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo/>
    </View>
  );
}
const RestaurantImage = () => (
  <>
    <Image
      style={{ width: "100%", height: 180 }}
      source={{
        uri: "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2021/03/16/node_960937/50789063/public/2021/03/16/B9726446397Z.1_20210316175915_000%2BGQEHPMNAF.1-0.jpg?itok=cxs1pOQS1615914194",
      }}
    />
    <TouchableOpacity style={{
        position:"absolute",
        right:20,
        top:20
    }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);


const RestaurantInfo =()=>(
    <View 
      style={{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          marginTop:10
      }}  
    >
        <View>

    <Text
        style={{
            fontSize:15,
            fontWeight:"bold",

        }}
    >Farhouse kitchen Thai Cuisine</Text>
    <Text 
        style={{
            fontSize:15,color:"gray"
        }}
    >30-45 min</Text>    
        </View>
    <Text>4.5</Text>    
   
    </View>

)