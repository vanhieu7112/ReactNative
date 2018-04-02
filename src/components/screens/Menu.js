import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity

} from 'react-native';

import profileIcon from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogedIn: true };
    }
    render() {
        // console.log(this.props);
        const { navigate } = this.props.navigation;
        const { container, profile, btnStyle, btnText, btnSignInStyle, btnTextSignIn, loginContainer, userName } = styles;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={loginContainer}>
                    <Text style={userName}>Bui Van Hieu</Text>
                    <View>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnTextSignIn}>Order History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnTextSignIn}>Change Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnTextSignIn}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                    <View />    
                </View>
        );
        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX; 
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                {mainJSX}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B089',
        fontSize: 20
    },
    btnSignInStyle: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        // paddingHorizontal: 70,
        marginBottom: 10,
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15,

    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    userName: {
        color: '#fff', 
        fontSize: 20 
    }
});
{ /* <Button
onPress={() => navigate('Authentication')}
title="Open Authentication"
/>
<Button
onPress={() => navigate('ChangeInfo')}
title="Open ChangeInfo"
/>
<Button
onPress={() => navigate('OrderHistory')}
title="Open OrderHistory"
/> */ }
