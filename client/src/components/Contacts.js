import React from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';

class Contacts extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Contacts',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() {
    return (
      <View>
        <Header headerText='Contacts' />
        <Button
          title="Edward Kim"
          onPress={() => navigate('Lotes', {user: 'Edward Kim'})}
        />
        <Button
          title="Alana Turangan"
          onPress={() => navigate('Lotes', {user: 'Alana Turangan'})}
        />
        <Button
          title="Conor Wilson"
          onPress={() => navigate('Lotes', {user: 'Conor Wilson'})}
        />
        <Button
          title="Ivana He"
          onPress={() => navigate('Lotes', {user: 'Ivana He'})}
        />
      </View>
    );
  }
}

export default Contacts;
