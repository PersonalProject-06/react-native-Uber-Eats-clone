import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native';
const detail = {
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dOpgQrbqVA0Iyxnj-8_hDkTfFh0QauuqfA&usqp=CAU",

    title:"FarmHouse Kitchen Thai Cuisine",
    description:"Thai • comfort Food • $$ • 🎫 • 4 ⭐ (2913+)  "

}
export default function About() {
    return (
        <View>
            <RestaurantImage  imageUrl={detail.image_url} />
            <RestaurantTitle text={ detail.title}/>
        </View>
    )
}



const RestaurantImage=(props)=>(
    <Image source={{uri:props.imageUrl}} style={{
        width:"100%",
        height:180

    }} />
)

const RestaurantTitle = (props)=>(
    <Text style={{
        fontSize:29,
        fontWeight:"600",
        marginTop:10,
        marginHorizontal:15

    }}> {props.text}</Text>

)