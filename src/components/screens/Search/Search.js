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
  static navigationOptions = {

    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../imgs/search.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>

          <Text>
            Search Component
        </Text>

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
