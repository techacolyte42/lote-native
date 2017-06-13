import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import { NavigationActions } from 'react-navigation';

class MyProfile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'My Profile',
    tabBarIcon: () => (<Icon size={ 24 } color="white" name="face" />)
  }

  render() {
    return (
      <View>
        <Header headerText="My Profile" { ...this.props } />
        <Text style={{ marginTop: 10 }}>{ this.props.profile.display }</Text>
      </View>
    );
  }
}

export default MyProfile;
