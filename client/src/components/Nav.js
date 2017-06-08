import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import * as actionCreators from '../actions/actionCreators';

import Home from './Home';
import Contacts from './Contacts';
import NewLote from './NewLote';
import MyProfile from './MyProfile';
import Random from './Random';

var HomeScreen = connect((state) => { return state; }, actionCreators)(Home);
var ContactsScreen = connect((state) => { return state; }, actionCreators)(Contacts);
var NewLoteScreen = connect((state) => { return state; }, actionCreators)(NewLote);
var MyProfileScreen = connect((state) => { return state; }, actionCreators)(MyProfile);
var RandomScreen = connect((state) => { return state; }, actionCreators)(Random);

const Nav = TabNavigator({
  Home: { screen: HomeScreen  },
  Contacts: { screen: ContactsScreen },
  NewLote: { screen: NewLoteScreen },
  MyProfile: { screen: MyProfileScreen },
  Random: { screen: RandomScreen },
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Home: {
          barBackgroundColor: '#37474F'
        },
        Contacts: {
          barBackgroundColor: '#00796B'
        },
        NewLote: {
          barBackgroundColor: '#37474F',
          // activeIcon: <Icon size={24} color="pink" name="tv" />
        },
        MyProfile: {
          barBackgroundColor: '#00796B',
          // activeLabelColor: '#212121',
          // activeIcon: <Icon size={24} color="#212121" name="tv" />
        },
        Random: { 
          barBackgroundColor: '#37474F',
        }
      }
    },
  }
});

export default Nav;
