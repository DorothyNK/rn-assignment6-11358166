import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "./components/ProductCard";

const products = [
  {
    name: "Office Wear",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress1.png"),
  },
  {
    name: "Black ",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress2.png"),
  },
  {
    name: "Church Wear",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress3.png"),
  },
  {
    name: "Lamerei",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress4.png"),
  },
  {
    name: "21WN",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress5.png"),
  },
  {
    name: "Lopo",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress6.png"),
  },
  {
    name: "21WN",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress7.png"),
  },
  {
    name: "lame",
    description: "reversible angora cardigan",
    price: "$120",
    image: require("./assets/dress3.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Image
          source={require("./assets/Menu.png")}
          style={styles.headerImage}
        />
        <Image
          source={require("./assets/Logo.png")}
          style={styles.headerImage1}
        />
        <View style={styles.twoImages}>
          <Image
            source={require("./assets/Search.png")}
            style={styles.smallHeaderImage1}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image
              source={require("./assets/shoppingBag.png")}
              style={styles.smallHeaderImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.story}>O U R S T O R Y</Text>
        <View style={styles.twoImages}>
          <Image
            source={require("./assets/Listview.png")}
            style={styles.smallHeaderImage0}
          />
          <Image
            source={require("./assets/Filter.png")}
            style={styles.smallHeaderImage2}
          />
        </View>
      </View>

      <View style={styles.productsWrapper}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} navigation={navigation}  />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

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

export default HomeScreen;
