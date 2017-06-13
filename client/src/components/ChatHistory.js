import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header } from './common';

class ChatHistory extends Component {
  static navigationOptions = {
    tabBarLabel: 'Lotes',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />),
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
    
      <Text>{ this.props.activeContact.display ? this.props.activeContact.display : this.props.activeContact.email }
          { !this.props.activeContact.email && 'No Contact Selected'}</Text>
      </View>
    );
  }
}

export default ChatHistory



// import React, { Component } from 'react';
// import { TextInput, View, Text, ScrollView } from 'react-native';

// class ChatHistory extends Component {
//   render() {
//     return (
//       <Text>ChatHistory placeholder page</Text>
//     )
//   }
// }

// export default ChatHistory