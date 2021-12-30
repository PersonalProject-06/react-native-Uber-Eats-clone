import React, { useState } from "react";
import { View } from "react-native";

import { HeaderButton } from "./HeaderButton";
export default function HeaderTbas({activeTab,setActiveTab}) {

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
