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

import LottieView from "lottie-react-native";
export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(null);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    getRestaurantsFromYelp(city, setRestaurantData, activeTab);
  }, [city, activeTab]);

  return (
    <>

      {restaurantData  ?

        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar setCity={setCity} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItem
              restaurantData={restaurantData}
              navigation={navigation}
            />
          </ScrollView>
          <Divider width={1} />
          <BottomTabs />
        </SafeAreaView>
        :
        <LottieView
          style={{  flex:1,justifyContent:"center",alignItems:"center" }}
          source={require("../assets/animations/scanner.json")}
          autoPlay
          speed={3}
        />
      }


    </>
  );
}
