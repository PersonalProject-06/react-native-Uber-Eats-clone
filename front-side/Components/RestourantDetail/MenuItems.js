import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
const foods = [
    {
        title: "Lasagana",
        description: "With Butter lecture, tomato and sauce bechamel ",
        price: "$13.5",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1qnIxgKkuQd14m11HCRE_Def6fA3-dR7Lg&usqp=CAU",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenederloin chicken of the sizzles",
        price: "$19.20",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RduOMas2LUVcJdOJGPDR5UYsb3SHMEhNig&usqp=CAU",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican ",
        price: "$14.50",
        image:
            "https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png",
    },
    
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican ",
        price: "$14.50",
        image:
            "https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican ",
        price: "$14.50",
        image:
            "https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png",
    },
    
   
];
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
    contentContainer: {
        paddingVertical: 20
      }
});
export default function MenuItems() {
    return (
     

            <ScrollView showsVerticalScrollIndicator={false} >
                {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>

                            <FoodInfo food={food} />
                            <FoodImage food={food} marginLeft={0} />
                        </View>
                        <Divider
                            width={0.5}
                            orientation="vertical"
                            style={{ marginHorizontal: 20 }}
                        />
                    </View>
                ))}
            </ScrollView>
     

    );
}

const FoodInfo = (props) => (
    <View>

    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
    </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
);