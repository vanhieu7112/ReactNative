import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class OrderHistory extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        
        <Text style={{}}>
        OrderHistory Component
        </Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
