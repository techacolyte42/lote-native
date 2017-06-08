import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import GeolocationExample from './GeolocationExample';

class Random extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Random',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    return (
      <View>
        <Header headerText='Random' />
        <Text>{ this.props.profile.display }</Text>
        <GeolocationExample />
      </View>
    );
  }
}

export default Random;
