import React ,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import LottieView from "lottie-react-native";
import MenuItems from '../Components/RestourantDetail/MenuItems';
import firebase from "../firbase";
import { ScrollView } from 'react-native-gesture-handler';
export default function OrderCompleted({route}) {
    const [lastOrder, setLastOrder] = useState({
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "",
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
            <View style={{
                margin:15,
                alignItems:"center",
                height:"100%"
            }}>

  <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
          />
        
            <Text style={{
                fontSize:20,
                fontWeight:"bold"
            }}>Your order at {route.params.restaurantName} has been placed for {route.params.total} </Text>
            <ScrollView showsVerticalScrollIndicator={false}>

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
       
          />
          </ScrollView>
          </View>
        </SafeAreaView>
    )
}
