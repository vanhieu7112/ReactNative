import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignIn extends Component {
    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput underlineColorAndroid='transparent' style={inputStyle} placeholder="Enter your email" />
                <TextInput underlineColorAndroid='transparent' style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
      },
      bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        color: '#fff',
        fontWeight: '400'
      }
});