import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import RestaurantItem from '../Components/RestaurantItem';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories/>
      <RestaurantItem/>
   
        
      </ScrollView>
    </SafeAreaView>
  );
}
