import React from 'react'
import { View, Text } from 'react-native'

export default function OrderCompleted({route}) {
    console.log(route.params.total);
    return (
        <View>
            <Text>Your order at {route.params.restaurantName} has been placed for {route.params.total} </Text>
        </View>
    )
}
