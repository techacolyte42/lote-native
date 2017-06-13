import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Body, Right, Left, Item, Input, Form, Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Header } from './common';
import config from '../../../config/config.js';

const apiBaseUrl = config.API_BASE_URL;
//header is not showing up

class Contacts extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Contacts',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  constructor (props) {
    super(props);
    this.state = {
      email: ''

  }
    this.chatHistory = this.chatHistory.bind(this);
    this.handleClickContact = this.handleClickContact.bind(this);
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleClickAndChatNav = this.handleClickAndChatNav.bind(this);
  }

  chatHistory() {
    console.log('clicked in chat history')
    return this.props.navigation.navigate('ChatHistory');
  }

  handleClickContact(receiver) {
    this.props.setActiveContact(receiver);
  }

  handleClickAndChatNav(e) {
    console.log('clicked?????')
    this.handleClickContact(e);
    this.chatHistory();
  }

  handleEmailInput(e) {
    this.setState({
      email: e
    });
  }

  handleSubmitContact (e) {
  e.preventDefault();
   axios.post(`${apiBaseUrl}/profiles/${this.props.profile.id}/contacts`, {
    // axios.post(`http://localhost:3000/api/profiles/${this.props.profile.id}/contacts`, {
      senderId: this.props.profile.id,
      receiverEmail: this.state.email
    })
    .then((res) => {
      this.props.getContacts(this.props.profile.id);
    })
    .catch((err) => {
      console.log (err);
    });

    this.setState({email:''})

  }

  render() {

    return (
      <Container>

          <Header headerText='Contacts' />

        <Content>
          <List>
            { this.props.contacts.map( (contact)=>{
              return (<ListItem key={ contact.receiver.id } onPress={ () => this.handleClickAndChatNav(contact.receiver) }>
                <Text >{ contact.receiver.email }</Text>
              </ListItem>)
            }) }
          </List>
        </Content>
          
        <Item regular>
          <Input ref="email" onChangeText={ this.handleEmailInput } value={ this.state.email } placeholder="Enter a contact"/>
        </Item>

        <View><Text></Text></View>

        <Button block primary onPress={ this.handleSubmitContact }>
          <Text>Submit</Text>
        </Button>
      
      </Container>
      
    );
 }
}

export default Contacts;
