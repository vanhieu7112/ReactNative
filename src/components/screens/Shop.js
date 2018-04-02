import React, { Component } from 'react';
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Contact from '../screens/Contact/Contact';
import Search from '../screens/Search/Search';
import Header from './Header';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

const TabMyShop = TabNavigator({
    Home: { screen: Home },
    Cart: { screen: Cart },
    Search: { screen: Search },
    Contact: { screen: Contact },
},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#FFF',
                elevation: 20
            },
            labelStyle: {
                margin: 0,
                fontSize: 10,
            },
            inactiveTintColor: '#9E9E9E',
            activeTintColor: '#34B089',
            showIcon: true,
            indicatorStyle: { backgroundColor: 'transparent', }
        },
    });


export default class Shop extends Component {
    openMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                   <Header onOpen={this.openMenu.bind(this)} /> 
                  
                </View>
                <View style={{ flex: 1 }}>
                    <TabMyShop />
                </View>
            </View>
        );
    }
}
