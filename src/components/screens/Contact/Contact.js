import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Contact extends Component {
  static navigationOptions = {

    tabBarLabel: 'Contact',
    tabBarIcon: ({ tintColor }) => (
      <Image 
       source={require('../../imgs/contact.png')}
       style={[styles.icon, { tintColor }]} 
      /> 
    )
   };
  render() {
    return (
      <View style={styles.container}>
        
        <Text>
        Contact Component
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
