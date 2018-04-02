import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, texStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={texStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4 }}>
                <Image source={bannerImage} style={imageStyle} />
                </View>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465; //410

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20, 
        backgroundColor: '#FFF',
        margin: 10,
        // shadowColor: '#2E272B',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.2,
        elevation: 5,
        padding: 10,
        paddingTop: 0,
    },
    texStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
});
