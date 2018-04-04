import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

const { height } = Dimensions.get('window');

export default class Home extends Component {

  // static navigationOptions = {
  //   title: 'HOME',
  //   tabBarLabel: 'Home',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../../imgs/home11.png')}
  //       style={[styles.icon, { tintColor }]}
  //     />
  //   )
  // };

  openListProduct() {
    this.props.navigation.navigate('ListProduct');
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#BDBDBD' }}>
        <Collection />
        <Category onOpen={this.openListProduct.bind(this)} />
        <TopProduct />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#BDBDBD',
  },
});
