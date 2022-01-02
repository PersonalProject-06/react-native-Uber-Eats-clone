import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Home/Categories";
import HeaderTabs from "../Components/Home/HeaderTabs/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import RestaurantItem from "../Components/Home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTabs";
import { getRestaurantsFromYelp } from "./Api/FetchData";
import { localRestourant } from '../Components/Home/RestaurantItems/FakeData/RestaurantItemsFakeData';

export default function Home({navigation}) {

  const [restaurantData, setRestaurantData] = useState(localRestourant);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  //useEffect(() => {
   // getRestaurantsFromYelp(city, setRestaurantData ,activeTab);
 // }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData}  navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
