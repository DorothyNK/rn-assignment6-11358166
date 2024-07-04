import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartItems = [
  {
    id: "1",
    name: "O F F I C E  W E A R",
    description: "Office wear for you office",
    price: "$120",
    image: require("./assets/dress1.png"),
    smallImage: require("./assets/remove.png"),
  },

  {
    id: "2",
    name: "L A M E R E I",
    description: "Recycle Boucle Knit Cardigan Pink",
    price: "$120",
    image: require("./assets/dress4.png"),
    smallImage: require("./assets/remove.png"),
  },

  {
    id: "3",
    name: "C H U R C H  W E A R",
    description: "Recycle Boucle Knit Cardigan Pink",
    price: "$120",
    image: require("./assets/dress3.png"),
    smallImage: require("./assets/remove.png"),
  },
];

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let cartItems = await AsyncStorage.getItem("cart");
        cartItems = cartItems ? JSON.parse(cartItems) : [];
        setCart(cartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);
  
  const removeFromCart = async (item) => {
    try {
      // Remove item from AsyncStorage
      let updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update state to re-render
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.cartHeader}>
          <Image
            source={require("./assets/Logo.png")}
            style={styles.cartHeaderImage}
          />
          <Image
            source={require("./assets/Search.png")}
            style={styles.cartHeaderImage2}
          />
        </View>
        <View style={styles.checkOutContainer}>
          <Text style={styles.checkOutText}>C H E C K O U T</Text>
          <View style={styles.checkOutLine}>
            <View style={styles.line}></View>
          </View>
        </View>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItemContainer}>
            <Image source={item.image} style={styles.cartImage} />
            <View style={styles.cartDetails}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemDescription}>{item.description}</Text>
              <Text style={styles.cartItemPrice}>{item.price}</Text>
              <TouchableOpacity
                onPress={() => removeFromCart(item)}
                style={styles.removeButton}
              >
                <Image
                  source={require("./assets/remove.png")}
                  style={styles.cartSmallImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.estimatedTotal}>
          <Text style={styles.estimatedTotalText}>EST. TOTAL</Text>
          <Text style={styles.estimatedTotalPrice}>$240</Text>
        </View>

        <View style={styles.checkoutButtonContainer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Image
              source={require("./assets/shoppingBag.png")}
              style={styles.checkoutIcon}
            />
            <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  screenContainer: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 10,
  },
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  cartHeaderImage: {
    width: 97,
    height: 39,
    marginLeft: 130,
  },
  cartHeaderImage2: {
    width: 31,
    height: 33,
    marginRight: 8,
  },
  checkOutContainer: {
    alignItems: "center",
    padding: 10,
    paddingBottom: 18,
  },
  checkOutText: {
    fontSize: 20,
    paddingRight: 20,
    paddingTop: 3,
  },

  checkOutLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    width: 182,
    paddingRight: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },

  cartItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    alignItems: "center",
    paddingLeft: 15,
    paddingTop: 16,
  },
  cartImage: {
    width: 150,
    height: 202,
    marginRight: 5,
  },
  cartDetails: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
    marginTop: 60,
  },
  cartItemName: {
    fontSize: 18,
    marginTop: 10,
  },

  cartItemDescription: {
    fontSize: 12.4,
    width: 200,
    marginTop: 5,
  },

  cartItemPrice: {
    fontSize: 18,
    color: "#ffa07a",
    marginTop: 5,
  },
  removeButton: {
    position: "relative",
    bottom: 0,
    right: 16,
  },
  cartSmallImage: {
    width: 22,
    height: 21,
    marginTop: 41,
    alignSelf: "flex-end",
  },
  estimatedTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 320,
    borderTopColor: "#ccc",
  },

  estimatedTotalText: {
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 45,
  },

  estimatedTotalPrice: {
    fontSize: 22,
    color: "#ffa07a",
    paddingRight: 15,
    paddingTop: 40,
  },

  checkoutButtonContainer: {
    padding: 20,
    alignItems: "center",
  },

  checkoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    width: 420,
  },

  checkoutIcon: {
    width: 30,
    height: 30,
    tintColor: "white",
    marginLeft: 130,
    marginRight: 14,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 17,
  },
});

export default CartScreen;
