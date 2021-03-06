import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import register from '../../api/register';
import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  gotoSignIn() {
    this.setState({ isSignIn: true });
  }

  signIn() {
    this.setState({ isSignIn: true });
  }
  signUp() {
    this.setState({ isSignIn: false });
  }
  goBackToMain() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const { goBack } = this.props.navigation;
    const { row1, iconStyle, 
      titleStyle, container, 
      controlStyle, signInStyle, signUpStyle,
      activeStyle, inactiveStyle
    } = styles;

    const { isSignIn } = this.state;
  const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;

    return (
      <View style={container}>

        <View style={row1}>
            <TouchableOpacity
              onPress={() => goBack()}
            >
              <Image source={icBack} style={iconStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlStyle}>
            <TouchableOpacity style={signInStyle} onPress={() => { this.signIn(); }}>
              <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyle} onPress={() => { this.signUp(); }}>
              <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
            </TouchableOpacity>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#3EBA77',
    padding: 20,
    justifyContent: 'space-between'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
  iconStyle: { width: 25, height: 25 },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#3EB377'
  },
  signInStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    marginLeft: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },

});


{ /* <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back to main</Text>
        </TouchableOpacity> */ }
