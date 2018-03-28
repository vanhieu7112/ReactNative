import React, { Component } from 'react';

import Details from './screens/Home/Details';
import Home from './screens/Home/Home';
import Cart from './screens/Cart/Cart';
import Contact from './screens/Contact/Contact';
import Search from './screens/Search/Search';
import Menu from './screens/Menu';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { View, Text, Image,  } from 'react-native';

// import Header from './Header';
// const MyStackNavigator = StackNavigator({
//   Home: { screen: Home },
//   Details: { screen: Details },
// },
//   {
//     headerMode: 'none'
//   }
// );

export const TabMyShop = TabNavigator({
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

