import React ,{useState} from "react";
import { View } from "react-native";

import {HeaderButton} from "./HeaderButton"
export default function HeaderTbas() {
    const [activeTab , setActiveTab]=useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery"  activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup"  activeTab={activeTab} setActiveTab={setActiveTab}/>
      
    </View>
  );
}

