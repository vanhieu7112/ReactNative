import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <Text>ProductDetail</Text>
                <TouchableOpacity style={{ backgroundColor: 'green' }}
                    onPress={() => { this.props.navigation.goBack(); }}
                >
                    <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
