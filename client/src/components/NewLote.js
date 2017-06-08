import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';

class NewLote extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'New Lote',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    return (
      <View>
        <Header headerText='New Lote' />
        <Text>New Lote Form Goes Here</Text>
      </View>
    );
  }
}

export default NewLote;
