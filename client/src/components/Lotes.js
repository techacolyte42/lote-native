import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header } from './common';

class Lotes extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Lotes',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />),
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      
      { this.props.activeContact.display ? this.props.activeContact.display : this.props.activeContact.email }
          { !this.props.activeContact.email && 'No Contact Selected'}
      </View>
    );
  }
}

export default Lotes;
