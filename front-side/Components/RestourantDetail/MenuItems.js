import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import FoodInfo from "./SubComponentMenuItems/FoodInfo";
import FoodImage from "./SubComponentMenuItems/FoodImage";
import { foods } from "./SubComponentMenuItems/fakeData";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { addToCard } from "../../Redux/Actions/cartAction";
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default function MenuItems({ restaurantName }) {
  let dispatch = useDispatch();

  const selectItem = (item,checkBoxValue) => dispatch(addToCard(item, restaurantName,checkBoxValue));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderRadius: 0, borderColor: "grey" }}
              fillColor="green"
              onPress={(checkBoxValue) => selectItem(food,checkBoxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
