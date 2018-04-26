import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import sp1 from '../../../media/temp/sp1.jpeg';
import sp2 from '../../../media/temp/sp2.jpeg';
import sp3 from '../../../media/temp/sp3.jpeg';
import sp4 from '../../../media/temp/sp4.jpeg';

const urlProduct = 'http://192.168.1.3/api/images/product/';

export default class extends Component {
    render() {
        const { containerTopProduct, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice
        } = styles;
        return (
            <View style={containerTopProduct}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <FlatList
                        data={this.props.topProducts}
                        renderItem={({ item }) =>
                            <View>
                                <TouchableOpacity style={productContainer} onPress={() => { this.props.onOpen(); }}>
                                    <Image source={{ uri: `${urlProduct}${item.images[0]}` }} style={productImage} />
                                    <Text style={productName}>{item.name.toUpperCase()}</Text>
                                    <Text style={productPrice}>{item.price}$</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    containerTopProduct: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        color: '#D3D3CF'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 0
    },
    productContainer: {
        marginTop: 0,
        margin: 10,
        width: productWidth,
        elevation: 3,
        paddingBottom: 10,
        marginBottom: 10,
        borderWidth: 0
    },
    productImage: {
        width: productWidth,
        height: productImageHeight,
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        // marginBottom: -10,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
