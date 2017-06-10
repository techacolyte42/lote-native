import React, { Component } from 'react';
import axios from 'axios';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Dropdown, { Select, Option, OptionList } from 'react-native-selectme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import { Container, Content, List, ListItem, Thumbnail, Body, Item, Input, Form, Button } from 'native-base';
import MapView from 'react-native-maps';
//import MapContainer from './MapContainer';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //height: 100%,
    //width: 100%,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class NewLote extends Component {
  static navigationOptions = {
    tabBarLabel: 'New Lote',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }
  constructor(props) {
    super(props);
    
    this.state= {
      lock: false,
      radius: 90
    };

    this.getOptionList = this.getOptionList.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.placeSubmit = this.placeSubmit.bind(this);
    // this.placeSearch = this.placeSearch.bind(this);
    // this.placeRef = this.placeRef.bind(this);
    // this.handleLockToggle = this.handleLockToggle.bind(this);
    // this.handleRecipientChange = this.handleRecipientChange.bind(this);
    // this.handleRadiusChange = this.handleRadiusChange.bind(this);

  }

  componentWillMount() {
    this.props.setActivePage('New Lote');
  }

  getOptionList() {
    return this.refs['OPTIONLIST'];
  }
  // handleRecipientChange (event, index, receiver) {
  //   this.props.setActiveContact(receiver);
  // }

  // handleLockToggle(event, checked) {
  //   this.setState({ lock: checked });
  // }

  // handleRadiusChange(event, index, radius) {
  //   this.setState({ radius: radius});
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   axios.post(`/api/profiles/${this.props.profile.id}/lotes`, {
  //     senderId: this.props.profile.id,
  //     receiverId: this.props.activeContact.id,
  //     loteType: 'lotes_text',
  //     radius: this.state.radius,
  //     message: this.props.activeMessage,
  //     lock: this.state.lock,
  //     longitude: this.props.lotecation.lng || this.props.userLocation.lng,
  //     latitude: this.props.lotecation.lat || this.props.userLocation.lat
  //   })
  //   .then((res) => {
  //     this.props.setActiveMessage('');
  //     this.props.getLotes(this.props.profile.id);
  //     this.props.history.push('/lotes');
  //   })
  //   .catch((err) => {
  //     console.log (err);
  //   });
  // }

  // placeRef(ref) {
  //   this.searchBox = ref ? ref.input : null;
  // }

  // placeSubmit(event) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  // placeSearch(event) {
  //   console.log('hello');
  // }

/*
      <View style={styles.container}>
        <MapView provider="google"
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
*/

  render() {
    const {lotecation, userLocation} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header headerText='New Lote' />
        <Select width={250} ref="SELECT1" optionListRef={ this.getOptionList }>
          <Option>Stuff</Option>
          <Option>More Stuff</Option>
          <Option>Stuffing</Option>
        </Select>
        <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

export default NewLote;

// <View>
//         <Header headerText='New Lote' />
//         <Text>New Lote Form Goes Here</Text>
//       </View>
