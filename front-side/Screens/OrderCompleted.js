import React from 'react'
import { View, Text } from 'react-native'

export default function OrderCompleted({restaurantName,totalUsd}) {
    return (
        <View>
            <Text>Your order at {restaurantName} has been placed for {totalUsd}  </Text>
        </View>
    )
}
