import React from 'react'
import {  Text } from 'react-native'
import { TouchableOpacity } from "react-native";
export  const HeaderButton = (props) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? "black":"white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={()=>props.setActiveTab(props.text)}
      >
        <Text style={{ color:props.activeTab === props.text ? "white":"black", fontSize: 15, fontWeight: "900" }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  };