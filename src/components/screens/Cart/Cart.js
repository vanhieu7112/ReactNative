import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor }) => (
      <Image 
       source={require('../../imgs/cart11.png')}
       style={[styles.icon, { tintColor }]} 
      /> 
    )
   };
  render() {
    return (
      <View style={styles.container}>
        
        <Text>
        Cart Component
        </Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
  },
});
