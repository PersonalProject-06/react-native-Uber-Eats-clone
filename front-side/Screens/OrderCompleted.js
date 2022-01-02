import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import LottieView from "lottie-react-native";
export default function OrderCompleted({route}) {

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
        <View>
            <Text>Your order at {route.params.restaurantName} has been placed for {route.params.total} </Text>
        </View>
        </SafeAreaView>
    )
}
