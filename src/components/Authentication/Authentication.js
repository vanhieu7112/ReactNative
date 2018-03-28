import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Authentication extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        
        <Text style={{}}>
            Authentication Component  
        </Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
