import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import FoodInfo from "./SubComponentMenuItems/FoodInfo";
import FoodImage from "./SubComponentMenuItems/FoodImage";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
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

export default function MenuItems({ restaurantName,hideCheckbox,marginLeft,foods }) {
  let dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const selectItem = (item,checkBoxValue) => dispatch(addToCard(item, restaurantName,checkBoxValue));
  const isFoodInCart = (food, cartItems) =>
  Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>

            {hideCheckbox?(<></>):<BouncyCheckbox
             isChecked={isFoodInCart(food, cartItems)}
              iconStyle={{ borderRadius: 0, borderColor: "grey" }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft?marginLeft:0} />
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
