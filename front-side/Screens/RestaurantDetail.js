import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../Components/RestourantDetail/About';
import MenuItems from '../Components/RestourantDetail/MenuItems';

export default function RestaurantDetail() {
    return (
        <>
            <About/>
            <Divider width={1.8} style={{
                marginVertical:20
            }} />
            

            <MenuItems/>

          
        </>
    )
}
