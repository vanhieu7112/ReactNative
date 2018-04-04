import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <Text>ListProduct</Text>
                <TouchableOpacity style={{ backgroundColor: 'green' }}
                    onPress={() => { this.props.navigation.navigate('ProductDetail'); }}
                >
                    <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Detail1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'green' }}
                    onPress={() => { this.props.navigation.goBack(); }}
                >
                    <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
