import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Home extends Component {

  static navigationOptions = {
    title: 'HOME',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../imgs/home.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    return (
    <View style={{ flex: 1 }}>  
      <View style={styles.container}>
        <Text>Home Shop</Text>
        
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDBDBD',
  },
});
