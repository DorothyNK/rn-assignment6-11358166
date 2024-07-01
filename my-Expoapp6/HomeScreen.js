import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [ 
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress1.png'), smallImage: require('./assets/add_circle.png') },
  { id: '2', name: 'Black ',      description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress2.png'), smallImage: require('./assets/add_circle.png') },
  { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress3.png'), smallImage: require('./assets/add_circle.png') },
  { id: '4', name: 'Lamerei',     description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress4.png'), smallImage: require('./assets/add_circle.png') },
  { id: '5', name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress5.png'), smallImage: require('./assets/add_circle.png') },
  { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress6.png'), smallImage: require('./assets/add_circle.png') },
  { id: '7', name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress7.png'), smallImage: require('./assets/add_circle.png') },
  { id: '8', name: 'lame', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress3.png'), smallImage: require('./assets/add_circle.png') },
];

const HomeScreen = ({ navigation }) => {
  const addToCart = async (product) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];

      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return;
      }

      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Image source={require('./assets/Menu.png')} style={styles.headerImage} />
        <Image source={require('./assets/Logo.png')} style={styles.headerImage1} />
        <View style={styles.twoImages}>
          <Image source={require('./assets/Search.png')} style={styles.smallHeaderImage1} />
          <Image source={require('./assets/shoppingBag.png')} style={styles.smallHeaderImage} />
        </View>
      </View>
      

      <View style={styles.textRow}>
        <Text style={styles.story}>O U R  S T O R Y</Text>
        <View style={styles.twoImages}>
          <Image source={require('./assets/Listview.png')} style={styles.smallHeaderImage0} />
          <Image source={require('./assets/Filter.png')} style={styles.smallHeaderImage2} />
        </View>
      </View>

      <View style={styles.productsWrapper}>
        {products.map((product, index) => {  
          if (index % 2 === 0) {
            return (
              <View key={index} style={styles.productRow}>
                <View style={styles.productContainer}>
                  <TouchableOpacity onPress={() => addToCart(products[index])}>
                  <Image source={products[index].image} style={styles.image} />
                    <Image source={products[index].smallImage} style={styles.smallImageOverlay} />
                  </TouchableOpacity>
                  <View style={styles.productDetails}>
                    <Text style={styles.n}>{products[index].name}</Text>
                    <Text style={styles.d}>{products[index].description}</Text>
                    <Text style={styles.p}>{products[index].price}</Text>
                  </View>
                </View>
                {index + 1 < products.length && (
                  <View style={styles.productContainer}>
                    <TouchableOpacity onPress={() => addToCart(products[index + 1])}>
                      <Image source={products[index + 1].image} style={styles.image} />
                      <Image source={products[index + 1].smallImage} style={styles.smallImageOverlay} />
                    </TouchableOpacity>
                    <View style={styles.productDetails}>
                      <Text style={styles.n}>{products[index + 1].name}</Text>
                      <Text style={styles.d}>{products[index + 1].description}</Text>
                      <Text style={styles.p}>{products[index + 1].price}</Text>
                    </View>
                  </View>
 )}
              </View>
            
            );
          }
          return null;
        })}
      </View>
  </View>
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:50,
    paddingLeft: 15,
    paddingRight:15,
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  screenContainer: {
    backgroundColor: 'white',
    marginTop: 45, 
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerImage: {
    width: 40,
    height: 35,
    
  },

  story:{
    marginTop:20,
    fontSize:25,

  },

  headerImage1: {
    width: 100,
    height: 40,
    marginLeft:65,
  },

  n:{
  fontSize:21,

  },

  d:{
    fontSize:14,
    width: 195,
  
    },

    p:{
      fontSize:20,
      color:'#ffa07a',
      
      },

  twoImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  smallHeaderImage: {
    width: 30,
    height: 35,
  },
  smallHeaderImage1: {
    width: 32,
    height: 35,
    marginLeft:40,
  },

  smallHeaderImage0: {
    width: 36,
    height: 38,
    marginLeft:40,
    marginTop:20,
  },

  smallHeaderImage2: {
    width: 38,
    height: 40,
    marginLeft:10,
    marginTop:20,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  productsWrapper: {
    padding: 10,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productContainer: {
    width: '48%',
  },
  image: {
    width: '100',
    height: 290,
  },
  smallImageOverlay: {
    position: 'absolute',
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