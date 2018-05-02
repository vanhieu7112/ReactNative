import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        getToken()
        .then(a => console.log('TOKEN:::' + a));
    }
    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => { 
            global.onSignIn(res.user); 
            this.props.goBackToMain();
            saveToken(res.token);
        })
        .catch(err => console.log(err));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput 
                    underlineColorAndroid='transparent' 
                    style={inputStyle} placeholder="Enter your email" 
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    underlineColorAndroid='transparent' 
                    style={inputStyle} placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry 
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText} >SIGN IN NOW</Text>
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