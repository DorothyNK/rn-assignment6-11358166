import AsyncStorage from '@react-native-async-storage/async-storage';

class ShoppingCart {
  constructor() {
    this.items = []; // Initialize the cart items array
  }

  addItem(item) {
    this.items.push({...item, quantity: 1 }); // Add item to the cart with a default quantity of 1
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id!== itemId); // Remove item from the cart
  }

  saveCart() {
    return AsyncStorage.setItem('cart', JSON.stringify(this.items)); // Save the cart items to AsyncStorage
  }

  loadCart() {
    return AsyncStorage.getItem('cart').then(cart => {
      if (cart) {
        this.items = JSON.parse(cart); // Load the cart items from AsyncStorage
      }
    });
  }
}

