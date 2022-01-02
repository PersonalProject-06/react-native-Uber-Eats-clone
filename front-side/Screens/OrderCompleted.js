import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
export default function OrderCompleted({route}) {
    console.log(route.params.total);
    return (
        <SafeAreaView style={{
            backgroundColor:"white",flex:1
        }}>

        <View>
            <Text>Your order at {route.params.restaurantName} has been placed for {route.params.total} </Text>
        </View>
        </SafeAreaView>
    )
}
