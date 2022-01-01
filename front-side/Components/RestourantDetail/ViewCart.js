import React,{useState} from "react";
import { View, Text, TouchableOpacity,Model } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
   
  const [modalVisible, setModalVisible] = useState(false)
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const parseCurr = (total) =>
   Platform.OS === 'android'  
      ?  '$' + total.toFixed(2)  
      :  total.toLocaleString('en-US', { style: 'currency', currency:'USD' });
      const checkOutModelContent=()=>{
          return (
              <Text>ChecOut</Text>
          )
      }
  return (
    <>
    <Model  animationType={"slide"}
    visible={modalVisible}
    transparent={true}
    onRequestClose={setModalVisible(false)}
    >
{checkOutModelContent()}
    </Model>
      {total ? (
        <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 20,
            zIndex: 999,}}
        >
          <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
            <TouchableOpacity
               style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
              View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>  {parseCurr(total)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
