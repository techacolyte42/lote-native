import React from 'react';
import { ScrollView, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import config from '../../../config/config.js';

class Home extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  componentWillMount() {
    // user authentication
    var Auth0Lock = require('react-native-lock');
    var lock = new Auth0Lock({ clientId: config.AUTH0_LOCK_CLIENT_ID, domain: config.AUTH0_LOCK_DOMAIN });

    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log('Logged in with Auth0!');

      this.props.getProfileByEmail(profile.email)
        .then((profile) => {
          console.log('RESULT', profile);
          this.props.setProfile(profile);
          var user = profile;

          this.props.setActiveContact(user);
          this.props.getLotes(user.id);
          this.props.getContacts(user.id);
        })
        .catch(function (err) {
          console.log (err);
        });
    });
  }

  render() {
    return (
      <ScrollView>
        <Header headerText='Home' />
        <Text>Lote, location-based notes</Text>
        <Text style={{ marginTop: 20 }}>
          Recipe Count: { this.props.recipes }
        </Text>
        <TouchableHighlight onPress= {() => { this.props.addRecipe() }}>
          <Text>Add recipe</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

export default Home;
