import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/bookdonateScreen';
import Rd from '../screens/rd';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RD : {
    screen :Rd,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'RD'
  }
);
