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
                backgroundColor: '#dddddd'
            },
            labelStyle: {
                fontSize: 10,
            },
            inactiveTintColor: '#000000',
            activeTintColor: '#00796B',
            showIcon: true,
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
                   {/* <TouchableOpacity
                   onPress={() => { this.props.navigation.navigate('DrawerOpen'); }}
                   >
                   <Image
                       source={require('./../imgs/menu.png')}
                   />
                    </TouchableOpacity> */}
                  
                </View>
                <View style={{ flex: 1 }}>
                    <TabMyShop />
                </View>
            </View>
        );
    }
}
