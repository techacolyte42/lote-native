import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import config from '../../../config/config.js';


/* ------------ MAP STUFF -------------------------------*/
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import MapContainer from './MapContainer';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //height: 100%,
    //width: 100%,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


/*-----------END MAP STUFF--------------------------------*/

class Home extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
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
      console.log ('profile email', profile.email);
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
          console.log ('were here');
          console.log (err);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapContainer style={styles.container}/>
        <Header headerText='Home' { ...this.props } />
        {/*<Text style={{ marginTop: 10 }}>Lote, location-based notes</Text>
        <Text style={{ marginTop: 20 }}>
          Recipe Count: { this.props.recipes }
        </Text>
        <TouchableHighlight onPress= {() => { this.props.addRecipe() }}>
          <Text>Add recipe</Text>
        <MapContainer />
        <View style={styles.container}>
        </View>
        </TouchableHighlight>*/}
      </View>
    );
  }
}

export default Home;
