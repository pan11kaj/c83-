import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/Settings';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/notificationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
        Home : {
          screen : AppTabNavigator
          },
        MyDonations : {
          screen : MyDonationScreen
        },
        Notification : {
          screen : NotificationScreen
        },
        Setting : {
          screen : SettingScreen
        }
      },
        {
          contentComponent:CustomSideBarMenu
        },
        {
          initialRouteName : 'Home'
        })



