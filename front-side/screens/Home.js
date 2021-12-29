import React from 'react'
import { View, Text , } from 'react-native'
import {
    SafeAreaView,
 
  } from 'react-native-safe-area-context';
import HeaderTbas from '../components/HeaderTbas'

export default function Home() {
    return (
        <SafeAreaView>
          
           <HeaderTbas/>
        </SafeAreaView>
    )
}


