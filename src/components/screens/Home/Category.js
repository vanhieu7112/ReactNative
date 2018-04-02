import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../media/temp/little.jpg';
import maxiIcon from '../../../media/temp/maxi.jpg';
import partyIcon from '../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

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

    render() {
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
                <View style={imageStyle}>
                    <ImageBackground resizeMode='cover' style={imageStyle} source={littleIcon}> 
                        <Text style={cateTitle}>
                            Little Adress
                        </Text>
                    </ImageBackground>
                </View>
                <View style={imageStyle}>
                    <ImageBackground resizeMode='cover' style={imageStyle} source={maxiIcon}> 
                        <Text style={cateTitle}>
                            Maxi Adress
                        </Text>
                    </ImageBackground>
                </View>
                <View style={imageStyle}>
                    <ImageBackground resizeMode='cover' style={imageStyle} source={partyIcon}>
                        <Text style={cateTitle}>
                                Party Adress
                        </Text>
                    </ImageBackground> 
                </View>
            </Swiper>);
        } else {
            swiper = <View />;
        }
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 0, }}>
                    <Text style={texStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 3 }}>
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
        height: height * 0.33,
        backgroundColor: '#FFF',
        margin: 10,
        elevation: 5,
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