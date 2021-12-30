import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
    const foods = [
        {
            title:"Lasagana",
            desciption:"With Butter lecture, tomato and sauce bechamel ",
            price:"$13.5",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1qnIxgKkuQd14m11HCRE_Def6fA3-dR7Lg&usqp=CAU"
        },
        {
            title:"Tandoori Chicken",
            desciption:"Amazing Indian dish with tenederloin chicken of the sizzles",
            price:"$19.20",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RduOMas2LUVcJdOJGPDR5UYsb3SHMEhNig&usqp=CAU"
        },{
            title:"Chilaquiles",
            desciption:"Chilaquiles with cheese and sauce. A delicious mexican ",
            price:"$14.50",
            image:"https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png dish"
        },{
            title:"",
            desciption:"",
            price:"",
            image:""
        },

    ]
    const styles = StyleSheet.create({
        menuItemStyle: {
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        },
      
        titleStyle: {
          fontSize: 19,
          fontWeight: "600",
        },
      });
export default function MenuItems() {
    return (
        <View>
            <Text>Menu Items </Text>
        </View>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );