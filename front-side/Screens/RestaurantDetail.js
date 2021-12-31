import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../Components/RestourantDetail/About";
import MenuItems from "../Components/RestourantDetail/MenuItems";

export default function RestaurantDetail({route}) {
  return (
    <>
      <About route={route} />
      <Divider
        width={1.8}
        style={{
          marginVertical: 20,
        }}
      />

      <MenuItems />
    </>
  );
}
