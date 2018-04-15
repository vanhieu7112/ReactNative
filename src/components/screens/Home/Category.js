import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../media/temp/little.jpg';
import maxiIcon from '../../../media/temp/maxi.jpg';
import partyIcon from '../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.1.3/api/images/type/';

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleSwiper: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);
    }
    // openListProduct() {
    //     this.props.navigation.navigate('ListProduct');
    // }
    render() {
        const { types } = this.props;
        const { wrapper, texStyle, imageStyle, scrollwrap, cateTitle } = styles;
        let swiper = null;
        if (this.state.visibleSwiper) {
            swiper = (<Swiper
                dotColor={'#E0E0E0'}
                activeDotColor={'#34B089'}
                horizontal
                loop={true}
                bounces
                autoplay
                autoplayTimeout={4}
                showsButtons={false}
                removeClippedSubviews={false}
            >
                {types.map(e => (
                    <View style={imageStyle} key={e.id}>
                        <TouchableOpacity onPress={() => { this.props.onOpen(); }}>
                            <ImageBackground source={{ uri: `${url}${e.image}` }} resizeMode='cover' style={imageStyle} >
                                <Text style={cateTitle}>
                                    {e.name}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                ))}
            </Swiper>);
        } else {
            swiper = <View />;
        }
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={texStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    {swiper}
                </View>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        elevation: 4,
        padding: 10,
        paddingTop: 0,
        // paddingBottom: 5 
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    scrollwrap: {
        backgroundColor: '#f3f3f3',
    },
    cateTitle: {
        fontSize: 17,
        color: '#9A9A9A',
        fontFamily: 'Rubik'
    }
});
