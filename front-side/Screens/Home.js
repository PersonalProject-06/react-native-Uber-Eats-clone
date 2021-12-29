import React from 'react'
import { View, Text } from 'react-native'
import {
    SafeAreaView,
 
  } from 'react-native-safe-area-context';
import HeaderTabs from '../Components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView>
           <HeaderTabs/>
        </SafeAreaView>
    )
}


