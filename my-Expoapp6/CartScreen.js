import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cartItems = [
  { id: '1', name: 'O F F I C E  W E A R', description: 'Office wear for you office', price: '$120', image: require('./assets/dress1.png'), smallImage: require('./assets/remove.png') },
  { id: '2', name: 'L A M E R E I', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('./assets/dress4.png'), smallImage: require('./assets/remove.png') },
  { id: '3', name: 'C H U R C H  W E A R', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('./assets/dress3.png'), smallImage: require('./assets/remove.png') },
];

const CartScreen = ({ navigation }) => {
  const removeFromCart = async (product) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];

      const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
      // Update state to reflect changes if you have a state management approach
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.cartHeader}>
          <Image source={require('./assets/Logo.png')} style={styles.cartHeaderImage} />
          <Image source={require('./assets/Search.png')} style={styles.cartHeaderImage2} />
        </View>
        <View style={styles.checkOutContainer}>
          <Text style={styles.checkOutText}>C H E C K  O U T</Text>
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
              <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
                <Image source={require('./assets/remove.png')} style={styles.cartSmallImage} />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.estimatedTotal}>
          <Text style={styles.estimatedTotalText}>EST.  TOTAL</Text>
          <Text style={styles.estimatedTotalPrice}>$240</Text>
        </View>

        <View style={styles.checkoutButtonContainer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Image source={require('./assets/shoppingBag.png')} style={styles.checkoutIcon} />
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
    backgroundColor: '#f0f0f0',
  },
  screenContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cartHeaderImage: {
    width: 125,
    height: 48,
    marginLeft:110,

  },
  cartHeaderImage2: {
    width: 41,
    height: 39,

  },
  checkOutContainer: {
      alignItems: 'center',
      padding: 10,
  
  },
  checkOutText: {
    fontSize: 27,
    paddingRight:20,
    paddingTop:18,

  },

  checkOutLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    width:220,
    paddingRight:20,


  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',

  },
 
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  cartImage: {
    width: 175,
    height: 225,
  },
  cartDetails: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  cartItemName: {
    fontSize:20,
  },


  cartItemDescription: {
    fontSize:14,
    width: 200,
  },


  cartItemPrice: {
    fontSize:20,
      color:'#ffa07a',
  },
  removeButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    padding:10,
    
  },
  cartSmallImage: {
    marginTop:49,
    width: 30,
    height: 30,
    
  },
  estimatedTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 350,
    borderTopColor: '#ccc',
    
  },

  estimatedTotalText: {
    fontSize:23,
    paddingLeft:15,
    paddingTop:33,
  },

  estimatedTotalPrice: {
    fontSize:28,
      color:'#ffa07a',
      paddingRight:15,
      paddingTop:28,
  },

  checkoutButtonContainer: {
    padding: 20,
    alignItems: 'center',
    
  },

  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
    width:430,
    borderRadius: 5,
  },

  checkoutIcon: {
    width: 34,
    height: 34,
    tintColor:'white',
    marginLeft:120,
    marginRight:15,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize:21,
    
    
  },
});

export default CartScreen;
