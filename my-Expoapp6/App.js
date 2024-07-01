import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { ScrollView } from 'react-native';


const App = () => {
  return (
    <ScrollView>
    <NavigationContainer>
      <HomeScreen/>
      <CartScreen/>
      
    </NavigationContainer>
    </ScrollView>
  );
};

export default App;
