import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';

class MyProfile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'My Profile',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    return (
      <View>
        <Header headerText='My Profile' />
        <Text>{this.props.profile.display}</Text>
      </View>
    );
  }
}

export default MyProfile;
