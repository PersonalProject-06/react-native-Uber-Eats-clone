import React ,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import LottieView from "lottie-react-native";
import MenuItems from '../Components/RestourantDetail/MenuItems';
import firebase from "../firbase";
export default function OrderCompleted({route}) {
    const [lastOrder, setLastOrder] = useState({
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
          },
        ],
      });
      useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
          .collection("orders")
          .orderBy("createdAt", "desc")
          .limit(1)
          .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              setLastOrder(doc.data());
            });
          });
    
        return () => unsubscribe();
      }, []);
    return (
        <SafeAreaView style={{
            backgroundColor:"white",flex:1
        }}>
  <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        
            <Text>Your order at {route.params.restaurantName} has been placed for {route.params.total} </Text>
            <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
            <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        </SafeAreaView>
    )
}
