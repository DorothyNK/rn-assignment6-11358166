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

// const ProductCard = ({ product }) => {
//   const addToCart = async () => {
  const ProductCard = ({ product, navigation }) => {
    const addToCart = async () => {
    try {
      let cartItems = await AsyncStorage.getItem("cart");
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.push(product);
      // cart = cart ? JSON.parse(cart) : [];
      // cart.push(product);

      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
      alert("Added");
      navigation.navigate('CartScreen');
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <View style={styles.productContainer}>
      <Image source={product.image} style={styles.image} />
      <TouchableOpacity onPress={addToCart}>
        <Image
          source={require("../assets/add_circle.png")}
          style={styles.smallImageOverlay}
        />
      </TouchableOpacity>

      <View style={styles.productDetails}>
        <Text style={styles.n}>{product.name}</Text>
        <Text style={styles.d}>{product.description}</Text>
        <Text style={styles.p}>{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingLeft: 12,
    paddingRight: 12,
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  screenContainer: {
    backgroundColor: "white",
    marginTop: 45,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerImage: {
    width: 30,
    height: 24,
    marginTop: 10,
  },

  story: {
    marginTop: 20,
    fontSize: 22.3,
  },

  headerImage1: {
    width: 96,
    height: 38,
    marginLeft: 65,
  },

  n: {
    fontSize: 19,
  },

  d: {
    fontSize: 13.2,
    width: 200,
  },

  p: {
    fontSize: 18,
    color: "#ffa07a",
  },

  twoImages: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  smallHeaderImage: {
    width: 27,
    height: 31,
  },
  smallHeaderImage1: {
    width: 29,
    height: 32,
    marginLeft: 42,
  },

  smallHeaderImage0: {
    width: 33,
    height: 35,
    marginLeft: 40,
    marginTop: 20,
  },

  smallHeaderImage2: {
    width: 36,
    height: 39,
    marginLeft: 13,
    marginTop: 20,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  productsWrapper: {
    padding: 10,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  productContainer: {
    width: "48%",
  },
  image: {
    width: "100",
    height: 235,
  },
  smallImageOverlay: {
    position: "absolute",
    bottom: 10,
    right: 8,
    width: 30,
    height: 30,
  },
  productDetails: {
    marginTop: 10,
  },
});
