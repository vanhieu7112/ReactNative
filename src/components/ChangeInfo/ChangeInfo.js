import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class ChangeInfo extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        
        <Text style={{}}>
        ChangeInfo Component
        </Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
