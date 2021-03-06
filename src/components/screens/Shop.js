import React, { Component } from 'react';
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Contact from '../screens/Contact/Contact';
import Search from '../screens/Search/Search';
import Header from './Header';
import ProductDetail from './Home/ProductDetail';
import ListProduct from './Home/ListProduct';
import TopProduct from './Home/TopProduct';
import Category from './Home/Category';
import { View, Image, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import refreshToken from '../../api/refreshToken';
import global from '../global';

// const CategoryStack = StackNavigator({
//     Category: { screen: Category },
//     ListProduct: { screen: ListProduct },
// },
// {
//     headerMode: 'none'
// }
// ); 

const HomeStack = StackNavigator({
    ManHinh_Home: { screen: Home },
    ListProduct: { screen: ListProduct },
    // TopProduct: { screen: TopProduct },
    ProductDetail: { screen: ProductDetail },
},
    {
        headerMode: 'none'
    }
);
const CartStack = StackNavigator({
    ManHinh_Cart: { screen: Cart },
    ProductDetail: { screen: ProductDetail },
},
    {
        headerMode: 'none'
    }
);
const SearchStack = StackNavigator({
    ManHinh_Search: { screen: Search },
    ProductDetail: { screen: ProductDetail },
},
    {
        headerMode: 'none'
    }
);
const TabMyShop = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'HOME',
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/home11.png')}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Cart: {
        screen: CartStack,
        navigationOptions: {
            title: 'Cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/cart11.png')}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {

            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/search11.png')}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
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
    
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))  
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log('LOI CHECK LOGIN', err));

        // setInterval(() => {
        //     getToken()
        //     .then(token => refreshToken(token));
        // }, 60 * 1000);
    }

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#BDBDBD',
    },
});
