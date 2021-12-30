import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
const IconsName = [
  {
    icon: "home",
    text: "Home",
  },
  {
    icon: "search",
    text: "Browse",
  },
  {
    icon: "shopping-bag",
    text: "Grocery",
  },
  {
    icon: "receipt",
    text: "Orders",
  },

  {
    icon: "user",
    text: "Account",
  },
];
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      {IconsName.map((e, i) => (
        <Icon icon={e.icon} text={e.text} />
      ))}
    </View>
  );
}

const Icon = ({ icon, text }) => (
  <View>
    <FontAwesome5
      name={icon}
      size={24}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}
    />
    <Text>{text}</Text>
  </View>
);
