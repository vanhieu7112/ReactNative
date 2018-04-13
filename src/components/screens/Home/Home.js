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

  constructor(props) {
    super(props);
    this.state = {
        types: [],
    };
}
  componentDidMount() {
    fetch('http://192.168.1.3/api/')
        .then(res => res.json())
        .then(resJSON => {
            const { type } = resJSON;
            this.setState({ types: type });
        });
}

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
  openDetail() {
    this.props.navigation.navigate('ProductDetail'); 
  }
  render() {
    const { types } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#BDBDBD' }}>
        <Collection />
        <Category onOpen={this.openListProduct.bind(this)} types={types} />
        <TopProduct onOpen={this.openDetail.bind(this)} />
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
