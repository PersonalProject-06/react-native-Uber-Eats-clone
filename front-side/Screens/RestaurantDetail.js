import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../Components/RestourantDetail/About";
import MenuItems from "../Components/RestourantDetail/MenuItems";
import ViewCart from "../Components/RestourantDetail/ViewCart";
import { foods } from '../Components/RestourantDetail/SubComponentMenuItems/fakeData';
export default function RestaurantDetail({route ,navigation}) {
  return (
    <>
      <About route={route} />
      <Divider
        width={1.8}
        style={{
          marginVertical: 20,
        }}
      />

      <MenuItems  restaurantName={route.params.name} foods={foods}/>

      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </>
  );
}
