import React, { Component } from 'react';
import axios from 'axios';
import { TextInput, View, Text, StyleSheet, ScrollView } from 'react-native';
import CheckBox from 'react-native-checkbox';
import Dropdown, { Select, Option, OptionList } from 'react-native-selectme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './common';
import { Container, Content, List, ListItem, Thumbnail, Body, Item, Input, Form, Button, Label } from 'native-base';
import MapView from 'react-native-maps';
import config from '../../../config/config.js';

const apiBaseUrl = config.API_BASE_URL;

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


class NewLote extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  static navigationOptions = {
    tabBarLabel: 'New Lote',
    tabBarIcon: () => (<Icon size={24} color="white" name="add-location" />)
  }

  constructor(props) {
    super(props);
    
    this.state= {
      lock: false,
      radius: 90
    };

    this.getOptionList = this.getOptionList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.placeRef = this.placeRef.bind(this);
    this.handleLockToggle = this.handleLockToggle.bind(this);
    this.handleRecipientChange = this.handleRecipientChange.bind(this);
    this.handleRadiusChange = this.handleRadiusChange.bind(this);

    this.onLearnMore = this.onLearnMore.bind(this);
  }

  onLearnMore() {
    return this.props.navigation.navigate('Map');
  }

  componentWillMount() {
    this.props.setActivePage('New Lote');
  }

  getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  handleRecipientChange (event, index, receiver) {
    console.log('receipient change', event)
    this.props.setActiveContact(event);
  }

  handleLockToggle(checked) {
    console.log('value of checkbox', checked);
    this.setState({ lock: checked });
  }

  handleRadiusChange(value) {
    this.setState({ radius: value });
  }

  handleSubmit(event) {
    event.preventDefault();

  //UNCOMMENT THIS BLOCK WHEN READY FOR SOCKET
  //   let loteInfo = {
  //     senderId: this.props.profile.id, 
  //     receiverId: this.props.activeContact.id, 
  //     loteType: 'lotes_text', 
  //     radius: this.state.radius, 
  //     message: this.props.activeMessage,
  //     lock: this.state.lock,
  //     longitude: this.props.lotecation.lng || this.props.userLocation.lng,
  //     latitude: this.props.lotecation.lat || this.props.userLocation.lat
  //   }

  //   socket.emit('send message', loteInfo, (err, msg) => {
  //     if (err) {
  //       console.log(err); 
  //     } else {
  //       this.props.setActiveMessage(''); 
  //       //this.props.history.push('/lotes'); 
  //     }
  //   });
  // }


  //AXIOS.POST TO END OF THE METHOD IS FOR OLD POST REQUEST,
  //DELETE WHEN ADDING SOCKET FEATURE 
    axios.post(`${apiBaseUrl}/profiles/${this.props.profile.id}/lotes`, {
      senderId: this.props.profile.id,
      receiverId: this.props.activeContact.id,
      loteType: 'lotes_text',
      radius: this.state.radius,
      message: this.props.activeMessage,
      lock: this.state.lock,
      longitude: this.props.lotecation.lng || this.props.userLocation.lng,
      latitude: this.props.lotecation.lat || this.props.userLocation.lat
    })
    .then((res) => {
      this.props.setActiveMessage('');
      this.props.getLotes(this.props.profile.id);
      this.props.history.push('/lotes');
    })
    .catch((err) => {
      console.log (err);
    });

    return this.props.navigation.navigate('Map');
  }
  //END

  placeRef(ref) {
    this.searchBox = ref ? ref.input : null;
  }
  // this function is used for a form in the web app -- not sure yet on how to implement similarly here 
  // placeSubmit(event) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  watchID: ?number = null;

  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        var lastPosition = JSON.stringify(position);
        console.log ('lastPosition', lastPosition);
        this.setState({lastPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 1}
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const {lotecation, userLocation} = this.props;
    return (
      <Container>
        <Header headerText='New Lote' { ...this.props } />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Select width={250} ref="SELECT1" defaultValue="select contact" optionListRef={ this.getOptionList } onSelect={ this.handleRecipientChange }>
            { this.props.contacts.map((contact) => {
                  return (<Option key={ contact.receiver.id } onPress={ () => this.handleRecipientChange(contact.receiver) }>
                    { contact.receiver.email }</Option>
                  )
                })
            }
          </Select>

          <OptionList ref="OPTIONLIST" />  

          <Item underline onChangeText={ (event) => this.props.setActiveMessage(event.target.value) }>
            <Input placeholder='Enter a message' />
          </Item>  

          <Item underline>
            <Input id="locationSearch" ref={ this.placeRef } placeholder='Location search' />
          </Item>  

          <View><Text></Text></View>
          <View><Text>Radius:</Text></View>

          <Select width={250} ref="SELECT1" optionListRef={ this.getOptionList } onSelect={ this.handleRadiusChange }>
            <Option key={ 20 }>20 meters</Option>
            <Option key={ 100 }>100 meters</Option>
            <Option key={ 500 }>500 meters</Option>
            <Option key={ 2500 }>2500 meters</Option>
            <Option key={ 10000 }>10000 meters</Option>
          </Select>

          <OptionList ref="OPTIONLIST" />  

           <View><Text></Text></View>   
           <View><Text></Text></View>    
           <View><Text></Text></View>    
           <View><Text></Text></View>    
           <View><Text></Text></View>    
           <View><Text></Text></View>    
           <View><Text></Text></View>    
           <View><Text></Text></View>
           <View><Text></Text></View>    
           <View><Text></Text></View>

         
     

          <CheckBox
            label="Location-Locked"
            checked={ this.state.lock }
            onChange={ (checked) => this.handleLockToggle(!checked) }
          />  

          <View><Text></Text></View>

          <View style={{ alignItems: 'center' }}>
            <Button primary onPress={ this.handleSubmit }>
              <Text>Submit</Text>
            </Button>
          </View>  
        </View>
      </Container>
    )
  }
}

export default NewLote;
