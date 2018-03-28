import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';

// import global from '../../global';
// import icLogo from '../../../media/appIcon/ic_logo.png';
// import icMenu from '../../../media/appIcon/ic_menu.png';
// import search from '../../../api/searchProduct';

const { height } = Dimensions.get('window');

export default class Header extends Component {

render() {
    // const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;

    return (
        <View style={{ height: height / 8 }}>
            <TouchableOpacity
                    style={{}}
                    onPress={() => { this.props.onOpen(); }}
            >
                    <Image
                        source={require('./../imgs/menu.png')}
                    />
                </TouchableOpacity>
        </View>
    );
}
}

// const styles = StyleSheet.create({
//     wrapper: {
//         height: height / 8,
//         backgroundColor: '#34B089',
//         padding: 10,
//         justifyContent: 'space-around'
//     },
//     row1: { flexDirection: 'row', justifyContent: 'space-between' },
//     textInput: {
//         height: height / 23,
//         backgroundColor: '#FFF',
//         paddingLeft: 10,
//         paddingVertical: 0
//     },
//     titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
//     iconStyle: { width: 25, height: 25 }
// });
