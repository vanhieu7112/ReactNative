import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';

// import global from '../../global';
import icLogo from '../../media/appIcon/ic_logo.png';
import icMenu from '../../media/appIcon/ic_menu.png';
// import search from '../../../api/searchProduct';

const { height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;

        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity
                        onPress={() => { this.props.onOpen(); }}
                    >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    underlineColorAndroid='transparent'
                    style={textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around',
        elevation: 4
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0,
        borderRadius: 0
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
