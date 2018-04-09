import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { height } = Dimensions.get('window');


export default class Search extends Component {
  // static navigationOptions = {

  //   tabBarLabel: 'Search',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../../imgs/search11.png')}
  //       style={[styles.icon, { tintColor }]}
  //     />
  //   )
  // };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>

          <Text>
            Search Component
        </Text>
        <TouchableOpacity style={{ backgroundColor: 'green' }}
          onPress={() => { this.props.navigation.navigate('ProductDetail'); }}
        >
          <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Detail </Text>
        </TouchableOpacity>
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
    backgroundColor: '#E0F2F1',
  },
});
