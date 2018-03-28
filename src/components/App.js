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
import Shop from './screens/Shop';
import { StackNavigator, DrawerNavigator } from 'react-navigation';


const MyDrawerNavigator = DrawerNavigator({
  MyHome: { screen: Shop },
},
  {
    contentComponent: props => <Menu {...props} />
  });

// export default MyDrawerNavigator;
export default StackNavigator({
  TabsWithDrawer: {
    screen: MyDrawerNavigator,
  },
  Authentication: {
    screen: Authentication
  },
  ChangeInfo: {
    screen: ChangeInfo
  },
  OrderHistory: {
    screen: OrderHistory
  },
}, {  
  // In modal mode screen slides up from the bottom
  mode: 'card',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
   headerMode: 'none',
});
