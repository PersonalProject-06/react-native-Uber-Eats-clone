import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import firebase from "../../firbase"
import OrderItem from "./OrderItem";
/// start style ///
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,

    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
});
///end style
export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const parseCurr = (total) =>
    Platform.OS === "android"
      ? "$" + total.toFixed(2)
      : total.toLocaleString("en-US", { style: "currency", currency: "USD" });
//start Modal

const addOrderToFireBase = () => {
  
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
              {items.map((e, i) => {
                return <OrderItem key={i} item={e} />;
              })}
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text> {parseCurr(total)}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  style={{
                    marginTop: 25,
                    backgroundColor: "black",
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    alignItems: "center",
                    position: "relative",
                  }}
                  onPress={() => {
                    addOrderToFireBase();
                    setModalVisible(false);
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                  <Text
                    style={{
                      position: "absolute",
                      right: 20,
                      color: "white",
                      fontSize: 15,
                      top: 17,
                    }}
                  >
                    {total ? parseCurr(total) : ""}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  };
/// end Modal //
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>

      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 20,
            zIndex: 999,
          }}
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
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                {parseCurr(total)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
