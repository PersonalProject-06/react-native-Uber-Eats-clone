import React from 'react'
import { View, Text } from 'react-native'

export default function HeaderTbas() {
    return (
        <View>
            <HeaderButton/>
        </View>
    )
}

const HeaderButton =()=>{
    return <Text>Delivery</Text>
}